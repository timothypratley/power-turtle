(ns power-turtle.handlers
  (:require
    [re-frame.core :refer [reg-event-db]]
    [clairvoyant.core :refer-macros [trace-forms]]
    [re-frame-tracer.core :refer [tracer]]))

;; (trace-forms {:tracer (tracer :color "green")}

(reg-event-db
  :init-options
  (fn init-verbose [db [_]]
    (assoc-in db [:options :verbose] false)))

(reg-event-db
  :toggle-verbose
  (fn toggle-verbose [db [_]]
    (update-in db [:options :verbose] not)))

(reg-event-db
  :current-language
  (fn current-language [db [_ language]]
    (assoc-in db [:current-language] language)))

(reg-event-db
  :flip
  (fn flip [db [_ v]]
    (if v
      (assoc-in db [:flip] v)
      (update db :flip -))))

;;)