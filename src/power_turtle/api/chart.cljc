(ns power-turtle.api.chart)

(defonce chart-data
  (atom
    {:type "scatter"
     :data {:datasets [{:label "Turtles"
                        :data [{:x 0 :y 10}
                               {:x 1 :y 2}
                               {:x 2 :y 21}]}]}
     :options {:scales {:xAxes [{:type "linear"
                                 :position "bottom"}]
                        :yAxes [{:ticks {:beginAtZero true}}]}}}))

(defn- pointize
  ([ys]
   (pointize (range) ys))
  ([xs ys]
   (mapv (fn [x y] {:x x :y y}) xs ys)))

(defn- chart-definition [t points labels]
  {:type t
   :data {:labels labels
          :datasets [{:label "Chart"
                      :data points
                      }]}
   :options {:responsive true
             :maintainAspectRatio false
             :legend {:display false}
             :scales (if (nil? labels)
                       {:xAxes [{:type "linear"
                                 :position "bottom"}]
                        :yAxes [{:ticks {:beginAtZero true}}]}
                       {:yAxes [{:ticks {:beginAtZero true}}]})}})

(defn- overloads
  ([a]
   (cond
     (map? a) a
     (seq a) (cond
               (number? (first a)) (chart-definition "scatter" (pointize a) nil)
               (map? (first a)) (chart-definition "scatter" a nil)
               (vector? (first a)) (overloads (mapv first a) (mapv second a)))
     :else (throw (ex-info "Don't know how to chart that" {:a a}))))
  ([a b]
   (cond
     (number? (first a)) (chart-definition "scatter" (pointize a b) nil)
     :else (chart-definition "bar" b a))))

(defn chart
  ([a]
   (reset! chart-data (overloads a))
   nil)
  ([a b]
   (reset! chart-data (overloads a b))
   nil))
