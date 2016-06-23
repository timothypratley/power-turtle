(ns power-turtle.lang.spanish)

;; manually copy this clj file to the resources, I don't know why

(def translations
  '[[nil [[def 밝히다]
          [defn 함수를정의]
          [if 만약]]]
    [clojure-turtle.core [[all 모든]
                          [repeat 반복]]]])

(defmacro 밝히다 [& body]
  `(def ~@body))

(defmacro 함수를정의 [& body]
  `(defn ~@body))

(defmacro 만약 [& body]
  `(if ~@body))

(defmacro 모든 [& body]
  `(fn [] ~@body))

(defmacro 반복 [& body]
  `(repeatedly ~@body))
