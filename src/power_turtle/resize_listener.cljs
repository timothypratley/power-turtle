(ns power-turtle.resize-listener
  (:require [reagent.core :as reagent]))

(def window-width
  (reagent/atom nil))

(defn on-window-resize [e]
  (reset! window-width js/window.innerWidth))

(defonce listener
  (js/window.addEventListener "resize" on-window-resize))
