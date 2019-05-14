// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.parinfer');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('parinfer.indent_mode');
goog.require('parinfer.paren_mode');
goog.require('re_console.common');
/**
 * Correctly position cursor after text that was just typed.
 *   We need this since reformatting the text can shift things forward past our cursor.
 */
re_console.parinfer.update_cursor_fn = (function re_console$parinfer$update_cursor_fn(console_key){
var cm = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console","get-console",349506720),console_key], null));
return ((function (cm){
return (function (change){
if(cljs.core._EQ_.call(null,"+input",change.origin)){
var selection_QMARK_ = cljs.core.deref.call(null,cm).somethingSelected();
var text = clojure.string.join.call(null,"\n",change.text);
var from_x = change.from.ch;
var line_no = change.from.line;
var line = cljs.core.deref.call(null,cm).getLine(line_no);
var insert_x = line.indexOf(text,from_x);
var after_x = (insert_x + cljs.core.count.call(null,text));
if(cljs.core.truth_(selection_QMARK_)){
return null;
} else {
if(cljs.core._EQ_.call(null,text,"\n")){
return null;
} else {
if(cljs.core._EQ_.call(null,text,";")){
return cljs.core.deref.call(null,cm).setCursor(line_no,after_x);
} else {
if(((cljs.core._EQ_.call(null,(-1),insert_x)) || ((insert_x > from_x)))){
return cljs.core.deref.call(null,cm).setCursor(line_no,from_x);
} else {
return null;

}
}
}
}
} else {
return null;
}
});
;})(cm))
});
re_console.parinfer.compute_cursor_dx = (function re_console$parinfer$compute_cursor_dx(cursor,change){
if(cljs.core.truth_(change)){
var ignore_QMARK_ = cljs.core._EQ_.call(null,"+indenthack",change.origin);
if(ignore_QMARK_){
return (0);
} else {
var start_x = change.to.ch;
var new_lines = change.text;
var len_last_line = cljs.core.count.call(null,cljs.core.last.call(null,new_lines));
var end_x = (((cljs.core.count.call(null,new_lines) > (1)))?len_last_line:(len_last_line + change.from.ch));
return (end_x - start_x);
}
} else {
return null;
}
});
re_console.parinfer.compute_cm_change = (function re_console$parinfer$compute_cm_change(cm,change,options,prev_state){
var map__29596 = (cljs.core.truth_(change)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-line","start-line",-41746654),change.from.line,new cljs.core.Keyword(null,"end-line","end-line",1837326455),(change.to.line + (1)),new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646),change.text.length], null):(function (){var start = new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007).cljs$core$IFn$_invoke$arity$1(prev_state);
var end = (start + (1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-line","start-line",-41746654),start,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end,new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646),(end - start)], null);
})());
var map__29596__$1 = (((((!((map__29596 == null))))?(((((map__29596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29596):map__29596);
var start_line = cljs.core.get.call(null,map__29596__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var end_line = cljs.core.get.call(null,map__29596__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var num_new_lines = cljs.core.get.call(null,map__29596__$1,new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646));
var lines = (function (){var iter__4434__auto__ = ((function (map__29596,map__29596__$1,start_line,end_line,num_new_lines){
return (function re_console$parinfer$compute_cm_change_$_iter__29598(s__29599){
return (new cljs.core.LazySeq(null,((function (map__29596,map__29596__$1,start_line,end_line,num_new_lines){
return (function (){
var s__29599__$1 = s__29599;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29599__$1);
if(temp__5720__auto__){
var s__29599__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29599__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__29599__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__29601 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__29600 = (0);
while(true){
if((i__29600 < size__4433__auto__)){
var i = cljs.core._nth.call(null,c__4432__auto__,i__29600);
cljs.core.chunk_append.call(null,b__29601,cm.getLine(i));

var G__29602 = (i__29600 + (1));
i__29600 = G__29602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29601),re_console$parinfer$compute_cm_change_$_iter__29598.call(null,cljs.core.chunk_rest.call(null,s__29599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29601),null);
}
} else {
var i = cljs.core.first.call(null,s__29599__$2);
return cljs.core.cons.call(null,cm.getLine(i),re_console$parinfer$compute_cm_change_$_iter__29598.call(null,cljs.core.rest.call(null,s__29599__$2)));
}
} else {
return null;
}
break;
}
});})(map__29596,map__29596__$1,start_line,end_line,num_new_lines))
,null,null));
});})(map__29596,map__29596__$1,start_line,end_line,num_new_lines))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,start_line,(start_line + num_new_lines)));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_line,end_line], null),new cljs.core.Keyword(null,"new-line","new-line",1060819447),lines], null);
});
/**
 * Correctly format the text from the given editor.
 */
