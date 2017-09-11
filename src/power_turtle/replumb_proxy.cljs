(ns power-turtle.replumb-proxy
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    [replumb.core :as replumb]
    [replumb.repl :as repl]
    [re-console.io :as io]))

(defn replumb-options
  [verbose? src-paths]
  (merge (replumb/options :browser src-paths io/fetch-file!)
         {:warning-as-error true
          :verbose verbose?}))

(defn read-eval-call [opts cb source]
  (let [ns (repl/current-ns)]
    (replumb/read-eval-call
      opts
      #(cb {:success? (replumb/success? %)
            :result %
            :prev-ns ns
            :source source})
      source)))

(defn multiline?
  [input]
  (try
    (repl/read-string {} input)
    false
    (catch :default e
      (= "EOF" (subs (.-message e) 0 3)))))

(defn eval-opts
  [opts]
  {:get-prompt (constantly "")
   :should-eval (complement multiline?)
   :to-str-fn (partial replumb/result->string false true)
   :evaluate (fn [a b]
               (dispatch [:flip])
               (read-eval-call opts a b))})
