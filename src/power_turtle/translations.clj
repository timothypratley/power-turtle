(ns power-turtle.translations
  (:require
    [cban.core :as cban]
    [clojure.java.io :as io])
  (:import
    (java.io File)))

(def translations
  (cban/read-translation-maps
    ["clojure-core-translations-map.edn"
     "power-turtle-translations-map.edn"]))

(defmacro translation-map []
  (list 'quote translations))

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

(defn write-user-namespace [out-path]
  (println "WRITE-USER-NAMESPACE:" out-path)
  (spit out-path (cban/generate-user-namespace translations)))
