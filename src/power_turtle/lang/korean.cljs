(ns power-turtle.lang.korean
  (:require-macros
    [power-turtle.lang.korean :refer [밝히다]]
    [power-turtle.lang.macros :refer [expose-language if2 maptemplate]]))

;; TODO: why don't these work?

#_(maptemplate
  (fn [[ns translation]]
    `(do
       ~@(for [[sym translation] translation]
           (str "(defmacro " translation " [& body] (" sym " ~@body))"))))
  [[nil [[def 밝히다]
         [defn 함수를정의]
          [if 만약]]]
    [clojure-turtle.core [[all 모든]
                          [repeat 반복]]]])

;; move to clojure?
#_(prn "zzz" (macroexpand-1
       '(expose-language
          [[nil [[def 밝히다]
                 [defn 함수를정의]
                 [if 만약]]]
           [clojure-turtle.core [[all 모든]
                                 [repeat 반복]]]])))

;;(prn "X" x)


#_(expose-language
  [[nil [[def 밝히다]
         [defn 함수를정의]
         [if 만약]]]
   [clojure-turtle.core [[all 모든]
                         [repeat 반복]]]])
