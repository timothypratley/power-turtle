canvas: turtle

We create complete shapes, we can fill the shapes with a color.

First, we begin the fill. Then we draw the shape. Then we stop the fill.

```
(clean)
(home)
(color [255 255 0])
(start-fill)
(repeat 8 #(do (forward 50) (right 45)))
(end-fill)
```

---

Create a picture with shapes!

* Draw a flower
* Draw a tree
* Draw a fruit

---

When specifying color, if we specify a fourth number, it changes the transparency.
We call the fourth number "alpha".

With turtle, we use a number from 0 to 255 for transparency. 0 makes it invisible. 255 makes it solid with no transparency.

```
(clean)
(color [255 255 0 127])
(start-fill)
(repeat 8 #(do (forward 50) (right 45)))
(end-fill)
```

---

The transparency is visible when you have 2 overlapping shapes with transparency. Draw the following shape after drawing the previous yellow octagon. Because blue is dark, we use a 50% blue. The transparency is 50%, like the previous shape.

```
(color [0 0 127 127])
(start-fill)
(repeat 4 #(do (forward 100) (right 90)))
(end-fill)
```

---

What happens if you draw the blue shape before the yellow shape?

When the yellow shape comes later, it looks like it is drawn on top. The overlap area in the middle looks more yellow.