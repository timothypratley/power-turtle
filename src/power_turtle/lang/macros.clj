(ns power-turtle.lang.macros
  (:require [cljs.core]))

#_(defmacro make-defs [& names]
    `(do
       ~@(map (fn [sym]
                `(def ~sym (~'decorate ~(symbol (str 'their) (str sym)))))
              names)))

(defmacro expose-language [lang]
  `(do
     ~@(mapcat (fn [[ns translations]]
                 (map (fn [[sym translation]]
                        `(defmacro ~translation ~'[& body]
                           (quote
                             (~(if ns (symbol (name ns) (name sym)) sym)
                               (unquote-splicing ~'body)))))
                      translations))
               lang)))

#_(defmacro expose-language [lang]
    (doseq [[ns translations] lang
            [sym translation] translations]
      (eval
        (str
          "(defmacro " translation " [& body] ("
          (if ns (symbol (name ns) (name sym)) sym)
          " ~@body))"))))

;;TODO add conform
(defmacro if2 [& body]
  `(if ~@body))

(defmacro maptemplate
  [template-fn coll]
  `(do ~@(map `~#((eval template-fn) %) coll)))







(defmacro translate-fn
  [old-name new-name]
  `(def ~old-name ~new-name))

(defmacro translate-fn-symbol
  [old-name new-name]
  `(def ~(eval new-name) ~(eval old-name)))

(defmacro translate-fns
  [symb-map]
  `(do
     ~@(for [[old-form# new-form#] (eval symb-map)]
         `(translate-fn-symbol '~old-form# '~new-form#))))

;; info on macro-writing macros based on info at
;; http://amalloy.hubpages.com/hub/Clojure-macro-writing-macros

(defmacro translate-form
  "Does the effective translation of a special form or macro from its old name to its new name.
  In other words, generalizes the 'manual' process of defining something like:
(defmacro எனில்
  [& body]
  `(if ~@body))"
  [old-name new-name]
  `(defmacro ~new-name
     [~'& body#]
     `(~'~old-name ~@body#)))

;; not sure if/how to shorten செயல்கூறு, வரையறு-செயல்கூறு, வைத்துக்கொள்

(defmacro translate-form-symbol
  "Does the effective translation of a special form or macro from its old name to its new name,
  with the names given as symbols. Helper macro for translate-forms macro"
  [old-name new-name]
  `(defmacro ~(eval new-name)
     [~'& body#]
     `(~'~(eval old-name) ~@body#)))

(defmacro translate-forms
  "takes a map of symbols and creates macros that do the translation of the form of the old symbol (key) to the new symbol (val)"
  [symb-map]
  `(do
     ~@(for [[old-form# new-form#] (eval symb-map)]
         `(translate-form-symbol '~old-form# '~new-form#))))