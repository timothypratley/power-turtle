(ns power-turtle.lang.macros)

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

(defmacro translate-form
  [old-name new-name]
  `(defmacro ~new-name
     [~'& body#]
     `(~'~old-name ~@body#)))

(defmacro translate-form-symbol
  [old-name new-name]
  `(defmacro ~(eval new-name)
     [~'& body#]
     `(~'~(eval old-name) ~@body#)))

(defmacro translate-forms
  []
  `(do
     ~@(for [[old-form# new-form#] (eval forms)]
         `(translate-form-symbol '~old-form# '~new-form#))))
