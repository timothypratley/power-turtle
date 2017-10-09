(ns power-turtle.api.turtle
  (:refer-clojure :exclude [repeat])
  (:require
    [power-turtle.api.raster :as raster-api]
    [clojure-turtle.core :as turtle]
    #?(:cljs [power-turtle.view.toolbar :as toolbar])))

(defn repeat
  "Repeatedly calls input function f n times and returns the last result"
  [n f]
  (last (repeatedly n f)))

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

(defn clean []
  (turtle/clean)
  nil)

(defn home []
  (turtle/home)
  nil)

(defn init []
  (home)
  (clean)
  (turtle/color [0 0 0])
  nil)

(defn color [x]
  (if (keyword? x)
    (raster-api/color x)
    (turtle/color x))
  nil)

(defn penup []
  (turtle/penup)
  nil)

(defn pendown []
  (turtle/pendown)
  nil)

(defn setheading [angle]
  (turtle/setheading angle))

(defn setxy [x y]
  (turtle/setxy x y))

(defn start-fill []
  (turtle/start-fill)
  nil)

(defn end-fill []
  (turtle/end-fill)
  nil)

(defn wait [ms]
  (turtle/wait ms))

(defn draw-turtle-commands [turtle]
  (turtle/draw-turtle-commands turtle))

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
            ['clear init]]))
