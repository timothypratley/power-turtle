(ns power-turtle.view
  (:require
    [power-turtle.power :as power]
    [power-turtle.repl :as repl]
    [clojure-turtle.core :as turtle]
    [quil.core :as quil]
    [timothypratley.reanimated.core :as anim]
    [reagent.core :as reagent]
    [reagent.dom :refer [dom-node]]))

(defn action [k f]
  [:button
   {:on-click #(f)}
   (name k)])

(defn toolbar []
  [:div
   (for [[k f] power/actions]
     ^{:key k}
     [action k f])])

(defn browser-map [& ss]
  (zipmap
    [:-ms-transform :-moz-transform :-webkit-transform :transform]
    (repeat (apply str ss))))

(defn flipper [tag attrs & children]
  (let [flip (reagent/atom 90)
        flip-spring (anim/spring flip)]
    (swap! flip -)
    (fn a-flipper [tag attrs]
      [:div
       (into
         [tag
          (merge-with
            merge
            {:style (browser-map "rotateY(" (+ 90 @flip-spring) "deg)")
             :on-mouse-over #(swap! flip -)
             :on-mouse-leave #(swap! flip -)}
            attrs)]
         children)])))

(defn turtle-canvas []
  (reagent/create-class
    {:display-name "turtle-canvas"
     :reagent-render
     (fn []
       [:canvas#turtle-canvas])
     :component-did-mount
     (fn [this]
       (quil/sketch
         :host (dom-node this)
         :size [640 600]
         :setup (fn [] (turtle/setup) (power/init))
         :draw turtle/draw))}))

(defn page []
  [:div
   [flipper :img {:src "clojure_logo.png" :style {:float "left"}}]
   [flipper :img {:src "turtle.jpg" :style {:float "right"}}]
   [:h1 "Clojure Turtle"]
   [toolbar]
   [:br]
   [:div#main
    [turtle-canvas]
    [repl/repl]]])
