// Compiled by ClojureScript 1.10.439 {}
goog.provide('replumb.core');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('replumb.repl');
goog.require('replumb.common');
/**
 * Reads, evaluates and calls back with the evaluation result.
 * 
 *   The first parameter is a map of configuration options, currently
 *   supporting:
 * 
 *   * `:verbose` will enable the the evaluation logging, defaults to false.
 *   To customize how to print, use `(set! *print-fn* (fn [& args] ...)`
 * 
 *   * `:warning-as-error` will consider a compiler warning as error.
 * 
 *   * `:target` `:nodejs` and `:browser` supported, the latter is used if
 *   missing.
 * 
 *   * `:init-fn!` user provided initialization function, it will be passed a
 *   map:
 * 
 *        :form   ;; the form to evaluate, as data
 *        :ns     ;; the current namespace, as symbol
 *        :target ;; the current target
 * 
 *   * `:load-fn!` will override replumb's default `cljs.js/*load-fn*`.
 *   It rules out `:read-file-fn!`, losing any perk of using `replumb.load`
 *   helpers. Trickily enough, `:load-fn!` is never used with `load-file`. It is the
 *   only case where it does not take precedence over `:read-file-fn!`. Use it if
 *   you know what you are doing and follow this protocol:
 * 
 *    ```
 *    Each runtime environment provides a different way to load a library.
 *    Whatever function `*load-fn*` is bound to will be passed two arguments
 *    - a map and a callback function: The map will have the following keys:
 * 
 *        :name   - the name of the library (a symbol)
 *        :macros - modifier signaling a macros namespace load
 *        :path   - munged relative library path (a string)
 * 
 *    The callback cb, upon resolution, will need to pass the same map:
 * 
 *        :lang       - the language, :clj or :js
 *        :source     - the source of the library (a string)
 *        :cache      - optional, if a :clj namespace has been precompiled to
 *                      :js, can give an analysis cache for faster loads.
 *        :source-map - optional, if a :clj namespace has been precompiled
 *                      to :js, can give a V3 source map JSON
 * 
 *    If the resource could not be resolved, the callback should be invoked with
 *    nil.
 *    ```
 * 
 *   * `:read-file-fn!` an asynchronous 2-arity function with signature
 *   `[file-path src-cb]` where src-cb is itself a function `(fn [source]
 *   ...)` that needs to be called with the file content as string (`nil`
 *   if no file is found). It is mutually exclusive with `:load-fn!` and
 *   will be ignored in case both are present.
 * 
 *   * `:write-file-fn!` a synchronous 2-arity function with signature
 *   `[file-path data]` that accepts a file-path and data to write.
 * 
 *   * `:src-paths` - a vector of paths containing source files.
 * 
 *   * `:cache` - a map containing two optional values: the first, `:path`,
 *   indicates the path of the cached files. The second, `:src-paths-lookup?`,
 *   indicates whether search the cached files in `:src-paths`. If both present,
 *   `:path` will have the priority but both will be inspected.
 * 
 *   * `:no-pr-str-on-value`  in case of `:success?` avoid converting the
 *   result map `:value` to string.
 * 
 *   * `:context` - indicates the evaluation context that will be passed to
 *   `cljs/eval-str`. One in `:expr`, `:statement`, `:return`. Defaults to `:expr`.
 *   If you really feel adventurous check [David Nolen's dev notes](https://github.com/clojure/clojurescript/blob/r1.7.228/devnotes/day1.org#tricky-bit---context).
 * 
 *   * `:foreign-libs` - a way to include foreign libraries. The format is analogous
 *   to the compiler option. For more info visit the [compiler options page](https://github.com/clojure/clojurescript/wiki/Compiler-Options#foreign-libs).
 * 
 *   * `:static-fns` - static dispatch in generated JavaScript. See the
 *   [compiler option page](https://github.com/clojure/clojurescript/wiki/Compiler-Options#static-fns).
 * 
 *   * `:preloads` - accepts either a sequence of symbols, akin to the core feature,
 *   or a map containing keys to specs, analogous to the `:ns` form syntax:
 *   ```
 *   {:preloads {:require '#{[my-ns.core :refer [init]] your-ns.core}
 *                :use '#{their-ns}
 *                :cb #(println "Result:" %)}}
 *   ```
 *   (Note the set, order does not matter)
 * 
 *   The second parameter, `callback`, should be a 1-arity function which receives
 *   the result map, whose result keys will be:
 * 
 *   ```
 *   :success?  a boolean indicating if everything went alright
 *   :value     (if (:success? result)), this key contains the yielded value as
 *           string, unless :no-pr-str-on-value is true, in which case it
 *           returns the bare value.
 *   :error     (if-not (:success? result)) will contain a js/Error
 *   :warning   in case a warning was thrown and :warning-as-error is falsey
 *   :form      the evaluated form as data structure (not string)}
 *   ```
 * 
 *   The third parameter is the source string to be read and evaluated.
 */
