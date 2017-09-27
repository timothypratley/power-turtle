(ns power-turtle.api
  (:require
    ;; TODO: make api namespaces
    #?(:cljs [power-turtle.view.toolbar :as toolbar])
    #?(:cljs [power-turtle.view.canvas.html-canvas :as html-canvas])
    [power-turtle.view.canvas.raster-api :as raster-api]
    [clojure-turtle.core :as turtle :refer [home clean]]
    [clojure-turtle.macros :refer [all repeat]]))

(defn turtle-state-string [a]
  (select-keys @a [:x :y :angle]))

;; TODO: support multi-arity?? copy docstrings??
;; TODO: why does multi-arity error, but single warn?
(defn forward [x]
  (turtle-state-string (turtle/forward x)))
(defn back [x]
  (turtle-state-string (turtle/back x)))
(defn left [x]
  (turtle-state-string (turtle/left x)))
(defn right [x]
  (turtle-state-string (turtle/right x)))

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
  (turtle/color [255 0 0]))

(defn green []
  (turtle/color [0 255 0]))

(defn blue []
  (turtle/color [0 0 255]))

(defn init []
  (home)
  (clean))

(defn color [x]
  (raster-api/color x)
  (turtle/color x))

(defn add-action [label f]
  #?(:cljs (swap! toolbar/actions conj [label f])))

#?(:cljs
   (reset! toolbar/actions
           [['<- (all (left 45))]
            ['-> (all (right 45))]
            ["^" (all (forward 50))]
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
