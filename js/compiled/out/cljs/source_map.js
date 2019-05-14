// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__22937){
var vec__22938 = p__22937;
var i = cljs.core.nth.call(null,vec__22938,(0),null);
var v = cljs.core.nth.call(null,vec__22938,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__22941 = seg;
var gcol = cljs.core.nth.call(null,vec__22941,(0),null);
var source = cljs.core.nth.call(null,vec__22941,(1),null);
var line = cljs.core.nth.call(null,vec__22941,(2),null);
var col = cljs.core.nth.call(null,vec__22941,(3),null);
var name = cljs.core.nth.call(null,vec__22941,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__22944 = seg;
var gcol = cljs.core.nth.call(null,vec__22944,(0),null);
var source = cljs.core.nth.call(null,vec__22944,(1),null);
var line = cljs.core.nth.call(null,vec__22944,(2),null);
var col = cljs.core.nth.call(null,vec__22944,(3),null);
var name = cljs.core.nth.call(null,vec__22944,(4),null);
var vec__22947 = relseg;
var rgcol = cljs.core.nth.call(null,vec__22947,(0),null);
var rsource = cljs.core.nth.call(null,vec__22947,(1),null);
var rline = cljs.core.nth.call(null,vec__22947,(2),null);
var rcol = cljs.core.nth.call(null,vec__22947,(3),null);
var rname = cljs.core.nth.call(null,vec__22947,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4047__auto__ = source;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4047__auto__ = line;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4047__auto__ = col;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__22950 = segmap;
var map__22950__$1 = (((((!((map__22950 == null))))?(((((map__22950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22950):map__22950);
var gcol = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__22950,map__22950__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__22950,map__22950__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__22950,map__22950__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__22950,map__22950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__22950,map__22950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__22950,map__22950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__22953 = arguments.length;
switch (G__22953) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__22954 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22958 = cljs.core.next.call(null,segs__$1);
var G__22959 = nrelseg;
var G__22960 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22958;
relseg__$1 = G__22959;
result__$1 = G__22960;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22954,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22954,(1),null);
var G__22961 = (gline + (1));
var G__22962 = cljs.core.next.call(null,lines__$1);
var G__22963 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22964 = result__$1;
gline = G__22961;
lines__$1 = G__22962;
relseg = G__22963;
result = G__22964;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__22966 = segmap;
var map__22966__$1 = (((((!((map__22966 == null))))?(((((map__22966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22966):map__22966);
var gcol = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__22966,map__22966__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__22966,map__22966__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__22965_SHARP_){
return cljs.core.conj.call(null,p1__22965_SHARP_,d__$1);
});})(map__22966,map__22966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__22966,map__22966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22969 = arguments.length;
switch (G__22969) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__22970 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22974 = cljs.core.next.call(null,segs__$1);
var G__22975 = nrelseg;
var G__22976 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22974;
relseg__$1 = G__22975;
result__$1 = G__22976;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22970,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22970,(1),null);
var G__22977 = (gline + (1));
var G__22978 = cljs.core.next.call(null,lines__$1);
var G__22979 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22980 = result__$1;
gline = G__22977;
lines__$1 = G__22978;
relseg = G__22979;
result = G__22980;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__22981){
var vec__22982 = p__22981;
var _ = cljs.core.nth.call(null,vec__22982,(0),null);
var source = cljs.core.nth.call(null,vec__22982,(1),null);
var line = cljs.core.nth.call(null,vec__22982,(2),null);
var col = cljs.core.nth.call(null,vec__22982,(3),null);
var name = cljs.core.nth.call(null,vec__22982,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__22985){
var vec__22986 = p__22985;
var gcol = cljs.core.nth.call(null,vec__22986,(0),null);
var sidx = cljs.core.nth.call(null,vec__22986,(1),null);
var line = cljs.core.nth.call(null,vec__22986,(2),null);
var col = cljs.core.nth.call(null,vec__22986,(3),null);
var name = cljs.core.nth.call(null,vec__22986,(4),null);
var seg = vec__22986;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__22986,gcol,sidx,line,col,name,seg,relseg){
return (function (p__22989){
var vec__22990 = p__22989;
var _ = cljs.core.nth.call(null,vec__22990,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22990,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22990,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__22990,(3),null);
var lname = cljs.core.nth.call(null,vec__22990,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__22986,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__22996 = cljs.core.seq.call(null,infos);
var chunk__22997 = null;
var count__22998 = (0);
var i__22999 = (0);
while(true){
if((i__22999 < count__22998)){
var info = cljs.core._nth.call(null,chunk__22997,i__22999);
var segv_23078 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_23079 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23080 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_23079 > (lc_23080 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22996,chunk__22997,count__22998,i__22999,segv_23078,gline_23079,lc_23080,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_23079 - (lc_23080 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23078], null));
});})(seq__22996,chunk__22997,count__22998,i__22999,segv_23078,gline_23079,lc_23080,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22996,chunk__22997,count__22998,i__22999,segv_23078,gline_23079,lc_23080,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23079], null),cljs.core.conj,segv_23078);
});})(seq__22996,chunk__22997,count__22998,i__22999,segv_23078,gline_23079,lc_23080,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23081 = seq__22996;
var G__23082 = chunk__22997;
var G__23083 = count__22998;
var G__23084 = (i__22999 + (1));
seq__22996 = G__23081;
chunk__22997 = G__23082;
count__22998 = G__23083;
i__22999 = G__23084;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22996);
if(temp__5720__auto__){
var seq__22996__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22996__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22996__$1);
var G__23085 = cljs.core.chunk_rest.call(null,seq__22996__$1);
var G__23086 = c__4461__auto__;
var G__23087 = cljs.core.count.call(null,c__4461__auto__);
var G__23088 = (0);
seq__22996 = G__23085;
chunk__22997 = G__23086;
count__22998 = G__23087;
i__22999 = G__23088;
continue;
} else {
var info = cljs.core.first.call(null,seq__22996__$1);
var segv_23089 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_23090 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23091 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_23090 > (lc_23091 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22996,chunk__22997,count__22998,i__22999,segv_23089,gline_23090,lc_23091,info,seq__22996__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_23090 - (lc_23091 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23089], null));
});})(seq__22996,chunk__22997,count__22998,i__22999,segv_23089,gline_23090,lc_23091,info,seq__22996__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22996,chunk__22997,count__22998,i__22999,segv_23089,gline_23090,lc_23091,info,seq__22996__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23090], null),cljs.core.conj,segv_23089);
});})(seq__22996,chunk__22997,count__22998,i__22999,segv_23089,gline_23090,lc_23091,info,seq__22996__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23092 = cljs.core.next.call(null,seq__22996__$1);
var G__23093 = null;
var G__23094 = (0);
var G__23095 = (0);
seq__22996 = G__23092;
chunk__22997 = G__23093;
count__22998 = G__23094;
i__22999 = G__23095;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__23000_23096 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__23001_23097 = null;
var count__23002_23098 = (0);
var i__23003_23099 = (0);
while(true){
if((i__23003_23099 < count__23002_23098)){
var vec__23004_23100 = cljs.core._nth.call(null,chunk__23001_23097,i__23003_23099);
var source_idx_23101 = cljs.core.nth.call(null,vec__23004_23100,(0),null);
var vec__23007_23102 = cljs.core.nth.call(null,vec__23004_23100,(1),null);
var __23103 = cljs.core.nth.call(null,vec__23007_23102,(0),null);
var lines_23104__$1 = cljs.core.nth.call(null,vec__23007_23102,(1),null);
var seq__23010_23105 = cljs.core.seq.call(null,lines_23104__$1);
var chunk__23011_23106 = null;
var count__23012_23107 = (0);
var i__23013_23108 = (0);
while(true){
if((i__23013_23108 < count__23012_23107)){
var vec__23014_23109 = cljs.core._nth.call(null,chunk__23011_23106,i__23013_23108);
var line_23110 = cljs.core.nth.call(null,vec__23014_23109,(0),null);
var cols_23111 = cljs.core.nth.call(null,vec__23014_23109,(1),null);
var seq__23017_23112 = cljs.core.seq.call(null,cols_23111);
var chunk__23018_23113 = null;
var count__23019_23114 = (0);
var i__23020_23115 = (0);
while(true){
if((i__23020_23115 < count__23019_23114)){
var vec__23021_23116 = cljs.core._nth.call(null,chunk__23018_23113,i__23020_23115);
var col_23117 = cljs.core.nth.call(null,vec__23021_23116,(0),null);
var infos_23118 = cljs.core.nth.call(null,vec__23021_23116,(1),null);
encode_cols.call(null,infos_23118,source_idx_23101,line_23110,col_23117);


var G__23119 = seq__23017_23112;
var G__23120 = chunk__23018_23113;
var G__23121 = count__23019_23114;
var G__23122 = (i__23020_23115 + (1));
seq__23017_23112 = G__23119;
chunk__23018_23113 = G__23120;
count__23019_23114 = G__23121;
i__23020_23115 = G__23122;
continue;
} else {
var temp__5720__auto___23123 = cljs.core.seq.call(null,seq__23017_23112);
if(temp__5720__auto___23123){
var seq__23017_23124__$1 = temp__5720__auto___23123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23017_23124__$1)){
var c__4461__auto___23125 = cljs.core.chunk_first.call(null,seq__23017_23124__$1);
var G__23126 = cljs.core.chunk_rest.call(null,seq__23017_23124__$1);
var G__23127 = c__4461__auto___23125;
var G__23128 = cljs.core.count.call(null,c__4461__auto___23125);
var G__23129 = (0);
seq__23017_23112 = G__23126;
chunk__23018_23113 = G__23127;
count__23019_23114 = G__23128;
i__23020_23115 = G__23129;
continue;
} else {
var vec__23024_23130 = cljs.core.first.call(null,seq__23017_23124__$1);
var col_23131 = cljs.core.nth.call(null,vec__23024_23130,(0),null);
var infos_23132 = cljs.core.nth.call(null,vec__23024_23130,(1),null);
encode_cols.call(null,infos_23132,source_idx_23101,line_23110,col_23131);


var G__23133 = cljs.core.next.call(null,seq__23017_23124__$1);
var G__23134 = null;
var G__23135 = (0);
var G__23136 = (0);
seq__23017_23112 = G__23133;
chunk__23018_23113 = G__23134;
count__23019_23114 = G__23135;
i__23020_23115 = G__23136;
continue;
}
} else {
}
}
break;
}


var G__23137 = seq__23010_23105;
var G__23138 = chunk__23011_23106;
var G__23139 = count__23012_23107;
var G__23140 = (i__23013_23108 + (1));
seq__23010_23105 = G__23137;
chunk__23011_23106 = G__23138;
count__23012_23107 = G__23139;
i__23013_23108 = G__23140;
continue;
} else {
var temp__5720__auto___23141 = cljs.core.seq.call(null,seq__23010_23105);
if(temp__5720__auto___23141){
var seq__23010_23142__$1 = temp__5720__auto___23141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23010_23142__$1)){
var c__4461__auto___23143 = cljs.core.chunk_first.call(null,seq__23010_23142__$1);
var G__23144 = cljs.core.chunk_rest.call(null,seq__23010_23142__$1);
var G__23145 = c__4461__auto___23143;
var G__23146 = cljs.core.count.call(null,c__4461__auto___23143);
var G__23147 = (0);
seq__23010_23105 = G__23144;
chunk__23011_23106 = G__23145;
count__23012_23107 = G__23146;
i__23013_23108 = G__23147;
continue;
} else {
var vec__23027_23148 = cljs.core.first.call(null,seq__23010_23142__$1);
var line_23149 = cljs.core.nth.call(null,vec__23027_23148,(0),null);
var cols_23150 = cljs.core.nth.call(null,vec__23027_23148,(1),null);
var seq__23030_23151 = cljs.core.seq.call(null,cols_23150);
var chunk__23031_23152 = null;
var count__23032_23153 = (0);
var i__23033_23154 = (0);
while(true){
if((i__23033_23154 < count__23032_23153)){
var vec__23034_23155 = cljs.core._nth.call(null,chunk__23031_23152,i__23033_23154);
var col_23156 = cljs.core.nth.call(null,vec__23034_23155,(0),null);
var infos_23157 = cljs.core.nth.call(null,vec__23034_23155,(1),null);
encode_cols.call(null,infos_23157,source_idx_23101,line_23149,col_23156);


var G__23158 = seq__23030_23151;
var G__23159 = chunk__23031_23152;
var G__23160 = count__23032_23153;
var G__23161 = (i__23033_23154 + (1));
seq__23030_23151 = G__23158;
chunk__23031_23152 = G__23159;
count__23032_23153 = G__23160;
i__23033_23154 = G__23161;
continue;
} else {
var temp__5720__auto___23162__$1 = cljs.core.seq.call(null,seq__23030_23151);
if(temp__5720__auto___23162__$1){
var seq__23030_23163__$1 = temp__5720__auto___23162__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23030_23163__$1)){
var c__4461__auto___23164 = cljs.core.chunk_first.call(null,seq__23030_23163__$1);
var G__23165 = cljs.core.chunk_rest.call(null,seq__23030_23163__$1);
var G__23166 = c__4461__auto___23164;
var G__23167 = cljs.core.count.call(null,c__4461__auto___23164);
var G__23168 = (0);
seq__23030_23151 = G__23165;
chunk__23031_23152 = G__23166;
count__23032_23153 = G__23167;
i__23033_23154 = G__23168;
continue;
} else {
var vec__23037_23169 = cljs.core.first.call(null,seq__23030_23163__$1);
var col_23170 = cljs.core.nth.call(null,vec__23037_23169,(0),null);
var infos_23171 = cljs.core.nth.call(null,vec__23037_23169,(1),null);
encode_cols.call(null,infos_23171,source_idx_23101,line_23149,col_23170);


var G__23172 = cljs.core.next.call(null,seq__23030_23163__$1);
var G__23173 = null;
var G__23174 = (0);
var G__23175 = (0);
seq__23030_23151 = G__23172;
chunk__23031_23152 = G__23173;
count__23032_23153 = G__23174;
i__23033_23154 = G__23175;
continue;
}
} else {
}
}
break;
}


var G__23176 = cljs.core.next.call(null,seq__23010_23142__$1);
var G__23177 = null;
var G__23178 = (0);
var G__23179 = (0);
seq__23010_23105 = G__23176;
chunk__23011_23106 = G__23177;
count__23012_23107 = G__23178;
i__23013_23108 = G__23179;
continue;
}
} else {
}
}
break;
}


