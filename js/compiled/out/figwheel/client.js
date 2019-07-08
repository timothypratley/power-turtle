// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e38960){if((e38960 instanceof Error)){
var e = e38960;
return "Error: Unable to stringify";
} else {
throw e38960;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38963 = arguments.length;
switch (G__38963) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38961_SHARP_){
if(typeof p1__38961_SHARP_ === 'string'){
return p1__38961_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38961_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38966 = arguments.length;
var i__4642__auto___38967 = (0);
while(true){
if((i__4642__auto___38967 < len__4641__auto___38966)){
args__4647__auto__.push((arguments[i__4642__auto___38967]));

var G__38968 = (i__4642__auto___38967 + (1));
i__4642__auto___38967 = G__38968;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38965){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38965));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38970 = arguments.length;
var i__4642__auto___38971 = (0);
while(true){
if((i__4642__auto___38971 < len__4641__auto___38970)){
args__4647__auto__.push((arguments[i__4642__auto___38971]));

var G__38972 = (i__4642__auto___38971 + (1));
i__4642__auto___38971 = G__38972;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38969){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38969));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38973){
var map__38974 = p__38973;
var map__38974__$1 = (((((!((map__38974 == null))))?(((((map__38974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38974):map__38974);
var message = cljs.core.get.call(null,map__38974__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38974__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__36093__auto___39053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___39053,ch){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___39053,ch){
return (function (state_39025){
var state_val_39026 = (state_39025[(1)]);
if((state_val_39026 === (7))){
var inst_39021 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
var statearr_39027_39054 = state_39025__$1;
(statearr_39027_39054[(2)] = inst_39021);

(statearr_39027_39054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (1))){
var state_39025__$1 = state_39025;
var statearr_39028_39055 = state_39025__$1;
(statearr_39028_39055[(2)] = null);

(statearr_39028_39055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (4))){
var inst_38978 = (state_39025[(7)]);
var inst_38978__$1 = (state_39025[(2)]);
var state_39025__$1 = (function (){var statearr_39029 = state_39025;
(statearr_39029[(7)] = inst_38978__$1);

return statearr_39029;
})();
if(cljs.core.truth_(inst_38978__$1)){
var statearr_39030_39056 = state_39025__$1;
(statearr_39030_39056[(1)] = (5));

} else {
var statearr_39031_39057 = state_39025__$1;
(statearr_39031_39057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (15))){
var inst_38985 = (state_39025[(8)]);
var inst_39000 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38985);
var inst_39001 = cljs.core.first.call(null,inst_39000);
var inst_39002 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39001);
var inst_39003 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39002)].join('');
var inst_39004 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39003);
var state_39025__$1 = state_39025;
var statearr_39032_39058 = state_39025__$1;
(statearr_39032_39058[(2)] = inst_39004);

(statearr_39032_39058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (13))){
var inst_39009 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
var statearr_39033_39059 = state_39025__$1;
(statearr_39033_39059[(2)] = inst_39009);

(statearr_39033_39059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (6))){
var state_39025__$1 = state_39025;
var statearr_39034_39060 = state_39025__$1;
(statearr_39034_39060[(2)] = null);

(statearr_39034_39060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (17))){
var inst_39007 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
var statearr_39035_39061 = state_39025__$1;
(statearr_39035_39061[(2)] = inst_39007);

(statearr_39035_39061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (3))){
var inst_39023 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39025__$1,inst_39023);
} else {
if((state_val_39026 === (12))){
var inst_38984 = (state_39025[(9)]);
var inst_38998 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38984,opts);
var state_39025__$1 = state_39025;
if(inst_38998){
var statearr_39036_39062 = state_39025__$1;
(statearr_39036_39062[(1)] = (15));

} else {
var statearr_39037_39063 = state_39025__$1;
(statearr_39037_39063[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (2))){
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39025__$1,(4),ch);
} else {
if((state_val_39026 === (11))){
var inst_38985 = (state_39025[(8)]);
var inst_38990 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38991 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38985);
var inst_38992 = cljs.core.async.timeout.call(null,(1000));
var inst_38993 = [inst_38991,inst_38992];
var inst_38994 = (new cljs.core.PersistentVector(null,2,(5),inst_38990,inst_38993,null));
var state_39025__$1 = state_39025;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39025__$1,(14),inst_38994);
} else {
if((state_val_39026 === (9))){
var inst_38985 = (state_39025[(8)]);
var inst_39011 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39012 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38985);
var inst_39013 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39012);
var inst_39014 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39013)].join('');
var inst_39015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39014);
var state_39025__$1 = (function (){var statearr_39038 = state_39025;
(statearr_39038[(10)] = inst_39011);

return statearr_39038;
})();
var statearr_39039_39064 = state_39025__$1;
(statearr_39039_39064[(2)] = inst_39015);

(statearr_39039_39064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (5))){
var inst_38978 = (state_39025[(7)]);
var inst_38980 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38981 = (new cljs.core.PersistentArrayMap(null,2,inst_38980,null));
var inst_38982 = (new cljs.core.PersistentHashSet(null,inst_38981,null));
var inst_38983 = figwheel.client.focus_msgs.call(null,inst_38982,inst_38978);
var inst_38984 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38983);
var inst_38985 = cljs.core.first.call(null,inst_38983);
var inst_38986 = figwheel.client.autoload_QMARK_.call(null);
var state_39025__$1 = (function (){var statearr_39040 = state_39025;
(statearr_39040[(9)] = inst_38984);

(statearr_39040[(8)] = inst_38985);

return statearr_39040;
})();
if(cljs.core.truth_(inst_38986)){
var statearr_39041_39065 = state_39025__$1;
(statearr_39041_39065[(1)] = (8));

} else {
var statearr_39042_39066 = state_39025__$1;
(statearr_39042_39066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (14))){
var inst_38996 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
var statearr_39043_39067 = state_39025__$1;
(statearr_39043_39067[(2)] = inst_38996);

(statearr_39043_39067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (16))){
var state_39025__$1 = state_39025;
var statearr_39044_39068 = state_39025__$1;
(statearr_39044_39068[(2)] = null);

(statearr_39044_39068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (10))){
var inst_39017 = (state_39025[(2)]);
var state_39025__$1 = (function (){var statearr_39045 = state_39025;
(statearr_39045[(11)] = inst_39017);

return statearr_39045;
})();
var statearr_39046_39069 = state_39025__$1;
(statearr_39046_39069[(2)] = null);

(statearr_39046_39069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (8))){
var inst_38984 = (state_39025[(9)]);
var inst_38988 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38984,opts);
var state_39025__$1 = state_39025;
if(cljs.core.truth_(inst_38988)){
var statearr_39047_39070 = state_39025__$1;
(statearr_39047_39070[(1)] = (11));

} else {
var statearr_39048_39071 = state_39025__$1;
(statearr_39048_39071[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___39053,ch))
;
return ((function (switch__35998__auto__,c__36093__auto___39053,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35999__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35999__auto____0 = (function (){
var statearr_39049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39049[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35999__auto__);

(statearr_39049[(1)] = (1));

return statearr_39049;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35999__auto____1 = (function (state_39025){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_39025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e39050){if((e39050 instanceof Object)){
var ex__36002__auto__ = e39050;
var statearr_39051_39072 = state_39025;
(statearr_39051_39072[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39073 = state_39025;
state_39025 = G__39073;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35999__auto__ = function(state_39025){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35999__auto____1.call(this,state_39025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35999__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35999__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___39053,ch))
})();
var state__36095__auto__ = (function (){var statearr_39052 = f__36094__auto__.call(null);
(statearr_39052[(6)] = c__36093__auto___39053);

return statearr_39052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___39053,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39074_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39074_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39080 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39080){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39076 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39077 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39078 = true;
var _STAR_print_fn_STAR__temp_val__39079 = ((function (_STAR_print_newline_STAR__orig_val__39076,_STAR_print_fn_STAR__orig_val__39077,_STAR_print_newline_STAR__temp_val__39078,sb,base_path_39080){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__39076,_STAR_print_fn_STAR__orig_val__39077,_STAR_print_newline_STAR__temp_val__39078,sb,base_path_39080))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39078;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39079;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39077;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39076;
}}catch (e39075){if((e39075 instanceof Error)){
var e = e39075;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39080], null));
} else {
var e = e39075;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39080))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39081){
var map__39082 = p__39081;
var map__39082__$1 = (((((!((map__39082 == null))))?(((((map__39082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39082):map__39082);
var opts = map__39082__$1;
var build_id = cljs.core.get.call(null,map__39082__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39082,map__39082__$1,opts,build_id){
return (function (p__39084){
var vec__39085 = p__39084;
var seq__39086 = cljs.core.seq.call(null,vec__39085);
var first__39087 = cljs.core.first.call(null,seq__39086);
var seq__39086__$1 = cljs.core.next.call(null,seq__39086);
var map__39088 = first__39087;
var map__39088__$1 = (((((!((map__39088 == null))))?(((((map__39088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39088):map__39088);
var msg = map__39088__$1;
var msg_name = cljs.core.get.call(null,map__39088__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39086__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39085,seq__39086,first__39087,seq__39086__$1,map__39088,map__39088__$1,msg,msg_name,_,map__39082,map__39082__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39085,seq__39086,first__39087,seq__39086__$1,map__39088,map__39088__$1,msg,msg_name,_,map__39082,map__39082__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39082,map__39082__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39090){
var vec__39091 = p__39090;
var seq__39092 = cljs.core.seq.call(null,vec__39091);
var first__39093 = cljs.core.first.call(null,seq__39092);
var seq__39092__$1 = cljs.core.next.call(null,seq__39092);
var map__39094 = first__39093;
var map__39094__$1 = (((((!((map__39094 == null))))?(((((map__39094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39094):map__39094);
var msg = map__39094__$1;
var msg_name = cljs.core.get.call(null,map__39094__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39092__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39096){
var map__39097 = p__39096;
var map__39097__$1 = (((((!((map__39097 == null))))?(((((map__39097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39097):map__39097);
var on_compile_warning = cljs.core.get.call(null,map__39097__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39097__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39097,map__39097__$1,on_compile_warning,on_compile_fail){
return (function (p__39099){
var vec__39100 = p__39099;
var seq__39101 = cljs.core.seq.call(null,vec__39100);
var first__39102 = cljs.core.first.call(null,seq__39101);
var seq__39101__$1 = cljs.core.next.call(null,seq__39101);
var map__39103 = first__39102;
var map__39103__$1 = (((((!((map__39103 == null))))?(((((map__39103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39103):map__39103);
var msg = map__39103__$1;
var msg_name = cljs.core.get.call(null,map__39103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39101__$1;
var pred__39105 = cljs.core._EQ_;
var expr__39106 = msg_name;
if(cljs.core.truth_(pred__39105.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39106))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39105.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39106))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39097,map__39097__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__,msg_hist,msg_names,msg){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__,msg_hist,msg_names,msg){
return (function (state_39195){
var state_val_39196 = (state_39195[(1)]);
if((state_val_39196 === (7))){
var inst_39115 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
if(cljs.core.truth_(inst_39115)){
var statearr_39197_39244 = state_39195__$1;
(statearr_39197_39244[(1)] = (8));

} else {
var statearr_39198_39245 = state_39195__$1;
(statearr_39198_39245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (20))){
var inst_39189 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39199_39246 = state_39195__$1;
(statearr_39199_39246[(2)] = inst_39189);

(statearr_39199_39246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (27))){
var inst_39185 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39200_39247 = state_39195__$1;
(statearr_39200_39247[(2)] = inst_39185);

(statearr_39200_39247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (1))){
var inst_39108 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39195__$1 = state_39195;
if(cljs.core.truth_(inst_39108)){
var statearr_39201_39248 = state_39195__$1;
(statearr_39201_39248[(1)] = (2));

} else {
var statearr_39202_39249 = state_39195__$1;
(statearr_39202_39249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (24))){
var inst_39187 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39203_39250 = state_39195__$1;
(statearr_39203_39250[(2)] = inst_39187);

(statearr_39203_39250[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (4))){
var inst_39193 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39195__$1,inst_39193);
} else {
if((state_val_39196 === (15))){
var inst_39191 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39204_39251 = state_39195__$1;
(statearr_39204_39251[(2)] = inst_39191);

(statearr_39204_39251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (21))){
var inst_39144 = (state_39195[(2)]);
var inst_39145 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39146 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39145);
var state_39195__$1 = (function (){var statearr_39205 = state_39195;
(statearr_39205[(7)] = inst_39144);

return statearr_39205;
})();
var statearr_39206_39252 = state_39195__$1;
(statearr_39206_39252[(2)] = inst_39146);

(statearr_39206_39252[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (31))){
var inst_39174 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39195__$1 = state_39195;
if(inst_39174){
var statearr_39207_39253 = state_39195__$1;
(statearr_39207_39253[(1)] = (34));

} else {
var statearr_39208_39254 = state_39195__$1;
(statearr_39208_39254[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (32))){
var inst_39183 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39209_39255 = state_39195__$1;
(statearr_39209_39255[(2)] = inst_39183);

(statearr_39209_39255[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (33))){
var inst_39170 = (state_39195[(2)]);
var inst_39171 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39172 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39171);
var state_39195__$1 = (function (){var statearr_39210 = state_39195;
(statearr_39210[(8)] = inst_39170);

return statearr_39210;
})();
var statearr_39211_39256 = state_39195__$1;
(statearr_39211_39256[(2)] = inst_39172);

(statearr_39211_39256[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (13))){
var inst_39129 = figwheel.client.heads_up.clear.call(null);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(16),inst_39129);
} else {
if((state_val_39196 === (22))){
var inst_39150 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39151 = figwheel.client.heads_up.append_warning_message.call(null,inst_39150);
var state_39195__$1 = state_39195;
var statearr_39212_39257 = state_39195__$1;
(statearr_39212_39257[(2)] = inst_39151);

(statearr_39212_39257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (36))){
var inst_39181 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39213_39258 = state_39195__$1;
(statearr_39213_39258[(2)] = inst_39181);

(statearr_39213_39258[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (29))){
var inst_39161 = (state_39195[(2)]);
var inst_39162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39163 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39162);
var state_39195__$1 = (function (){var statearr_39214 = state_39195;
(statearr_39214[(9)] = inst_39161);

return statearr_39214;
})();
var statearr_39215_39259 = state_39195__$1;
(statearr_39215_39259[(2)] = inst_39163);

(statearr_39215_39259[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (6))){
var inst_39110 = (state_39195[(10)]);
var state_39195__$1 = state_39195;
var statearr_39216_39260 = state_39195__$1;
(statearr_39216_39260[(2)] = inst_39110);

(statearr_39216_39260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (28))){
var inst_39157 = (state_39195[(2)]);
var inst_39158 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39159 = figwheel.client.heads_up.display_warning.call(null,inst_39158);
var state_39195__$1 = (function (){var statearr_39217 = state_39195;
(statearr_39217[(11)] = inst_39157);

return statearr_39217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(29),inst_39159);
} else {
if((state_val_39196 === (25))){
var inst_39155 = figwheel.client.heads_up.clear.call(null);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(28),inst_39155);
} else {
if((state_val_39196 === (34))){
var inst_39176 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(37),inst_39176);
} else {
if((state_val_39196 === (17))){
var inst_39135 = (state_39195[(2)]);
var inst_39136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39137 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39136);
var state_39195__$1 = (function (){var statearr_39218 = state_39195;
(statearr_39218[(12)] = inst_39135);

return statearr_39218;
})();
var statearr_39219_39261 = state_39195__$1;
(statearr_39219_39261[(2)] = inst_39137);

(statearr_39219_39261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (3))){
var inst_39127 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39195__$1 = state_39195;
if(inst_39127){
var statearr_39220_39262 = state_39195__$1;
(statearr_39220_39262[(1)] = (13));

} else {
var statearr_39221_39263 = state_39195__$1;
(statearr_39221_39263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (12))){
var inst_39123 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39222_39264 = state_39195__$1;
(statearr_39222_39264[(2)] = inst_39123);

(statearr_39222_39264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (2))){
var inst_39110 = (state_39195[(10)]);
var inst_39110__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39195__$1 = (function (){var statearr_39223 = state_39195;
(statearr_39223[(10)] = inst_39110__$1);

return statearr_39223;
})();
if(cljs.core.truth_(inst_39110__$1)){
var statearr_39224_39265 = state_39195__$1;
(statearr_39224_39265[(1)] = (5));

} else {
var statearr_39225_39266 = state_39195__$1;
(statearr_39225_39266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (23))){
var inst_39153 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39195__$1 = state_39195;
if(inst_39153){
var statearr_39226_39267 = state_39195__$1;
(statearr_39226_39267[(1)] = (25));

} else {
var statearr_39227_39268 = state_39195__$1;
(statearr_39227_39268[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (35))){
var state_39195__$1 = state_39195;
var statearr_39228_39269 = state_39195__$1;
(statearr_39228_39269[(2)] = null);

(statearr_39228_39269[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (19))){
var inst_39148 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39195__$1 = state_39195;
if(inst_39148){
var statearr_39229_39270 = state_39195__$1;
(statearr_39229_39270[(1)] = (22));

} else {
var statearr_39230_39271 = state_39195__$1;
(statearr_39230_39271[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (11))){
var inst_39119 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39231_39272 = state_39195__$1;
(statearr_39231_39272[(2)] = inst_39119);

(statearr_39231_39272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (9))){
var inst_39121 = figwheel.client.heads_up.clear.call(null);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(12),inst_39121);
} else {
if((state_val_39196 === (5))){
var inst_39112 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39195__$1 = state_39195;
var statearr_39232_39273 = state_39195__$1;
(statearr_39232_39273[(2)] = inst_39112);

(statearr_39232_39273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (14))){
var inst_39139 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39195__$1 = state_39195;
if(inst_39139){
var statearr_39233_39274 = state_39195__$1;
(statearr_39233_39274[(1)] = (18));

} else {
var statearr_39234_39275 = state_39195__$1;
(statearr_39234_39275[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (26))){
var inst_39165 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39195__$1 = state_39195;
if(inst_39165){
var statearr_39235_39276 = state_39195__$1;
(statearr_39235_39276[(1)] = (30));

} else {
var statearr_39236_39277 = state_39195__$1;
(statearr_39236_39277[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (16))){
var inst_39131 = (state_39195[(2)]);
var inst_39132 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39133 = figwheel.client.heads_up.display_exception.call(null,inst_39132);
var state_39195__$1 = (function (){var statearr_39237 = state_39195;
(statearr_39237[(13)] = inst_39131);

return statearr_39237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(17),inst_39133);
} else {
if((state_val_39196 === (30))){
var inst_39167 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39168 = figwheel.client.heads_up.display_warning.call(null,inst_39167);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(33),inst_39168);
} else {
if((state_val_39196 === (10))){
var inst_39125 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39238_39278 = state_39195__$1;
(statearr_39238_39278[(2)] = inst_39125);

(statearr_39238_39278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (18))){
var inst_39141 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39142 = figwheel.client.heads_up.display_exception.call(null,inst_39141);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(21),inst_39142);
} else {
if((state_val_39196 === (37))){
var inst_39178 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39239_39279 = state_39195__$1;
(statearr_39239_39279[(2)] = inst_39178);

(statearr_39239_39279[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (8))){
var inst_39117 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(11),inst_39117);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35998__auto__,c__36093__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto____0 = (function (){
var statearr_39240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39240[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto__);

(statearr_39240[(1)] = (1));

return statearr_39240;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto____1 = (function (state_39195){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_39195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e39241){if((e39241 instanceof Object)){
var ex__36002__auto__ = e39241;
var statearr_39242_39280 = state_39195;
(statearr_39242_39280[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39281 = state_39195;
state_39195 = G__39281;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto__ = function(state_39195){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto____1.call(this,state_39195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__,msg_hist,msg_names,msg))
})();
var state__36095__auto__ = (function (){var statearr_39243 = f__36094__auto__.call(null);
(statearr_39243[(6)] = c__36093__auto__);

return statearr_39243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__,msg_hist,msg_names,msg))
);

return c__36093__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36093__auto___39310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___39310,ch){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___39310,ch){
return (function (state_39296){
var state_val_39297 = (state_39296[(1)]);
if((state_val_39297 === (1))){
var state_39296__$1 = state_39296;
var statearr_39298_39311 = state_39296__$1;
(statearr_39298_39311[(2)] = null);

(statearr_39298_39311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (2))){
var state_39296__$1 = state_39296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39296__$1,(4),ch);
} else {
if((state_val_39297 === (3))){
var inst_39294 = (state_39296[(2)]);
var state_39296__$1 = state_39296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39296__$1,inst_39294);
} else {
if((state_val_39297 === (4))){
var inst_39284 = (state_39296[(7)]);
var inst_39284__$1 = (state_39296[(2)]);
var state_39296__$1 = (function (){var statearr_39299 = state_39296;
(statearr_39299[(7)] = inst_39284__$1);

return statearr_39299;
})();
if(cljs.core.truth_(inst_39284__$1)){
var statearr_39300_39312 = state_39296__$1;
(statearr_39300_39312[(1)] = (5));

} else {
var statearr_39301_39313 = state_39296__$1;
(statearr_39301_39313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (5))){
var inst_39284 = (state_39296[(7)]);
var inst_39286 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39284);
var state_39296__$1 = state_39296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39296__$1,(8),inst_39286);
} else {
if((state_val_39297 === (6))){
var state_39296__$1 = state_39296;
var statearr_39302_39314 = state_39296__$1;
(statearr_39302_39314[(2)] = null);

(statearr_39302_39314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (7))){
var inst_39292 = (state_39296[(2)]);
var state_39296__$1 = state_39296;
var statearr_39303_39315 = state_39296__$1;
(statearr_39303_39315[(2)] = inst_39292);

(statearr_39303_39315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (8))){
var inst_39288 = (state_39296[(2)]);
var state_39296__$1 = (function (){var statearr_39304 = state_39296;
(statearr_39304[(8)] = inst_39288);

return statearr_39304;
})();
var statearr_39305_39316 = state_39296__$1;
(statearr_39305_39316[(2)] = null);

(statearr_39305_39316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__36093__auto___39310,ch))
;
return ((function (switch__35998__auto__,c__36093__auto___39310,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35999__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35999__auto____0 = (function (){
var statearr_39306 = [null,null,null,null,null,null,null,null,null];
(statearr_39306[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35999__auto__);

(statearr_39306[(1)] = (1));

return statearr_39306;
});
var figwheel$client$heads_up_plugin_$_state_machine__35999__auto____1 = (function (state_39296){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_39296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e39307){if((e39307 instanceof Object)){
var ex__36002__auto__ = e39307;
var statearr_39308_39317 = state_39296;
(statearr_39308_39317[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39318 = state_39296;
state_39296 = G__39318;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35999__auto__ = function(state_39296){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35999__auto____1.call(this,state_39296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35999__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35999__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___39310,ch))
})();
var state__36095__auto__ = (function (){var statearr_39309 = f__36094__auto__.call(null);
(statearr_39309[(6)] = c__36093__auto___39310);

return statearr_39309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___39310,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__){
return (function (state_39324){
var state_val_39325 = (state_39324[(1)]);
if((state_val_39325 === (1))){
var inst_39319 = cljs.core.async.timeout.call(null,(3000));
var state_39324__$1 = state_39324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39324__$1,(2),inst_39319);
} else {
if((state_val_39325 === (2))){
var inst_39321 = (state_39324[(2)]);
var inst_39322 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39324__$1 = (function (){var statearr_39326 = state_39324;
(statearr_39326[(7)] = inst_39321);

return statearr_39326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39324__$1,inst_39322);
} else {
return null;
}
}
});})(c__36093__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35999__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35999__auto____0 = (function (){
var statearr_39327 = [null,null,null,null,null,null,null,null];
(statearr_39327[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35999__auto__);

(statearr_39327[(1)] = (1));

return statearr_39327;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35999__auto____1 = (function (state_39324){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_39324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e39328){if((e39328 instanceof Object)){
var ex__36002__auto__ = e39328;
var statearr_39329_39331 = state_39324;
(statearr_39329_39331[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39332 = state_39324;
state_39324 = G__39332;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35999__auto__ = function(state_39324){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35999__auto____1.call(this,state_39324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35999__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35999__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__))
})();
var state__36095__auto__ = (function (){var statearr_39330 = f__36094__auto__.call(null);
(statearr_39330[(6)] = c__36093__auto__);

return statearr_39330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__))
);

return c__36093__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__,figwheel_version,temp__5720__auto__){
return (function (state_39339){
var state_val_39340 = (state_39339[(1)]);
if((state_val_39340 === (1))){
var inst_39333 = cljs.core.async.timeout.call(null,(2000));
var state_39339__$1 = state_39339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39339__$1,(2),inst_39333);
} else {
if((state_val_39340 === (2))){
var inst_39335 = (state_39339[(2)]);
var inst_39336 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39337 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39336);
var state_39339__$1 = (function (){var statearr_39341 = state_39339;
(statearr_39341[(7)] = inst_39335);

return statearr_39341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39339__$1,inst_39337);
} else {
return null;
}
}
});})(c__36093__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto____0 = (function (){
var statearr_39342 = [null,null,null,null,null,null,null,null];
(statearr_39342[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto__);

(statearr_39342[(1)] = (1));

return statearr_39342;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto____1 = (function (state_39339){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_39339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e39343){if((e39343 instanceof Object)){
var ex__36002__auto__ = e39343;
var statearr_39344_39346 = state_39339;
(statearr_39344_39346[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39347 = state_39339;
state_39339 = G__39347;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto__ = function(state_39339){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto____1.call(this,state_39339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__,figwheel_version,temp__5720__auto__))
})();
var state__36095__auto__ = (function (){var statearr_39345 = f__36094__auto__.call(null);
(statearr_39345[(6)] = c__36093__auto__);

return statearr_39345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__,figwheel_version,temp__5720__auto__))
);

return c__36093__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39348){
var map__39349 = p__39348;
var map__39349__$1 = (((((!((map__39349 == null))))?(((((map__39349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39349):map__39349);
var file = cljs.core.get.call(null,map__39349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39349__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39349__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39351 = "";
var G__39351__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39351),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39351);
var G__39351__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39351__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39351__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39351__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39351__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39352){
var map__39353 = p__39352;
var map__39353__$1 = (((((!((map__39353 == null))))?(((((map__39353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39353):map__39353);
var ed = map__39353__$1;
var exception_data = cljs.core.get.call(null,map__39353__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39353__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_39356 = (function (){var G__39355 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39355)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__39355;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_39356);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39357){
var map__39358 = p__39357;
var map__39358__$1 = (((((!((map__39358 == null))))?(((((map__39358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39358):map__39358);
var w = map__39358__$1;
var message = cljs.core.get.call(null,map__39358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39360 = cljs.core.seq.call(null,plugins);
var chunk__39361 = null;
var count__39362 = (0);
var i__39363 = (0);
while(true){
if((i__39363 < count__39362)){
var vec__39364 = cljs.core._nth.call(null,chunk__39361,i__39363);
var k = cljs.core.nth.call(null,vec__39364,(0),null);
var plugin = cljs.core.nth.call(null,vec__39364,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39370 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39360,chunk__39361,count__39362,i__39363,pl_39370,vec__39364,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39370.call(null,msg_hist);
});})(seq__39360,chunk__39361,count__39362,i__39363,pl_39370,vec__39364,k,plugin))
);
} else {
}


var G__39371 = seq__39360;
var G__39372 = chunk__39361;
var G__39373 = count__39362;
var G__39374 = (i__39363 + (1));
seq__39360 = G__39371;
chunk__39361 = G__39372;
count__39362 = G__39373;
i__39363 = G__39374;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39360);
if(temp__5720__auto__){
var seq__39360__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39360__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39360__$1);
var G__39375 = cljs.core.chunk_rest.call(null,seq__39360__$1);
var G__39376 = c__4461__auto__;
var G__39377 = cljs.core.count.call(null,c__4461__auto__);
var G__39378 = (0);
seq__39360 = G__39375;
chunk__39361 = G__39376;
count__39362 = G__39377;
i__39363 = G__39378;
continue;
} else {
var vec__39367 = cljs.core.first.call(null,seq__39360__$1);
var k = cljs.core.nth.call(null,vec__39367,(0),null);
var plugin = cljs.core.nth.call(null,vec__39367,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39379 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39360,chunk__39361,count__39362,i__39363,pl_39379,vec__39367,k,plugin,seq__39360__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39379.call(null,msg_hist);
});})(seq__39360,chunk__39361,count__39362,i__39363,pl_39379,vec__39367,k,plugin,seq__39360__$1,temp__5720__auto__))
);
} else {
}


var G__39380 = cljs.core.next.call(null,seq__39360__$1);
var G__39381 = null;
var G__39382 = (0);
var G__39383 = (0);
seq__39360 = G__39380;
chunk__39361 = G__39381;
count__39362 = G__39382;
i__39363 = G__39383;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39385 = arguments.length;
switch (G__39385) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39386_39391 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39387_39392 = null;
var count__39388_39393 = (0);
var i__39389_39394 = (0);
while(true){
if((i__39389_39394 < count__39388_39393)){
var msg_39395 = cljs.core._nth.call(null,chunk__39387_39392,i__39389_39394);
figwheel.client.socket.handle_incoming_message.call(null,msg_39395);


var G__39396 = seq__39386_39391;
var G__39397 = chunk__39387_39392;
var G__39398 = count__39388_39393;
var G__39399 = (i__39389_39394 + (1));
seq__39386_39391 = G__39396;
chunk__39387_39392 = G__39397;
count__39388_39393 = G__39398;
i__39389_39394 = G__39399;
continue;
} else {
var temp__5720__auto___39400 = cljs.core.seq.call(null,seq__39386_39391);
if(temp__5720__auto___39400){
var seq__39386_39401__$1 = temp__5720__auto___39400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39386_39401__$1)){
var c__4461__auto___39402 = cljs.core.chunk_first.call(null,seq__39386_39401__$1);
var G__39403 = cljs.core.chunk_rest.call(null,seq__39386_39401__$1);
var G__39404 = c__4461__auto___39402;
var G__39405 = cljs.core.count.call(null,c__4461__auto___39402);
var G__39406 = (0);
seq__39386_39391 = G__39403;
chunk__39387_39392 = G__39404;
count__39388_39393 = G__39405;
i__39389_39394 = G__39406;
continue;
} else {
var msg_39407 = cljs.core.first.call(null,seq__39386_39401__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39407);


var G__39408 = cljs.core.next.call(null,seq__39386_39401__$1);
var G__39409 = null;
var G__39410 = (0);
var G__39411 = (0);
seq__39386_39391 = G__39408;
chunk__39387_39392 = G__39409;
count__39388_39393 = G__39410;
i__39389_39394 = G__39411;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___39416 = arguments.length;
var i__4642__auto___39417 = (0);
while(true){
if((i__4642__auto___39417 < len__4641__auto___39416)){
args__4647__auto__.push((arguments[i__4642__auto___39417]));

var G__39418 = (i__4642__auto___39417 + (1));
i__4642__auto___39417 = G__39418;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39413){
var map__39414 = p__39413;
var map__39414__$1 = (((((!((map__39414 == null))))?(((((map__39414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39414):map__39414);
var opts = map__39414__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39412){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39412));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39419){if((e39419 instanceof Error)){
var e = e39419;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39419;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39420){
var map__39421 = p__39420;
var map__39421__$1 = (((((!((map__39421 == null))))?(((((map__39421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39421):map__39421);
var msg_name = cljs.core.get.call(null,map__39421__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1557851000970