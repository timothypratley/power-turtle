canvas: turtle

In the lessons about shapes, we used the `repeat` function often. Ex:

* `(repeat 8 #(do (forward 50) (right 45)))`
* `(repeat 4 #(do (forward 50) (left 90)))`

We repeated those commands a lot. Can we avoid repeating `repeat`?

---

Since we draw the same shape over and over again, let's give that work a name.

We can create a function to define some work. We give the function a name. Then we can call that function using its name.

```
(defn square []
  (repeat 4 #(do (forward 50) (right 90))))

(defn octagon []
  (repeat 8 #(do (forward 50) (right 45))))

(clean)
(home)
(square)
(octagon)
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

(repeat 2 #(do
            (square)
            (right 90)))
```

---

A function lets us explore different ways of drawing shapes.
If we draw the suqare repeatedly, and turn by 45 degrees 8 times, then we will end up at the beginning.

```
(clean)

(repeat 8 #(do
            (square)
            (right 45)))
```

---

Let's explore changes.

```
(clean)
(color [0 0 255])

(repeat 12 #(do
            (octagon)
            (right 30)))
```