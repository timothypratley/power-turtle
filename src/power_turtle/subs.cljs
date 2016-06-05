(ns power-turtle.subs
  (:require
    [re-frame.core :refer [register-sub]]
    [clairvoyant.core :refer-macros [trace-forms]]
    [re-frame-tracer.core :refer [tracer]])
  (:require-macros
    [reagent.ratom :refer [reaction]]))

;; (trace-forms {:tracer (tracer :color "brown")}

(register-sub
  :get-console-verbose
  (fn [db [_]]
    (reaction (get-in @db [:options :verbose]))))

;; )