// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('re_console.app');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init-console","init-console",1925118851),(function re_console$handlers$add_console(db,p__26159){
var vec__26160 = p__26159;
var _ = cljs.core.nth.call(null,vec__26160,(0),null);
var console_key = cljs.core.nth.call(null,vec__26160,(1),null);
var eval_opts = cljs.core.nth.call(null,vec__26160,(2),null);
return re_console.app.init_console.call(null,db,console_key,eval_opts);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-instance","add-console-instance",9095274),(function re_console$handlers$add_console(db,p__26163){
var vec__26164 = p__26163;
var _ = cljs.core.nth.call(null,vec__26164,(0),null);
var console_key = cljs.core.nth.call(null,vec__26164,(1),null);
var instance = cljs.core.nth.call(null,vec__26164,(2),null);
return re_console.app.add_console_instance.call(null,db,console_key,instance);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),(function re_console$handlers$focus_console_editor(db,p__26167){
var vec__26168 = p__26167;
var _ = cljs.core.nth.call(null,vec__26168,(0),null);
var console_key = cljs.core.nth.call(null,vec__26168,(1),null);
var temp__5720__auto___26171 = re_console.app.console.call(null,db,console_key);
if(cljs.core.truth_(temp__5720__auto___26171)){
var instance_26172 = temp__5720__auto___26171;
instance_26172.focus();
} else {
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-theme","set-console-theme",-659914150),(function re_console$handlers$set_console_theme(db,p__26173){
var vec__26174 = p__26173;
var _ = cljs.core.nth.call(null,vec__26174,(0),null);
var console_key = cljs.core.nth.call(null,vec__26174,(1),null);
var theme = cljs.core.nth.call(null,vec__26174,(2),null);
var temp__5720__auto___26177 = re_console.app.console.call(null,db,console_key);
if(cljs.core.truth_(temp__5720__auto___26177)){
var instance_26178 = temp__5720__auto___26177;
instance_26178.setOption("theme",theme);
} else {
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-console-items","clear-console-items",-1821518386),(function re_console$handlers$clear_console_items(db,p__26179){
var vec__26180 = p__26179;
var _ = cljs.core.nth.call(null,vec__26180,(0),null);
var console_key = cljs.core.nth.call(null,vec__26180,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.clear_console_items.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"reset-console-items","reset-console-items",-1878088383),(function re_console$handlers$reset_console_items(db,p__26183){
var vec__26184 = p__26183;
var _ = cljs.core.nth.call(null,vec__26184,(0),null);
var console_key = cljs.core.nth.call(null,vec__26184,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.reset_console_items.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-item","add-console-item",-1440738899),(function re_console$handlers$add_console_item(db,p__26187){
var vec__26188 = p__26187;
var _ = cljs.core.nth.call(null,vec__26188,(0),null);
var console_key = cljs.core.nth.call(null,vec__26188,(1),null);
var item = cljs.core.nth.call(null,vec__26188,(2),null);
return re_console.app.add_console_item.call(null,db,console_key,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-items","add-console-items",-1014410013),(function re_console$handlers$add_console_items(db,p__26191){
var vec__26192 = p__26191;
var _ = cljs.core.nth.call(null,vec__26192,(0),null);
var console_key = cljs.core.nth.call(null,vec__26192,(1),null);
var items = cljs.core.nth.call(null,vec__26192,(2),null);
return re_console.app.add_console_item.call(null,db,console_key,items);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-input","add-console-input",-277003986),(function re_console$handlers$add_console_input(db,p__26195){
var vec__26196 = p__26195;
var _ = cljs.core.nth.call(null,vec__26196,(0),null);
var console_key = cljs.core.nth.call(null,vec__26196,(1),null);
var input = cljs.core.nth.call(null,vec__26196,(2),null);
var ns = cljs.core.nth.call(null,vec__26196,(3),null);
return re_console.app.add_console_input.call(null,db,console_key,input,ns);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-result","add-console-result",1768771531),(function re_console$handlers$add_console_result(db,p__26199){
var vec__26200 = p__26199;
var _ = cljs.core.nth.call(null,vec__26200,(0),null);
var console_key = cljs.core.nth.call(null,vec__26200,(1),null);
var error_QMARK_ = cljs.core.nth.call(null,vec__26200,(2),null);
var value = cljs.core.nth.call(null,vec__26200,(3),null);
return re_console.app.add_console_result.call(null,db,console_key,error_QMARK_,value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-log","add-console-log",-371208070),(function re_console$handlers$add_console_log(db,p__26203){
var vec__26204 = p__26203;
var _ = cljs.core.nth.call(null,vec__26204,(0),null);
var console_key = cljs.core.nth.call(null,vec__26204,(1),null);
var item = cljs.core.nth.call(null,vec__26204,(2),null);
return re_console.app.add_console_log.call(null,db,console_key,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-set-text","console-set-text",860354388),(function re_console$handlers$console_set_text(db,p__26207){
var vec__26208 = p__26207;
var _ = cljs.core.nth.call(null,vec__26208,(0),null);
var console_key = cljs.core.nth.call(null,vec__26208,(1),null);
var text = cljs.core.nth.call(null,vec__26208,(2),null);
return re_console.app.set_console_text.call(null,db,console_key,text);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-go-up","console-go-up",50535611),(function re_console$handlers$console_go_up(db,p__26211){
var vec__26212 = p__26211;
var _ = cljs.core.nth.call(null,vec__26212,(0),null);
var console_key = cljs.core.nth.call(null,vec__26212,(1),null);
return re_console.app.console_go_up.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-go-down","console-go-down",-1045916631),(function re_console$handlers$console_go_down(db,p__26215){
var vec__26216 = p__26215;
var _ = cljs.core.nth.call(null,vec__26216,(0),null);
var console_key = cljs.core.nth.call(null,vec__26216,(1),null);
return re_console.app.console_go_down.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-queued-forms","set-console-queued-forms",-419528812),(function re_console$handlers$set_queued_forms(db,p__26219){
var vec__26220 = p__26219;
var _ = cljs.core.nth.call(null,vec__26220,(0),null);
var console_key = cljs.core.nth.call(null,vec__26220,(1),null);
var forms = cljs.core.nth.call(null,vec__26220,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.set_console_queued_forms.call(null,db,console_key,forms);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-console-queued-forms","clear-console-queued-forms",1162162382),(function re_console$handlers$clear_console_queued_forms(db,p__26223){
var vec__26224 = p__26223;
var _ = cljs.core.nth.call(null,vec__26224,(0),null);
var console_key = cljs.core.nth.call(null,vec__26224,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.clear_console_queued_forms.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"on-eval-complete","on-eval-complete",436163213),(function re_console$handlers$on_eval_complete(db,p__26227){
var vec__26228 = p__26227;
var _ = cljs.core.nth.call(null,vec__26228,(0),null);
var console_key = cljs.core.nth.call(null,vec__26228,(1),null);
var result_map = cljs.core.nth.call(null,vec__26228,(2),null);
return re_console.app.on_eval_complete.call(null,db,console_key,result_map);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-eval-opts","set-console-eval-opts",1878351193),(function re_console$handlers$set_console_eval_opts(db,p__26231){
var vec__26232 = p__26231;
var _ = cljs.core.nth.call(null,vec__26232,(0),null);
var console_key = cljs.core.nth.call(null,vec__26232,(1),null);
var eval_opts = cljs.core.nth.call(null,vec__26232,(2),null);
return re_console.app.set_console_eval_opts.call(null,db,console_key,eval_opts);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-mode","set-console-mode",158101301),(function re_console$handlers$set_console_mode(db,p__26235){
var vec__26236 = p__26235;
var _ = cljs.core.nth.call(null,vec__26236,(0),null);
var console_key = cljs.core.nth.call(null,vec__26236,(1),null);
var mode = cljs.core.nth.call(null,vec__26236,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.set_console_mode.call(null,db,console_key,mode);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-frame-updated","set-console-frame-updated",-1984928832),(function re_console$handlers$set_console_frame_updated(db,p__26239){
var vec__26240 = p__26239;
var _ = cljs.core.nth.call(null,vec__26240,(0),null);
var console_key = cljs.core.nth.call(null,vec__26240,(1),null);
var value = cljs.core.nth.call(null,vec__26240,(2),null);
return re_console.app.set_console_frame_updated.call(null,db,console_key,value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-on-before-change","set-console-on-before-change",1713310062),(function re_console$handlers$set_console_on_before_change(db,p__26243){
var vec__26244 = p__26243;
var _ = cljs.core.nth.call(null,vec__26244,(0),null);
var console_key = cljs.core.nth.call(null,vec__26244,(1),null);
var on_before_change = cljs.core.nth.call(null,vec__26244,(2),null);
return re_console.app.set_console_on_before_change.call(null,db,console_key,on_before_change);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-on-after-change","set-console-on-after-change",713584618),(function re_console$handlers$set_console_on_after_change(db,p__26247){
var vec__26248 = p__26247;
var _ = cljs.core.nth.call(null,vec__26248,(0),null);
var console_key = cljs.core.nth.call(null,vec__26248,(1),null);
var on_after_change = cljs.core.nth.call(null,vec__26248,(2),null);
return re_console.app.set_console_on_after_change.call(null,db,console_key,on_after_change);
}));

//# sourceMappingURL=handlers.js.map?rel=1557850988626
