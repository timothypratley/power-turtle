(ns re-frame-tracer.core
  (:require [clojure.walk :refer [prewalk walk]]
            [clairvoyant.core :refer [ITraceEnter ITraceError ITraceExit]]))

(defn tracer 
  [& {:keys [color] :as options}]
  (let [pr-val (fn pr-val [x] x)
        log-binding (fn [form init]
                      (.groupCollapsed js/console "%c%s"
                                       "font-weight:bold;" (pr-str form)
                                       (pr-val init)))
        log-exit (fn [exit]
                   (.log js/console "=>" (pr-val exit)))
        has-bindings? #{'fn*
                        `fn
                        'fn
                        'defn
                        `defn
                        'defn-
                        `defn-
                        'defmethod
                        `defmethod
                        'deftype
                        `deftype
                        'defrecord
                        `defrecord
                        'reify
                        `reify
                        'let
                        `let
                        'extend-type
                        `extend-type
                        'extend-protocol
                        `extend-protocol}
        fn-like? (disj has-bindings? 'let `let)]
    (reify
      ITraceEnter
      (-trace-enter
        [_ {:keys [anonymous? arglist args dispatch-val form init name ns op protocol]}]
        (cond
          (fn-like? op)
          (let [title (if protocol
                        (str protocol " " name " " arglist)
                        (str ns "/" name
                             (when dispatch-val
                               (str " " (pr-str dispatch-val)))
                             (str " " arglist)
                             (when anonymous? " (anonymous)")))
                arglist (remove '#{&} arglist)]
            (.groupCollapsed js/console "%c%s" (str "color:" color ";") title)
            (.groupCollapsed js/console "bindings"))
          
          (#{'let `let} op)
          (let [title (str op)]
            (.groupCollapsed js/console title)
            (.groupCollapsed js/console "bindings"))
          
          (#{'binding} op)
          (log-binding form init)))
      
      ITraceExit
      (-trace-exit [_ {:keys [op exit]}]
                   (cond
                     (#{'binding} op)
                     (do (log-exit exit)
                       (.groupEnd js/console))
                     
                     (has-bindings? op)
                     (do (.groupEnd js/console)
                       (log-exit exit)
                       (.groupEnd js/console))))
      
      ITraceError
      (-trace-error [_ {:keys [op form error ex-data]}]
                    (cond
                      (#{'binding} op)
                      (do
                        (.error js/console (.-stack error))
                        (when ex-data
                          (.groupCollapsed js/console "ex-data")
                          (.groupCollapsed js/console (pr-val ex-data))
                          (.groupEnd js/console)
                          (.groupEnd js/console)))
                      
                      (has-bindings? op)
                      (do (.groupEnd js/console)
                        (do
                          (.error js/console (.-stack error))
                          (when ex-data
                            (.groupCollapsed js/console "ex-data")
                            (.groupCollapsed js/console (pr-val ex-data))
                            (.groupEnd js/console)
                            (.groupEnd js/console)))
                        (.groupEnd js/console)))))))
