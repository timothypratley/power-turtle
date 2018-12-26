(ns power-turtle.lesson-markdown
  (:require
    [clojure.string :as string]
    [power-turtle.translations :as translations]))

(def slide-separator
  #"\n---\n")

(def notes-separator
  #"\n\?\?\?\n")

(def incremental
  "--")

(def property
  #"^([a-zA-Z-]+):\s*(.+)$")

(defn property? [line]
  (re-matches property line))

(defn parse-properties [property-lines]
  (into {}
        (for [line property-lines
              :let [[_ k v] (re-find property line)]]
          [(keyword k) v])))

(defn parse-slide [markdown]
  (let [[content & notes] (string/split markdown notes-separator)
        lines (string/split-lines content)
        [property-lines content-lines] (split-with property? lines)
        properties (parse-properties property-lines)]
    {:properties properties
     :notes (string/join notes-separator notes)
     :content (string/join \newline
                           (remove #{incremental} content-lines))}))

(defn parse-slides [markdown]
  (mapv parse-slide (string/split markdown slide-separator)))

(defn parse-lessons [tree]
  (into (sorted-map)
        (for [[k v] tree]
          [k
           (if (map? v)
             (parse-lessons v)
             (parse-slides v))])))

(def lessons
  (parse-lessons
    (translations/lessons)))

(def first-lesson
  "#lesson/1-beginner/1-welcome.md")
