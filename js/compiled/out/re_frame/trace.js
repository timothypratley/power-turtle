// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__25271){
var map__25272 = p__25271;
var map__25272__$1 = (((((!((map__25272 == null))))?(((((map__25272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25272):map__25272);
var operation = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__25274_25286 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__25275_25287 = null;
var count__25276_25288 = (0);
var i__25277_25289 = (0);
while(true){
if((i__25277_25289 < count__25276_25288)){
var vec__25278_25290 = cljs.core._nth.call(null,chunk__25275_25287,i__25277_25289);
var k_25291 = cljs.core.nth.call(null,vec__25278_25290,(0),null);
var cb_25292 = cljs.core.nth.call(null,vec__25278_25290,(1),null);
try{cb_25292.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e25281){var e_25293 = e25281;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_25291,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_25293);
}

var G__25294 = seq__25274_25286;
var G__25295 = chunk__25275_25287;
var G__25296 = count__25276_25288;
var G__25297 = (i__25277_25289 + (1));
seq__25274_25286 = G__25294;
chunk__25275_25287 = G__25295;
count__25276_25288 = G__25296;
i__25277_25289 = G__25297;
continue;
} else {
var temp__5720__auto___25298 = cljs.core.seq.call(null,seq__25274_25286);
if(temp__5720__auto___25298){
var seq__25274_25299__$1 = temp__5720__auto___25298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25274_25299__$1)){
var c__4461__auto___25300 = cljs.core.chunk_first.call(null,seq__25274_25299__$1);
var G__25301 = cljs.core.chunk_rest.call(null,seq__25274_25299__$1);
var G__25302 = c__4461__auto___25300;
var G__25303 = cljs.core.count.call(null,c__4461__auto___25300);
var G__25304 = (0);
seq__25274_25286 = G__25301;
chunk__25275_25287 = G__25302;
count__25276_25288 = G__25303;
i__25277_25289 = G__25304;
continue;
} else {
var vec__25282_25305 = cljs.core.first.call(null,seq__25274_25299__$1);
var k_25306 = cljs.core.nth.call(null,vec__25282_25305,(0),null);
var cb_25307 = cljs.core.nth.call(null,vec__25282_25305,(1),null);
try{cb_25307.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e25285){var e_25308 = e25285;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_25306,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_25308);
}

var G__25309 = cljs.core.next.call(null,seq__25274_25299__$1);
var G__25310 = null;
var G__25311 = (0);
var G__25312 = (0);
seq__25274_25286 = G__25309;
chunk__25275_25287 = G__25310;
count__25276_25288 = G__25311;
i__25277_25289 = G__25312;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1557850988050
