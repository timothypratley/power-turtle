(ns power-turtle.view.repl
  (:require
    [cljs.js]

    ;; TODO: Do I need these?? -- how can I generate this? generate a ns!
    [clojure-turtle.core]
    [power-turtle.api]
    [bocko.core]
    ;[cban.clojure-turtle-core-en]
    ;[cban.power-turtle-api-en]
    ;[cban.clojure-turtle-core-es]
    ;[cban.power-turtle-api-es]
    ;[cban.clojure-core-es]
    ;[cban.clojure-turtle-core-id]
    ;[cban.power-turtle-api-id]
    ;[cban.clojure-core-id]
    ;[cban.clojure-turtle-core-ta]
    ;[cban.power-turtle-api-ta]
    ;[cban.clojure-core-ta]
    ;[cban.clojure-turtle-core-ko]
    ;[cban.power-turtle-api-ko]
    ;[cban.clojure-core-ko]

    [power-turtle.replumb-proxy :as replumb-proxy]
    [re-console.core :as console]
    [re-frame.core :refer [dispatch subscribe dispatch-sync]]
    [cljsjs.codemirror]
    [cljsjs.codemirror.addon.edit.matchbrackets]
    [cljsjs.codemirror.addon.runmode.runmode]
    [cljsjs.codemirror.addon.runmode.colorize]
    [cljsjs.codemirror.mode.clojure]
    [re-console.parinfer :as parinfer]
    [parinfer.codemirror.mode.clojure.clojure-parinfer]
    [re-console.io :as io]
    [cognitect.transit :as transit]
    [replumb.repl :as replumb-repl]
    [cljs.tools.reader.edn :as edn])
  (:require-macros
    [clojure-turtle.macros :refer [all repeat]]
    [power-turtle.translations :as translations]))

(defonce console-key :cljs-console)

(def src-paths
  ["src" "js/compiled/out"])

(def replumb-opts
  (replumb-proxy/replumb-options false src-paths))

(dispatch [:init-options])

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

(def preambles
  ;; TODO: why do macros need to be required explicitly, but other stuff not so much???
  ;; ANSWER: needs to load the file at runtime...
  ;; WHY?? Dunno, just put the file in resources/public/src please!
  ["(require-macros '[clojure-turtle.macros :refer [all repeat]])"
   (translations/require-translations)])

(defn do-preambles [[preamble & more]]
  (replumb-proxy/read-eval-call
    ;; TODO: why do we get a warning for the defs?
    (assoc replumb-opts :warning-as-error false)
    (fn [{:keys [result]}]
      (println "***" result)
      ;;(prn (keys js/replumb.repl.st))
      (when (seq more)
        (do-preambles more)))
    preamble))

(defn load-cljs-core-cache! []
  (io/fetch-file!
    "/aot/replumb-repl.st.edn"
    (fn [txt]
      (prn "Loading aot cache")
      (let [
            ;; TODO: probably should use json
            ;;rdr (transit/reader :json)
            ;;cache (transit/read rdr txt)
            cache (edn/read-string txt)
            ]
        ;; TODO: it's right here!!!! OMG
        ;;(cljs/load-analysis-cache! replumb-repl/st 'cljs.core cache)

        ;;(swap! replumb-repl/st #(merge-with merge %1 %2) cache)
        ;;(reset! replumb-repl/st cache)
        )
      (do-preambles preambles)
      )))

;; TODO: async these (do I even need to init first? who knows??)
(dispatch-sync [:init-console console-key (replumb-proxy/eval-opts replumb-opts)])
(load-cljs-core-cache!)

(defn buttons []
  [:div.buttons-container
   [toggle-verbose]
   [toggle-parinfer]])

(defn repl []
  [:div#repl
   [console/console console-key
    {:eval-opts (replumb-proxy/eval-opts replumb-opts)
     :mode-line? false}]
   [:div.re-console-mode-line " "]
   #_[buttons]])
