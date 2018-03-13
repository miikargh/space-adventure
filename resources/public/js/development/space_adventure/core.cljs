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
   :laser-shots []
   :asteroids []})

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
  (doseq [shot laser-shots]
    (q/point (:x shot) (:y shot))))

(defn move-laser-shots [shots shot]
  (let [x (:x shot)
        y (:y shot)]
    (if (> y 0)
      (conj shots {:x x :y (- y 16)})
      shots)))

(defn update-laser-shots [state]
  (let [laser-shots (:laser-shots state)]
    (if (not (empty? laser-shots))
      (assoc state :laser-shots (reduce move-laser-shots [] laser-shots))
      (identity state))))

(defn generate-asteroid [state]
  (let [asteroids (:asteroids state)
        new-asteroid {:x (rand (:x size))
                      :y 0
                      :size (+ 10 (rand 95))
                      :speed (+ (rand 5) 1)}]
    (if (and (> (rand) 0.8) (< (count asteroids) 10))
      (assoc state :asteroids (conj asteroids new-asteroid))
      (identity state))))

(defn update-asteroids [state]
  (let [asteroids (:asteroids state)]
    (assoc state :asteroids (map #(assoc % :y (+ (:y %) (:speed %))) asteroids))))

(defn laser-asteroid-coll? [[laser asteroid]]
  "Do the given laser and asteroid collide?"
  (let [x-l (:x laser)
        y-l (:y laser)
        x-a (:x asteroid)
        y-a (:y asteroid)
        rad-a (/ (:size asteroid) 2)]
    (and (<= y-l (+ y-a rad-a))
         (> x-l (- x-a rad-a))
         (< x-l (+ x-a rad-a)))))

(defn laser-hits [state]
  "Checks if laser shots collide with asteroids and destoys the asteroids if so."
  (let [asteroids (:asteroids state)
        lasers (:laser-shots state)
        new-asteroids (reduce (fn [final-asteroids asteroid]
                                (let [laser-asteroids (for [a [asteroid]
                                                            l lasers]
                                                        (vector l a))]
                                  (if (some laser-asteroid-coll? laser-asteroids)
                                    final-asteroids
                                    (conj final-asteroids asteroid))))
                              []
                              asteroids)]
    (if (empty? lasers)
      (identity state)
      (assoc state :asteroids new-asteroids))))

(defn remove-old-asteroids [state]
  "Removes asteroids that are past the screen."
  (let [asteroids (:asteroids state)]
    (assoc state :asteroids (reduce (fn [asteroids asteroid]
                                      (if (< (:y asteroid) (:y size))
                                        (conj asteroids asteroid)
                                        (identity asteroids)))
                                    []
                                    asteroids))))

(defn update-state [state]
  (-> state
      generate-asteroid
      update-asteroids
      remove-old-asteroids
      update-laser-shots
      laser-hits))

(defn draw-asteroids [asteroids]
  (doseq [asteroid asteroids]
    (let [x (:x asteroid)
          y (:y asteroid)
          size (:size asteroid)]
      (q/ellipse x y size size))))

(defn draw-state [state]
  (let [x (:x state)
        y (:y state)
        laser-shots (:laser-shots state)
        asteroids (:asteroids state)]
    (q/background 245)
    (draw-asteroids asteroids)
    (if (not (empty? laser-shots))
      (draw-laser-shots laser-shots))
    (draw-triangle x y)))


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
    (assoc state :laser-shots (conj laser-shots {:x x :y y}))))

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
