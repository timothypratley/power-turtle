canvas: turtle

When we call our functions `square` and `octagon`, we only use the name, like `(square)`, `(octagon)`.
When we call functions like `left` and `right`, we give them numbers like `(right 45)` and `(left 90)`.

What if we give numbers to our functions?
What if the number we give is the length of a side of the shape?
That way, we can create shapes of different sizes.

---

Let's replace our `square` function so that it can take the number that we give it.

```
(defn square [length]
  (repeat 4 (forward length)
            (right 90)))
```

We called the given number as `length` because it is the length of a side.
Then, we gave `length` to `forward` to create a side of the correct length.

---

With the new `square` function, we must specify the length.

```
(clean)
(home)

(repeat 8 (square 50)
          (right 45)))
```

---

We can now make squares of different shapes

```
(square 40)
(square 60)
(square 80)
(square 120)
```

---

Can you make a function that draws a shape by taking 2 numbers:

1. the length of a side
2. the number of sides

---

```
(defn shape [length num-sides]
  (repeat num-sides (forward length)
                    (right (/ 360 num-sides)))))
```

Try it!

```
(shape 80 7)
(shape 40 11)
```