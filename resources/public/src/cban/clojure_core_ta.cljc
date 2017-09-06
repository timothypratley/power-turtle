(ns cban.clojure-core-ta)

;; This file was generated, do not modify it directly

(defmacro மற்றும்
  [& body]
  `(clojure.core/and ~@body))

(def செயல்படுத்து
  clojure.core/apply)

(def அணு
  clojure.core/atom)

(def பூலியன்
  clojure.core/boolean)

(def கடைசியின்றி
  clojure.core/butlast)

(def தொடு
  clojure.core/concat)

(defmacro பொறுத்து
  [& body]
  `(clojure.core/cond ~@body))

(def எண்ணு
  clojure.core/count)

(def இறக்கு
  clojure.core/dec)

(defmacro வரையறு
  [& body]
  `(def ~@body))

(defmacro வரையறு-செயல்கூறு
  [& body]
  `(defn ~@body))

(defmacro செய்
  [& body]
  `(do ~@body))

(def செய்யெல்லாம்
  clojure.core/doall)

(def செய்யோட்டம்
  clojure.core/dorun)

(defmacro செய்வரிசை
  [& body]
  `(clojure.core/doseq ~@body))

(def விடு
  clojure.core/drop)

(def விடு-என்னும்வரை
  clojure.core/drop-while)

(def ஒவ்வொன்றுமா?
  clojure.core/every?)

(defmacro பொய்மை
  [& body]
  `(false ~@body))

(def பொய்மையா?
  clojure.core/false?)

(def வடி
  clojure.core/filter)

(def கண்டுபிடி
  clojure.core/find)

(def முதல்
  clojure.core/first)

(def தட்டையாக்கு
  clojure.core/flatten)

(defmacro செயல்கூறு
  [& body]
  `(fn ~@body))

(defmacro ஒன்றொன்றுக்கு
  [& body]
  `(clojure.core/for ~@body))

(def பெறு
  clojure.core/get)

(def புலவெண்-விவரணையாக்கம்
  clojure.core/hash-map)

(def புலவெண்-அமைவு
  clojure.core/hash-set)

(def அடையாளம்
  clojure.core/identity)

(defmacro எனில்
  [& body]
  `(if ~@body))

(defmacro இல்லெனில்
  [& body]
  `(clojure.core/if-not ~@body))

(def ஏற்று
  clojure.core/inc)

(def பின்னு
  clojure.core/interleave)

(def இடைபொருத்து
  clojure.core/interpose)

(def கொள்
  clojure.core/keep)

(def கடைசி
  clojure.core/last)

(defmacro வைத்துக்கொள்
  [& body]
  `(let ~@body))

(def பட்டியல்
  clojure.core/list)

(defmacro சுற்று
  [& body]
  `(loop ~@body))

(def விவரி
  clojure.core/map)

(def அடுத்த
  clojure.core/next)

(def அன்று
  clojure.core/not)

(defmacro அல்லது
  [& body]
  `(clojure.core/or ~@body))

(def அச்சிடு
  clojure.core/print)

(def வரி-அச்சிடு
  clojure.core/println)

(def வீச்சு
  clojure.core/range)

(def இறுக்கு
  clojure.core/reduce)

(def அகற்று
  clojure.core/remove)

(def மீதி
  clojure.core/rest)

(def புரட்டு
  clojure.core/reverse)

(def இரண்டாம்
  clojure.core/second)

(def வரிசை
  clojure.core/seq)

(def அமைவு
  clojure.core/set)

(def எதாவது
  clojure.core/some)

(def தொடை
  clojure.core/str)

(def எடு
  clojure.core/take)

(def எடு-என்னும்வரை
  clojure.core/take-while)

(defmacro வாய்மை
  [& body]
  `(true ~@body))

(def உண்மையா?
  clojure.core/true?)

(defmacro என்னும்போது
  [& body]
  `(clojure.core/when ~@body))

(defmacro இல்லென்னும்-போது
  [& body]
  `(clojure.core/when-not ~@body))
