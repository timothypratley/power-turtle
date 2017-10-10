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

* Logo is a programming language to control a turtle (an object).
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
 
---
background-image: url(../../../img/scratch.png)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* What's old is new
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
  - As Lispers, Logo code blocks -> Lisp forms without parens
  - Paredit mode (struct. editing) = snapping blocks together inside others in blocks
* Irony:
  - we use Lisp today as an easy, effective way to teach kids programming
  - when the kids grow up, they program with semi-colons & curly braces
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
  - too hard to do anything interesting
  - gave up on programming

---

# How is Logo interesting?

???

* Logo - I loved learning it:
  - took a class in middle school, at age 11
* reveal
  - easy to pick up
* reveal
  - drew random pictures
* reveal
  - learned how to create more complex pics
* reveal
  - fns & recursion to assist
* reveal
  - renewed my interest in programming

---

# How is Logo interesting?

* Easy

---

# How is Logo interesting?

* Easy
* Drew what I wanted
<br/>
<br/>

<img src="../../../img/logo-drawing-big-e.png" width="300px">
<img src="../../../img/logo-koch-segment-1.png" width="300px" style="float:right">
<img src="../../../img/logo-koch-segment-2.png" width="300px" style="float:right">
---

# How is Logo interesting?

* Easy
* Drew what I wanted
* Made programming fun

