(ns power-turtle.view.turtle-canvas
  (:require
    [clojure-turtle.core :as turtle]
    [quil.core :as quil]
    [reagent.core :as reagent]
    [reagent.dom :as dom])
  (:require-macros
    [quil.core :refer [with-sketch]]))

(defn turtle-canvas []
  (let [sketch (atom nil)]
    (reagent/create-class
      {:display-name "turtle-canvas"
       :reagent-render
       (fn render-turtle-canvas []
         [:canvas#turtle-canvas
          {:style {:min-width 600
                   :max-width 600}
           :width 600
           :height 640}])
       :component-did-mount
       (fn turtle-canvas-did-mount [this]
         (let [elem (dom/dom-node this)]
           (reset!
             sketch
             (quil/sketch
               :host elem
               :size [(.-width elem) (.-height elem)]
               :setup turtle/setup
               :draw turtle/draw))))
       :component-will-unmount
       (fn turtle-canvas-will-unmount []
         (with-sketch @sketch (quil/exit)))})))
