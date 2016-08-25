(ns power-turtle.lang.indonesian)

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
