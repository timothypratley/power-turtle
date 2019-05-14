(ns power-turtle.view.help
  (:require
    [power-turtle.model :as model]
    [soda-ash.core :as sa])
  (:require-macros
    [power-turtle.translations :refer [translation-map]]))

(def translations
  (translation-map))

(defn help-tips []
  [:div
   (into
     [:small]
     (interpose
       " · "
       (for [[namespace-name namespace-map] (get translations @model/current-language)
             [sym {:keys [alias doc]}] namespace-map]
         [:span (or alias) doc])))])
