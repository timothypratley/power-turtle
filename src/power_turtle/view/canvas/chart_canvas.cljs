(ns power-turtle.view.canvas.chart-canvas
  (:require
    [cljsjs.chartjs]
    [reagent.core :as reagent]
    [reagent.dom :as dom]))

;;(power-turtle.view.canvas.chart-canvas/chart (map #(* % %) (range 10)))

(defonce chart-data
  (atom {:datasets [{:label "Turtles"
                     :data [10 2 21]}]}))

;; TODO: maybe just svg it huh?

(defn p [ys]
  (mapv (fn [x y] {:x x :y y}) (range) ys))

(defn linize [d]
  (update-in d [:datasets 0 :data] p))

(defn chart [ys]
  (swap! chart-data assoc-in [:datasets 0 :data] ys)
  nil)

(defn cc [r]
  (let [c (atom nil)]
    (add-watch r :watch-r
               (fn [k r a b]
                 (when @c
                   (set! (.-data @c) (clj->js (linize b)))
                   (.update @c))))
    (reagent/create-class
      {:display-name "chart"
       :component-did-mount
       (defn chart-did-mount [this]
         (reset! c
                 (js/Chart.
                   (dom/dom-node this)
                   (clj->js
                     {:type "scatter"
                      :data (linize @r)
                      :options {:scales {:xAxes [{:type "linear"
                                                  :position "bottom"}]
                                         :yAxes [{:ticks {:beginAtZero true}}]}}}))))
       :reagent-render
       (fn chart-render []
         [:canvas {:style {:width "100%"
                           :height "100%"}}])})))

(defn chart-canvas []
  [:div
   [cc chart-data]])
