(ns power-turtle.lang.korean)

;; manually copy this clj file to the resources, I don't know why

(def translations
  '[[nil [[def 밝히다]
          [defn 함수를정의]
          [if 만약]]]
    [clojure-turtle.core [[all 모든]
                          [repeat 반복]]]])

;; TODO: why no doc? might need to write a custom help?
(defmacro 밝히다
  "Special Form
  Creates and interns a global var with the name
  of symbol in the current namespace (*ns*) or locates such a var if
  it already exists.  If init is supplied, it is evaluated, and the
  root binding of the var is set to the resulting value.  If init is
  not supplied, the root binding of the var is unaffected.

  Please see http://clojure.org/special_forms#def"
  [& body]
  `(def ~@body))

(defmacro 함수를정의 [& body]
  `(defn ~@body))

(defmacro 만약 [& body]
  `(if ~@body))

(defmacro 모든 [& body]
  `(fn [] ~@body))

(defmacro 반복 [& body]
  `(repeatedly ~@body))


