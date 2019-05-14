// Compiled by ClojureScript 1.10.439 {}
goog.provide('parinfer.reader');
goog.require('cljs.core');
parinfer.reader.matching_delim = new cljs.core.PersistentArrayMap(null, 6, ["{","}","}","{","[","]","]","[","(",")",")","("], null);
parinfer.reader.opening_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
parinfer.reader.closing_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
parinfer.reader.whitespace_QMARK_ = (function parinfer$reader$whitespace_QMARK_(ch){
return cljs.core.re_find.call(null,/\s/,ch);
});
parinfer.reader.prev_ch = (function parinfer$reader$prev_ch(stack){
return new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,stack));
});
/**
 * Next character will be escaped.
 */
parinfer.reader.escaping_QMARK_ = (function parinfer$reader$escaping_QMARK_(stack){
return cljs.core._EQ_.call(null,"\\",parinfer.reader.prev_ch.call(null,stack));
});
/**
 * Next character is inside a string.
 */
parinfer.reader.in_str_QMARK_ = (function parinfer$reader$in_str_QMARK_(stack){
var ch = parinfer.reader.prev_ch.call(null,(function (){var G__29415 = stack;
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return cljs.core.pop.call(null,G__29415);
} else {
return G__29415;
}
})());
return cljs.core._EQ_.call(null,"\"",ch);
});
/**
 * Next character is inside a comment.
 */
parinfer.reader.in_comment_QMARK_ = (function parinfer$reader$in_comment_QMARK_(stack){
return cljs.core._EQ_.call(null,";",parinfer.reader.prev_ch.call(null,stack));
});
/**
 * Next character is inside actual code.
 */
parinfer.reader.in_code_QMARK_ = (function parinfer$reader$in_code_QMARK_(stack){
return (((!(parinfer.reader.in_str_QMARK_.call(null,stack)))) && ((!(parinfer.reader.in_comment_QMARK_.call(null,stack)))));
});
/**
 * Determine if the given closing delimiter can be used next, assuming we are inside code.
 */
parinfer.reader.valid_closer_QMARK_ = (function parinfer$reader$valid_closer_QMARK_(stack,ch){
return cljs.core._EQ_.call(null,parinfer.reader.prev_ch.call(null,stack),parinfer.reader.matching_delim.call(null,ch));
});
if((typeof parinfer !== 'undefined') && (typeof parinfer.reader !== 'undefined') && (typeof parinfer.reader.push_char_STAR_ !== 'undefined')){
} else {
/**
 * Update the delimiter stack with the given character.
 */
parinfer.reader.push_char_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"parinfer.reader","push-char*"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (p__29416){
var map__29417 = p__29416;
var map__29417__$1 = (((((!((map__29417 == null))))?(((((map__29417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417):map__29417);
var ch = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_(parinfer.reader.opening_delim_QMARK_.call(null,ch))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(parinfer.reader.closing_delim_QMARK_.call(null,ch))){
return new cljs.core.Keyword(null,"close","close",1835149582);
} else {
return ch;

}
}
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\t",(function (p__29419){
var map__29420 = p__29419;
var map__29420__$1 = (((((!((map__29420 == null))))?(((((map__29420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29420):map__29420);
var stack = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if((!(parinfer.reader.in_str_QMARK_.call(null,stack)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),"  "], null);
} else {
return null;

}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"open","open",-1763596448),(function (p__29422){
var map__29423 = p__29422;
var map__29423__$1 = (((((!((map__29423 == null))))?(((((map__29423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);
var state = map__29423__$1;
var stack = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_code_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)], null)))], null);
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"close","close",1835149582),(function (p__29425){
var map__29426 = p__29425;
var map__29426__$1 = (((((!((map__29426 == null))))?(((((map__29426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29426):map__29426);
var stack = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var backup = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var ch = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_code_QMARK_.call(null,stack)){
if(parinfer.reader.valid_closer_QMARK_.call(null,stack,ch)){
var opener = cljs.core.peek.call(null,stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack),new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.conj.call(null,backup,opener)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),""], null);
}
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,";",(function (p__29428){
var map__29429 = p__29428;
var map__29429__$1 = (((((!((map__29429 == null))))?(((((map__29429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29429):map__29429);
var state = map__29429__$1;
var stack = cljs.core.get.call(null,map__29429__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_code_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\n",(function (p__29431){
var map__29432 = p__29431;
var map__29432__$1 = (((((!((map__29432 == null))))?(((((map__29432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29432):map__29432);
var stack = cljs.core.get.call(null,map__29432__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var stack__$1 = (function (){var G__29434 = stack;
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return cljs.core.pop.call(null,G__29434);
} else {
return G__29434;
}
})();
var stack__$2 = (function (){var G__29435 = stack__$1;
if(parinfer.reader.in_comment_QMARK_.call(null,stack__$1)){
return cljs.core.pop.call(null,G__29435);
} else {
return G__29435;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),"",new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$2], null);
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\\",(function (p__29436){
var map__29437 = p__29436;
var map__29437__$1 = (((((!((map__29437 == null))))?(((((map__29437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29437):map__29437);
var state = map__29437__$1;
var stack = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_comment_QMARK_.call(null,stack)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\"",(function (p__29439){
var map__29440 = p__29439;
var map__29440__$1 = (((((!((map__29440 == null))))?(((((map__29440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29440):map__29440);
var state = map__29440__$1;
var stack = cljs.core.get.call(null,map__29440__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_str_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(parinfer.reader.in_comment_QMARK_.call(null,stack)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29442){
var map__29443 = p__29442;
var map__29443__$1 = (((((!((map__29443 == null))))?(((((map__29443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29443):map__29443);
var stack = cljs.core.get.call(null,map__29443__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(parinfer.reader.escaping_QMARK_.call(null,stack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
return null;

}
}));
parinfer.reader.push_char = (function parinfer$reader$push_char(state){
var new_data = parinfer.reader.push_char_STAR_.call(null,state);
return cljs.core.merge_with.call(null,((function (new_data){
return (function (p1__29446_SHARP_,p2__29445_SHARP_){
var or__4047__auto__ = p2__29445_SHARP_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p1__29446_SHARP_;
}
});})(new_data))
,state,new_data);
});

//# sourceMappingURL=reader.js.map?rel=1557850992864
