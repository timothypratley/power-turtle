// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.markdown');
goog.require('cljs.core');
goog.require('cljsjs.showdown');
power_turtle.view.markdown.converter = (function (){var G__27548 = (new showdown.Converter());
G__27548.setFlavor("github");

return G__27548;
})();
power_turtle.view.markdown.make_html = (function power_turtle$view$markdown$make_html(s){
return power_turtle.view.markdown.converter.makeHtml(s);
});
power_turtle.view.markdown.render_markdown = (function power_turtle$view$markdown$render_markdown(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),power_turtle.view.markdown.make_html.call(null,s)], null)], null)], null);
});

//# sourceMappingURL=markdown.js.map?rel=1557850990366
