(ns power-turtle.view.about
  (:require
    [soda-ash.core :as sa]))

(defn about-page []
  [sa/Segment
   {:style {:min-height "700px"
            :padding "1em 0em"
            :vertical true}}
   [:h1
    {:style {:margin-top "6em"}}
    "Welcome to Power Turtle!"]
   [:p
    {:style {:margin-top "6em"}}
    "This is a place to learn how to write computer programs."]
   ;; TODO: make this a call to action
   [:p
    {:style {:margin-top "3em"}}
    "Choose a lesson from the menu above to get a guided tour of what you can do."]
   [:p
    {:style {:margin-top "3em"}}
    "If you have any questions please add the in the forum, or contact Elango Cheran and Timothy Pratley."]
   [:footer
    {:style {:margin-top "6em"}}
    " 🐢 "
    [:a
     {:href "https://youtu.be/0fKpGy2QuMM"
      :target "_blank"}
     "Why Turtle?"]
    " 🐢 "
    [:a
     {:href "http://clojurebridge.github.io/curriculum/#/1"
      :target "_blank"}
     "Learn Clojure"]
    " 🐢 "
    [:a
     {:href "http://github.com/timothypratley/power-turtle"
      :target "_blank"}
     "Source"]
    " 🐢 "
    [:a
     {:href "http://timothypratley.blogspot.com"
      :target "_blank"}
     "Blog"]]])