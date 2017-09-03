(ns power-turtle.view.title
  (:require
    [reanimated.core :as anim]
    [re-frame.core :refer [dispatch subscribe]]
    [reagent.core :as reagent])
  (:require-macros
    [power-turtle.translations :as translations]))

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

;; TODO: does this belong here?
(def lessons
  (reagent/atom
    (translations/lessons)))

(def pos
  (reagent/atom [0 1 0]))

(defn make-html [s]
  (.makeHtml
    (doto (js/showdown.Converter.)
      (.setFlavor "github"))
    s))

(defn markup [s]
  [:div
   {:dangerouslySetInnerHTML
    {:__html (make-html s)}}])

(defn lesson-slides []
  [:div
   {:style {:text-align "left"
            :display "flex"
            :flex-direction "row"
            :flex-wrap "nowrap"
            :justify-content "space-between"}}
   (let [enabled (pos? (get @pos 2))]
     [:div
      [:button
       {:disabled (not enabled)
        :on-click
        (fn [e]
          (swap! pos update 2 dec))}
       (if enabled "<" "-")]])
   [:div
    {:style {:width "90%"
             :height "200px"}}
    [markup (get-in @lessons @pos)]]
   (let [enabled (< (inc (get @pos 2))
                    (count (get-in @lessons (take 2 @pos))))]
     [:div
      [:button
       {:disabled (not enabled)
        :on-click
        (fn [e]
          (swap! pos update 2 inc))}
       (if enabled ">" "-")]])])

(defn title []
  [:div
   [:h1 "Power Turtle"]
   [lesson-slides]
   [flipper :img {:src "turtle.jpg" :style {:float "left"}}]
   [flipper :img {:src "clojure_logo.png" :style {:float "right"}}]])
