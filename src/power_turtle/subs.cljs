(ns power-turtle.subs
  (:require
    [re-frame.core :refer [reg-sub-raw]]
    [clairvoyant.core :refer-macros [trace-forms]]
    [re-frame-tracer.core :refer [tracer]])
  (:require-macros
    [reagent.ratom :refer [reaction]]))

;; (trace-forms {:tracer (tracer :color "brown")}

(reg-sub-raw
  :route
  (fn [db [_]]
    (reaction (get-in @db [:route]))))

(reg-sub-raw
  :get-console-verbose
  (fn [db [_]]
    (reaction (get-in @db [:options :verbose]))))

(reg-sub-raw
  :current-language
  (fn [db [_]]
    (reaction (get-in @db [:current-language]))))

(reg-sub-raw
  :flip
  (fn [db [_]]
    (reaction (get-in @db [:flip]))))

;; )