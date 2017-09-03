(ns power-turtle.translations
  (:require [cban.core :as cban]
            [clojure.string :as string]
            [clojure.java.io :as io])
  (:import (java.io File)))

(def translations
  (cban/read-translation-maps
    [;;"clojure-core-translations-map.edn"
     ;; TODO: move upstream?  "clojure-turtle-translations-map.edn"
     "power-turtle-translations-map.edn"]))

(defmacro require-translations []
  (str
    "(require "
    (string/join " "
      (cban/generate-refer-clauses translations))
    ")"))

(defmacro translation-map []
  translations)


;;TODO: does this belong here?
;;TODO: kinda sux because does not hot reload
(defmacro lessons []
  (try
    (vec
      (for [^File lesson (seq (.listFiles (io/file (io/resource "lessons"))))
            :when (.isFile lesson)]
        [(.getName lesson)
         (string/split
           (slurp lesson)
           #"\n---\n")]))
    (catch Exception ex
      [["Error" [(with-out-str (println ex))]]])))