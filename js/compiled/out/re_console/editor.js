// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_console.common');
goog.require('re_console.parinfer');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.runmode.runmode');
goog.require('cljsjs.codemirror.addon.runmode.colorize');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('parinfer.codemirror.mode.clojure.clojure_parinfer');
re_console.editor.default_cm_options = (function re_console$editor$default_cm_options(initial_prompt,mode){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),new cljs.core.Keyword(null,"showCursorWhenSelecting","showCursorWhenSelecting",169880137),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941)],[true,true,true,initial_prompt,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"none","none",1333468478)))?"clojure":"clojure-parinfer"),({"Shift-Enter": "newlineAndIndent"}),Infinity,true,false]);
});
re_console.editor.default_cm_handlers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"should-go-up","should-go-up",2137977547),(function (source,inst){
var pos = inst.getCursor();
return cljs.core._EQ_.call(null,(0),pos.line);
}),new cljs.core.Keyword(null,"should-go-down","should-go-down",473755082),(function (source,inst){
var pos = inst.getCursor();
var last_line = inst.lastLine();
return cljs.core._EQ_.call(null,last_line,pos.line);
})], null);
re_console.editor.handlers = (function re_console$editor$handlers(console_key){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"add-input","add-input",-994386222),(function (p1__29613_SHARP_,p2__29614_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-console-input","add-console-input",-277003986),console_key,p1__29613_SHARP_,p2__29614_SHARP_], null));
}),new cljs.core.Keyword(null,"add-result","add-result",1382794315),(function (p1__29615_SHARP_,p2__29616_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-console-result","add-console-result",1768771531),console_key,p1__29615_SHARP_,p2__29616_SHARP_], null));
}),new cljs.core.Keyword(null,"go-up","go-up",-783282342),(function (p1__29617_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-go-up","console-go-up",50535611),console_key,p1__29617_SHARP_], null));
}),new cljs.core.Keyword(null,"go-down","go-down",-1002511595),(function (p1__29618_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-go-down","console-go-down",-1045916631),console_key,p1__29618_SHARP_], null));
}),new cljs.core.Keyword(null,"clear-items","clear-items",524826180),(function (p1__29619_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-console-items","clear-console-items",-1821518386),console_key,p1__29619_SHARP_], null));
}),new cljs.core.Keyword(null,"set-text","set-text",1346789745),(function (p1__29620_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-set-text","console-set-text",860354388),console_key,p1__29620_SHARP_], null));
}),new cljs.core.Keyword(null,"add-log","add-log",1433037691),(function (p1__29621_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-console-log","add-console-log",-371208070),console_key,p1__29621_SHARP_], null));
})], null);
});
re_console.editor.move_to_end = (function re_console$editor$move_to_end(cm){
var last_line = cm.lastLine();
var last_ch = cljs.core.count.call(null,cm.getLine(last_line));
return cm.setCursor(last_line,last_ch);
});
re_console.editor.modifying_prompt_QMARK_ = (function re_console$editor$modifying_prompt_QMARK_(inst,key){
var pos_to = inst.getCursor("to");
var pos_from = inst.getCursor("from");
var lno = pos_to.line;
var cno_to = pos_to.ch;
var cno_from = pos_from.ch;
var compare_position_fn = ((cljs.core._EQ_.call(null,(8),key))?cljs.core._LT__EQ_:cljs.core._LT_);
var begin_source = re_console.common.beginning_of_source.call(null,inst.getValue());
var same_pos = cljs.core._EQ_.call(null,pos_to,pos_from);
var and__4036__auto__ = cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(39),null,(40),null,(38),null,(37),null], null), null)).call(null,key);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = (lno === (0));
if(and__4036__auto____$1){
var or__4047__auto__ = compare_position_fn.call(null,cno_to,begin_source);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto____$2 = (!(same_pos));
if(and__4036__auto____$2){
return compare_position_fn.call(null,cno_from,(begin_source - (1)));
} else {
return and__4036__auto____$2;
}
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
re_console.editor.on_viewport_change = (function re_console$editor$on_viewport_change(this$){
return (function (){
var el = reagent.core.dom_node.call(null,this$);
var re_console__$1 = el.parentElement;
var box = re_console__$1.parentElement;
return re_console.common.scroll_to_el_bottom_BANG_.call(null,box);
});
});
re_console.editor.on_change = (function re_console$editor$on_change(inst,console_key,text,p__29622,mode){
var map__29623 = p__29622;
var map__29623__$1 = (((((!((map__29623 == null))))?(((((map__29623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29623):map__29623);
var set_text = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"set-text","set-text",1346789745));
var on_after_change = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-on-after-change","get-console-on-after-change",-1635241260),console_key], null));
var on_before_change = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-on-before-change","get-console-on-before-change",577618067),console_key], null));
return ((function (on_after_change,on_before_change,map__29623,map__29623__$1,set_text){
return (function (inst__$1,evt){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.deref.call(null,mode))){
var value = re_console.common.source_without_prompt.call(null,inst__$1.getValue());
if(cljs.core._EQ_.call(null,value,cljs.core.deref.call(null,text))){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,on_before_change))){
cljs.core.deref.call(null,on_before_change).call(null,inst__$1,evt);
} else {
}

set_text.call(null,value);

if(cljs.core.truth_(cljs.core.deref.call(null,on_after_change))){
return cljs.core.deref.call(null,on_after_change).call(null,inst__$1,evt);
} else {
return null;
}
}
} else {
return null;
}
});
;})(on_after_change,on_before_change,map__29623,map__29623__$1,set_text))
});
re_console.editor.on_keydown = (function re_console$editor$on_keydown(console_key,p__29626,eval_opts){
var map__29627 = p__29626;
var map__29627__$1 = (((((!((map__29627 == null))))?(((((map__29627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29627):map__29627);
var should_go_up = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"should-go-up","should-go-up",2137977547));
var should_go_down = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"should-go-down","should-go-down",473755082));
var go_up = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"go-up","go-up",-783282342));
var go_down = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"go-down","go-down",-1002511595));
return ((function (map__29627,map__29627__$1,should_go_up,should_go_down,go_up,go_down){
return (function (inst,evt){
if(cljs.core.truth_(re_console.editor.modifying_prompt_QMARK_.call(null,inst,evt.keyCode))){
return evt.preventDefault();
} else {
var G__29629 = evt.keyCode;
switch (G__29629) {
case (13):
var source = re_console.common.source_without_prompt.call(null,inst.getValue());
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,evt.shiftKey);
if(and__4036__auto__){
return new cljs.core.Keyword(null,"should-eval","should-eval",-681728538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,eval_opts)).call(null,source);
} else {
return and__4036__auto__;
}
})())){
evt.preventDefault();

return new cljs.core.Keyword(null,"evaluate","evaluate",1525218437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,eval_opts)).call(null,((function (source,G__29629,map__29627,map__29627__$1,should_go_up,should_go_down,go_up,go_down){
return (function (p1__29625_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-eval-complete","on-eval-complete",436163213),console_key,p1__29625_SHARP_], null));
});})(source,G__29629,map__29627,map__29627__$1,should_go_up,should_go_down,go_up,go_down))
,source);
} else {
return null;
}

