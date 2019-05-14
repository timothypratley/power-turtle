// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.replumb_proxy');
goog.require('cljs.core');
goog.require('power_turtle.model');
goog.require('clojure.string');
goog.require('re_console.io');
goog.require('replumb.core');
goog.require('replumb.repl');
power_turtle.replumb_proxy.replumb_options = (function power_turtle$replumb_proxy$replumb_options(verbose_QMARK_,src_paths){
return cljs.core.merge.call(null,replumb.core.options.call(null,new cljs.core.Keyword(null,"browser","browser",828191719),src_paths,re_console.io.fetch_file_BANG_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_], null));
});
power_turtle.replumb_proxy.read_eval_call = (function power_turtle$replumb_proxy$read_eval_call(opts,cb,source){
var ns = replumb.repl.current_ns.call(null);
return replumb.core.read_eval_call.call(null,opts,((function (ns){
return (function (p1__31323_SHARP_){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success?","success?",-122854052),replumb.core.success_QMARK_.call(null,p1__31323_SHARP_),new cljs.core.Keyword(null,"result","result",1415092211),p1__31323_SHARP_,new cljs.core.Keyword(null,"prev-ns","prev-ns",490483434),ns,new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});})(ns))
,source);
});
power_turtle.replumb_proxy.multiline_QMARK_ = (function power_turtle$replumb_proxy$multiline_QMARK_(input){
try{replumb.repl.read_string.call(null,cljs.core.PersistentArrayMap.EMPTY,input);

return false;
}catch (e31324){var e = e31324;
return clojure.string.starts_with_QMARK_.call(null,e.message,"Unexpected EOF");
}});
power_turtle.replumb_proxy.eval_opts = (function power_turtle$replumb_proxy$eval_opts(opts){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-prompt","get-prompt",747786315),cljs.core.constantly.call(null,""),new cljs.core.Keyword(null,"should-eval","should-eval",-681728538),cljs.core.complement.call(null,power_turtle.replumb_proxy.multiline_QMARK_),new cljs.core.Keyword(null,"to-str-fn","to-str-fn",-1134898233),cljs.core.partial.call(null,replumb.core.result__GT_string,false,true),new cljs.core.Keyword(null,"evaluate","evaluate",1525218437),(function (a,b){
cljs.core.swap_BANG_.call(null,power_turtle.model.flip,cljs.core._);

return power_turtle.replumb_proxy.read_eval_call.call(null,opts,a,b);
})], null);
});

//# sourceMappingURL=replumb_proxy.js.map?rel=1557850994861
