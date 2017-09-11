(ns power-turtle.view.about
  (:require
    [soda-ash.core :as sa]))

(defn about-page []
  [sa/Segment
   {:style {:min-height "700px"
            :padding "1em 0em"
            :vertical true}}
   [:h1
    {:style {:margin-top "3em"}}
    "Welcome to Power Turtle!"]
   [:img {:src "turtle.jpg"
          :style {:margin-top "3em"}}]
   [:p
    {:style {:margin-top "3em"}}
    "This is a place to learn how to write computer programs."]
   ;; TODO: make this a call to action
   [sa/Message
    {:info true
     :style {:margin-top "3em"}}
    [:p
     "Choose a lesson from the menu above to get started."]]

   [:footer
    {:style {:margin-top "9em"}}
    " 🐢 "
    [:a
     {:href "https://youtu.be/0fKpGy2QuMM"
      :target "_blank"}
     "Why turtle?"]
    " 🐢 "
    [:a
     {:href "http://clojurebridge.github.io/curriculum/#/1"
      :target "_blank"}
     "ClojureBridge ciriculum"]
    " 🐢 "
    [:a
     {:href "http://github.com/timothypratley/power-turtle"
      :target "_blank"}
     "Source code"]
    " 🐢 "
    [:a
     {:href "http://timothypratley.blogspot.com"
      :target "_blank"}
     "My blog"]
    [:p
     {:style {:margin-top "3em"}}
     "Contact me "
     [:a {:href "mailto:timothypratley@gmail.com"} "timothypratley@gmail.com"]]]])