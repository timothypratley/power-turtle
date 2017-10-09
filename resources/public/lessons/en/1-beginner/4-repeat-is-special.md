canvas: turtle

You have been using `repeat` for a while now.

Did you notice that when we wrote:

    (repeat 3 zig)

The `zig` is not inside `()`?

`(zig)` means execute the function now and give me the result.
But `zig` without `()` is just the name of the function.

In `(repeat 3 zig)` we use the name of the command `zig` as the input for repeat.

---

In the math lesson we saw how to use the result of one function as an input to another function.

There is a big difference between `(repeat 3 zig)` and `(repeat 3 (zig))`;
the first version gives the command `zig` as an input,
the second version gives the result of calling `zig` as an input.

The result of `zig` is `nil`, which is not a command.
And `repeat` doesn't know what to do with `nil`.

---

So that's why we have been using `defn` together with `repeat`,
because we needed a function name to give it.
But there is a way to create a function without a name:

    (fn [x]
      (+ 1 2))

This just creates a function... but without a name how can we use it?

---

Well, it means we can do things like this:

    (repeat 3 (fn [] (forward 50) (right 90)))

Now we are passing a function to repeat instead of the name of a function.

---

Usually we are better off creating a named function with `defn` because it makes
it easier to see and remember what each part is doing.
The important thing to understand is that repeat takes a function as the second input.

Can you think of a way to make this function call valid?

    (repeat 3 (make-function))

Hint: you will need to `defn` a function that returns a function,
so that the result of (make-function) is something that `repeat` can use.
