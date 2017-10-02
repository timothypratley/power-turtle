canvas: raster

The raster canvas provides a way to draw pictures using a pixel based system.
You set pixels at (x, y) coordinates on the screen.

    (plot 2 3)      ;; plots a point on the screen

Try setting some pixels at other locations.

---

You can set the color to draw in like this:

    (color :pink)

That changes the color to pink. Now when you set a pixel, it will be pink.

    (plot 5 5)

You can ask what color a pixel is like this:

    (scrn 5 5)
          
You get back the answer `:pink`

---

    (hlin 3 9 10)
       
Draws a horizontal line

    (vlin 3 9 10)

Draws a vertical line

    (clear)

Clears screen

---

Can you draw a smiley face by setting pixels?
