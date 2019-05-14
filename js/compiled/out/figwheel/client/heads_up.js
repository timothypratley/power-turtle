// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38785 = arguments.length;
var i__4642__auto___38786 = (0);
while(true){
if((i__4642__auto___38786 < len__4641__auto___38785)){
args__4647__auto__.push((arguments[i__4642__auto___38786]));

var G__38787 = (i__4642__auto___38786 + (1));
i__4642__auto___38786 = G__38787;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__38777_38788 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__38778_38789 = null;
var count__38779_38790 = (0);
var i__38780_38791 = (0);
while(true){
if((i__38780_38791 < count__38779_38790)){
var k_38792 = cljs.core._nth.call(null,chunk__38778_38789,i__38780_38791);
e.setAttribute(cljs.core.name.call(null,k_38792),cljs.core.get.call(null,attrs,k_38792));


var G__38793 = seq__38777_38788;
var G__38794 = chunk__38778_38789;
var G__38795 = count__38779_38790;
var G__38796 = (i__38780_38791 + (1));
seq__38777_38788 = G__38793;
chunk__38778_38789 = G__38794;
count__38779_38790 = G__38795;
i__38780_38791 = G__38796;
continue;
} else {
var temp__5720__auto___38797 = cljs.core.seq.call(null,seq__38777_38788);
if(temp__5720__auto___38797){
var seq__38777_38798__$1 = temp__5720__auto___38797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38777_38798__$1)){
var c__4461__auto___38799 = cljs.core.chunk_first.call(null,seq__38777_38798__$1);
var G__38800 = cljs.core.chunk_rest.call(null,seq__38777_38798__$1);
var G__38801 = c__4461__auto___38799;
var G__38802 = cljs.core.count.call(null,c__4461__auto___38799);
var G__38803 = (0);
seq__38777_38788 = G__38800;
chunk__38778_38789 = G__38801;
count__38779_38790 = G__38802;
i__38780_38791 = G__38803;
continue;
} else {
var k_38804 = cljs.core.first.call(null,seq__38777_38798__$1);
e.setAttribute(cljs.core.name.call(null,k_38804),cljs.core.get.call(null,attrs,k_38804));


var G__38805 = cljs.core.next.call(null,seq__38777_38798__$1);
var G__38806 = null;
var G__38807 = (0);
var G__38808 = (0);
seq__38777_38788 = G__38805;
chunk__38778_38789 = G__38806;
count__38779_38790 = G__38807;
i__38780_38791 = G__38808;
continue;
}
} else {
}
}
break;
}

