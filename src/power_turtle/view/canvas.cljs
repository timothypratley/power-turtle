(ns power-turtle.view.canvas
  (:require
    [clojure-turtle.core :as turtle]
    [quil.core :as quil]
    [reagent.core :as reagent]
    [reagent.dom :as dom]))

(defn turtle-canvas []
  (reagent/create-class
    {:display-name "turtle-canvas"
     :reagent-render
     (fn []
       [:canvas#turtle-canvas])
     :component-did-mount
     (fn [this]
       (quil/sketch
         :host (dom/dom-node this)
         :size [640 600]
         :setup (fn []
                  (turtle/setup))
         :draw turtle/draw))}))