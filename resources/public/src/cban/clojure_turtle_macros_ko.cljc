(ns cban.clojure-turtle-macros-ko)

;; This file was generated, do not modify it directly

(defmacro 모든
  [& body]
  `(clojure-turtle.macros/all ~@body))

(defmacro 자꾸
  [& body]
  `(clojure-turtle.macros/repeat ~@body))
