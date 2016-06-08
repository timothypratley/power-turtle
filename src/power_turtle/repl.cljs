(ns power-turtle.repl
  (:require
    [power-turtle.replumb-proxy :as replumb-proxy]
    [re-console.core :as console]
    [re-frame.core :refer [dispatch subscribe]]
    [cljsjs.codemirror]
    [cljsjs.codemirror.addon.edit.matchbrackets]
    [cljsjs.codemirror.addon.runmode.runmode]
    [cljsjs.codemirror.addon.runmode.colorize]
    [cljsjs.codemirror.mode.clojure]
    [re-console.parinfer :as parinfer]
    [parinfer.codemirror.mode.clojure.clojure-parinfer]))

(defonce console-key :cljs-console)

(defn toggle-verbose []
  (let [verbose? (subscribe [:get-console-verbose])]
    (fn []
      [:button
       {:on-click
        (fn [e]
          (dispatch [:toggle-verbose])
          (dispatch [:set-console-eval-opts console-key
                     (replumb-proxy/eval-opts (not @verbose?) ["/js/compiled/out"])]))}
       "Verbose is " [:strong (if (false? @verbose?) "false" "true")]])))

(defn toggle-parinfer []
  (let [mode (subscribe [:get-console-mode console-key])]
    (fn []
      [:button
       {:on-click #(let [new-mode (if (= @mode :none) :indent-mode :none)]
                    (dispatch [:set-console-mode console-key new-mode]))}
       "Paredit is " [:strong (name @mode)]])))

(def korean-words
  '[[clojure-turtle.core [[forward 앞으로]
                          [back 뒤로]
                          [left 왼쪽]
                          [right 권리]
                          [color 색]
                          [home 집]
                          [clean 깨끗한]
                          [penup 펜까지]
                          [pendown 펜다운]
                          [start-fill 채우기시작]
                          [end-fill 최종채우기]
                          [setxy 위치]
                          [setheading 표제]
                          [wait 기다림]
                          [draw-turtle-commands 거북이명령을그릴]]]
    [power-turtle.power [[html 웹페이지]
                         [add-action 작업을추가]
                         [red 빨간]
                         [green 녹색]
                         [blue 푸른]
                         [octagon 팔각형]
                         [pattern 무늬]]]
    ;; TODO: use defmacro to wrap macros and special forms
    ;;[cljs.core [[def 데프]]]
    [clojure.set [[union 노동조합]
                  [difference 차이]]]])

(def languages
  [korean-words])

;; this works for turtle, even though the eval returns failed o_O
;; also they must be in separate evals, do doesn't work
;; TODO: How to preserve metadata like docstrings???
(def preambles
  (concat
    (for [[ns words] korean-words]
      (pr-str
        `(~'require '[~ns :refer [~@(map first words)]])))
    [(pr-str
       `(do
          ~@(for [language languages
                  [ns translations] language
                  [sym translation] translations]
              `(def ~translation ~(symbol ns sym)))))]))

#_(def preamble
    (pr-str
      '(def right clojure-turtle.core/right)))

(def opts
  (replumb-proxy/eval-opts false ["/js/compiled/out"]))

(defn do-preambles []
  (doseq [preamble preambles]
    (replumb-proxy/read-eval-call
      opts
      (fn [x]
        (prn "***" x))
      preamble)))

(defn fire-preamble []
  [:button
   {:on-click #(do-preambles)}
   "Preamble"])

(defn buttons []
  [:div.buttons-container
   [toggle-verbose]
   [toggle-parinfer]
   [fire-preamble]])

(dispatch [:init-options])

(defn repl []
  (do-preambles)
  (fn []
    [:div#repl
     [console/console console-key
      {:eval-opts opts
       :mode-line? true}]
     [buttons]]))
