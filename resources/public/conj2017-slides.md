class: center, middle, inverse

# Learning Clojure through Logo

<br><br>
![Turtle](turtle.jpg)

### Elango Cheran, Nest
### Timothy Pratley, Outpace

<br>
October 2017<br>
Clojure/Conj <br>
Baltimore, MD<br>

???

@Elango:

I'm Elango, and this is Tim.

Our talk is entitled "Learning Clojure through Logo".

This talk presents our personal views, not those of our employers.

---
class: middle, inverse, center

# Learning via Logo

# Logo and Clojure

# Clojure and reach

???

# Overview

This talk will be about:
* why Logo is a compelling learning environment
* how Logo relates to Clojure
* how Clojure can expand its potential audience in surprising ways

---
class: middle, inverse, center

### Act 1:
# Learning via Logo

???

---
background-image:url(../../../img/turtlex.jpg)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* Logo is a programming language to control a robot turtle.
* The turtle is represented as a triangle.
* You send movement commands to the turtle instructing it where to go.
* When the pen is down, wherever the turtle goes, it draws a line.

---
class: middle

<iframe src="index.html#logo" style="width:100%; height:71%; border: none">
<div id="app"></div>
</iframe>

???

You can issue commands like

    (right 30)
    (forward 50)
    (left 60)
    (forward 50)
    (back 100)

---

# Logo

     TO STOPSIGN
       FORWARD 200
       LEFT 90
       FORWARD 25
       REPEAT 8 [  RIGHT 45   FORWARD 50  ]
       HOME
     END

---

# Lisp
    
    (TO STOPSIGN
      (FORWARD 200)
      (LEFT 90)
      (FORWARD 25)
      (REPEAT 8 [ (RIGHT 45) (FORWARD 50) ])
      (HOME)
     END)

???

* TODO: make parens bluish
  
---
background-image: url(../../../img/scratch.png)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* TODO: crop out title bar with date

# What's old is new

* Old yet we still use it to teach kids
  - Scratch

---
background-image: url(../../../img/blockly.png)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* Currently many efforts to teach kids programming
  - Blockly - a JS library for graphical code created at Google
  - Other things based on Blockly (code.org, physical games for kids with coding component)
* You can see the Logo origin
  - Moving character with spatial commands, structuring commands
  - Even in similarity of Blockly blocks <-> Logo code blocks
    * As Lispers, Logo code blocks -> Lisp forms without parens
* Irony:
  - we start our lives in Lisp - easy to learn programming
  - then program with semi-colons & curly braces
  - then we come back to Lisp - unrivalled power and simplicity
* Which begs the question:
  - if the same thing is good for beginners and very advanced users...
  - ...then why do we avoid it in between?

---
background-image: url(../../../img/drj_vs_lb.jpg)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* BASIC - first language, but wasn't great
  - started in elementary school
  - wanted to program Commodore 64 to do other things


---

.left-column[

<center>
<img src="../../../img/C64_startup_animiert.gif" width="400px">
<img src="../../../img/Commodore-64.jpg" width="400px">
</center>

]

.right-column[

* BASIC - for "beginners"
* playing -> programming
* gave up on programming
 
]

???

