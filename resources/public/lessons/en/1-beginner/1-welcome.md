canvas: turtle

Hi!

In this lesson you will be sending commands to a robot turtle,
telling it to move around the grey area on the left.
There is a text area on the right of the page where you can enter the commands.

When you are ready, press the `>` button to the right.

---

To send your first command to the turtle robot,
type this command into the text area on the right and press the `enter` key:

    (forward 50)

The turtle will move forward, leaving a line behind it.

---

You can command the turtle to turn `left` and `right`.

Try sending these commands one at a time:

    (right 90)

    (forward 50)

    (left 90)

    (forward 50)

---

The number you give to `forward` indicates how far to move.
Try moving `forward` 20 instead of 50.

Try `left` or `right` 30 instead of 90.

---

If you press the `up` arrow while the cursor is in the text area,
the last command will come back so that you can execute it again.
If you make a mistake typing a command you can press `up` and fix it
instead of retyping the whole thing.

Draw four squares by moving `forward`, turning `right`,
and then using the `up` arrow and enter to repeat those commands.

---

You can create a combination of commands using `defn`:

    (defn zig []
      (forward 50)
      (right 120)
      (forward 50)))

And then you can call your new command by name just like any other command:

    (zig)

Now `zig` does all three steps in one command.

---

Create a command that draws a complete triangle.

Now create a command that calls your new command `triangle`, and `zig`.
It should look like this:

    (defn triangle-zig []
      (triangle)
      (zig))

And when you call `triangle-zig` the turtle performs all the commands.

---

Commands can take an input and call other commands using that input:

    (defn zag [x]
      (forward x)
      (left x)
      (forward x))

`x` represents the input to the command.

Try passing a number to the `zag` command:

    (zag 100)

---

And we can combine these functions too:

    (defn zig-zag []
      (zig)
      (zag 100)
      (zig)
      (zag 50))

When you define a command using `defn`, the `[x]` after it indicates how many inputs it takes.

---

Try creating a command that draws two triangles of different sizes.
You will need to specify two inputs.

---

It is useful to be able to repeat the same command several times,
and there is a command that does that:

    (repeat 3 zig)

Will call `zig` 3 times.

---

Can you draw an octagon by using `repeat`?

You will need to create a command with `defn` that does `forward` and `right`,
and then use that comand with `repeat`.

What happens if you draw an octagon, then turn left a little bit, and repeat those steps?
