canvas: turtle

When we have a function that takes nothing in (ex: takes no numbers),
we can use the function name directly with `repeat`.

If we give `octagon` to `repeat`, do we see anything interesting?

```
(clean)
(home)

(repeat 12 octagon)
```

---

All we see is one octagon. If you look closely, you might see that the octagon is slightly thicker than calling `octagon` once.

That is a clue to help us understand what happened. After calling `octagon`, the turtle ends up in the same position that it started. We drew the same octagon many times.

To do something interesting, we need a function that draws an octagon and moves to a different position.

---

```
(defn octagon-and-turn []
  (octagon)
  (right 30))

(repeat 12 octagon-and-turn)
```