(ns power-turtle.view.markdown
  (:require [cljsjs.showdown]))

(def converter
  (doto (js/showdown.Converter.)
    (.setFlavor "github")))

(defn make-html [s]
  (.makeHtml converter s))

(defn render-markdown [s]
  [:div
   {:dangerouslySetInnerHTML
    {:__html (make-html s)}}])
