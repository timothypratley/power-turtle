// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.utils');
goog.require('cljs.core');
goog.require('reagent.core');
re_console.utils.colored_text = (function re_console$utils$colored_text(text,style){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = reagent.core.dom_node.call(null,this$);
return (CodeMirror["colorize"]).call(null,[node],"clojure");
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),style)], null),text], null);
})], null));
});

//# sourceMappingURL=utils.js.map?rel=1557850992813
