(ns power-turtle.handlers
  (:require
    [re-frame.core :refer [register-handler]]
    [clairvoyant.core :refer-macros [trace-forms]]
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
    (assoc-in db [:current-language] language)))

;;)