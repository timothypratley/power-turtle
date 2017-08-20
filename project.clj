(defproject power-turtle "0.1.0-SNAPSHOT"
  :description "Learn programming in your native language"
  :url "http://timothypratley.github.io/power-turtle"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.6.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.671"]
                 [org.clojure/core.async "0.3.443" :exclusions [org.clojure/tools.reader]]
                 [cban "0.1.0-SNAPSHOT"]
                 [lein-cban "0.1.0-SNAPSHOT"]
                 [com.google/clojure-turtle "0.3.0"]
                 [timothypratley/reanimated "0.3.0"]
                 [reagent "0.7.0"]
                 [re-frame "0.9.4"]
                 [replumb/replumb "0.2.4"]
                 [cljsjs/highlight "9.12.0-0"]
                 [re-console "0.1.4-SNAPSHOT"]
                 [re-com "2.1.0"]
                 [cljs-ajax "0.6.0"]
                 [hickory "0.7.1"]
                 [cljsjs/showdown "1.4.2-0"]
                 [org.clojure/tools.reader "1.0.3"]
                 [cljsjs/enquire "2.1.2-0"]
                 [com.cemerick/piggieback "0.2.2"]
                 [org.clojars.stumitchell/clairvoyant "0.2.1"]
                 [binaryage/devtools "0.9.4"]
                 [day8/re-frame-tracer "0.1.0-SNAPSHOT"]
                 [cljsjs/codemirror "5.24.0-1"]
                 [adzerk/cljs-console "0.1.1"]
                 [re-complete "0.1.4-1-SNAPSHOT"]]

  :plugins [[lein-figwheel "0.5.11"]
            [lein-cban "0.1.0-SNAPSHOT"]
            [lein-cljsbuild "1.1.6" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :cban {:output-dir "resources/public/src"}

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                ;; lein figwheel
                :source-paths ["src"]
                :figwheel {}
                :compiler {:main power-turtle.main
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/power_turtle.js"
                           :output-dir "resources/public/js/compiled/out"
                           :foreign-libs
                           [{:file "resources/public/js/clojure-parinfer.js"
                             :provides ["parinfer.codemirror.mode.clojure.clojure-parinfer"]}]
                           :source-map-timestamp true}}

               {:id "min"
                ;; lein cljsbuild once min
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/power_turtle.js"
                           :main power-turtle.main
                           :foreign-libs
                           [{:file "resources/public/js/clojure-parinfer.js"
                             :provides ["parinfer.codemirror.mode.clojure.clojure-parinfer"]}]
                           ;; TODO: can advanced be used?
                           :optimizations :whitespace
                           :pretty-print false}}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.11"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {:init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
