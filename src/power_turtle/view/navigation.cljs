(ns power-turtle.view.navigation
  (:require
    [power-turtle.model :as model]
    [power-turtle.view.about :as about]
    [power-turtle.view.forum :as forum]
    [power-turtle.view.lesson :as lesson]
    [power-turtle.view.lessons :as lessons]
    [power-turtle.view.workspace :as workspace]
    [bidi.bidi :as bidi]
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [reagent.core :as reagent]
    [soda-ash.core :as sa])
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
    ;; TODO: add route to specific canvases
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
  {"de" "Deutsche"
   "en" "English"
   "es" "Español"
   "fr" "Français"
   "id" "Bahasa Indonesia"
   "ko" "한국어"
   "pt_PT" "Português"
   "ru" "Русский"
   "ta" "தமிழ்"
   "tl" "Tagalog"
   "zh_TW" "中國傳統的"
   "zh_CN" "簡體中文"})

(defn language-selector []
  (fn a-language-selector []
    [sa/MenuMenu
     {:position "right"}
     [sa/MenuItem
      [sa/Dropdown
       {:button true
        :class-name "icon"
        :floating true
        :labeled true
        :icon "world"
        :placeholder "select language"
        :fluid true
        :default-value "en"
        :options (clj->js
                   (for [[lang-code lang-name] (sort-by key languages)]
                     {:key lang-code
                      :text lang-name
                      :value lang-code}))
        :on-change
        (fn language-change [e v]
          (reset! model/current-language (.-value v)))
        }]]]))

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
