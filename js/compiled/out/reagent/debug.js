// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20925__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20926__i = 0, G__20926__a = new Array(arguments.length -  0);
while (G__20926__i < G__20926__a.length) {G__20926__a[G__20926__i] = arguments[G__20926__i + 0]; ++G__20926__i;}
  args = new cljs.core.IndexedSeq(G__20926__a,0,null);
} 
return G__20925__delegate.call(this,args);};
G__20925.cljs$lang$maxFixedArity = 0;
G__20925.cljs$lang$applyTo = (function (arglist__20927){
var args = cljs.core.seq(arglist__20927);
return G__20925__delegate(args);
});
G__20925.cljs$core$IFn$_invoke$arity$variadic = G__20925__delegate;
return G__20925;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20928__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20929__i = 0, G__20929__a = new Array(arguments.length -  0);
while (G__20929__i < G__20929__a.length) {G__20929__a[G__20929__i] = arguments[G__20929__i + 0]; ++G__20929__i;}
  args = new cljs.core.IndexedSeq(G__20929__a,0,null);
} 
return G__20928__delegate.call(this,args);};
G__20928.cljs$lang$maxFixedArity = 0;
G__20928.cljs$lang$applyTo = (function (arglist__20930){
var args = cljs.core.seq(arglist__20930);
return G__20928__delegate(args);
});
G__20928.cljs$core$IFn$_invoke$arity$variadic = G__20928__delegate;
return G__20928;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1557850984425
