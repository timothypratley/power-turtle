(ns power-turtle.resize-listener
  (:require [reagent.core :as reagent]
            [reagent.dom :as dom]))

(defonce window-width
  (reagent/atom nil))

(defn on-window-resize [e]
  (reset! window-width js/window.innerWidth))

(defonce listener
  (js/window.addEventListener "resize" on-window-resize))

(defn dims [elem]
  (let [cs (js/getComputedStyle (.-parentNode elem))
        w (js/parseFloat (.-width cs))
        h (js/parseFloat (.-height cs))]
    [w h]))