<img src="../../../img/logo-drawing-big-e.png" width="300px">
<img src="../../../img/logo-koch-segment-1.png" width="300px" style="float:right">
<img src="../../../img/logo-koch-segment-2.png" width="300px" style="float:right">


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

    (clean)
    (repeat 8 #(do (forward 30) (right 45)))
    
    ;; Let's give a name to the code that draws an octagon

    (defn octagon [] (repeat 8 #(do (forward 30) (right 45))))
    
    ;; So we can just say `octagon` now
    
    (clean)
    (octagon)
    
    ;; Using `repeat` and doing some turning, we can rotate our octagon around
    
    (repeat 12 #(do (octagon) (right 30)))
    
    ;; Let's change the color and do that again
    
    (color [0 0 255])
    (repeat 12 #(do (octagon) (right 30)))

    ;; Okay, let's see what we can do when we introduce
    ;; a little bit more Clojure gradually

    ;; Let's go back to a simple octagon
    
    (clean)
    (color [0])
    (octagon)
    
    ;; If we know the length of an octagon, we can start drawing
    ;; things around the octagon
    
    (def size (+ 30 (/ 60 (js/Math.sqrt 2))))
    
    (penup)
    (forward size)
    (pendown)
    (octagon)
    (penup)
    (forward size)
    (pendown)
    (octagon)
    
    ;; Let's use `range` and `map` to create a column of octagons
    
    (defn octagon-at-height
      [y]
      (home)
      (penup)
      (forward y)
      (pendown)
      (octagon))

    (do
      (def offsets (range -2 3))
      (def y-coords (map (fn [o] (* size o)) offsets)))
        
    (map octagon-at-height y-coords)
    
    ;; Let's cover the whole canvas.
    ;; Instead of worrying about
    ;; `penup` and `pendown`, let's use
    ;; `setxy` to
    ;; teleport the turtle.

    ;; First, let's use `for` to create the
    ;; xy-coordinates for all of the octagons 
 
    (do
      
      (def offsets-xy (for [x (range -3 3) y (range -3 4)] [x y]))
    
      (defn offset-to-coord
        [offxy]
        [(* size (first offxy)) (* size (second offxy))])
    
      (def coords (map offset-to-coord offsets-xy)))
    

    ;; Next, we'll generalize our
    ;; octagon fn to accept
    ;; xy-coordinates. And we'll throw
    ;; in some randomness to make the
    ;; color interesting.
    
    
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

* Logo more than just drawing on a 2-D screen
  - Turtle envisioned also to be manifest as a real robot
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

* Logo's benefits not a happy coincidence, but by design
* Logo created by Seymour Papert
  - researcher in education and computer science
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

* I have a bold claim.
* I believe that Clojure is uniquely positioned to be the best first programming language
for nearly everybody.
  - I have some things to show you which I hope will convince too.
  - I did not believe this last year

---

<img alt="Happy friends" src="../img/friends2.jpg" style="width:100%">

???

* last year my friend Nathan
  - "I'm ready to give Clojure a try, I've even installed Emacs!"

---

<img alt="Friend showing other friend computer" src="../img/interested.jpg" style="width:100%">

???

* I said:
  - "Awesome! Clojure is so cool. First we need to setup..."

---

<img alt="Confused by computer" src="../img/beforeanger.jpg" style="width:100%">

???

* Install Java
* Get Leiningen
* Run this command to create a project
* Add these dependencies
* Start a REPL with control k meta j

---

<img alt="Bashing computer on table" src="../img/anger.gif" style="width:100%">

???

And he said:
   - "What is all this? I want to learn Clojure, not this stuff."

---

# Getting started

???

* Nathan is one of the best coders I know,
  - but there's a barrier here.
  - we have all experienced this.
* It's easy to forget or dismiss this barrier
  - these things seem mundane to us now...
  - but only a small target audience has the background to pick up our tools quickly

---

# Getting started

<img src="../../../img/repl.png" width="400px" align="middle">

???

* The good news is that you can skip all that now
  - thanks to self hosted ClojureScript.
* All you need to code Clojure is a web browser.

---

# Getting started

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
  - and we thought,
  - what if we marry turtle with a self hosted ClojureScript REPL

---

<iframe src="index.html" style="width:100%; height:100%; border: none">
<div id="app"></div>
</iframe>

???

* This is our website: Power Turtle; a batteries included REPL
* The first lesson
* I'll quickly show you the capabilities of Power Turtle
* Freestyle mode

  - Turtle
  
  
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
  
  - Raster
  
  
    (do
      (plot 5 5)
      (color :light-green)
      (plot 10 5)
      (hlin 5 10 10))
     
  - American flag


    (do    
      ;; Draw 13 stripes cycling over red/white
      (doseq [[n c] (take 13 (map vector (range) (cycle [:red :white])))]
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
        
    
  - Conway's game of life

   
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

      
  - Quil
  
  
    (do (quil.core/ellipse 200 200 150 200)
      (quil.core/arc 200 240 50 50 0 js/Math.PI)
      (quil.core/triangle 170 175 173 170 176 175)
      (quil.core/triangle 220 175 223 170 226 175))

  - Charting


    (chart (range 10))

  -


    (chart (map #(* % %) (range 10)))

  -


    (chart ["Mandarin" "Spanish" "English" "Hindi/Urdu"] [14 6 5 4])


  - HTML
  
  
    (html
      [:div
       [:h1 "Greetings traveller"]
       "What's your name? " [:input]
       [:h3 "Shopping list:"]
       [:ol [:li "milk"] [:li "bacon"] [:li "cheese"]]])

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

* You can do all this without any setup
  - knowing nothing about the JVM, dependencies, or editors
    - or namespaces or referring symbols
  - I want programmers like Nathan to experience Clojure first
    - before they invest their time in the other stuff
    - and the same goes for beginner students too.
* There are lessons with a progression of concepts...
  - call a function
  - combine functions into new functions
  - repeat functions
  - create sequences
  - use sequences
  - modify sequences
  - always building cool stuff in the canvases
* There is a path for learners to start with Logo and transcend
  - into other interesting things
  - in Clojure

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
  - **Macros**
    * _We sometimes introduce macros midway through our lessons_
    * _Don't need to create them to use them_
  - **The 'list' fn**
    * _Probably don't need it except when writing macros_
  - **The 'vector' fn**
    * _Probably don't need it except when transposing nested data_
  - **cons cell**
    * _Probably don't need it until writing a custom lazy seq_
* Papert:
  - visual and interactive is necessary but not sufficient
  - new info must relate to existing knowledge
* Clojure and Logo
  - **Logo - simple & small set of primitives**
    * _Allows people internalize easily_
  - Likewise, we can teach Clojure by starting with a small core of primitives
  - **Clojure vs. Logo**
    * _Easy to learn everything there is to Logo because its core is small_
    * _Clojure has much larger core, so ordering matters much more_

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
  - Good news! Lessons are markdown text files
  - Markdown is easy to edit
* We want our lessons to cater to most beginners,
* But beginners come from different backgrounds
  - school, university, other fields
  - maybe they only speak French and need a translation
  - so it is very important to us that you can create a lesson tailored to your situation
* Your lesson can be loaded remotely by supplying a url suffix
  - this link loads your lesson in Power Turtle
  - we would love it if you would send us the markdown
    * we will include it in the lesson list
    * so that everyone can benefit

---
class: middle

.large[

> _“It was quite astounding how Noah went off on his own tangent to draw his own patterns about half way through the lesson!”_

]

???

@ Timothy

Here is some feedback I received about the existing lessons:

> “It was quite astounding how Noah went off on his own tangent to draw his own patterns about half way through the lesson!”

* This is exactly what I had hoped for.
* Lessons are guides, but you can really do whatever you want.
* The emphasis is on self discovery.
* Lessons are interesting when they challenge us; can you draw this shape?
  - and provide a new concept to achieve it

* Getting started in Power Turtle is easy
  - but there is an even bigger barrier to learning Clojure for the majority of people;
  - they have to learn a foreign language first.

---
background-image: url(../../../img/korean.jpg)
background-position: center
background-repeat: no-repeat
background-size: contain

???

* I am learning Korean
  - and wow, learning a new language is really tough.
* My friend Alex is from Korea.
* I asked him: "How did you learn programming?"
  - he said: "First I learnt English. Then I went to an Australian University. Now I work at Microsoft."
* He made it sound easy, but that is a decade of dedication right there.
* Only 5% of the world speaks English as a first language.
* 20% if you include bilingual speakers.
* For most people who want to learn programming, their getting started experience is
  - "Awesome! Programming is really useful. Go learn English first."
* I knew that Elango had translated Clojure to Thamil
  - and I wondered if we could do that in Power Turtle

---

<iframe src="index.html#freestyle" style="width:100%; height:100%; border: none">
<div id="app"></div>
</iframe>

???

* And of course we can!


    (do
      (앞으로 50)
      (rechts 90)
      (முன்னால் 50)
      (droite 90)
      (前锋 50))

* Let's use some Clojure functions like `map` and `range`


    (விவரி (fungsi step [x]
            (вперед x)
            (对 95))
          (gama 10 400 5))

* This is polyglot programming!

---
background-image: url(../../../img/etower.jpg)
background-position: center
background-repeat: no-repeat
background-size: contain

# Parlez vous Clojure?

???

# Parlez vous Clojure?

* I'm pretty sure Clojure is a French word right?
* I think it is strange but Elango and I hear a common response to programming in another language;
  "They're going to have to learn English anyway."
* That’s missing the point: Translations are great!
  - I'm sure you know geometry... it’s Greek! Someone translated it.
  - Astronomy? Latin
  - Einstein? wrote his work in German
  - Marie Curie? French
  - Translations are just plain useful
  - They are also super easy in Clojure, so why not?

---

# Thamil

    [clj-thamil "0.2.0"]

???

This is Elango's library for writing Clojure in other spoken languages

  * It works great in Clojure
  * It relies on macro-writing macros, which does not work in ClojureScript
  * So we made something that works in both

---
      
# Clojure By Another Name

> _What's in a name? that which we call a rose<br>
  By any other name would smell as sweet;<br><br>
  -- Romeo and Juliet (William Shakespeare)_
  
      [lein-cban "0.1.0"]
      [cban "0.1.0"]
  
???

Clojure By Another Name,
* cban for short.
* plugin creates translation wrappers
* cban currently has several translations of clojure.core
  
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

Dear Tim

    ERROR - Cannot read property 'call' of undefined

Not sure what I am doing, Love Mum

* When you typo a function call, this is the message you get
* There's still some friction here that we need to smooth out
* I'd like to replace this with something more helpful in the future

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
  - use Klipse
    * it's super easy!
    * just include a script in your page and any code blocks become editable
    * users really appreciate it; I get much more traffic when I use it

* Replumb is what Power Turtle uses as a REPL
  - Takes more effort, provides more control

---
class: inverse

# Learning Clojure through Logo

???

Which brings us back to Learning Clojure through Logo...

* The Logo - Clojure connection is a steady progression from beginner to advanced
* Self hosted ClojureScript makes it easy to get started
* Translations make it accessible to the wider world
* It's fun and you're in control
* That is why I believe Clojure is the best first language, for everyone.

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

---

# Links

* Power Turtle - https://timothypratley.github.io/power-turtle
* clojure-turtle - https://github.com/google/clojure-turtle
* CBAN - https://github.com/timothypratley/cban
* Blockly - https://developers.google.com/blockly

# Contact
 
- Elango Cheran: elango.cheran@gmail.com
- Timothy Pratley: timothypratley@gmail.com

### Comments / suggestions / contributions welcome

--

# Thank you!

???

Thank you
