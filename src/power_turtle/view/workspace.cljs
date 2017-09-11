(ns power-turtle.view.workspace
  (:require
    [power-turtle.view.turtle-canvas :as turtle-canvas]
    [power-turtle.view.bocko-canvas :as bocko-canvas]
    [power-turtle.view.help :as help]
    [power-turtle.view.html-hook :as html-hook]
    [power-turtle.view.repl :as repl]
    [power-turtle.view.toolbar :as toolbar]))

(defn workspace [lesson-id]
  [:div
   [toolbar/toolbar]
   [:br]
   [:div#main.well
    [:div#space

     (cond
       (#{"1" "2" "3"} lesson-id) [turtle-canvas/turtle-canvas]
       (#{"4"} lesson-id) [bocko-canvas/bocko-canvas]
       :else [html-hook/html-space])]
    [repl/repl]]
   [:br]
   [help/help-tips]])

