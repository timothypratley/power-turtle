(ns power-turtle.view.lesson
  (:require
    [power-turtle.view.workspace :as workspace]
    [power-turtle.view.markdown :as md]
    [clojure.string :as string]
    [goog.net.XhrIo :as xhr]
    [reagent.core :as reagent]
    [re-frame.core :refer [subscribe dispatch]]
    [soda-ash.core :as sa]
    [power-turtle.lesson-markdown :as lm]))

(defn lesson-slides [slides slide-index]
  [sa/Segment
   {:style {:text-align "left"}}
   [:div
    {:style {:display "flex"
             :flex-direction "row"
             :flex-wrap "nowrap"
             :justify-content "space-between"}}
    (let [enabled (pos? @slide-index)]
      [:div
       [:button
        {:disabled (not enabled)
         :on-click
         (fn [e]
           (swap! slide-index dec))}
        (if enabled "<" "-")]])
    [:div
     {:style {:width "90%"
              :min-height "200px"}}
     [md/render-markdown
      (get-in @slides [@slide-index :content] "Loading...")]]
    (let [enabled (< (inc @slide-index)
                     (count @slides))]
      [:div
       [:button
        {:disabled (not enabled)
         :on-click
         (fn [e]
           (swap! slide-index inc))}
        (if enabled ">" "-")]])]])

(defn lesson-view [route-params]
  (let [current-id (reagent/atom nil)
        slides (reagent/atom nil)
        slide-index (reagent/atom 0)
        current-language (subscribe [:current-language])]
    (fn a-lesson-view [{:keys [id]}]
      (when (not= id @current-id)
        (reset! current-id id)
        (reset! slide-index 0)
        ;; TODO: yuck, clean this up
        (reset! slides (get-in lm/lessons (cons @current-language (rest (string/split id #"/")))))
        (when-not @slides
          ;; TODO: this breaks the figwheel websocket connection if an external request fails... why?
          ;; TODO: (xhr/cleanup)  also see replumb.io
          (xhr/send id (fn [e]
                         (let [response (.-target e)]
                           (reset! slides
                                   (if (.isSuccess response)
                                     (lm/parse-slides (.getResponseText response))
                                     [(str
                                        "Lesson failed to load from:<br>"
                                        (let [url (str (when (string/starts-with? id "//") js/location.protocol) id)]
                                          (str "<a href='" url "' target='_blank'>" url "</a>\n\n"))
                                        (if (<= (.getStatus response) 0)
                                          "Could not reach server"
                                          (.getLastError response))
                                        "\n\nPlease check the URL and try again.")])))))))
      [:div
       [lesson-slides slides slide-index]
       [workspace/workspace (-> @slides first :properties :canvas (or "turtle"))]])))
