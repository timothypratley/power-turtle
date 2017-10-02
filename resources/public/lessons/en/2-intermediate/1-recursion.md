canvas: turtle

Functions can call themselves.
But it's easy for a function to keep calling itself forever...
So whenever a function calls itself, we need to specify a stopping condition.

    (defn f [x]
      (when (< x 10)
        (forward 20)
        (right 20)
        (f (+ x 1))))
        
Can you guess what this function will do if you call it?
Try it out.

    (f 0)

---

When we called `(f 0)`, it did `forward`, `right` 10 times.
This is kind of like `repeat` right?
Functions calling themselves is another way to do things like `repeat`.
