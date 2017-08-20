(ns power-turtle.lang.english)

(def fns
  '{clojure-turtle.core
    {forward forward
     back back
     left left
     right right
     color color
     home home
     clean clean
     penup penup
     pendown pendown
     start-fill start-fill
     end-fill end-fill
     setxy setxy
     setheading setheading
     wait wait
     draw-turtle-commands draw-turtle-commands}
    power-turtle.power
    {html html
     add-action add-action
     red red
     green green
     blue blue
     octagon octagon
     pattern pattern}})

(def forms
  '{cljs.core
    {aget aget
     and and
     apply apply
     aset aset
     assoc assoc
     assoc-in assoc-in
     def def
     defn defn
     if if
     fn fn
     repeatedly repeatedly
     let let}
    power-turtle.power
    {all all}})

(def all
  (merge fns forms))