re_console.parinfer.fix_text_fn = (function re_console$parinfer$fix_text_fn(console_key){
var cm = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console","get-console",349506720),console_key], null));
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),console_key], null));
var eval_opts = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-eval-opts","get-console-eval-opts",2087577375),console_key], null));
var prev_state = cljs.core.atom.call(null,null);
return ((function (cm,mode,eval_opts,prev_state){
return (function() { 
var G__29607__delegate = function (p__29603){
var map__29604 = p__29603;
var map__29604__$1 = (((((!((map__29604 == null))))?(((((map__29604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29604):map__29604);
var change = cljs.core.get.call(null,map__29604__$1,new cljs.core.Keyword(null,"change","change",-1163046502),null);
var use_cache_QMARK_ = cljs.core.get.call(null,map__29604__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false);
var current_text = cljs.core.deref.call(null,cm).getValue();
var selection_QMARK_ = cljs.core.deref.call(null,cm).somethingSelected();
var selections = cljs.core.deref.call(null,cm).listSelections();
var cursor = cljs.core.deref.call(null,cm).getCursor();
var scroller = cljs.core.deref.call(null,cm).getScrollerElement();
var scroll_x = scroller.scrollLeft;
var scroll_y = scroller.scrollTop;
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007),cursor.line,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266),cursor.ch,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327),re_console.parinfer.compute_cursor_dx.call(null,cursor,change)], null);
var new_text = (function (){var G__29606 = cljs.core.deref.call(null,mode);
var G__29606__$1 = (((G__29606 instanceof cljs.core.Keyword))?G__29606.fqn:null);
switch (G__29606__$1) {
case "indent-mode":
var result = (cljs.core.truth_((function (){var and__4036__auto__ = use_cache_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,prev_state);
} else {
return and__4036__auto__;
}
})())?parinfer.indent_mode.format_text_change.call(null,current_text,cljs.core.deref.call(null,prev_state),re_console.parinfer.compute_cm_change.call(null,cljs.core.deref.call(null,cm),change,options,cljs.core.deref.call(null,prev_state)),options):parinfer.indent_mode.format_text.call(null,current_text,options));
if(cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_.call(null,prev_state,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);

break;
case "paren-mode":
var result = parinfer.paren_mode.format_text.call(null,current_text,options);
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);

break;
default:
return null;

}
})();
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-set-text","console-set-text",860354388),console_key,re_console.common.source_without_prompt.call(null,new_text)], null));

cljs.core.deref.call(null,cm).setValue([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-prompt","get-prompt",747786315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,eval_opts)).call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_console.common.source_without_prompt.call(null,new_text))].join(''));

if(cljs.core.truth_(selection_QMARK_)){
cljs.core.deref.call(null,cm).setSelections(selections);
} else {
cljs.core.deref.call(null,cm).setCursor(cursor);
}

return cljs.core.deref.call(null,cm).scrollTo(scroll_x,scroll_y);
};
var G__29607 = function (var_args){
var p__29603 = null;
if (arguments.length > 0) {
var G__29609__i = 0, G__29609__a = new Array(arguments.length -  0);
while (G__29609__i < G__29609__a.length) {G__29609__a[G__29609__i] = arguments[G__29609__i + 0]; ++G__29609__i;}
  p__29603 = new cljs.core.IndexedSeq(G__29609__a,0,null);
} 
return G__29607__delegate.call(this,p__29603);};
G__29607.cljs$lang$maxFixedArity = 0;
G__29607.cljs$lang$applyTo = (function (arglist__29610){
var p__29603 = cljs.core.seq(arglist__29610);
return G__29607__delegate(p__29603);
});
G__29607.cljs$core$IFn$_invoke$arity$variadic = G__29607__delegate;
return G__29607;
})()
;
;})(cm,mode,eval_opts,prev_state))
});
/**
 * Called before any change is applied to the editor.
 */
