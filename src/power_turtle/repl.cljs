(ns power-turtle.repl
  (:require
    [power-turtle.lang.english :as english]
    [power-turtle.lang.korean :as korean]
    [power-turtle.lang.tamil :as tamil]
    [power-turtle.lang.indonesian :as indonesian]
    [power-turtle.lang.spanish :as spanish]
    [cljs.js]
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

(def src-paths
  ["clj"])
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


(def languages
  {"한국어" korean/all
   "Bahasa Indonesia" indonesian/all
   "தமிழ்" tamil/all
   "Español" spanish/all
   "English" english/all})

;; this works for turtle, even though the eval returns failed o_O
;; also they must be in separate evals, do doesn't work
;; TODO: How to preserve metadata like docstrings???
(def preambles
  [#_"(ns 무.무
      (:require-macros [power-turtle.lang.korean :refer [밝히다 함수를정의 모든 반복]]))"
   ;; These are separate because the require-macros loads a file asyncronously...
   ;; but i need the ns set before the subsequent preambles can run.
   "(ns t)"
   (str "(require-macros '[power-turtle.lang.korean :refer " (vec (for [[ns translations] korean/forms
                                                                        [sym translation] translations]
                                                                    translation)) "])")
   ;;"(require-macros '[power-turtle.lang.indonesian :refer [밝히다 함수를정의 모든 반복]])"
   #_"(do
      (require '[clojure-turtle.core])
      (require-macros '[power-turtle.pot :refer [import-vars]])
      (import-vars clojure-turtle.core/forward))"
   ;; TODO: do this less hacky
   (pr-str
     `(do
        ~@(for [[language-name language] [(first languages)]
                [ns translations] language
                [sym translation] translations]
            `(def ~sym
               ;; TODO:  ~(cljs.repl/doc (symbol ns sym))
               ~(symbol ns sym)))))
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
