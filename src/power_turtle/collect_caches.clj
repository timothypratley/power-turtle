(ns power-turtle.collect-caches
  (:require
    [clojure.java.io :as io]
    [clojure.string :as string]
    [cognitect.transit :as transit])
  (:import (java.io File)))

(defn collect-caches [caches-dir]
  (into {}
        (for [^File f (file-seq (io/file caches-dir))
              :when (.isFile f)
              :let [filename (.getName f)]
              :when (string/ends-with? filename ".cache.json")
              :let [cache (with-open [in (io/input-stream f)]
                            (transit/read
                              (transit/reader in :json)))]]
          ;; TODO: move macros to $macros ????
          [(symbol (:name cache)) cache])))

(defn -main [caches-dir output-cache-file]
  (println "Collect caches: Started")
  (let [mega-cache (collect-caches caches-dir)]
    (with-open [out (io/output-stream output-cache-file)]
      (transit/write
        (transit/writer out :json)
        mega-cache))
    (println "Collect caches: Done" (count mega-cache) "namespaces")))
