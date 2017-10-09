canvas: turtle

Here is how you do math:

    (+ 1 2)

    (* 2 3)

    (/ 6 2)

When you enter these one at a time, you will see the result printed back to you.

---

Can you guess what happens when you do:

    (forward (+ 50 50))

Try it out.

As you probably guessed, calling `(forward (+ 50 50))` is the same as `(forward 100)`.

---

And you can define functions that do math too:

    (defn plus-ten [x]
      (+ x 10))

Try calling the `plus-ten` function and giving it some numbers.

---

Now try creating a new function called `times-two` that multiplies the input by 2.
And then creating another function `times-two-plus-ten` that does both steps.

---

That was a bit trickier... did you get the answer?

    (defn times-two-plus-ten [x]
      (plus-ten (times-two x)))

Which is the same thing as

    (defn times-two-plus-ten [x]
      (+ 10 (* 2 x)))

---

We call commands that return a value functions. But there really isn't any difference between them.
Commands are actually functions that return a special value called `nil`.
That just means that the result of a function like `forward` is not interesting,
whereas the result of a math function is very useful.
From now on I'll call everything a function.
