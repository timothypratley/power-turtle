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

;; TODO: can this be pre-run?
(defmacro rr []
  (read-string
    (cban/generate-require-statement translations)))

(defmacro translation-map []
  translations)

(defn load-lessons [^File dir]
  (try
    (into
      (sorted-map)
      (for [^File f (.listFiles dir)]
        [(.getName f)
         (cond
           (.isFile f) (slurp f)
           (.isDirectory f) (load-lessons f))]))
    (catch Exception ex
      [["Error" [(with-out-str (println ex))]]])))

;;TODO: kinda sux because does not hot reload
(defmacro lessons []
  (load-lessons (io/file (io/resource "public/lessons"))))
