(ns power-turtle.translations
  (:require [cban.core :as cban]
            [clojure.string :as string]
            [clojure.java.io :as io]
            [clojure.tools.reader.edn :as edn])
  (:import (java.io File)))

(def translations
  (cban/read-translation-maps
    ["clojure-core-translations-map.edn"
     ;; TODO: move upstream?  "clojure-turtle-translations-map.edn"
     "power-turtle-translations-map.edn"]))

(defmacro require-translations []
  (cban/generate-require-statement translations))

(defmacro rr []
  (read-string
    (cban/generate-require-statement translations)))

(defmacro translation-map []
  translations)

;;TODO: kinda sux because does not hot reload
(defmacro lessons []
  (try
    (vec
      (for [^File lesson (sort (seq (.listFiles (io/file (io/resource "public/lessons")))))
            :when (.isFile lesson)]
        [(.getName lesson)
         (slurp lesson)]))
    (catch Exception ex
      [["Error" [(with-out-str (println ex))]]])))
