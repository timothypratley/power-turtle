(ns power-turtle.main
  (:require
    [power-turtle.aaa-init]
    [power-turtle.handlers]
    [power-turtle.subs]
    [power-turtle.api]
    [power-turtle.view.navigation :as navigation]
    [reagent.core :as reagent]))

(defn page []
  [:div.container
   [navigation/current-page]])

(reagent/render-component [page] (js/document.getElementById "app"))

(defn on-reload [])
