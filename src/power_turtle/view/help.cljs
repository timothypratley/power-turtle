(ns power-turtle.view.help
  (:require
    [re-frame.core :refer [subscribe dispatch]]
    [soda-ash.core :as sa])
  (:require-macros
    [power-turtle.translations :refer [translation-map]]))

(dispatch [:current-language "en"])

(def translations
  (translation-map))

(defn help-tips []
  (let [current-language (subscribe [:current-language])]
    (fn a-help-tips []
      [:div
       (into
         [:small]
         (interpose
           " · "
           (for [[namespace-name namespace-map] (get translations @current-language)
                 [sym {:keys [alias doc]}] namespace-map]
             [:span (or alias) doc])))])))
