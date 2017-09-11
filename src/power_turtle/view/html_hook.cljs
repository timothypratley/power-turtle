(ns power-turtle.view.html-hook
  (:require
    [reagent.core :as reagent]))

(def component
  (reagent/atom nil))

(defn html-space []
  [:div
   {:style {:width "600px"
            :height "640px"
            :border "1px solid lightgrey"}}
   [:h3 "HTML"]
   [:hr]
   @component])