break;
case (38):
var source = re_console.common.source_without_prompt.call(null,inst.getValue());
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,evt.shiftKey);
if(and__4036__auto__){
return should_go_up.call(null,source,inst);
} else {
return and__4036__auto__;
}
})())){
evt.preventDefault();

return go_up.call(null);
} else {
return null;
}

break;
case (40):
var source = re_console.common.source_without_prompt.call(null,inst.getValue());
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,evt.shiftKey);
if(and__4036__auto__){
return should_go_down.call(null,source,inst);
} else {
return and__4036__auto__;
}
})())){
evt.preventDefault();

return go_down.call(null);
} else {
return null;
}

break;
default:
return new cljs.core.Keyword(null,"none","none",1333468478);

}
}
});
;})(map__29627,map__29627__$1,should_go_up,should_go_down,go_up,go_down))
});
re_console.editor.console_editor = (function re_console$editor$console_editor(console_key,text){
var cm = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console","get-console",349506720),console_key], null));
var handlers = cljs.core.merge.call(null,re_console.editor.handlers.call(null,console_key),re_console.editor.default_cm_handlers);
var eval_opts = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-eval-opts","get-console-eval-opts",2087577375),console_key], null));
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),console_key], null));
var on_before_change = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-on-before-change","get-console-on-before-change",577618067),console_key], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (cm,handlers,eval_opts,mode,on_before_change){
return (function (this$){
var el = reagent.core.dom_node.call(null,this$);
var inst = (new CodeMirror(el,cljs.core.clj__GT_js.call(null,re_console.editor.default_cm_options.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-prompt","get-prompt",747786315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,eval_opts)).call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,text))].join(''),cljs.core.deref.call(null,mode)))));
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-console-instance","add-console-instance",9095274),console_key,inst], null));

re_console.editor.move_to_end.call(null,inst);

inst.on("viewportChange",re_console.editor.on_viewport_change.call(null,this$));

inst.on("change",re_console.editor.on_change.call(null,inst,console_key,text,handlers,mode));

inst.on("keydown",re_console.editor.on_keydown.call(null,console_key,handlers,eval_opts));

return re_console.parinfer.parinferize_BANG_.call(null,inst,console_key);
});})(cm,handlers,eval_opts,mode,on_before_change))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (cm,handlers,eval_opts,mode,on_before_change){
return (function (this$,old_argv){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,text),re_console.common.source_without_prompt.call(null,cljs.core.deref.call(null,cm).getValue()))){
return null;
} else {
var cursor = cljs.core.deref.call(null,cm).getCursor();
var line_idx = cursor.line;
var cursor_idx = cursor.ch;
cljs.core.deref.call(null,cm).setValue([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-prompt","get-prompt",747786315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,eval_opts)).call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,text))].join(''));

var current_line = cljs.core.deref.call(null,cm).getLine((function (){var x__4138__auto__ = (cljs.core.deref.call(null,cm).lineCount() - (1));
var y__4139__auto__ = line_idx;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})());
var last_idx = (function (){var exclude_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [" ",null,"(",null,")",null,"[",null,"{",null,"]",null,"}",null], null), null);
while(true){
if(cljs.core.seq.call(null,exclude_chars)){
var char$ = cljs.core.first.call(null,exclude_chars);
var char_index = current_line.indexOf(char$,cursor_idx);
if(cljs.core._EQ_.call(null,char_index,(-1))){
var G__29631 = cljs.core.rest.call(null,exclude_chars);
exclude_chars = G__29631;
continue;
} else {
return char_index;
}
} else {
return cljs.core.count.call(null,current_line);
}
break;
}
})();
return cljs.core.deref.call(null,cm).setCursor(line_idx,last_idx);
}
});})(cm,handlers,eval_opts,mode,on_before_change))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (cm,handlers,eval_opts,mode,on_before_change){
return (function (){
cljs.core.deref.call(null,text);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});})(cm,handlers,eval_opts,mode,on_before_change))
], null));
});

//# sourceMappingURL=editor.js.map?rel=1557850993118
