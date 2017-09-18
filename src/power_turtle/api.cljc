(ns power-turtle.api
  (:require
    #?(:cljs [power-turtle.view.toolbar :as toolbar])
    #?(:cljs [power-turtle.view.canvas.html-hook :as html-hook])
    #?(:cljs [power-turtle.view.canvas.bocko-canvas :as bocko])
    [clojure-turtle.core :as turtle :refer [home clean]]
    [clojure-turtle.macros :refer [all repeat]]))

(defn turtle-state-string [a]
  (select-keys @a [:x :y :angle]))

;; TODO: support multi-arity?? copy docstrings??
(defn forward [x]
  (turtle-state-string (turtle/forward x)))
(defn back [x]
  (turtle-state-string (turtle/back x)))
(defn left [x]
  (turtle-state-string (turtle/left x)))
(defn right [x]
  (turtle-state-string (turtle/right x)))

(defn plot [x y]
  (quil.core/rect x y 20 20))

(def forward-right
  (all
    (forward 50)
    (right 45)))

(def forward-left
  (all
    (forward 50)
    (left 45)))

(def octagon
  (all (repeat 8 forward-right)))

(def pattern
  (all (repeat 12 (all (octagon) (right 30)))))

(def red
  (all (turtle/color [255 0 0])))

(def green
  (all (turtle/color [0 255 0])))

(def blue
  (all (turtle/color [0 0 255])))

(defn init []
  (home)
  (clean))

(defn color [x]
  ;;(power-turtle.view.bocko-canvas/color x)
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
  #?(:cljs (reset! html-hook/component x)))
