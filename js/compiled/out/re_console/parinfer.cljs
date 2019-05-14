(ns re-console.parinfer
  "Glues Parinfer's formatter to a CodeMirror editor"
  (:require [clojure.string :refer [join]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [parinfer.indent-mode :as indent-mode]
            [parinfer.paren-mode :as paren-mode]
            [re-console.common :as common]))

;;; Editor support

(defn update-cursor-fn
  "Correctly position cursor after text that was just typed.
  We need this since reformatting the text can shift things forward past our cursor."
  [console-key]
  (let [cm (subscribe [:get-console console-key])]
    (fn [change]
      (when (= "+input" (.-origin change))
        (let [selection? (.somethingSelected @cm)
              text (join "\n" (.-text change))
              from-x (.. change -from -ch)
              line-no (.. change -from -line)
              line (.getLine @cm line-no)
              insert-x (.indexOf line text from-x)
              after-x (+ insert-x (count text))]
          (cond
            ;; something is selected, don't touch the cursor
            selection?
            nil

            ;; pressing return, keep current position then.
            (= text "\n")
            nil

            ;; only move the semicolon ahead since it can be pushed forward by
            ;; commenting out inferred parens meaning they are immediately
            ;; reinserted behind it.
            (= text ";")
            (.setCursor @cm line-no after-x)

            ;; typed character not found where expected it, we probably prevented it. keep cursor where it was.
            (or (= -1 insert-x)
                (> insert-x from-x))
            (.setCursor @cm line-no from-x)

            :else nil))))))

(defn compute-cursor-dx
  [cursor change]
  (when change
    (let [;; This is a hack for codemirror.
          ;; For some reason codemirror triggers an "+input" change after the
          ;; indent spaces are already applied.  So I modified codemirror to
          ;; label these changes as +indenthack so we can ignore them.
          ignore? (= "+indenthack" (.-origin change))]
      (if ignore?
        0
        (let [start-x (.. change -to -ch)
              new-lines (.. change -text)
              len-last-line (count (last new-lines))
              end-x (if (> (count new-lines) 1)
                      len-last-line
                      (+ len-last-line (.. change -from -ch)))]
          (- end-x start-x))))))

(defn compute-cm-change
  [cm change options prev-state]
  (let [{:keys [start-line end-line num-new-lines]}
        (if change
          {:start-line (.. change -from -line)
           :end-line (inc (.. change -to -line))
           :num-new-lines (alength (.-text change))}

          (let [start (:cursor-line prev-state)
                end (inc start)]
            {:start-line start
             :end-line end
             :num-new-lines (- end start)}))

        lines (for [i (range start-line (+ start-line num-new-lines))]
                (.getLine cm i))]
    {:line-no [start-line end-line]
     :new-line lines}))

(defn fix-text-fn
  "Correctly format the text from the given editor."
  [console-key]
  (let [cm (subscribe [:get-console console-key])
        mode (subscribe [:get-console-mode console-key])
        eval-opts (subscribe [:get-console-eval-opts console-key])
        prev-state (atom nil)]
    (fn [& {:keys [change use-cache?]
            :or {change nil, use-cache? false}}]
      (let [current-text (.getValue @cm)
            selection? (.somethingSelected @cm)
            selections (.listSelections @cm)
            cursor (.getCursor @cm)
            scroller (.getScrollerElement @cm)
            scroll-x (.-scrollLeft scroller)
            scroll-y (.-scrollTop scroller)
            options {:cursor-line (.-line cursor)
                     :cursor-x (.-ch cursor)
                     :cursor-dx (compute-cursor-dx cursor change)}
            new-text (case @mode
                       :indent-mode
                       (let [result (if (and use-cache? @prev-state)
                                      (indent-mode/format-text-change
                                       current-text
                                       @prev-state
                                       (compute-cm-change @cm change options @prev-state)
                                       options)
                                      (indent-mode/format-text current-text options))]
                         (when (:valid? result)
                           (reset! prev-state (:state result)))
                         (:text result))
                       :paren-mode
                       (let [result (paren-mode/format-text current-text options)]
                         (:text result))
                       nil)]

        (dispatch [:console-set-text console-key (common/source-without-prompt new-text)])
        (.setValue @cm (str ((:get-prompt @eval-opts)) (common/source-without-prompt new-text)))

        ;; restore the selection, cursor, and scroll
        ;; since these are reset when overwriting codemirror's value.
        (if selection?
          (.setSelections @cm selections)
          (.setCursor @cm cursor))
        (.scrollTo @cm scroll-x scroll-y)))))

;; NOTE:
;; Text is either updated after a change in text or
;; a cursor movement, but not both.
;; When typing, on-change is called, then on-cursor-activity.
;; So we prevent updating the text twice by using an update flag.

(defn before-change
  "Called before any change is applied to the editor."
  [cm change]
  ;; keep CodeMirror from reacting to a change from "setValue"
  ;; if it is not a new value.
  (when (and (= "setValue" (.-origin change))
             (= (.getValue cm) (join "\n" (.-text change))))
    (.cancel change)))

(defn on-change
  "Called after any change is applied to the editor."
  [console-key]
  (let [fix-text! (fix-text-fn console-key)
        update-cursor! (update-cursor-fn console-key)
        mode (subscribe [:get-console-mode console-key])
        on-before-change (subscribe [:get-console-on-before-change console-key])
        on-after-change (subscribe [:get-console-on-after-change console-key])]
    (fn [inst change]
      (when-not (= :none @mode)
        (when (not= "setValue" (.-origin change))
          (when @on-before-change
            (@on-before-change inst change))
          (fix-text! :change change)
          (update-cursor! change)
          (dispatch-sync [:set-console-frame-updated console-key true])
          (when @on-after-change
              (@on-after-change inst change)))))))

(defn on-cursor-activity
  "Called after the cursor moves in the editor."
  [console-key]
  (let [frame-updated? (subscribe [:get-console-frame-updated console-key])
        fix-text! (fix-text-fn console-key)
        mode (subscribe [:get-console-mode console-key])
        on-before-change (subscribe [:get-console-on-before-change console-key])
        on-after-change (subscribe [:get-console-on-after-change console-key])]
    (fn [inst evt]
      (when-not (= :none @mode)
        (when-not @frame-updated?
          (when @on-before-change
            (@on-before-change inst evt))
          (fix-text!)
          (when @on-after-change
            (@on-after-change inst evt)))
        (dispatch-sync [:set-console-frame-updated console-key false])))))

(defn parinferize!
  "Add parinfer goodness to a codemirror editor"
  [cm console-key]
  (.on cm "change" (on-change console-key))
  (.on cm "beforeChange" before-change))
