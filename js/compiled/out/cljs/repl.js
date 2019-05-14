// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30977){
var map__30978 = p__30977;
var map__30978__$1 = (((((!((map__30978 == null))))?(((((map__30978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30978):map__30978);
var m = map__30978__$1;
var n = cljs.core.get.call(null,map__30978__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30978__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30980_31002 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30981_31003 = null;
var count__30982_31004 = (0);
var i__30983_31005 = (0);
while(true){
if((i__30983_31005 < count__30982_31004)){
var f_31006 = cljs.core._nth.call(null,chunk__30981_31003,i__30983_31005);
cljs.core.println.call(null,"  ",f_31006);


var G__31007 = seq__30980_31002;
var G__31008 = chunk__30981_31003;
var G__31009 = count__30982_31004;
var G__31010 = (i__30983_31005 + (1));
seq__30980_31002 = G__31007;
chunk__30981_31003 = G__31008;
count__30982_31004 = G__31009;
i__30983_31005 = G__31010;
continue;
} else {
var temp__5720__auto___31011 = cljs.core.seq.call(null,seq__30980_31002);
if(temp__5720__auto___31011){
var seq__30980_31012__$1 = temp__5720__auto___31011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30980_31012__$1)){
var c__4461__auto___31013 = cljs.core.chunk_first.call(null,seq__30980_31012__$1);
var G__31014 = cljs.core.chunk_rest.call(null,seq__30980_31012__$1);
var G__31015 = c__4461__auto___31013;
var G__31016 = cljs.core.count.call(null,c__4461__auto___31013);
var G__31017 = (0);
seq__30980_31002 = G__31014;
chunk__30981_31003 = G__31015;
count__30982_31004 = G__31016;
i__30983_31005 = G__31017;
continue;
} else {
var f_31018 = cljs.core.first.call(null,seq__30980_31012__$1);
cljs.core.println.call(null,"  ",f_31018);


var G__31019 = cljs.core.next.call(null,seq__30980_31012__$1);
var G__31020 = null;
var G__31021 = (0);
var G__31022 = (0);
seq__30980_31002 = G__31019;
chunk__30981_31003 = G__31020;
count__30982_31004 = G__31021;
i__30983_31005 = G__31022;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31023 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31023);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31023)))?cljs.core.second.call(null,arglists_31023):arglists_31023));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30984_31024 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30985_31025 = null;
var count__30986_31026 = (0);
var i__30987_31027 = (0);
while(true){
if((i__30987_31027 < count__30986_31026)){
var vec__30988_31028 = cljs.core._nth.call(null,chunk__30985_31025,i__30987_31027);
var name_31029 = cljs.core.nth.call(null,vec__30988_31028,(0),null);
var map__30991_31030 = cljs.core.nth.call(null,vec__30988_31028,(1),null);
var map__30991_31031__$1 = (((((!((map__30991_31030 == null))))?(((((map__30991_31030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30991_31030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30991_31030):map__30991_31030);
var doc_31032 = cljs.core.get.call(null,map__30991_31031__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31033 = cljs.core.get.call(null,map__30991_31031__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31029);

cljs.core.println.call(null," ",arglists_31033);

if(cljs.core.truth_(doc_31032)){
cljs.core.println.call(null," ",doc_31032);
} else {
}


var G__31034 = seq__30984_31024;
var G__31035 = chunk__30985_31025;
var G__31036 = count__30986_31026;
var G__31037 = (i__30987_31027 + (1));
seq__30984_31024 = G__31034;
chunk__30985_31025 = G__31035;
count__30986_31026 = G__31036;
i__30987_31027 = G__31037;
continue;
} else {
var temp__5720__auto___31038 = cljs.core.seq.call(null,seq__30984_31024);
if(temp__5720__auto___31038){
var seq__30984_31039__$1 = temp__5720__auto___31038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30984_31039__$1)){
var c__4461__auto___31040 = cljs.core.chunk_first.call(null,seq__30984_31039__$1);
var G__31041 = cljs.core.chunk_rest.call(null,seq__30984_31039__$1);
var G__31042 = c__4461__auto___31040;
var G__31043 = cljs.core.count.call(null,c__4461__auto___31040);
var G__31044 = (0);
seq__30984_31024 = G__31041;
chunk__30985_31025 = G__31042;
count__30986_31026 = G__31043;
i__30987_31027 = G__31044;
continue;
} else {
var vec__30993_31045 = cljs.core.first.call(null,seq__30984_31039__$1);
var name_31046 = cljs.core.nth.call(null,vec__30993_31045,(0),null);
var map__30996_31047 = cljs.core.nth.call(null,vec__30993_31045,(1),null);
var map__30996_31048__$1 = (((((!((map__30996_31047 == null))))?(((((map__30996_31047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30996_31047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30996_31047):map__30996_31047);
var doc_31049 = cljs.core.get.call(null,map__30996_31048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31050 = cljs.core.get.call(null,map__30996_31048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31046);

cljs.core.println.call(null," ",arglists_31050);

if(cljs.core.truth_(doc_31049)){
cljs.core.println.call(null," ",doc_31049);
} else {
}


var G__31051 = cljs.core.next.call(null,seq__30984_31039__$1);
var G__31052 = null;
var G__31053 = (0);
var G__31054 = (0);
seq__30984_31024 = G__31051;
chunk__30985_31025 = G__31052;
count__30986_31026 = G__31053;
i__30987_31027 = G__31054;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30998 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30999 = null;
var count__31000 = (0);
var i__31001 = (0);
while(true){
if((i__31001 < count__31000)){
var role = cljs.core._nth.call(null,chunk__30999,i__31001);
var temp__5720__auto___31055__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31055__$1)){
var spec_31056 = temp__5720__auto___31055__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31056));
} else {
}


var G__31057 = seq__30998;
var G__31058 = chunk__30999;
var G__31059 = count__31000;
var G__31060 = (i__31001 + (1));
seq__30998 = G__31057;
chunk__30999 = G__31058;
count__31000 = G__31059;
i__31001 = G__31060;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30998);
if(temp__5720__auto____$1){
var seq__30998__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30998__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30998__$1);
var G__31061 = cljs.core.chunk_rest.call(null,seq__30998__$1);
var G__31062 = c__4461__auto__;
var G__31063 = cljs.core.count.call(null,c__4461__auto__);
var G__31064 = (0);
seq__30998 = G__31061;
chunk__30999 = G__31062;
count__31000 = G__31063;
i__31001 = G__31064;
continue;
} else {
var role = cljs.core.first.call(null,seq__30998__$1);
var temp__5720__auto___31065__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31065__$2)){
var spec_31066 = temp__5720__auto___31065__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31066));
} else {
}


var G__31067 = cljs.core.next.call(null,seq__30998__$1);
var G__31068 = null;
var G__31069 = (0);
var G__31070 = (0);
seq__30998 = G__31067;
chunk__30999 = G__31068;
count__31000 = G__31069;
i__31001 = G__31070;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1557850994448