var G__23180 = seq__23000_23096;
var G__23181 = chunk__23001_23097;
var G__23182 = count__23002_23098;
var G__23183 = (i__23003_23099 + (1));
seq__23000_23096 = G__23180;
chunk__23001_23097 = G__23181;
count__23002_23098 = G__23182;
i__23003_23099 = G__23183;
continue;
} else {
var temp__5720__auto___23184 = cljs.core.seq.call(null,seq__23000_23096);
if(temp__5720__auto___23184){
var seq__23000_23185__$1 = temp__5720__auto___23184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23000_23185__$1)){
var c__4461__auto___23186 = cljs.core.chunk_first.call(null,seq__23000_23185__$1);
var G__23187 = cljs.core.chunk_rest.call(null,seq__23000_23185__$1);
var G__23188 = c__4461__auto___23186;
var G__23189 = cljs.core.count.call(null,c__4461__auto___23186);
var G__23190 = (0);
seq__23000_23096 = G__23187;
chunk__23001_23097 = G__23188;
count__23002_23098 = G__23189;
i__23003_23099 = G__23190;
continue;
} else {
var vec__23040_23191 = cljs.core.first.call(null,seq__23000_23185__$1);
var source_idx_23192 = cljs.core.nth.call(null,vec__23040_23191,(0),null);
var vec__23043_23193 = cljs.core.nth.call(null,vec__23040_23191,(1),null);
var __23194 = cljs.core.nth.call(null,vec__23043_23193,(0),null);
var lines_23195__$1 = cljs.core.nth.call(null,vec__23043_23193,(1),null);
var seq__23046_23196 = cljs.core.seq.call(null,lines_23195__$1);
var chunk__23047_23197 = null;
var count__23048_23198 = (0);
var i__23049_23199 = (0);
while(true){
if((i__23049_23199 < count__23048_23198)){
var vec__23050_23200 = cljs.core._nth.call(null,chunk__23047_23197,i__23049_23199);
var line_23201 = cljs.core.nth.call(null,vec__23050_23200,(0),null);
var cols_23202 = cljs.core.nth.call(null,vec__23050_23200,(1),null);
var seq__23053_23203 = cljs.core.seq.call(null,cols_23202);
var chunk__23054_23204 = null;
var count__23055_23205 = (0);
var i__23056_23206 = (0);
while(true){
if((i__23056_23206 < count__23055_23205)){
var vec__23057_23207 = cljs.core._nth.call(null,chunk__23054_23204,i__23056_23206);
var col_23208 = cljs.core.nth.call(null,vec__23057_23207,(0),null);
var infos_23209 = cljs.core.nth.call(null,vec__23057_23207,(1),null);
encode_cols.call(null,infos_23209,source_idx_23192,line_23201,col_23208);


var G__23210 = seq__23053_23203;
var G__23211 = chunk__23054_23204;
var G__23212 = count__23055_23205;
var G__23213 = (i__23056_23206 + (1));
seq__23053_23203 = G__23210;
chunk__23054_23204 = G__23211;
count__23055_23205 = G__23212;
i__23056_23206 = G__23213;
continue;
} else {
var temp__5720__auto___23214__$1 = cljs.core.seq.call(null,seq__23053_23203);
if(temp__5720__auto___23214__$1){
var seq__23053_23215__$1 = temp__5720__auto___23214__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23053_23215__$1)){
var c__4461__auto___23216 = cljs.core.chunk_first.call(null,seq__23053_23215__$1);
var G__23217 = cljs.core.chunk_rest.call(null,seq__23053_23215__$1);
var G__23218 = c__4461__auto___23216;
var G__23219 = cljs.core.count.call(null,c__4461__auto___23216);
var G__23220 = (0);
seq__23053_23203 = G__23217;
chunk__23054_23204 = G__23218;
count__23055_23205 = G__23219;
i__23056_23206 = G__23220;
continue;
} else {
var vec__23060_23221 = cljs.core.first.call(null,seq__23053_23215__$1);
var col_23222 = cljs.core.nth.call(null,vec__23060_23221,(0),null);
var infos_23223 = cljs.core.nth.call(null,vec__23060_23221,(1),null);
encode_cols.call(null,infos_23223,source_idx_23192,line_23201,col_23222);


var G__23224 = cljs.core.next.call(null,seq__23053_23215__$1);
var G__23225 = null;
var G__23226 = (0);
var G__23227 = (0);
seq__23053_23203 = G__23224;
chunk__23054_23204 = G__23225;
count__23055_23205 = G__23226;
i__23056_23206 = G__23227;
continue;
}
} else {
}
}
break;
}


var G__23228 = seq__23046_23196;
var G__23229 = chunk__23047_23197;
var G__23230 = count__23048_23198;
var G__23231 = (i__23049_23199 + (1));
seq__23046_23196 = G__23228;
chunk__23047_23197 = G__23229;
count__23048_23198 = G__23230;
i__23049_23199 = G__23231;
continue;
} else {
var temp__5720__auto___23232__$1 = cljs.core.seq.call(null,seq__23046_23196);
if(temp__5720__auto___23232__$1){
var seq__23046_23233__$1 = temp__5720__auto___23232__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23046_23233__$1)){
var c__4461__auto___23234 = cljs.core.chunk_first.call(null,seq__23046_23233__$1);
var G__23235 = cljs.core.chunk_rest.call(null,seq__23046_23233__$1);
var G__23236 = c__4461__auto___23234;
var G__23237 = cljs.core.count.call(null,c__4461__auto___23234);
var G__23238 = (0);
seq__23046_23196 = G__23235;
chunk__23047_23197 = G__23236;
count__23048_23198 = G__23237;
i__23049_23199 = G__23238;
continue;
} else {
var vec__23063_23239 = cljs.core.first.call(null,seq__23046_23233__$1);
var line_23240 = cljs.core.nth.call(null,vec__23063_23239,(0),null);
var cols_23241 = cljs.core.nth.call(null,vec__23063_23239,(1),null);
var seq__23066_23242 = cljs.core.seq.call(null,cols_23241);
var chunk__23067_23243 = null;
var count__23068_23244 = (0);
var i__23069_23245 = (0);
while(true){
if((i__23069_23245 < count__23068_23244)){
var vec__23070_23246 = cljs.core._nth.call(null,chunk__23067_23243,i__23069_23245);
var col_23247 = cljs.core.nth.call(null,vec__23070_23246,(0),null);
var infos_23248 = cljs.core.nth.call(null,vec__23070_23246,(1),null);
encode_cols.call(null,infos_23248,source_idx_23192,line_23240,col_23247);


var G__23249 = seq__23066_23242;
var G__23250 = chunk__23067_23243;
var G__23251 = count__23068_23244;
var G__23252 = (i__23069_23245 + (1));
seq__23066_23242 = G__23249;
chunk__23067_23243 = G__23250;
count__23068_23244 = G__23251;
i__23069_23245 = G__23252;
continue;
} else {
var temp__5720__auto___23253__$2 = cljs.core.seq.call(null,seq__23066_23242);
if(temp__5720__auto___23253__$2){
var seq__23066_23254__$1 = temp__5720__auto___23253__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23066_23254__$1)){
var c__4461__auto___23255 = cljs.core.chunk_first.call(null,seq__23066_23254__$1);
var G__23256 = cljs.core.chunk_rest.call(null,seq__23066_23254__$1);
var G__23257 = c__4461__auto___23255;
var G__23258 = cljs.core.count.call(null,c__4461__auto___23255);
var G__23259 = (0);
seq__23066_23242 = G__23256;
chunk__23067_23243 = G__23257;
count__23068_23244 = G__23258;
i__23069_23245 = G__23259;
continue;
} else {
var vec__23073_23260 = cljs.core.first.call(null,seq__23066_23254__$1);
var col_23261 = cljs.core.nth.call(null,vec__23073_23260,(0),null);
var infos_23262 = cljs.core.nth.call(null,vec__23073_23260,(1),null);
encode_cols.call(null,infos_23262,source_idx_23192,line_23240,col_23261);


var G__23263 = cljs.core.next.call(null,seq__23066_23254__$1);
var G__23264 = null;
var G__23265 = (0);
var G__23266 = (0);
seq__23066_23242 = G__23263;
chunk__23067_23243 = G__23264;
count__23068_23244 = G__23265;
i__23069_23245 = G__23266;
continue;
}
} else {
}
}
break;
}


