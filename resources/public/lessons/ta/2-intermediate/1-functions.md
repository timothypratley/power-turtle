canvas: turtle

In the lessons about shapes, we used the `repeat` function often. Ex:

* `(repeat 8 (forward 50) (right 45))`
* `(repeat 4 (forward 50) (left 90))`

We repeated those commands a lot. Can we avoid repeating `repeat`?

---

Since we draw the same shape over and over again, let's give that work a name.

We can create a function to define some work. We give the function a name. Then we can call that function using its name.

```

(defn square []
  (repeat 4 (forward 50) (right 90) ))


(clean)
(home)
(square)
```

---

Now that it easy to draw a specific shape, it is easy to make a bigger picture.

```
(clean)
(square)
(right 90)
(square)
```

---

We can use our new function like any other function we use. We can use it inside `repeat`, too.

```
(right 90)

(repeat 2 (square)
          (right 90))
```

---

A function lets us explore different ways of drawing shapes.
If we draw the suqare repeatedly, and turn by 45 degrees 8 times, then we will end up at the beginning.

```
(clean)

(repeat 8 (square)
          (right 45))
```

---

Let's create a function to draw an octagon.
An octagon has 8 sides, so the angle to turn will need to be 1/8 of the 360 degrees of a full rotation.

```
(defn octagon []
  (repeat 8 (forward 50) (right 45) ))

(octagon)
```

---

If we give `octagon` to `repeat`, do we see anything interesting?

```
(clean)
(home)

(repeat 12 (octagon))
```

---

All we see is one octagon. If you look closely, you might see that the octagon is slightly thicker than calling `octagon` once.

That is a clue to help us understand what happened. After calling `octagon`, the turtle ends up in the same position that it started. We drew the same octagon many times.

---

To do something interesting, we need a function that draws an octagon and moves to a different position.

```
(defn octagon-and-turn []
  (octagon)
  (right 30))

(repeat 12 octagon-and-turn)
```

---

Let's explore changes. We can make the octagons blue.

```
(clean)
(color [0 0 255])

(repeat 12 (octagon)
           (right 30))
```

---

Let's add more one more change.
Let's make the fill color of the octagon half green with a half transparency.
We want to keep the border blue.

The easiest way is to simplify the problem.
First, create a single octagon with the right border and fill color.
Use a function for that new octagon.
Then repeat that function.

---

The color setting is used for the line color and also when specifying the fill color when a shape is drawn.

To solve this problem, we will draw the shape with a fill color, and then draw the shape again with the border line color.

We'll reset the color back to the default, black, at the end.

```
(clean)
(defn octagon-blue-yellow
  []
  (color [0 0 255])
  (octagon)
  (color [0 127 0 127])
  (start-fill)
  (octagon)
  (end-fill)
  (color [0 0 0]))

(repeat 12 (octagon-blue-yellow)
           (right 30))
```

