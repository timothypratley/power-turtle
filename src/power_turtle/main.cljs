(ns power-turtle.main
  (:require
    [power-turtle.aaa-init]
    [power-turtle.handlers]
    [power-turtle.subs]
    [power-turtle.api]
    [power-turtle.view.toolbar :as toolbar]
    [power-turtle.view.canvas :as canvas]
    [power-turtle.view.html-hook :as html-hook]
    [power-turtle.view.help :as help]
    [power-turtle.view.repl :as repl]
    [power-turtle.view.navigation :as navigation]
    [power-turtle.view.lesson :as lesson]
    [reagent.core :as reagent]
    [reagent.dom :refer [dom-node]]
    [re-frame.core :refer [subscribe dispatch]]))

(defn page []
  [:div.container
   [navigation/current-page]])

(reagent/render-component [page] (js/document.getElementById "app"))

(defn on-reload [])
