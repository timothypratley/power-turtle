(ns power-turtle.api
  (:require
    #?(:cljs [power-turtle.view.toolbar :as toolbar])
    #?(:cljs [power-turtle.view.html-hook :as html-hook])
    [clojure-turtle.core :refer [left right forward color home clean]]
    [clojure-turtle.macros :refer [all repeat]]))

(def forward-right
  (all
    (forward 50)
    (right 45)))

(def octagon
  (all (repeat 8 forward-right)))

(def pattern
  (all (repeat 12 (all (octagon) (right 30)))))

(def red
  (all (color [255 0 0])))

(def green
  (all (color [0 255 0])))

(def blue
  (all (color [0 0 255])))

(defn init []
  (home)
  (clean))

(defn add-action [label f]
  #?(:cljs (swap! toolbar/actions conj [label f])))

#?(:cljs
   (reset! toolbar/actions
           [['<- (all (left 90))]
            ['-> (all (right 90))]
            ['<-. (all (forward 10) (left 10))]
            ['.-> (all (forward 10) (right 10))]
            ['octagon octagon]
            ['pattern pattern]
            ['red red]
            ['green green]
            ['blue blue]
            ['clean clean]
            ['home home]]))

(defn html [x]
  #?(:cljs (reset! html-hook/component x)))
