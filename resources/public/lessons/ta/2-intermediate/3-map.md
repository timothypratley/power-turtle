canvas: turtle

If `repeat` only works for functions that take input values,
how do we repeatedly call our new `square` function that needs a number?

---

Because our new `square` function takes a number, our question should be:
which numbers do we want to give?
If we put those numbers in a list, then we can repeat `square` using the `map` function:

```
(clean)
(home)

(map square [40 60 80 120])
```

---

What if we have a function that takes 2 numbers? How will `map` work, then?

```
(defn small-square-at-xy [x y]
  (setxy x y)
  (square 20))
```

For each input value of the function, we create a list of all values.
We create one list for the first input numbers.
We create another list for the second input numbers.
We give all lists to `map`.

```
(map small-square-at-xy [40 80  120 80 -40] [40 80 80 120 -40])
(home)
```