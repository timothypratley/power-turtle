(defproject power-turtle "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.6.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [org.clojure/core.async "0.2.374"
                  :exclusions [org.clojure/tools.reader]]
                 [com.google/clojure-turtle "0.2.0"]
                 [timothypratley/reanimated "0.2.0"]
                 [reagent                     "0.6.0-SNAPSHOT"]
                 [re-frame                    "0.7.0"]
                 [replumb/replumb             "0.2.2-SNAPSHOT"]
                 [cljsjs/highlight            "8.4-0"]
                 [re-console                  "0.1.4-SNAPSHOT"]
                 [re-com                      "0.8.1"]
                 [cljs-ajax                   "0.5.1"]
                 [hickory                     "0.5.4"]
                 [cljsjs/showdown             "0.4.0-1"]
                 [org.clojure/tools.reader    "1.0.0-alpha3"]
                 [cljsjs/enquire              "2.1.2-0"]
                 [com.cemerick/piggieback     "0.2.1"]
                 [org.clojars.stumitchell/clairvoyant "0.2.0"]
                 [binaryage/devtools          "0.6.0"]
                 [day8/re-frame-tracer        "0.1.0-SNAPSHOT"]
                 [cljsjs/codemirror           "5.10.0-0"]
                 [adzerk/cljs-console         "0.1.1"]
                 [re-complete                 "0.1.4-1-SNAPSHOT"]]

  :plugins [[lein-figwheel "0.5.3-2"]
            [lein-cljsbuild "1.1.3" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                ;; If no code is to be run, set :figwheel true for continued automagical reloading
                :figwheel {}

                :compiler {:main power-turtle.main
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/power_turtle.js"
                           :output-dir "resources/public/js/compiled/out"
                           :foreign-libs
                           [{:file "resources/public/js/clojure-parinfer.js"
                             :provides ["parinfer.codemirror.mode.clojure.clojure-parinfer"]}]
                           :source-map-timestamp true}}

               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/power_turtle.js"
                           :main power-turtle.main
                           :foreign-libs
                           [{:file "resources/public/js/clojure-parinfer.js"
                             :provides ["parinfer.codemirror.mode.clojure.clojure-parinfer"]}]
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"]} ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :) (see lien-ring)

             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you are using emacsclient you can just use
             ;; :open-file-command "emacsclient"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"



  ;; setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.3-2"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {; for nREPL dev you really need to limit output
                                  :init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})


