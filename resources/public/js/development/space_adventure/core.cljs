(ns space-adventure.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def size {:x 550 :y 550})
(def spaceship-size {:x 28 :y 55})

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state.
  {:x 78
   :y 40
   :laser-shots []})

(defn draw-triangle [x y]
  (let [size-x (:x spaceship-size)
        size-y (:y spaceship-size)
        x1 (- x size-x)
        y1 (+ y size-y)
        x2 x
        y2 y
        x3 (+ x size-x)
        y3 (+ y size-y)]
    (q/triangle x1 y1 x2 y2 x3 y3)))

(defn draw-laser-shots [laser-shots]
  (doseq [coors laser-shots]
    (q/point (first coors) (second coors))))

(defn update-laser-shots [shots shot]
  (let [[x y] shot]
    (if (> y 0)
      (conj shots [x (- y 16)])
      shots)))

(defn update-state [state]
  (let [laser-shots (:laser-shots state)]
    ;; (println laser-shots)
    (if (not (empty? laser-shots))
      (assoc state :laser-shots (reduce update-laser-shots [] laser-shots))
      (identity state))))

(defn draw-state [state]
  (let [x (:x state)
        y (:y state)
        laser-shots (:laser-shots state)]
    (q/background 245)
    (draw-triangle x y)
    (if (not (empty? laser-shots))
      (draw-laser-shots laser-shots))))

(defn mouse-moved [state event]
  (-> state
      (assoc :x (:x event) :y (:y event))))

(defn in-box [x y]
  "Keeps the co-ordinates inside the box."
  (let [x-min (+ 0 (:x spaceship-size))
        x-max (- (:x size) (:x spaceship-size))
        y-min 0
        y-max (- (:y size) (:y spaceship-size))]
    [(max (min x x-max) x-min) (max (min y y-max) y-min)]))

(defn move [direction state]
  (let [speed 15
        x0 (:x state)
        y0 (:y state)
        [x1 y1] (case direction
                  :left [(- x0 speed) y0]
                  :right [(+ x0 speed) y0]
                  :up [x0 (- y0 speed)]
                  :down [x0 (+ y0 speed)]
                  [x0 y0])
        [x y] (in-box x1 y1)]
    (assoc state :x x :y y)))

(defn shoot [state]
  (let [x (:x state)
        y (:y state)
        laser-shots (:laser-shots state)]
    (assoc state :laser-shots (conj laser-shots [x y]))))

(defn handle-key-press [state event]
  (if (= (:key-code event) 32)
    (shoot state)
    (move (:key event) state)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch space-adventure
    :host "space-adventure"
    :size [(:x size)  (:y size)]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ;; :mouse-moved mouse-moved
    :key-pressed handle-key-press
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
