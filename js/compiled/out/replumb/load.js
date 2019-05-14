// Compiled by ClojureScript 1.10.439 {}
goog.provide('replumb.load');
goog.require('cljs.core');
goog.require('goog.Promise');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('replumb.common');
goog.require('replumb.cache');
goog.require('cljs.reader');
/**
 * A set containing namespaces already loaded.
 */
replumb.load.loaded_js_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Symbol(null,"cljs.compiler","cljs.compiler",-77239712,null),"null",new cljs.core.Symbol(null,"cljs.source-map.base64","cljs.source-map.base64",-1764326399,null),"null",new cljs.core.Symbol(null,"cljs.source-map.base64-vlq","cljs.source-map.base64-vlq",-397707708,null),"null",new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",880035689,null),"null",new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null),"null",new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),"null",new cljs.core.Symbol(null,"cognitect.transit","cognitect.transit",-750660177,null),"null",new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),"null",new cljs.core.Symbol(null,"cljs.tools.reader.impl.utils","cljs.tools.reader.impl.utils",1797659699,null),"null",new cljs.core.Symbol(null,"cljs.tagged-literals","cljs.tagged-literals",387033363,null),"null",new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null),"null",new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),"null",new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),"null",new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),"null"], null), null);
/**
 * This load function just calls:
 *   (cb {:lang   :js
 *     :source ""})
 */
replumb.load.fake_load_fn_BANG_ = (function replumb$load$fake_load_fn_BANG_(_,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});
/**
 * Mimics "Resource not found" as it just calls: (cb nil)
 */
replumb.load.no_resource_load_fn_BANG_ = (function replumb$load$no_resource_load_fn_BANG_(_,cb){
return cb.call(null,null);
});
/**
 * Converts a filename to a lang keyword by inspecting the file
 *   extension.
 */
