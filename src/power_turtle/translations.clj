(ns power-turtle.translations
  (:require [cban.core :as cban]
            [clojure.string :as string]
            [clojure.java.io :as io]))

(def translation-maps
  [;;"clojure-core-translations-map.edn"
   ;;"clojure-turtle-translations-map.edn"
   "power-turtle-translations-map.edn"])

(defmacro require-translations []
  (str
    "(require "
    (string/join " "
      (mapcat cban/refer-from-translation-map translation-maps))
    ")"))
