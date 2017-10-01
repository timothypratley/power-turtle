(ns power-turtle.view.navigation
  (:require
    [power-turtle.view.about :as about]
    [power-turtle.view.forum :as forum]
    [power-turtle.view.lesson :as lesson]
    [power-turtle.view.lessons :as lessons]
    [power-turtle.view.workspace :as workspace]
    [bidi.bidi :as bidi]
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [re-frame.core :refer [dispatch subscribe]]
    [soda-ash.core :as sa]
    [reagent.core :as reagent])
  (:import
    goog.History))

(defonce route
  (reagent/atom nil))

(def routes
  [""
   [["about" #'about/about-page]
    ;; uses regex to allow slashes in the id, which can be a url
    ["lessons" #'lessons/lessons-view]
    ["lesson" [[["" [#".*" :id]] #'lesson/lesson-view]]]
    ["freestyle" [["" #'workspace/workspace]]]
    ["forum" #'forum/forum]]])

(def links
  ["about"
   "lessons"
   "freestyle"
   "forum"])

(defn match [s]
  (bidi/match-route routes s))

(defn navigate [event]
  (reset! route (.-token event)))

;; TODO: Can we get this into the translation inputs somehow?
(def languages
  {"ko" "한국어"
   "id" "Bahasa Indonesia"
   "ta" "தமிழ்"
   "es" "Español"
   "en" "English"})

(defn language-selector []
  (let [current-language (subscribe [:current-language])]
    (fn a-language-selector []
      [sa/MenuMenu
       {:position "right"}
       (doall
         (for [[language-id language-name] (sort languages)]
           ^{:key language-id}
           [sa/MenuItem
            {:active (= @current-language language-id)
             :on-click
             (fn language-click [e]
               (dispatch [:current-language language-id]))}
            language-name]))])))

(defn menu-bar [route]
  [sa/Menu
   {:inverted true}
   (doall
     (for [link links]
       ^{:key link}
       [sa/MenuItem
        {:as "a"
         :href (str "#" link)
         :active (= @route link)}
        link]))
   [language-selector]])

(defn current-page []
  (if (= @route "logo")
    [workspace/canvas-repl "turtle"]
    (fn the-current-page []
      [:div
       [menu-bar route]
       (let [{:keys [handler route-params]} (match @route)]
         [(or handler about/about-page) route-params])])))

(defonce history
  (doto (History.)
    (events/removeAll)
    (events/listen EventType/NAVIGATE (fn on-navigate [e]
                                        (#'navigate e)))
    (.setEnabled true)))
