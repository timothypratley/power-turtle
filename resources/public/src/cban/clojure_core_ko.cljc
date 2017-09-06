(ns cban.clojure-core-ko)

;; This file was generated, do not modify it directly

(defmacro 배열을얻을
  "fun , "
  [& body]
  `(aget ~@body))

(defmacro 과
  [& body]
  `(clojure.core/and ~@body))

(def 대다
  clojure.core/apply)

(defmacro 세트
  [& body]
  `(aset ~@body))

(def 동무
  clojure.core/assoc)

(def 에연결
  clojure.core/assoc-in)

(defmacro 밝히다
  [& body]
  `(def ~@body))

(defmacro 함수를정의
  [& body]
  `(defn ~@body))

(defmacro 기능
  [& body]
  `(fn ~@body))

(defmacro 만약
  [& body]
  `(if ~@body))

(defmacro 방해
  [& body]
  `(let ~@body))

(def 자꾸
  clojure.core/repeatedly)
