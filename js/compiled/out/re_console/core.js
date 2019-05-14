// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_console.handlers');
goog.require('re_console.subs');
goog.require('re_console.editor');
goog.require('re_console.common');
goog.require('re_console.utils');
re_console.core.display_console_output_item = (function re_console$core$display_console_output_item(var_args){
var G__29635 = arguments.length;
switch (G__29635) {
case 2:
return re_console.core.display_console_output_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_console.core.display_console_output_item.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_console.core.display_console_output_item.cljs$core$IFn$_invoke$arity$2 = (function (console_key,value){
return re_console.core.display_console_output_item.call(null,console_key,value,false);
});

re_console.core.display_console_output_item.cljs$core$IFn$_invoke$arity$3 = (function (console_key,value,error_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"class","class",-2030961996),["re-console-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(error_QMARK_)?" re-console-item-error":null))].join('')], null),value], null)], null)], null);
});

re_console.core.display_console_output_item.cljs$lang$maxFixedArity = 3;

re_console.core.display_console_item = (function re_console$core$display_console_item(console_key,to_str_fn,item){
var temp__5718__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5718__auto__)){
var text = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.re-console-item","div.re-console-item",412810004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (text,temp__5718__auto__){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-set-text","console-set-text",860354388),console_key,text], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));
});})(text,temp__5718__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_console.utils.colored_text,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(item)),"=> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null)], null);
} else {
return re_console.core.display_console_output_item.call(null,console_key,to_str_fn.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item)),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item)));
}
});
re_console.core.console_items = (function re_console$core$console_items(var_args){
var G__29639 = arguments.length;
switch (G__29639) {
case 2:
return re_console.core.console_items.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_console.core.console_items.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_console.core.console_items.cljs$core$IFn$_invoke$arity$2 = (function (console_key,items){
return re_console.core.console_items.call(null,console_key,items,cljs.core.identity);
});

re_console.core.console_items.cljs$core$IFn$_invoke$arity$3 = (function (console_key,items,to_str_fn){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__29637_SHARP_){
return p1__29637_SHARP_.stopPropagation();
})], null)], null),cljs.core.map.call(null,cljs.core.partial.call(null,re_console.core.display_console_item,console_key,to_str_fn),items));
});

re_console.core.console_items.cljs$lang$maxFixedArity = 3;

re_console.core.mode_line = (function re_console$core$mode_line(console_key){
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),console_key], null));
var queued_forms_count = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-forms-count","queued-forms-count",1735821775),console_key], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.re-console-mode-line","div.re-console-mode-line",-1350720707),["Current mode: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.deref.call(null,mode)))," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,queued_forms_count))," form(s) in the evaluation queue"].join('')], null);
});
re_console.core.console = (function re_console$core$console(console_key,opts){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-items","get-console-items",-1702647473),console_key], null));
var text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-console-current-text","get-console-current-text",445390068),console_key], null));
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-console","init-console",1925118851),console_key,opts], null));

return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (items,text){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.re-console-container","div.re-console-container",572218449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items,text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));
});})(items,text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.re-console","div.re-console",-1428199801),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_console.core.console_items,console_key,cljs.core.deref.call(null,items),new cljs.core.Keyword(null,"to-str-fn","to-str-fn",-1134898233).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"eval-opts","eval-opts",1965011191).cljs$core$IFn$_invoke$arity$1(opts))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_console.editor.console_editor,console_key,text], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"mode-line?","mode-line?",-1824985672).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_console.core.mode_line,console_key], null):null)], null);
});})(items,text))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (items,text){
return (function (this$){
return re_console.common.scroll_to_el_bottom_BANG_.call(null,reagent.core.dom_node.call(null,this$).firstChild);
});})(items,text))
], null));
});

//# sourceMappingURL=core.js.map?rel=1557850993143
