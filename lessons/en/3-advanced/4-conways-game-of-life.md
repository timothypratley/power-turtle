canvas: raster

Conway's game of life uses a raster matrix.
When a cell has 2 or 3 neighbours, it gets filled with a dot.
The dot dies when it no longer has 2 or 3 neighbours.


---

    (defn neighbours [[x y]]
      (for [dx [-1 0 1]
            dy (if (zero? dx)
                 [-1 1]
                 [-1 0 1])]
        [(+ dx x) (+ dy y)]))

---
    
    (defn step [cells]
      (set (for [[loc n] (frequencies (mapcat neighbours cells))
                 :when (or (= n 3) (and (= n 2) (cells loc)))]
             loc)))

---
 
    ((fn draw [board]
         (clear)
         (when (< (ffirst board) 38)
           (run! (fn [[x y]] (plot x y)) board)
           (js/setTimeout #(draw (step board)) 50)))
        #{[0 2] [1 0] [1 2] [2 1] [2 2]})

---

You can read more about Conway's game of life here:

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life