* BASIC (cont'd)
  - took a class at age 10
  - only could learn enough for a guessing game
  - too hard to go further
  - gave up on programming
  - (so much for Beginner's All-purpose Symbolic Instruction Code)

---

# How is Logo interesting?

???

TODO: insert drawing an E, and other things

* Logo - I loved learning it:
  - took a class in middle school, at age 11
* reveal
  - easy to pick up
* reveal
  - drew random pictures
  - learned how to create more complex pics
    * fns & recursion to assist
* reveal
  - took a class in middle school, at age 11
  - easy to pick up
  - drew random pictures
  - renewed my interest in programming

--
* Easy

--
* Drew what I wanted

--
* Made programming fun

---
class: middle, inverse, center

### Act 2:
# Logo in Clojure

---

# Learning Clojure

* How to begin? and proceed?
* Examples abstract
* Like the Unix CLI
* Can it get better?

???

# Show, then tell -- but now in Clojure

* Elango's story of learning Clojure
  - Didn't know which reference resource to use
  - Didn't feel comfortable setting up environment in CLI
  - Reading about seqs, data structures, and core fns felt abstract
  - Fns like learning Unix CLI tools - don't know the perfect tool unless you already know it
  - Have to keep bashing your head against a wall until you learn it all
* Meanwhile, Logo is also a Lisp

---

# Learning Clojure

<img src="../../../img/turtlex.jpg" width="300px" align="middle">
<img src="../../../img/arrow-blue-outline-right.jpg" width="50px" align="middle">
<img src="../../../img/clojure_logo.svg" width="240px" align="middle">

    [com.google/clojure-turtle "0.3.0"]

???

* clojure-turtle
  - Bring Logo to Clojure
  - Help make learning Clojure easier

---
class: middle

<iframe src="index.html#logo" style="width:100%; height: 71%; border: none">
<div id="app"></div>
</iframe>

???


    ;; Let's start off with a really simple shape: a square
    
    (forward 30)
    (right 90)
    (forward 30)
    (right 90)
    (forward 30)
    (right 90)
    (forward 30)
    (right 90)
    
    ;; Okay, that's repetitive, so let's simplify that
    
    (clean)
    (repeat 4 #(do (forward 30) (right 90)))
    
    ;; Let's create an octagon (a stop-sign shape).
    ;; It takes 2 turns to make a full 90 degrees, so
    ;; each turn will be 45 degrees
    
    (repeat 8 #(do (forward 30) (right 45)))
    
    ;; Let's give a name to the code that draws an octagon
    
    (defn octagon [] (repeat 8 #(do (forward 30) (right 45))))
    
    ;; So we can just say octagon now
    
    (clean)
    (octagon)
    
    ;; Using repeat and doing some turning, we can rotate our octagon around
    
    (repeat 12 #(do (octagon) (right 30)))
    
    ;; Let's change the color and do that again
    
    (color [0 0 255])
    (repeat 12 #(do (octagon) (right 30)))
    
    ;; Let's go back to a simple octagon
    
    (clean)
    (color [0])
    (octagon)
    
    ;; If we know the length of an octagon, we can start tiling the octagons
    
    (def size (+ 30 (/ 60 (js/Math.sqrt 2))))
    
    (penup)
    (forward size)
    (pendown)
    (octagon)
    (penup)
    (forward size)
    (pendown)
    (octagon)
    
    ;; Let's use range and map to create a column of octagons
    
    (def offsets (range -2 3))
    
    (def y-coords (map (fn [o] (* size o)) offsets))
    
    (defn octagon-at-height
      [y]
      (home)
      (penup)
      (forward y)
      (pendown)
      (octagon))
    
    (map octagon-at-height y-coords)
    
    ;; Let's cover the whole canvas.
    ;; Instead of worrying about penup and pendown, let's use setxy to
    
    ;; teleport the turtle.  We'll generalize our octagon fn, and
    ;; we'll use for to create the offsets.
    ;; And we'll throw in some randomness to make the color interesting.
 
 
    (do
      
      (def offsets-xy (for [x (range -3 3) y (range -3 4)] [x y]))
    
      (defn offset-to-coord
        [offxy]
        [(* size (first offxy)) (* size (second offxy))])
    
      (def coords (map offset-to-coord offsets-xy)))
    
    
    
    (do
    
      (defn octagon-here
        [x y]
        (setxy x y)
        (color [0 (rand-int 255) (rand-int 255)])
        (octagon))
    
      (defn octagon-at-coord
        [coord]
        (octagon-here (first coord) (second coord))))
    
    
    
    (map octagon-at-coord coords)

---

# Why is Logo interesting?

* Easy to learn
* Exploration
* Empowerment

???

* Logo is an environment that is:
  - simple
  - interactive
  - visual
* Exploration-based learning often used in Logo classes as mode of instruction
  - User learning how to interact & manipulate the environment
  - Gives sense of:
    * self-discovery, excitement, wonder
    * empowerment

---
background-image: url(../../../img/logo-turtle-robot.png)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* Interactivity means:
  - more than just one sense (vision <- also sound, touch)
  - more than just output (also input)
* A physical object makes it "real"
  - tangible
  - relatable
  - connected to reality, not abstract

---

<img src="../../../img/dash-and-dot.jpg" width="350px">
<img src="../../../img/ozo.png" width="350px">
<img src="../../../img/microbit-guitar.png" width="700px">

???

* Toys following in those footsteps 

---
background-image: url(../../../img/papert.gif)
background-position: center
background-repeat: no-repeat
background-size: contain

???

# Philosophical design

* main goals: interactivity & exploration - first & foremost
  - Seymour Papert
    * Knowledge = systems we create, to absorb new info
      - Those systems must be based on existing knowledge systems we created
    * Knowledge acquisition happens best when:
      - We can relate new info to existing knowledge in a personal way
      - We are put in control of our own learning
    * Created Logo just as a means to exemplify his theory

---
background-image: url(../../../img/mindstorms.jpg)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* Mindstorms

---

# Prior art

- Logo in Clojure
  * Nurullah Akkaya - https://nakkaya.com/2010/01/09/a-simple-turtle-graphics-implementation-in-clojure/
  * rm-hull/turtle
  * japonophile/clogo
  
- Logo in the browser
  * MIT App Inventor
  * Scratch / code.org / etc.
  * Physical programming-related toys with Blockly-based sw component

???

# Different focus

* We're not the first ones to bridge these concepts
* But we have a different focus:
   - Blurring the lines between Logo and Clojure
   - Blurring the lines between Turtle and Programming

---
class: middle, inverse, center

### Act 3:
# Clojure and Reach

???

@ Timothy

* If you are interested in learning Clojure, how do you get started?

---

<img alt="Happy friends" src="../img/friends2.jpg" style="width:100%">

???

* My friend Nathan came up to me last year and said:
  - "I'm ready to give Clojure a try, I've even installed Emacs!"
* I winced a little because learning a new editor and language at the same time means danger ahead
* But I was eager to show him how great Clojure was 

---

<img alt="Friend showing other friend computer" src="../img/interested.jpg" style="width:100%">

???

* I said:
  - "Awesome! Clojure is so cool. First we need some other stuff..."

---

<img alt="Confused by computer" src="../img/beforeanger.jpg" style="width:100%">

???

* Install Java
* Get Leiningen
* Make a project
* Add these dependencies
* Start a REPL
* Let's talk about the namespace syntax so you can use those dependencies
* Don't press ctrl z in emacs!

---

<img alt="Bashing computer on table" src="../img/anger.gif" style="width:100%">

???

* Learning a bunch of new tools is frustrating when we just want to write some code.

---

# Getting started is hard

???

* Getting started is hard right? Well, not any more!

---

# Getting started is ~~hard~~ easy!

<img src="../../../img/repl.png" width="400px" align="middle">

???

* All that changed last year with the arrival of self hosted ClojureScript REPLs
* Now you can compile and Evaluate ClojureScript in the browser
* All you need to get coding is a URL

---

# Getting started is ~~hard~~ easy!

<img src="../../../img/repl.png" width="400px" align="middle">
<img src="../../../img/turtlex.jpg" width="300px" align="middle">
<br>
<br>
.center[
<img src="../../../img/arrow-blue-outline-right.jpg" width="50px" align="middle" style="transform: rotate(90deg)">

<br>

.large[http://timothypratley.github.io/power-turtle]
]

???

* I'd been talking with Elango about teaching Clojure through Logo 
  - and we thought, what if we marry turtle with a ClojureScript REPL

---

<iframe src="index.html" style="width:100%; height:100%; border: none">
<div id="app"></div>
</iframe>

???

* This is Power Turtle; a batteries included REPL
* The first lesson presents the Logo commands: forward, left, right
* Then describes combining commands into new commands
* And shows how to repeat commands
* Users don't have to worry about tools and dependencies to get started.

* I'll quickly show you the capabilities of Power Turtle
* In freestyle mode you can choose from several canvases
  - Turtle you have seen already; it's great for drawing geometric shapes
  
  
    (do
        (defn g [x]
          (if (zero? x)
            (forward 14)
            (let [x (dec x)]
              (g x)
              (g x))))
        (defn f [x]
          (if (zero? x)
            (forward 14)
            (let [x (dec x)]
              (f x) (left 120)
              (g x) (right 120)
              (f x) (right 120)
              (g x) (left 120)
              (f x))))
        (f 4))
  
  - Raster provides another drawing system based on pixels
  
  
    (do
      (plot 5 5)
      (color :light-green)
      (plot 10 5)
      (hlin 5 10 10))
     
  * patterns provide a good motivation for sequences


    (do    
      ;; Draw 13 stripes cycling over red/white
      (doseq [[n c] (take 13 
                      (map vector (range) (cycle [:red :white])))] 
        (color c)
        (let [x1 10 
              x2 30 
              y (+ 10 n)]
          (hlin x1 x2 y)))
    
      ;; Fill in a dark blue field in the corner
      (color :dark-blue)
      (doseq [x (range 10 19)
              y (range 10 17)]
        (plot x y))
    
      ;; Add some stars to the field by skipping by 2
      (color :white)
      (doseq [x (range 11 19 2)
              y (range 11 17 2)]
        (plot x y)))
        
    
  * You can even create Conway's game of life

   
    (do
      (defonce t (atom nil))
      (when t (js/clearTimeout @t)
      (defn neighbours [[x y]]
        (for [dx [-1 0 1]
              dy (if (zero? dx)
                   [-1 1]
                   [-1 0 1])]
          [(+ dx x) (+ dy y)]))
    
      (defn step [cells]
        (into {}
          (for [[[x y :as loc] n] (frequencies (mapcat neighbours (keys cells)))
                :when (or (= n 3) (and (= n 2) (cells loc)))
                :when (and (< -1 x 30) (< -1 y 30))]
            [loc (or
                   (cells loc)
                   (rand-nth [:dark-green :medium-green :light-green :light-blue :medium-blue :dark-blue]))])))
    
      ((fn draw [board]
         (clear)
         (run! (fn [[[x y] c]] (color c) (plot x y)) board)
         (reset! t (js/setTimeout #(draw (step board)) 50)))
       (zipmap
         [[0 2] [1 0] [1 2] [2 1] [2 2]
          [21 15] [22 15] [20 16] [21 16] [21 17]]
         (cycle [:light-blue])))))

      
  - Quil is a comprehensive drawing system
  
  
    (do (quil.core/ellipse 200 200 150 200)
      (quil.core/arc 200 240 50 50 0 js/Math.PI)
      (quil.core/triangle 170 175 173 170 176 175)
      (quil.core/triangle 220 175 223 170 226 175))

  - And a charting canvas
  
  
    (power-turtle.view.canvas.chart-canvas/chart (range 10))
    (power-turtle.view.canvas.chart-canvas/chart (map #(* % %) (range 10)))
    (power-turtle.view.canvas.chart-canvas/chart (map #(/ 10 %) (range 1 11)))
    
      
  - The HTML canvas let's you create HTML elements.
  
  
    (html
      [:div
       [:h1 "Greetings traveller"]
       "What's your name? " [:input]
       [:h3 "Shopping list:"]
       [:ol [:li "milk"] [:li "bacon"] [:li "cheese"]]])

  * you can make webpages inside this webpage
  * you can create buttons and SVG images
  * you can make little games

  
    (let [flip (reagent.core/atom 90)
          flip-spring (reanimated.core/spring flip)]
      (html
        [(fn []
           [:div
            [:button {:on-click (fn [e] (swap! flip -))}
             [:img {:src "turtle.jpg"
                    :style {:transform (str "rotateY(" (+ 90 @flip-spring) "deg)")}}]
             "Click me"]
            [:br] [:br] [:br]
            [:svg {:transform (str "rotate(" (+ 90 @flip-spring) ")")}
             [:circle {:r 50, :cx 75, :cy 75, :fill "green"}]
             [:circle {:r 25, :cx 75, :cy 75, :fill "blue"}]
             [:path {:stroke-width 12 :stroke "white" :fill "none"
                     :d "M 30,40 C 100,40 50,110 120,110"}]]])]))

  * you can embed the other canvases


    (html
      [:div
       [:div {:style {:width 150 :height 150 :display "inline-block"}}
        [power-turtle.view.canvas.turtle-canvas/turtle-canvas]]
       [:div {:style {:width 150 :height 150 :display "inline-block"}}
        [power-turtle.view.canvas.chart-canvas/chart-canvas]]
       [:div {:style {:width 300 :height 150 :display "inline-block"}}
        [power-turtle.view.canvas.raster-canvas/raster-canvas]]])
 
  
    (js/clearTimeout @t)
  
    
* We want learners to transcend Logo
  - into other interesting things
  - in Clojure
* There are several lessons go through
* Lessons are a slideshow of information and prompts
* There is a progression of concepts...
  - call a function
  - combine functions into new functions
  - repeat functions
  - create sequences
  - use sequences
  - modify sequences

---
background-image: url(../../../img/blockly-nested-blocks.png)
background-position: center
background-repeat: no-repeat
background-size: contain

# Show, then tell

???

@ Elango

# Show, then tell

* Functions/HOF were the hard part for beginner students
  - Problems occur when explaining before internalization
  
* From our experience:
  - Show first, encourage practice, then explain
  - just show them fn & repeat
    - They get it.
  - In Blockly, repeat (HOF) is made by nested blocks inside a block

---
class: center

# Explaining too early can hurt

<img src="../../../img/papert.gif" height="300px">

???

@ Elango


* Progression becomes impt
  - Macros
    * We sometimes introduce macros midway through our lessons
    * Don't need to create them to use them
  - The 'list' fn
    * Probably don't need it except when writing macros
  - The 'vector' fn
    * Probably don't need it except when transposing nested data
  - cons cell
    * Probably don't need it until writing a custom lazy seq
* Papert:
  - visual and interactive is necessary but not sufficient
  - new info must relate to existing knowledge
* Clojure and Logo
  - Logo - simple & small set of primitives
    * Allows people internalize easily
  - Likewise, we can teach Clojure by starting with a small core of primitives
  - Clojure vs. Logo
    * Easy to learn everything there is to Logo because its core is small
    * Clojure has much larger core, so ordering matters much more

---

# Lessons are text files

## lesson1.md

    canvas: turtle

    Hi!

    In this lesson you will be sending commands to a robot turtle,

    ---

    Type this command into the text area:

        (forward 50)

## Direct link your own lesson

http://timothypratley.github.io/power-turtle#lessons.red[//server.org/my-lesson.md]

???

@ Timothy

* Perhaps you have a lesson in mind that you want to teach?
* Good news! Lessons are markdown text files
* Markdown is very easy to edit
* Your Markdown can be loaded remotely by url
  - you can deliver your own lesson with a link
  - you don't need us to do anything
  - if you send us the markdown we will include it in the lesson list

---
class: middle

.large[

> _“It was quite astounding how Noah went off on his own tangent to draw his own patterns about half way through the lesson!”_

]

???

@ Timothy

Here is some feedback I received about the first lesson:

> “It was quite astounding how Noah went off on his own tangent to draw his own patterns about half way through the lesson!”

* This is exactly what I had hoped for.
* Lessons are guides, but you can really do whatever you want.
* The emphasis is on self discovery.
* Good lessons challenge us; can you draw this shape?
  - and provide just enough information to figure it out
---
background-image: url(../../../img/korean.jpg)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* On a completely different topic...
* I am learning Korean
* The writing system is unique in that it was designed for literacy,
  unlike most other writing systems.
* The characters are very logical.
* But learning the Korean vocabulary is still difficult.
* I asked my friend Alex who is from Korea: "How did you learn programming?"
  - he replied: "I learnt English. Then I went to an Australian University. Now I work at Microsoft."
* He made it sound easy, but that is a decade of dedication right there.
* Only 5% of the world speaks English as a first language.
* 20% if you include non-native speakers.
* For most people who want to learn programming, the answer is:
  - "Awesome! Programming is really useful. Go learn English first."
* But I knew that Elango had translated Clojure to Thamil
  - and I wondered if we could do that in Power Turtle

---

<iframe src="index.html" style="width:100%; height:100%; border: none">
<div id="app"></div>
</iframe>

???

* And of course we can!

# Demo - "Polyglot Clojure"

    (앞으로 50)
    
    (권리 90)

* Thamil example - forward and turning
* German example - repeat/repeatedly 3 to form a square
* Wow Elango, you are quite the polyglot programmer!

---
background-image: url(../../../img/etower.jpg)
background-position: center
background-repeat: no-repeat
background-size: contain

# Parlez vous Clojure?

???

# Parlez vous Clojure?

* I'm pretty sure Clojure is a French word right?
* I think it's strange but Elango and I hear a common response to programming in another language;
  "They're going to have to learn English anyway."
* That’s missing something that I want to point out: Translations are great!
  - I'm sure you know geometry... it’s Greek! Someone translated it for you.
  - Astronomy? Latin
  - Einstein’s work? German
  - Marie Curie’s work? French
  - Translations are just plain useful  
  - They are also super easy in Clojure, almost no effort, so why not?

---

# Thamil

    [clj-thamil "0.2.0"]

???

This is Elango's library for writing Clojure in other spoken languages

  * It works great in Clojure
  * It relies on macro-writing macros, which does not work in ClojureScript
  * So we made something new

---
      
# Clojure By Another Name

> _What's in a name? that which we call a rose<br>
  By any other name would smell as sweet;<br><br>
  -- Romeo and Juliet (William Shakespeare)_
  
      [lein-cban "0.1.0"]
      [cban "0.1.0"]
  
???

Clojure By Another Name, or CBAN for short.

* lein-cban creates translation wrappers
  - you can use it translate libraries of code
* cban currently has translations of clojure.core to Spanish, Korean, Thamil, and Indonesian
* Clojure and ClojureScript
  
---
  
# Translations are text files
  
    existing,alias,docstring,comment
    forward,앞으로
    back,뒤로
    right,권리
    left,왼쪽
  
???

* Translations are comma separated text files

---
background-image: url(../img/bad-idea.jpg)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* Let's get everyone in the world learning Clojure.
* This will be great right?

---

## Dear Tim

    ERROR - Cannot read property 'call' of undefined

Not sure what I am doing<br>
Love Mum

???

* Here is one part of Power Turtle that did not work out very well...
  - Error handling

Dear Tim

    ERROR - Cannot read property 'call' of undefined

Not sure what I am doing, Love Mum

* This is the error message you get when you typo a function call
  - if we can find a way to improve this, we can reach a larger audience
  - good error messages are helpful to everybody, not just beginners

---

# ClojureScript REPLs

## Klipse

Blogs, website, documentation

![Klipse](img/klipse.gif)

## Replumb

More effort, more control

???

* Perhaps you are interested in building something like Power Turtle yourself
* Here's how you can go about it:
  - If you want to embed a ClojureScript REPL on your blog or website,
  - Klipse provides a really easy way to do this
    * it's super easy!
    * just include a script in your page and any code blocks become editable
    * users really appreciate it; I get double the traffic when I use it

* Replumb is what Power Turtle uses as a REPL
  - Takes more effort, provides more control

---
class: middle, inverse

# Learning Clojure through Logo

Clojure is
1. Easy to get started
2. Fun (it's Logo)
3. Learn programming through Logo
4. in Clojure
5. Transcend Logo into Clojure

???

Which brings us back to Learning Clojure through Logo...

Clojure is
* Easy to get started. Visit our webpage and get coding
* Its Fun! Logo is fun, the canvases are fun.
* Come to program in Logo
* Stay for the Clojure
* We hope to reach more programmers by skipping the boring bits
  - and getting them hooked on what Clojure can do

---

# Acknowledgements

* Maria Geller - Bootstrap ClojureScript contributions and advocacy
* Andrea Richiardi - Replumb
* Mike Fikes - Patiently helping use overcome hurdles
* Thomas Heller - Macro renaming
* António Monteiro - Bootstrap ClojureScript contributions
* Yehonathan Sharvit - KLIPSE
* Nikita Beloglazov - Quil 
* Neil Fraser - Blockly
* David Nolen - ClojureScript lead
* Rich Hickey - Creator of Clojure

???

@ Elango

* ClojureScript self-hosting has some quirks
  - but there are lots of helpful people eager to help out
  - in particular these people helped us greatly.

---

# Links

* Power Turtle - https://timothypratley.github.io/power-turtle
* clojure-turtle - https://github.com/google/clojure-turtle
* CBAN - https://github.com/timothypratley/cban
* Blockly - https://developers.google.com/blockly/

# Contact
 
- Elango Cheran: elango.cheran@gmail.com
- Timothy Pratley: timothypratley@gmail.com

### Comments / suggestions / contributions welcome!

???

---
class: middle, inverse

# Thanks

???

@ Elango & Timothy

* Any Questions?
