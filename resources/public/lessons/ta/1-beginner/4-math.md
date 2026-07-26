canvas: turtle

When we turned 4 times, we turned by 90 degrees, and then we got a square.
When we turned 8 times, we turned by 45 degrees, and then we got an octagon.
For the octagon, we multiplied the number of turns by 2, and we divided the angle by 2.
If we divide the turn angle by 2 again, how many turns will it take to get back to where we started?
First, what is the approximate value of 45 divided by 2?

```
(float (/ 45 2))
```

---

From the square to octagon, we multipled the number of turns by 2 and divided the angle by 2.
If the octagon needed an angle of 45 and 8 turns, and half of 45 is 22.5, then shape made by turning by 22.5 will need 8 * 2 = 16 turns.

You can represent the angle as either `22.5` or `(/ 45 2)`.

```
(clean)
(repeat 16 #(do (forward 50) (right 22.5)))
```

```
(repeat 16 #(do (forward 50) (right (/ 45 2))))
```

---

There are more math functions that we can use. The basic math functions are `+`, `-`, `*`, `/`.

```
(+ (* 4 20) 3)
```
---

When drawing shapes (ex: square, octagon), the number of sides in the shape is the same as the number of times we went forward and turned.

what is the relationship between number of turns and the turn angle size?

| number of turns | turn angle size |
|-----------------|-----------------|
| 4               | 90              |
| 8               | 45              |
| 16              | 22.5            |

---

Try multiplying the two numbers:

| number of turns | turn angle size | turn number * angle size |
|-----------------|-----------------|--------------------------|
| 4               | 90              | `(* 4 90)`               |
| 8               | 45              | `(* 8 45)`               |
| 16              | 22.5            | `(* 16 (/ 45 2))`        |

---

The product is always 360:

| number of turns | turn angle size | turn number * angle size |
|-----------------|-----------------|--------------------------|
| 4               | 90              | 360                      |
| 8               | 45              | 360                      |
| 16              | 22.5            | 360                      |

---

Draw shapes with different numbers of sides.

| number of turns | turn angle size | turn number * angle size |
|-----------------|-----------------|--------------------------|
| 3               | ??              | 360                      |
| 6               | ??              | 360                      |
| 5               | ??              | 360                      |

```
(repeat 3 #(do (forward 50) (right ?? )))
```

```
(repeat 6 #(do (forward 50) (right ?? )))
```

```
(repeat 5 #(do (forward 50) (right ?? )))
```