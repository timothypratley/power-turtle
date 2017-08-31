(ns power-turtle.view.main
  (:require
    [power-turtle.api]
    [power-turtle.handlers]
    [power-turtle.subs]
    [power-turtle.view.toolbar :as toolbar]
    [power-turtle.view.canvas :as canvas]
    [power-turtle.view.html-hook :as html-hook]
    [power-turtle.view.help :as help]
    [power-turtle.view.repl :as repl]
    [power-turtle.view.title :as title]
    [reagent.core :as reagent]
    [reagent.dom :refer [dom-node]]
    [re-frame.core :refer [subscribe dispatch]]))

(defn page []
  [:div
   [title/title]
   [toolbar/toolbar]
   @html-hook/component
   [:br]
   [:div#main
    [canvas/turtle-canvas]
    [repl/repl]]
   [help/help-tips]])

(enable-console-print!)

(reagent/render-component
  [page]
  (js/document.getElementById "app"))