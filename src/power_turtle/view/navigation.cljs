(ns power-turtle.view.navigation
  (:require
    [power-turtle.view.about :as about]
    [power-turtle.view.lesson :as lesson]
    [power-turtle.view.workspace :as workspace]
    [power-turtle.view.forum :as forum]
    [bidi.bidi :as bidi]
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [re-frame.core :refer [dispatch subscribe]]
    [soda-ash.core :as sa])
  (:import
    goog.History))

(def routes
  [""
   [["about" #'about/about-page]
    ["lesson" {["/" :id] #'lesson/lesson-view}]
    ["freestyle" {"" #'workspace/workspace}]
    ["forum" #'forum/forum]]])

(def links
  ["about"
   "lesson/1"
   "lesson/2"
   "lesson/3"
   "lesson/4"
   "lesson/5"
   "freestyle"
   "forum"])

(defn match [s]
  (bidi/match-route routes s))

(defn navigate [event]
  (dispatch [:route (.-token event)]))

(defn current-page []
  (let [route (subscribe [:route])]
    (fn the-current-page []
      [:div
       (into
         [sa/Menu
          {:inverted true}]
         (for [link links]
           [sa/MenuItem
            {:as "a"
             :href (str "#" link)
             :active (= link @route)}
            link]))
       (let [{:keys [handler route-params]} (match @route)]
         [(or handler about/about-page) route-params])])))

(defonce history
  (doto (History.)
    (events/removeAll)
    (events/listen EventType/NAVIGATE (fn on-navigate [e]
                                        (#'navigate e)))
    (.setEnabled true)))
