// Compiled by ClojureScript 1.10.439 {}
goog.provide('parinfer.paren_mode');
goog.require('cljs.core');
goog.require('parinfer.reader');
goog.require('parinfer.indent_mode');
goog.require('parinfer.string');
goog.require('clojure.string');
/**
 * An initial state of our running state.
 */
parinfer.paren_mode.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"backup","backup",26347393),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),null,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),null], null),null,cljs.core.PersistentVector.EMPTY,false,(-1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),(0)]);
parinfer.paren_mode.append_delim_trail = (function parinfer$paren_mode$append_delim_trail(p__29551){
var map__29552 = p__29551;
var map__29552__$1 = (((((!((map__29552 == null))))?(((((map__29552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29552):map__29552);
var state = map__29552__$1;
var stack = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var line_no = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var insert = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var opener = cljs.core.peek.call(null,stack);
var close_ch = parinfer.reader.matching_delim.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(opener));
var stack__$1 = cljs.core.pop.call(null,stack);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(opener)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),(line_no + new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert))], null),parinfer.string.insert_string,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(insert),close_ch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783)], null),cljs.core.inc);
});
parinfer.paren_mode.min_indent = (function parinfer$paren_mode$min_indent(x,p__29554){
var map__29555 = p__29554;
var map__29555__$1 = (((((!((map__29555 == null))))?(((((map__29555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29555):map__29555);
var stack = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var opener = cljs.core.peek.call(null,stack);
var temp__5718__auto__ = new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(opener);
if(cljs.core.truth_(temp__5718__auto__)){
var start_x = temp__5718__auto__;
var x__4135__auto__ = (start_x + (1));
var y__4136__auto__ = x;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
} else {
return x;
}
});
parinfer.paren_mode.min_dedent = (function parinfer$paren_mode$min_dedent(x,p__29557){
var map__29558 = p__29557;
var map__29558__$1 = (((((!((map__29558 == null))))?(((((map__29558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29558):map__29558);
var dedent_x = cljs.core.get.call(null,map__29558__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627));
if(cljs.core.truth_(dedent_x)){
var x__4138__auto__ = dedent_x;
var y__4139__auto__ = x;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
} else {
return x;
}
});
parinfer.paren_mode.correct_indent = (function parinfer$paren_mode$correct_indent(p__29560){
var map__29561 = p__29560;
var map__29561__$1 = (((((!((map__29561 == null))))?(((((map__29561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29561):map__29561);
var state = map__29561__$1;
var indent_delta = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232));
var x_pos = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var stack = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var dedent_x = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627));
var line_no = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var opener = cljs.core.peek.call(null,stack);
var delta = new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232).cljs$core$IFn$_invoke$arity$2(opener,(0));
var new_x = parinfer.paren_mode.min_dedent.call(null,parinfer.paren_mode.min_indent.call(null,(x_pos + delta),state),state);
var new_delta = (indent_delta + (new_x - x_pos));
var indent_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,new_x," "));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),indent_str),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),new_delta,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new_x,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),false,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),null);
});
parinfer.paren_mode.handle_cursor_delta = (function parinfer$paren_mode$handle_cursor_delta(p__29563){
var map__29564 = p__29563;
var map__29564__$1 = (((((!((map__29564 == null))))?(((((map__29564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29564):map__29564);
var state = map__29564__$1;
var indent_delta = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232));
var line_no = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var cursor_line = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_dx = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327));
var cursor_delta_QMARK_ = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,cursor_line,line_no);
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.call(null,cursor_x,x_pos);
if(and__4036__auto____$1){
return cursor_dx;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var G__29566 = state;
if(cljs.core.truth_(cursor_delta_QMARK_)){
return cljs.core.update.call(null,G__29566,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),cljs.core._PLUS_,cursor_dx);
} else {
return G__29566;
}
});
/**
 * Update the state by handling a possible indentation trigger.
 */
parinfer.paren_mode.process_indent = (function parinfer$paren_mode$process_indent(p__29567){
var map__29568 = p__29567;
var map__29568__$1 = (((((!((map__29568 == null))))?(((((map__29568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29568):map__29568);
var state = map__29568__$1;
var cursor_line = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var x_pos = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var cursor_x = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var lines = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var cursor_dx = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327));
var ch = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var track_indent_QMARK_ = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var stack = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var line_no = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var check_indent_QMARK_ = (function (){var and__4036__auto__ = track_indent_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return ((parinfer.reader.in_code_QMARK_.call(null,stack)) && (cljs.core.not.call(null,parinfer.reader.whitespace_QMARK_.call(null,ch))) && (cljs.core.not_EQ_.call(null,";",ch)));
} else {
return and__4036__auto__;
}
})();
var at_valid_closer_QMARK_ = (function (){var and__4036__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = parinfer.reader.closing_delim_QMARK_.call(null,ch);
if(cljs.core.truth_(and__4036__auto____$1)){
return parinfer.reader.valid_closer_QMARK_.call(null,stack,ch);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var cursor_holding_QMARK_ = ((cljs.core._EQ_.call(null,line_no,cursor_line)) && ((cursor_x <= x_pos)));
var move_closer_QMARK_ = (function (){var and__4036__auto__ = at_valid_closer_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (!(cursor_holding_QMARK_));
} else {
return and__4036__auto__;
}
})();
var skip_QMARK_ = (function (){var and__4036__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = parinfer.reader.closing_delim_QMARK_.call(null,ch);
if(cljs.core.truth_(and__4036__auto____$1)){
return (!(cursor_holding_QMARK_));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var at_indent_QMARK_ = (function (){var and__4036__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,skip_QMARK_);
} else {
return and__4036__auto__;
}
})();
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"process?","process?",-106844121),cljs.core.not.call(null,skip_QMARK_));
var G__29570 = state__$1;
var G__29570__$1 = (cljs.core.truth_(move_closer_QMARK_)?parinfer.paren_mode.append_delim_trail.call(null,G__29570):G__29570);
var G__29570__$2 = parinfer.paren_mode.handle_cursor_delta.call(null,G__29570__$1)
;
if(cljs.core.truth_(at_indent_QMARK_)){
return parinfer.paren_mode.correct_indent.call(null,G__29570__$2);
} else {
return G__29570__$2;
}
});
/**
 * Update the state by processing the given character and its position.
 */
parinfer.paren_mode.process_char = (function parinfer$paren_mode$process_char(p__29571,ch){
var map__29572 = p__29571;
var map__29572__$1 = (((((!((map__29572 == null))))?(((((map__29572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29572):map__29572);
var state = map__29572__$1;
var lines = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.count.call(null,cljs.core.get.call(null,lines,line_no));
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),x_pos,new cljs.core.Keyword(null,"ch","ch",-554717905),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch));
var state__$2 = parinfer.paren_mode.process_indent.call(null,state__$1);
var G__29574 = state__$2;
if(cljs.core.truth_(new cljs.core.Keyword(null,"process?","process?",-106844121).cljs$core$IFn$_invoke$arity$1(state__$2))){
return parinfer.indent_mode.process_char_STAR_.call(null,G__29574);
} else {
return G__29574;
}
});
parinfer.paren_mode.reinsert_delims = (function parinfer$paren_mode$reinsert_delims(p__29575){
var map__29576 = p__29575;
var map__29576__$1 = (((((!((map__29576 == null))))?(((((map__29576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29576):map__29576);
var state = map__29576__$1;
var removed_delims = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226));
return cljs.core.reduce.call(null,((function (map__29576,map__29576__$1,state,removed_delims){
return (function (state__$1,_delim){
return parinfer.paren_mode.append_delim_trail.call(null,state__$1);
});})(map__29576,map__29576__$1,state,removed_delims))
,state,removed_delims);
});
/**
 * Update the state by processing the given line of text.
 */
parinfer.paren_mode.process_line = (function parinfer$paren_mode$process_line(var_args){
var G__29580 = arguments.length;
switch (G__29580) {
case 1:
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$1 = (function (line){
return parinfer.paren_mode.process_line.call(null,parinfer.paren_mode.initial_state,line);
});

parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2 = (function (p__29581,line){
var map__29582 = p__29581;
var map__29582__$1 = (((((!((map__29582 == null))))?(((((map__29582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29582):map__29582);
var state = map__29582__$1;
var stack = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var lines = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no__$1 = (line_no + (1));
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),false,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),(!(parinfer.reader.in_str_QMARK_.call(null,stack))),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),(0),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj.call(null,lines,""),new cljs.core.Keyword(null,"line-no","line-no",-666819466),line_no__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),cljs.core.PersistentVector.EMPTY);
var state__$2 = cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line-dy","line-dy",41667486)], null),((function (line_no__$1,state__$1,map__29582,map__29582__$1,state,stack,lines,line_no,cursor_line){
return (function (p1__29578_SHARP_){
if(cljs.core.truth_(p1__29578_SHARP_)){
return (p1__29578_SHARP_ - (1));
} else {
return null;
}
});})(line_no__$1,state__$1,map__29582,map__29582__$1,state,stack,lines,line_no,cursor_line))
);
var state__$3 = cljs.core.reduce.call(null,parinfer.paren_mode.process_char,state__$2,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"\n"].join(''));
var state__$4 = parinfer.paren_mode.reinsert_delims.call(null,parinfer.indent_mode.remove_delim_trail.call(null,state__$3));
return state__$4;
});

parinfer.paren_mode.process_line.cljs$lang$maxFixedArity = 2;

parinfer.paren_mode.finalize_state = (function parinfer$paren_mode$finalize_state(p__29585){
var map__29586 = p__29585;
var map__29586__$1 = (((((!((map__29586 == null))))?(((((map__29586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29586):map__29586);
var state = map__29586__$1;
var stack = cljs.core.get.call(null,map__29586__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var valid_QMARK_ = cljs.core.empty_QMARK_.call(null,stack);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"valid?","valid?",-212412379),valid_QMARK_);
});
/**
 * Update the state by processing the given text.
 */
parinfer.paren_mode.process_text = (function parinfer$paren_mode$process_text(var_args){
var G__29589 = arguments.length;
switch (G__29589) {
case 1:
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.paren_mode.process_text.call(null,text,null);
});

parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = cljs.core.merge.call(null,parinfer.paren_mode.initial_state,options);
var lines = parinfer.string.get_lines.call(null,text);
var state__$1 = cljs.core.reduce.call(null,parinfer.paren_mode.process_line,state,lines);
var state__$2 = parinfer.paren_mode.finalize_state.call(null,state__$1);
return state__$2;
});

parinfer.paren_mode.process_text.cljs$lang$maxFixedArity = 2;

/**
 * Fully process the given text using Paren Mode.
 * 
 *   'text' is the full text.
 * 
 *   'options' is an optional map with supported keys:
 *  :cursor-x     - x position of the cursor (zero-based)
 *  :cursor-line  - line number of the cursor (zero-based)
 * 
 *   Returns a map:
 *  :text     - full text output
 *  :valid?   - indicates if the input was valid
 *  :state    - cached state to be passed to `format-text-change` (once it is implemented)
 *   
 */
parinfer.paren_mode.format_text = (function parinfer$paren_mode$format_text(var_args){
var G__29592 = arguments.length;
switch (G__29592) {
case 1:
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.paren_mode.format_text.call(null,text,null);
});

parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = parinfer.paren_mode.process_text.call(null,text,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.paren_mode.format_text.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=paren_mode.js.map?rel=1557850993032
