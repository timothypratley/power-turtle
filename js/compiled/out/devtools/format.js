// Compiled by ClojureScript 1.10.439 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._header[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._header["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._has_body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._has_body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o32916 = temp__5718__auto__;
var temp__5718__auto____$1 = (o32916["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o32917 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o32917["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o32918 = temp__5718__auto____$2;
return (o32918["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o32919 = temp__5718__auto__;
var temp__5718__auto____$1 = (o32919["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o32920 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o32920["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o32921 = temp__5718__auto____$2;
return (o32921["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o32922 = temp__5718__auto__;
var temp__5718__auto____$1 = (o32922["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o32923 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o32923["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o32924 = temp__5718__auto____$2;
return (o32924["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o32925 = temp__5718__auto__;
var temp__5718__auto____$1 = (o32925["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o32926 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o32926["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o32927 = temp__5718__auto____$2;
return (o32927["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o32928 = temp__5718__auto__;
var temp__5718__auto____$1 = (o32928["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o32929 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o32929["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o32930 = temp__5718__auto____$2;
return (o32930["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o32931 = temp__5718__auto__;
var temp__5718__auto____$1 = (o32931["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o32932 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o32932["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o32933 = temp__5718__auto____$2;
return (o32933["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o32934 = temp__5718__auto__;
var temp__5718__auto____$1 = (o32934["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o32935 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o32935["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o32936 = temp__5718__auto____$2;
return (o32936["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32938 = arguments.length;
var i__4642__auto___32939 = (0);
while(true){
if((i__4642__auto___32939 < len__4641__auto___32938)){
args__4647__auto__.push((arguments[i__4642__auto___32939]));

var G__32940 = (i__4642__auto___32939 + (1));
i__4642__auto___32939 = G__32940;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq32937){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32937));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32942 = arguments.length;
var i__4642__auto___32943 = (0);
while(true){
if((i__4642__auto___32943 < len__4641__auto___32942)){
args__4647__auto__.push((arguments[i__4642__auto___32943]));

var G__32944 = (i__4642__auto___32943 + (1));
i__4642__auto___32943 = G__32944;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq32941){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32941));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32946 = arguments.length;
var i__4642__auto___32947 = (0);
while(true){
if((i__4642__auto___32947 < len__4641__auto___32946)){
args__4647__auto__.push((arguments[i__4642__auto___32947]));

var G__32948 = (i__4642__auto___32947 + (1));
i__4642__auto___32947 = G__32948;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq32945){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32945));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32950 = arguments.length;
var i__4642__auto___32951 = (0);
while(true){
if((i__4642__auto___32951 < len__4641__auto___32950)){
args__4647__auto__.push((arguments[i__4642__auto___32951]));

var G__32952 = (i__4642__auto___32951 + (1));
i__4642__auto___32951 = G__32952;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq32949){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32949));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32954 = arguments.length;
var i__4642__auto___32955 = (0);
while(true){
if((i__4642__auto___32955 < len__4641__auto___32954)){
args__4647__auto__.push((arguments[i__4642__auto___32955]));

var G__32956 = (i__4642__auto___32955 + (1));
i__4642__auto___32955 = G__32956;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq32953){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32953));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32958 = arguments.length;
var i__4642__auto___32959 = (0);
while(true){
if((i__4642__auto___32959 < len__4641__auto___32958)){
args__4647__auto__.push((arguments[i__4642__auto___32959]));

var G__32960 = (i__4642__auto___32959 + (1));
i__4642__auto___32959 = G__32960;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq32957){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32957));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32962 = arguments.length;
var i__4642__auto___32963 = (0);
while(true){
if((i__4642__auto___32963 < len__4641__auto___32962)){
args__4647__auto__.push((arguments[i__4642__auto___32963]));

var G__32964 = (i__4642__auto___32963 + (1));
i__4642__auto___32963 = G__32964;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq32961){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32961));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32972 = arguments.length;
var i__4642__auto___32973 = (0);
while(true){
if((i__4642__auto___32973 < len__4641__auto___32972)){
args__4647__auto__.push((arguments[i__4642__auto___32973]));

var G__32974 = (i__4642__auto___32973 + (1));
i__4642__auto___32973 = G__32974;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__32968){
var vec__32969 = p__32968;
var state_override = cljs.core.nth.call(null,vec__32969,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__32969,state_override){
return (function (p1__32965_SHARP_){
return cljs.core.merge.call(null,p1__32965_SHARP_,state_override);
});})(vec__32969,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq32966){
var G__32967 = cljs.core.first.call(null,seq32966);
var seq32966__$1 = cljs.core.next.call(null,seq32966);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32967,seq32966__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32976 = arguments.length;
var i__4642__auto___32977 = (0);
while(true){
if((i__4642__auto___32977 < len__4641__auto___32976)){
args__4647__auto__.push((arguments[i__4642__auto___32977]));

var G__32978 = (i__4642__auto___32977 + (1));
i__4642__auto___32977 = G__32978;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq32975){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32975));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32981 = arguments.length;
var i__4642__auto___32982 = (0);
while(true){
if((i__4642__auto___32982 < len__4641__auto___32981)){
args__4647__auto__.push((arguments[i__4642__auto___32982]));

var G__32983 = (i__4642__auto___32982 + (1));
i__4642__auto___32982 = G__32983;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq32979){
var G__32980 = cljs.core.first.call(null,seq32979);
var seq32979__$1 = cljs.core.next.call(null,seq32979);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32980,seq32979__$1);
});


//# sourceMappingURL=format.js.map?rel=1557850997201
