(ns power-turtle.view.canvas.raster-canvas
  (:require
    [power-turtle.view.canvas.raster-api :as api]
    [reagent.core :as reagent]
    [reagent.dom :as dom]))

(defonce canvas (atom nil))
(def ^:private ^:const pixel-width 7)
(def ^:private ^:const pixel-height 4)

(defn redraw []
  (when @canvas
    (let [ctx (.getContext @canvas "2d")]
      (doseq [x (range api/width)
              y (range api/height)]
        (let [[r g b] (api/color-map (get-in @api/raster [x y]))]
          (set! (.-fillStyle ctx) (str "rgb(" r "," g "," b ")"))
          (.fillRect ctx (* x pixel-width) (* y pixel-height) pixel-width pixel-height))))))

(defonce init
  (add-watch
    api/raster
    :monitor
    (fn [_ _ _ _]
      (redraw))))

(defn raster-canvas []
  (reagent/create-class
    {:display-name "raster-canvas"
     :reagent-render
     (fn render-raster-canvas []
       [:canvas
        {:width (* api/width pixel-width)
         :height (* api/height pixel-height)}])
     :component-did-mount
     (fn raster-canvas-did-mount [this]
       (reset! canvas (dom/dom-node this))
       (redraw))
     :component-will-unmount
     (fn raster-canvas-will-unmount []
       (reset! canvas nil))}))
