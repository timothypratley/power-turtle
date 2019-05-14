// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame_tracer.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clairvoyant.core');
re_frame_tracer.core.tracer = (function re_frame_tracer$core$tracer(var_args){
var args__4647__auto__ = [];
var len__4641__auto___24788 = arguments.length;
var i__4642__auto___24789 = (0);
while(true){
if((i__4642__auto___24789 < len__4641__auto___24788)){
args__4647__auto__.push((arguments[i__4642__auto___24789]));

var G__24790 = (i__4642__auto___24789 + (1));
i__4642__auto___24789 = G__24790;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_frame_tracer.core.tracer.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_frame_tracer.core.tracer.cljs$core$IFn$_invoke$arity$variadic = (function (p__24773){
var map__24774 = p__24773;
var map__24774__$1 = (((((!((map__24774 == null))))?(((((map__24774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24774):map__24774);
var options = map__24774__$1;
var color = cljs.core.get.call(null,map__24774__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var pr_val = ((function (map__24774,map__24774__$1,options,color){
return (function re_frame_tracer$core$pr_val(x){
return x;
});})(map__24774,map__24774__$1,options,color))
;
var log_binding = ((function (pr_val,map__24774,map__24774__$1,options,color){
return (function (form,init){
return console.groupCollapsed("%c%s","font-weight:bold;",cljs.core.pr_str.call(null,form),pr_val.call(null,init));
});})(pr_val,map__24774,map__24774__$1,options,color))
;
var log_exit = ((function (pr_val,log_binding,map__24774,map__24774__$1,options,color){
return (function (exit){
return console.log("=>",pr_val.call(null,exit));
});})(pr_val,log_binding,map__24774,map__24774__$1,options,color))
;
var has_bindings_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol("cljs.core","extend-protocol","cljs.core/extend-protocol",-100428625,null),null,new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("cljs.core","defrecord","cljs.core/defrecord",948295858,null),null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,new cljs.core.Symbol("cljs.core","deftype","cljs.core/deftype",-1630339979,null),null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),null,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",1764521227,null),null], null), null);
var fn_like_QMARK_ = cljs.core.disj.call(null,has_bindings_QMARK_,new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null));
if((typeof re_frame_tracer !== 'undefined') && (typeof re_frame_tracer.core !== 'undefined') && (typeof re_frame_tracer.core.t_re_frame_tracer$core24776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {clairvoyant.core.ITraceError}
 * @implements {clairvoyant.core.ITraceEnter}
 * @implements {cljs.core.IMeta}
 * @implements {clairvoyant.core.ITraceExit}
 * @implements {cljs.core.IWithMeta}
*/
re_frame_tracer.core.t_re_frame_tracer$core24776 = (function (log_exit,options,fn_like_QMARK_,has_bindings_QMARK_,color,p__24773,map__24774,log_binding,pr_val,meta24777){
this.log_exit = log_exit;
this.options = options;
this.fn_like_QMARK_ = fn_like_QMARK_;
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.color = color;
this.p__24773 = p__24773;
this.map__24774 = map__24774;
this.log_binding = log_binding;
this.pr_val = pr_val;
this.meta24777 = meta24777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
re_frame_tracer.core.t_re_frame_tracer$core24776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color){
return (function (_24778,meta24777__$1){
var self__ = this;
var _24778__$1 = this;
return (new re_frame_tracer.core.t_re_frame_tracer$core24776(self__.log_exit,self__.options,self__.fn_like_QMARK_,self__.has_bindings_QMARK_,self__.color,self__.p__24773,self__.map__24774,self__.log_binding,self__.pr_val,meta24777__$1));
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color))
;

re_frame_tracer.core.t_re_frame_tracer$core24776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color){
return (function (_24778){
var self__ = this;
var _24778__$1 = this;
return self__.meta24777;
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color))
;

re_frame_tracer.core.t_re_frame_tracer$core24776.prototype.clairvoyant$core$ITraceEnter$ = cljs.core.PROTOCOL_SENTINEL;

re_frame_tracer.core.t_re_frame_tracer$core24776.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color){
return (function (_,p__24779){
var self__ = this;
var map__24780 = p__24779;
var map__24780__$1 = (((((!((map__24780 == null))))?(((((map__24780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24780):map__24780);
var form = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var args = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dispatch_val = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"dispatch-val","dispatch-val",-1571470527));
var protocol = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var init = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var ns = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arglist = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var op = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var anonymous_QMARK_ = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995));
var ___$1 = this;
if(cljs.core.truth_(self__.fn_like_QMARK_.call(null,op))){
var title = (cljs.core.truth_(protocol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dispatch_val)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dispatch_val))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))].join(''));
var arglist__$1 = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
console.groupCollapsed("%c%s",["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.color),";"].join(''),title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null], null), null).call(null,op))){
var title = cljs.core.str.cljs$core$IFn$_invoke$arity$1(op);
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
return self__.log_binding.call(null,form,init);
} else {
return null;
}
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color))
;

re_frame_tracer.core.t_re_frame_tracer$core24776.prototype.clairvoyant$core$ITraceExit$ = cljs.core.PROTOCOL_SENTINEL;

re_frame_tracer.core.t_re_frame_tracer$core24776.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color){
return (function (_,p__24782){
var self__ = this;
var map__24783 = p__24782;
var map__24783__$1 = (((((!((map__24783 == null))))?(((((map__24783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24783):map__24783);
var op = cljs.core.get.call(null,map__24783__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var exit = cljs.core.get.call(null,map__24783__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color))
;

re_frame_tracer.core.t_re_frame_tracer$core24776.prototype.clairvoyant$core$ITraceError$ = cljs.core.PROTOCOL_SENTINEL;

re_frame_tracer.core.t_re_frame_tracer$core24776.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color){
return (function (_,p__24785){
var self__ = this;
var map__24786 = p__24785;
var map__24786__$1 = (((((!((map__24786 == null))))?(((((map__24786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24786):map__24786);
var op = cljs.core.get.call(null,map__24786__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__24786__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var error = cljs.core.get.call(null,map__24786__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var ex_data = cljs.core.get.call(null,map__24786__$1,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.groupEnd();

return console.groupEnd();
} else {
return null;
}
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.groupEnd();

console.groupEnd();
} else {
}

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color))
;

re_frame_tracer.core.t_re_frame_tracer$core24776.getBasis = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log-exit","log-exit",-1916806496,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"fn-like?","fn-like?",312793189,null),new cljs.core.Symbol(null,"has-bindings?","has-bindings?",-1143394454,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"p__24773","p__24773",1820349935,null),new cljs.core.Symbol(null,"map__24774","map__24774",-417831086,null),new cljs.core.Symbol(null,"log-binding","log-binding",-7452044,null),new cljs.core.Symbol(null,"pr-val","pr-val",-289132329,null),new cljs.core.Symbol(null,"meta24777","meta24777",-219490100,null)], null);
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color))
;

re_frame_tracer.core.t_re_frame_tracer$core24776.cljs$lang$type = true;

re_frame_tracer.core.t_re_frame_tracer$core24776.cljs$lang$ctorStr = "re-frame-tracer.core/t_re_frame_tracer$core24776";

re_frame_tracer.core.t_re_frame_tracer$core24776.cljs$lang$ctorPrWriter = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"re-frame-tracer.core/t_re_frame_tracer$core24776");
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color))
;

/**
 * Positional factory function for re-frame-tracer.core/t_re_frame_tracer$core24776.
 */
re_frame_tracer.core.__GT_t_re_frame_tracer$core24776 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color){
return (function re_frame_tracer$core$__GT_t_re_frame_tracer$core24776(log_exit__$1,options__$1,fn_like_QMARK___$1,has_bindings_QMARK___$1,color__$1,p__24773__$1,map__24774__$2,log_binding__$1,pr_val__$1,meta24777){
return (new re_frame_tracer.core.t_re_frame_tracer$core24776(log_exit__$1,options__$1,fn_like_QMARK___$1,has_bindings_QMARK___$1,color__$1,p__24773__$1,map__24774__$2,log_binding__$1,pr_val__$1,meta24777));
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__24774,map__24774__$1,options,color))
;

}

return (new re_frame_tracer.core.t_re_frame_tracer$core24776(log_exit,options,fn_like_QMARK_,has_bindings_QMARK_,color,p__24773,map__24774__$1,log_binding,pr_val,cljs.core.PersistentArrayMap.EMPTY));
});

re_frame_tracer.core.tracer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_frame_tracer.core.tracer.cljs$lang$applyTo = (function (seq24772){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24772));
});


//# sourceMappingURL=core.js.map?rel=1557850987813
