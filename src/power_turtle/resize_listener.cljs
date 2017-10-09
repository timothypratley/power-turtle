(ns power-turtle.resize-listener
  (:require [reagent.core :as reagent]
            [reagent.dom :as dom]))

(defonce window-width
  (reagent/atom nil))

(defonce ^:private listener
  (js/window.addEventListener
    "resize"
    (fn on-window-resize [e]
      (reset! window-width js/window.innerWidth))))

(defn dims [elem]
  (let [cs (js/getComputedStyle (.-parentNode elem))
        w (js/parseFloat (.-width cs))
        h (js/parseFloat (.-height cs))]
    [w h]))
