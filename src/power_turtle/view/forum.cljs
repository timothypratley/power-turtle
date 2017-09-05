(ns power-turtle.view.forum
  (:require
    [soda-ash.core :as sa]))

(defn forum []
  [sa/Segment
   [:div#disqus_thread
    {:ref (fn [this]
            (when (and this js/window.DISQUS)
              (prn "Calling reset")
              (js/window.DISQUS.reset #js {:reload true})))}]])