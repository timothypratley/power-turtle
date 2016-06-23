(ns power-turtle.lang.english)

;; manually copy this clj file to the resources, I don't know why

(defmacro all [& body]
  `(fn [] ~@body))

;; TODO: override core or not?
(defmacro repeat [& body]
  `(repeatedly ~@body))
