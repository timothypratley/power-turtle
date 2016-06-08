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

;; the turtle icon 🐢 does not work as a ns
#_(def preamble
    `(do
       ~@(for [sym '[forward back left right color]]
           `(def ~sym ~(symbol "clojure-turtle.core" sym)))))

;; this works for turtle, even though the eval returns failed o_O
;; also they must be in separate evals, do doesn't work
(def preambles
  [
   (pr-str
     '(require '[clojure.set :refer [union]]))
   (pr-str
     '(require
        '[clojure-turtle.core
          :as turtle
          :refer [forward back left right color
                  home clean penup pendown
                  start-fill end-fill
                  setxy setheading
                  wait
                  draw-turtle-commands]]))])
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
