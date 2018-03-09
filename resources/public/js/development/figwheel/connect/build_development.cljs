(ns figwheel.connect.build-development (:require [figwheel.client] [space_adventure.core] [figwheel.client.utils]))
(figwheel.client/start {:build-id "development", :websocket-url "ws://localhost:3449/figwheel-ws"})

