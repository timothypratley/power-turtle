// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.navigation');
goog.require('cljs.core');
goog.require('power_turtle.model');
goog.require('power_turtle.view.about');
goog.require('power_turtle.view.forum');
goog.require('power_turtle.view.lesson');
goog.require('power_turtle.view.lessons');
goog.require('power_turtle.view.workspace');
goog.require('bidi.bidi');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('soda_ash.core');
goog.require('goog.History');
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.view !== 'undefined') && (typeof power_turtle.view.navigation !== 'undefined') && (typeof power_turtle.view.navigation.route !== 'undefined')){
} else {
power_turtle.view.navigation.route = reagent.core.atom.call(null,null);
}
power_turtle.view.navigation.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.Var(function(){return power_turtle.view.about.about_page;},new cljs.core.Symbol("power-turtle.view.about","about-page","power-turtle.view.about/about-page",-2065413349,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.about","power-turtle.view.about",708400572,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/timothy/git/power-turtle/src/power_turtle/view/about.cljs",17,1,6,6,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(power_turtle.view.about.about_page)?power_turtle.view.about.about_page.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lessons",new cljs.core.Var(function(){return power_turtle.view.lessons.lessons_view;},new cljs.core.Symbol("power-turtle.view.lessons","lessons-view","power-turtle.view.lessons/lessons-view",1764111512,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.lessons","power-turtle.view.lessons",-1782383081,null),new cljs.core.Symbol(null,"lessons-view","lessons-view",-918282492,null),"src/power_turtle/view/lessons.cljs",19,1,28,28,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(power_turtle.view.lessons.lessons_view)?power_turtle.view.lessons.lessons_view.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lesson",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/.*/,new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),new cljs.core.Var(function(){return power_turtle.view.lesson.lesson_view;},new cljs.core.Symbol("power-turtle.view.lesson","lesson-view","power-turtle.view.lesson/lesson-view",1616874149,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.lesson","power-turtle.view.lesson",491546340,null),new cljs.core.Symbol(null,"lesson-view","lesson-view",1837620078,null),"src/power_turtle/view/lesson.cljs",18,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route-params","route-params",-543024714,null)], null)),null,(cljs.core.truth_(power_turtle.view.lesson.lesson_view)?power_turtle.view.lesson.lesson_view.cljs$lang$test:null)]))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["freestyle",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Var(function(){return power_turtle.view.workspace.workspace;},new cljs.core.Symbol("power-turtle.view.workspace","workspace","power-turtle.view.workspace/workspace",475457232,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.workspace","power-turtle.view.workspace",-1224365668,null),new cljs.core.Symbol(null,"workspace","workspace",543795818,null),"/Users/timothy/git/power-turtle/src/power_turtle/view/workspace.cljs",16,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"canvas-name","canvas-name",1626596110,null)], null)),null,(cljs.core.truth_(power_turtle.view.workspace.workspace)?power_turtle.view.workspace.workspace.cljs$lang$test:null)]))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["forum",new cljs.core.Var(function(){return power_turtle.view.forum.forum;},new cljs.core.Symbol("power-turtle.view.forum","forum","power-turtle.view.forum/forum",1674754505,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.forum","power-turtle.view.forum",-2004582052,null),new cljs.core.Symbol(null,"forum","forum",155617167,null),"/Users/timothy/git/power-turtle/src/power_turtle/view/forum.cljs",12,1,5,5,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(power_turtle.view.forum.forum)?power_turtle.view.forum.forum.cljs$lang$test:null)]))], null)], null)], null);
power_turtle.view.navigation.links = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about","lessons","freestyle","forum"], null);
power_turtle.view.navigation.match = (function power_turtle$view$navigation$match(s){
return bidi.bidi.match_route.call(null,power_turtle.view.navigation.routes,s);
});
power_turtle.view.navigation.navigate = (function power_turtle$view$navigation$navigate(event){
return cljs.core.reset_BANG_.call(null,power_turtle.view.navigation.route,event.token);
});
power_turtle.view.navigation.languages = cljs.core.PersistentHashMap.fromArrays(["en","pt_PT","zh_CN","id","zh_TW","tl","fr","de","ru","es","ko","ta"],["English","Portugu\u00EAs","\u7C21\u9AD4\u4E2D\u6587","Bahasa Indonesia","\u4E2D\u570B\u50B3\u7D71\u7684","Tagalog","Fran\u00E7ais","Deutsche","\u0420\u0443\u0441\u0441\u043A\u0438\u0439","Espa\u00F1ol","\uD55C\uAD6D\uC5B4","\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"]);
power_turtle.view.navigation.language_selector = (function power_turtle$view$navigation$language_selector(){
return (function power_turtle$view$navigation$language_selector_$_a_language_selector(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuMenu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Dropdown,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fluid","fluid",-1823657759),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"labeled","labeled",1871152938),new cljs.core.Keyword(null,"floating","floating",-1978091029),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[true,"select language",true,"en",true,true,"world","icon",cljs.core.clj__GT_js.call(null,(function (){var iter__4434__auto__ = (function power_turtle$view$navigation$language_selector_$_a_language_selector_$_iter__32829(s__32830){
return (new cljs.core.LazySeq(null,(function (){
var s__32830__$1 = s__32830;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32830__$1);
if(temp__5720__auto__){
var s__32830__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32830__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__32830__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__32832 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__32831 = (0);
while(true){
if((i__32831 < size__4433__auto__)){
var vec__32833 = cljs.core._nth.call(null,c__4432__auto__,i__32831);
var lang_code = cljs.core.nth.call(null,vec__32833,(0),null);
var lang_name = cljs.core.nth.call(null,vec__32833,(1),null);
cljs.core.chunk_append.call(null,b__32832,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),lang_code,new cljs.core.Keyword(null,"text","text",-1790561697),lang_name,new cljs.core.Keyword(null,"value","value",305978217),lang_code], null));

var G__32839 = (i__32831 + (1));
i__32831 = G__32839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32832),power_turtle$view$navigation$language_selector_$_a_language_selector_$_iter__32829.call(null,cljs.core.chunk_rest.call(null,s__32830__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32832),null);
}
} else {
var vec__32836 = cljs.core.first.call(null,s__32830__$2);
var lang_code = cljs.core.nth.call(null,vec__32836,(0),null);
var lang_name = cljs.core.nth.call(null,vec__32836,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),lang_code,new cljs.core.Keyword(null,"text","text",-1790561697),lang_name,new cljs.core.Keyword(null,"value","value",305978217),lang_code], null),power_turtle$view$navigation$language_selector_$_a_language_selector_$_iter__32829.call(null,cljs.core.rest.call(null,s__32830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.key,power_turtle.view.navigation.languages));
})()),(function power_turtle$view$navigation$language_selector_$_a_language_selector_$_language_change(e,v){
return cljs.core.reset_BANG_.call(null,power_turtle.model.current_language,v.value);
})])], null)], null)], null);
});
});
power_turtle.view.navigation.menu_bar = (function power_turtle$view$navigation$menu_bar(route){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inverted","inverted",-310592290),true], null),cljs.core.doall.call(null,(function (){var iter__4434__auto__ = (function power_turtle$view$navigation$menu_bar_$_iter__32840(s__32841){
return (new cljs.core.LazySeq(null,(function (){
var s__32841__$1 = s__32841;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32841__$1);
if(temp__5720__auto__){
var s__32841__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32841__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__32841__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__32843 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__32842 = (0);
while(true){
if((i__32842 < size__4433__auto__)){
var link = cljs.core._nth.call(null,c__4432__auto__,i__32842);
cljs.core.chunk_append.call(null,b__32843,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),"a",new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join(''),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,cljs.core.deref.call(null,route),link)], null),link], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)));

var G__32844 = (i__32842 + (1));
i__32842 = G__32844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32843),power_turtle$view$navigation$menu_bar_$_iter__32840.call(null,cljs.core.chunk_rest.call(null,s__32841__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32843),null);
}
} else {
var link = cljs.core.first.call(null,s__32841__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),"a",new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join(''),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,cljs.core.deref.call(null,route),link)], null),link], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)),power_turtle$view$navigation$menu_bar_$_iter__32840.call(null,cljs.core.rest.call(null,s__32841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,power_turtle.view.navigation.links);
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.navigation.language_selector], null)], null);
});
power_turtle.view.navigation.current_page = (function power_turtle$view$navigation$current_page(){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,power_turtle.view.navigation.route),"logo")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.workspace.canvas_repl,"turtle"], null);
} else {
return (function power_turtle$view$navigation$current_page_$_the_current_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.navigation.menu_bar,power_turtle.view.navigation.route], null),(function (){var map__32845 = power_turtle.view.navigation.match.call(null,cljs.core.deref.call(null,power_turtle.view.navigation.route));
var map__32845__$1 = (((((!((map__32845 == null))))?(((((map__32845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32845):map__32845);
var handler = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4047__auto__ = handler;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return power_turtle.view.about.about_page;
}
})(),route_params], null);
})()], null);
});
}
});
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.view !== 'undefined') && (typeof power_turtle.view.navigation !== 'undefined') && (typeof power_turtle.view.navigation.history !== 'undefined')){
} else {
power_turtle.view.navigation.history = (function (){var G__32847 = (new goog.History());
goog.events.removeAll(G__32847);

goog.events.listen(G__32847,goog.history.EventType.NAVIGATE,((function (G__32847){
return (function power_turtle$view$navigation$on_navigate(e){
return new cljs.core.Var(function(){return power_turtle.view.navigation.navigate;},new cljs.core.Symbol("power-turtle.view.navigation","navigate","power-turtle.view.navigation/navigate",-908562981,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.navigation","power-turtle.view.navigation",389207177,null),new cljs.core.Symbol(null,"navigate","navigate",-1996838964,null),"/Users/timothy/git/power-turtle/src/power_turtle/view/navigation.cljs",15,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),null,(cljs.core.truth_(power_turtle.view.navigation.navigate)?power_turtle.view.navigation.navigate.cljs$lang$test:null)])).call(null,e);
});})(G__32847))
);

G__32847.setEnabled(true);

return G__32847;
})();
}

//# sourceMappingURL=navigation.js.map?rel=1557850996994
