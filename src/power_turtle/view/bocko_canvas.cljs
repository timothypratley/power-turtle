(ns power-turtle.view.bocko-canvas
  (:require
    [reagent.core :as reagent]
    [reagent.dom :as dom]))

(defonce canvas (atom nil))
(def ^:private ^:const width 40)
(def ^:private ^:const height 40)
(def ^:private ^:const pixel-width 28)
(def ^:private ^:const pixel-height 16)
(def ^:private clear-color :black)
(def ^:private default-color :white)
(def ^:private clear-screen (vec (repeat height (vec (repeat width clear-color)))))
(defonce ^:private raster (atom clear-screen))

(def ^:private color-map
  {:black       [0 0 0]
   :red         [157 9 102]
   :dark-blue   [42 42 229]
   :purple      [199 52 255]
   :dark-green  [0 118 26]
   :dark-gray   [128 128 128]
   :medium-blue [13 161 255]
   :light-blue  [170 170 255]
   :brown       [85 85 0]
   :orange      [242 94 0]
   :light-gray  [192 192 192]
   :pink        [255 137 229]
   :light-green [56 203 0]
   :yellow      [213 213 26]
   :aqua        [98 246 153]
   :white       [255 255 254]})

(defn clear
  "Clears this screen."
  []
  (reset! raster clear-screen)
  nil)

(defonce
  ^{:dynamic true
    :doc     "The color used for plotting."}
  *color* default-color)

(set-validator!
  #'*color*
  (fn [c] (contains? color-map c)))

;; TODO: export bocko api!
;; TODO: make turtle and bocko both set their colors
(defn color
  "Sets the color for plotting.

  The color must be one of the following:

  :black        :red        :dark-blue    :purple
  :dark-green   :dark-gray  :medium-blue  :light-blue
  :brown        :orange     :light-gray   :pink
  :light-green  :yellow     :aqua         :white"
  [c]
  {:pre [(keyword? c)
         (c #{:black :red :dark-blue :purple
              :dark-green :dark-gray :medium-blue :light-blue
              :brown :orange :light-gray :pink
              :light-green :yellow :aqua :white})]}
  (set! *color* c)
  nil)

(defn- plot*
  [r x y c]
  (assoc-in r [x y] c))

(defn plot
  "Plots a point at a given x and y.

  Both x and y must be between 0 and 39."
  [x y]
  {:pre [(integer? x) (integer? y) (<= 0 x 39) (<= 0 y 39)]}
  (swap! raster plot* x y *color*)
  nil)

(defn- lin
  [r a1 a2 b c f]
  (if (< a2 a1)
    (lin r a2 a1 b c f)
    (reduce (fn [r x]
              (assoc-in r (f [x b]) c))
            r
            (range a1 (inc a2)))))

(defn- hlin*
  [r x1 x2 y c]
  (lin r x1 x2 y c identity))

(defn hlin
  "Plots a horizontal line from x1 to x2 at a given y.

  The x and y numbers must be between 0 and 39."
  [x1 x2 y]
  {:pre [(integer? x1) (integer? x2) (integer? y) (<= 0 x1 39) (<= 0 x2 39) (<= 0 y 39)]}
  (swap! raster hlin* x1 x2 y *color*)
  nil)

(defn- vlin*
  [r y1 y2 x c]
  (lin r y1 y2 x c reverse))

(defn vlin
  "Plots a vertical line from y1 to y2 at a given x.

  The x and y numbers must be between 0 and 39."
  [y1 y2 x]
  {:pre [(integer? y1) (integer? y2) (integer? x) (<= 0 y1 39) (<= 0 y2 39) (<= 0 x 39)]}
  (swap! raster vlin* y1 y2 x *color*)
  nil)

(defn- scrn*
  [r x y]
  (get-in r [x y]))

(defn scrn
  "Gets the color at a given x and y.

  Both x and y must be between 0 and 39."
  [x y]
  {:pre [(integer? x) (integer? y) (<= 0 x 39) (<= 0 y 39)]}
  (scrn* @raster x y))

(defn redraw []
  (when @canvas
    (let [ctx (.getContext @canvas "2d")]
      (doseq [x (range width)
              y (range height)]
        (let [[r g b] (color-map (get-in @raster [x y]))]
          (set! (.-fillStyle ctx) (str "rgb(" r "," g "," b ")"))
          (.fillRect ctx (* x pixel-width) (* y pixel-height) pixel-width pixel-height))))))

(defonce init
  (add-watch
    raster
    :monitor
    (fn [_ _ _ _]
      (redraw))))

(defn bocko-canvas []
  (reagent/create-class
    {:display-name "bocko-canvas"
     :reagent-render
     (fn render-bocko-canvas []
       [:canvas
        {:style {:min-width 600
                 :max-width 600
                 :background-color "lightgray"}
         :width 600
         :height 640}])
     :component-did-mount
     (fn bocko-canvas-did-mount [this]
       (prn "mounted")
       (reset! canvas (dom/dom-node this))
       (color :pink)
       (plot 2 3))
     :component-will-unmount
     (fn bocko-canvas-will-unmount []
       (reset! canvas nil))}))
