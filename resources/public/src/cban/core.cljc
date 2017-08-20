(ns cban.core
  (:require [clojure.string :as string]
            [clojure.edn :as edn]
            [clojure.java.io :as io]))

(defn macro? [{:keys [macro special-form]}]
  (or macro special-form))

;; TODO: this (not quite) duplicates lein-cban function...
;; could have lein-cban as a dep... but is there a better way?
(defn destination-ns [language source-ns]
  ;; TODO: can we not use dashes?
  (str "cban."
       (string/replace source-ns "." "-")
       "-"
       language))

(defn generate-refer [translation-map]
  (string/join
    "\n"
    (for [[language namespaces] translation-map
          [source-ns translations] namespaces]
      ;; TODO: Warnings?
      (let [valid (for [[existing translation] translations
                        :when (and existing (:alias translation))]
                    translation)
            non-macros (->> valid
                            (remove macro?)
                            (map :alias))
            macros (->> valid
                        (filter macro?)
                        (map :alias))]
        (str
          "(require '[" (destination-ns language source-ns)
          " :refer [" (string/join " " non-macros) "]"
          " :refer-macros [" (string/join " " macros) "]])\n")))))

(defn refer-from-translation-map [s]
  (-> s
      (io/resource)
      (slurp)
      (edn/read-string)
      (generate-refer)))
