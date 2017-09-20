canvas: turtle
description: Clojure conj 2017 talk
background-image: url(image.jpg)

# Learning Clojure through Logo

Elango Cheran

Timothy Pratley

Conj 2017

???

Disclaimer - this talk does not reflect our employers, these are personal views.

Btw, we’ll be switching speaking throughout the talk

---

Logo
 
--

Clojure

--
  
ClojureScript

???

Why Logo is compelling

How Logo relates to Clojure

How Clojure can expand its audience

---

Empowerment

Wonder

Self discovery

---

Interactivity

Exploration

---

show logo

---

Visual

Lisp

???

Insert explanation of Logo is a Lisp

---

Block.ly

???

Picture showing similarity of Lisp / Logo code & Block.ly blocks

There's something familiar about the regularity and simplicity
of blocks for Lispers. <--  That may be more novel for ppl from
 curly brace languages.

 Insert explanation of Block.ly being a Lisp (or at least Lisp-like??)
 - composition of fns
 - HOFs (via nested blocks)
 - regularity of "syntax"
 - lack of explicit types

---

Show, then tell

???

* functions/HOF were the hard part for beginner students
  - What we believe: just show them fn & repeat
  - They’ll get it.  Show first, encourage practice, then explain
  - In Block.ly, repeat (HOF) is made by nested blocks inside a block
* Problems occur when explaining before internalization

Parallels (?) to Clojure

* Clojure has steep-er (???) learning curve
  - Anecdote or example?
  - Contrast to Logo
    * Yet they’re both Lisp
* Motivation for clojure-turtle
  - Bring the Logo env into Clojure
  - Help people learn Clojure
    * Mixing Clojure bit-by-bit into Logo

---

Progression

???

I learnt Logo, now how do I program other stuff?

* Examples (of FP concepts made easy via visual Logo)
  Progression of examples?

Talk about spirals in Turtle introduce sequences
  - sequences needed to explain incremental increase in turns
  - maybe have image to help explain w/o resorting to demo'ing at this juncture in time

---

Order matters

???

Explaining too early can hurt

* Hypothetical scenario
  - Piaget:  let’s create FP knowledge systems based on visual Turtle
  - Papert:  visual and interactive is necessary but not sufficient.  new info must relate to existing knowledge.
* Progression becomes impt
  - Introducing `map` first - introduce seqs and transforming seqs
  - Introducing `range` first - introduce seqs

Logo lets people internalize a computation model that is simple and expressive. This model also translates very well to Clojure. We’re trying to make that bridge strong.
Using Quil requires learning more new information, more concepts than we can relate to. Logo requires less to talk about things like sequences.

Logo designed with simple & small set of primitives

???

what's wrong with Quil-like env - the focus isn't on learning concepts, instead gets tangential into graphics/animation domain

---

# Demo - progression of ideas

???

* basic Logo command
* another Logo command
* combining Logo commands into a fn
* calling repeat on fn
* TBD: one cool Clojure trick
* TBD: another cool Clojure trick
* stretch: mirrored?

---

BYO lessons

???

* How-to for Power Turtle
* Sandboxed environments (4Clojure and tryclj) (Museum tour)
* In the same spirit of Logo by putting control in users’ hands
* Example of Timothy’s defn vs. Elango’s all

---

Parlez vous Clojure?

???

* Most people we talked to about CBAN replied "everyone should learn English"
  - Timothy’s story
  - I think that’s just complacency. And it’s wrong.
  - Translations are great! Have you ever read ****? Ever done geometry? (it’s greek! How did you read Euclid?)
  - Democratized
* We’re not trying to change the world, it’s just easy in Clojure, no effort
* Many schools would love to teach Clojure if it were accessible to them

---

# cban / lein-cban

* clj-thamil -- works great, but only for Thamil, and only for Clojure (not ClojureScript)
* can non-programmers contribute?
* lein-cban - Translate other projects interfaces

---

# "Polyglot Clojure" - demo

---

# "Polyglot Clojure" - demo - 2

* Ppl can advance from Logo to all sorts of practical programming using any natural language that they’re comfortable with
  - Logo is no less a “real programming” language, technically, because it is a Lisp
  - The diff between Logo and Clojure is less than we think

---

# Error messages and user-experience

* Contrast with Elm message
  - Impt or beginners and experienced users
    * Just like Lisp is good for beginners (Logo) and experienced users (Clojure)

---

# Acknowledgements

* Power Turtle
  - Replumb & KLIPSE
    * Cool bits & hacks
      - Mike Fikes
* Quil

---

# Prior art

* Logo in the browser
  - Block.ly - Neil Fraser
    * MIT App Inventor
    * Scratch / code.org / etc.
    * Physical programming-related toys with Block.ly-based sw component
* Logo in Clojure
  - Nurullah Akkaya
  - rm-hull/turtle
  - japonophile/clogo

---

# In conclusion

* Logo gives learners a sense of empowerment
  - They control the path of their own learning
    * with the sense of wonder and self discovery that Logo provides
      - over into Clojure
* They expand their horizons beyond Logo
  - and let their imaginations carry them away.

???

Our hope is that we can give learners the sense of empowerment -- that they control the path of their own learning with the sense of wonder and self discovery that Logo provides, in Clojure. We hope they expand their horizons beyond Logo and let their imaginations carry them away.

---

# Links / contact

* sdflkjsdlfkj

* Comments / suggestions / contributions welcome!

* Thank you!

