(ns power-turtle.view.lessons
  (:require
    [power-turtle.lesson-markdown :as lm]
    [power-turtle.model :as model]
    [power-turtle.view.markdown :as md]
    [soda-ash.core :as sa]))

(defn li [tree parent]
  [sa/ListSA
   (for [[lesson-name lesson] tree
         :let [folder? (map? lesson)
               link (str parent "/" lesson-name)]
         :when (not= lesson-name "description.md")]
     ^{:key link}
     [sa/ListItem
      (when (not folder?)
        {:href link})
      [sa/ListIcon {:name (if folder? "folder" "file")}]
      [sa/ListContent
       [sa/ListHeader lesson-name]
       [sa/ListDescription
        (if folder?
          [md/render-markdown (:content (first (get lesson "description.md")))]
          (:description (first lesson)))]
       (when folder?
         [li lesson link])]])])

(defn lessons-view []
  [sa/Container {:style {:text-align "left"}}
   [li (get lm/lessons @model/current-language) "#lesson"]])
