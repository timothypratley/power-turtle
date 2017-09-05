(ns power-turtle.view.workspace
  (:require [power-turtle.view.canvas :as canvas]
            [power-turtle.view.help :as help]
            [power-turtle.view.html-hook :as html-hook]
            [power-turtle.view.repl :as repl]
            [power-turtle.view.toolbar :as toolbar]))

(defn workspace []
  [:div
   [toolbar/toolbar]
   [:div
    {:style {:width "60%"
             :margin "0 auto"}}
    @html-hook/component]
   [:br]
   [:div#main.well
    [:div]
    [canvas/turtle-canvas]
    [repl/repl]]
   [help/help-tips]])

