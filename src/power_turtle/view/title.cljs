(ns power-turtle.view.title
  (:require
    [reanimated.core :as anim]
    [re-frame.core :refer [dispatch subscribe]]))

(defn browser-map [& ss]
  (zipmap
    [:-ms-transform :-moz-transform :-webkit-transform :transform]
    (repeat (apply str ss))))

(dispatch [:flip 90])

(defn flipper [tag attrs & children]
  (let [flip (subscribe [:flip])
        flip-spring (anim/spring flip)]
    (fn a-flipper [tag attrs]
      [:div
       (into
         [tag
          (merge-with
            merge
            {:style (browser-map "rotateY(" (+ 90 @flip-spring) "deg)")}
            attrs)]
         children)])))

(defn title []
  [:div
   [flipper :img {:src "clojure_logo.png" :style {:float "left"}}]
   [flipper :img {:src "turtle.jpg" :style {:float "right"}}]
   [:h1 "Power Turtle"]])
