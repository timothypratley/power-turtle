(ns power-turtle.view.workspace
  (:require
    [power-turtle.view.canvas.chart-canvas :as chart-canvas]
    [power-turtle.view.canvas.html-canvas :as html-canvas]
    [power-turtle.view.canvas.quil-canvas :as quil-canvas]
    [power-turtle.view.canvas.raster-canvas :as raster-canvas]
    [power-turtle.view.canvas.turtle-canvas :as turtle-canvas]
    [power-turtle.view.help :as help]
    [power-turtle.view.repl :as repl]
    [power-turtle.view.toolbar :as toolbar]
    [reagent.core :as reagent]
    [soda-ash.core :as sa]))

(def canvases
  {"turtle" [turtle-canvas/turtle-canvas]
   "raster" [raster-canvas/raster-canvas]
   "quil" [quil-canvas/quil-canvas]
   "chart" [chart-canvas/chart-canvas]
   "html" [html-canvas/html-space]})

(defonce freestyle-canvas
  (reagent/atom "turtle"))

;; TODO: why does clicking on them all break the chooser?
(defn chooser []
  [sa/Select
   {:default-value @freestyle-canvas
    :options (clj->js (for [k (keys canvases)]
                        {:key k
                         :value k
                         :text k}))
    :on-change
    (fn chooser-changed [e d]
      (reset! freestyle-canvas (.-value d)))}])

(defn canvas-repl [canvas-name]
  [:div.main.well
   [:div.space
    (get canvases (or canvas-name @freestyle-canvas)
         [turtle-canvas/turtle-canvas])]
   [repl/repl]])

(defn workspace [canvas-name]
  [:div
   [toolbar/toolbar]
   (when (not canvas-name)
     [:div
      {:style {:text-align "left"}}
      [chooser]])
   [:br]
   [canvas-repl canvas-name]
   [:br]
   [help/help-tips]])
