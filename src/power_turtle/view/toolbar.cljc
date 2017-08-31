(ns power-turtle.view.toolbar
  (:require
    [reagent.core :as reagent]))


(def actions
  (reagent/atom []))

(defn action [k f]
  [:button
   {:on-click #(f)}
   (name k)])

(defn toolbar []
  [:div
   (for [[k f] @actions]
     ^{:key k}
     [action k f])])
