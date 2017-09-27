(ns power-turtle.view.canvas.html-canvas
  (:require
    [reagent.core :as reagent]))

(def component
  (reagent/atom nil))

(defn html-space []
  [:div
   [:h3 "HTML"]
   [:hr]
   @component])