var G__23267 = cljs.core.next.call(null,seq__23046_23233__$1);
var G__23268 = null;
var G__23269 = (0);
var G__23270 = (0);
seq__23046_23196 = G__23267;
chunk__23047_23197 = G__23268;
count__23048_23198 = G__23269;
i__23049_23199 = G__23270;
continue;
}
} else {
}
}
break;
}


var G__23271 = cljs.core.next.call(null,seq__23000_23185__$1);
var G__23272 = null;
var G__23273 = (0);
var G__23274 = (0);
seq__23000_23096 = G__23271;
chunk__23001_23097 = G__23272;
count__23002_23098 = G__23273;
i__23003_23099 = G__23274;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23076 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22993_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22993_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22994_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__22994_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22995_SHARP_){
return clojure.string.join.call(null,",",p1__22995_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23077 = G__23076;
goog.object.set(G__23077,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23077;
} else {
return G__23076;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__23275 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__23275,(0),null);
var col_map = cljs.core.nth.call(null,vec__23275,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__23278 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__23278,(0),null);
var infos = cljs.core.nth.call(null,vec__23278,(1),null);
var G__23284 = cljs.core.next.call(null,col_map_seq);
var G__23285 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23278,col,infos,vec__23275,line,col_map){
return (function (v,p__23281){
var map__23282 = p__23281;
var map__23282__$1 = (((((!((map__23282 == null))))?(((((map__23282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23282):map__23282);
var gline = cljs.core.get.call(null,map__23282__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__23282__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23278,col,infos,vec__23275,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23284;
new_cols = G__23285;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23286 = cljs.core.next.call(null,line_map_seq);
var G__23287 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__23286;
new_lines = G__23287;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__23288_23350 = cljs.core.seq.call(null,reverse_map);
var chunk__23289_23351 = null;
var count__23290_23352 = (0);
var i__23291_23353 = (0);
while(true){
if((i__23291_23353 < count__23290_23352)){
var vec__23292_23354 = cljs.core._nth.call(null,chunk__23289_23351,i__23291_23353);
var line_23355 = cljs.core.nth.call(null,vec__23292_23354,(0),null);
var columns_23356 = cljs.core.nth.call(null,vec__23292_23354,(1),null);
var seq__23295_23357 = cljs.core.seq.call(null,columns_23356);
var chunk__23296_23358 = null;
var count__23297_23359 = (0);
var i__23298_23360 = (0);
while(true){
if((i__23298_23360 < count__23297_23359)){
var vec__23299_23361 = cljs.core._nth.call(null,chunk__23296_23358,i__23298_23360);
var column_23362 = cljs.core.nth.call(null,vec__23299_23361,(0),null);
var column_info_23363 = cljs.core.nth.call(null,vec__23299_23361,(1),null);
var seq__23302_23364 = cljs.core.seq.call(null,column_info_23363);
var chunk__23303_23365 = null;
var count__23304_23366 = (0);
var i__23305_23367 = (0);
while(true){
if((i__23305_23367 < count__23304_23366)){
var map__23306_23368 = cljs.core._nth.call(null,chunk__23303_23365,i__23305_23367);
var map__23306_23369__$1 = (((((!((map__23306_23368 == null))))?(((((map__23306_23368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23306_23368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23306_23368):map__23306_23368);
var gline_23370 = cljs.core.get.call(null,map__23306_23369__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23371 = cljs.core.get.call(null,map__23306_23369__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23372 = cljs.core.get.call(null,map__23306_23369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23370], null),cljs.core.fnil.call(null,((function (seq__23302_23364,chunk__23303_23365,count__23304_23366,i__23305_23367,seq__23295_23357,chunk__23296_23358,count__23297_23359,i__23298_23360,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23306_23368,map__23306_23369__$1,gline_23370,gcol_23371,name_23372,vec__23299_23361,column_23362,column_info_23363,vec__23292_23354,line_23355,columns_23356,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23371], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23355,new cljs.core.Keyword(null,"col","col",-1959363084),column_23362,new cljs.core.Keyword(null,"name","name",1843675177),name_23372], null));
});})(seq__23302_23364,chunk__23303_23365,count__23304_23366,i__23305_23367,seq__23295_23357,chunk__23296_23358,count__23297_23359,i__23298_23360,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23306_23368,map__23306_23369__$1,gline_23370,gcol_23371,name_23372,vec__23299_23361,column_23362,column_info_23363,vec__23292_23354,line_23355,columns_23356,inverted))
,cljs.core.sorted_map.call(null)));


var G__23373 = seq__23302_23364;
var G__23374 = chunk__23303_23365;
var G__23375 = count__23304_23366;
var G__23376 = (i__23305_23367 + (1));
seq__23302_23364 = G__23373;
chunk__23303_23365 = G__23374;
count__23304_23366 = G__23375;
i__23305_23367 = G__23376;
continue;
} else {
var temp__5720__auto___23377 = cljs.core.seq.call(null,seq__23302_23364);
if(temp__5720__auto___23377){
var seq__23302_23378__$1 = temp__5720__auto___23377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23302_23378__$1)){
var c__4461__auto___23379 = cljs.core.chunk_first.call(null,seq__23302_23378__$1);
var G__23380 = cljs.core.chunk_rest.call(null,seq__23302_23378__$1);
var G__23381 = c__4461__auto___23379;
var G__23382 = cljs.core.count.call(null,c__4461__auto___23379);
var G__23383 = (0);
seq__23302_23364 = G__23380;
chunk__23303_23365 = G__23381;
count__23304_23366 = G__23382;
i__23305_23367 = G__23383;
continue;
} else {
var map__23308_23384 = cljs.core.first.call(null,seq__23302_23378__$1);
var map__23308_23385__$1 = (((((!((map__23308_23384 == null))))?(((((map__23308_23384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23308_23384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23308_23384):map__23308_23384);
var gline_23386 = cljs.core.get.call(null,map__23308_23385__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23387 = cljs.core.get.call(null,map__23308_23385__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23388 = cljs.core.get.call(null,map__23308_23385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23386], null),cljs.core.fnil.call(null,((function (seq__23302_23364,chunk__23303_23365,count__23304_23366,i__23305_23367,seq__23295_23357,chunk__23296_23358,count__23297_23359,i__23298_23360,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23308_23384,map__23308_23385__$1,gline_23386,gcol_23387,name_23388,seq__23302_23378__$1,temp__5720__auto___23377,vec__23299_23361,column_23362,column_info_23363,vec__23292_23354,line_23355,columns_23356,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23387], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23355,new cljs.core.Keyword(null,"col","col",-1959363084),column_23362,new cljs.core.Keyword(null,"name","name",1843675177),name_23388], null));
});})(seq__23302_23364,chunk__23303_23365,count__23304_23366,i__23305_23367,seq__23295_23357,chunk__23296_23358,count__23297_23359,i__23298_23360,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23308_23384,map__23308_23385__$1,gline_23386,gcol_23387,name_23388,seq__23302_23378__$1,temp__5720__auto___23377,vec__23299_23361,column_23362,column_info_23363,vec__23292_23354,line_23355,columns_23356,inverted))
,cljs.core.sorted_map.call(null)));


var G__23389 = cljs.core.next.call(null,seq__23302_23378__$1);
var G__23390 = null;
var G__23391 = (0);
var G__23392 = (0);
seq__23302_23364 = G__23389;
chunk__23303_23365 = G__23390;
count__23304_23366 = G__23391;
i__23305_23367 = G__23392;
continue;
}
} else {
}
}
break;
}


var G__23393 = seq__23295_23357;
var G__23394 = chunk__23296_23358;
var G__23395 = count__23297_23359;
var G__23396 = (i__23298_23360 + (1));
seq__23295_23357 = G__23393;
chunk__23296_23358 = G__23394;
count__23297_23359 = G__23395;
i__23298_23360 = G__23396;
continue;
} else {
var temp__5720__auto___23397 = cljs.core.seq.call(null,seq__23295_23357);
if(temp__5720__auto___23397){
var seq__23295_23398__$1 = temp__5720__auto___23397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23295_23398__$1)){
var c__4461__auto___23399 = cljs.core.chunk_first.call(null,seq__23295_23398__$1);
var G__23400 = cljs.core.chunk_rest.call(null,seq__23295_23398__$1);
var G__23401 = c__4461__auto___23399;
var G__23402 = cljs.core.count.call(null,c__4461__auto___23399);
var G__23403 = (0);
seq__23295_23357 = G__23400;
chunk__23296_23358 = G__23401;
count__23297_23359 = G__23402;
i__23298_23360 = G__23403;
continue;
} else {
var vec__23310_23404 = cljs.core.first.call(null,seq__23295_23398__$1);
var column_23405 = cljs.core.nth.call(null,vec__23310_23404,(0),null);
var column_info_23406 = cljs.core.nth.call(null,vec__23310_23404,(1),null);
var seq__23313_23407 = cljs.core.seq.call(null,column_info_23406);
var chunk__23314_23408 = null;
var count__23315_23409 = (0);
var i__23316_23410 = (0);
while(true){
if((i__23316_23410 < count__23315_23409)){
var map__23317_23411 = cljs.core._nth.call(null,chunk__23314_23408,i__23316_23410);
var map__23317_23412__$1 = (((((!((map__23317_23411 == null))))?(((((map__23317_23411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23317_23411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23317_23411):map__23317_23411);
var gline_23413 = cljs.core.get.call(null,map__23317_23412__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23414 = cljs.core.get.call(null,map__23317_23412__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23415 = cljs.core.get.call(null,map__23317_23412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23413], null),cljs.core.fnil.call(null,((function (seq__23313_23407,chunk__23314_23408,count__23315_23409,i__23316_23410,seq__23295_23357,chunk__23296_23358,count__23297_23359,i__23298_23360,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23317_23411,map__23317_23412__$1,gline_23413,gcol_23414,name_23415,vec__23310_23404,column_23405,column_info_23406,seq__23295_23398__$1,temp__5720__auto___23397,vec__23292_23354,line_23355,columns_23356,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23414], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23355,new cljs.core.Keyword(null,"col","col",-1959363084),column_23405,new cljs.core.Keyword(null,"name","name",1843675177),name_23415], null));
});})(seq__23313_23407,chunk__23314_23408,count__23315_23409,i__23316_23410,seq__23295_23357,chunk__23296_23358,count__23297_23359,i__23298_23360,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23317_23411,map__23317_23412__$1,gline_23413,gcol_23414,name_23415,vec__23310_23404,column_23405,column_info_23406,seq__23295_23398__$1,temp__5720__auto___23397,vec__23292_23354,line_23355,columns_23356,inverted))
,cljs.core.sorted_map.call(null)));


var G__23416 = seq__23313_23407;
var G__23417 = chunk__23314_23408;
var G__23418 = count__23315_23409;
var G__23419 = (i__23316_23410 + (1));
seq__23313_23407 = G__23416;
chunk__23314_23408 = G__23417;
count__23315_23409 = G__23418;
i__23316_23410 = G__23419;
continue;
} else {
var temp__5720__auto___23420__$1 = cljs.core.seq.call(null,seq__23313_23407);
if(temp__5720__auto___23420__$1){
var seq__23313_23421__$1 = temp__5720__auto___23420__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23313_23421__$1)){
var c__4461__auto___23422 = cljs.core.chunk_first.call(null,seq__23313_23421__$1);
var G__23423 = cljs.core.chunk_rest.call(null,seq__23313_23421__$1);
var G__23424 = c__4461__auto___23422;
var G__23425 = cljs.core.count.call(null,c__4461__auto___23422);
var G__23426 = (0);
seq__23313_23407 = G__23423;
chunk__23314_23408 = G__23424;
count__23315_23409 = G__23425;
i__23316_23410 = G__23426;
continue;
} else {
var map__23319_23427 = cljs.core.first.call(null,seq__23313_23421__$1);
var map__23319_23428__$1 = (((((!((map__23319_23427 == null))))?(((((map__23319_23427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23319_23427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23319_23427):map__23319_23427);
var gline_23429 = cljs.core.get.call(null,map__23319_23428__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23430 = cljs.core.get.call(null,map__23319_23428__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23431 = cljs.core.get.call(null,map__23319_23428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23429], null),cljs.core.fnil.call(null,((function (seq__23313_23407,chunk__23314_23408,count__23315_23409,i__23316_23410,seq__23295_23357,chunk__23296_23358,count__23297_23359,i__23298_23360,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23319_23427,map__23319_23428__$1,gline_23429,gcol_23430,name_23431,seq__23313_23421__$1,temp__5720__auto___23420__$1,vec__23310_23404,column_23405,column_info_23406,seq__23295_23398__$1,temp__5720__auto___23397,vec__23292_23354,line_23355,columns_23356,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23430], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23355,new cljs.core.Keyword(null,"col","col",-1959363084),column_23405,new cljs.core.Keyword(null,"name","name",1843675177),name_23431], null));
});})(seq__23313_23407,chunk__23314_23408,count__23315_23409,i__23316_23410,seq__23295_23357,chunk__23296_23358,count__23297_23359,i__23298_23360,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23319_23427,map__23319_23428__$1,gline_23429,gcol_23430,name_23431,seq__23313_23421__$1,temp__5720__auto___23420__$1,vec__23310_23404,column_23405,column_info_23406,seq__23295_23398__$1,temp__5720__auto___23397,vec__23292_23354,line_23355,columns_23356,inverted))
,cljs.core.sorted_map.call(null)));


var G__23432 = cljs.core.next.call(null,seq__23313_23421__$1);
var G__23433 = null;
var G__23434 = (0);
var G__23435 = (0);
seq__23313_23407 = G__23432;
chunk__23314_23408 = G__23433;
count__23315_23409 = G__23434;
i__23316_23410 = G__23435;
continue;
}
} else {
}
}
break;
}


var G__23436 = cljs.core.next.call(null,seq__23295_23398__$1);
var G__23437 = null;
var G__23438 = (0);
var G__23439 = (0);
seq__23295_23357 = G__23436;
chunk__23296_23358 = G__23437;
count__23297_23359 = G__23438;
i__23298_23360 = G__23439;
continue;
}
} else {
}
}
break;
}


var G__23440 = seq__23288_23350;
var G__23441 = chunk__23289_23351;
var G__23442 = count__23290_23352;
var G__23443 = (i__23291_23353 + (1));
seq__23288_23350 = G__23440;
chunk__23289_23351 = G__23441;
count__23290_23352 = G__23442;
i__23291_23353 = G__23443;
continue;
} else {
var temp__5720__auto___23444 = cljs.core.seq.call(null,seq__23288_23350);
if(temp__5720__auto___23444){
var seq__23288_23445__$1 = temp__5720__auto___23444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23288_23445__$1)){
var c__4461__auto___23446 = cljs.core.chunk_first.call(null,seq__23288_23445__$1);
var G__23447 = cljs.core.chunk_rest.call(null,seq__23288_23445__$1);
var G__23448 = c__4461__auto___23446;
var G__23449 = cljs.core.count.call(null,c__4461__auto___23446);
var G__23450 = (0);
seq__23288_23350 = G__23447;
chunk__23289_23351 = G__23448;
count__23290_23352 = G__23449;
i__23291_23353 = G__23450;
continue;
} else {
var vec__23321_23451 = cljs.core.first.call(null,seq__23288_23445__$1);
var line_23452 = cljs.core.nth.call(null,vec__23321_23451,(0),null);
var columns_23453 = cljs.core.nth.call(null,vec__23321_23451,(1),null);
var seq__23324_23454 = cljs.core.seq.call(null,columns_23453);
var chunk__23325_23455 = null;
var count__23326_23456 = (0);
var i__23327_23457 = (0);
while(true){
if((i__23327_23457 < count__23326_23456)){
var vec__23328_23458 = cljs.core._nth.call(null,chunk__23325_23455,i__23327_23457);
var column_23459 = cljs.core.nth.call(null,vec__23328_23458,(0),null);
var column_info_23460 = cljs.core.nth.call(null,vec__23328_23458,(1),null);
var seq__23331_23461 = cljs.core.seq.call(null,column_info_23460);
var chunk__23332_23462 = null;
var count__23333_23463 = (0);
var i__23334_23464 = (0);
while(true){
if((i__23334_23464 < count__23333_23463)){
var map__23335_23465 = cljs.core._nth.call(null,chunk__23332_23462,i__23334_23464);
var map__23335_23466__$1 = (((((!((map__23335_23465 == null))))?(((((map__23335_23465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23335_23465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23335_23465):map__23335_23465);
var gline_23467 = cljs.core.get.call(null,map__23335_23466__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23468 = cljs.core.get.call(null,map__23335_23466__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23469 = cljs.core.get.call(null,map__23335_23466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23467], null),cljs.core.fnil.call(null,((function (seq__23331_23461,chunk__23332_23462,count__23333_23463,i__23334_23464,seq__23324_23454,chunk__23325_23455,count__23326_23456,i__23327_23457,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23335_23465,map__23335_23466__$1,gline_23467,gcol_23468,name_23469,vec__23328_23458,column_23459,column_info_23460,vec__23321_23451,line_23452,columns_23453,seq__23288_23445__$1,temp__5720__auto___23444,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23468], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23452,new cljs.core.Keyword(null,"col","col",-1959363084),column_23459,new cljs.core.Keyword(null,"name","name",1843675177),name_23469], null));
});})(seq__23331_23461,chunk__23332_23462,count__23333_23463,i__23334_23464,seq__23324_23454,chunk__23325_23455,count__23326_23456,i__23327_23457,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23335_23465,map__23335_23466__$1,gline_23467,gcol_23468,name_23469,vec__23328_23458,column_23459,column_info_23460,vec__23321_23451,line_23452,columns_23453,seq__23288_23445__$1,temp__5720__auto___23444,inverted))
,cljs.core.sorted_map.call(null)));


var G__23470 = seq__23331_23461;
var G__23471 = chunk__23332_23462;
var G__23472 = count__23333_23463;
var G__23473 = (i__23334_23464 + (1));
seq__23331_23461 = G__23470;
chunk__23332_23462 = G__23471;
count__23333_23463 = G__23472;
i__23334_23464 = G__23473;
continue;
} else {
var temp__5720__auto___23474__$1 = cljs.core.seq.call(null,seq__23331_23461);
if(temp__5720__auto___23474__$1){
var seq__23331_23475__$1 = temp__5720__auto___23474__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23331_23475__$1)){
var c__4461__auto___23476 = cljs.core.chunk_first.call(null,seq__23331_23475__$1);
var G__23477 = cljs.core.chunk_rest.call(null,seq__23331_23475__$1);
var G__23478 = c__4461__auto___23476;
var G__23479 = cljs.core.count.call(null,c__4461__auto___23476);
var G__23480 = (0);
seq__23331_23461 = G__23477;
chunk__23332_23462 = G__23478;
count__23333_23463 = G__23479;
i__23334_23464 = G__23480;
continue;
} else {
var map__23337_23481 = cljs.core.first.call(null,seq__23331_23475__$1);
var map__23337_23482__$1 = (((((!((map__23337_23481 == null))))?(((((map__23337_23481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23337_23481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23337_23481):map__23337_23481);
var gline_23483 = cljs.core.get.call(null,map__23337_23482__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23484 = cljs.core.get.call(null,map__23337_23482__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23485 = cljs.core.get.call(null,map__23337_23482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23483], null),cljs.core.fnil.call(null,((function (seq__23331_23461,chunk__23332_23462,count__23333_23463,i__23334_23464,seq__23324_23454,chunk__23325_23455,count__23326_23456,i__23327_23457,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23337_23481,map__23337_23482__$1,gline_23483,gcol_23484,name_23485,seq__23331_23475__$1,temp__5720__auto___23474__$1,vec__23328_23458,column_23459,column_info_23460,vec__23321_23451,line_23452,columns_23453,seq__23288_23445__$1,temp__5720__auto___23444,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23484], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23452,new cljs.core.Keyword(null,"col","col",-1959363084),column_23459,new cljs.core.Keyword(null,"name","name",1843675177),name_23485], null));
});})(seq__23331_23461,chunk__23332_23462,count__23333_23463,i__23334_23464,seq__23324_23454,chunk__23325_23455,count__23326_23456,i__23327_23457,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23337_23481,map__23337_23482__$1,gline_23483,gcol_23484,name_23485,seq__23331_23475__$1,temp__5720__auto___23474__$1,vec__23328_23458,column_23459,column_info_23460,vec__23321_23451,line_23452,columns_23453,seq__23288_23445__$1,temp__5720__auto___23444,inverted))
,cljs.core.sorted_map.call(null)));


var G__23486 = cljs.core.next.call(null,seq__23331_23475__$1);
var G__23487 = null;
var G__23488 = (0);
var G__23489 = (0);
seq__23331_23461 = G__23486;
chunk__23332_23462 = G__23487;
count__23333_23463 = G__23488;
i__23334_23464 = G__23489;
continue;
}
} else {
}
}
break;
}


var G__23490 = seq__23324_23454;
var G__23491 = chunk__23325_23455;
var G__23492 = count__23326_23456;
var G__23493 = (i__23327_23457 + (1));
seq__23324_23454 = G__23490;
chunk__23325_23455 = G__23491;
count__23326_23456 = G__23492;
i__23327_23457 = G__23493;
continue;
} else {
var temp__5720__auto___23494__$1 = cljs.core.seq.call(null,seq__23324_23454);
if(temp__5720__auto___23494__$1){
var seq__23324_23495__$1 = temp__5720__auto___23494__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23324_23495__$1)){
var c__4461__auto___23496 = cljs.core.chunk_first.call(null,seq__23324_23495__$1);
var G__23497 = cljs.core.chunk_rest.call(null,seq__23324_23495__$1);
var G__23498 = c__4461__auto___23496;
var G__23499 = cljs.core.count.call(null,c__4461__auto___23496);
var G__23500 = (0);
seq__23324_23454 = G__23497;
chunk__23325_23455 = G__23498;
count__23326_23456 = G__23499;
i__23327_23457 = G__23500;
continue;
} else {
var vec__23339_23501 = cljs.core.first.call(null,seq__23324_23495__$1);
var column_23502 = cljs.core.nth.call(null,vec__23339_23501,(0),null);
var column_info_23503 = cljs.core.nth.call(null,vec__23339_23501,(1),null);
var seq__23342_23504 = cljs.core.seq.call(null,column_info_23503);
var chunk__23343_23505 = null;
var count__23344_23506 = (0);
var i__23345_23507 = (0);
while(true){
if((i__23345_23507 < count__23344_23506)){
var map__23346_23508 = cljs.core._nth.call(null,chunk__23343_23505,i__23345_23507);
var map__23346_23509__$1 = (((((!((map__23346_23508 == null))))?(((((map__23346_23508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23346_23508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23346_23508):map__23346_23508);
var gline_23510 = cljs.core.get.call(null,map__23346_23509__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23511 = cljs.core.get.call(null,map__23346_23509__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23512 = cljs.core.get.call(null,map__23346_23509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23510], null),cljs.core.fnil.call(null,((function (seq__23342_23504,chunk__23343_23505,count__23344_23506,i__23345_23507,seq__23324_23454,chunk__23325_23455,count__23326_23456,i__23327_23457,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23346_23508,map__23346_23509__$1,gline_23510,gcol_23511,name_23512,vec__23339_23501,column_23502,column_info_23503,seq__23324_23495__$1,temp__5720__auto___23494__$1,vec__23321_23451,line_23452,columns_23453,seq__23288_23445__$1,temp__5720__auto___23444,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23511], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23452,new cljs.core.Keyword(null,"col","col",-1959363084),column_23502,new cljs.core.Keyword(null,"name","name",1843675177),name_23512], null));
});})(seq__23342_23504,chunk__23343_23505,count__23344_23506,i__23345_23507,seq__23324_23454,chunk__23325_23455,count__23326_23456,i__23327_23457,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23346_23508,map__23346_23509__$1,gline_23510,gcol_23511,name_23512,vec__23339_23501,column_23502,column_info_23503,seq__23324_23495__$1,temp__5720__auto___23494__$1,vec__23321_23451,line_23452,columns_23453,seq__23288_23445__$1,temp__5720__auto___23444,inverted))
,cljs.core.sorted_map.call(null)));


var G__23513 = seq__23342_23504;
var G__23514 = chunk__23343_23505;
var G__23515 = count__23344_23506;
var G__23516 = (i__23345_23507 + (1));
seq__23342_23504 = G__23513;
chunk__23343_23505 = G__23514;
count__23344_23506 = G__23515;
i__23345_23507 = G__23516;
continue;
} else {
var temp__5720__auto___23517__$2 = cljs.core.seq.call(null,seq__23342_23504);
if(temp__5720__auto___23517__$2){
var seq__23342_23518__$1 = temp__5720__auto___23517__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23342_23518__$1)){
var c__4461__auto___23519 = cljs.core.chunk_first.call(null,seq__23342_23518__$1);
var G__23520 = cljs.core.chunk_rest.call(null,seq__23342_23518__$1);
var G__23521 = c__4461__auto___23519;
var G__23522 = cljs.core.count.call(null,c__4461__auto___23519);
var G__23523 = (0);
seq__23342_23504 = G__23520;
chunk__23343_23505 = G__23521;
count__23344_23506 = G__23522;
i__23345_23507 = G__23523;
continue;
} else {
var map__23348_23524 = cljs.core.first.call(null,seq__23342_23518__$1);
var map__23348_23525__$1 = (((((!((map__23348_23524 == null))))?(((((map__23348_23524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23348_23524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23348_23524):map__23348_23524);
var gline_23526 = cljs.core.get.call(null,map__23348_23525__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23527 = cljs.core.get.call(null,map__23348_23525__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23528 = cljs.core.get.call(null,map__23348_23525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23526], null),cljs.core.fnil.call(null,((function (seq__23342_23504,chunk__23343_23505,count__23344_23506,i__23345_23507,seq__23324_23454,chunk__23325_23455,count__23326_23456,i__23327_23457,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23348_23524,map__23348_23525__$1,gline_23526,gcol_23527,name_23528,seq__23342_23518__$1,temp__5720__auto___23517__$2,vec__23339_23501,column_23502,column_info_23503,seq__23324_23495__$1,temp__5720__auto___23494__$1,vec__23321_23451,line_23452,columns_23453,seq__23288_23445__$1,temp__5720__auto___23444,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23527], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23452,new cljs.core.Keyword(null,"col","col",-1959363084),column_23502,new cljs.core.Keyword(null,"name","name",1843675177),name_23528], null));
});})(seq__23342_23504,chunk__23343_23505,count__23344_23506,i__23345_23507,seq__23324_23454,chunk__23325_23455,count__23326_23456,i__23327_23457,seq__23288_23350,chunk__23289_23351,count__23290_23352,i__23291_23353,map__23348_23524,map__23348_23525__$1,gline_23526,gcol_23527,name_23528,seq__23342_23518__$1,temp__5720__auto___23517__$2,vec__23339_23501,column_23502,column_info_23503,seq__23324_23495__$1,temp__5720__auto___23494__$1,vec__23321_23451,line_23452,columns_23453,seq__23288_23445__$1,temp__5720__auto___23444,inverted))
,cljs.core.sorted_map.call(null)));


var G__23529 = cljs.core.next.call(null,seq__23342_23518__$1);
var G__23530 = null;
var G__23531 = (0);
var G__23532 = (0);
seq__23342_23504 = G__23529;
chunk__23343_23505 = G__23530;
count__23344_23506 = G__23531;
i__23345_23507 = G__23532;
continue;
}
} else {
}
}
break;
}


var G__23533 = cljs.core.next.call(null,seq__23324_23495__$1);
var G__23534 = null;
var G__23535 = (0);
var G__23536 = (0);
seq__23324_23454 = G__23533;
chunk__23325_23455 = G__23534;
count__23326_23456 = G__23535;
i__23327_23457 = G__23536;
continue;
}
} else {
}
}
break;
}


var G__23537 = cljs.core.next.call(null,seq__23288_23445__$1);
var G__23538 = null;
var G__23539 = (0);
var G__23540 = (0);
seq__23288_23350 = G__23537;
chunk__23289_23351 = G__23538;
count__23290_23352 = G__23539;
i__23291_23353 = G__23540;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1557850987133
