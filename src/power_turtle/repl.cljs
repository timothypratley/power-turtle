(ns power-turtle.repl
  (:require
    [power-turtle.replumb-proxy :as replumb-proxy]
    [re-console.core :as console]
    [re-frame.core :refer [dispatch subscribe]]
    [reagent.core :as reagent]
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

(defn buttons
  []
  [:div.buttons-container
   [toggle-verbose]
   [toggle-parinfer]])

(dispatch [:init-options])

(defn repl []
  (let [opts (replumb-proxy/eval-opts false ["/js/compiled/out"])]
    (replumb-proxy/read-eval-call
      opts
      (fn [x])
      "(in-ns 'power-turtle.power)")
    (fn []
      [:div#repl
       [console/console console-key
        {:eval-opts opts
         :mode-line? true}]
       [buttons]])))
