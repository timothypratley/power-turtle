(ns power-turtle.translations
  (:require [cban.core :as cban]
            [clojure.string :as string]))

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
