(ns power-turtle.view.help
  (:require
    [re-frame.core :refer [subscribe dispatch]])
  (:require-macros
    [power-turtle.translations :refer [translation-map]]))

;; TODO: Can we get this into the translation inputs somehow?
(def languages
  {"ko" "한국어"
   "id" "Bahasa Indonesia"
   "ta" "தமிழ்"
   "es" "Español"
   "en" "English"})

(def translations
  (translation-map))

(defn help-tips []
  (let [current-langugage (subscribe [:current-language])]
    (fn a-help-tips []
      [:div
       (into
         [:div]
         (for [[language-id language-name] (sort languages)]
           [:button
            {:class (when (= @current-langugage language-id)
                      "active")
             :on-click
             (fn language-click [e]
               (dispatch [:current-language language-id]))}
            (languages language-id)]))
       (into
         [:small]
         (interpose
           " · "
           (for [[namespace-name namespace-map] (translations @current-langugage)
                 [sym {:keys [alias doc]}] namespace-map]
             [:span (or alias) doc])))])))