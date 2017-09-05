(ns power-turtle.view.lesson
  (:require
    [power-turtle.view.workspace :as workspace]
    [cljsjs.showdown]
    [reagent.core :as reagent]
    [soda-ash.core :as sa])
  (:require-macros
    [power-turtle.translations :as translations]))

(def lessons
  (reagent/atom
    (translations/lessons)))

(defonce pos
  (reagent/atom [0 1 0]))

(defn make-html [s]
  (.makeHtml
    (doto (js/showdown.Converter.)
      (.setFlavor "github"))
    s))

(defn render-markdown [s]
  [:div
   {:dangerouslySetInnerHTML
    {:__html (make-html s)}}])

(defn lesson-slides []
  [sa/Segment
   {:style {:text-align "left"}}
   [:div
    {:style {:display "flex"
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
              :min-height "200px"}}
     [render-markdown (get-in @lessons @pos)]]
    (let [enabled (< (inc (get @pos 2))
                     (count (get-in @lessons (take 2 @pos))))]
      [:div
       [:button
        {:disabled (not enabled)
         :on-click
         (fn [e]
           (swap! pos update 2 inc))}
        (if enabled ">" "-")]])]])

(defn lesson-view [{:keys [id]}]
  (reset! pos [(try (dec (int id)) (catch :default ex 0)) 1 0])
  [:div
   [lesson-slides]
   [workspace/workspace]])
