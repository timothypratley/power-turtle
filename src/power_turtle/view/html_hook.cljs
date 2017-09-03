(ns power-turtle.view.html-hook
  (:require
    [reagent.core :as reagent]))

(def component
  (reagent/atom
    [:small
     "Hint: try typing "
     [:strong "(html [:h1 \"Hello World!\"])"]
     " or "
     [:strong "(앞으로 50)"]]))
