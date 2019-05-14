// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__23559 = s;
var map__23559__$1 = (((((!((map__23559 == null))))?(((((map__23559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23559):map__23559);
var name = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__23562 = info;
var map__23563 = G__23562;
var map__23563__$1 = (((((!((map__23563 == null))))?(((((map__23563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23563):map__23563);
var shadow = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__23562__$1 = G__23562;
while(true){
var d__$2 = d__$1;
var map__23565 = G__23562__$1;
var map__23565__$1 = (((((!((map__23565 == null))))?(((((map__23565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23565):map__23565);
var shadow__$1 = cljs.core.get.call(null,map__23565__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__23567 = (d__$2 + (1));
var G__23568 = shadow__$1;
d__$1 = G__23567;
G__23562__$1 = G__23568;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__23569){
var map__23570 = p__23569;
var map__23570__$1 = (((((!((map__23570 == null))))?(((((map__23570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23570):map__23570);
var name_var = map__23570__$1;
var name = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__23572 = info;
var map__23572__$1 = (((((!((map__23572 == null))))?(((((map__23572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23572):map__23572);
var ns = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__23575 = arguments.length;
switch (G__23575) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11321),(11321),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__23577 = cp;
switch (G__23577) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__23579_23583 = cljs.core.seq.call(null,s);
var chunk__23580_23584 = null;
var count__23581_23585 = (0);
var i__23582_23586 = (0);
while(true){
if((i__23582_23586 < count__23581_23585)){
var c_23587 = cljs.core._nth.call(null,chunk__23580_23584,i__23582_23586);
sb.append(cljs.compiler.escape_char.call(null,c_23587));


var G__23588 = seq__23579_23583;
var G__23589 = chunk__23580_23584;
var G__23590 = count__23581_23585;
var G__23591 = (i__23582_23586 + (1));
seq__23579_23583 = G__23588;
chunk__23580_23584 = G__23589;
count__23581_23585 = G__23590;
i__23582_23586 = G__23591;
continue;
} else {
var temp__5720__auto___23592 = cljs.core.seq.call(null,seq__23579_23583);
if(temp__5720__auto___23592){
var seq__23579_23593__$1 = temp__5720__auto___23592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23579_23593__$1)){
var c__4461__auto___23594 = cljs.core.chunk_first.call(null,seq__23579_23593__$1);
var G__23595 = cljs.core.chunk_rest.call(null,seq__23579_23593__$1);
var G__23596 = c__4461__auto___23594;
var G__23597 = cljs.core.count.call(null,c__4461__auto___23594);
var G__23598 = (0);
seq__23579_23583 = G__23595;
chunk__23580_23584 = G__23596;
count__23581_23585 = G__23597;
i__23582_23586 = G__23598;
continue;
} else {
var c_23599 = cljs.core.first.call(null,seq__23579_23593__$1);
sb.append(cljs.compiler.escape_char.call(null,c_23599));


var G__23600 = cljs.core.next.call(null,seq__23579_23593__$1);
var G__23601 = null;
var G__23602 = (0);
var G__23603 = (0);
seq__23579_23583 = G__23600;
chunk__23580_23584 = G__23601;
count__23581_23585 = G__23602;
i__23582_23586 = G__23603;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__23604_23609 = ast;
var map__23604_23610__$1 = (((((!((map__23604_23609 == null))))?(((((map__23604_23609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23604_23609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23604_23609):map__23604_23609);
var env_23611 = cljs.core.get.call(null,map__23604_23610__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_23611))){
var map__23606_23612 = env_23611;
var map__23606_23613__$1 = (((((!((map__23606_23612 == null))))?(((((map__23606_23612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23606_23612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23606_23612):map__23606_23612);
var line_23614 = cljs.core.get.call(null,map__23606_23613__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23615 = cljs.core.get.call(null,map__23606_23613__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__23606_23612,map__23606_23613__$1,line_23614,column_23615,map__23604_23609,map__23604_23610__$1,env_23611){
return (function (m){
var minfo = (function (){var G__23608 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__23608,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__23608;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_23614 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__23606_23612,map__23606_23613__$1,line_23614,column_23615,map__23604_23609,map__23604_23610__$1,env_23611){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_23615)?(column_23615 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__23606_23612,map__23606_23613__$1,line_23614,column_23615,map__23604_23609,map__23604_23610__$1,env_23611){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__23606_23612,map__23606_23613__$1,line_23614,column_23615,map__23604_23609,map__23604_23610__$1,env_23611))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__23606_23612,map__23606_23613__$1,line_23614,column_23615,map__23604_23609,map__23604_23610__$1,env_23611))
,cljs.core.sorted_map.call(null)));
});})(map__23606_23612,map__23606_23613__$1,line_23614,column_23615,map__23604_23609,map__23604_23610__$1,env_23611))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__23624 = arguments.length;
switch (G__23624) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___23631 = arguments.length;
var i__4642__auto___23632 = (0);
while(true){
if((i__4642__auto___23632 < len__4641__auto___23631)){
args_arr__4662__auto__.push((arguments[i__4642__auto___23632]));

var G__23633 = (i__4642__auto___23632 + (1));
i__4642__auto___23632 = G__23633;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4663__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_23634 = (function (){var G__23625 = a;
if((!(typeof a === 'string'))){
return G__23625.toString();
} else {
return G__23625;
}
})();
var temp__5724__auto___23635 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___23635 == null)){
} else {
var sm_data_23636 = temp__5724__auto___23635;
cljs.core.swap_BANG_.call(null,sm_data_23636,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_23636,temp__5724__auto___23635,s_23634){
return (function (p1__23616_SHARP_){
return (p1__23616_SHARP_ + s_23634.length);
});})(sm_data_23636,temp__5724__auto___23635,s_23634))
);
}

cljs.core.print.call(null,s_23634);

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__23626 = cljs.core.seq.call(null,xs);
var chunk__23627 = null;
var count__23628 = (0);
var i__23629 = (0);
while(true){
if((i__23629 < count__23628)){
var x = cljs.core._nth.call(null,chunk__23627,i__23629);
cljs.compiler.emits.call(null,x);


var G__23637 = seq__23626;
var G__23638 = chunk__23627;
var G__23639 = count__23628;
var G__23640 = (i__23629 + (1));
seq__23626 = G__23637;
chunk__23627 = G__23638;
count__23628 = G__23639;
i__23629 = G__23640;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23626);
if(temp__5720__auto__){
var seq__23626__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23626__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23626__$1);
var G__23641 = cljs.core.chunk_rest.call(null,seq__23626__$1);
var G__23642 = c__4461__auto__;
var G__23643 = cljs.core.count.call(null,c__4461__auto__);
var G__23644 = (0);
seq__23626 = G__23641;
chunk__23627 = G__23642;
count__23628 = G__23643;
i__23629 = G__23644;
continue;
} else {
var x = cljs.core.first.call(null,seq__23626__$1);
cljs.compiler.emits.call(null,x);


var G__23645 = cljs.core.next.call(null,seq__23626__$1);
var G__23646 = null;
var G__23647 = (0);
var G__23648 = (0);
seq__23626 = G__23645;
chunk__23627 = G__23646;
count__23628 = G__23647;
i__23629 = G__23648;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq23618){
var G__23619 = cljs.core.first.call(null,seq23618);
var seq23618__$1 = cljs.core.next.call(null,seq23618);
var G__23620 = cljs.core.first.call(null,seq23618__$1);
var seq23618__$2 = cljs.core.next.call(null,seq23618__$1);
var G__23621 = cljs.core.first.call(null,seq23618__$2);
var seq23618__$3 = cljs.core.next.call(null,seq23618__$2);
var G__23622 = cljs.core.first.call(null,seq23618__$3);
var seq23618__$4 = cljs.core.next.call(null,seq23618__$3);
var G__23623 = cljs.core.first.call(null,seq23618__$4);
var seq23618__$5 = cljs.core.next.call(null,seq23618__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23619,G__23620,G__23621,G__23622,G__23623,seq23618__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__23649){
var map__23650 = p__23649;
var map__23650__$1 = (((((!((map__23650 == null))))?(((((map__23650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23650):map__23650);
var m = map__23650__$1;
var gen_line = cljs.core.get.call(null,map__23650__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__23659 = arguments.length;
switch (G__23659) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___23665 = arguments.length;
var i__4642__auto___23666 = (0);
while(true){
if((i__4642__auto___23666 < len__4641__auto___23665)){
args_arr__4662__auto__.push((arguments[i__4642__auto___23666]));

var G__23667 = (i__4642__auto___23666 + (1));
i__4642__auto___23666 = G__23667;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4663__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__23660_23668 = cljs.core.seq.call(null,xs);
var chunk__23661_23669 = null;
var count__23662_23670 = (0);
var i__23663_23671 = (0);
while(true){
if((i__23663_23671 < count__23662_23670)){
var x_23672 = cljs.core._nth.call(null,chunk__23661_23669,i__23663_23671);
cljs.compiler.emits.call(null,x_23672);


var G__23673 = seq__23660_23668;
var G__23674 = chunk__23661_23669;
var G__23675 = count__23662_23670;
var G__23676 = (i__23663_23671 + (1));
seq__23660_23668 = G__23673;
chunk__23661_23669 = G__23674;
count__23662_23670 = G__23675;
i__23663_23671 = G__23676;
continue;
} else {
var temp__5720__auto___23677 = cljs.core.seq.call(null,seq__23660_23668);
if(temp__5720__auto___23677){
var seq__23660_23678__$1 = temp__5720__auto___23677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23660_23678__$1)){
var c__4461__auto___23679 = cljs.core.chunk_first.call(null,seq__23660_23678__$1);
var G__23680 = cljs.core.chunk_rest.call(null,seq__23660_23678__$1);
var G__23681 = c__4461__auto___23679;
var G__23682 = cljs.core.count.call(null,c__4461__auto___23679);
var G__23683 = (0);
seq__23660_23668 = G__23680;
chunk__23661_23669 = G__23681;
count__23662_23670 = G__23682;
i__23663_23671 = G__23683;
continue;
} else {
var x_23684 = cljs.core.first.call(null,seq__23660_23678__$1);
cljs.compiler.emits.call(null,x_23684);


var G__23685 = cljs.core.next.call(null,seq__23660_23678__$1);
var G__23686 = null;
var G__23687 = (0);
var G__23688 = (0);
seq__23660_23668 = G__23685;
chunk__23661_23669 = G__23686;
count__23662_23670 = G__23687;
i__23663_23671 = G__23688;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq23653){
var G__23654 = cljs.core.first.call(null,seq23653);
var seq23653__$1 = cljs.core.next.call(null,seq23653);
var G__23655 = cljs.core.first.call(null,seq23653__$1);
var seq23653__$2 = cljs.core.next.call(null,seq23653__$1);
var G__23656 = cljs.core.first.call(null,seq23653__$2);
var seq23653__$3 = cljs.core.next.call(null,seq23653__$2);
var G__23657 = cljs.core.first.call(null,seq23653__$3);
var seq23653__$4 = cljs.core.next.call(null,seq23653__$3);
var G__23658 = cljs.core.first.call(null,seq23653__$4);
var seq23653__$5 = cljs.core.next.call(null,seq23653__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23654,G__23655,G__23656,G__23657,G__23658,seq23653__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23689_23693 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23690_23694 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23691_23695 = true;
var _STAR_print_fn_STAR__temp_val__23692_23696 = ((function (_STAR_print_newline_STAR__orig_val__23689_23693,_STAR_print_fn_STAR__orig_val__23690_23694,_STAR_print_newline_STAR__temp_val__23691_23695,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__23689_23693,_STAR_print_fn_STAR__orig_val__23690_23694,_STAR_print_newline_STAR__temp_val__23691_23695,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23691_23695;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23692_23696;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23690_23694;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23689_23693;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__23697 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__23697,(0),null);
var name = cljs.core.nth.call(null,vec__23697,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__23697,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__23697,ns,name))
);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
});})(m))
,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
});})(m))
);
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.type.call(null,x)))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__23700 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__23700,(0),null);
var flags = cljs.core.nth.call(null,vec__23700,(1),null);
var pattern = cljs.core.nth.call(null,vec__23700,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,((function (items){
return (function (p1__23703_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__23703_SHARP_);
});
;})(items))
});})(items))
);
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__23705){
var map__23706 = p__23705;
var map__23706__$1 = (((((!((map__23706 == null))))?(((((map__23706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23706):map__23706);
var ast = map__23706__$1;
var info = cljs.core.get.call(null,map__23706__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__23706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__23706__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__23708 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__23708__$1 = (((((!((map__23708 == null))))?(((((map__23708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23708):map__23708);
var cenv = map__23708__$1;
var options = cljs.core.get.call(null,map__23708__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4047__auto__ = js_module_name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__23710 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__23710,cljs.analyzer.es5_allowed);
} else {
return G__23710;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__23711 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__23711,reserved);
} else {
return G__23711;
}
})();
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__23712_23713 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__23712_23714__$1 = (((G__23712_23713 instanceof cljs.core.Keyword))?G__23712_23713.fqn:null);
switch (G__23712_23714__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4036__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__23716){
var map__23717 = p__23716;
var map__23717__$1 = (((((!((map__23717 == null))))?(((((map__23717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23717):map__23717);
var arg = map__23717__$1;
var env = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__23719 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__23719__$1 = (((((!((map__23719 == null))))?(((((map__23719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23719):map__23719);
var name = cljs.core.get.call(null,map__23719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__23721){
var map__23722 = p__23721;
var map__23722__$1 = (((((!((map__23722 == null))))?(((((map__23722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23722):map__23722);
var expr = cljs.core.get.call(null,map__23722__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__23722__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__23722__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__23724_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23724_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__23725){
var map__23726 = p__23725;
var map__23726__$1 = (((((!((map__23726 == null))))?(((((map__23726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23726):map__23726);
var env = cljs.core.get.call(null,map__23726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__23726__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__23726__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__23728){
var map__23729 = p__23728;
var map__23729__$1 = (((((!((map__23729 == null))))?(((((map__23729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23729):map__23729);
var items = cljs.core.get.call(null,map__23729__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__23731_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23731_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__23732){
var map__23733 = p__23732;
var map__23733__$1 = (((((!((map__23733 == null))))?(((((map__23733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23733):map__23733);
var items = cljs.core.get.call(null,map__23733__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___23751 = cljs.core.seq.call(null,items);
if(temp__5720__auto___23751){
var items_23752__$1 = temp__5720__auto___23751;
var vec__23735_23753 = items_23752__$1;
var seq__23736_23754 = cljs.core.seq.call(null,vec__23735_23753);
var first__23737_23755 = cljs.core.first.call(null,seq__23736_23754);
var seq__23736_23756__$1 = cljs.core.next.call(null,seq__23736_23754);
var vec__23738_23757 = first__23737_23755;
var k_23758 = cljs.core.nth.call(null,vec__23738_23757,(0),null);
var v_23759 = cljs.core.nth.call(null,vec__23738_23757,(1),null);
var r_23760 = seq__23736_23756__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_23758),"\": ",emit_js_object_val.call(null,v_23759));

var seq__23741_23761 = cljs.core.seq.call(null,r_23760);
var chunk__23742_23762 = null;
var count__23743_23763 = (0);
var i__23744_23764 = (0);
while(true){
if((i__23744_23764 < count__23743_23763)){
var vec__23745_23765 = cljs.core._nth.call(null,chunk__23742_23762,i__23744_23764);
var k_23766__$1 = cljs.core.nth.call(null,vec__23745_23765,(0),null);
var v_23767__$1 = cljs.core.nth.call(null,vec__23745_23765,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_23766__$1),"\": ",emit_js_object_val.call(null,v_23767__$1));


var G__23768 = seq__23741_23761;
var G__23769 = chunk__23742_23762;
var G__23770 = count__23743_23763;
var G__23771 = (i__23744_23764 + (1));
seq__23741_23761 = G__23768;
chunk__23742_23762 = G__23769;
count__23743_23763 = G__23770;
i__23744_23764 = G__23771;
continue;
} else {
var temp__5720__auto___23772__$1 = cljs.core.seq.call(null,seq__23741_23761);
if(temp__5720__auto___23772__$1){
var seq__23741_23773__$1 = temp__5720__auto___23772__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23741_23773__$1)){
var c__4461__auto___23774 = cljs.core.chunk_first.call(null,seq__23741_23773__$1);
var G__23775 = cljs.core.chunk_rest.call(null,seq__23741_23773__$1);
var G__23776 = c__4461__auto___23774;
var G__23777 = cljs.core.count.call(null,c__4461__auto___23774);
var G__23778 = (0);
seq__23741_23761 = G__23775;
chunk__23742_23762 = G__23776;
count__23743_23763 = G__23777;
i__23744_23764 = G__23778;
continue;
} else {
var vec__23748_23779 = cljs.core.first.call(null,seq__23741_23773__$1);
var k_23780__$1 = cljs.core.nth.call(null,vec__23748_23779,(0),null);
var v_23781__$1 = cljs.core.nth.call(null,vec__23748_23779,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_23780__$1),"\": ",emit_js_object_val.call(null,v_23781__$1));


var G__23782 = cljs.core.next.call(null,seq__23741_23773__$1);
var G__23783 = null;
var G__23784 = (0);
var G__23785 = (0);
seq__23741_23761 = G__23782;
chunk__23742_23762 = G__23783;
count__23743_23763 = G__23784;
i__23744_23764 = G__23785;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__23786){
var map__23787 = p__23786;
var map__23787__$1 = (((((!((map__23787 == null))))?(((((map__23787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23787):map__23787);
var keys = cljs.core.get.call(null,map__23787__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__23787__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__23787__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__23789){
var map__23790 = p__23789;
var map__23790__$1 = (((((!((map__23790 == null))))?(((((map__23790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23790):map__23790);
var items = cljs.core.get.call(null,map__23790__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23790__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__23792){
var map__23793 = p__23792;
var map__23793__$1 = (((((!((map__23793 == null))))?(((((map__23793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23793):map__23793);
var expr = cljs.core.get.call(null,map__23793__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__23795){
var map__23796 = p__23795;
var map__23796__$1 = (((((!((map__23796 == null))))?(((((map__23796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23796):map__23796);
var form = cljs.core.get.call(null,map__23796__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__23796__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__23798 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__23798__$1 = (((((!((map__23798 == null))))?(((((map__23798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23798):map__23798);
var op = cljs.core.get.call(null,map__23798__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__23798__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__23798__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4047__auto__ = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4036__auto__){
var and__4036__auto____$1 = form;
if(cljs.core.truth_(and__4036__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!((const_expr == null)));
if(and__4036__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4036__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__23800 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__23800__$1 = (((((!((map__23800 == null))))?(((((map__23800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23800):map__23800);
var op = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4047__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!((const_expr == null)));
if(and__4036__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4036__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__23802){
var map__23803 = p__23802;
var map__23803__$1 = (((((!((map__23803 == null))))?(((((map__23803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23803):map__23803);
var test = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4047__auto__ = unchecked;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__23805){
var map__23806 = p__23805;
var map__23806__$1 = (((((!((map__23806 == null))))?(((((map__23806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23806):map__23806);
var v = cljs.core.get.call(null,map__23806__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__23806__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__23806__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__23806__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__23808_23828 = cljs.core.seq.call(null,nodes);
var chunk__23809_23829 = null;
var count__23810_23830 = (0);
var i__23811_23831 = (0);
while(true){
if((i__23811_23831 < count__23810_23830)){
var map__23812_23832 = cljs.core._nth.call(null,chunk__23809_23829,i__23811_23831);
var map__23812_23833__$1 = (((((!((map__23812_23832 == null))))?(((((map__23812_23832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23812_23832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23812_23832):map__23812_23832);
var ts_23834 = cljs.core.get.call(null,map__23812_23833__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__23813_23835 = cljs.core.get.call(null,map__23812_23833__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__23813_23836__$1 = (((((!((map__23813_23835 == null))))?(((((map__23813_23835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23813_23835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23813_23835):map__23813_23835);
var then_23837 = cljs.core.get.call(null,map__23813_23836__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__23816_23838 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_23834));
var chunk__23817_23839 = null;
var count__23818_23840 = (0);
var i__23819_23841 = (0);
while(true){
if((i__23819_23841 < count__23818_23840)){
var test_23842 = cljs.core._nth.call(null,chunk__23817_23839,i__23819_23841);
cljs.compiler.emitln.call(null,"case ",test_23842,":");


var G__23843 = seq__23816_23838;
var G__23844 = chunk__23817_23839;
var G__23845 = count__23818_23840;
var G__23846 = (i__23819_23841 + (1));
seq__23816_23838 = G__23843;
chunk__23817_23839 = G__23844;
count__23818_23840 = G__23845;
i__23819_23841 = G__23846;
continue;
} else {
var temp__5720__auto___23847 = cljs.core.seq.call(null,seq__23816_23838);
if(temp__5720__auto___23847){
var seq__23816_23848__$1 = temp__5720__auto___23847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23816_23848__$1)){
var c__4461__auto___23849 = cljs.core.chunk_first.call(null,seq__23816_23848__$1);
var G__23850 = cljs.core.chunk_rest.call(null,seq__23816_23848__$1);
var G__23851 = c__4461__auto___23849;
var G__23852 = cljs.core.count.call(null,c__4461__auto___23849);
var G__23853 = (0);
seq__23816_23838 = G__23850;
chunk__23817_23839 = G__23851;
count__23818_23840 = G__23852;
i__23819_23841 = G__23853;
continue;
} else {
var test_23854 = cljs.core.first.call(null,seq__23816_23848__$1);
cljs.compiler.emitln.call(null,"case ",test_23854,":");


var G__23855 = cljs.core.next.call(null,seq__23816_23848__$1);
var G__23856 = null;
var G__23857 = (0);
var G__23858 = (0);
seq__23816_23838 = G__23855;
chunk__23817_23839 = G__23856;
count__23818_23840 = G__23857;
i__23819_23841 = G__23858;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_23837);
} else {
cljs.compiler.emitln.call(null,then_23837);
}

cljs.compiler.emitln.call(null,"break;");


var G__23859 = seq__23808_23828;
var G__23860 = chunk__23809_23829;
var G__23861 = count__23810_23830;
var G__23862 = (i__23811_23831 + (1));
seq__23808_23828 = G__23859;
chunk__23809_23829 = G__23860;
count__23810_23830 = G__23861;
i__23811_23831 = G__23862;
continue;
} else {
var temp__5720__auto___23863 = cljs.core.seq.call(null,seq__23808_23828);
if(temp__5720__auto___23863){
var seq__23808_23864__$1 = temp__5720__auto___23863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23808_23864__$1)){
var c__4461__auto___23865 = cljs.core.chunk_first.call(null,seq__23808_23864__$1);
var G__23866 = cljs.core.chunk_rest.call(null,seq__23808_23864__$1);
var G__23867 = c__4461__auto___23865;
var G__23868 = cljs.core.count.call(null,c__4461__auto___23865);
var G__23869 = (0);
seq__23808_23828 = G__23866;
chunk__23809_23829 = G__23867;
count__23810_23830 = G__23868;
i__23811_23831 = G__23869;
continue;
} else {
var map__23820_23870 = cljs.core.first.call(null,seq__23808_23864__$1);
var map__23820_23871__$1 = (((((!((map__23820_23870 == null))))?(((((map__23820_23870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23820_23870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23820_23870):map__23820_23870);
var ts_23872 = cljs.core.get.call(null,map__23820_23871__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__23821_23873 = cljs.core.get.call(null,map__23820_23871__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__23821_23874__$1 = (((((!((map__23821_23873 == null))))?(((((map__23821_23873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23821_23873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23821_23873):map__23821_23873);
var then_23875 = cljs.core.get.call(null,map__23821_23874__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__23824_23876 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_23872));
var chunk__23825_23877 = null;
var count__23826_23878 = (0);
var i__23827_23879 = (0);
while(true){
if((i__23827_23879 < count__23826_23878)){
var test_23880 = cljs.core._nth.call(null,chunk__23825_23877,i__23827_23879);
cljs.compiler.emitln.call(null,"case ",test_23880,":");


var G__23881 = seq__23824_23876;
var G__23882 = chunk__23825_23877;
var G__23883 = count__23826_23878;
var G__23884 = (i__23827_23879 + (1));
seq__23824_23876 = G__23881;
chunk__23825_23877 = G__23882;
count__23826_23878 = G__23883;
i__23827_23879 = G__23884;
continue;
} else {
var temp__5720__auto___23885__$1 = cljs.core.seq.call(null,seq__23824_23876);
if(temp__5720__auto___23885__$1){
var seq__23824_23886__$1 = temp__5720__auto___23885__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23824_23886__$1)){
var c__4461__auto___23887 = cljs.core.chunk_first.call(null,seq__23824_23886__$1);
var G__23888 = cljs.core.chunk_rest.call(null,seq__23824_23886__$1);
var G__23889 = c__4461__auto___23887;
var G__23890 = cljs.core.count.call(null,c__4461__auto___23887);
var G__23891 = (0);
seq__23824_23876 = G__23888;
chunk__23825_23877 = G__23889;
count__23826_23878 = G__23890;
i__23827_23879 = G__23891;
continue;
} else {
var test_23892 = cljs.core.first.call(null,seq__23824_23886__$1);
cljs.compiler.emitln.call(null,"case ",test_23892,":");


var G__23893 = cljs.core.next.call(null,seq__23824_23886__$1);
var G__23894 = null;
var G__23895 = (0);
var G__23896 = (0);
seq__23824_23876 = G__23893;
chunk__23825_23877 = G__23894;
count__23826_23878 = G__23895;
i__23827_23879 = G__23896;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_23875);
} else {
cljs.compiler.emitln.call(null,then_23875);
}

cljs.compiler.emitln.call(null,"break;");


var G__23897 = cljs.core.next.call(null,seq__23808_23864__$1);
var G__23898 = null;
var G__23899 = (0);
var G__23900 = (0);
seq__23808_23828 = G__23897;
chunk__23809_23829 = G__23898;
count__23810_23830 = G__23899;
i__23811_23831 = G__23900;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__23901){
var map__23902 = p__23901;
var map__23902__$1 = (((((!((map__23902 == null))))?(((((map__23902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23902):map__23902);
var throw$ = cljs.core.get.call(null,map__23902__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__23902__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__23905 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__23905,(0),null);
var rstr = cljs.core.nth.call(null,vec__23905,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__23905,fstr,rstr,ret_t,axstr){
return (function (p1__23904_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__23904_SHARP_);
});})(idx,vec__23905,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__23908 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23908),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__23908;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__23909_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__23909_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__23910 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__23911 = cljs.core.seq.call(null,vec__23910);
var first__23912 = cljs.core.first.call(null,seq__23911);
var seq__23911__$1 = cljs.core.next.call(null,seq__23911);
var p = first__23912;
var first__23912__$1 = cljs.core.first.call(null,seq__23911__$1);
var seq__23911__$2 = cljs.core.next.call(null,seq__23911__$1);
var ts = first__23912__$1;
var first__23912__$2 = cljs.core.first.call(null,seq__23911__$2);
var seq__23911__$3 = cljs.core.next.call(null,seq__23911__$2);
var n = first__23912__$2;
var xs = seq__23911__$3;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4036__auto__){
var and__4036__auto____$1 = ts;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__23913 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__23914 = cljs.core.seq.call(null,vec__23913);
var first__23915 = cljs.core.first.call(null,seq__23914);
var seq__23914__$1 = cljs.core.next.call(null,seq__23914);
var p = first__23915;
var first__23915__$1 = cljs.core.first.call(null,seq__23914__$1);
var seq__23914__$2 = cljs.core.next.call(null,seq__23914__$1);
var ts = first__23915__$1;
var xs = seq__23914__$2;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4036__auto__){
var and__4036__auto____$1 = ts;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__23918 = arguments.length;
switch (G__23918) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__23926 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__23916_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__23916_SHARP_);
} else {
return p1__23916_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__23927 = cljs.core.seq.call(null,vec__23926);
var first__23928 = cljs.core.first.call(null,seq__23927);
var seq__23927__$1 = cljs.core.next.call(null,seq__23927);
var x = first__23928;
var ys = seq__23927__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__23929 = cljs.core.seq.call(null,ys);
var chunk__23930 = null;
var count__23931 = (0);
var i__23932 = (0);
while(true){
if((i__23932 < count__23931)){
var next_line = cljs.core._nth.call(null,chunk__23930,i__23932);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__23938 = seq__23929;
var G__23939 = chunk__23930;
var G__23940 = count__23931;
var G__23941 = (i__23932 + (1));
seq__23929 = G__23938;
chunk__23930 = G__23939;
count__23931 = G__23940;
i__23932 = G__23941;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23929);
if(temp__5720__auto__){
var seq__23929__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23929__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23929__$1);
var G__23942 = cljs.core.chunk_rest.call(null,seq__23929__$1);
var G__23943 = c__4461__auto__;
var G__23944 = cljs.core.count.call(null,c__4461__auto__);
var G__23945 = (0);
seq__23929 = G__23942;
chunk__23930 = G__23943;
count__23931 = G__23944;
i__23932 = G__23945;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__23929__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__23946 = cljs.core.next.call(null,seq__23929__$1);
var G__23947 = null;
var G__23948 = (0);
var G__23949 = (0);
seq__23929 = G__23946;
chunk__23930 = G__23947;
count__23931 = G__23948;
i__23932 = G__23949;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__23933_23950 = cljs.core.seq.call(null,docs__$2);
var chunk__23934_23951 = null;
var count__23935_23952 = (0);
var i__23936_23953 = (0);
while(true){
if((i__23936_23953 < count__23935_23952)){
var e_23954 = cljs.core._nth.call(null,chunk__23934_23951,i__23936_23953);
if(cljs.core.truth_(e_23954)){
print_comment_lines.call(null,e_23954);
} else {
}


var G__23955 = seq__23933_23950;
var G__23956 = chunk__23934_23951;
var G__23957 = count__23935_23952;
var G__23958 = (i__23936_23953 + (1));
seq__23933_23950 = G__23955;
chunk__23934_23951 = G__23956;
count__23935_23952 = G__23957;
i__23936_23953 = G__23958;
continue;
} else {
var temp__5720__auto___23959 = cljs.core.seq.call(null,seq__23933_23950);
if(temp__5720__auto___23959){
var seq__23933_23960__$1 = temp__5720__auto___23959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23933_23960__$1)){
var c__4461__auto___23961 = cljs.core.chunk_first.call(null,seq__23933_23960__$1);
var G__23962 = cljs.core.chunk_rest.call(null,seq__23933_23960__$1);
var G__23963 = c__4461__auto___23961;
var G__23964 = cljs.core.count.call(null,c__4461__auto___23961);
var G__23965 = (0);
seq__23933_23950 = G__23962;
chunk__23934_23951 = G__23963;
count__23935_23952 = G__23964;
i__23936_23953 = G__23965;
continue;
} else {
var e_23966 = cljs.core.first.call(null,seq__23933_23960__$1);
if(cljs.core.truth_(e_23966)){
print_comment_lines.call(null,e_23966);
} else {
}


var G__23967 = cljs.core.next.call(null,seq__23933_23960__$1);
var G__23968 = null;
var G__23969 = (0);
var G__23970 = (0);
seq__23933_23950 = G__23967;
chunk__23934_23951 = G__23968;
count__23935_23952 = G__23969;
i__23936_23953 = G__23970;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4036__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__23972_SHARP_){
return goog.string.startsWith(p1__23972_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = opts;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4036__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__23973){
var map__23974 = p__23973;
var map__23974__$1 = (((((!((map__23974 == null))))?(((((map__23974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23974):map__23974);
var doc = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4047__auto__ = init;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4036__auto__){
return test;
} else {
return and__4036__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__23976){
var map__23977 = p__23976;
var map__23977__$1 = (((((!((map__23977 == null))))?(((((map__23977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23977):map__23977);
var name = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__23979_23997 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__23980_23998 = null;
var count__23981_23999 = (0);
var i__23982_24000 = (0);
while(true){
if((i__23982_24000 < count__23981_23999)){
var vec__23983_24001 = cljs.core._nth.call(null,chunk__23980_23998,i__23982_24000);
var i_24002 = cljs.core.nth.call(null,vec__23983_24001,(0),null);
var param_24003 = cljs.core.nth.call(null,vec__23983_24001,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_24003);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__24004 = seq__23979_23997;
var G__24005 = chunk__23980_23998;
var G__24006 = count__23981_23999;
var G__24007 = (i__23982_24000 + (1));
seq__23979_23997 = G__24004;
chunk__23980_23998 = G__24005;
count__23981_23999 = G__24006;
i__23982_24000 = G__24007;
continue;
} else {
var temp__5720__auto___24008 = cljs.core.seq.call(null,seq__23979_23997);
if(temp__5720__auto___24008){
var seq__23979_24009__$1 = temp__5720__auto___24008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23979_24009__$1)){
var c__4461__auto___24010 = cljs.core.chunk_first.call(null,seq__23979_24009__$1);
var G__24011 = cljs.core.chunk_rest.call(null,seq__23979_24009__$1);
var G__24012 = c__4461__auto___24010;
var G__24013 = cljs.core.count.call(null,c__4461__auto___24010);
var G__24014 = (0);
seq__23979_23997 = G__24011;
chunk__23980_23998 = G__24012;
count__23981_23999 = G__24013;
i__23982_24000 = G__24014;
continue;
} else {
var vec__23986_24015 = cljs.core.first.call(null,seq__23979_24009__$1);
var i_24016 = cljs.core.nth.call(null,vec__23986_24015,(0),null);
var param_24017 = cljs.core.nth.call(null,vec__23986_24015,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_24017);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__24018 = cljs.core.next.call(null,seq__23979_24009__$1);
var G__24019 = null;
var G__24020 = (0);
var G__24021 = (0);
seq__23979_23997 = G__24018;
chunk__23980_23998 = G__24019;
count__23981_23999 = G__24020;
i__23982_24000 = G__24021;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__23989_24022 = cljs.core.seq.call(null,params);
var chunk__23990_24023 = null;
var count__23991_24024 = (0);
var i__23992_24025 = (0);
while(true){
if((i__23992_24025 < count__23991_24024)){
var param_24026 = cljs.core._nth.call(null,chunk__23990_24023,i__23992_24025);
cljs.compiler.emit.call(null,param_24026);

if(cljs.core._EQ_.call(null,param_24026,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24027 = seq__23989_24022;
var G__24028 = chunk__23990_24023;
var G__24029 = count__23991_24024;
var G__24030 = (i__23992_24025 + (1));
seq__23989_24022 = G__24027;
chunk__23990_24023 = G__24028;
count__23991_24024 = G__24029;
i__23992_24025 = G__24030;
continue;
} else {
var temp__5720__auto___24031 = cljs.core.seq.call(null,seq__23989_24022);
if(temp__5720__auto___24031){
var seq__23989_24032__$1 = temp__5720__auto___24031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23989_24032__$1)){
var c__4461__auto___24033 = cljs.core.chunk_first.call(null,seq__23989_24032__$1);
var G__24034 = cljs.core.chunk_rest.call(null,seq__23989_24032__$1);
var G__24035 = c__4461__auto___24033;
var G__24036 = cljs.core.count.call(null,c__4461__auto___24033);
var G__24037 = (0);
seq__23989_24022 = G__24034;
chunk__23990_24023 = G__24035;
count__23991_24024 = G__24036;
i__23992_24025 = G__24037;
continue;
} else {
var param_24038 = cljs.core.first.call(null,seq__23989_24032__$1);
cljs.compiler.emit.call(null,param_24038);

if(cljs.core._EQ_.call(null,param_24038,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24039 = cljs.core.next.call(null,seq__23989_24032__$1);
var G__24040 = null;
var G__24041 = (0);
var G__24042 = (0);
seq__23989_24022 = G__24039;
chunk__23990_24023 = G__24040;
count__23991_24024 = G__24041;
i__23992_24025 = G__24042;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__23993_24043 = cljs.core.seq.call(null,params);
var chunk__23994_24044 = null;
var count__23995_24045 = (0);
var i__23996_24046 = (0);
while(true){
if((i__23996_24046 < count__23995_24045)){
var param_24047 = cljs.core._nth.call(null,chunk__23994_24044,i__23996_24046);
cljs.compiler.emit.call(null,param_24047);

if(cljs.core._EQ_.call(null,param_24047,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24048 = seq__23993_24043;
var G__24049 = chunk__23994_24044;
var G__24050 = count__23995_24045;
var G__24051 = (i__23996_24046 + (1));
seq__23993_24043 = G__24048;
chunk__23994_24044 = G__24049;
count__23995_24045 = G__24050;
i__23996_24046 = G__24051;
continue;
} else {
var temp__5720__auto___24052 = cljs.core.seq.call(null,seq__23993_24043);
if(temp__5720__auto___24052){
var seq__23993_24053__$1 = temp__5720__auto___24052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23993_24053__$1)){
var c__4461__auto___24054 = cljs.core.chunk_first.call(null,seq__23993_24053__$1);
var G__24055 = cljs.core.chunk_rest.call(null,seq__23993_24053__$1);
var G__24056 = c__4461__auto___24054;
var G__24057 = cljs.core.count.call(null,c__4461__auto___24054);
var G__24058 = (0);
seq__23993_24043 = G__24055;
chunk__23994_24044 = G__24056;
count__23995_24045 = G__24057;
i__23996_24046 = G__24058;
continue;
} else {
var param_24059 = cljs.core.first.call(null,seq__23993_24053__$1);
cljs.compiler.emit.call(null,param_24059);

if(cljs.core._EQ_.call(null,param_24059,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24060 = cljs.core.next.call(null,seq__23993_24053__$1);
var G__24061 = null;
var G__24062 = (0);
var G__24063 = (0);
seq__23993_24043 = G__24060;
chunk__23994_24044 = G__24061;
count__23995_24045 = G__24062;
i__23996_24046 = G__24063;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__24064 = cljs.core.seq.call(null,params);
var chunk__24065 = null;
var count__24066 = (0);
var i__24067 = (0);
while(true){
if((i__24067 < count__24066)){
var param = cljs.core._nth.call(null,chunk__24065,i__24067);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24068 = seq__24064;
var G__24069 = chunk__24065;
var G__24070 = count__24066;
var G__24071 = (i__24067 + (1));
seq__24064 = G__24068;
chunk__24065 = G__24069;
count__24066 = G__24070;
i__24067 = G__24071;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24064);
if(temp__5720__auto__){
var seq__24064__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24064__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__24064__$1);
var G__24072 = cljs.core.chunk_rest.call(null,seq__24064__$1);
var G__24073 = c__4461__auto__;
var G__24074 = cljs.core.count.call(null,c__4461__auto__);
var G__24075 = (0);
seq__24064 = G__24072;
chunk__24065 = G__24073;
count__24066 = G__24074;
i__24067 = G__24075;
continue;
} else {
var param = cljs.core.first.call(null,seq__24064__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24076 = cljs.core.next.call(null,seq__24064__$1);
var G__24077 = null;
var G__24078 = (0);
var G__24079 = (0);
seq__24064 = G__24076;
chunk__24065 = G__24077;
count__24066 = G__24078;
i__24067 = G__24079;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24080){
var map__24081 = p__24080;
var map__24081__$1 = (((((!((map__24081 == null))))?(((((map__24081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24081):map__24081);
var expr = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24083){
var map__24084 = p__24083;
var map__24084__$1 = (((((!((map__24084 == null))))?(((((map__24084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24084):map__24084);
var f = map__24084__$1;
var expr = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_24094__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24095 = cljs.compiler.munge.call(null,name_24094__$1);
var delegate_name_24096 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24095),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_24096," = function (");

var seq__24086_24097 = cljs.core.seq.call(null,params);
var chunk__24087_24098 = null;
var count__24088_24099 = (0);
var i__24089_24100 = (0);
while(true){
if((i__24089_24100 < count__24088_24099)){
var param_24101 = cljs.core._nth.call(null,chunk__24087_24098,i__24089_24100);
cljs.compiler.emit.call(null,param_24101);

if(cljs.core._EQ_.call(null,param_24101,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24102 = seq__24086_24097;
var G__24103 = chunk__24087_24098;
var G__24104 = count__24088_24099;
var G__24105 = (i__24089_24100 + (1));
seq__24086_24097 = G__24102;
chunk__24087_24098 = G__24103;
count__24088_24099 = G__24104;
i__24089_24100 = G__24105;
continue;
} else {
var temp__5720__auto___24106 = cljs.core.seq.call(null,seq__24086_24097);
if(temp__5720__auto___24106){
var seq__24086_24107__$1 = temp__5720__auto___24106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24086_24107__$1)){
var c__4461__auto___24108 = cljs.core.chunk_first.call(null,seq__24086_24107__$1);
var G__24109 = cljs.core.chunk_rest.call(null,seq__24086_24107__$1);
var G__24110 = c__4461__auto___24108;
var G__24111 = cljs.core.count.call(null,c__4461__auto___24108);
var G__24112 = (0);
seq__24086_24097 = G__24109;
chunk__24087_24098 = G__24110;
count__24088_24099 = G__24111;
i__24089_24100 = G__24112;
continue;
} else {
var param_24113 = cljs.core.first.call(null,seq__24086_24107__$1);
cljs.compiler.emit.call(null,param_24113);

if(cljs.core._EQ_.call(null,param_24113,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24114 = cljs.core.next.call(null,seq__24086_24107__$1);
var G__24115 = null;
var G__24116 = (0);
var G__24117 = (0);
seq__24086_24097 = G__24114;
chunk__24087_24098 = G__24115;
count__24088_24099 = G__24116;
i__24089_24100 = G__24117;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_24095," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_24118 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_24118,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_24096,".call(this,");

var seq__24090_24119 = cljs.core.seq.call(null,params);
var chunk__24091_24120 = null;
var count__24092_24121 = (0);
var i__24093_24122 = (0);
while(true){
if((i__24093_24122 < count__24092_24121)){
var param_24123 = cljs.core._nth.call(null,chunk__24091_24120,i__24093_24122);
cljs.compiler.emit.call(null,param_24123);

if(cljs.core._EQ_.call(null,param_24123,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24124 = seq__24090_24119;
var G__24125 = chunk__24091_24120;
var G__24126 = count__24092_24121;
var G__24127 = (i__24093_24122 + (1));
seq__24090_24119 = G__24124;
chunk__24091_24120 = G__24125;
count__24092_24121 = G__24126;
i__24093_24122 = G__24127;
continue;
} else {
var temp__5720__auto___24128 = cljs.core.seq.call(null,seq__24090_24119);
if(temp__5720__auto___24128){
var seq__24090_24129__$1 = temp__5720__auto___24128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24090_24129__$1)){
var c__4461__auto___24130 = cljs.core.chunk_first.call(null,seq__24090_24129__$1);
var G__24131 = cljs.core.chunk_rest.call(null,seq__24090_24129__$1);
var G__24132 = c__4461__auto___24130;
var G__24133 = cljs.core.count.call(null,c__4461__auto___24130);
var G__24134 = (0);
seq__24090_24119 = G__24131;
chunk__24091_24120 = G__24132;
count__24092_24121 = G__24133;
i__24093_24122 = G__24134;
continue;
} else {
var param_24135 = cljs.core.first.call(null,seq__24090_24129__$1);
cljs.compiler.emit.call(null,param_24135);

if(cljs.core._EQ_.call(null,param_24135,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24136 = cljs.core.next.call(null,seq__24090_24129__$1);
var G__24137 = null;
var G__24138 = (0);
var G__24139 = (0);
seq__24090_24119 = G__24136;
chunk__24091_24120 = G__24137;
count__24092_24121 = G__24138;
i__24093_24122 = G__24139;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_24095,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_24095,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_24094__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_24095,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_24096,";");

cljs.compiler.emitln.call(null,"return ",mname_24095,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24143){
var map__24144 = p__24143;
var map__24144__$1 = (((((!((map__24144 == null))))?(((((map__24144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24144):map__24144);
var variadic = cljs.core.get.call(null,map__24144__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__24144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__24144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__24144__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__24144__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__24144__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__24144__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__24144,map__24144__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__24140_SHARP_){
var and__4036__auto__ = p1__24140_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24140_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__24144,map__24144__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_24179__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24180 = cljs.compiler.munge.call(null,name_24179__$1);
var maxparams_24181 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_24182 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_24179__$1,mname_24180,maxparams_24181,loop_locals,map__24144,map__24144__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24180),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_24179__$1,mname_24180,maxparams_24181,loop_locals,map__24144,map__24144__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_24183 = cljs.core.sort_by.call(null,((function (name_24179__$1,mname_24180,maxparams_24181,mmap_24182,loop_locals,map__24144,map__24144__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__24141_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__24141_SHARP_)));
});})(name_24179__$1,mname_24180,maxparams_24181,mmap_24182,loop_locals,map__24144,map__24144__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_24182));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_24180," = null;");

var seq__24146_24184 = cljs.core.seq.call(null,ms_24183);
var chunk__24147_24185 = null;
var count__24148_24186 = (0);
var i__24149_24187 = (0);
while(true){
if((i__24149_24187 < count__24148_24186)){
var vec__24150_24188 = cljs.core._nth.call(null,chunk__24147_24185,i__24149_24187);
var n_24189 = cljs.core.nth.call(null,vec__24150_24188,(0),null);
var meth_24190 = cljs.core.nth.call(null,vec__24150_24188,(1),null);
cljs.compiler.emits.call(null,"var ",n_24189," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24190))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24190);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24190);
}

cljs.compiler.emitln.call(null,";");


var G__24191 = seq__24146_24184;
var G__24192 = chunk__24147_24185;
var G__24193 = count__24148_24186;
var G__24194 = (i__24149_24187 + (1));
seq__24146_24184 = G__24191;
chunk__24147_24185 = G__24192;
count__24148_24186 = G__24193;
i__24149_24187 = G__24194;
continue;
} else {
var temp__5720__auto___24195 = cljs.core.seq.call(null,seq__24146_24184);
if(temp__5720__auto___24195){
var seq__24146_24196__$1 = temp__5720__auto___24195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24146_24196__$1)){
var c__4461__auto___24197 = cljs.core.chunk_first.call(null,seq__24146_24196__$1);
var G__24198 = cljs.core.chunk_rest.call(null,seq__24146_24196__$1);
var G__24199 = c__4461__auto___24197;
var G__24200 = cljs.core.count.call(null,c__4461__auto___24197);
var G__24201 = (0);
seq__24146_24184 = G__24198;
chunk__24147_24185 = G__24199;
count__24148_24186 = G__24200;
i__24149_24187 = G__24201;
continue;
} else {
var vec__24153_24202 = cljs.core.first.call(null,seq__24146_24196__$1);
var n_24203 = cljs.core.nth.call(null,vec__24153_24202,(0),null);
var meth_24204 = cljs.core.nth.call(null,vec__24153_24202,(1),null);
cljs.compiler.emits.call(null,"var ",n_24203," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24204))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24204);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24204);
}

cljs.compiler.emitln.call(null,";");


var G__24205 = cljs.core.next.call(null,seq__24146_24196__$1);
var G__24206 = null;
var G__24207 = (0);
var G__24208 = (0);
seq__24146_24184 = G__24205;
chunk__24147_24185 = G__24206;
count__24148_24186 = G__24207;
i__24149_24187 = G__24208;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_24180," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_24181),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_24181)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_24181));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__24156_24209 = cljs.core.seq.call(null,ms_24183);
var chunk__24157_24210 = null;
var count__24158_24211 = (0);
var i__24159_24212 = (0);
while(true){
if((i__24159_24212 < count__24158_24211)){
var vec__24160_24213 = cljs.core._nth.call(null,chunk__24157_24210,i__24159_24212);
var n_24214 = cljs.core.nth.call(null,vec__24160_24213,(0),null);
var meth_24215 = cljs.core.nth.call(null,vec__24160_24213,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24215))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24216 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24216," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24217 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24216," = new cljs.core.IndexedSeq(",a_24217,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24214,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24181)),(((cljs.core.count.call(null,maxparams_24181) > (1)))?", ":null),restarg_24216,");");
} else {
var pcnt_24218 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24215));
cljs.compiler.emitln.call(null,"case ",pcnt_24218,":");

cljs.compiler.emitln.call(null,"return ",n_24214,".call(this",(((pcnt_24218 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24218,maxparams_24181)),null,(1),null)),(2),null))),");");
}


var G__24219 = seq__24156_24209;
var G__24220 = chunk__24157_24210;
var G__24221 = count__24158_24211;
var G__24222 = (i__24159_24212 + (1));
seq__24156_24209 = G__24219;
chunk__24157_24210 = G__24220;
count__24158_24211 = G__24221;
i__24159_24212 = G__24222;
continue;
} else {
var temp__5720__auto___24223 = cljs.core.seq.call(null,seq__24156_24209);
if(temp__5720__auto___24223){
var seq__24156_24224__$1 = temp__5720__auto___24223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24156_24224__$1)){
var c__4461__auto___24225 = cljs.core.chunk_first.call(null,seq__24156_24224__$1);
var G__24226 = cljs.core.chunk_rest.call(null,seq__24156_24224__$1);
var G__24227 = c__4461__auto___24225;
var G__24228 = cljs.core.count.call(null,c__4461__auto___24225);
var G__24229 = (0);
seq__24156_24209 = G__24226;
chunk__24157_24210 = G__24227;
count__24158_24211 = G__24228;
i__24159_24212 = G__24229;
continue;
} else {
var vec__24163_24230 = cljs.core.first.call(null,seq__24156_24224__$1);
var n_24231 = cljs.core.nth.call(null,vec__24163_24230,(0),null);
var meth_24232 = cljs.core.nth.call(null,vec__24163_24230,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24232))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24233 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24233," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24234 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24233," = new cljs.core.IndexedSeq(",a_24234,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24231,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24181)),(((cljs.core.count.call(null,maxparams_24181) > (1)))?", ":null),restarg_24233,");");
} else {
var pcnt_24235 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24232));
cljs.compiler.emitln.call(null,"case ",pcnt_24235,":");

cljs.compiler.emitln.call(null,"return ",n_24231,".call(this",(((pcnt_24235 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24235,maxparams_24181)),null,(1),null)),(2),null))),");");
}


var G__24236 = cljs.core.next.call(null,seq__24156_24224__$1);
var G__24237 = null;
var G__24238 = (0);
var G__24239 = (0);
seq__24156_24209 = G__24236;
chunk__24157_24210 = G__24237;
count__24158_24211 = G__24238;
i__24159_24212 = G__24239;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_24240 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_24183)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_24240,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_24180,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_24180,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_24179__$1,mname_24180,maxparams_24181,mmap_24182,ms_24183,loop_locals,map__24144,map__24144__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__24142_SHARP_){
var vec__24166 = p1__24142_SHARP_;
var n = cljs.core.nth.call(null,vec__24166,(0),null);
var m = cljs.core.nth.call(null,vec__24166,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_24179__$1,mname_24180,maxparams_24181,mmap_24182,ms_24183,loop_locals,map__24144,map__24144__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_24183),".cljs$lang$applyTo;");
} else {
}

var seq__24169_24241 = cljs.core.seq.call(null,ms_24183);
var chunk__24170_24242 = null;
var count__24171_24243 = (0);
var i__24172_24244 = (0);
while(true){
if((i__24172_24244 < count__24171_24243)){
var vec__24173_24245 = cljs.core._nth.call(null,chunk__24170_24242,i__24172_24244);
var n_24246 = cljs.core.nth.call(null,vec__24173_24245,(0),null);
var meth_24247 = cljs.core.nth.call(null,vec__24173_24245,(1),null);
var c_24248 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24247));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24247))){
cljs.compiler.emitln.call(null,mname_24180,".cljs$core$IFn$_invoke$arity$variadic = ",n_24246,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24180,".cljs$core$IFn$_invoke$arity$",c_24248," = ",n_24246,";");
}


var G__24249 = seq__24169_24241;
var G__24250 = chunk__24170_24242;
var G__24251 = count__24171_24243;
var G__24252 = (i__24172_24244 + (1));
seq__24169_24241 = G__24249;
chunk__24170_24242 = G__24250;
count__24171_24243 = G__24251;
i__24172_24244 = G__24252;
continue;
} else {
var temp__5720__auto___24253 = cljs.core.seq.call(null,seq__24169_24241);
if(temp__5720__auto___24253){
var seq__24169_24254__$1 = temp__5720__auto___24253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24169_24254__$1)){
var c__4461__auto___24255 = cljs.core.chunk_first.call(null,seq__24169_24254__$1);
var G__24256 = cljs.core.chunk_rest.call(null,seq__24169_24254__$1);
var G__24257 = c__4461__auto___24255;
var G__24258 = cljs.core.count.call(null,c__4461__auto___24255);
var G__24259 = (0);
seq__24169_24241 = G__24256;
chunk__24170_24242 = G__24257;
count__24171_24243 = G__24258;
i__24172_24244 = G__24259;
continue;
} else {
var vec__24176_24260 = cljs.core.first.call(null,seq__24169_24254__$1);
var n_24261 = cljs.core.nth.call(null,vec__24176_24260,(0),null);
var meth_24262 = cljs.core.nth.call(null,vec__24176_24260,(1),null);
var c_24263 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24262));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24262))){
cljs.compiler.emitln.call(null,mname_24180,".cljs$core$IFn$_invoke$arity$variadic = ",n_24261,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24180,".cljs$core$IFn$_invoke$arity$",c_24263," = ",n_24261,";");
}


var G__24264 = cljs.core.next.call(null,seq__24169_24254__$1);
var G__24265 = null;
var G__24266 = (0);
var G__24267 = (0);
seq__24169_24241 = G__24264;
chunk__24170_24242 = G__24265;
count__24171_24243 = G__24266;
i__24172_24244 = G__24267;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_24180,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24268){
var map__24269 = p__24268;
var map__24269__$1 = (((((!((map__24269 == null))))?(((((map__24269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24269):map__24269);
var statements = cljs.core.get.call(null,map__24269__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__24269__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__24269__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__24271_24275 = cljs.core.seq.call(null,statements);
var chunk__24272_24276 = null;
var count__24273_24277 = (0);
var i__24274_24278 = (0);
while(true){
if((i__24274_24278 < count__24273_24277)){
var s_24279 = cljs.core._nth.call(null,chunk__24272_24276,i__24274_24278);
cljs.compiler.emitln.call(null,s_24279);


var G__24280 = seq__24271_24275;
var G__24281 = chunk__24272_24276;
var G__24282 = count__24273_24277;
var G__24283 = (i__24274_24278 + (1));
seq__24271_24275 = G__24280;
chunk__24272_24276 = G__24281;
count__24273_24277 = G__24282;
i__24274_24278 = G__24283;
continue;
} else {
var temp__5720__auto___24284 = cljs.core.seq.call(null,seq__24271_24275);
if(temp__5720__auto___24284){
var seq__24271_24285__$1 = temp__5720__auto___24284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24271_24285__$1)){
var c__4461__auto___24286 = cljs.core.chunk_first.call(null,seq__24271_24285__$1);
var G__24287 = cljs.core.chunk_rest.call(null,seq__24271_24285__$1);
var G__24288 = c__4461__auto___24286;
var G__24289 = cljs.core.count.call(null,c__4461__auto___24286);
var G__24290 = (0);
seq__24271_24275 = G__24287;
chunk__24272_24276 = G__24288;
count__24273_24277 = G__24289;
i__24274_24278 = G__24290;
continue;
} else {
var s_24291 = cljs.core.first.call(null,seq__24271_24285__$1);
cljs.compiler.emitln.call(null,s_24291);


var G__24292 = cljs.core.next.call(null,seq__24271_24285__$1);
var G__24293 = null;
var G__24294 = (0);
var G__24295 = (0);
seq__24271_24275 = G__24292;
chunk__24272_24276 = G__24293;
count__24273_24277 = G__24294;
i__24274_24278 = G__24295;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24296){
var map__24297 = p__24296;
var map__24297__$1 = (((((!((map__24297 == null))))?(((((map__24297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24297):map__24297);
var try$ = cljs.core.get.call(null,map__24297__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__24297__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__24297__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__24297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__24297__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24299,is_loop){
var map__24300 = p__24299;
var map__24300__$1 = (((((!((map__24300 == null))))?(((((map__24300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24300):map__24300);
var expr = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24302_24312 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24303_24313 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__24302_24312,context,map__24300,map__24300__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__24302_24312,context,map__24300,map__24300__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24303_24313;

try{var seq__24304_24314 = cljs.core.seq.call(null,bindings);
var chunk__24305_24315 = null;
var count__24306_24316 = (0);
var i__24307_24317 = (0);
while(true){
if((i__24307_24317 < count__24306_24316)){
var map__24308_24318 = cljs.core._nth.call(null,chunk__24305_24315,i__24307_24317);
var map__24308_24319__$1 = (((((!((map__24308_24318 == null))))?(((((map__24308_24318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24308_24318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24308_24318):map__24308_24318);
var binding_24320 = map__24308_24319__$1;
var init_24321 = cljs.core.get.call(null,map__24308_24319__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24320);

cljs.compiler.emitln.call(null," = ",init_24321,";");


var G__24322 = seq__24304_24314;
var G__24323 = chunk__24305_24315;
var G__24324 = count__24306_24316;
var G__24325 = (i__24307_24317 + (1));
seq__24304_24314 = G__24322;
chunk__24305_24315 = G__24323;
count__24306_24316 = G__24324;
i__24307_24317 = G__24325;
continue;
} else {
var temp__5720__auto___24326 = cljs.core.seq.call(null,seq__24304_24314);
if(temp__5720__auto___24326){
var seq__24304_24327__$1 = temp__5720__auto___24326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24304_24327__$1)){
var c__4461__auto___24328 = cljs.core.chunk_first.call(null,seq__24304_24327__$1);
var G__24329 = cljs.core.chunk_rest.call(null,seq__24304_24327__$1);
var G__24330 = c__4461__auto___24328;
var G__24331 = cljs.core.count.call(null,c__4461__auto___24328);
var G__24332 = (0);
seq__24304_24314 = G__24329;
chunk__24305_24315 = G__24330;
count__24306_24316 = G__24331;
i__24307_24317 = G__24332;
continue;
} else {
var map__24310_24333 = cljs.core.first.call(null,seq__24304_24327__$1);
var map__24310_24334__$1 = (((((!((map__24310_24333 == null))))?(((((map__24310_24333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24310_24333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24310_24333):map__24310_24333);
var binding_24335 = map__24310_24334__$1;
var init_24336 = cljs.core.get.call(null,map__24310_24334__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24335);

cljs.compiler.emitln.call(null," = ",init_24336,";");


var G__24337 = cljs.core.next.call(null,seq__24304_24327__$1);
var G__24338 = null;
var G__24339 = (0);
var G__24340 = (0);
seq__24304_24314 = G__24337;
chunk__24305_24315 = G__24338;
count__24306_24316 = G__24339;
i__24307_24317 = G__24340;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24302_24312;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24341){
var map__24342 = p__24341;
var map__24342__$1 = (((((!((map__24342 == null))))?(((((map__24342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24342):map__24342);
var frame = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___24344 = cljs.core.count.call(null,exprs);
var i_24345 = (0);
while(true){
if((i_24345 < n__4518__auto___24344)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_24345)," = ",exprs.call(null,i_24345),";");

var G__24346 = (i_24345 + (1));
i_24345 = G__24346;
continue;
} else {
}
break;
}

var n__4518__auto___24347 = cljs.core.count.call(null,exprs);
var i_24348 = (0);
while(true){
if((i_24348 < n__4518__auto___24347)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_24348))," = ",temps.call(null,i_24348),";");

var G__24349 = (i_24348 + (1));
i_24348 = G__24349;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24350){
var map__24351 = p__24350;
var map__24351__$1 = (((((!((map__24351 == null))))?(((((map__24351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24351):map__24351);
var expr = cljs.core.get.call(null,map__24351__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__24351__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__24351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__24353_24361 = cljs.core.seq.call(null,bindings);
var chunk__24354_24362 = null;
var count__24355_24363 = (0);
var i__24356_24364 = (0);
while(true){
if((i__24356_24364 < count__24355_24363)){
var map__24357_24365 = cljs.core._nth.call(null,chunk__24354_24362,i__24356_24364);
var map__24357_24366__$1 = (((((!((map__24357_24365 == null))))?(((((map__24357_24365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24357_24365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24357_24365):map__24357_24365);
var binding_24367 = map__24357_24366__$1;
var init_24368 = cljs.core.get.call(null,map__24357_24366__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24367)," = ",init_24368,";");


var G__24369 = seq__24353_24361;
var G__24370 = chunk__24354_24362;
var G__24371 = count__24355_24363;
var G__24372 = (i__24356_24364 + (1));
seq__24353_24361 = G__24369;
chunk__24354_24362 = G__24370;
count__24355_24363 = G__24371;
i__24356_24364 = G__24372;
continue;
} else {
var temp__5720__auto___24373 = cljs.core.seq.call(null,seq__24353_24361);
if(temp__5720__auto___24373){
var seq__24353_24374__$1 = temp__5720__auto___24373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24353_24374__$1)){
var c__4461__auto___24375 = cljs.core.chunk_first.call(null,seq__24353_24374__$1);
var G__24376 = cljs.core.chunk_rest.call(null,seq__24353_24374__$1);
var G__24377 = c__4461__auto___24375;
var G__24378 = cljs.core.count.call(null,c__4461__auto___24375);
var G__24379 = (0);
seq__24353_24361 = G__24376;
chunk__24354_24362 = G__24377;
count__24355_24363 = G__24378;
i__24356_24364 = G__24379;
continue;
} else {
var map__24359_24380 = cljs.core.first.call(null,seq__24353_24374__$1);
var map__24359_24381__$1 = (((((!((map__24359_24380 == null))))?(((((map__24359_24380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24359_24380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24359_24380):map__24359_24380);
var binding_24382 = map__24359_24381__$1;
var init_24383 = cljs.core.get.call(null,map__24359_24381__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24382)," = ",init_24383,";");


var G__24384 = cljs.core.next.call(null,seq__24353_24374__$1);
var G__24385 = null;
var G__24386 = (0);
var G__24387 = (0);
seq__24353_24361 = G__24384;
chunk__24354_24362 = G__24385;
count__24355_24363 = G__24386;
i__24356_24364 = G__24387;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24390){
var map__24391 = p__24390;
var map__24391__$1 = (((((!((map__24391 == null))))?(((((map__24391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24391):map__24391);
var expr = map__24391__$1;
var f = cljs.core.get.call(null,map__24391__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__24391__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24391__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4036__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4036__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4036__auto__ = protocol;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = tag;
if(cljs.core.truth_(and__4036__auto____$1)){
var or__4047__auto__ = (function (){var and__4036__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto____$2){
var and__4036__auto____$3 = protocol;
if(cljs.core.truth_(and__4036__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4036__auto____$3;
}
} else {
return and__4036__auto____$2;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto____$2 = (function (){var or__4047__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4036__auto____$2)){
var or__4047__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
var and__4036__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4036__auto____$3){
var and__4036__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4036__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4036__auto____$4;
}
} else {
return and__4036__auto____$3;
}
}
} else {
return and__4036__auto____$2;
}
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4047__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4047__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__24393 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (arity > mfa);
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24391,map__24391__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24391,map__24391__$1,expr,f,args,env){
return (function (p1__24388_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24388_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24391,map__24391__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24391,map__24391__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24391,map__24391__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24391,map__24391__$1,expr,f,args,env){
return (function (p1__24389_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24389_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24391,map__24391__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24391,map__24391__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__24393,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__24393,(1),null);
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_24396 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_24396,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_24397 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_24397,args)),(((mfa_24397 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_24397,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = js_QMARK_;
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4036__auto__;
}
})())){
var fprop_24398 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_24398," ? ",f__$1,fprop_24398,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_24398," ? ",f__$1,fprop_24398,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24399){
var map__24400 = p__24399;
var map__24400__$1 = (((((!((map__24400 == null))))?(((((map__24400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24400):map__24400);
var ctor = cljs.core.get.call(null,map__24400__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__24400__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24400__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24402){
var map__24403 = p__24402;
var map__24403__$1 = (((((!((map__24403 == null))))?(((((map__24403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24403):map__24403);
var target = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4047__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__24405 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__24405__$1 = (((((!((map__24405 == null))))?(((((map__24405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24405):map__24405);
var options = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__24406 = options;
var map__24406__$1 = (((((!((map__24406 == null))))?(((((map__24406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24406):map__24406);
var target = cljs.core.get.call(null,map__24406__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__24406__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__24407 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__24412 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__24412__$1 = (((((!((map__24412 == null))))?(((((map__24412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24412):map__24412);
var node_libs = cljs.core.get.call(null,map__24412__$1,true);
var libs_to_load = cljs.core.get.call(null,map__24412__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__24407,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__24407,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__24414_24430 = cljs.core.seq.call(null,libs_to_load);
var chunk__24415_24431 = null;
var count__24416_24432 = (0);
var i__24417_24433 = (0);
while(true){
if((i__24417_24433 < count__24416_24432)){
var lib_24434 = cljs.core._nth.call(null,chunk__24415_24431,i__24417_24433);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_24434)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24434),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24434),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24434),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24434),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_24434,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24434),"');");
}

}
}
}


var G__24435 = seq__24414_24430;
var G__24436 = chunk__24415_24431;
var G__24437 = count__24416_24432;
var G__24438 = (i__24417_24433 + (1));
seq__24414_24430 = G__24435;
chunk__24415_24431 = G__24436;
count__24416_24432 = G__24437;
i__24417_24433 = G__24438;
continue;
} else {
var temp__5720__auto___24439 = cljs.core.seq.call(null,seq__24414_24430);
if(temp__5720__auto___24439){
var seq__24414_24440__$1 = temp__5720__auto___24439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24414_24440__$1)){
var c__4461__auto___24441 = cljs.core.chunk_first.call(null,seq__24414_24440__$1);
var G__24442 = cljs.core.chunk_rest.call(null,seq__24414_24440__$1);
var G__24443 = c__4461__auto___24441;
var G__24444 = cljs.core.count.call(null,c__4461__auto___24441);
var G__24445 = (0);
seq__24414_24430 = G__24442;
chunk__24415_24431 = G__24443;
count__24416_24432 = G__24444;
i__24417_24433 = G__24445;
continue;
} else {
var lib_24446 = cljs.core.first.call(null,seq__24414_24440__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_24446)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24446),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24446),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24446),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24446),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_24446,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24446),"');");
}

}
}
}


var G__24447 = cljs.core.next.call(null,seq__24414_24440__$1);
var G__24448 = null;
var G__24449 = (0);
var G__24450 = (0);
seq__24414_24430 = G__24447;
chunk__24415_24431 = G__24448;
count__24416_24432 = G__24449;
i__24417_24433 = G__24450;
continue;
}
} else {
}
}
break;
}

var seq__24418_24451 = cljs.core.seq.call(null,node_libs);
var chunk__24419_24452 = null;
var count__24420_24453 = (0);
var i__24421_24454 = (0);
while(true){
if((i__24421_24454 < count__24420_24453)){
var lib_24455 = cljs.core._nth.call(null,chunk__24419_24452,i__24421_24454);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_24455)," = require('",lib_24455,"');");


var G__24456 = seq__24418_24451;
var G__24457 = chunk__24419_24452;
var G__24458 = count__24420_24453;
var G__24459 = (i__24421_24454 + (1));
seq__24418_24451 = G__24456;
chunk__24419_24452 = G__24457;
count__24420_24453 = G__24458;
i__24421_24454 = G__24459;
continue;
} else {
var temp__5720__auto___24460 = cljs.core.seq.call(null,seq__24418_24451);
if(temp__5720__auto___24460){
var seq__24418_24461__$1 = temp__5720__auto___24460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24418_24461__$1)){
var c__4461__auto___24462 = cljs.core.chunk_first.call(null,seq__24418_24461__$1);
var G__24463 = cljs.core.chunk_rest.call(null,seq__24418_24461__$1);
var G__24464 = c__4461__auto___24462;
var G__24465 = cljs.core.count.call(null,c__4461__auto___24462);
var G__24466 = (0);
seq__24418_24451 = G__24463;
chunk__24419_24452 = G__24464;
count__24420_24453 = G__24465;
i__24421_24454 = G__24466;
continue;
} else {
var lib_24467 = cljs.core.first.call(null,seq__24418_24461__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_24467)," = require('",lib_24467,"');");


var G__24468 = cljs.core.next.call(null,seq__24418_24461__$1);
var G__24469 = null;
var G__24470 = (0);
var G__24471 = (0);
seq__24418_24451 = G__24468;
chunk__24419_24452 = G__24469;
count__24420_24453 = G__24470;
i__24421_24454 = G__24471;
continue;
}
} else {
}
}
break;
}

var seq__24422_24472 = cljs.core.seq.call(null,global_exports_libs);
var chunk__24423_24473 = null;
var count__24424_24474 = (0);
var i__24425_24475 = (0);
while(true){
if((i__24425_24475 < count__24424_24474)){
var lib_24476 = cljs.core._nth.call(null,chunk__24423_24473,i__24425_24475);
var map__24426_24477 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_24476));
var map__24426_24478__$1 = (((((!((map__24426_24477 == null))))?(((((map__24426_24477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24426_24477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24426_24477):map__24426_24477);
var global_exports_24479 = cljs.core.get.call(null,map__24426_24478__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_24479,lib_24476);


var G__24480 = seq__24422_24472;
var G__24481 = chunk__24423_24473;
var G__24482 = count__24424_24474;
var G__24483 = (i__24425_24475 + (1));
seq__24422_24472 = G__24480;
chunk__24423_24473 = G__24481;
count__24424_24474 = G__24482;
i__24425_24475 = G__24483;
continue;
} else {
var temp__5720__auto___24484 = cljs.core.seq.call(null,seq__24422_24472);
if(temp__5720__auto___24484){
var seq__24422_24485__$1 = temp__5720__auto___24484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24422_24485__$1)){
var c__4461__auto___24486 = cljs.core.chunk_first.call(null,seq__24422_24485__$1);
var G__24487 = cljs.core.chunk_rest.call(null,seq__24422_24485__$1);
var G__24488 = c__4461__auto___24486;
var G__24489 = cljs.core.count.call(null,c__4461__auto___24486);
var G__24490 = (0);
seq__24422_24472 = G__24487;
chunk__24423_24473 = G__24488;
count__24424_24474 = G__24489;
i__24425_24475 = G__24490;
continue;
} else {
var lib_24491 = cljs.core.first.call(null,seq__24422_24485__$1);
var map__24428_24492 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_24491));
var map__24428_24493__$1 = (((((!((map__24428_24492 == null))))?(((((map__24428_24492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24428_24492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428_24492):map__24428_24492);
var global_exports_24494 = cljs.core.get.call(null,map__24428_24493__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_24494,lib_24491);


var G__24495 = cljs.core.next.call(null,seq__24422_24485__$1);
var G__24496 = null;
var G__24497 = (0);
var G__24498 = (0);
seq__24422_24472 = G__24495;
chunk__24423_24473 = G__24496;
count__24424_24474 = G__24497;
i__24425_24475 = G__24498;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24499){
var map__24500 = p__24499;
var map__24500__$1 = (((((!((map__24500 == null))))?(((((map__24500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24500):map__24500);
var name = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24502){
var map__24503 = p__24502;
var map__24503__$1 = (((((!((map__24503 == null))))?(((((map__24503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24503):map__24503);
var name = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__24505){
var map__24506 = p__24505;
var map__24506__$1 = (((((!((map__24506 == null))))?(((((map__24506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24506):map__24506);
var t = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24508_24526 = cljs.core.seq.call(null,protocols);
var chunk__24509_24527 = null;
var count__24510_24528 = (0);
var i__24511_24529 = (0);
while(true){
if((i__24511_24529 < count__24510_24528)){
var protocol_24530 = cljs.core._nth.call(null,chunk__24509_24527,i__24511_24529);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24530)),"}");


var G__24531 = seq__24508_24526;
var G__24532 = chunk__24509_24527;
var G__24533 = count__24510_24528;
var G__24534 = (i__24511_24529 + (1));
seq__24508_24526 = G__24531;
chunk__24509_24527 = G__24532;
count__24510_24528 = G__24533;
i__24511_24529 = G__24534;
continue;
} else {
var temp__5720__auto___24535 = cljs.core.seq.call(null,seq__24508_24526);
if(temp__5720__auto___24535){
var seq__24508_24536__$1 = temp__5720__auto___24535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24508_24536__$1)){
var c__4461__auto___24537 = cljs.core.chunk_first.call(null,seq__24508_24536__$1);
var G__24538 = cljs.core.chunk_rest.call(null,seq__24508_24536__$1);
var G__24539 = c__4461__auto___24537;
var G__24540 = cljs.core.count.call(null,c__4461__auto___24537);
var G__24541 = (0);
seq__24508_24526 = G__24538;
chunk__24509_24527 = G__24539;
count__24510_24528 = G__24540;
i__24511_24529 = G__24541;
continue;
} else {
var protocol_24542 = cljs.core.first.call(null,seq__24508_24536__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24542)),"}");


var G__24543 = cljs.core.next.call(null,seq__24508_24536__$1);
var G__24544 = null;
var G__24545 = (0);
var G__24546 = (0);
seq__24508_24526 = G__24543;
chunk__24509_24527 = G__24544;
count__24510_24528 = G__24545;
i__24511_24529 = G__24546;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24512_24547 = cljs.core.seq.call(null,fields__$1);
var chunk__24513_24548 = null;
var count__24514_24549 = (0);
var i__24515_24550 = (0);
while(true){
if((i__24515_24550 < count__24514_24549)){
var fld_24551 = cljs.core._nth.call(null,chunk__24513_24548,i__24515_24550);
cljs.compiler.emitln.call(null,"this.",fld_24551," = ",fld_24551,";");


var G__24552 = seq__24512_24547;
var G__24553 = chunk__24513_24548;
var G__24554 = count__24514_24549;
var G__24555 = (i__24515_24550 + (1));
seq__24512_24547 = G__24552;
chunk__24513_24548 = G__24553;
count__24514_24549 = G__24554;
i__24515_24550 = G__24555;
continue;
} else {
var temp__5720__auto___24556 = cljs.core.seq.call(null,seq__24512_24547);
if(temp__5720__auto___24556){
var seq__24512_24557__$1 = temp__5720__auto___24556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24512_24557__$1)){
var c__4461__auto___24558 = cljs.core.chunk_first.call(null,seq__24512_24557__$1);
var G__24559 = cljs.core.chunk_rest.call(null,seq__24512_24557__$1);
var G__24560 = c__4461__auto___24558;
var G__24561 = cljs.core.count.call(null,c__4461__auto___24558);
var G__24562 = (0);
seq__24512_24547 = G__24559;
chunk__24513_24548 = G__24560;
count__24514_24549 = G__24561;
i__24515_24550 = G__24562;
continue;
} else {
var fld_24563 = cljs.core.first.call(null,seq__24512_24557__$1);
cljs.compiler.emitln.call(null,"this.",fld_24563," = ",fld_24563,";");


var G__24564 = cljs.core.next.call(null,seq__24512_24557__$1);
var G__24565 = null;
var G__24566 = (0);
var G__24567 = (0);
seq__24512_24547 = G__24564;
chunk__24513_24548 = G__24565;
count__24514_24549 = G__24566;
i__24515_24550 = G__24567;
continue;
}
} else {
}
}
break;
}

var seq__24516_24568 = cljs.core.seq.call(null,pmasks);
var chunk__24517_24569 = null;
var count__24518_24570 = (0);
var i__24519_24571 = (0);
while(true){
if((i__24519_24571 < count__24518_24570)){
var vec__24520_24572 = cljs.core._nth.call(null,chunk__24517_24569,i__24519_24571);
var pno_24573 = cljs.core.nth.call(null,vec__24520_24572,(0),null);
var pmask_24574 = cljs.core.nth.call(null,vec__24520_24572,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24573,"$ = ",pmask_24574,";");


var G__24575 = seq__24516_24568;
var G__24576 = chunk__24517_24569;
var G__24577 = count__24518_24570;
var G__24578 = (i__24519_24571 + (1));
seq__24516_24568 = G__24575;
chunk__24517_24569 = G__24576;
count__24518_24570 = G__24577;
i__24519_24571 = G__24578;
continue;
} else {
var temp__5720__auto___24579 = cljs.core.seq.call(null,seq__24516_24568);
if(temp__5720__auto___24579){
var seq__24516_24580__$1 = temp__5720__auto___24579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24516_24580__$1)){
var c__4461__auto___24581 = cljs.core.chunk_first.call(null,seq__24516_24580__$1);
var G__24582 = cljs.core.chunk_rest.call(null,seq__24516_24580__$1);
var G__24583 = c__4461__auto___24581;
var G__24584 = cljs.core.count.call(null,c__4461__auto___24581);
var G__24585 = (0);
seq__24516_24568 = G__24582;
chunk__24517_24569 = G__24583;
count__24518_24570 = G__24584;
i__24519_24571 = G__24585;
continue;
} else {
var vec__24523_24586 = cljs.core.first.call(null,seq__24516_24580__$1);
var pno_24587 = cljs.core.nth.call(null,vec__24523_24586,(0),null);
var pmask_24588 = cljs.core.nth.call(null,vec__24523_24586,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24587,"$ = ",pmask_24588,";");


var G__24589 = cljs.core.next.call(null,seq__24516_24580__$1);
var G__24590 = null;
var G__24591 = (0);
var G__24592 = (0);
seq__24516_24568 = G__24589;
chunk__24517_24569 = G__24590;
count__24518_24570 = G__24591;
i__24519_24571 = G__24592;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__24593){
var map__24594 = p__24593;
var map__24594__$1 = (((((!((map__24594 == null))))?(((((map__24594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24594):map__24594);
var t = cljs.core.get.call(null,map__24594__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24594__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24594__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24594__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24594__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24596_24614 = cljs.core.seq.call(null,protocols);
var chunk__24597_24615 = null;
var count__24598_24616 = (0);
var i__24599_24617 = (0);
while(true){
if((i__24599_24617 < count__24598_24616)){
var protocol_24618 = cljs.core._nth.call(null,chunk__24597_24615,i__24599_24617);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24618)),"}");


var G__24619 = seq__24596_24614;
var G__24620 = chunk__24597_24615;
var G__24621 = count__24598_24616;
var G__24622 = (i__24599_24617 + (1));
seq__24596_24614 = G__24619;
chunk__24597_24615 = G__24620;
count__24598_24616 = G__24621;
i__24599_24617 = G__24622;
continue;
} else {
var temp__5720__auto___24623 = cljs.core.seq.call(null,seq__24596_24614);
if(temp__5720__auto___24623){
var seq__24596_24624__$1 = temp__5720__auto___24623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24596_24624__$1)){
var c__4461__auto___24625 = cljs.core.chunk_first.call(null,seq__24596_24624__$1);
var G__24626 = cljs.core.chunk_rest.call(null,seq__24596_24624__$1);
var G__24627 = c__4461__auto___24625;
var G__24628 = cljs.core.count.call(null,c__4461__auto___24625);
var G__24629 = (0);
seq__24596_24614 = G__24626;
chunk__24597_24615 = G__24627;
count__24598_24616 = G__24628;
i__24599_24617 = G__24629;
continue;
} else {
var protocol_24630 = cljs.core.first.call(null,seq__24596_24624__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24630)),"}");


var G__24631 = cljs.core.next.call(null,seq__24596_24624__$1);
var G__24632 = null;
var G__24633 = (0);
var G__24634 = (0);
seq__24596_24614 = G__24631;
chunk__24597_24615 = G__24632;
count__24598_24616 = G__24633;
i__24599_24617 = G__24634;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24600_24635 = cljs.core.seq.call(null,fields__$1);
var chunk__24601_24636 = null;
var count__24602_24637 = (0);
var i__24603_24638 = (0);
while(true){
if((i__24603_24638 < count__24602_24637)){
var fld_24639 = cljs.core._nth.call(null,chunk__24601_24636,i__24603_24638);
cljs.compiler.emitln.call(null,"this.",fld_24639," = ",fld_24639,";");


var G__24640 = seq__24600_24635;
var G__24641 = chunk__24601_24636;
var G__24642 = count__24602_24637;
var G__24643 = (i__24603_24638 + (1));
seq__24600_24635 = G__24640;
chunk__24601_24636 = G__24641;
count__24602_24637 = G__24642;
i__24603_24638 = G__24643;
continue;
} else {
var temp__5720__auto___24644 = cljs.core.seq.call(null,seq__24600_24635);
if(temp__5720__auto___24644){
var seq__24600_24645__$1 = temp__5720__auto___24644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24600_24645__$1)){
var c__4461__auto___24646 = cljs.core.chunk_first.call(null,seq__24600_24645__$1);
var G__24647 = cljs.core.chunk_rest.call(null,seq__24600_24645__$1);
var G__24648 = c__4461__auto___24646;
var G__24649 = cljs.core.count.call(null,c__4461__auto___24646);
var G__24650 = (0);
seq__24600_24635 = G__24647;
chunk__24601_24636 = G__24648;
count__24602_24637 = G__24649;
i__24603_24638 = G__24650;
continue;
} else {
var fld_24651 = cljs.core.first.call(null,seq__24600_24645__$1);
cljs.compiler.emitln.call(null,"this.",fld_24651," = ",fld_24651,";");


var G__24652 = cljs.core.next.call(null,seq__24600_24645__$1);
var G__24653 = null;
var G__24654 = (0);
var G__24655 = (0);
seq__24600_24635 = G__24652;
chunk__24601_24636 = G__24653;
count__24602_24637 = G__24654;
i__24603_24638 = G__24655;
continue;
}
} else {
}
}
break;
}

var seq__24604_24656 = cljs.core.seq.call(null,pmasks);
var chunk__24605_24657 = null;
var count__24606_24658 = (0);
var i__24607_24659 = (0);
while(true){
if((i__24607_24659 < count__24606_24658)){
var vec__24608_24660 = cljs.core._nth.call(null,chunk__24605_24657,i__24607_24659);
var pno_24661 = cljs.core.nth.call(null,vec__24608_24660,(0),null);
var pmask_24662 = cljs.core.nth.call(null,vec__24608_24660,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24661,"$ = ",pmask_24662,";");


var G__24663 = seq__24604_24656;
var G__24664 = chunk__24605_24657;
var G__24665 = count__24606_24658;
var G__24666 = (i__24607_24659 + (1));
seq__24604_24656 = G__24663;
chunk__24605_24657 = G__24664;
count__24606_24658 = G__24665;
i__24607_24659 = G__24666;
continue;
} else {
var temp__5720__auto___24667 = cljs.core.seq.call(null,seq__24604_24656);
if(temp__5720__auto___24667){
var seq__24604_24668__$1 = temp__5720__auto___24667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24604_24668__$1)){
var c__4461__auto___24669 = cljs.core.chunk_first.call(null,seq__24604_24668__$1);
var G__24670 = cljs.core.chunk_rest.call(null,seq__24604_24668__$1);
var G__24671 = c__4461__auto___24669;
var G__24672 = cljs.core.count.call(null,c__4461__auto___24669);
var G__24673 = (0);
seq__24604_24656 = G__24670;
chunk__24605_24657 = G__24671;
count__24606_24658 = G__24672;
i__24607_24659 = G__24673;
continue;
} else {
var vec__24611_24674 = cljs.core.first.call(null,seq__24604_24668__$1);
var pno_24675 = cljs.core.nth.call(null,vec__24611_24674,(0),null);
var pmask_24676 = cljs.core.nth.call(null,vec__24611_24674,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24675,"$ = ",pmask_24676,";");


var G__24677 = cljs.core.next.call(null,seq__24604_24668__$1);
var G__24678 = null;
var G__24679 = (0);
var G__24680 = (0);
seq__24604_24656 = G__24677;
chunk__24605_24657 = G__24678;
count__24606_24658 = G__24679;
i__24607_24659 = G__24680;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__24681){
var map__24682 = p__24681;
var map__24682__$1 = (((((!((map__24682 == null))))?(((((map__24682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24682):map__24682);
var target = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__24684){
var map__24685 = p__24684;
var map__24685__$1 = (((((!((map__24685 == null))))?(((((map__24685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24685):map__24685);
var op = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__23551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__24691 = cljs.core.seq.call(null,table);
var chunk__24692 = null;
var count__24693 = (0);
var i__24694 = (0);
while(true){
if((i__24694 < count__24693)){
var vec__24695 = cljs.core._nth.call(null,chunk__24692,i__24694);
var sym = cljs.core.nth.call(null,vec__24695,(0),null);
var value = cljs.core.nth.call(null,vec__24695,(1),null);
var ns_24701 = cljs.core.namespace.call(null,sym);
var name_24702 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__24703 = seq__24691;
var G__24704 = chunk__24692;
var G__24705 = count__24693;
var G__24706 = (i__24694 + (1));
seq__24691 = G__24703;
chunk__24692 = G__24704;
count__24693 = G__24705;
i__24694 = G__24706;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24691);
if(temp__5720__auto__){
var seq__24691__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24691__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__24691__$1);
var G__24707 = cljs.core.chunk_rest.call(null,seq__24691__$1);
var G__24708 = c__4461__auto__;
var G__24709 = cljs.core.count.call(null,c__4461__auto__);
var G__24710 = (0);
seq__24691 = G__24707;
chunk__24692 = G__24708;
count__24693 = G__24709;
i__24694 = G__24710;
continue;
} else {
var vec__24698 = cljs.core.first.call(null,seq__24691__$1);
var sym = cljs.core.nth.call(null,vec__24698,(0),null);
var value = cljs.core.nth.call(null,vec__24698,(1),null);
var ns_24711 = cljs.core.namespace.call(null,sym);
var name_24712 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__24713 = cljs.core.next.call(null,seq__24691__$1);
var G__24714 = null;
var G__24715 = (0);
var G__24716 = (0);
seq__24691 = G__24713;
chunk__24692 = G__24714;
count__24693 = G__24715;
i__24694 = G__24716;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__24718 = arguments.length;
switch (G__24718) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_24723 = cljs.core.first.call(null,ks);
var vec__24719_24724 = cljs.core.conj.call(null,prefix,k_24723);
var top_24725 = cljs.core.nth.call(null,vec__24719_24724,(0),null);
var prefix_SINGLEQUOTE__24726 = vec__24719_24724;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_24723)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__24726) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_24725)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_24725)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__24726)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_24725);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__24726)),";");
}
} else {
}

var m_24727 = cljs.core.get.call(null,externs,k_24723);
if(cljs.core.empty_QMARK_.call(null,m_24727)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__24726,m_24727,top_level,known_externs);
}

var G__24728 = cljs.core.next.call(null,ks);
ks = G__24728;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1557850987556
