(ns power-turtle.subs
  (:require
    [re-frame.core :refer [register-sub]]
    [clairvoyant.core :refer-macros [trace-forms]]
    [re-frame-tracer.core :refer [tracer]])
  (:require-macros
    [reagent.ratom :refer [reaction]]))

;; (trace-forms {:tracer (tracer :color "brown")}

(register-sub
  :route
  (fn [db [_]]
    (reaction (get-in @db [:route]))))

(register-sub
  :get-console-verbose
  (fn [db [_]]
    (reaction (get-in @db [:options :verbose]))))

(register-sub
  :current-language
  (fn [db [_]]
    (reaction (get-in @db [:current-language]))))

(register-sub
  :flip
  (fn [db [_]]
    (reaction (get-in @db [:flip]))))

;; )