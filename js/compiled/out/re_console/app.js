// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.app');
goog.require('cljs.core');
re_console.app.initial_console_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"on-after-change","on-after-change",-1213707473),new cljs.core.Keyword(null,"queued-forms","queued-forms",2006564272),new cljs.core.Keyword(null,"on-before-change","on-before-change",572768433),new cljs.core.Keyword(null,"eval-opts","eval-opts",1965011191),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"cm-instance","cm-instance",1889208187)],[false,(0),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,null]);
re_console.app.console = (function re_console$app$console(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"cm-instance","cm-instance",1889208187)], null));
});
/**
 * Was the console created? Returns a truey or falsey value.
 */
re_console.app.console_created_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,re_console.app.console);
re_console.app.console_items = (function re_console$app$console_items(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"items","items",1031954938)], null));
});
re_console.app.console_mode = (function re_console$app$console_mode(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"mode","mode",654403691)], null));
});
re_console.app.console_frame_updated = (function re_console$app$console_frame_updated(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});
re_console.app.console_history = (function re_console$app$console_history(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"history","history",-247395220)], null));
});
re_console.app.console_history_pos = (function re_console$app$console_history_pos(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178)], null));
});
re_console.app.queued_forms = (function re_console$app$queued_forms(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"queued-forms","queued-forms",2006564272)], null));
});
re_console.app.console_eval_opts = (function re_console$app$console_eval_opts(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"eval-opts","eval-opts",1965011191)], null));
});
re_console.app.console_full_text = (function re_console$app$console_full_text(db,k){
var items = re_console.app.console_items.call(null,db,k);
var to_str_fn = new cljs.core.Keyword(null,"to-str-fn","to-str-fn",-1134898233).cljs$core$IFn$_invoke$arity$1(re_console.app.console_eval_opts.call(null,db,k));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.map.call(null,((function (items,to_str_fn){
return (function (item){
var temp__5718__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5718__auto__)){
var text = temp__5718__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(item)),"=> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('');
} else {
return to_str_fn.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item));
}
});})(items,to_str_fn))
,items)));
});
re_console.app.console_on_before_change = (function re_console$app$console_on_before_change(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"on-before-change","on-before-change",572768433)], null));
});
re_console.app.console_on_after_change = (function re_console$app$console_on_after_change(db,k){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"on-after-change","on-after-change",-1213707473)], null));
});
re_console.app.init_console = (function re_console$app$init_console(db,k,initial_user_state){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k)], null),cljs.core.merge.call(null,re_console.app.initial_console_state,initial_user_state));
});
re_console.app.add_console_instance = (function re_console$app$add_console_instance(db,k,instance){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"cm-instance","cm-instance",1889208187)], null),instance);
});
re_console.app.set_console_eval_opts = (function re_console$app$set_console_eval_opts(db,k,eval_opts){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"eval-opts","eval-opts",1965011191)], null),eval_opts);
});
re_console.app.set_console_mode = (function re_console$app$set_console_mode(db,console_key,mode){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"mode","mode",654403691)], null),mode);
});
re_console.app.set_console_frame_updated = (function re_console$app$set_console_frame_updated(db,console_key,value){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});
re_console.app.update_console_history = (function re_console$app$update_console_history(db,k,idx,pos,text){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (current_history){
if(cljs.core._EQ_.call(null,pos,(0))){
return cljs.core.assoc.call(null,current_history,idx,text);
} else {
return cljs.core.filterv.call(null,cljs.core.seq,cljs.core.conj.call(null,current_history,text));
}
}));
});
re_console.app.set_console_history_position = (function re_console$app$set_console_history_position(db,k,new_pos){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178)], null),new_pos);
});
re_console.app.set_console_text = (function re_console$app$set_console_text(db,k,text){
var history = re_console.app.console_history.call(null,db,k);
var pos = re_console.app.console_history_pos.call(null,db,k);
var idx = ((cljs.core.count.call(null,history) - pos) - (1));
return re_console.app.update_console_history.call(null,re_console.app.set_console_history_position.call(null,db,k,(0)),k,idx,pos,text);
});
re_console.app.clear_console_items = (function re_console$app$clear_console_items(db,k){
return re_console.app.set_console_text.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.PersistentVector.EMPTY),k,"");
});
re_console.app.reset_console_items = (function re_console$app$reset_console_items(db,k){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k)], null),(function (current_state){
return cljs.core.merge.call(null,current_state,cljs.core.select_keys.call(null,re_console.app.initial_console_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178),new cljs.core.Keyword(null,"history","history",-247395220)], null)));
}));
});
re_console.app.add_console_item = (function re_console$app$add_console_item(db,k,item){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.conj,item);
});
re_console.app.add_console_items = (function re_console$app$add_console_items(db,k,items){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.concat,items);
});
re_console.app.add_console_history_item = (function re_console$app$add_console_history_item(db,k,item){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.conj,item);
});
re_console.app.add_console_input_item = (function re_console$app$add_console_input_item(db,k,inum,input,ns){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"text","text",-1790561697),input,new cljs.core.Keyword(null,"num","num",1985240673),inum,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
re_console.app.add_console_input = (function re_console$app$add_console_input(db,k,input,ns){
var inum = cljs.core.count.call(null,re_console.app.console_history.call(null,db,k));
return re_console.app.add_console_input_item.call(null,db,k,inum,input,ns);
});
re_console.app.add_console_result = (function re_console$app$add_console_result(db,k,error_QMARK_,value){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(error_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
re_console.app.add_console_log = (function re_console$app$add_console_log(db,k,item){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"value","value",305978217),item], null));
});
re_console.app.console_go_up = (function re_console$app$console_go_up(db,k){
var pos = re_console.app.console_history_pos.call(null,db,k);
var len = cljs.core.count.call(null,re_console.app.console_history.call(null,db,k));
var new_pos = (((pos >= (len - (1))))?pos:(pos + (1)));
return re_console.app.set_console_history_position.call(null,db,k,new_pos);
});
re_console.app.console_go_down = (function re_console$app$console_go_down(db,k){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178)], null),(function (pos){
if((pos <= (0))){
return (0);
} else {
return (pos - (1));
}
}));
});
re_console.app.clear_console_queued_forms = (function re_console$app$clear_console_queued_forms(db,k){
return re_console.app.set_console_text.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"queued-forms","queued-forms",2006564272)], null),cljs.core.PersistentVector.EMPTY),k,"");
});
re_console.app.set_console_queued_forms = (function re_console$app$set_console_queued_forms(db,k,forms){
return cljs.core.assoc_in.call(null,re_console.app.set_console_text.call(null,db,k,cljs.core.first.call(null,forms)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"queued-forms","queued-forms",2006564272)], null),cljs.core.rest.call(null,forms));
});
re_console.app.drop_first_queued_form = (function re_console$app$drop_first_queued_form(db,k){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"queued-forms","queued-forms",2006564272)], null),cljs.core.partial.call(null,cljs.core.drop,(1)));
});
re_console.app.set_next_queued_form_if_any = (function re_console$app$set_next_queued_form_if_any(db,k){
var temp__5718__auto__ = cljs.core.first.call(null,re_console.app.queued_forms.call(null,db,k));
if(cljs.core.truth_(temp__5718__auto__)){
var form = temp__5718__auto__;
return re_console.app.drop_first_queued_form.call(null,re_console.app.set_console_text.call(null,db,k,form),k);
} else {
return db;
}
});
re_console.app.on_eval_complete = (function re_console$app$on_eval_complete(db,k,p__24731){
var map__24732 = p__24731;
var map__24732__$1 = (((((!((map__24732 == null))))?(((((map__24732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24732):map__24732);
var prev_ns = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"prev-ns","prev-ns",490483434));
var source = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var success_QMARK_ = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var db__$1 = ((cljs.core.seq.call(null,source))?re_console.app.add_console_history_item.call(null,re_console.app.set_console_history_position.call(null,re_console.app.set_console_text.call(null,db,k,source),k,(0)),k,""):db);
return re_console.app.set_next_queued_form_if_any.call(null,re_console.app.add_console_result.call(null,re_console.app.add_console_input.call(null,db__$1,k,source,prev_ns),k,cljs.core.not.call(null,success_QMARK_),result),k);
});
re_console.app.set_console_on_before_change = (function re_console$app$set_console_on_before_change(db,k,on_before_change){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"on-before-change","on-before-change",572768433)], null),on_before_change);
});
re_console.app.set_console_on_after_change = (function re_console$app$set_console_on_after_change(db,k,on_after_change){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"on-after-change","on-after-change",-1213707473)], null),on_after_change);
});

//# sourceMappingURL=app.js.map?rel=1557850987700
