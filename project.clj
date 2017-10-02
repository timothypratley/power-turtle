(defproject power-turtle "0.1.0-SNAPSHOT"
  :description "Learn programming in your native language"
  :url "http://timothypratley.github.io/power-turtle"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.6.1"

  :aliases {"write-user-namespace" ["run" "-m" "power-turtle.translations/write-user-namespace" "src/cljs/user.cljs"]
            "collect-caches" ["run" "-m" "power-turtle.collect-caches" "resources/public/js/compiled/out" "resources/public/aot/cache.json"]
            ;; TODO: need to build with figwheel twice, but there is no figwheel once :( how can I make this work??
            "dev" ["do" ["clean"] #_["cban"] ["write-user-namespace"] ["figwheel"] ["collect-caches"] ["figwheel"]]
            "min" ["do" ["clean"] #_["cban"] ["write-user-namespace"] ["cljsbuild" "once" "min"] ["collect-caches"]]}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.clojure/core.async "0.3.443" :exclusions [org.clojure/tools.reader]]
                 [org.clojure/tools.reader "1.1.0"]
                 [org.clojars.stumitchell/clairvoyant "0.2.1"]
                 [adzerk/cljs-console "0.1.1"]
                 [binaryage/devtools "0.9.4"]
                 [bidi "2.1.2"]
                 [cban "0.1.0-SNAPSHOT"]
                 [com.cognitect/transit-clj "0.8.300"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [com.cemerick/piggieback "0.2.2"]
                 [com.google/clojure-turtle "0.3.0"]
                 [cljsjs/codemirror "5.24.0-1"]
                 [cljsjs/highlight "9.12.0-0"]
                 [cljsjs/enquire "2.1.2-0"]
                 [cljsjs/showdown "1.4.2-0"]
                 [day8/re-frame-tracer "0.1.0-SNAPSHOT"]
                 [hickory "0.7.1"]
                 [reagent "0.7.0"]
                 [re-frame "0.7.0"]
                 [replumb/replumb "0.2.4"]
                 [re-console "0.1.4-SNAPSHOT"]
                 [re-com "2.1.0"]
                 [re-complete "0.1.4-1-SNAPSHOT"]
                 [soda-ash "0.4.0"]
                 ;; TODO: upgrade to just reanimated
                 [timothypratley/reanimated "0.3.0"]]

  :plugins [[lein-figwheel "0.5.13"]
            [lein-cban "0.1.0-SNAPSHOT"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :cban {:output-dir "src"}

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                ;; `lein figwheel`
                :source-paths ["src"]
                ;; does not help, but I want it to watch markdown files
                ;;:watch-paths ["resources/public/lessons" "src"]
                :figwheel {:on-jsload "power-turtle.main/on-reload"}
                :compiler {:main power-turtle.main
                           :preloads [devtools.preload]
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/power_turtle.js"
                           :output-dir "resources/public/js/compiled/out"
                           :foreign-libs
                           [{:file "resources/public/js/clojure-parinfer.js"
                             :provides ["parinfer.codemirror.mode.clojure.clojure-parinfer"]}]
                           :closure-defines {"goog.DEBUG" true
                                             "clairvoyant.core.devmode" true}
                           :source-map-timestamp true}}

               {:id "min"
                ;; `lein cljsbuild once min`
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/power_turtle.js"
                           :main power-turtle.main
                           :foreign-libs
                           [{:file "resources/public/js/clojure-parinfer.js"
                             :provides ["parinfer.codemirror.mode.clojure.clojure-parinfer"]}]
                           :closure-defines {"goog.DEBUG" false
                                             "clairvoyant.core.devmode" false}
                           :elide-asserts true
                           :source-map-timestamp true
                           :optimizations :simple
                           :parallel-build true
                           :optimize-constants true
                           :static-fns true
                           ;; https://clojurescript.org/guides/self-hosting
                           :dump-core false
                           :pretty-print false}}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {:init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
