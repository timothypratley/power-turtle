(ns power-turtle.replumb-proxy
  (:require
    [replumb.core :as replumb]
    [replumb.repl :as replumb-repl]
    [power-turtle.io :as io]))

(defn replumb-options
  [verbose? src-paths]
  (merge (replumb/options :browser src-paths io/fetch-file!)
         {:warning-as-error true
          :verbose verbose?}))

(defn read-eval-call [opts cb source]
  (let [ns (replumb-repl/current-ns)]
    (replumb/read-eval-call opts
                            #(cb {:success? (replumb/success? %)
                                  :result   %
                                  :prev-ns  ns
                                  :source   source})
                            source)))

(defn multiline?
  [input]
  (try
    (replumb-repl/read-string {} input)
    false
    (catch :default e
      (= "EOF" (subs (.-message e) 0 3)))))

(defn eval-opts
  [verbose src-path]
  {:get-prompt  replumb/get-prompt
   :should-eval (complement multiline?)
   :to-str-fn   (partial replumb/result->string false true)
   :evaluate    (partial read-eval-call
                         (replumb-options verbose src-path))})
