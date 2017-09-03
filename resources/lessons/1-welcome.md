Welcome!

This is a place to learn how to write computer programs.
You will be sending commands to a robot turtle,
telling it to move around the grey area on the left.
There is a text area on the right of the page where you can enter the commands.

When you are ready, press the `>` button to the right.

---

Great. To send your first command to the turtle robot,
type this command into the text area on the right and press the `enter` key:

```clojure
(forward 50)
```

The turtle will move forward, leaving a line behind it.

---

You can command the turtle to turn `left` and `right`.

Try sending these commands one at a time:

```clojure
(right 30)
(forward 50)
(left 30)
(forward 50)
```

The number you send indicates how far to move in pixels,
or how far to turn in degrees.

---

You can make more complex commands by combining these commands.
To do several commands in a row you can combine them with `do`:

```clojure
(do
  (right 120)
  (forward 50)
  (right 120)
  (forward 50))
```

---

If you press the `up` arrow from the text area,
it will bring the last command back so that you can execute it again.
If you make a mistake typing a command you can just press `up` and fix it,
instead of retyping the whole thing.

You can press `up` and `down` to move backward and forward between the history of things you wrote in the text area.

---

You can name a combination of commands using `defn`:

```clojure
(defn zig []
  (forward 50)
  (right 120)
  (forward 50))
```

And then you can call your new command by name just like any other command:
```clojure
(zig)
```

---

Commands can take an input and call other commands using that input.

```clojure
(defn zag [x]
  (forward x)
  (left x)
  (forward x))
```

Here `x` represents the input to the command.
We could have called it something else if we wanted to.

Try passing a number to the `zag` command:

```clojure
(zag 100)
```

---

Try using your new commands together:

```clojure
(do
  (zig)
  (zag 100)
  (zig)
  (zag 50))
```

---

Some special commands take other commands as input.

```clojure
(repeat 3 zig)
```

Will call `zig` 3 times. Notice that `zig` is not inside `()`.

The `(zig)` mean execute the command now,
`zig` without `()` is just the name of the command.

---

At the bottom of a screen is a list of other useful commands.
You can click on them to get more information about what they do.