var seq__38781_38809 = cljs.core.seq.call(null,children);
var chunk__38782_38810 = null;
var count__38783_38811 = (0);
var i__38784_38812 = (0);
while(true){
if((i__38784_38812 < count__38783_38811)){
var ch_38813 = cljs.core._nth.call(null,chunk__38782_38810,i__38784_38812);
e.appendChild(ch_38813);


var G__38814 = seq__38781_38809;
var G__38815 = chunk__38782_38810;
var G__38816 = count__38783_38811;
var G__38817 = (i__38784_38812 + (1));
seq__38781_38809 = G__38814;
chunk__38782_38810 = G__38815;
count__38783_38811 = G__38816;
i__38784_38812 = G__38817;
continue;
} else {
var temp__5720__auto___38818 = cljs.core.seq.call(null,seq__38781_38809);
if(temp__5720__auto___38818){
var seq__38781_38819__$1 = temp__5720__auto___38818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38781_38819__$1)){
var c__4461__auto___38820 = cljs.core.chunk_first.call(null,seq__38781_38819__$1);
var G__38821 = cljs.core.chunk_rest.call(null,seq__38781_38819__$1);
var G__38822 = c__4461__auto___38820;
var G__38823 = cljs.core.count.call(null,c__4461__auto___38820);
var G__38824 = (0);
seq__38781_38809 = G__38821;
chunk__38782_38810 = G__38822;
count__38783_38811 = G__38823;
i__38784_38812 = G__38824;
continue;
} else {
var ch_38825 = cljs.core.first.call(null,seq__38781_38819__$1);
e.appendChild(ch_38825);


var G__38826 = cljs.core.next.call(null,seq__38781_38819__$1);
var G__38827 = null;
var G__38828 = (0);
var G__38829 = (0);
seq__38781_38809 = G__38826;
chunk__38782_38810 = G__38827;
count__38783_38811 = G__38828;
i__38784_38812 = G__38829;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq38774){
var G__38775 = cljs.core.first.call(null,seq38774);
var seq38774__$1 = cljs.core.next.call(null,seq38774);
var G__38776 = cljs.core.first.call(null,seq38774__$1);
var seq38774__$2 = cljs.core.next.call(null,seq38774__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38775,G__38776,seq38774__$2);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_38830 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_38830.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_38830.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_38830.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_38830);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__38831,st_map){
var map__38832 = p__38831;
var map__38832__$1 = (((((!((map__38832 == null))))?(((((map__38832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38832):map__38832);
var container_el = cljs.core.get.call(null,map__38832__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__38832,map__38832__$1,container_el){
return (function (p__38834){
var vec__38835 = p__38834;
var k = cljs.core.nth.call(null,vec__38835,(0),null);
var v = cljs.core.nth.call(null,vec__38835,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__38832,map__38832__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__38838,dom_str){
var map__38839 = p__38838;
var map__38839__$1 = (((((!((map__38839 == null))))?(((((map__38839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38839):map__38839);
var c = map__38839__$1;
var content_area_el = cljs.core.get.call(null,map__38839__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__38841){
var map__38842 = p__38841;
var map__38842__$1 = (((((!((map__38842 == null))))?(((((map__38842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38842):map__38842);
var content_area_el = cljs.core.get.call(null,map__38842__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__){
return (function (state_38859){
var state_val_38860 = (state_38859[(1)]);
if((state_val_38860 === (1))){
var inst_38844 = (state_38859[(7)]);
var inst_38844__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38845 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38846 = ["10px","10px","100%","68px","1.0"];
var inst_38847 = cljs.core.PersistentHashMap.fromArrays(inst_38845,inst_38846);
var inst_38848 = cljs.core.merge.call(null,inst_38847,style);
var inst_38849 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38844__$1,inst_38848);
var inst_38850 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38844__$1,msg);
var inst_38851 = cljs.core.async.timeout.call(null,(300));
var state_38859__$1 = (function (){var statearr_38861 = state_38859;
(statearr_38861[(8)] = inst_38850);

(statearr_38861[(7)] = inst_38844__$1);

(statearr_38861[(9)] = inst_38849);

return statearr_38861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38859__$1,(2),inst_38851);
} else {
if((state_val_38860 === (2))){
var inst_38844 = (state_38859[(7)]);
var inst_38853 = (state_38859[(2)]);
var inst_38854 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_38855 = ["auto"];
var inst_38856 = cljs.core.PersistentHashMap.fromArrays(inst_38854,inst_38855);
var inst_38857 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38844,inst_38856);
var state_38859__$1 = (function (){var statearr_38862 = state_38859;
(statearr_38862[(10)] = inst_38853);

return statearr_38862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38859__$1,inst_38857);
} else {
return null;
}
}
});})(c__36093__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto____0 = (function (){
var statearr_38863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38863[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto__);

(statearr_38863[(1)] = (1));

return statearr_38863;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto____1 = (function (state_38859){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_38859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e38864){if((e38864 instanceof Object)){
var ex__36002__auto__ = e38864;
var statearr_38865_38867 = state_38859;
(statearr_38865_38867[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38868 = state_38859;
state_38859 = G__38868;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto__ = function(state_38859){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto____1.call(this,state_38859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__))
})();
var state__36095__auto__ = (function (){var statearr_38866 = f__36094__auto__.call(null);
(statearr_38866[(6)] = c__36093__auto__);

return statearr_38866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__))
);

return c__36093__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__38870 = arguments.length;
switch (G__38870) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__38872){
var map__38873 = p__38872;
var map__38873__$1 = (((((!((map__38873 == null))))?(((((map__38873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38873):map__38873);
var file = cljs.core.get.call(null,map__38873__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38873__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38873__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4047__auto__ = file;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__38875){
var vec__38876 = p__38875;
var typ = cljs.core.nth.call(null,vec__38876,(0),null);
var line_number = cljs.core.nth.call(null,vec__38876,(1),null);
var line = cljs.core.nth.call(null,vec__38876,(2),null);
var pred__38879 = cljs.core._EQ_;
var expr__38880 = typ;
if(cljs.core.truth_(pred__38879.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__38880))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__38879.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__38880))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__38879.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__38880))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error))));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__38882_SHARP_){
return cljs.core.update_in.call(null,p1__38882_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__38883_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__38883_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__38886){
var map__38887 = p__38886;
var map__38887__$1 = (((((!((map__38887 == null))))?(((((map__38887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38887):map__38887);
var exception = map__38887__$1;
var message = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__38887__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4036__auto__ = file;
if(cljs.core.truth_(and__4036__auto__)){
return line;
} else {
return and__4036__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__38887,map__38887__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__38884_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38884_SHARP_),"</div>"].join('');
});})(last_message,map__38887,map__38887__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__38887,map__38887__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__38885_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__38885_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__38885_SHARP_)))].join('');
});})(last_message,map__38887,map__38887__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__38889){
var map__38890 = p__38889;
var map__38890__$1 = (((((!((map__38890 == null))))?(((((map__38890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38890):map__38890);
var file = cljs.core.get.call(null,map__38890__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38890__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38890__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__38893 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__38893__$1 = (((((!((map__38893 == null))))?(((((map__38893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38893):map__38893);
var head = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__38896){
var map__38897 = p__38896;
var map__38897__$1 = (((((!((map__38897 == null))))?(((((map__38897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38897):map__38897);
var warning_data = map__38897__$1;
var file = cljs.core.get.call(null,map__38897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38897__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38897__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__38897__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__38897__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4036__auto__ = file;
if(cljs.core.truth_(and__4036__auto__)){
return line;
} else {
return and__4036__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__38897,map__38897__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__38895_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38895_SHARP_),"</div>"].join('');
});})(last_message,map__38897,map__38897__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__38899 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__38899__$1 = (((((!((map__38899 == null))))?(((((map__38899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38899):map__38899);
var head = cljs.core.get.call(null,map__38899__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__38899__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__38899__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__38899__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__38899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38899__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38899__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__38901){
var map__38902 = p__38901;
var map__38902__$1 = (((((!((map__38902 == null))))?(((((map__38902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38902):map__38902);
var warning_data = map__38902__$1;
var message = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38904 = message;
var G__38904__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38904)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38904);
var G__38904__$2 = (cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38904__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__38904__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38904__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__38904__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__38905){
var map__38906 = p__38905;
var map__38906__$1 = (((((!((map__38906 == null))))?(((((map__38906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38906):map__38906);
var warning_data = map__38906__$1;
var message = cljs.core.get.call(null,map__38906__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__38906__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38906__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38906__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__38908 = figwheel.client.heads_up.ensure_container.call(null);
var map__38908__$1 = (((((!((map__38908 == null))))?(((((map__38908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38908):map__38908);
var content_area_el = cljs.core.get.call(null,map__38908__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5720__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5720__auto__)){
var last_child = temp__5720__auto__;
var temp__5718__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5718__auto__)){
var message_count = temp__5718__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__){
return (function (state_38927){
var state_val_38928 = (state_38927[(1)]);
if((state_val_38928 === (1))){
var inst_38910 = (state_38927[(7)]);
var inst_38910__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38911 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38912 = ["0.0"];
var inst_38913 = cljs.core.PersistentHashMap.fromArrays(inst_38911,inst_38912);
var inst_38914 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38910__$1,inst_38913);
var inst_38915 = cljs.core.async.timeout.call(null,(300));
var state_38927__$1 = (function (){var statearr_38929 = state_38927;
(statearr_38929[(7)] = inst_38910__$1);

(statearr_38929[(8)] = inst_38914);

return statearr_38929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38927__$1,(2),inst_38915);
} else {
if((state_val_38928 === (2))){
var inst_38910 = (state_38927[(7)]);
var inst_38917 = (state_38927[(2)]);
var inst_38918 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_38919 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_38920 = cljs.core.PersistentHashMap.fromArrays(inst_38918,inst_38919);
var inst_38921 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38910,inst_38920);
var inst_38922 = cljs.core.async.timeout.call(null,(200));
var state_38927__$1 = (function (){var statearr_38930 = state_38927;
(statearr_38930[(9)] = inst_38917);

(statearr_38930[(10)] = inst_38921);

return statearr_38930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38927__$1,(3),inst_38922);
} else {
if((state_val_38928 === (3))){
var inst_38910 = (state_38927[(7)]);
var inst_38924 = (state_38927[(2)]);
var inst_38925 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38910,"");
var state_38927__$1 = (function (){var statearr_38931 = state_38927;
(statearr_38931[(11)] = inst_38924);

return statearr_38931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38927__$1,inst_38925);
} else {
return null;
}
}
}
});})(c__36093__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__35999__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__35999__auto____0 = (function (){
var statearr_38932 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38932[(0)] = figwheel$client$heads_up$clear_$_state_machine__35999__auto__);

(statearr_38932[(1)] = (1));

return statearr_38932;
});
var figwheel$client$heads_up$clear_$_state_machine__35999__auto____1 = (function (state_38927){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_38927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e38933){if((e38933 instanceof Object)){
var ex__36002__auto__ = e38933;
var statearr_38934_38936 = state_38927;
(statearr_38934_38936[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38937 = state_38927;
state_38927 = G__38937;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__35999__auto__ = function(state_38927){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__35999__auto____1.call(this,state_38927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__35999__auto____0;
figwheel$client$heads_up$clear_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__35999__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__))
})();
var state__36095__auto__ = (function (){var statearr_38935 = f__36094__auto__.call(null);
(statearr_38935[(6)] = c__36093__auto__);

return statearr_38935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__))
);

return c__36093__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__){
return (function (state_38948){
var state_val_38949 = (state_38948[(1)]);
if((state_val_38949 === (1))){
var inst_38938 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38948__$1,(2),inst_38938);
} else {
if((state_val_38949 === (2))){
var inst_38940 = (state_38948[(2)]);
var inst_38941 = cljs.core.async.timeout.call(null,(400));
var state_38948__$1 = (function (){var statearr_38950 = state_38948;
(statearr_38950[(7)] = inst_38940);

return statearr_38950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38948__$1,(3),inst_38941);
} else {
if((state_val_38949 === (3))){
var inst_38943 = (state_38948[(2)]);
var inst_38944 = figwheel.client.heads_up.clear.call(null);
var state_38948__$1 = (function (){var statearr_38951 = state_38948;
(statearr_38951[(8)] = inst_38943);

return statearr_38951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38948__$1,(4),inst_38944);
} else {
if((state_val_38949 === (4))){
var inst_38946 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38948__$1,inst_38946);
} else {
return null;
}
}
}
}
});})(c__36093__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto____0 = (function (){
var statearr_38952 = [null,null,null,null,null,null,null,null,null];
(statearr_38952[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto__);

(statearr_38952[(1)] = (1));

return statearr_38952;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto____1 = (function (state_38948){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_38948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e38953){if((e38953 instanceof Object)){
var ex__36002__auto__ = e38953;
var statearr_38954_38956 = state_38948;
(statearr_38954_38956[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38957 = state_38948;
state_38948 = G__38957;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto__ = function(state_38948){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto____1.call(this,state_38948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__))
})();
var state__36095__auto__ = (function (){var statearr_38955 = f__36094__auto__.call(null);
(statearr_38955[(6)] = c__36093__auto__);

return statearr_38955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__))
);

return c__36093__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5720__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1557851000754
