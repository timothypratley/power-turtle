// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.lesson');
goog.require('cljs.core');
goog.require('power_turtle.lesson_markdown');
goog.require('power_turtle.model');
goog.require('power_turtle.view.workspace');
goog.require('power_turtle.view.markdown');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('reagent.core');
goog.require('soda_ash.core');
power_turtle.view.lesson.lesson_slides = (function power_turtle$view$lesson$lesson_slides(slides,slide_index){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Segment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"nowrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),(function (){var enabled = (cljs.core.deref.call(null,slide_index) > (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(enabled)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (enabled){
return (function power_turtle$view$lesson$lesson_slides_$_previous_slide_click(e){
return cljs.core.swap_BANG_.call(null,slide_index,cljs.core.dec);
});})(enabled))
], null),((enabled)?"<":"-")], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.markdown.render_markdown,cljs.core.get_in.call(null,cljs.core.deref.call(null,slides),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,slide_index),new cljs.core.Keyword(null,"content","content",15833224)], null),"Loading...")], null)], null),(function (){var enabled = ((cljs.core.deref.call(null,slide_index) + (1)) < cljs.core.count.call(null,cljs.core.deref.call(null,slides)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(enabled)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (enabled){
return (function power_turtle$view$lesson$lesson_slides_$_next_slide_click(e){
return cljs.core.swap_BANG_.call(null,slide_index,cljs.core.inc);
});})(enabled))
], null),((enabled)?">":"-")], null)], null);
})()], null)], null);
});
power_turtle.view.lesson.lesson_view = (function power_turtle$view$lesson$lesson_view(route_params){
var current_id = reagent.core.atom.call(null,null);
var slides = reagent.core.atom.call(null,null);
var slide_index = reagent.core.atom.call(null,(0));
return ((function (current_id,slides,slide_index){
return (function power_turtle$view$lesson$lesson_view_$_a_lesson_view(p__31343){
var map__31344 = p__31343;
var map__31344__$1 = (((((!((map__31344 == null))))?(((((map__31344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31344):map__31344);
var id = cljs.core.get.call(null,map__31344__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not_EQ_.call(null,id,cljs.core.deref.call(null,current_id))){
cljs.core.reset_BANG_.call(null,current_id,id);

cljs.core.reset_BANG_.call(null,slide_index,(0));

cljs.core.reset_BANG_.call(null,slides,cljs.core.get_in.call(null,power_turtle.lesson_markdown.lessons,cljs.core.cons.call(null,cljs.core.deref.call(null,power_turtle.model.current_language),cljs.core.rest.call(null,clojure.string.split.call(null,id,/\//)))));

if(cljs.core.truth_(cljs.core.deref.call(null,slides))){
} else {
goog.net.XhrIo.send(id,((function (map__31344,map__31344__$1,id,current_id,slides,slide_index){
return (function (e){
var response = e.target;
return cljs.core.reset_BANG_.call(null,slides,(cljs.core.truth_(response.isSuccess())?power_turtle.lesson_markdown.parse_slides.call(null,response.getResponseText()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Lesson failed to load from:<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.starts_with_QMARK_.call(null,id,"//"))?location.protocol:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"' target='_blank'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"</a>\n\n"].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((response.getStatus() <= (0)))?"Could not reach server":response.getLastError())),"\n\nPlease check the URL and try again."].join('')], null)));
});})(map__31344,map__31344__$1,id,current_id,slides,slide_index))
);
}
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.lesson.lesson_slides,slides,slide_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.workspace.workspace,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,slides))));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "turtle";
}
})()], null)], null);
});
;})(current_id,slides,slide_index))
});

//# sourceMappingURL=lesson.js.map?rel=1557850994988
