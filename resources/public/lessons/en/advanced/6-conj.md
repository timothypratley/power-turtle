# Learning Clojure through Logo

Elango Cheran

Timothy Pratley

Conj 2017

---

<img alt="Happy friends" src="../img/friends2.jpg" style="width:100%">

---

<img alt="Friend showing other friend computer" src="../img/interested.jpg" style="width:100%">

---

<img alt="Confused by computer" src="../img/beforeanger.jpg" style="width:100%">

---

<img alt="Bashing computer on table" src="../img/anger.gif" style="width:100%">

---



---

<iframe src="index.html" style="width:100%; height:100%">
<div id="app"></div>
</iframe>

---

## For Learners

* Exploratory

> “It was quite astounding how Noah went off on his own tangent to draw his own patterns about half way through the lesson!”

* Batteries included

---

## For Educators

* Visual progress
* Lessons are markdown

---

![Traditionally dressed Koreans doing caligraphy](../img/korean.jpg)

---

Rank|First Language|Percentage of world population
---:|--------|----------------------------------:
1|Mandarin|14.1%
2|Spanish|5.85%
**3**|**English**|**5.52%**
4|Hindi|4.46%
5|Arabic|4.23%

_Source: Wikipedia_

---

<img src="../img/kids-around-the-world2.jpg" style="width:80%">

---

<iframe src="index.html" style="width:100%; height:100%">
<div id="app"></div>
</iframe>

---

## Clojure By Anyother Name

    [cban "0.1.0"]

> What's in a name? that which we call a rose<br>
  By any other name would smell as sweet;<br>
  -- Romeo and Juliet (William Shakespeare)

---

emacs pic

---

## Plugin

    [lein-cban "0.1.0"]

---

## CSV

    existing,alias,docstring,comment
    forward,앞으로
    back,뒤로
    right,권리
    left,왼쪽

---

## Directories

    translations
      en
        power-turtle.api.csv
      es
        power-turtle.api.csv
      ko
        power-turtle.api.csv

---

## Output

    cban
      power_turtle_api_en.cljc
      power_turtle_api_es.cljc
      power_turtle_api_ko.cljc
    resources
      power-turtle-translations-map.edn

---

## Generated

    (ns cban.power-turtle-api-ko)

    ;; This file was generated, do not modify it directly

    (def 작업을추가
      power-turtle.api/add-action)

    (def 푸른
      power-turtle.api/blue)

---

## Refer aliases

    (generate-refer-clauses
      (read-translation-maps
        [“power-turtle-translations-map.edn”])

---

![Excited idiots in a shopping trolley](../img/bad-idea.jpg)

---

## Dear Tim

    ERROR - Cannot read property 'call' of undefined

Not sure what I am doing<br>
Love Mum

---

## What it means:

    Nope!

<img alt="Cat saying nope" src="../img/nope.jpg" style="width:80%">



---

## What I want:

    -- NAMING ERROR -----------------

    Cannot find variable `List.nap`

        div [] (List.nap viewUser users)
                ^^^^^^^^

    `List` does not expose `nap`. Maybe you want one of the following?

        List.map
        List.any
        List.map2
        List.map3

---

![Beginner surfer](../img/beginner.jpg)

---

#Klipse

https://github.com/viebel/klipse

    <link rel="stylesheet" href="codemirror.css">
    <script src="klipse_plugin.js"></script>
       
---

#Replumb

http://clojurescript.io/

![Replumb](../img/replumb_logo_bg.jpg)

---

#Power Turtle

![Turtle](../turtle.jpg)

http://timothypratley.github.io/power-turtle

---

## Make stuff