replumb.load.filename__GT_lang = (function replumb$load$filename__GT_lang(file_name){
if(clojure.string.ends_with_QMARK_.call(null,file_name,".js")){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
/**
 * Read the cache source depending on whether is a edn or json file
 */
replumb.load.read_cache_source = (function replumb$load$read_cache_source(cache_path,cache_source){
if(clojure.string.ends_with_QMARK_.call(null,cache_path,".edn")){
return cljs.reader.read_string.call(null,cache_source);
} else {
return replumb.cache.transit_json__GT_cljs.call(null,cache_source);
}
});
/**
 * Returns the correct file extensions to try (no dot prefix), following
 *   the cljs.js/*load-fn* docstring.
 */
replumb.load.extensions = (function replumb$load$extensions(var_args){
var G__29670 = arguments.length;
switch (G__29670) {
case 0:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.load.extensions.call(null,false);
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$1 = (function (macros){
if(cljs.core.truth_(macros)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clj","cljc"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs","cljc","js"], null);
}
});

replumb.load.extensions.cljs$lang$maxFixedArity = 1;

/**
 * Loop on the file-names using a supplied read-file-fn (fn [file-name
 *   src-cb] ...), calling back cb upon first successful read, otherwise
 *   calling back with nil.
 *   This function does not check whether parameters are nil, please do it
 *   in the caller.
 */
replumb.load.read_files_and_callback_BANG_ = (function replumb$load$read_files_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb){
var temp__5718__auto__ = cljs.core.first.call(null,file_names);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",name,"...");
} else {
}

return read_file_fn_BANG_.call(null,name,((function (name,temp__5718__auto__){
return (function (source){
if(cljs.core.truth_(source)){
return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"file","file",-1269645878),name], null));
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"No source found...");
} else {
}

return replumb.load.read_files_and_callback_BANG_.call(null,verbose_QMARK_,cljs.core.rest.call(null,file_names),read_file_fn_BANG_,load_fn_cb);
}
});})(name,temp__5718__auto__))
);
} else {
return load_fn_cb.call(null,null);
}
});
replumb.load.read_cache_file = (function replumb$load$read_cache_file(p__29672,js_source){
var map__29673 = p__29672;
var map__29673__$1 = (((((!((map__29673 == null))))?(((((map__29673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29673):map__29673);
var verbose_QMARK_ = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
var js_path = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"js-path","js-path",1036293462));
var cache_path = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"cache-path","cache-path",1799646239));
var try_next_files_pair_fn = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"try-next-files-pair-fn","try-next-files-pair-fn",-584120304));
var load_fn_cb = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"load-fn-cb","load-fn-cb",-59460477));
return read_file_fn_BANG_.call(null,cache_path,((function (map__29673,map__29673__$1,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn,load_fn_cb){
return (function (cache_source){
if(cljs.core.truth_(cache_source)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,["Retrieved JavaScript from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(js_source)?js_path:"<skipped>"))].join(''));

replumb.common.debug_prn.call(null,["Retrieved cache file from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));
} else {
}

return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,js_path),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),replumb.load.read_cache_source.call(null,cache_path,cache_source)], null));
} else {
return try_next_files_pair_fn.call(null);
}
});})(map__29673,map__29673__$1,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn,load_fn_cb))
);
});
replumb.load.read_js_file = (function replumb$load$read_js_file(p__29675,read_cache_file_fn){
var map__29676 = p__29675;
var map__29676__$1 = (((((!((map__29676 == null))))?(((((map__29676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29676):map__29676);
var opts = map__29676__$1;
var verbose_QMARK_ = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
var js_path = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"js-path","js-path",1036293462));
var cache_path = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"cache-path","cache-path",1799646239));
var try_next_files_pair_fn = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"try-next-files-pair-fn","try-next-files-pair-fn",-584120304));
return read_file_fn_BANG_.call(null,js_path,((function (map__29676,map__29676__$1,opts,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn){
return (function (js_source){
if(cljs.core.truth_((function (){var and__4036__auto__ = js_source;
if(cljs.core.truth_(and__4036__auto__)){
return replumb.cache.cached_js_valid_QMARK_.call(null,js_source);
} else {
return and__4036__auto__;
}
})())){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",cache_path,"...");
} else {
}

return read_cache_file_fn.call(null,opts,js_source);
} else {
return try_next_files_pair_fn.call(null);
}
});})(map__29676,map__29676__$1,opts,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn))
);
});
/**
 * Loops over cached-file-names in order to retrieve them. It needs to find
 *   both the related .js file and .cache.json file, otherwise keeps looping.
 *   If it does not find the cached files calls read-files-and-callback! and
 *   tries to load the unevaluated ones.
 *   This function does not check whether parameters are nil, please do it in
 *   the caller.
 */
replumb.load.read_files_from_cache_and_callback_BANG_ = (function replumb$load$read_files_from_cache_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cached_file_names,name){
var temp__5718__auto__ = cljs.core.first.call(null,cached_file_names);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__29678 = temp__5718__auto__;
var js_path = cljs.core.nth.call(null,vec__29678,(0),null);
var cache_path = cljs.core.nth.call(null,vec__29678,(1),null);
var try_next_files_pair = ((function (vec__29678,js_path,cache_path,temp__5718__auto__){
return (function (){
return replumb.load.read_files_from_cache_and_callback_BANG_.call(null,verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cljs.core.rest.call(null,cached_file_names),name);
});})(vec__29678,js_path,cache_path,temp__5718__auto__))
;
var cache_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),verbose_QMARK_,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191),read_file_fn_BANG_,new cljs.core.Keyword(null,"load-fn-cb","load-fn-cb",-59460477),load_fn_cb,new cljs.core.Keyword(null,"js-path","js-path",1036293462),js_path,new cljs.core.Keyword(null,"cache-path","cache-path",1799646239),cache_path,new cljs.core.Keyword(null,"try-next-files-pair-fn","try-next-files-pair-fn",-584120304),try_next_files_pair], null);
if(cljs.core.contains_QMARK_.call(null,replumb.load.loaded_js_set,name)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Skipping js loading for ",name);
} else {
}

