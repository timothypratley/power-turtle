// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.repl');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('cljs.user');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.runmode.runmode');
goog.require('cljsjs.codemirror.addon.runmode.colorize');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cognitect.transit');
goog.require('replumb.repl');
goog.require('re_console.core');
goog.require('re_console.io');
goog.require('re_frame.core');
goog.require('power_turtle.replumb_proxy');
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.view !== 'undefined') && (typeof power_turtle.view.repl !== 'undefined') && (typeof power_turtle.view.repl.console_key !== 'undefined')){
} else {
power_turtle.view.repl.console_key = new cljs.core.Keyword(null,"cljs-console","cljs-console",719194595);
}
power_turtle.view.repl.src_paths = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src","js/compiled/out"], null);
power_turtle.view.repl.replumb_opts = power_turtle.replumb_proxy.replumb_options.call(null,false,power_turtle.view.repl.src_paths);
power_turtle.view.repl.load_cljs_core_cache_BANG_ = (function power_turtle$view$repl$load_cljs_core_cache_BANG_(){
return re_console.io.fetch_file_BANG_.call(null,"aot/cache.json",(function power_turtle$view$repl$load_cljs_core_cache_BANG__$_fetched(txt){
var cache = cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),txt);
return cljs.core.swap_BANG_.call(null,replumb.repl.st,cljs.core.update,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.merge,cache);
}));
});
power_turtle.view.repl.load_cljs_core_cache_BANG_.call(null);
power_turtle.view.repl.repl = (function power_turtle$view$repl$repl(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.repl","div.repl",1134804372),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_console.core.console,power_turtle.view.repl.console_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-opts","eval-opts",1965011191),power_turtle.replumb_proxy.eval_opts.call(null,power_turtle.view.repl.replumb_opts),new cljs.core.Keyword(null,"mode-line?","mode-line?",-1824985672),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.re-console-mode-line","div.re-console-mode-line",-1350720707)," "], null)], null);
});
power_turtle.view.repl.exec = (function power_turtle$view$repl$exec(s){
return new cljs.core.Keyword(null,"evaluate","evaluate",1525218437).cljs$core$IFn$_invoke$arity$1(power_turtle.replumb_proxy.eval_opts.call(null,power_turtle.view.repl.replumb_opts)).call(null,(function (p1__31333_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-eval-complete","on-eval-complete",436163213),power_turtle.view.repl.console_key,p1__31333_SHARP_], null));
}),s);
});
goog.exportSymbol('power_turtle.view.repl.exec', power_turtle.view.repl.exec);

//# sourceMappingURL=repl.js.map?rel=1557850994950
