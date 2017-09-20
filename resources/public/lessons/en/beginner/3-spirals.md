canvas: turtle

Spirals are interesting shapes which can draw with the turtle.

Drawing a spiral is a little bit like drawing a circle.
We can draw a circle by moving forward a tiny bit and turning a little bit over and over again:

    (defn step []
      (forward 1)
      (right 10))

If you call it 36 times (because there are 360 degrees in a circle),
the turtle will draw a circle.

    (repeat 36 step)

---

The trick with a spiral is that you either need to turn a little bit less each step,
or go a little bit further each step, so that the circle never meets itself.
Let's try going a bit further each time. We can tell our step function how far to go by passing in a parameter:

    (defn step [x]
      (forward x)
      (right 10))

If you manually call this step a few times you will see a bigger circle forming.
Press up enter up enter up enter up enter to repeat the step.
You can't use repeat, because the command takes an input now.


    (step 5)

---

What we need to do is call step with a range of inputs from 1 through
to some higher number. Something like:

    (step 1)
    (step 1.1)
    (step 1.2)
    (step 1.3)
    (step 1.4)

It would be tiresome to type all the numbers out.
We can see we just need a range of numbers to operate on.

---

We want, a sequence of increasing numbers.
There are lots of commands to create sequences.
Let's use the command `range`:

    (range 5)

You should get back `(0 1 2 3 4)`.
It gave you a sequence of integers starting from 0 and up to but not including 5.

---

You can call range with 3 arguments to request a start, finish, and step size:

    (range 1 10 0.1)

This says, give me a sequence of numbers starting at 1,
up to but not including 10,
increasing by 0.1 between each number.
It will return a sequence of numbers that are the sequence we need to make a spiral.

---

Now we learn a really powerful command: `map`.
This is one that is used very often when working with sequences.
`map` applies a function over a sequence... which is exactly what we want.
We want our `step` command to be called on each number in the `range` sequence.
We do this like so:

    (map step (range 1 10 0.1))

And this draws a spiral.
It calls our `step` command on each of the numbers in the sequence we created with `range`

---

There is also another way to make a spiral called recursion.
Imagine if the `step` command called itself!
That is exactly what recursion is.

`step` can call itself with a slightly bigger number each time by adding a little bit to the input we gave it.
But it needs to know when to stop, or it will just keep trying to call itself infinitely many times, which is impossible.
So the big rule to remember with recursion is to remember to stop!

    (defn step2 [x]
      (forward x)
      (right 10)
      (if (< x 10)
        (step2 (+ x 0.1))))

---

Now if you start `step2` off with an initial input of 1:

    (step2 1)

You get exactly the same spiral that we created earlier.

These are 2 different approaches to calling a command
over and over again with slightly different values.
Actually they are exactly the same from the computers point of view,
so it just depends on how you prefer to think about the problem.

---

The spiral we drew is quite a tight spiral.
What if we wanted the spiral to get bigger faster?
Instead of numbers spaced out with a fixed step size like:

    [1, 1.1, 1.2, 1.3, ...]
     
we need steps that increase in size each time, like:

    [1, 1.2, 1.4, 1.8, ...]

One way to achieve that is to multiply every number in the first sequence by 2.
Do we have a way to do that? Yes! `map` applies a function of a sequence.

---

First we create a command that multiplies another number by 2:

    (defn twice [x]
      (* x 2))

Try it out to make sure when you double 2 you get 4:
      
    (twice 2)

---

Now use `twice`, `map`, and `range` together:

    (map twice (range 1 10 0.1))

---

And now put it all together to draw a loose spiral:

    (map step (map twice (range 1 10 0.1)))
    
---

Great job, you now know how to create new sequences from other sequences.
How would you draw a loose spiral using recursion?    
