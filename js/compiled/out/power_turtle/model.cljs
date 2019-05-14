(ns power-turtle.model
  (:require [reagent.core :as reagent]))

(defonce current-language
  (reagent/atom "en"))

(defonce flip
  (reagent/atom 90))