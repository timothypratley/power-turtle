(ns power-turtle.main
  (:require
    [reagent.core :as reagent :refer [atom]]
    [power-turtle.view :as view]
    [power-turtle.handlers]
    [power-turtle.subs]))

(enable-console-print!)

(reagent/render-component
  [view/page]
  (js/document.getElementById "app"))
