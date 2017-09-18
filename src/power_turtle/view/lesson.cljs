(ns power-turtle.view.lesson
  (:require
    [power-turtle.view.workspace :as workspace]
    [cljsjs.showdown]
    [clojure.string :as string]
    [goog.net.XhrIo :as xhr]
    [reagent.core :as reagent]
    [soda-ash.core :as sa])
  (:require-macros
    [power-turtle.translations :as translations]))

(defn parse-slides [markdown]
  (string/split markdown #"\n---\n"))

(def lessons
  (reagent/atom
    (zipmap
      (map #(str "/" %) (rest (range 8)))
      (mapv parse-slides (map second (translations/lessons))))))

(defn make-html [s]
  (.makeHtml
    (doto (js/showdown.Converter.)
      (.setFlavor "github"))
    s))

;; TODO: use react-remark?
(defn render-markdown [s]
  [:div
   {:dangerouslySetInnerHTML
    {:__html (make-html s)}}])

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
     [render-markdown (get @slides @slide-index "Loading...")]]
    (let [enabled (< (inc @slide-index)
                     (count @slides))]
      [:div
       [:button
        {:disabled (not enabled)
         :on-click
         (fn [e]
           (swap! slide-index inc))}
        (if enabled ">" "-")]])]])

(defn lesson-view [{:keys [id]}]
  (let [current-id (reagent/atom nil)
        slides (reagent/atom nil)
        slide-index (reagent/atom 0)]
    (fn a-lesson-view [{:keys [id]}]
      (when (not= id @current-id)
        (reset! current-id id)
        (reset! slide-index 0)
        (reset! slides (get @lessons id))
        (when-not @slides
          ;; TODO: this breaks the figwheel websocket connection if an external request fails... why?
          ;; TODO: (xhr/cleanup)  also see replumb.io
          (xhr/send id (fn [e]
                         (let [response (.-target e)]
                           (reset! slides
                                   (if (.isSuccess response)
                                     (parse-slides (.getResponseText response))
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
       [workspace/workspace id]])))
