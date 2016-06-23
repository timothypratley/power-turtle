(ns power-turtle.repl
  (:require
    [power-turtle.lang.korean :as korean]
    [power-turtle.lang.thamil :as thamil]
    [power-turtle.lang.korean :as spanish]
    [power-turtle.replumb-proxy :as replumb-proxy]
    [re-console.core :as console]
    [re-frame.core :refer [dispatch subscribe]]
    [cljsjs.codemirror]
    [cljsjs.codemirror.addon.edit.matchbrackets]
    [cljsjs.codemirror.addon.runmode.runmode]
    [cljsjs.codemirror.addon.runmode.colorize]
    [cljsjs.codemirror.mode.clojure]
    [re-console.parinfer :as parinfer]
    [parinfer.codemirror.mode.clojure.clojure-parinfer])
  (:require-macros
    [power-turtle.pot]
    [power-turtle.lang.korean :refer [밝히다 함수를정의 모든 반복]]
    [power-turtle.lang.indonesian]))

(defonce console-key :cljs-console)

(def src-paths
  ["/js/compiled/out"])
(def replumb-opts
  (replumb-proxy/replumb-options false src-paths))

(defn toggle-verbose []
  (let [verbose? (subscribe [:get-console-verbose])]
    (fn []
      [:button
       {:on-click
        (fn [e]
          (dispatch [:toggle-verbose])
          (dispatch [:set-console-eval-opts console-key
                     (replumb-proxy/eval-opts
                       (replumb-proxy/replumb-options (not @verbose?) src-paths))]))}
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
                         [pattern 무늬]]]])

(def indonesian-words
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
                         [pattern 무늬]]]])

(def languages
  [["한국어" korean-words]
   ;;["bahasa Indonesia" indonesian-words]
   ;;["தமிழ்" thamil/fns]
   ;;["Español" spanish/fns]
   ;;["English" []]
   ])

;; this works for turtle, even though the eval returns failed o_O
;; also they must be in separate evals, do doesn't work
;; TODO: How to preserve metadata like docstrings???
(def preambles
  [#_"(ns 무.무
      (:require-macros [power-turtle.lang.korean :refer [밝히다 함수를정의 모든 반복]]))"
   "(require-macros '[power-turtle.lang.korean :refer [밝히다 함수를정의 모든 반복]])"
   ;;"(require-macros '[power-turtle.lang.indonesian :refer [밝히다 함수를정의 모든 반복]])"
   #_"(do
      (require '[clojure-turtle.core])
      (require-macros '[power-turtle.pot :refer [import-vars]])
      (import-vars clojure-turtle.core/forward))"
   (pr-str
     `(do
        ~@(for [[language-name language] languages
                [ns translations] language
                [sym translation] translations]
            `(def ~translation
               ;; TODO:  ~(cljs.repl/doc (symbol ns sym))
               ~(symbol ns sym)))))])

(defn do-preambles []
  (doseq [preamble preambles]
    (replumb-proxy/read-eval-call
      ;; TODO: why do we get a warning for the defs?
      (assoc replumb-opts :warning-as-error false)
      (fn [{:keys [result]}]
        (println "***" result))
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
      {:eval-opts (replumb-proxy/eval-opts replumb-opts)
       :mode-line? true}]
     [buttons]]))