replumb.core.read_eval_call = (function replumb$core$read_eval_call(var_args){
var G__31299 = arguments.length;
switch (G__31299) {
case 2:
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('replumb.core.read_eval_call', replumb.core.read_eval_call);

replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$2 = (function (callback,source){
return replumb.repl.read_eval_call.call(null,cljs.core.PersistentArrayMap.EMPTY,callback,source);
});

replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3 = (function (opts,callback,source){
return replumb.repl.read_eval_call.call(null,opts,callback,source);
});

replumb.core.read_eval_call.cljs$lang$maxFixedArity = 3;

/**
 * Retrieves the REPL prompt to display, according to the current
 *   namespace. Returns a string.
 */
replumb.core.get_prompt = (function replumb$core$get_prompt(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(replumb.repl.current_ns.call(null)),"=> "].join('');
});
goog.exportSymbol('replumb.core.get_prompt', replumb.core.get_prompt);
/**
 * Return the message string of the input `js/Error`.
 */
replumb.core.error__GT_str = (function replumb$core$error__GT_str(var_args){
var G__31302 = arguments.length;
switch (G__31302) {
case 1:
return replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('replumb.core.error__GT_str', replumb.core.error__GT_str);

replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (error){
return replumb.common.extract_message.call(null,error);
});

replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (print_stack_QMARK_,error){
return replumb.common.extract_message.call(null,print_stack_QMARK_,error);
});

replumb.core.error__GT_str.cljs$lang$maxFixedArity = 2;

/**
 * Unwraps the result of an evaluation.
 * 
 *   It returns the content of `:value` in case of success and the content
 *   of `:error` (a `js/Error`) in case of failure.
 * 
 *   When `include-warning?` is true, then the string returned is, in
 *   order, from the `:error`, `:warning` and eventually `:value` key in
 *   the result map.
 */
replumb.core.unwrap_result = (function replumb$core$unwrap_result(var_args){
var G__31305 = arguments.length;
switch (G__31305) {
case 1:
return replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('replumb.core.unwrap_result', replumb.core.unwrap_result);

replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$1 = (function (result_map){
return replumb.core.unwrap_result.call(null,false,result_map);
});

replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$2 = (function (include_warning_QMARK_,result_map){
var map__31306 = result_map;
var map__31306__$1 = (((((!((map__31306 == null))))?(((((map__31306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31306):map__31306);
var error = cljs.core.get.call(null,map__31306__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31306__$1,new cljs.core.Keyword(null,"value","value",305978217));
var warning = cljs.core.get.call(null,map__31306__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
if(cljs.core.truth_(error)){
return error;
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = include_warning_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return warning;
} else {
return and__4036__auto__;
}
})())){
return warning;
} else {
return value;
}
}
});

replumb.core.unwrap_result.cljs$lang$maxFixedArity = 2;

/**
 * Given a `result-map`, tells whether the evaluation was successful.
 */
replumb.core.success_QMARK_ = (function replumb$core$success_QMARK_(result_map){
return new cljs.core.Keyword(null,"success?","success?",-122854052).cljs$core$IFn$_invoke$arity$1(result_map);
});
goog.exportSymbol('replumb.core.success_QMARK_', replumb.core.success_QMARK_);
/**
 * Given a `result-map`, returns the result of the evaluation as string.
 * 
 *   - When `include-warning?` is true, then the string returned is, in
 *   order, from the `:error`, `:warning` and eventually `:value` key in
 *   the result map.
 * 
 *   - When `print-stack?` is true, the error string will include the stack
 *   trace.
 */
replumb.core.result__GT_string = (function replumb$core$result__GT_string(var_args){
var G__31310 = arguments.length;
switch (G__31310) {
case 1:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('replumb.core.result__GT_string', replumb.core.result__GT_string);

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$1 = (function (result_map){
return replumb.core.result__GT_string.call(null,false,false,result_map);
});

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$2 = (function (print_stack_QMARK_,result_map){
return replumb.core.result__GT_string.call(null,print_stack_QMARK_,false,result_map);
});

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$3 = (function (print_stack_QMARK_,include_warning_QMARK_,result_map){
if((!(cljs.core.map_QMARK_.call(null,print_stack_QMARK_)))){
} else {
throw (new Error("Assert failed: (not (map? print-stack?))"));
}

if((!(cljs.core.map_QMARK_.call(null,include_warning_QMARK_)))){
} else {
throw (new Error("Assert failed: (not (map? include-warning?))"));
}

if(cljs.core.map_QMARK_.call(null,result_map)){
} else {
throw (new Error("Assert failed: (map? result-map)"));
}

var map__31311 = result_map;
var map__31311__$1 = (((((!((map__31311 == null))))?(((((map__31311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31311):map__31311);
var error = cljs.core.get.call(null,map__31311__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31311__$1,new cljs.core.Keyword(null,"value","value",305978217));
var warning = cljs.core.get.call(null,map__31311__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
if(cljs.core.truth_(error)){
return replumb.common.extract_message.call(null,print_stack_QMARK_,false,error);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = include_warning_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return warning;
} else {
return and__4036__auto__;
}
})())){
return warning;
} else {
return value;
}
}
});

replumb.core.result__GT_string.cljs$lang$maxFixedArity = 3;

/**
 * Creates the right option map for read-eval-call.
 * 
 *   Supported targets: `:nodejs` or `:node`, `:browser`. It throws if not
 *   supported.
 * 
 *   The 2-arity function requires a `load-fn!` compatible with
 *   ClojureScript `cljs.js/*load-fn*`. Use it if you know what you are
 *   doing and follow this protocol:
 * 
 *    Each runtime environment provides a different way to load a library.
 *    Whatever function `*load-fn*` is bound to will be passed two arguments
 *    - a map and a callback function: The map will have the following keys:
 * 
 *        :name   - the name of the library (a symbol)
 *        :macros - modifier signaling a macros namespace load
 *        :path   - munged relative library path (a string)
 * 
 *    The callback cb, upon resolution, will need to pass the same map:
 * 
 *        :lang       - the language, :clj or :js
 *        :source     - the source of the library (a string)
 *        :cache      - optional, if a :clj namespace has been precompiled to
 *                      :js, can give an analysis cache for faster loads.
 *        :source-map - optional, if a :clj namespace has been precompiled
 *                      to :js, can give a V3 source map JSON
 * 
 *    If the resource could not be resolved, the callback should be invoked with
 *    nil.
 * 
 *   The 3-arity function accepts a sequence of source path strings and
 *   `read-file-fn!`, an asynchronous 2-arity function with signature
 *   `[file-path src-cb]` where src-cb is itself a function `(fn [source]
 *   ...)` that needs to be called with the file content as string (`nil`
 *   if no file is found).
 * 
 *   The 4-arity function receives additionally a fourth parameter `write-file-fn!`,
 *   a synchronous 2-arity function with signature `[file-path data]` that accepts
 *   a file-path and data to write.
 */
replumb.core.options = (function replumb$core$options(var_args){
var G__31315 = arguments.length;
switch (G__31315) {
case 2:
return replumb.core.options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.options.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return replumb.core.options.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('replumb.core.options', replumb.core.options);

replumb.core.options.cljs$core$IFn$_invoke$arity$2 = (function (target,load_fn_BANG_){
var G__31316 = target;
var G__31316__$1 = (((G__31316 instanceof cljs.core.Keyword))?G__31316.fqn:null);
switch (G__31316__$1) {
case "nodejs":
case "node":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"nodejs","nodejs",321212524),new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),load_fn_BANG_], null);

break;
case "browser":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),load_fn_BANG_], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31316__$1)].join('')));

}
});

replumb.core.options.cljs$core$IFn$_invoke$arity$3 = (function (target,src_paths,read_file_fn_BANG_){
return replumb.core.options.call(null,target,src_paths,read_file_fn_BANG_,null);
});

replumb.core.options.cljs$core$IFn$_invoke$arity$4 = (function (target,src_paths,read_file_fn_BANG_,write_file_fn_BANG_){
var G__31317 = target;
var G__31317__$1 = (((G__31317 instanceof cljs.core.Keyword))?G__31317.fqn:null);
switch (G__31317__$1) {
case "nodejs":
case "node":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"nodejs","nodejs",321212524),new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191),read_file_fn_BANG_,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603),src_paths,new cljs.core.Keyword(null,"write-file-fn!","write-file-fn!",-535483541),write_file_fn_BANG_], null);

break;
case "browser":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191),read_file_fn_BANG_,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603),src_paths,new cljs.core.Keyword(null,"write-file-fn!","write-file-fn!",-535483541),write_file_fn_BANG_], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31317__$1)].join('')));

}
});

replumb.core.options.cljs$lang$maxFixedArity = 4;

/**
 * Reset the repl and the current compiler state.
 * 
 *   It performs the following (in order):
 * 
 *   1. removes `cljs.js/*loaded*` namespaces from the compiler environment
 *   2. calls `(read-eval-call (in-ns 'cljs.user))`
 *   3. resets the last warning
 *   4. sets `*e` to nil
 *   5. resets the init options (the next eval will trigger an init)
 */
replumb.core.repl_reset_BANG_ = (function replumb$core$repl_reset_BANG_(opts){
if(replumb.repl.empty_cljs_user_QMARK_.call(null)){
} else {
replumb.repl.purge_cljs_user_BANG_.call(null);
}

replumb.repl.read_eval_call.call(null,opts,cljs.core.identity,"(in-ns 'cljs.user)");

replumb.repl.reset_last_warning_BANG_.call(null);

return replumb.repl.read_eval_call.call(null,opts,cljs.core.identity,"(set! *e nil)");
});

//# sourceMappingURL=core.js.map?rel=1557850994841