return replumb.load.read_cache_file.call(null,cache_opts,null);
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",js_path,"...");
} else {
}

return replumb.load.read_js_file.call(null,cache_opts,replumb.load.read_cache_file);
}
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Cannot load cache files...");
} else {
}

return replumb.load.read_files_and_callback_BANG_.call(null,verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb);
}
});
/**
 * Produces a sequence of file paths based on src-paths and file-path (a
 *   path already including one or more "/" and an extension).
 */
replumb.load.file_paths = (function replumb$load$file_paths(src_paths,file_path){
var iter__4434__auto__ = (function replumb$load$file_paths_$_iter__29681(s__29682){
return (new cljs.core.LazySeq(null,(function (){
var s__29682__$1 = s__29682;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29682__$1);
if(temp__5720__auto__){
var s__29682__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29682__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__29682__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__29684 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__29683 = (0);
while(true){
if((i__29683 < size__4433__auto__)){
var src_path = cljs.core._nth.call(null,c__4432__auto__,i__29683);
cljs.core.chunk_append.call(null,b__29684,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replumb.common.normalize_path.call(null,src_path)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_path)].join(''));

var G__29685 = (i__29683 + (1));
i__29683 = G__29685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29684),replumb$load$file_paths_$_iter__29681.call(null,cljs.core.chunk_rest.call(null,s__29682__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29684),null);
}
} else {
var src_path = cljs.core.first.call(null,s__29682__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replumb.common.normalize_path.call(null,src_path)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_path)].join(''),replumb$load$file_paths_$_iter__29681.call(null,cljs.core.rest.call(null,s__29682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,src_paths);
});
/**
 * Produces a sequence of file names to try reading from src-paths and
 *   file-path-without-ext (it should already include one or more
 *   "/"). The right order and extension is taken from cljs.js/*load-fn*
 *   docstring and takes into consideration the macros parameter.
 */
replumb.load.file_paths_for_load_fn = (function replumb$load$file_paths_for_load_fn(src_paths,macros,file_path_without_ext){
var iter__4434__auto__ = (function replumb$load$file_paths_for_load_fn_$_iter__29686(s__29687){
return (new cljs.core.LazySeq(null,(function (){
var s__29687__$1 = s__29687;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29687__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var extension = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4430__auto__ = ((function (s__29687__$1,extension,xs__6277__auto__,temp__5720__auto__){
return (function replumb$load$file_paths_for_load_fn_$_iter__29686_$_iter__29688(s__29689){
return (new cljs.core.LazySeq(null,((function (s__29687__$1,extension,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29689__$1 = s__29689;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__29689__$1);
if(temp__5720__auto____$1){
var s__29689__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29689__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__29689__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__29691 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__29690 = (0);
while(true){
if((i__29690 < size__4433__auto__)){
var src_path = cljs.core._nth.call(null,c__4432__auto__,i__29690);
cljs.core.chunk_append.call(null,b__29691,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_path),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''));

var G__29692 = (i__29690 + (1));
i__29690 = G__29692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29691),replumb$load$file_paths_for_load_fn_$_iter__29686_$_iter__29688.call(null,cljs.core.chunk_rest.call(null,s__29689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29691),null);
}
} else {
var src_path = cljs.core.first.call(null,s__29689__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_path),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),replumb$load$file_paths_for_load_fn_$_iter__29686_$_iter__29688.call(null,cljs.core.rest.call(null,s__29689__$2)));
}
} else {
return null;
}
break;
}
});})(s__29687__$1,extension,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29687__$1,extension,xs__6277__auto__,temp__5720__auto__))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,replumb.load.file_paths.call(null,src_paths,file_path_without_ext)));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,replumb$load$file_paths_for_load_fn_$_iter__29686.call(null,cljs.core.rest.call(null,s__29687__$1)));
} else {
var G__29693 = cljs.core.rest.call(null,s__29687__$1);
s__29687__$1 = G__29693;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,replumb.load.extensions.call(null,macros));
});
/**
 * Produces a sequence of pairs containing the file paths to try reading for
 *   evaluation caching.
 *   The first file is always a ".js" file while the second is the cache file
 *   and can be a ".json" or ".edn" file.
 */
replumb.load.cache_file_paths_for_load_fn = (function replumb$load$cache_file_paths_for_load_fn(cache_paths,macros,file_path_without_ext){
var iter__4434__auto__ = (function replumb$load$cache_file_paths_for_load_fn_$_iter__29695(s__29696){
return (new cljs.core.LazySeq(null,(function (){
var s__29696__$1 = s__29696;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29696__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var extension = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4430__auto__ = ((function (s__29696__$1,extension,xs__6277__auto__,temp__5720__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__29695_$_iter__29697(s__29698){
return (new cljs.core.LazySeq(null,((function (s__29696__$1,extension,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29698__$1 = s__29698;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__29698__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var cache_extension = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4430__auto__ = ((function (s__29698__$1,s__29696__$1,cache_extension,xs__6277__auto____$1,temp__5720__auto____$1,extension,xs__6277__auto__,temp__5720__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__29695_$_iter__29697_$_iter__29699(s__29700){
return (new cljs.core.LazySeq(null,((function (s__29698__$1,s__29696__$1,cache_extension,xs__6277__auto____$1,temp__5720__auto____$1,extension,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29700__$1 = s__29700;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__29700__$1);
if(temp__5720__auto____$2){
var s__29700__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29700__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__29700__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__29702 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__29701 = (0);
while(true){
if((i__29701 < size__4433__auto__)){
var src_path = cljs.core._nth.call(null,c__4432__auto__,i__29701);
cljs.core.chunk_append.call(null,b__29702,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_path),".js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_extension)].join('')], null));

var G__29703 = (i__29701 + (1));
i__29701 = G__29703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29702),replumb$load$cache_file_paths_for_load_fn_$_iter__29695_$_iter__29697_$_iter__29699.call(null,cljs.core.chunk_rest.call(null,s__29700__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29702),null);
}
} else {
var src_path = cljs.core.first.call(null,s__29700__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_path),".js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_extension)].join('')], null),replumb$load$cache_file_paths_for_load_fn_$_iter__29695_$_iter__29697_$_iter__29699.call(null,cljs.core.rest.call(null,s__29700__$2)));
}
} else {
return null;
}
break;
}
});})(s__29698__$1,s__29696__$1,cache_extension,xs__6277__auto____$1,temp__5720__auto____$1,extension,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29698__$1,s__29696__$1,cache_extension,xs__6277__auto____$1,temp__5720__auto____$1,extension,xs__6277__auto__,temp__5720__auto__))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,cljs.core.into.call(null,replumb.load.file_paths.call(null,cache_paths,file_path_without_ext),replumb.load.file_paths.call(null,cache_paths,replumb.cache.cache_prefix_for_path.call(null,file_path_without_ext,macros)))));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__29695_$_iter__29697.call(null,cljs.core.rest.call(null,s__29698__$1)));
} else {
var G__29704 = cljs.core.rest.call(null,s__29698__$1);
s__29698__$1 = G__29704;
continue;
}
} else {
return null;
}
break;
}
});})(s__29696__$1,extension,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29696__$1,extension,xs__6277__auto__,temp__5720__auto__))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cache.json",".cache.edn"], null)));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__29695.call(null,cljs.core.rest.call(null,s__29696__$1)));
} else {
var G__29705 = cljs.core.rest.call(null,s__29696__$1);
s__29696__$1 = G__29705;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,((function (iter__4434__auto__){
return (function (p1__29694_SHARP_){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29694_SHARP_)].join('');
});})(iter__4434__auto__))
,replumb.load.extensions.call(null,macros))));
});
/**
 * Produces a sequence of file paths to try reading crafted for goog
 *   libraries, in the order they should be tried.
 */
replumb.load.file_paths_for_closure = (function replumb$load$file_paths_for_closure(src_paths,goog_path){
var iter__4434__auto__ = (function replumb$load$file_paths_for_closure_$_iter__29706(s__29707){
return (new cljs.core.LazySeq(null,(function (){
var s__29707__$1 = s__29707;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29707__$1);
if(temp__5720__auto__){
var s__29707__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29707__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__29707__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__29709 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__29708 = (0);
while(true){
if((i__29708 < size__4433__auto__)){
var src_path = cljs.core._nth.call(null,c__4432__auto__,i__29708);
cljs.core.chunk_append.call(null,b__29709,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replumb.common.normalize_path.call(null,src_path)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_path),".js"].join(''));

var G__29710 = (i__29708 + (1));
i__29708 = G__29710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29709),replumb$load$file_paths_for_closure_$_iter__29706.call(null,cljs.core.chunk_rest.call(null,s__29707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29709),null);
}
} else {
var src_path = cljs.core.first.call(null,s__29707__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replumb.common.normalize_path.call(null,src_path)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_path),".js"].join(''),replumb$load$file_paths_for_closure_$_iter__29706.call(null,cljs.core.rest.call(null,s__29707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,src_paths);
});
/**
 * Given the content of goog/deps.js file, create a map
 *   provide->path (without extension) of Google dependencies.
 * 
 *   Adapted from planck:
 *   https://github.com/mfikes/planck/blob/master/planck-cljs/src/planck/repl.cljs#L438-L451
 */
replumb.load.goog_deps_map = (function replumb$load$goog_deps_map(deps_js_content){
var paths_to_provides = cljs.core.map.call(null,(function (p__29711){
var vec__29712 = p__29711;
var _ = cljs.core.nth.call(null,vec__29712,(0),null);
var path = cljs.core.nth.call(null,vec__29712,(1),null);
var provides = cljs.core.nth.call(null,vec__29712,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/'(.*?)'/,provides))], null);
}),cljs.core.re_seq.call(null,/\ngoog\.addDependency\('(.*)', \[(.*?)\].*/,deps_js_content));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = ((function (paths_to_provides){
return (function replumb$load$goog_deps_map_$_iter__29715(s__29716){
return (new cljs.core.LazySeq(null,((function (paths_to_provides){
return (function (){
var s__29716__$1 = s__29716;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29716__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__29721 = cljs.core.first.call(null,xs__6277__auto__);
var path = cljs.core.nth.call(null,vec__29721,(0),null);
var provides = cljs.core.nth.call(null,vec__29721,(1),null);
var iterys__4430__auto__ = ((function (s__29716__$1,vec__29721,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides){
return (function replumb$load$goog_deps_map_$_iter__29715_$_iter__29717(s__29718){
return (new cljs.core.LazySeq(null,((function (s__29716__$1,vec__29721,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides){
return (function (){
var s__29718__$1 = s__29718;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__29718__$1);
if(temp__5720__auto____$1){
var s__29718__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29718__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__29718__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__29720 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__29719 = (0);
while(true){
if((i__29719 < size__4433__auto__)){
var provide = cljs.core._nth.call(null,c__4432__auto__,i__29719);
cljs.core.chunk_append.call(null,b__29720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null));

var G__29724 = (i__29719 + (1));
i__29719 = G__29724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29720),replumb$load$goog_deps_map_$_iter__29715_$_iter__29717.call(null,cljs.core.chunk_rest.call(null,s__29718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29720),null);
}
} else {
var provide = cljs.core.first.call(null,s__29718__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null),replumb$load$goog_deps_map_$_iter__29715_$_iter__29717.call(null,cljs.core.rest.call(null,s__29718__$2)));
}
} else {
return null;
}
break;
}
});})(s__29716__$1,vec__29721,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides))
,null,null));
});})(s__29716__$1,vec__29721,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,provides));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,replumb$load$goog_deps_map_$_iter__29715.call(null,cljs.core.rest.call(null,s__29716__$1)));
} else {
var G__29725 = cljs.core.rest.call(null,s__29716__$1);
s__29716__$1 = G__29725;
continue;
}
} else {
return null;
}
break;
}
});})(paths_to_provides))
,null,null));
});})(paths_to_provides))
;
return iter__4434__auto__.call(null,paths_to_provides);
})());
});
/**
 * Return a promise that resolves with the result of accumulating the
 *   actual call to replumb.repl/read-eval-call on the source with results.
 */
