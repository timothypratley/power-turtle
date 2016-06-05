(ns power-turtle.power
  (:require [clojure-turtle.core
             :refer [forward left right clean home]
             :refer-macros [all repeat]]))

(def octagon
  (all (repeat 8 (all (forward 30) (right 45)))))

(def octacircle
  (all
    (repeat
      36
      (all
        (left 10)
        (octagon)))))

(defn init []
  (home)
  (clean)
  (octagon)
  (forward 20)
  (right 70)
  (forward 50))

(def actions
  {'<- (all (left 90))
   '-> (all (right 90))
   '<-. (all (forward 10) (left 10))
   '.-> (all (forward 10) (right 10))
   'clean clean
   'home home
   'octagon octagon
   'octacircle octacircle})
