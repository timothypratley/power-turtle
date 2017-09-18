(ns power-turtle.view.workspace
  (:require
    [power-turtle.view.canvas.bocko-canvas :as bocko-canvas]
    [power-turtle.view.canvas.html-hook :as html-hook]
    [power-turtle.view.canvas.quil-canvas :as quil-canvas]
    [power-turtle.view.canvas.turtle-canvas :as turtle-canvas]
    [power-turtle.view.help :as help]
    [power-turtle.view.repl :as repl]
    [power-turtle.view.toolbar :as toolbar]))

(defn workspace [lesson-id]
  [:div
   [toolbar/toolbar]
   [:br]
   [:div.main.well
    [:div.space
     ;; TODO: lessons should specify which canvas(es?) to use
     (cond
       (#{"/1" "/2" "/3"} lesson-id) [turtle-canvas/turtle-canvas]
       (#{"/4"} lesson-id) [bocko-canvas/bocko-canvas]
       (#{"/7"} lesson-id) [quil-canvas/quil-canvas]
       :else [html-hook/html-space])]
    [repl/repl]]
   [:br]
   [help/help-tips]])

