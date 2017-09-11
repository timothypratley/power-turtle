HTML is what web pages like this are made of.
You can modify part of this page by calling the `html` command.

Give this a try:

    (html [:h1 "Hello world!"])

Do you see the message appear on the screen?

---

Try these commands one at a time:

    (html [:button "This is a button"])
    (html [:p "This is a paragraph of text."])
    (html [:ul [:li "item 1"]
               [:li "item 2"]
               [:li "item 3"]])
    (html [:input])           


---

HTML is composed of tags, attributes and content.

When we called
 
    (html [:button "This is a button"])`

`:button` is the tag,
and `"This is a button"` is the content.
In this case the content is a string,
but it can also be other html.

---

When we called

    (html [:ul [:li "item 1"]
               [:li "item 2"]
               [:li "item 3"]])

The outer tag is `:ul`,
but the content is 3 more html tags,
which have their own content.

---

Attributes are optional.

    (html [:button
           {:on-click (fn [e] (js/alert "hello!"))}
           "Click me!"])

Attributes come right after the tag and are put inside `{}`.

---

Try putting a turtle command inside the `:on-click` of your button.

---

Check out the `add-action` command for adding a button that runs a turtle command.
Can you do a similar thing using `html`?