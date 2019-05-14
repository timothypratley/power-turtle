(ns power-turtle.view.canvas.quil-canvas
  (:require
    [power-turtle.resize-listener :as resize]
    [clojure-turtle.core :as turtle]
    [quil.core :as quil]
    [reagent.core :as reagent]
    [reagent.dom :as dom])
  (:require-macros
    [quil.core :refer [with-sketch]]))

(defn quil-canvas []
  (let [sketch (atom nil)
        width (reagent/atom 600)
        height (reagent/atom 640)
        destroy-sketch (fn a-destroy-sketch []
                         (when @sketch
                           (with-sketch @sketch (quil/exit))
                           (reset! sketch nil)))]
    (reagent/create-class
      {:display-name "quil-canvas"
       :reagent-render
       (fn render-quil-canvas []
         @resize/window-width
         [:canvas#turtle-canvas
          {:width @width
           :height @height
           :style {:width "100%"
                   :height "100%"}
           :ref
           (fn quil-canvas-ref [this]
             (when this
               (let [elem (dom/dom-node this)]
                 (let [[w h] (resize/dims elem)]
                   (if (or (not= w @width)
                           (not= h @height))
                     (do
                       (reset! width w)
                       (reset! height h))
                     (do
                       (destroy-sketch)
                       (reset! sketch
                               (quil/sketch
                                 :host elem
                                 :size [w h]
                                 :setup turtle/setup))))))))}])
       :component-will-unmount destroy-sketch})))
