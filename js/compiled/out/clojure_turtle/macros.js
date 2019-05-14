// Compiled by ClojureScript 1.10.439 {}
goog.provide('clojure_turtle.macros');
goog.require('cljs.core');
var ret__4684__auto___26256 = (function (){
/**
 * This macro was created to substitute for the purpose served by the square brackets in Logo
 *   in a call to REPEAT.  This macro returns a no-argument function that, when invoked, executes
 *   the commands described in the body inside the macro call/form.
 *   (Haskell programmers refer to the type of function returned a 'thunk'.)
 */
clojure_turtle.macros.all = (function clojure_turtle$macros$all(var_args){
var args__4647__auto__ = [];
var len__4641__auto___26257 = arguments.length;
var i__4642__auto___26258 = (0);
while(true){
if((i__4642__auto___26258 < len__4641__auto___26257)){
args__4647__auto__.push((arguments[i__4642__auto___26258]));

var G__26259 = (i__4642__auto___26258 + (1));
i__4642__auto___26258 = G__26259;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

clojure_turtle.macros.all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure_turtle.macros.all.cljs$lang$applyTo = (function (seq26253){
var G__26254 = cljs.core.first.call(null,seq26253);
var seq26253__$1 = cljs.core.next.call(null,seq26253);
var G__26255 = cljs.core.first.call(null,seq26253__$1);
var seq26253__$2 = cljs.core.next.call(null,seq26253__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26254,G__26255,seq26253__$2);
});

return null;
})()
;
clojure_turtle.macros.all.cljs$lang$macro = true;

var ret__4684__auto___26265 = (function (){
/**
 * A macro to translate the purpose of the Logo REPEAT function.
 */
clojure_turtle.macros.repeat = (function clojure_turtle$macros$repeat(var_args){
var args__4647__auto__ = [];
var len__4641__auto___26266 = arguments.length;
var i__4642__auto___26267 = (0);
while(true){
if((i__4642__auto___26267 < len__4641__auto___26266)){
args__4647__auto__.push((arguments[i__4642__auto___26267]));

var G__26268 = (i__4642__auto___26267 + (1));
i__4642__auto___26267 = G__26268;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"states__26260__auto__","states__26260__auto__",1910948635,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeatedly","cljs.core/repeatedly",-1346003388,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dorun","cljs.core/dorun",1487325315,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"states__26260__auto__","states__26260__auto__",1910948635,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","last","cljs.core/last",1273893704,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"states__26260__auto__","states__26260__auto__",1910948635,null),null,(1),null))))),null,(1),null)))));
});

clojure_turtle.macros.repeat.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure_turtle.macros.repeat.cljs$lang$applyTo = (function (seq26261){
var G__26262 = cljs.core.first.call(null,seq26261);
var seq26261__$1 = cljs.core.next.call(null,seq26261);
var G__26263 = cljs.core.first.call(null,seq26261__$1);
var seq26261__$2 = cljs.core.next.call(null,seq26261__$1);
var G__26264 = cljs.core.first.call(null,seq26261__$2);
var seq26261__$3 = cljs.core.next.call(null,seq26261__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26262,G__26263,G__26264,seq26261__$3);
});

return null;
})()
;
clojure_turtle.macros.repeat.cljs$lang$macro = true;


//# sourceMappingURL=macros.js.map?rel=1557850988645
