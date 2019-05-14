(ns power-turtle.api.html
  #?(:cljs
     (:require
       [power-turtle.view.toolbar :as toolbar]
       [power-turtle.view.canvas.html-canvas :as html-canvas])))

(defn add-action [label f]
  #?(:cljs (swap! toolbar/actions conj [label f]))
  nil)

(defn html [x]
  #?(:cljs (reset! html-canvas/component x))
  nil)
