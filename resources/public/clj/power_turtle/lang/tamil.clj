(ns power-turtle.lang.tamil
  (:require-macros [power-turtle.lang.macros :refer [translate-fns translate-forms]]))

;; manually copy this clj file to the resources, I don't know why


(def fns
  '{take எடு
    drop விடு
    ;; inc ஏறுமானம்
    inc ஏற்று
    ;; dec இறங்குமானம்
    dec இறக்கு
    range வீச்சு
    take-while எடு-என்னும்வரை
    drop-while விடு-என்னும்வரை
    interleave பின்னு
    reduce இறுக்கு
    ;; reducer இறுக்குவர் ;; ??
    map விவரி
    hash-map புலவெண்-விவரணையாக்கம்
    ;; vector காவி ;; ??
    ;; vector நெறியம் ;; ??
    list பட்டியல்
    set அமைவு
    hash-set புலவெண்-அமைவு
    atom அணு
    ;;agent முகவர்
    first முதல்
    second இரண்டாம்
    last கடைசி
    butlast கடைசியின்றி
    rest மீதி
    next அடுத்த
    true வாய்மை                                             ;; should we use வாய்மை, மெய்மை, or உண்மை ?  i am
    ;; thinking of using வாய்மை or மெய்மை so as to leave உண்மை to continue to
    ;; be used in more casual / less formal situations
    false பொய்மை
    print அச்சிடு
    println வரி-அச்சிடு
    filter வடி
    remove அகற்று
    keep கொள்
    ;;slurp உறிஞ்சு                                           ;; could be சப்பு
    ;;spit ஊற்று                                              ;; could be துப்பு
    seq வரிசை
    dorun செய்யோட்டம்
    doall செய்யெல்லாம்
    str தொடை
    interpose இடைபொருத்து
    find கண்டுபிடி
    get பெறு
    apply செயல்படுத்து
    count எண்ணு
    every? ஒவ்வொன்றுமா?
    true? உண்மையா?
    false? பொய்மையா?
    concat தொடு
    identity அடையாளம்
    reverse புரட்டு
    some எதாவது
    flatten தட்டையாக்கு
    boolean பூலியன்})

(def forms
  '{if எனில்
    when என்னும்போது
    if-not இல்லெனில்
    when-not இல்லென்னும்-போது
    def வரையறு
    fn செயல்கூறு
    defn வரையறு-செயல்கூறு
    let வைத்துக்கொள்                                        ;; maybe just கொள்
    and மற்றும்
    or அல்லது
    not அன்று
    ;; else அன்றி ?
    loop சுற்று
    doseq செய்வரிசை
    ;; for ஒவ்வொன்றுக்கும்
    for ஒன்றொன்றுக்கு
    cond பொறுத்து
    do செய்

    ;; clojure.test
    deftest வரையறு-பரிசோதனை
    testing பரிசோதிக்கும்
    is ஆகும்
    are பல-ஆகும்})

;; do the actual "translation" for bindings, fns, and any other value
(translate-fns fns)

;; do the actual "translation" for macros and special forms
(translate-forms forms)