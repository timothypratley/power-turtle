(ns power-turtle.handlers
  (:require
    [clairvoyant.core :refer-macros [trace-forms]]
    [re-frame.core :refer [register-handler]]
    [re-frame-tracer.core :refer [tracer]]))

;; (trace-forms {:tracer (tracer :color "green")}

(register-handler
  :init-options
  (fn init-verbose [db [_]]
    (assoc-in db [:options :verbose] false)))

(register-handler
  :toggle-verbose
  (fn toggle-verbose [db [_]]
    (update-in db [:options :verbose] not)))

(register-handler
  :current-language
  (fn current-language [db [_ language]]
    (assoc db :current-language language)))

(register-handler
  :flip
  (fn flip [db [_ v]]
    (if v
      (assoc db :flip v)
      (update db :flip -))))

(register-handler
  :route
  (fn route [db [_ route-name]]
    (assoc db :route route-name)))

;;)