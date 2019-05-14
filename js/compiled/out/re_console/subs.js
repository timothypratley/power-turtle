// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('re_console.app');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"console-created?","console-created?",468788326),(function (db,p__29365){
var vec__29366 = p__29365;
var _ = cljs.core.nth.call(null,vec__29366,(0),null);
var console_key = cljs.core.nth.call(null,vec__29366,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29366,_,console_key){
return (function (){
return re_console.app.console_created_QMARK_.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29366,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-items","get-console-items",-1702647473),(function (db,p__29369){
var vec__29370 = p__29369;
var _ = cljs.core.nth.call(null,vec__29370,(0),null);
var console_key = cljs.core.nth.call(null,vec__29370,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29370,_,console_key){
return (function (){
return re_console.app.console_items.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29370,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),(function (db,p__29373){
var vec__29374 = p__29373;
var _ = cljs.core.nth.call(null,vec__29374,(0),null);
var console_key = cljs.core.nth.call(null,vec__29374,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29374,_,console_key){
return (function (){
return re_console.app.console_mode.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29374,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-frame-updated","get-console-frame-updated",550276687),(function (db,p__29377){
var vec__29378 = p__29377;
var _ = cljs.core.nth.call(null,vec__29378,(0),null);
var console_key = cljs.core.nth.call(null,vec__29378,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29378,_,console_key){
return (function (){
return re_console.app.console_frame_updated.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29378,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-current-text","get-console-current-text",445390068),(function (db,p__29381){
var vec__29382 = p__29381;
var _ = cljs.core.nth.call(null,vec__29382,(0),null);
var console_key = cljs.core.nth.call(null,vec__29382,(1),null);
var idx = reagent.ratom.make_reaction.call(null,((function (vec__29382,_,console_key){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178)], null));
});})(vec__29382,_,console_key))
);
var history = reagent.ratom.make_reaction.call(null,((function (idx,vec__29382,_,console_key){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"history","history",-247395220)], null));
});})(idx,vec__29382,_,console_key))
);
return reagent.ratom.make_reaction.call(null,((function (idx,history,vec__29382,_,console_key){
return (function (){
var items = cljs.core.deref.call(null,history);
var pos = ((cljs.core.count.call(null,items) - cljs.core.deref.call(null,idx)) - (1));
return cljs.core.get.call(null,items,pos);
});})(idx,history,vec__29382,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console","get-console",349506720),(function (db,p__29385){
var vec__29386 = p__29385;
var _ = cljs.core.nth.call(null,vec__29386,(0),null);
var console_key = cljs.core.nth.call(null,vec__29386,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29386,_,console_key){
return (function (){
return re_console.app.console.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29386,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"queued-forms-count","queued-forms-count",1735821775),(function (db,p__29389){
var vec__29390 = p__29389;
var _ = cljs.core.nth.call(null,vec__29390,(0),null);
var console_key = cljs.core.nth.call(null,vec__29390,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29390,_,console_key){
return (function (){
return cljs.core.count.call(null,re_console.app.queued_forms.call(null,cljs.core.deref.call(null,db),console_key));
});})(vec__29390,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"queued-forms-empty?","queued-forms-empty?",-375471063),(function (db,p__29393){
var vec__29394 = p__29393;
var _ = cljs.core.nth.call(null,vec__29394,(0),null);
var console_key = cljs.core.nth.call(null,vec__29394,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29394,_,console_key){
return (function (){
return (!(cljs.core.empty_QMARK_.call(null,re_console.app.queued_forms.call(null,cljs.core.deref.call(null,db),console_key))));
});})(vec__29394,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-eval-opts","get-console-eval-opts",2087577375),(function (db,p__29397){
var vec__29398 = p__29397;
var _ = cljs.core.nth.call(null,vec__29398,(0),null);
var console_key = cljs.core.nth.call(null,vec__29398,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29398,_,console_key){
return (function (){
return re_console.app.console_eval_opts.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29398,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-on-before-change","get-console-on-before-change",577618067),(function (db,p__29401){
var vec__29402 = p__29401;
var _ = cljs.core.nth.call(null,vec__29402,(0),null);
var console_key = cljs.core.nth.call(null,vec__29402,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29402,_,console_key){
return (function (){
return re_console.app.console_on_before_change.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29402,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-on-after-change","get-console-on-after-change",-1635241260),(function (db,p__29405){
var vec__29406 = p__29405;
var _ = cljs.core.nth.call(null,vec__29406,(0),null);
var console_key = cljs.core.nth.call(null,vec__29406,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29406,_,console_key){
return (function (){
return re_console.app.console_on_after_change.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29406,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-full-text","get-console-full-text",-1768204293),(function (db,p__29409){
var vec__29410 = p__29409;
var _ = cljs.core.nth.call(null,vec__29410,(0),null);
var console_key = cljs.core.nth.call(null,vec__29410,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__29410,_,console_key){
return (function (){
return re_console.app.console_full_text.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__29410,_,console_key))
);
}));

//# sourceMappingURL=subs.js.map?rel=1557850992834
