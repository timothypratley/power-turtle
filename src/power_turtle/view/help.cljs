(ns power-turtle.view.help
  (:require
    [re-frame.core :refer [subscribe dispatch]]))

(def languages
  {"ko" "한국어"
   "id" "Bahasa Indonesia"
   "ta" "தமிழ்"
   "es" "Español"
   "en" "English"})

(defn help-tips []
  (let [current-langugage (subscribe [:current-language])]
    (fn a-help-tips []
      [:div
       (into
         [:div]
         ;; TODO:
         (for [language [] #_(sort (keys repl/languages))]
           [:button
            {:class (when (= @current-langugage language)
                      "active")
             :on-click
             (fn language-click [e]
               (dispatch [:current-language language]))}
            language]))
       (into
         [:small]
         (interpose
           " · "
           (sort
             (for [[ns translations] [] #_(repl/languages @current-langugage)
                   [sym translation] translations]
               [:span
                ;; TODO: figure out how to capture doc
                ;;{:title (with-out-str (cljs.repl/print-doc (meta (var sym))))}
                translation]))))])))