(ns power-turtle.view.workspace
  (:require
    [power-turtle.view.canvas.bocko-canvas :as bocko-canvas]
    [power-turtle.view.canvas.html-hook :as html-hook]
    [power-turtle.view.canvas.quil-canvas :as quil-canvas]
    [power-turtle.view.canvas.turtle-canvas :as turtle-canvas]
    [power-turtle.view.help :as help]
    [power-turtle.view.repl :as repl]
    [power-turtle.view.toolbar :as toolbar]
    [reagent.core :as reagent]
    [soda-ash.core :as sa]))

(def canvases
  {"turtle" [turtle-canvas/turtle-canvas]
   "raster" [bocko-canvas/bocko-canvas]
   "quil" [quil-canvas/quil-canvas]
   "html" [html-hook/html-space]})

(def freestyle-canvas
  (reagent/atom "turtle"))

;; TODO: why does clicking on them all break the chooser?
(defn chooser []
  [sa/Form
   (for [k (keys canvases)]
     ^{:key (str "radio-" k)}
     [sa/FormField
      [sa/Radio {:label k
                 :name "canvasChooserGroup"
                 :value k
                 :on-click
                 (fn [e]
                   (reset! freestyle-canvas k))}]])])

(defn workspace [canvas-name]
  [:div
   [toolbar/toolbar]
   (when (not canvas-name)
     [chooser])
   [:br]
   [:div.main.well
    [:div.space
     (get canvases (or canvas-name @freestyle-canvas) [turtle-canvas/turtle-canvas])]
    [repl/repl]]
   [:br]
   [help/help-tips]])