re_console.parinfer.before_change = (function re_console$parinfer$before_change(cm,change){
if(((cljs.core._EQ_.call(null,"setValue",change.origin)) && (cljs.core._EQ_.call(null,cm.getValue(),clojure.string.join.call(null,"\n",change.text))))){
return change.cancel();
} else {
return null;
}
});
/**
 * Called after any change is applied to the editor.
 */
re_console.parinfer.on_change = (function re_console$parinfer$on_change(console_key){
var fix_text_BANG_ = re_console.parinfer.fix_text_fn.call(null,console_key);
var update_cursor_BANG_ = re_console.parinfer.update_cursor_fn.call(null,console_key);
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),console_key], null));
var on_before_change = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-on-before-change","get-console-on-before-change",577618067),console_key], null));
var on_after_change = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-on-after-change","get-console-on-after-change",-1635241260),console_key], null));
return ((function (fix_text_BANG_,update_cursor_BANG_,mode,on_before_change,on_after_change){
return (function (inst,change){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.deref.call(null,mode))){
return null;
} else {
if(cljs.core.not_EQ_.call(null,"setValue",change.origin)){
if(cljs.core.truth_(cljs.core.deref.call(null,on_before_change))){
cljs.core.deref.call(null,on_before_change).call(null,inst,change);
} else {
}

fix_text_BANG_.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),change);

update_cursor_BANG_.call(null,change);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-console-frame-updated","set-console-frame-updated",-1984928832),console_key,true], null));

if(cljs.core.truth_(cljs.core.deref.call(null,on_after_change))){
return cljs.core.deref.call(null,on_after_change).call(null,inst,change);
} else {
return null;
}
} else {
return null;
}
}
});
;})(fix_text_BANG_,update_cursor_BANG_,mode,on_before_change,on_after_change))
});
/**
 * Called after the cursor moves in the editor.
 */
re_console.parinfer.on_cursor_activity = (function re_console$parinfer$on_cursor_activity(console_key){
var frame_updated_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-frame-updated","get-console-frame-updated",550276687),console_key], null));
var fix_text_BANG_ = re_console.parinfer.fix_text_fn.call(null,console_key);
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),console_key], null));
var on_before_change = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-on-before-change","get-console-on-before-change",577618067),console_key], null));
var on_after_change = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-on-after-change","get-console-on-after-change",-1635241260),console_key], null));
return ((function (frame_updated_QMARK_,fix_text_BANG_,mode,on_before_change,on_after_change){
return (function (inst,evt){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.deref.call(null,mode))){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,frame_updated_QMARK_))){
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,on_before_change))){
cljs.core.deref.call(null,on_before_change).call(null,inst,evt);
} else {
}

fix_text_BANG_.call(null);

if(cljs.core.truth_(cljs.core.deref.call(null,on_after_change))){
cljs.core.deref.call(null,on_after_change).call(null,inst,evt);
} else {
}
}

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-console-frame-updated","set-console-frame-updated",-1984928832),console_key,false], null));
}
});
;})(frame_updated_QMARK_,fix_text_BANG_,mode,on_before_change,on_after_change))
});
/**
 * Add parinfer goodness to a codemirror editor
 */
re_console.parinfer.parinferize_BANG_ = (function re_console$parinfer$parinferize_BANG_(cm,console_key){
cm.on("change",re_console.parinfer.on_change.call(null,console_key));

return cm.on("beforeChange",re_console.parinfer.before_change);
});

//# sourceMappingURL=parinfer.js.map?rel=1557850993076
