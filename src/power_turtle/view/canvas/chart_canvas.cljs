(ns power-turtle.view.canvas.chart-canvas
  (:require
    [power-turtle.resize-listener :as resize]
    [power-turtle.api.chart :as api]
    [cljsjs.chartjs]
    [reagent.core :as reagent]
    [reagent.dom :as dom]))

(defn chart-component [chart-data-ref]
  (let [chart-obj (atom nil)
        elem (atom nil)
        create #(reset! chart-obj (js/Chart. @elem (clj->js @chart-data-ref)))]
    (add-watch chart-data-ref :watch-chart-data-ref
               (fn watch-chart-data-ref [k r a b]
                 (when @chart-obj
                   (.destroy @chart-obj)
                   (create))))
    (reagent/create-class
      {:display-name "chart"
       :component-did-mount
       (fn chart-did-mount [this]
         (reset! elem (dom/dom-node this))
         (create))
       :component-will-unmount
       (fn chart-will-unmount []
         (when @chart-obj
           (.destroy @chart-obj)
           (reset! chart-obj nil)))
       :reagent-render
       (fn chart-render []
         @resize/window-width
         [:canvas {:style {:width "100%"
                           :height "100%"}}])})))

(defn chart-canvas []
  [:div
   [chart-component api/chart-data]])
