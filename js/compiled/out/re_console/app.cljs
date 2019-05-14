(ns re-console.app)

(def initial-console-state {:items []
                            :hist-pos 0
                            :queued-forms []
                            :history [""]
                            :cm-instance nil
                            :eval-opts {}
                            :mode :none
                            ;; parinfer technical details
                            :frame-updated? false
                            :on-before-change nil
                            :on-after-change nil})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;           Getters           ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn console
  [db k]
  (get-in db [:consoles (name k) :cm-instance]))

(def console-created?
  "Was the console created? Returns a truey or falsey value."
  (comp not nil? console))

(defn console-items
  [db k]
  (get-in db [:consoles (name k) :items]))

(defn console-mode
  [db k]
  (get-in db [:consoles (name k) :mode]))

(defn console-frame-updated
  [db k]
  (get-in db [:consoles (name k) :frame-updated?]))

(defn console-history
  [db k]
  (get-in db [:consoles (name k) :history]))

(defn console-history-pos
  [db k]
  (get-in db [:consoles (name k) :hist-pos]))

(defn queued-forms
  [db k]
  (get-in db [:consoles (name k) :queued-forms]))

(defn console-eval-opts
  [db k]
  (get-in db [:consoles (name k) :eval-opts]))

(defn console-full-text
  [db k]
  (let [items (console-items db k)
        to-str-fn (:to-str-fn (console-eval-opts db k))]
    (apply str (interpose \newline (map (fn [item]
                                          (if-let [text (:text item)]
                                            (str (:ns item) "=> " text)
                                            (to-str-fn (:value item))))
                                        items)))))

(defn console-on-before-change
  [db k]
  (get-in db [:consoles (name k) :on-before-change]))

(defn console-on-after-change
  [db k]
  (get-in db [:consoles (name k) :on-after-change]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;       State modifiers       ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn init-console
  [db k initial-user-state]
  (assoc-in db [:consoles (name k)] (merge initial-console-state initial-user-state)))

(defn add-console-instance
  [db k instance]
  (assoc-in db [:consoles (name k) :cm-instance] instance))

(defn set-console-eval-opts
  [db k eval-opts]
  (assoc-in db [:consoles (name k) :eval-opts] eval-opts))

(defn set-console-mode [db console-key mode]
  (assoc-in db [:consoles (name console-key) :mode] mode))

(defn set-console-frame-updated [db console-key value]
  (assoc-in db [:consoles (name console-key) :frame-updated?] value))

(defn update-console-history
  [db k idx pos text]
  (update-in db [:consoles (name k) :history]
             (fn [current-history]
               (if (= pos 0)
                 (assoc current-history idx text)
                 (filterv seq (conj current-history text))))))

(defn set-console-history-position
  [db k new-pos]
  (assoc-in db [:consoles (name k) :hist-pos] new-pos))

(defn set-console-text
  [db k text]
  (let [history (console-history db k)
        pos (console-history-pos db k)
        idx (- (count history) pos 1)]
    (-> db
        (set-console-history-position k 0)
        (update-console-history k idx pos text))))

(defn clear-console-items
  [db k]
  (-> db
      (assoc-in [:consoles (name k) :items] [])
      (set-console-text k "")))

(defn reset-console-items
  [db k]
  (update-in db [:consoles (name k)]
             (fn [current-state]
               (merge current-state
                      (select-keys initial-console-state [:items :hist-pos :history])))))

(defn add-console-item
  [db k item]
  (update-in db [:consoles (name k) :items] conj item))

(defn add-console-items
  [db k items]
  (update-in db [:consoles (name k) :items] concat items))

(defn add-console-history-item
  [db k item]
  (update-in db [:consoles (name k) :history] conj item))

(defn add-console-input-item
  [db k inum input ns]
  (update-in db [:consoles (name k) :items] conj {:type :input
                                                  :text input
                                                  :num inum
                                                  :ns ns}))

(defn add-console-input
  [db k input ns]
  (let [inum (count (console-history db k))]
    (add-console-input-item db k inum input ns)))

(defn add-console-result
  [db k error? value]
  (update-in db [:consoles (name k) :items] conj {:type (if error? :error :output)
                                                  :value value}))

(defn add-console-log
  [db k item]
  (update-in db [:consoles (name k) :items] conj {:type :log
                                                  :value item}))

(defn console-go-up
  [db k]
  (let [pos (console-history-pos db k)
        len (count (console-history db k))
        new-pos (if (>= pos (dec len))
                  pos
                  (inc pos))]
    (set-console-history-position db k new-pos)))

(defn console-go-down
  [db k]
  (update-in db [:consoles (name k) :hist-pos]
             (fn [pos] (if (<= pos 0)
                         0
                         (dec pos)))))

(defn clear-console-queued-forms
  [db k]
  (-> db
      (assoc-in [:consoles (name k) :queued-forms] [])
      (set-console-text k "")))

(defn set-console-queued-forms
  [db k forms]
  (-> db
      (set-console-text k (first forms))
      (assoc-in [:consoles (name k) :queued-forms] (rest forms))))

(defn drop-first-queued-form
  [db k]
  (update-in db [:consoles (name k) :queued-forms] (partial drop 1)))

(defn set-next-queued-form-if-any
  [db k]
  (if-let [form (first (queued-forms db k))]
    (-> db
        (set-console-text k form)
        (drop-first-queued-form k))
    db))

(defn on-eval-complete
  [db k {:keys [prev-ns source success? result]}]
  (let [db (if (seq source)
             (-> db
                 (set-console-text k source)
                 (set-console-history-position k 0)
                 (add-console-history-item k ""))
             db)]
    (-> db
        (add-console-input k source prev-ns)
        (add-console-result k (not success?) result)
        (set-next-queued-form-if-any k))))

(defn set-console-on-before-change
  [db k on-before-change]
  (assoc-in db [:consoles (name k) :on-before-change] on-before-change))

(defn set-console-on-after-change
  [db k on-after-change]
  (assoc-in db [:consoles (name k) :on-after-change] on-after-change))

