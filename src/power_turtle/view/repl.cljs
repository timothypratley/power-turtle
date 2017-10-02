(ns power-turtle.view.repl
  (:require
    [cljs.js]
    [cljs.user] ;; generated to refer the api
    [cljsjs.codemirror]
    [cljsjs.codemirror.addon.edit.matchbrackets]
    [cljsjs.codemirror.addon.runmode.runmode]
    [cljsjs.codemirror.addon.runmode.colorize]
    [cljsjs.codemirror.mode.clojure]
    [cognitect.transit :as transit]
    [replumb.repl :as replumb-repl]
    [re-console.core :as console]
    [re-console.io :as io]
    [power-turtle.replumb-proxy :as replumb-proxy]))

(defonce console-key :cljs-console)

(def src-paths
  ["src" "js/compiled/out"])

(def replumb-opts
  (replumb-proxy/replumb-options false src-paths))

(defn load-cljs-core-cache! []
  ;; TODO: does the browser cache this?
  (io/fetch-file!
    "aot/cache.json"
    (fn fetched [txt]
      #_(println "Loading aot cache")
      (let [cache (transit/read (transit/reader :json) txt)]
        (swap! replumb-repl/st update :cljs.analyzer/namespaces merge cache)
        #_(println "Loaded" (count cache) "namespaces")))))

(load-cljs-core-cache!)

(defn repl []
  [:div.repl
   [console/console console-key
    {:eval-opts (replumb-proxy/eval-opts replumb-opts)
     :mode-line? false}]
   [:div.re-console-mode-line " "]])
