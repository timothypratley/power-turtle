// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.toolbar');
goog.require('cljs.core');
goog.require('power_turtle.model');
goog.require('reagent.core');
goog.require('reanimated.core');
power_turtle.view.toolbar.actions = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
power_turtle.view.toolbar.action = (function power_turtle$view$toolbar$action(k,f){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return f.call(null);
})], null),cljs.core.name.call(null,k)], null);
});
power_turtle.view.toolbar.browser_map = (function power_turtle$view$toolbar$browser_map(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27349 = arguments.length;
var i__4642__auto___27350 = (0);
while(true){
if((i__4642__auto___27350 < len__4641__auto___27349)){
args__4647__auto__.push((arguments[i__4642__auto___27350]));

var G__27351 = (i__4642__auto___27350 + (1));
i__4642__auto___27350 = G__27351;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return power_turtle.view.toolbar.browser_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

power_turtle.view.toolbar.browser_map.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-ms-transform","-ms-transform",1881412958),new cljs.core.Keyword(null,"-moz-transform","-moz-transform",1304730193),new cljs.core.Keyword(null,"-webkit-transform","-webkit-transform",-624763371),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core.str,ss)));
});

power_turtle.view.toolbar.browser_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
power_turtle.view.toolbar.browser_map.cljs$lang$applyTo = (function (seq27348){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27348));
});

power_turtle.view.toolbar.flipper = (function power_turtle$view$toolbar$flipper(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27355 = arguments.length;
var i__4642__auto___27356 = (0);
while(true){
if((i__4642__auto___27356 < len__4641__auto___27355)){
args__4647__auto__.push((arguments[i__4642__auto___27356]));

var G__27357 = (i__4642__auto___27356 + (1));
i__4642__auto___27356 = G__27357;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return power_turtle.view.toolbar.flipper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

power_turtle.view.toolbar.flipper.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,children){
var flip_spring = reanimated.core.spring.call(null,power_turtle.model.flip);
return ((function (flip_spring){
return (function power_turtle$view$toolbar$a_flipper(tag__$1,attrs__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge_with.call(null,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),power_turtle.view.toolbar.browser_map.call(null,"rotateY(",((90) + cljs.core.deref.call(null,flip_spring)),"deg)")], null),attrs__$1)], null),children)], null);
});
;})(flip_spring))
});

power_turtle.view.toolbar.flipper.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
power_turtle.view.toolbar.flipper.cljs$lang$applyTo = (function (seq27352){
var G__27353 = cljs.core.first.call(null,seq27352);
var seq27352__$1 = cljs.core.next.call(null,seq27352);
var G__27354 = cljs.core.first.call(null,seq27352__$1);
var seq27352__$2 = cljs.core.next.call(null,seq27352__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27353,G__27354,seq27352__$2);
});

power_turtle.view.toolbar.toolbar = (function power_turtle$view$toolbar$toolbar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.flipper,new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"turtle.jpg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.flipper,new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"clojure_logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4434__auto__ = (function power_turtle$view$toolbar$toolbar_$_iter__27358(s__27359){
return (new cljs.core.LazySeq(null,(function (){
var s__27359__$1 = s__27359;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27359__$1);
if(temp__5720__auto__){
var s__27359__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27359__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__27359__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__27361 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__27360 = (0);
while(true){
if((i__27360 < size__4433__auto__)){
var vec__27362 = cljs.core._nth.call(null,c__4432__auto__,i__27360);
var k = cljs.core.nth.call(null,vec__27362,(0),null);
var f = cljs.core.nth.call(null,vec__27362,(1),null);
cljs.core.chunk_append.call(null,b__27361,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.action,k,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__27368 = (i__27360 + (1));
i__27360 = G__27368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27361),power_turtle$view$toolbar$toolbar_$_iter__27358.call(null,cljs.core.chunk_rest.call(null,s__27359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27361),null);
}
} else {
var vec__27365 = cljs.core.first.call(null,s__27359__$2);
var k = cljs.core.nth.call(null,vec__27365,(0),null);
var f = cljs.core.nth.call(null,vec__27365,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.action,k,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),power_turtle$view$toolbar$toolbar_$_iter__27358.call(null,cljs.core.rest.call(null,s__27359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.deref.call(null,power_turtle.view.toolbar.actions));
})()], null)], null);
});

//# sourceMappingURL=toolbar.js.map?rel=1557850990044
