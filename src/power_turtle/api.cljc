(ns power-turtle.api
  (:require
    ;; TODO: make api namespaces
    #?(:cljs [power-turtle.view.toolbar :as toolbar])
    #?(:cljs [power-turtle.view.canvas.html-canvas :as html-canvas])
    [power-turtle.view.canvas.raster-api :as raster-api]
    [clojure-turtle.core :as turtle :refer [home clean]]))

;; TODO: wrap clean and home too, for nil

(defn turtle-state-string [a]
  (select-keys @a [:x :y :angle]))

;; TODO: support multi-arity?? copy docstrings??
;; TODO: why does multi-arity error, but single warn?
(defn forward [x]
  (turtle/forward x)
  nil)
(defn back [x]
  (turtle/back x)
  nil)
(defn left [x]
  (turtle/left x)
  nil)
(defn right [x]
  (turtle/right x)
  nil)

(defn forward-right []
  (forward 50)
  (right 45))

(defn forward-left []
  (forward 50)
  (left 45))

(defn octagon []
  (repeat 8 forward-right))

(defn pattern []
  (repeat 12 (fn [] (octagon) (right 30))))

(defn red []
  (turtle/color [255 0 0])
  nil)

(defn green []
  (turtle/color [0 255 0])
  nil)

(defn blue []
  (turtle/color [0 0 255])
  nil)

(defn init []
  (home)
  (clean)
  nil)

(defn color [x]
  (raster-api/color x)
  (turtle/color x)
  nil)

(defn add-action [label f]
  #?(:cljs (swap! toolbar/actions conj [label f])))

#?(:cljs
   (reset! toolbar/actions
           [['<- (fn [] (left 45))]
            ['-> (fn [] (right 45))]
            ["^" (fn [] (forward 50))]
            ['<-. forward-left]
            ['.-> forward-right]
            ['octagon octagon]
            ['pattern pattern]
            ['red red]
            ['green green]
            ['blue blue]
            ['clean clean]
            ['home home]]))

(defn html [x]
  #?(:cljs (reset! html-canvas/component x)))
