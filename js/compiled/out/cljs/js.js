// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28792 = arguments.length;
var i__4642__auto___28793 = (0);
while(true){
if((i__4642__auto___28793 < len__4641__auto___28792)){
args__4647__auto__.push((arguments[i__4642__auto___28793]));

var G__28794 = (i__4642__auto___28793 + (1));
i__4642__auto___28793 = G__28794;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__28790 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__28791 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28791;

try{return cljs.core.apply.call(null,cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28790;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq28789){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28789));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.call(null,clojure.string.replace.call(null,file,"/","."),(0),(cljs.core.count.call(null,file) - (5)));
return cljs.core.symbol.call(null,cljs.core.demunge.call(null,lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_.call(null,ns_name,"$macros")){
return cljs.core.subs.call(null,ns_name,(0),(cljs.core.count.call(null,ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.call(null,cljs.js.drop_macros_suffix.call(null,cljs.core.namespace.call(null,sym)),cljs.core.name.call(null,sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix.call(null,cljs.analyzer.resolve_symbol.call(null,sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__28795 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__28796 = cljs.core.symbol.call(null,cljs.js.drop_macros_suffix.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__28796;

try{return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__28795;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_.call(null,x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__28797){
var map__28798 = p__28797;
var map__28798__$1 = (((((!((map__28798 == null))))?(((((map__28798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28798):map__28798);
var resource = map__28798__$1;
var source = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__28801 = arguments.length;
switch (G__28801) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__28802 = cljs.env.default_compiler_env.call(null);
cljs.core.swap_BANG_.call(null,G__28802,((function (G__28802){
return (function (state){
});})(G__28802))
);

return G__28802;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__28803 = cljs.js.empty_state.call(null);
cljs.core.swap_BANG_.call(null,G__28803,init);

return G__28803;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.call(null,JSON.parse(sm_json));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__28805){
var map__28806 = p__28805;
var map__28806__$1 = (((((!((map__28806 == null))))?(((((map__28806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28806):map__28806);
var opts = map__28806__$1;
var output_dir = cljs.core.get.call(null,map__28806__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.call(null,map__28806__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.call(null,map__28806__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__28808 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace.call(null,G__28808,".","/");
} else {
return G__28808;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4047__auto__ = output_dir;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__28809 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__28809__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28809),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__28809);
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__28809__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__28809__$1;
}
})();
var file = (function (){var G__28810 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__28810__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28810),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__28810);
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__28810__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__28810__$1;
}
})();
var json = cljs.source_map.encode.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,json);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.call(null,mn)], null),cljs.source_map.invert_reverse_map.call(null,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeString(clojure.string.replace.call(null,encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__28806,map__28806__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__28811){
var vec__28812 = p__28811;
var _ = cljs.core.nth.call(null,vec__28812,(0),null);
var match = cljs.core.nth.call(null,vec__28812,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__28806,map__28806__$1,opts,output_dir,asset_path,source_map_timestamp))
)))].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__28815){
var vec__28816 = p__28815;
var k = cljs.core.nth.call(null,vec__28816,(0),null);
var v = cljs.core.nth.call(null,vec__28816,(1),null);
return cljs.core.symbol_identical_QMARK_.call(null,k,v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null)))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq.call(null,coll)){
return proc.call(null,cljs.core.first.call(null,coll),(function (res){
if(cljs.core.truth_(break_QMARK_.call(null,res))){
return cb.call(null,res);
} else {
return cljs.js.run_async_BANG_.call(null,proc,cljs.core.rest.call(null,coll),break_QMARK_,cb);
}
}));
} else {
return cb.call(null,null);
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_.call(null,(function (name,cb__$1){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb__$1);
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.concat.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Pre-file side-effects",file);
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"defs","defs",1398449717)], null));
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null).call(null,name));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,st,cljs.core.update,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.dissoc,name);
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Post-file side-effects",file);
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__28820 = arguments.length;
switch (G__28820) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.call(null,name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.call(null,null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.call(null),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars);
var aname = (function (){var G__28821 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__28821);
} else {
return G__28821;
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null))," namespace"].join(''));
} else {
}

if((!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_),aname)))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name)], null),((function (env,bound_vars__$1,aname){
return (function (resource){
if(((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__28823 = resource;
var map__28823__$1 = (((((!((map__28823 == null))))?(((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var lang = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__28825 = cljs.core.keyword_identical_QMARK_;
var expr__28826 = lang;
if(cljs.core.truth_(pred__28825.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__28826))){
cljs.js.pre_file_side_effects.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__28825,expr__28826,map__28823,map__28823__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects.call(null,file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});})(pred__28825,expr__28826,map__28823,map__28823__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_(pred__28825.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__28826))){
return cljs.js.process_macros_deps.call(null,bound_vars__$1,cache,opts,((function (pred__28825,expr__28826,map__28823,map__28823__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cljs.js.process_libs_deps.call(null,bound_vars__$1,cache,opts,((function (pred__28825,expr__28826,map__28823,map__28823__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var res__$2 = (function (){try{new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs.call(null,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e28828){var cause = e28828;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
}
});})(pred__28825,expr__28826,map__28823,map__28823__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
}
});})(pred__28825,expr__28826,map__28823,map__28823__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join(''))));
}
}
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,name)], null)))));
}
});})(env,bound_vars__$1,aname))
);
}catch (e28822){var cause = e28822;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.call(null,compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4036__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals.call(null,replaced));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.call(null,compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,((function (patch){
return (function (acc,p__28830){
var vec__28831 = p__28830;
var renamed = cljs.core.nth.call(null,vec__28831,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__28831,(1),null);
var entry = vec__28831;
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace.call(null,qualified_sym))){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927),true);

patch.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),true);

patch.call(null,new cljs.core.Keyword(null,"uses","uses",232664692),false);

patch.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),false);

patch_renames.call(null,new cljs.core.Keyword(null,"renames","renames",343278368));

return patch_renames.call(null,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__4036__auto__ = new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__4036__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4036__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__28836 = arguments.length;
switch (G__28836) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.call(null,bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading dependencies for",lib);
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__28837 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__28838 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_.call(null,deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__28838;

try{var bound_vars__$1 = cljs.core.assoc.call(null,bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_.call(null,((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28837,_STAR_cljs_dep_set_STAR__temp_val__28838){
return (function (p1__28834_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__28834_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28837,_STAR_cljs_dep_set_STAR__temp_val__28838))
,deps)))){
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''))));
} else {
if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.call(null,bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28837,_STAR_cljs_dep_set_STAR__temp_val__28838){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading result:",res);
} else {
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),null,opts,cb);
} else {
var temp__5718__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,dep);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cljs_dep = temp__5718__auto__;
return cljs.js.require.call(null,bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28837,_STAR_cljs_dep_set_STAR__temp_val__28838){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),null,opts,((function (cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28837,_STAR_cljs_dep_set_STAR__temp_val__28838){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cb.call(null,cljs.core.update.call(null,res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28837,_STAR_cljs_dep_set_STAR__temp_val__28838))
);
}
});})(cljs_dep,temp__5718__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28837,_STAR_cljs_dep_set_STAR__temp_val__28838))
);
} else {
return cb.call(null,res);
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28837,_STAR_cljs_dep_set_STAR__temp_val__28838))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__28837;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__28842 = arguments.length;
switch (G__28842) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__28843 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__28844 = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__28844;

