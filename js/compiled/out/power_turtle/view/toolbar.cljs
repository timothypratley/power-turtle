(ns power-turtle.view.toolbar
  (:require
    [power-turtle.model :as model]
    [reagent.core :as reagent]
    [reanimated.core :as anim]))

(def actions
  (reagent/atom []))

(defn action [k f]
  [:button
   {:on-click #(f)}
   (name k)])

(defn browser-map [& ss]
  (zipmap
    [:-ms-transform :-moz-transform :-webkit-transform :transform]
    (repeat (apply str ss))))

(defn flipper [tag attrs & children]
  (let [flip-spring (anim/spring model/flip)]
    (fn a-flipper [tag attrs]
      [:div
       (into
         [tag
          (merge-with
            merge
            {:style (browser-map "rotateY(" (+ 90 @flip-spring) "deg)")}
            attrs)]
         children)])))

(defn toolbar []
  [:div
   [flipper :img {:src "turtle.jpg" :style {:float "left"}}]
   [flipper :img {:src "clojure_logo.png" :style {:float "right"}}]
   [:div
    (for [[k f] @actions]
      ^{:key k}
      [action k f])]])
