(ns re-console.editor
  (:require [reagent.core :as reagent]
            [re-frame.core :refer [dispatch subscribe dispatch-sync]]
            [re-console.common :as common]
            [re-console.parinfer :as parinfer]
            [cljsjs.codemirror]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.addon.runmode.runmode]
            [cljsjs.codemirror.addon.runmode.colorize]
            [cljsjs.codemirror.mode.clojure]
            [parinfer.codemirror.mode.clojure.clojure-parinfer]))

(defn default-cm-options
  [initial-prompt mode]
  {:lineNumbers false
   :viewportMargin js/Infinity
   :showCursorWhenSelecting true
   :lineWrapping true
   :matchBrackets true
   :autofocus true
   :extraKeys #js {"Shift-Enter" "newlineAndIndent"}
   :value initial-prompt
   :mode (if (= mode :none) "clojure" "clojure-parinfer")})

(def default-cm-handlers
  {:should-go-up
   (fn [source inst]
     (let [pos (.getCursor inst)]
       (= 0 (.-line pos))))

   :should-go-down
   (fn [source inst]
     (let [pos (.getCursor inst)
           last-line (.lastLine inst)]
       (= last-line (.-line pos))))})

(defn handlers [console-key]
  {:add-input    #(dispatch [:add-console-input console-key %1 %2])
   :add-result   #(dispatch [:add-console-result console-key %1 %2])
   :go-up        #(dispatch [:console-go-up console-key %])
   :go-down      #(dispatch [:console-go-down console-key %])
   :clear-items  #(dispatch [:clear-console-items console-key %])
   :set-text     #(dispatch [:console-set-text console-key %1])
   :add-log      #(dispatch [:add-console-log console-key %])})

(defn move-to-end
  [cm]
  (let [last-line (.lastLine cm)
        last-ch (count (.getLine cm last-line))]
    (.setCursor cm last-line last-ch)))

(defn modifying-prompt?
  [inst key]
  (let [pos-to (.getCursor inst "to")
        pos-from (.getCursor inst "from")
        lno (.-line pos-to)
        cno-to (.-ch pos-to)
        cno-from (.-ch pos-from)
        compare-position-fn (if (= 8 key) <= <)
        begin-source (common/beginning-of-source (.getValue inst))
        same-pos (= pos-to pos-from)]
    (and ((complement #{37 38 39 40}) key)
         (zero? lno)
         (or (compare-position-fn cno-to begin-source)
             (and (not same-pos)
                  (compare-position-fn cno-from (dec begin-source)))))))

(defn on-viewport-change [this]
  (fn []
    (let [el (reagent/dom-node this)
          re-console (.-parentElement el)
          box (.-parentElement re-console)]
      (common/scroll-to-el-bottom! box))))

(defn on-change [inst console-key text {:keys [set-text]} mode]
  (let [on-after-change (subscribe [:get-console-on-after-change console-key])
        on-before-change (subscribe [:get-console-on-before-change console-key])]
    (fn [inst evt]
      (when (= :none @mode)
        (let [value (common/source-without-prompt (.getValue inst))]
          (when-not (= value @text)
            (when @on-before-change
              ( @on-before-change inst evt))
            (set-text value)
            (when @on-after-change
              (@on-after-change inst evt))))))))

(defn on-keydown [console-key
                  {:keys [should-go-up should-go-down go-up go-down]}
                  eval-opts]
  (fn [inst evt]
    (if (modifying-prompt? inst (.-keyCode evt))
      (.preventDefault evt)
      (case (.-keyCode evt)
        ;; enter
        13 (let [source (common/source-without-prompt (.getValue inst))]
             (when (and (not (.-shiftKey evt)) ((:should-eval @eval-opts) source))
               (.preventDefault evt)
               ((:evaluate @eval-opts) #(dispatch [:on-eval-complete console-key %]) source)))
        ;; up
        38 (let [source (common/source-without-prompt (.getValue inst))]
             (when (and (not (.-shiftKey evt))
                        (should-go-up source inst))
               (.preventDefault evt)
               (go-up)))
        ;; down
        40 (let [source (common/source-without-prompt (.getValue inst))]
             (when (and (not (.-shiftKey evt))
                        (should-go-down source inst))
               (.preventDefault evt)
               (go-down)))
        :none))))

(defn console-editor
  [console-key text]
  (let [cm (subscribe [:get-console console-key])
        handlers  (merge (handlers console-key) default-cm-handlers)
        eval-opts (subscribe [:get-console-eval-opts console-key])
        mode (subscribe [:get-console-mode console-key])
        on-before-change (subscribe [:get-console-on-before-change console-key])]
    (reagent/create-class
     {:component-did-mount
      (fn [this]
        (let [el (reagent/dom-node this)
              inst (js/CodeMirror.
                    el
                    (clj->js (default-cm-options (str ((:get-prompt @eval-opts)) @text) @mode)))]
          (dispatch-sync [:add-console-instance console-key inst])
          (move-to-end inst)
          (.on inst "viewportChange" (on-viewport-change this))
          (.on inst "change" (on-change inst console-key text handlers mode))
          (.on inst "keydown" (on-keydown console-key handlers eval-opts))
          (parinfer/parinferize! inst console-key)))
      :component-did-update
      (fn [this old-argv]
        (when-not (= @text (common/source-without-prompt (.getValue @cm)))
          (let [cursor (.getCursor @cm)
                line-idx (.-line cursor)
                cursor-idx (.-ch cursor)]
            (.setValue @cm (str ((:get-prompt @eval-opts)) @text))
            (let [current-line (.getLine @cm (min (dec (.lineCount @cm)) line-idx))
                  last-idx (loop [exclude-chars #{\( \[ \{ \) \] \} \space}]
                             (if (seq exclude-chars)
                               (let [char (first exclude-chars)
                                     char-index (.indexOf current-line char cursor-idx)]
                                 (if (= char-index -1)
                                   (recur (rest exclude-chars))
                                   char-index))
                               (count current-line)))]
              (.setCursor @cm line-idx last-idx)))))
      :reagent-render
      (fn []
        @text
        [:div])})))

