Now that you know how to move the robot turtle with commands
it is time to start drawing some patterns.
Patterns are simple shapes that get repeated in many places.
First we'll need to create a simple shape like a triangle.

    (defn triangle []
      (forward 50)
      (right 120)
      (forward 50)
      (right 120)
      (forward 50))

---

Notice that if you call the new `triangle` command 3 times,
3 triangles get drawn.
But from then on, drawing more triangles just go over the
existing triangles because the turtle always ends up in the same place.
To make a pattern we will need to make the turtle move or turn a little bit
between drawing triangles.

    (right 15)
    (triangle)
    (right 15)
    (triangle)
    
---

Great! We can see a pattern emerging.
Do you remember how to `repeat` commands?
First we'll need to put the steps into a single command:

    (defn step []
      (right 15)
      (triangle))
      
Call this command to check that it is working.
      
---

Now call the `repeat` command to operate 24 times on `step`:

    (repeat 24 step)
    
We made our first pattern!

---

Now try creating a new version of the `step` command that
also moves the turtle forward each time...
and then use repeat to create a pattern.
Something like this:

    (defn step []
      (right 15)
      (forward 50)
      (triangle))
      
---

There are lots of triangles on the grey area now.
You can erase them by using the `clean` command.
You can send the turtle back to the starting location using the `home` command.
Now we have a fresh work area.

---

How would we repeat the pattern we just created in many places?
We need to put our pattern into a command and repeat it.

    (defn pattern []
      (right 15)
      (forward 50)
      (repeat 24 step))
      
Try it out:

    (repeat 24 pattern)
    
---

Try creating a more complicated shape like an octagon,
and then making a pattern out of it.
Try using the `blue`, `green` and `red` commands to overlap
colorful patterns.
