(ns power-turtle.power
  (:require
    [clojure-turtle.core
     :refer [forward left right clean home color]
     :refer-macros [all repeat]]
    [reagent.core :as reagent]))

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

;; TODO: put inside reframe
(def actions
  (reagent/atom
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

(defn add-action [label f]
  (swap! actions conj [label f]))

(def ui
  (reagent/atom
    [:div "Hint: try typing " [:strong "(html [:h1 \"Hello World!\"])"]]))

(defn html [x]
  (reset! ui x))