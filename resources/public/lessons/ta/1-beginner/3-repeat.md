canvas: turtle

What happens when you use different numbers for the angle to turn right?

```
(clean)
(home)
(right 90)
(forward 50)

(clean)
(home)
(right 180)
(forward 50)

(clean)
(home)
(right 270)
(forward 50)
```

--- 

What if you want to turn halfway right or left, to draw the letter V ?
If turning to the right fully is `(right 90)`, how do we turn halfway right?

---

```
(clean)
(home)
(right 45)
(forward 50)
```

---

If we want to draw the letter V, we should go backwards, turn to the other side,
and go forwards again.

To turn to the other side, we have to turn by the angle amount twice.
The first turn is to get back to the original direction.
The second turn is to turn to the other side.

---

```
(back 50)
(left 45)
(left 45)
(forward 50)
```

--- 

We can get back home in two different ways:

```
(back 50)
(right 45)
```

```
(home)
```

---

We drew a square by moving forward, turning 90 degrees, and repeating this 4 times.

What if did the same thing, but only turned 45 degrees?

```
(forward 50)
(right 45)
(forward 50)
(right 45)
(forward 50)
(right 45)
(forward 50)
(right 45)
```

---

We get half an octagon. If we do it again, we will finish the whole octagon.

```
(forward 50)
(right 45)
(forward 50)
(right 45)
(forward 50)
(right 45)
(forward 50)
(right 45)
```

---

It is difficult to repeat the commands many times.
We can repeat a set of commands N times by putting them inside `(repeat N #(do  ... ))`

```
(clean)
(home)
(repeat 8 #(do (forward 50) (right 45) ))
```

---

We don't have to write each command on a single line. We only need to ensure that the parenthases are equal.

```
(clean)
(home)
(repeat 8 #(do
            (forward 50)
            (right 45)))
```