replumb.load.read_goog_file_promise = (function replumb$load$read_goog_file_promise(verbose_QMARK_,read_file_fn_BANG_,path,results){
if(cljs.core.map_QMARK_.call(null,results)){
} else {
throw (new Error("Assert failed: (map? results)"));
}

return (new goog.Promise((function (resolve,_){
var deps_path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(replumb.common.normalize_path.call(null,path)),"goog/deps.js"].join('');
return read_file_fn_BANG_.call(null,deps_path,((function (deps_path){
return (function (content){
return resolve.call(null,(cljs.core.truth_(content)?(function (){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Found valid",deps_path);
} else {
}

return cljs.core.merge.call(null,results,replumb.load.goog_deps_map.call(null,content));
})()
:results));
});})(deps_path))
);
})));
});
/**
 * Return a promise containing a map Google Closure symbol -> file
 *   path (string without extension) as in:
 * 
 *   {goog.a11y.aria.DropEffectValues "goog/a11y/aria/attributes"
 * goog.labs.i18n.ListFormatSymbols_en_BW "goog/labs/i18n/listsymbolsext"
 * ...}
 * 
 *   It merges maps if many deps.js are on the source path, precedence to
 *   the rightmost (as per merge).
 */
replumb.load.goog_closure_index_promise_BANG_ = (function replumb$load$goog_closure_index_promise_BANG_(verbose_QMARK_,src_paths,read_file_fn_BANG_){
var read_promise = cljs.core.partial.call(null,replumb.load.read_goog_file_promise,verbose_QMARK_,read_file_fn_BANG_);
if(cljs.core.truth_(read_file_fn_BANG_)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Discovering goog/deps.js in",src_paths);
} else {
}

return cljs.core.reduce.call(null,((function (read_promise){
return (function (pmses,path){
return pmses.then(((function (read_promise){
return (function (p1__29726_SHARP_){
return read_promise.call(null,path,p1__29726_SHARP_);
});})(read_promise))
,((function (read_promise){
return (function (){
return read_promise.call(null,path,cljs.core.PersistentArrayMap.EMPTY);
});})(read_promise))
);
});})(read_promise))
,goog.Promise.resolve.call(null,cljs.core.PersistentArrayMap.EMPTY),src_paths);
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"No :read-file-fn! provided, skipping goog/deps.js discovering...");
} else {
}

return goog.Promise.resolve.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
});
replumb.load.skip_load_QMARK_ = (function replumb$load$skip_load_QMARK_(p__29727){
var map__29728 = p__29727;
var map__29728__$1 = (((((!((map__29728 == null))))?(((((map__29728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29728):map__29728);
var name = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var or__4047__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null));
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__4036__auto__){
return macros;
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
var or__4047__auto____$3 = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null));
if(and__4036__auto__){
return macros;
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$3)){
return or__4047__auto____$3;
} else {
var and__4036__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null));
if(and__4036__auto__){
return macros;
} else {
return and__4036__auto__;
}
}
}
}
}
});

//# sourceMappingURL=load.js.map?rel=1557850993253
