(ns power-turtle.replumb-proxy
  (:require
    [power-turtle.model :as model]
    [clojure.string :as string]
    [re-console.io :as io]
    [replumb.core :as replumb]
    [replumb.repl :as repl]))

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
      (string/starts-with? (.-message e) "Unexpected EOF"))))

(defn eval-opts
  [opts]
  {:get-prompt (constantly "")
   :should-eval (complement multiline?)
   :to-str-fn (partial replumb/result->string false true)
   :evaluate (fn [a b]
               (swap! model/flip -)
               (read-eval-call opts a b))})