try{var compiler = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.call(null,bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_.call(null,((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28843,_STAR_cljs_dep_set_STAR__temp_val__28844){
return (function (p1__28840_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__28840_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28843,_STAR_cljs_dep_set_STAR__temp_val__28844))
,deps)))){
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''))));
} else {
if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,dep)], null),((function (dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28843,_STAR_cljs_dep_set_STAR__temp_val__28844){
return (function (resource){
if(((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not.call(null,resource)){
var temp__5718__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,dep);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cljs_dep = temp__5718__auto__;
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.cons.call(null,cljs_dep,cljs.core.next.call(null,deps)),opts,((function (cljs_dep,temp__5718__auto__,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28843,_STAR_cljs_dep_set_STAR__temp_val__28844){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cb.call(null,cljs.core.update.call(null,res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__5718__auto__,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28843,_STAR_cljs_dep_set_STAR__temp_val__28844))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)))));
}
} else {
var map__28846 = resource;
var map__28846__$1 = (((((!((map__28846 == null))))?(((((map__28846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28846):map__28846);
var name = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__28848 = cljs.core.keyword_identical_QMARK_;
var expr__28849 = lang;
if(cljs.core.truth_(pred__28848.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__28849))){
cljs.js.pre_file_side_effects.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__28848,expr__28849,map__28846,map__28846__$1,name,lang,source,file,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28843,_STAR_cljs_dep_set_STAR__temp_val__28844){
return (function (res){
cljs.js.post_file_side_effects.call(null,file,opts);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cb.call(null,res);
}
});})(pred__28848,expr__28849,map__28846,map__28846__$1,name,lang,source,file,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28843,_STAR_cljs_dep_set_STAR__temp_val__28844))
);
} else {
if(cljs.core.truth_(pred__28848.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__28849))){
return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__28843,_STAR_cljs_dep_set_STAR__temp_val__28844))
);
}catch (e28845){var cause = e28845;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__28843;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq.call(null,macros)){
var nsym = cljs.core.first.call(null,cljs.core.vals.call(null,macros));
var k__$1 = (function (){var or__4047__auto__ = reload.call(null,k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.get_in.call(null,reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,nsym,cljs.core.name);
if(and__4036__auto__){
var and__4036__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760)),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518));
return cljs.js.require.call(null,bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_macros.call(null,bound_vars,k__$1,cljs.core.next.call(null,macros),lib,reload,reloads,opts,cb);
} else {
var temp__5718__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,nsym);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cljs_dep = temp__5718__auto__;
return cljs.js.require.call(null,bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

return cljs.js.load_macros.call(null,bound_vars,k__$1,cljs.core.next.call(null,macros),lib,reload,reloads,opts,((function (cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cb.call(null,cljs.core.update.call(null,res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep));
}
});})(cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
}
});})(cljs_dep,temp__5718__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return cb.call(null,res);
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__28855 = arguments.length;
switch (G__28855) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.call(null,ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__28856 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.call(null,vec__28856,(0),null);
var rk = cljs.core.nth.call(null,vec__28856,(1),null);
var renk = cljs.core.nth.call(null,vec__28856,(2),null);
var rewrite_renames = ((function (vec__28856,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,((function (vec__28856,uk,rk,renk){
return (function (acc,p__28859){
var vec__28860 = p__28859;
var renamed = cljs.core.nth.call(null,vec__28860,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__28860,(1),null);
var entry = vec__28860;
var from = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_sym));
var to = cljs.core.get.call(null,smap,from);
if((!((to == null)))){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
});})(vec__28856,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__28856,uk,rk,renk))
;
var rewrite_deps = ((function (vec__28856,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (vec__28856,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5718__auto__ = cljs.core.get.call(null,smap,dep);
if(cljs.core.truth_(temp__5718__auto__)){
var new_dep = temp__5718__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__28856,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__28856,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,ast,uk,((function (vec__28856,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__28852_SHARP_){
return clojure.walk.postwalk_replace.call(null,smap,p1__28852_SHARP_);
});})(vec__28856,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__28856,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__28853_SHARP_){
return cljs.core.merge.call(null,smap,clojure.walk.postwalk_replace.call(null,smap,p1__28853_SHARP_));
});})(vec__28856,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__28864,cenv){
var map__28865 = p__28864;
var map__28865__$1 = (((((!((map__28865 == null))))?(((((map__28865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28865):map__28865);
var ast = map__28865__$1;
var requires = cljs.core.get.call(null,map__28865__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.call(null,map__28865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cenv));
var missing_require_macros = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (namespaces,map__28865,map__28865__$1,ast,requires,name){
return (function (p__28867){
var vec__28868 = p__28867;
var _ = cljs.core.nth.call(null,vec__28868,(0),null);
var full_ns = cljs.core.nth.call(null,vec__28868,(1),null);
var map__28871 = cljs.core.get.call(null,namespaces,full_ns);
var map__28871__$1 = (((((!((map__28871 == null))))?(((((map__28871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28871):map__28871);
var use_macros = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4047__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals.call(null,require_macros));
}
});})(namespaces,map__28865,map__28865__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.call(null,cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__28876 = arguments.length;
switch (G__28876) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.call(null,false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__28877,opts,cb){
var map__28878 = p__28877;
var map__28878__$1 = (((((!((map__28878 == null))))?(((((map__28878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28878):map__28878);
var ast = map__28878__$1;
var op = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,op))){
var check_uses_and_load_macros = ((function (map__28878,map__28878__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__28897 = rewritten_ast;
var map__28897__$1 = (((((!((map__28897 == null))))?(((((map__28897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28897):map__28897);
var uses = cljs.core.get.call(null,map__28897__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__28897__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.call(null,map__28897__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.call(null,map__28897__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.call(null,map__28897__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :use-macros for",name);
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__28897,map__28897__$1,uses,use_macros,reload,reloads,name,map__28878,map__28878__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var map__28899 = cljs.js.rewrite_ns_ast.call(null,rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__28899__$1 = (((((!((map__28899 == null))))?(((((map__28899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28899):map__28899);
var rewritten_ast__$1 = map__28899__$1;
var require_macros = cljs.core.get.call(null,map__28899__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__28899,map__28899__$1,rewritten_ast__$1,require_macros,env,map__28897,map__28897__$1,uses,use_macros,reload,reloads,name,map__28878,map__28878__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return cb.call(null,res_SINGLEQUOTE_);
} else {
var map__28901 = cljs.js.rewrite_ns_ast.call(null,rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__28901__$1 = (((((!((map__28901 == null))))?(((((map__28901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28901):map__28901);
var rewritten_ast__$2 = map__28901__$1;
var use_macros__$1 = cljs.core.get.call(null,map__28901__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq.call(null,use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__28904_28917 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__28905_28918 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__28906_28919 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__28907_28920 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__28906_28919;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__28907_28920;

try{cljs.analyzer.check_use_macros.call(null,use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__28905_28918;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__28904_28917;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e28903){var cause = e28903;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return cb.call(null,res_SINGLEQUOTE___$1);
} else {
try{var _STAR_analyze_deps_STAR__orig_val__28909 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__28910 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__28911 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__28912 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__28911;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__28912;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing.call(null,cljs.analyzer.check_rename_macros_inferring_missing.call(null,cljs.analyzer.check_use_macros_inferring_missing.call(null,rewritten_ast__$2,env),env),env);
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__28910;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__28909;
}}catch (e28908){var cause = e28908;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__28899,map__28899__$1,rewritten_ast__$1,require_macros,env,map__28897,map__28897__$1,uses,use_macros,reload,reloads,name,map__28878,map__28878__$1,ast,op))
);
}
});})(env,map__28897,map__28897__$1,uses,use_macros,reload,reloads,name,map__28878,map__28878__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking uses");
} else {
}

cljs.analyzer.check_uses.call(null,(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq.call(null,uses);
} else {
return and__4036__auto__;
}
})())?cljs.analyzer.missing_uses.call(null,uses,env):null),env);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}catch (e28913){var cause = e28913;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__28878,map__28878__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4036__auto__ = load;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4036__auto__;
}
})())){
var map__28914 = ast;
var map__28914__$1 = (((((!((map__28914 == null))))?(((((map__28914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28914):map__28914);
var reload = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.call(null,bound_vars,ana_env,name,deps,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__28914,map__28914__$1,reload,name,deps,map__28878,map__28878__$1,ast,op){
return (function (p1__28873_SHARP_){
return check_uses_and_load_macros.call(null,p1__28873_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__28873_SHARP_)));
});})(map__28914,map__28914__$1,reload,name,deps,map__28878,map__28878__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,load);
if(and__4036__auto__){
var and__4036__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__28878,map__28878__$1,ast,op){
return (function (p1__28874_SHARP_){
return check_uses_and_load_macros.call(null,p1__28874_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__28874_SHARP_)));
});})(map__28878,map__28878__$1,ast,op))
);
} else {
return check_uses_and_load_macros.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__28921_28933 = cljs.core.seq.call(null,deps);
var chunk__28922_28934 = null;
var count__28923_28935 = (0);
var i__28924_28936 = (0);
while(true){
if((i__28924_28936 < count__28923_28935)){
var dep_28937 = cljs.core._nth.call(null,chunk__28922_28934,i__28924_28936);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28925_28938 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28926_28939 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28927_28940 = true;
var _STAR_print_fn_STAR__temp_val__28928_28941 = ((function (seq__28921_28933,chunk__28922_28934,count__28923_28935,i__28924_28936,_STAR_print_newline_STAR__orig_val__28925_28938,_STAR_print_fn_STAR__orig_val__28926_28939,_STAR_print_newline_STAR__temp_val__28927_28940,sb__4572__auto__,dep_28937){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__28921_28933,chunk__28922_28934,count__28923_28935,i__28924_28936,_STAR_print_newline_STAR__orig_val__28925_28938,_STAR_print_fn_STAR__orig_val__28926_28939,_STAR_print_newline_STAR__temp_val__28927_28940,sb__4572__auto__,dep_28937))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28927_28940;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28928_28941;

try{cljs.compiler.emitln.call(null,cljs.core.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,dep_28937)," = require('",dep_28937,"');");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28926_28939;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28925_28938;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__28942 = seq__28921_28933;
var G__28943 = chunk__28922_28934;
var G__28944 = count__28923_28935;
var G__28945 = (i__28924_28936 + (1));
seq__28921_28933 = G__28942;
chunk__28922_28934 = G__28943;
count__28923_28935 = G__28944;
i__28924_28936 = G__28945;
continue;
} else {
var temp__5720__auto___28946 = cljs.core.seq.call(null,seq__28921_28933);
if(temp__5720__auto___28946){
var seq__28921_28947__$1 = temp__5720__auto___28946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28921_28947__$1)){
var c__4461__auto___28948 = cljs.core.chunk_first.call(null,seq__28921_28947__$1);
var G__28949 = cljs.core.chunk_rest.call(null,seq__28921_28947__$1);
var G__28950 = c__4461__auto___28948;
var G__28951 = cljs.core.count.call(null,c__4461__auto___28948);
var G__28952 = (0);
seq__28921_28933 = G__28949;
chunk__28922_28934 = G__28950;
count__28923_28935 = G__28951;
i__28924_28936 = G__28952;
continue;
} else {
var dep_28953 = cljs.core.first.call(null,seq__28921_28947__$1);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28929_28954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28930_28955 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28931_28956 = true;
var _STAR_print_fn_STAR__temp_val__28932_28957 = ((function (seq__28921_28933,chunk__28922_28934,count__28923_28935,i__28924_28936,_STAR_print_newline_STAR__orig_val__28929_28954,_STAR_print_fn_STAR__orig_val__28930_28955,_STAR_print_newline_STAR__temp_val__28931_28956,sb__4572__auto__,dep_28953,seq__28921_28947__$1,temp__5720__auto___28946){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__28921_28933,chunk__28922_28934,count__28923_28935,i__28924_28936,_STAR_print_newline_STAR__orig_val__28929_28954,_STAR_print_fn_STAR__orig_val__28930_28955,_STAR_print_newline_STAR__temp_val__28931_28956,sb__4572__auto__,dep_28953,seq__28921_28947__$1,temp__5720__auto___28946))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28931_28956;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28932_28957;

try{cljs.compiler.emitln.call(null,cljs.core.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,dep_28953)," = require('",dep_28953,"');");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28930_28955;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28929_28954;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__28958 = cljs.core.next.call(null,seq__28921_28947__$1);
var G__28959 = null;
var G__28960 = (0);
var G__28961 = (0);
seq__28921_28933 = G__28958;
chunk__28922_28934 = G__28959;
count__28923_28935 = G__28960;
i__28924_28936 = G__28961;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.seq.call(null,deps);
if(and__4036__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4036__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__28962 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__28962__$1 = (((((!((map__28962 == null))))?(((((map__28962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28962):map__28962);
var js_dependency_index = cljs.core.get.call(null,map__28962__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__28964_28980 = cljs.core.seq.call(null,deps);
var chunk__28965_28981 = null;
var count__28966_28982 = (0);
var i__28967_28983 = (0);
while(true){
if((i__28967_28983 < count__28966_28982)){
var dep_28984 = cljs.core._nth.call(null,chunk__28965_28981,i__28967_28983);
var map__28968_28985 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,dep_28984));
var map__28968_28986__$1 = (((((!((map__28968_28985 == null))))?(((((map__28968_28985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28968_28985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968_28985):map__28968_28985);
var global_exports_28987 = cljs.core.get.call(null,map__28968_28986__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28970_28988 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28971_28989 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28972_28990 = true;
var _STAR_print_fn_STAR__temp_val__28973_28991 = ((function (seq__28964_28980,chunk__28965_28981,count__28966_28982,i__28967_28983,_STAR_print_newline_STAR__orig_val__28970_28988,_STAR_print_fn_STAR__orig_val__28971_28989,_STAR_print_newline_STAR__temp_val__28972_28990,sb__4572__auto__,map__28968_28985,map__28968_28986__$1,global_exports_28987,dep_28984,map__28962,map__28962__$1,js_dependency_index){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__28964_28980,chunk__28965_28981,count__28966_28982,i__28967_28983,_STAR_print_newline_STAR__orig_val__28970_28988,_STAR_print_fn_STAR__orig_val__28971_28989,_STAR_print_newline_STAR__temp_val__28972_28990,sb__4572__auto__,map__28968_28985,map__28968_28986__$1,global_exports_28987,dep_28984,map__28962,map__28962__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28972_28990;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28973_28991;

try{cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28987,dep_28984);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28971_28989;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28970_28988;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__28992 = seq__28964_28980;
var G__28993 = chunk__28965_28981;
var G__28994 = count__28966_28982;
var G__28995 = (i__28967_28983 + (1));
seq__28964_28980 = G__28992;
chunk__28965_28981 = G__28993;
count__28966_28982 = G__28994;
i__28967_28983 = G__28995;
continue;
} else {
var temp__5720__auto___28996 = cljs.core.seq.call(null,seq__28964_28980);
if(temp__5720__auto___28996){
var seq__28964_28997__$1 = temp__5720__auto___28996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28964_28997__$1)){
var c__4461__auto___28998 = cljs.core.chunk_first.call(null,seq__28964_28997__$1);
var G__28999 = cljs.core.chunk_rest.call(null,seq__28964_28997__$1);
var G__29000 = c__4461__auto___28998;
var G__29001 = cljs.core.count.call(null,c__4461__auto___28998);
var G__29002 = (0);
seq__28964_28980 = G__28999;
chunk__28965_28981 = G__29000;
count__28966_28982 = G__29001;
i__28967_28983 = G__29002;
continue;
} else {
var dep_29003 = cljs.core.first.call(null,seq__28964_28997__$1);
var map__28974_29004 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,dep_29003));
var map__28974_29005__$1 = (((((!((map__28974_29004 == null))))?(((((map__28974_29004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28974_29004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28974_29004):map__28974_29004);
var global_exports_29006 = cljs.core.get.call(null,map__28974_29005__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28976_29007 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28977_29008 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28978_29009 = true;
var _STAR_print_fn_STAR__temp_val__28979_29010 = ((function (seq__28964_28980,chunk__28965_28981,count__28966_28982,i__28967_28983,_STAR_print_newline_STAR__orig_val__28976_29007,_STAR_print_fn_STAR__orig_val__28977_29008,_STAR_print_newline_STAR__temp_val__28978_29009,sb__4572__auto__,map__28974_29004,map__28974_29005__$1,global_exports_29006,dep_29003,seq__28964_28997__$1,temp__5720__auto___28996,map__28962,map__28962__$1,js_dependency_index){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__28964_28980,chunk__28965_28981,count__28966_28982,i__28967_28983,_STAR_print_newline_STAR__orig_val__28976_29007,_STAR_print_fn_STAR__orig_val__28977_29008,_STAR_print_newline_STAR__temp_val__28978_29009,sb__4572__auto__,map__28974_29004,map__28974_29005__$1,global_exports_29006,dep_29003,seq__28964_28997__$1,temp__5720__auto___28996,map__28962,map__28962__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28978_29009;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28979_29010;

try{cljs.compiler.emit_global_export.call(null,ns_name,global_exports_29006,dep_29003);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28977_29008;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28976_29007;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__29011 = cljs.core.next.call(null,seq__28964_28997__$1);
var G__29012 = null;
var G__29013 = (0);
var G__29014 = (0);
seq__28964_28980 = G__29011;
chunk__28965_28981 = G__29012;
count__28966_28982 = G__29013;
i__28967_28983 = G__29014;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.seq.call(null,deps);
if(and__4036__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4036__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.call(null,cljs.core.constantly.call(null,null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__29017 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__29017,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__29017;
}
})();
return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__29018 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__29019 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__29020 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__29021 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__29022 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__29023 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__29024 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__29025 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__29026 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__29027 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__29028 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__29029 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__29030 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__29031 = ns;
var _STAR_checked_arrays_STAR__temp_val__29032 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__29033 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__29034 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__29035 = cljs.core.create_ns.call(null,ns);
var _STAR_passes_STAR__temp_val__29036 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__29037 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__29038 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__29039 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__29040 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__29041 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__29030;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__29031;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__29032;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__29033;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__29034;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__29035;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__29036;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__29037;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__29038;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__29039;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__29040;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__29041;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e29042){var cause = e29042;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__29043 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__29043__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__29043,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__29043);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__29043__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__29043__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e29044){var cause = e29044;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29018,_STAR_cljs_ns_STAR__orig_val__29019,_STAR_checked_arrays_STAR__orig_val__29020,_STAR_cljs_static_fns_STAR__orig_val__29021,_STAR_fn_invoke_direct_STAR__orig_val__29022,_STAR_ns_STAR__orig_val__29023,_STAR_passes_STAR__orig_val__29024,_STAR_alias_map_STAR__orig_val__29025,_STAR_data_readers_STAR__orig_val__29026,resolve_symbol_orig_val__29027,_STAR_source_map_data_STAR__orig_val__29028,_STAR_cljs_file_STAR__orig_val__29029,_STAR_compiler_STAR__temp_val__29030,_STAR_cljs_ns_STAR__temp_val__29031,_STAR_checked_arrays_STAR__temp_val__29032,_STAR_cljs_static_fns_STAR__temp_val__29033,_STAR_fn_invoke_direct_STAR__temp_val__29034,_STAR_ns_STAR__temp_val__29035,_STAR_passes_STAR__temp_val__29036,_STAR_alias_map_STAR__temp_val__29037,_STAR_data_readers_STAR__temp_val__29038,resolve_symbol_temp_val__29039,_STAR_source_map_data_STAR__temp_val__29040,_STAR_cljs_file_STAR__temp_val__29041,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
return cljs.core.trampoline.call(null,cljs$js$analyze_str_STAR__$_analyze_loop,ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29018,_STAR_cljs_ns_STAR__orig_val__29019,_STAR_checked_arrays_STAR__orig_val__29020,_STAR_cljs_static_fns_STAR__orig_val__29021,_STAR_fn_invoke_direct_STAR__orig_val__29022,_STAR_ns_STAR__orig_val__29023,_STAR_passes_STAR__orig_val__29024,_STAR_alias_map_STAR__orig_val__29025,_STAR_data_readers_STAR__orig_val__29026,resolve_symbol_orig_val__29027,_STAR_source_map_data_STAR__orig_val__29028,_STAR_cljs_file_STAR__orig_val__29029,_STAR_compiler_STAR__temp_val__29030,_STAR_cljs_ns_STAR__temp_val__29031,_STAR_checked_arrays_STAR__temp_val__29032,_STAR_cljs_static_fns_STAR__temp_val__29033,_STAR_fn_invoke_direct_STAR__temp_val__29034,_STAR_ns_STAR__temp_val__29035,_STAR_passes_STAR__temp_val__29036,_STAR_alias_map_STAR__temp_val__29037,_STAR_data_readers_STAR__temp_val__29038,resolve_symbol_temp_val__29039,_STAR_source_map_data_STAR__temp_val__29040,_STAR_cljs_file_STAR__temp_val__29041,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
);
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29018,_STAR_cljs_ns_STAR__orig_val__29019,_STAR_checked_arrays_STAR__orig_val__29020,_STAR_cljs_static_fns_STAR__orig_val__29021,_STAR_fn_invoke_direct_STAR__orig_val__29022,_STAR_ns_STAR__orig_val__29023,_STAR_passes_STAR__orig_val__29024,_STAR_alias_map_STAR__orig_val__29025,_STAR_data_readers_STAR__orig_val__29026,resolve_symbol_orig_val__29027,_STAR_source_map_data_STAR__orig_val__29028,_STAR_cljs_file_STAR__orig_val__29029,_STAR_compiler_STAR__temp_val__29030,_STAR_cljs_ns_STAR__temp_val__29031,_STAR_checked_arrays_STAR__temp_val__29032,_STAR_cljs_static_fns_STAR__temp_val__29033,_STAR_fn_invoke_direct_STAR__temp_val__29034,_STAR_ns_STAR__temp_val__29035,_STAR_passes_STAR__temp_val__29036,_STAR_alias_map_STAR__temp_val__29037,_STAR_data_readers_STAR__temp_val__29038,resolve_symbol_temp_val__29039,_STAR_source_map_data_STAR__temp_val__29040,_STAR_cljs_file_STAR__temp_val__29041,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop.call(null,ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29018,_STAR_cljs_ns_STAR__orig_val__29019,_STAR_checked_arrays_STAR__orig_val__29020,_STAR_cljs_static_fns_STAR__orig_val__29021,_STAR_fn_invoke_direct_STAR__orig_val__29022,_STAR_ns_STAR__orig_val__29023,_STAR_passes_STAR__orig_val__29024,_STAR_alias_map_STAR__orig_val__29025,_STAR_data_readers_STAR__orig_val__29026,resolve_symbol_orig_val__29027,_STAR_source_map_data_STAR__orig_val__29028,_STAR_cljs_file_STAR__orig_val__29029,_STAR_compiler_STAR__temp_val__29030,_STAR_cljs_ns_STAR__temp_val__29031,_STAR_checked_arrays_STAR__temp_val__29032,_STAR_cljs_static_fns_STAR__temp_val__29033,_STAR_fn_invoke_direct_STAR__temp_val__29034,_STAR_ns_STAR__temp_val__29035,_STAR_passes_STAR__temp_val__29036,_STAR_alias_map_STAR__temp_val__29037,_STAR_data_readers_STAR__temp_val__29038,resolve_symbol_temp_val__29039,_STAR_source_map_data_STAR__temp_val__29040,_STAR_cljs_file_STAR__temp_val__29041,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
return cb__$1.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__29029;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__29028;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__29027;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__29026;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__29025;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__29024;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__29023;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__29022;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__29021;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__29020;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__29019;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__29018;
}});})(rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__29046 = arguments.length;
switch (G__29046) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.call(null,state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.call(null,state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__29048 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__29048,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__29048;
}
})();
cljs.js.clear_fns_BANG_.call(null);

var _STAR_compiler_STAR__orig_val__29049 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__29050 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__29051 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__29052 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__29053 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__29054 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__29055 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__29056 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__29057 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__29058 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__29059 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__29060 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__29061 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__29062 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__29063 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__29064 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__29065 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__29066 = cljs.core.create_ns.call(null,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__29067 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__29068 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__29069 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__29070 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__29060;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__29061;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__29062;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__29063;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__29064;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__29065;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__29066;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__29067;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__29068;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__29069;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__29070;

try{var aenv = cljs.analyzer.empty_env.call(null);
var aenv__$1 = (function (){var G__29071 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__29071__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__29071,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__29071);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__29071__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__29071__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e29072){var cause = e29072;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__29073 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__29076 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__29076__$1 = (((((!((map__29076 == null))))?(((((map__29076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29076):map__29076);
var node_libs = cljs.core.get.call(null,map__29076__$1,true);
var libs_to_load = cljs.core.get.call(null,map__29076__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__29073,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__29073,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
return cljs.js.ns_side_effects.call(null,true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__29073,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__29049,_STAR_eval_fn_STAR__orig_val__29050,_STAR_cljs_ns_STAR__orig_val__29051,_STAR_checked_arrays_STAR__orig_val__29052,_STAR_cljs_static_fns_STAR__orig_val__29053,_STAR_fn_invoke_direct_STAR__orig_val__29054,_STAR_ns_STAR__orig_val__29055,_STAR_alias_map_STAR__orig_val__29056,_STAR_data_readers_STAR__orig_val__29057,resolve_symbol_orig_val__29058,_STAR_source_map_data_STAR__orig_val__29059,_STAR_compiler_STAR__temp_val__29060,_STAR_eval_fn_STAR__temp_val__29061,_STAR_cljs_ns_STAR__temp_val__29062,_STAR_checked_arrays_STAR__temp_val__29063,_STAR_cljs_static_fns_STAR__temp_val__29064,_STAR_fn_invoke_direct_STAR__temp_val__29065,_STAR_ns_STAR__temp_val__29066,_STAR_alias_map_STAR__temp_val__29067,_STAR_data_readers_STAR__temp_val__29068,resolve_symbol_temp_val__29069,_STAR_source_map_data_STAR__temp_val__29070,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29078_29086 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29079_29087 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29080_29088 = true;
var _STAR_print_fn_STAR__temp_val__29081_29089 = ((function (_STAR_print_newline_STAR__orig_val__29078_29086,_STAR_print_fn_STAR__orig_val__29079_29087,_STAR_print_newline_STAR__temp_val__29080_29088,sb__4572__auto__,ns_name,sb,ast,vec__29073,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__29049,_STAR_eval_fn_STAR__orig_val__29050,_STAR_cljs_ns_STAR__orig_val__29051,_STAR_checked_arrays_STAR__orig_val__29052,_STAR_cljs_static_fns_STAR__orig_val__29053,_STAR_fn_invoke_direct_STAR__orig_val__29054,_STAR_ns_STAR__orig_val__29055,_STAR_alias_map_STAR__orig_val__29056,_STAR_data_readers_STAR__orig_val__29057,resolve_symbol_orig_val__29058,_STAR_source_map_data_STAR__orig_val__29059,_STAR_compiler_STAR__temp_val__29060,_STAR_eval_fn_STAR__temp_val__29061,_STAR_cljs_ns_STAR__temp_val__29062,_STAR_checked_arrays_STAR__temp_val__29063,_STAR_cljs_static_fns_STAR__temp_val__29064,_STAR_fn_invoke_direct_STAR__temp_val__29065,_STAR_ns_STAR__temp_val__29066,_STAR_alias_map_STAR__temp_val__29067,_STAR_data_readers_STAR__temp_val__29068,resolve_symbol_temp_val__29069,_STAR_source_map_data_STAR__temp_val__29070,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__29078_29086,_STAR_print_fn_STAR__orig_val__29079_29087,_STAR_print_newline_STAR__temp_val__29080_29088,sb__4572__auto__,ns_name,sb,ast,vec__29073,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__29049,_STAR_eval_fn_STAR__orig_val__29050,_STAR_cljs_ns_STAR__orig_val__29051,_STAR_checked_arrays_STAR__orig_val__29052,_STAR_cljs_static_fns_STAR__orig_val__29053,_STAR_fn_invoke_direct_STAR__orig_val__29054,_STAR_ns_STAR__orig_val__29055,_STAR_alias_map_STAR__orig_val__29056,_STAR_data_readers_STAR__orig_val__29057,resolve_symbol_orig_val__29058,_STAR_source_map_data_STAR__orig_val__29059,_STAR_compiler_STAR__temp_val__29060,_STAR_eval_fn_STAR__temp_val__29061,_STAR_cljs_ns_STAR__temp_val__29062,_STAR_checked_arrays_STAR__temp_val__29063,_STAR_cljs_static_fns_STAR__temp_val__29064,_STAR_fn_invoke_direct_STAR__temp_val__29065,_STAR_ns_STAR__temp_val__29066,_STAR_alias_map_STAR__temp_val__29067,_STAR_data_readers_STAR__temp_val__29068,resolve_symbol_temp_val__29069,_STAR_source_map_data_STAR__temp_val__29070,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29080_29088;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29081_29089;

try{cljs.compiler.emitln.call(null,["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29079_29087;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29078_29086;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects.call(null,bound_vars__$1,sb,cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null))], null));
}
});})(ast,vec__29073,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__29049,_STAR_eval_fn_STAR__orig_val__29050,_STAR_cljs_ns_STAR__orig_val__29051,_STAR_checked_arrays_STAR__orig_val__29052,_STAR_cljs_static_fns_STAR__orig_val__29053,_STAR_fn_invoke_direct_STAR__orig_val__29054,_STAR_ns_STAR__orig_val__29055,_STAR_alias_map_STAR__orig_val__29056,_STAR_data_readers_STAR__orig_val__29057,resolve_symbol_orig_val__29058,_STAR_source_map_data_STAR__orig_val__29059,_STAR_compiler_STAR__temp_val__29060,_STAR_eval_fn_STAR__temp_val__29061,_STAR_cljs_ns_STAR__temp_val__29062,_STAR_checked_arrays_STAR__temp_val__29063,_STAR_cljs_static_fns_STAR__temp_val__29064,_STAR_fn_invoke_direct_STAR__temp_val__29065,_STAR_ns_STAR__temp_val__29066,_STAR_alias_map_STAR__temp_val__29067,_STAR_data_readers_STAR__temp_val__29068,resolve_symbol_temp_val__29069,_STAR_source_map_data_STAR__temp_val__29070,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29082_29090 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29083_29091 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29084_29092 = true;
var _STAR_print_fn_STAR__temp_val__29085_29093 = ((function (_STAR_print_newline_STAR__orig_val__29082_29090,_STAR_print_fn_STAR__orig_val__29083_29091,_STAR_print_newline_STAR__temp_val__29084_29092,sb__4572__auto__,ast,vec__29073,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__29049,_STAR_eval_fn_STAR__orig_val__29050,_STAR_cljs_ns_STAR__orig_val__29051,_STAR_checked_arrays_STAR__orig_val__29052,_STAR_cljs_static_fns_STAR__orig_val__29053,_STAR_fn_invoke_direct_STAR__orig_val__29054,_STAR_ns_STAR__orig_val__29055,_STAR_alias_map_STAR__orig_val__29056,_STAR_data_readers_STAR__orig_val__29057,resolve_symbol_orig_val__29058,_STAR_source_map_data_STAR__orig_val__29059,_STAR_compiler_STAR__temp_val__29060,_STAR_eval_fn_STAR__temp_val__29061,_STAR_cljs_ns_STAR__temp_val__29062,_STAR_checked_arrays_STAR__temp_val__29063,_STAR_cljs_static_fns_STAR__temp_val__29064,_STAR_fn_invoke_direct_STAR__temp_val__29065,_STAR_ns_STAR__temp_val__29066,_STAR_alias_map_STAR__temp_val__29067,_STAR_data_readers_STAR__temp_val__29068,resolve_symbol_temp_val__29069,_STAR_source_map_data_STAR__temp_val__29070,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__29082_29090,_STAR_print_fn_STAR__orig_val__29083_29091,_STAR_print_newline_STAR__temp_val__29084_29092,sb__4572__auto__,ast,vec__29073,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__29049,_STAR_eval_fn_STAR__orig_val__29050,_STAR_cljs_ns_STAR__orig_val__29051,_STAR_checked_arrays_STAR__orig_val__29052,_STAR_cljs_static_fns_STAR__orig_val__29053,_STAR_fn_invoke_direct_STAR__orig_val__29054,_STAR_ns_STAR__orig_val__29055,_STAR_alias_map_STAR__orig_val__29056,_STAR_data_readers_STAR__orig_val__29057,resolve_symbol_orig_val__29058,_STAR_source_map_data_STAR__orig_val__29059,_STAR_compiler_STAR__temp_val__29060,_STAR_eval_fn_STAR__temp_val__29061,_STAR_cljs_ns_STAR__temp_val__29062,_STAR_checked_arrays_STAR__temp_val__29063,_STAR_cljs_static_fns_STAR__temp_val__29064,_STAR_fn_invoke_direct_STAR__temp_val__29065,_STAR_ns_STAR__temp_val__29066,_STAR_alias_map_STAR__temp_val__29067,_STAR_data_readers_STAR__temp_val__29068,resolve_symbol_temp_val__29069,_STAR_source_map_data_STAR__temp_val__29070,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29084_29092;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29085_29093;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29083_29091;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29082_29090;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})();
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null))], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__29059;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__29058;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__29057;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__29056;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__29055;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__29054;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__29053;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__29052;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__29051;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__29050;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__29049;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__29095 = arguments.length;
switch (G__29095) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.call(null,state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__29099 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__29099,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__29099;
}
})();
return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__29100 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__29101 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__29102 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__29103 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__29104 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__29105 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__29106 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__29107 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__29108 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__29109 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__29110 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__29111 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__29112 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__29113 = ns;
var _STAR_checked_arrays_STAR__temp_val__29114 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__29115 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__29116 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__29117 = cljs.core.create_ns.call(null,ns);
var _STAR_alias_map_STAR__temp_val__29118 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__29119 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__29120 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__29121 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__29111;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__29112;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__29113;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__29114;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__29115;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__29116;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__29117;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__29118;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__29119;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__29120;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__29121;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e29122){var cause = e29122;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__29123 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__29123__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__29123,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__29123);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__29123__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__29123__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e29124){var cause = e29124;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__29125 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__29128 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__29128__$1 = (((((!((map__29128 == null))))?(((((map__29128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29128):map__29128);
var node_libs = cljs.core.get.call(null,map__29128__$1,true);
var libs_to_load = cljs.core.get.call(null,map__29128__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__29125,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__29125,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__29125,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29100,_STAR_eval_fn_STAR__orig_val__29101,_STAR_cljs_ns_STAR__orig_val__29102,_STAR_checked_arrays_STAR__orig_val__29103,_STAR_cljs_static_fns_STAR__orig_val__29104,_STAR_fn_invoke_direct_STAR__orig_val__29105,_STAR_ns_STAR__orig_val__29106,_STAR_alias_map_STAR__orig_val__29107,_STAR_data_readers_STAR__orig_val__29108,resolve_symbol_orig_val__29109,_STAR_source_map_data_STAR__orig_val__29110,_STAR_compiler_STAR__temp_val__29111,_STAR_eval_fn_STAR__temp_val__29112,_STAR_cljs_ns_STAR__temp_val__29113,_STAR_checked_arrays_STAR__temp_val__29114,_STAR_cljs_static_fns_STAR__temp_val__29115,_STAR_fn_invoke_direct_STAR__temp_val__29116,_STAR_ns_STAR__temp_val__29117,_STAR_alias_map_STAR__temp_val__29118,_STAR_data_readers_STAR__temp_val__29119,resolve_symbol_temp_val__29120,_STAR_source_map_data_STAR__temp_val__29121,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29130_29138 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29131_29139 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29132_29140 = true;
var _STAR_print_fn_STAR__temp_val__29133_29141 = ((function (_STAR_print_newline_STAR__orig_val__29130_29138,_STAR_print_fn_STAR__orig_val__29131_29139,_STAR_print_newline_STAR__temp_val__29132_29140,sb__4572__auto__,ns_name,ast,vec__29125,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29100,_STAR_eval_fn_STAR__orig_val__29101,_STAR_cljs_ns_STAR__orig_val__29102,_STAR_checked_arrays_STAR__orig_val__29103,_STAR_cljs_static_fns_STAR__orig_val__29104,_STAR_fn_invoke_direct_STAR__orig_val__29105,_STAR_ns_STAR__orig_val__29106,_STAR_alias_map_STAR__orig_val__29107,_STAR_data_readers_STAR__orig_val__29108,resolve_symbol_orig_val__29109,_STAR_source_map_data_STAR__orig_val__29110,_STAR_compiler_STAR__temp_val__29111,_STAR_eval_fn_STAR__temp_val__29112,_STAR_cljs_ns_STAR__temp_val__29113,_STAR_checked_arrays_STAR__temp_val__29114,_STAR_cljs_static_fns_STAR__temp_val__29115,_STAR_fn_invoke_direct_STAR__temp_val__29116,_STAR_ns_STAR__temp_val__29117,_STAR_alias_map_STAR__temp_val__29118,_STAR_data_readers_STAR__temp_val__29119,resolve_symbol_temp_val__29120,_STAR_source_map_data_STAR__temp_val__29121,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__29130_29138,_STAR_print_fn_STAR__orig_val__29131_29139,_STAR_print_newline_STAR__temp_val__29132_29140,sb__4572__auto__,ns_name,ast,vec__29125,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29100,_STAR_eval_fn_STAR__orig_val__29101,_STAR_cljs_ns_STAR__orig_val__29102,_STAR_checked_arrays_STAR__orig_val__29103,_STAR_cljs_static_fns_STAR__orig_val__29104,_STAR_fn_invoke_direct_STAR__orig_val__29105,_STAR_ns_STAR__orig_val__29106,_STAR_alias_map_STAR__orig_val__29107,_STAR_data_readers_STAR__orig_val__29108,resolve_symbol_orig_val__29109,_STAR_source_map_data_STAR__orig_val__29110,_STAR_compiler_STAR__temp_val__29111,_STAR_eval_fn_STAR__temp_val__29112,_STAR_cljs_ns_STAR__temp_val__29113,_STAR_checked_arrays_STAR__temp_val__29114,_STAR_cljs_static_fns_STAR__temp_val__29115,_STAR_fn_invoke_direct_STAR__temp_val__29116,_STAR_ns_STAR__temp_val__29117,_STAR_alias_map_STAR__temp_val__29118,_STAR_data_readers_STAR__temp_val__29119,resolve_symbol_temp_val__29120,_STAR_source_map_data_STAR__temp_val__29121,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29132_29140;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29133_29141;

try{cljs.compiler.emit.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29131_29139;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29130_29138;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.call(null,cljs$js$compile_str_STAR__$_compile_loop,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1));
}
});})(ast,vec__29125,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29100,_STAR_eval_fn_STAR__orig_val__29101,_STAR_cljs_ns_STAR__orig_val__29102,_STAR_checked_arrays_STAR__orig_val__29103,_STAR_cljs_static_fns_STAR__orig_val__29104,_STAR_fn_invoke_direct_STAR__orig_val__29105,_STAR_ns_STAR__orig_val__29106,_STAR_alias_map_STAR__orig_val__29107,_STAR_data_readers_STAR__orig_val__29108,resolve_symbol_orig_val__29109,_STAR_source_map_data_STAR__orig_val__29110,_STAR_compiler_STAR__temp_val__29111,_STAR_eval_fn_STAR__temp_val__29112,_STAR_cljs_ns_STAR__temp_val__29113,_STAR_checked_arrays_STAR__temp_val__29114,_STAR_cljs_static_fns_STAR__temp_val__29115,_STAR_fn_invoke_direct_STAR__temp_val__29116,_STAR_ns_STAR__temp_val__29117,_STAR_alias_map_STAR__temp_val__29118,_STAR_data_readers_STAR__temp_val__29119,resolve_symbol_temp_val__29120,_STAR_source_map_data_STAR__temp_val__29121,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29134_29142 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29135_29143 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29136_29144 = true;
var _STAR_print_fn_STAR__temp_val__29137_29145 = ((function (_STAR_print_newline_STAR__orig_val__29134_29142,_STAR_print_fn_STAR__orig_val__29135_29143,_STAR_print_newline_STAR__temp_val__29136_29144,sb__4572__auto__,ast,vec__29125,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29100,_STAR_eval_fn_STAR__orig_val__29101,_STAR_cljs_ns_STAR__orig_val__29102,_STAR_checked_arrays_STAR__orig_val__29103,_STAR_cljs_static_fns_STAR__orig_val__29104,_STAR_fn_invoke_direct_STAR__orig_val__29105,_STAR_ns_STAR__orig_val__29106,_STAR_alias_map_STAR__orig_val__29107,_STAR_data_readers_STAR__orig_val__29108,resolve_symbol_orig_val__29109,_STAR_source_map_data_STAR__orig_val__29110,_STAR_compiler_STAR__temp_val__29111,_STAR_eval_fn_STAR__temp_val__29112,_STAR_cljs_ns_STAR__temp_val__29113,_STAR_checked_arrays_STAR__temp_val__29114,_STAR_cljs_static_fns_STAR__temp_val__29115,_STAR_fn_invoke_direct_STAR__temp_val__29116,_STAR_ns_STAR__temp_val__29117,_STAR_alias_map_STAR__temp_val__29118,_STAR_data_readers_STAR__temp_val__29119,resolve_symbol_temp_val__29120,_STAR_source_map_data_STAR__temp_val__29121,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__29134_29142,_STAR_print_fn_STAR__orig_val__29135_29143,_STAR_print_newline_STAR__temp_val__29136_29144,sb__4572__auto__,ast,vec__29125,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29100,_STAR_eval_fn_STAR__orig_val__29101,_STAR_cljs_ns_STAR__orig_val__29102,_STAR_checked_arrays_STAR__orig_val__29103,_STAR_cljs_static_fns_STAR__orig_val__29104,_STAR_fn_invoke_direct_STAR__orig_val__29105,_STAR_ns_STAR__orig_val__29106,_STAR_alias_map_STAR__orig_val__29107,_STAR_data_readers_STAR__orig_val__29108,resolve_symbol_orig_val__29109,_STAR_source_map_data_STAR__orig_val__29110,_STAR_compiler_STAR__temp_val__29111,_STAR_eval_fn_STAR__temp_val__29112,_STAR_cljs_ns_STAR__temp_val__29113,_STAR_checked_arrays_STAR__temp_val__29114,_STAR_cljs_static_fns_STAR__temp_val__29115,_STAR_fn_invoke_direct_STAR__temp_val__29116,_STAR_ns_STAR__temp_val__29117,_STAR_alias_map_STAR__temp_val__29118,_STAR_data_readers_STAR__temp_val__29119,resolve_symbol_temp_val__29120,_STAR_source_map_data_STAR__temp_val__29121,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29136_29144;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29137_29145;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29135_29143;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29134_29142;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

return ((function (ast,vec__29125,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29100,_STAR_eval_fn_STAR__orig_val__29101,_STAR_cljs_ns_STAR__orig_val__29102,_STAR_checked_arrays_STAR__orig_val__29103,_STAR_cljs_static_fns_STAR__orig_val__29104,_STAR_fn_invoke_direct_STAR__orig_val__29105,_STAR_ns_STAR__orig_val__29106,_STAR_alias_map_STAR__orig_val__29107,_STAR_data_readers_STAR__orig_val__29108,resolve_symbol_orig_val__29109,_STAR_source_map_data_STAR__orig_val__29110,_STAR_compiler_STAR__temp_val__29111,_STAR_eval_fn_STAR__temp_val__29112,_STAR_cljs_ns_STAR__temp_val__29113,_STAR_checked_arrays_STAR__temp_val__29114,_STAR_cljs_static_fns_STAR__temp_val__29115,_STAR_fn_invoke_direct_STAR__temp_val__29116,_STAR_ns_STAR__temp_val__29117,_STAR_alias_map_STAR__temp_val__29118,_STAR_data_readers_STAR__temp_val__29119,resolve_symbol_temp_val__29120,_STAR_source_map_data_STAR__temp_val__29121,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop.call(null,ns);
});
;})(ast,vec__29125,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29100,_STAR_eval_fn_STAR__orig_val__29101,_STAR_cljs_ns_STAR__orig_val__29102,_STAR_checked_arrays_STAR__orig_val__29103,_STAR_cljs_static_fns_STAR__orig_val__29104,_STAR_fn_invoke_direct_STAR__orig_val__29105,_STAR_ns_STAR__orig_val__29106,_STAR_alias_map_STAR__orig_val__29107,_STAR_data_readers_STAR__orig_val__29108,resolve_symbol_orig_val__29109,_STAR_source_map_data_STAR__orig_val__29110,_STAR_compiler_STAR__temp_val__29111,_STAR_eval_fn_STAR__temp_val__29112,_STAR_cljs_ns_STAR__temp_val__29113,_STAR_checked_arrays_STAR__temp_val__29114,_STAR_cljs_static_fns_STAR__temp_val__29115,_STAR_fn_invoke_direct_STAR__temp_val__29116,_STAR_ns_STAR__temp_val__29117,_STAR_alias_map_STAR__temp_val__29118,_STAR_data_readers_STAR__temp_val__29119,resolve_symbol_temp_val__29120,_STAR_source_map_data_STAR__temp_val__29121,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

return cb__$1.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__29110;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__29109;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__29108;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__29107;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__29106;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__29105;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__29104;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__29103;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__29102;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__29101;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__29100;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__29147 = arguments.length;
switch (G__29147) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.call(null,state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.call(null,state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data.call(null):null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__29151 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__29151,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__29151;
}
})();
var aname = (function (){var G__29152 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__29152);
} else {
return G__29152;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Evaluating",name);
} else {
}

cljs.js.clear_fns_BANG_.call(null);

return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__29153 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__29154 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__29155 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__29156 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__29157 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__29158 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__29159 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__29160 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__29161 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__29162 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__29163 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__29164 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__29165 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__29166 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__29167 = ns;
var _STAR_checked_arrays_STAR__temp_val__29168 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__29169 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__29170 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__29171 = cljs.core.create_ns.call(null,ns);
var _STAR_alias_map_STAR__temp_val__29172 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__29173 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__29174 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__29175 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__29176 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__29165;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__29166;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__29167;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__29168;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__29169;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__29170;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__29171;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__29172;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__29173;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__29174;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__29175;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__29176;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e29177){var cause = e29177;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__29178 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,ns));
var G__29178__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__29178,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__29178);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__29178__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__29178__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e29179){var cause = e29179;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__29180 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__29183 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__29183__$1 = (((((!((map__29183 == null))))?(((((map__29183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29183):map__29183);
var node_libs = cljs.core.get.call(null,map__29183__$1,true);
var libs_to_load = cljs.core.get.call(null,map__29183__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__29180,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__29180,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29185_29196 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29186_29197 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29187_29198 = true;
var _STAR_print_fn_STAR__temp_val__29188_29199 = ((function (_STAR_print_newline_STAR__orig_val__29185_29196,_STAR_print_fn_STAR__orig_val__29186_29197,_STAR_print_newline_STAR__temp_val__29187_29198,sb__4572__auto__,ast,ns_SINGLEQUOTE_,vec__29180,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__29185_29196,_STAR_print_fn_STAR__orig_val__29186_29197,_STAR_print_newline_STAR__temp_val__29187_29198,sb__4572__auto__,ast,ns_SINGLEQUOTE_,vec__29180,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29187_29198;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29188_29199;

try{cljs.compiler.emitln.call(null,["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29186_29197;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29185_29196;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,ns_SINGLEQUOTE_,vec__29180,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects.call(null,bound_vars__$1,sb,cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.call(null,cljs$js$eval_str_STAR__$_compile_loop,ns_SINGLEQUOTE_);
}
});})(ast,ns_SINGLEQUOTE_,vec__29180,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
var env__21879__auto___29200 = cljs.core.assoc.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__21879__auto___29201__$1 = ((cljs.core.map_QMARK_.call(null,env__21879__auto___29200))?cljs.core.atom.call(null,env__21879__auto___29200):(((((env__21879__auto___29200 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__21879__auto___29200)))))?env__21879__auto___29200:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__21879__auto___29200))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__29189_29202 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__29190_29203 = env__21879__auto___29201__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__29190_29203;

try{sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29191_29204 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29192_29205 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29193_29206 = true;
var _STAR_print_fn_STAR__temp_val__29194_29207 = ((function (_STAR_print_newline_STAR__orig_val__29191_29204,_STAR_print_fn_STAR__orig_val__29192_29205,_STAR_print_newline_STAR__temp_val__29193_29206,sb__4572__auto__,_STAR_compiler_STAR__orig_val__29189_29202,_STAR_compiler_STAR__temp_val__29190_29203,env__21879__auto___29200,env__21879__auto___29201__$1,ast,ns_SINGLEQUOTE_,vec__29180,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__29191_29204,_STAR_print_fn_STAR__orig_val__29192_29205,_STAR_print_newline_STAR__temp_val__29193_29206,sb__4572__auto__,_STAR_compiler_STAR__orig_val__29189_29202,_STAR_compiler_STAR__temp_val__29190_29203,env__21879__auto___29200,env__21879__auto___29201__$1,ast,ns_SINGLEQUOTE_,vec__29180,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29193_29206;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29194_29207;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29192_29205;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29191_29204;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__29189_29202;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__29180,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop.call(null,ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__29180,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs.call(null,aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),aname], null))], null);
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,js_source);
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,evalm)], null);
}catch (e29195){var cause = e29195;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,"ERROR",cause));
}})();
return cb__$1.call(null,res__$2);
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__29153,_STAR_eval_fn_STAR__orig_val__29154,_STAR_cljs_ns_STAR__orig_val__29155,_STAR_checked_arrays_STAR__orig_val__29156,_STAR_cljs_static_fns_STAR__orig_val__29157,_STAR_fn_invoke_direct_STAR__orig_val__29158,_STAR_ns_STAR__orig_val__29159,_STAR_alias_map_STAR__orig_val__29160,_STAR_data_readers_STAR__orig_val__29161,resolve_symbol_orig_val__29162,_STAR_source_map_data_STAR__orig_val__29163,_STAR_cljs_file_STAR__orig_val__29164,_STAR_compiler_STAR__temp_val__29165,_STAR_eval_fn_STAR__temp_val__29166,_STAR_cljs_ns_STAR__temp_val__29167,_STAR_checked_arrays_STAR__temp_val__29168,_STAR_cljs_static_fns_STAR__temp_val__29169,_STAR_fn_invoke_direct_STAR__temp_val__29170,_STAR_ns_STAR__temp_val__29171,_STAR_alias_map_STAR__temp_val__29172,_STAR_data_readers_STAR__temp_val__29173,resolve_symbol_temp_val__29174,_STAR_source_map_data_STAR__temp_val__29175,_STAR_cljs_file_STAR__temp_val__29176,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5718__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return cljs.js.trampoline_safe.call(null,f).call(null,evalm,complete);
} else {
return complete.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__29164;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__29163;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__29162;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__29161;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__29160;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__29159;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__29158;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__29157;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__29156;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__29155;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__29154;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__29153;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__29209 = arguments.length;
switch (G__29209) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.call(null,state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.call(null,state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_.call(null,(0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_.call(null,cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.core._vreset_BANG_.call(null,cljs.js.fn_index,(cljs.core._deref.call(null,cljs.js.fn_index) + (1)));
cljs.core._vreset_BANG_.call(null,cljs.js.fn_refs,cljs.core.assoc.call(null,cljs.core._deref.call(null,cljs.js.fn_refs),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.call(null,"cljs.js.get_fn(",cljs.js.put_fn.call(null,f),")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Function,(function (f){
return cljs.js.emit_fn.call(null,f);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Var,(function (f){
return cljs.js.emit_fn.call(null,f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__29212 = arguments.length;
switch (G__29212) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.call(null,form,cljs.core._STAR_ns_STAR_.name);
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.call(null,null);
var st_29217 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.call(null,st_29217,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_29217,result){
return (function (p__29213){
var map__29214 = p__29213;
var map__29214__$1 = (((((!((map__29214 == null))))?(((((map__29214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29214):map__29214);
var value = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_.call(null,result,value);
}
});})(st_29217,result))
);

return cljs.core.deref.call(null,result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;

//# sourceMappingURL=js.js.map?rel=1557850992602