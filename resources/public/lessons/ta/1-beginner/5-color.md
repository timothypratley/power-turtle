canvas: turtle

We can change the color of the turtle's pen.

In computers, color is described in terms of 3 basic colors: red, green, and blue.

We give a number between 0 and 255 for each of red, green, and blue. That creates the final color.

---

If we want a red color, then we give red 255, and we give 0 to green and blue.

```
(clean)
(home)
(color [255 0 0])
(repeat 3 #(do (forward 50) (right 120)))
```

The same works for green and blue.

```
(color [0 255 0])
(repeat 6 #(do (forward 50) (right 60)))
```

```
(color [0 0 255])
(repeat 5 #(do (forward 50) (right 72)))
```

---

When mixing paint, colors change one way. When mixing light, the way they mix is different.

* red + green = yellow
* red + blue = light purple
* green + blue = light blue

We can draw a large yellow shape like the sun

```
(clean)
(color [255 255 0])
(repeat 8 #(do (forward 50) (right 45)))
```

---

Black is all 0. White is all maximum numbers.

```
(clean)
(color [0 0 0])
(repeat 4 #(do (forward 50) (left 90)))
```

```
(color [255 255 255])
(repeat 4 #(do (forward 50) (right 90)))
```