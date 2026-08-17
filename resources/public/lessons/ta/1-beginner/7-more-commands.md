canvas: turtle

Let's talk about a few more commands related to drawing:

* `penup`
* `pendown`
* `setxy`
* `setheading`

---

We say that the turtle carries a pen when it moves.
It starts with the pen down.
When the pen is down, and the turtle moves, it draws a line.
When the turtle picks up the pen,
then it won't draw anything when it moves until it puts the pen down again.

---

We've seen drawing with the pen down already.

```
(clean)
(home)
(forward 50)
```

The turtle picks up the pen with `penup`.

```
(penup)
(forward 50)
```

To make the turtle put the pen down again, use `pendown`.

```
(pendown)
(forward 50)
```

---

You can pick up the turtle and put it down in a specific position using `setxy`.
It takes two numbers.
The first number is the x coordinate, indicating how far left and right.
The second number is the y coordinate, indicating how far up and down.
For both numbers, 0 is middle of the screen.

```
(clean)
(setxy -100 0)
(forward 50)

(setxy 100 0)
(forward 50)
```

---

```
(setxy 0 -100)
(forward 50)
```

Since the middle position is `0, 0`, and `home` puts you in the middle position,
`(setxy 0 0)` is the same as `(home)`.

```
(setxy 0 0)
(forward 50)

(home)
```

---

`setheading` points the turtle in a particular direction.

* `0` - turtle points right
* `90` - turtle points up
* `180` - turtle points left
* `270` - turtle points down

```
(setheading 225)
(forward 50)
```

What happens when you use a value of `360` or higher? What happens when you use a negative value?