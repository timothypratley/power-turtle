(ns power-turtle.view.repl
  (:require
    [a.init] ;; TODO: why? why? why?? -- should work without, make a simpler example and report, parallel compilation?? check the requires is correct
    [cljs.js]
    [cljs.user] ;; generated to refer the api, we need to compile it
    [cljsjs.codemirror]
    [cljsjs.codemirror.addon.edit.matchbrackets]
    [cljsjs.codemirror.addon.runmode.runmode]
    [cljsjs.codemirror.addon.runmode.colorize]
    [cljsjs.codemirror.mode.clojure]
    [cognitect.transit :as transit]
    [replumb.repl :as replumb-repl]
    [re-console.core :as console]
    [re-console.io :as io]
    [re-frame.core :refer [dispatch subscribe dispatch-sync]]
    [power-turtle.replumb-proxy :as replumb-proxy]))

(defonce console-key :cljs-console)

(def src-paths
  ["src" "js/compiled/out"])

(def replumb-opts
  (replumb-proxy/replumb-options false src-paths))

(dispatch [:init-options])

(defn load-cljs-core-cache! []
  ;; TODO: does the browser cache this?
  (io/fetch-file!
    "aot/core.cljs.cache.aot.json"
    (fn fetched [txt]
      #_(println "Loading aot cache")
      (let [cache (transit/read (transit/reader :json) txt)]
        (cljs.js/load-analysis-cache! replumb.repl/st 'cljs.core cache)
        #_(swap! replumb-repl/st update :cljs.analyzer/namespaces merge cache)
        #_(println "Loaded" (count cache) "namespaces"))))

  (io/fetch-file!
    "aot/cache.json"
    (fn fetched [txt]
      #_(println "Loading aot cache")
      (let [cache (transit/read (transit/reader :json) txt)]
        (swap! replumb-repl/st update :cljs.analyzer/namespaces merge cache)
        #_(println "Loaded" (count cache) "namespaces")))))

;; TODO: async these? (do I even need to init first? who knows??)
(dispatch-sync [:init-console console-key (replumb-proxy/eval-opts replumb-opts)])
(load-cljs-core-cache!)

(defn repl []
  [:div.repl
   [console/console console-key
    {:eval-opts (replumb-proxy/eval-opts replumb-opts)
     :mode-line? false}]
   [:div.re-console-mode-line " "]])
