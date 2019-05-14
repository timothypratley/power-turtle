(ns re-console.subs
  (:require
   [re-frame.core :refer [register-sub]]
   [clairvoyant.core :refer-macros [trace-forms]]
   [re-frame-tracer.core :refer [tracer]]
   [re-console.app :as app])
  (:require-macros
   [reagent.ratom :refer [reaction]]))

;; (trace-forms {:tracer (tracer :color "brown")}

(register-sub
 :console-created?
 (fn [db [_ console-key]]
   (reaction (app/console-created? @db console-key))))

(register-sub
 :get-console-items
 (fn [db [_ console-key]]
   (reaction (app/console-items @db console-key))))

(register-sub
 :get-console-mode
 (fn [db [_ console-key]]
   (reaction (app/console-mode @db console-key))))

(register-sub
 :get-console-frame-updated
 (fn [db [_ console-key]]
   (reaction (app/console-frame-updated @db console-key))))

(register-sub
 :get-console-current-text
 (fn [db [_ console-key]]
   (let [idx (reaction (get-in @db [:consoles (name console-key) :hist-pos]))
         history (reaction (get-in @db [:consoles (name console-key) :history]))]
     (reaction (let [items @history
                     pos (- (count items) @idx 1)]
                 (get items pos))))))

(register-sub
 :get-console
 (fn [db [_ console-key]]
   (reaction (app/console @db console-key))))

(register-sub
 :queued-forms-count
 (fn [db [_ console-key]]
   (reaction (count (app/queued-forms @db console-key)))))

(register-sub
 :queued-forms-empty?
 (fn [db [_ console-key]]
   (reaction (not (empty? (app/queued-forms @db console-key))))))

(register-sub
 :get-console-eval-opts
 (fn [db [_ console-key]]
   (reaction (app/console-eval-opts @db console-key))))

(register-sub
 :get-console-on-before-change
 (fn [db [_ console-key]]
   (reaction (app/console-on-before-change @db console-key))))

(register-sub
 :get-console-on-after-change
 (fn [db [_ console-key]]
   (reaction (app/console-on-after-change @db console-key))))

(register-sub
 :get-console-full-text
 (fn [db [_ console-key]]
   (reaction (app/console-full-text @db console-key))))

;; )
