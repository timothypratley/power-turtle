// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__25412 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25413 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25413;

try{try{var seq__25414 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25415 = null;
var count__25416 = (0);
var i__25417 = (0);
while(true){
if((i__25417 < count__25416)){
var vec__25418 = cljs.core._nth.call(null,chunk__25415,i__25417);
var effect_key = cljs.core.nth.call(null,vec__25418,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25418,(1),null);
var temp__5718__auto___25434 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___25434)){
var effect_fn_25435 = temp__5718__auto___25434;
effect_fn_25435.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25436 = seq__25414;
var G__25437 = chunk__25415;
var G__25438 = count__25416;
var G__25439 = (i__25417 + (1));
seq__25414 = G__25436;
chunk__25415 = G__25437;
count__25416 = G__25438;
i__25417 = G__25439;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25414);
if(temp__5720__auto__){
var seq__25414__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25414__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__25414__$1);
var G__25440 = cljs.core.chunk_rest.call(null,seq__25414__$1);
var G__25441 = c__4461__auto__;
var G__25442 = cljs.core.count.call(null,c__4461__auto__);
var G__25443 = (0);
seq__25414 = G__25440;
chunk__25415 = G__25441;
count__25416 = G__25442;
i__25417 = G__25443;
continue;
} else {
var vec__25421 = cljs.core.first.call(null,seq__25414__$1);
var effect_key = cljs.core.nth.call(null,vec__25421,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25421,(1),null);
var temp__5718__auto___25444 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___25444)){
var effect_fn_25445 = temp__5718__auto___25444;
effect_fn_25445.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25446 = cljs.core.next.call(null,seq__25414__$1);
var G__25447 = null;
var G__25448 = (0);
var G__25449 = (0);
seq__25414 = G__25446;
chunk__25415 = G__25447;
count__25416 = G__25448;
i__25417 = G__25449;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__25249__auto___25450 = re_frame.interop.now.call(null);
var duration__25250__auto___25451 = (end__25249__auto___25450 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25250__auto___25451,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__25249__auto___25450);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25412;
}} else {
var seq__25424 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25425 = null;
var count__25426 = (0);
var i__25427 = (0);
while(true){
if((i__25427 < count__25426)){
var vec__25428 = cljs.core._nth.call(null,chunk__25425,i__25427);
var effect_key = cljs.core.nth.call(null,vec__25428,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25428,(1),null);
var temp__5718__auto___25452 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___25452)){
var effect_fn_25453 = temp__5718__auto___25452;
effect_fn_25453.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25454 = seq__25424;
var G__25455 = chunk__25425;
var G__25456 = count__25426;
var G__25457 = (i__25427 + (1));
seq__25424 = G__25454;
chunk__25425 = G__25455;
count__25426 = G__25456;
i__25427 = G__25457;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25424);
if(temp__5720__auto__){
var seq__25424__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25424__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__25424__$1);
var G__25458 = cljs.core.chunk_rest.call(null,seq__25424__$1);
var G__25459 = c__4461__auto__;
var G__25460 = cljs.core.count.call(null,c__4461__auto__);
var G__25461 = (0);
seq__25424 = G__25458;
chunk__25425 = G__25459;
count__25426 = G__25460;
i__25427 = G__25461;
continue;
} else {
var vec__25431 = cljs.core.first.call(null,seq__25424__$1);
var effect_key = cljs.core.nth.call(null,vec__25431,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25431,(1),null);
var temp__5718__auto___25462 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___25462)){
var effect_fn_25463 = temp__5718__auto___25462;
effect_fn_25463.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25464 = cljs.core.next.call(null,seq__25424__$1);
var G__25465 = null;
var G__25466 = (0);
var G__25467 = (0);
seq__25424 = G__25464;
chunk__25425 = G__25465;
count__25426 = G__25466;
i__25427 = G__25467;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__25468 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25469 = null;
var count__25470 = (0);
var i__25471 = (0);
while(true){
if((i__25471 < count__25470)){
var map__25472 = cljs.core._nth.call(null,chunk__25469,i__25471);
var map__25472__$1 = (((((!((map__25472 == null))))?(((((map__25472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25472):map__25472);
var effect = map__25472__$1;
var ms = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25468,chunk__25469,count__25470,i__25471,map__25472,map__25472__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25468,chunk__25469,count__25470,i__25471,map__25472,map__25472__$1,effect,ms,dispatch))
,ms);
}


var G__25476 = seq__25468;
var G__25477 = chunk__25469;
var G__25478 = count__25470;
var G__25479 = (i__25471 + (1));
seq__25468 = G__25476;
chunk__25469 = G__25477;
count__25470 = G__25478;
i__25471 = G__25479;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25468);
if(temp__5720__auto__){
var seq__25468__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25468__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__25468__$1);
var G__25480 = cljs.core.chunk_rest.call(null,seq__25468__$1);
var G__25481 = c__4461__auto__;
var G__25482 = cljs.core.count.call(null,c__4461__auto__);
var G__25483 = (0);
seq__25468 = G__25480;
chunk__25469 = G__25481;
count__25470 = G__25482;
i__25471 = G__25483;
continue;
} else {
var map__25474 = cljs.core.first.call(null,seq__25468__$1);
var map__25474__$1 = (((((!((map__25474 == null))))?(((((map__25474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25474):map__25474);
var effect = map__25474__$1;
var ms = cljs.core.get.call(null,map__25474__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25474__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25468,chunk__25469,count__25470,i__25471,map__25474,map__25474__$1,effect,ms,dispatch,seq__25468__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25468,chunk__25469,count__25470,i__25471,map__25474,map__25474__$1,effect,ms,dispatch,seq__25468__$1,temp__5720__auto__))
,ms);
}


var G__25484 = cljs.core.next.call(null,seq__25468__$1);
var G__25485 = null;
var G__25486 = (0);
var G__25487 = (0);
seq__25468 = G__25484;
chunk__25469 = G__25485;
count__25470 = G__25486;
i__25471 = G__25487;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__25488 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25489 = null;
var count__25490 = (0);
var i__25491 = (0);
while(true){
if((i__25491 < count__25490)){
var event = cljs.core._nth.call(null,chunk__25489,i__25491);
re_frame.router.dispatch.call(null,event);


var G__25492 = seq__25488;
var G__25493 = chunk__25489;
var G__25494 = count__25490;
var G__25495 = (i__25491 + (1));
seq__25488 = G__25492;
chunk__25489 = G__25493;
count__25490 = G__25494;
i__25491 = G__25495;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25488);
if(temp__5720__auto__){
var seq__25488__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25488__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__25488__$1);
var G__25496 = cljs.core.chunk_rest.call(null,seq__25488__$1);
var G__25497 = c__4461__auto__;
var G__25498 = cljs.core.count.call(null,c__4461__auto__);
var G__25499 = (0);
seq__25488 = G__25496;
chunk__25489 = G__25497;
count__25490 = G__25498;
i__25491 = G__25499;
continue;
} else {
var event = cljs.core.first.call(null,seq__25488__$1);
re_frame.router.dispatch.call(null,event);


var G__25500 = cljs.core.next.call(null,seq__25488__$1);
var G__25501 = null;
var G__25502 = (0);
var G__25503 = (0);
seq__25488 = G__25500;
chunk__25489 = G__25501;
count__25490 = G__25502;
i__25491 = G__25503;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__25504 = cljs.core.seq.call(null,value);
var chunk__25505 = null;
var count__25506 = (0);
var i__25507 = (0);
while(true){
if((i__25507 < count__25506)){
var event = cljs.core._nth.call(null,chunk__25505,i__25507);
clear_event.call(null,event);


var G__25508 = seq__25504;
var G__25509 = chunk__25505;
var G__25510 = count__25506;
var G__25511 = (i__25507 + (1));
seq__25504 = G__25508;
chunk__25505 = G__25509;
count__25506 = G__25510;
i__25507 = G__25511;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25504);
if(temp__5720__auto__){
var seq__25504__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25504__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__25504__$1);
var G__25512 = cljs.core.chunk_rest.call(null,seq__25504__$1);
var G__25513 = c__4461__auto__;
var G__25514 = cljs.core.count.call(null,c__4461__auto__);
var G__25515 = (0);
seq__25504 = G__25512;
chunk__25505 = G__25513;
count__25506 = G__25514;
i__25507 = G__25515;
continue;
} else {
var event = cljs.core.first.call(null,seq__25504__$1);
clear_event.call(null,event);


var G__25516 = cljs.core.next.call(null,seq__25504__$1);
var G__25517 = null;
var G__25518 = (0);
var G__25519 = (0);
seq__25504 = G__25516;
chunk__25505 = G__25517;
count__25506 = G__25518;
i__25507 = G__25519;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1557850988266
