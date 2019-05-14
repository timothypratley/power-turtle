// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.canvas.raster_canvas');
goog.require('cljs.core');
goog.require('power_turtle.api.raster');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.view !== 'undefined') && (typeof power_turtle.view.canvas !== 'undefined') && (typeof power_turtle.view.canvas.raster_canvas !== 'undefined') && (typeof power_turtle.view.canvas.raster_canvas.canvas !== 'undefined')){
} else {
power_turtle.view.canvas.raster_canvas.canvas = cljs.core.atom.call(null,null);
}
power_turtle.view.canvas.raster_canvas.pixel_width = (7);
power_turtle.view.canvas.raster_canvas.pixel_height = (4);
power_turtle.view.canvas.raster_canvas.redraw = (function power_turtle$view$canvas$raster_canvas$redraw(){
if(cljs.core.truth_(cljs.core.deref.call(null,power_turtle.view.canvas.raster_canvas.canvas))){
var ctx = cljs.core.deref.call(null,power_turtle.view.canvas.raster_canvas.canvas).getContext("2d");
var seq__27831 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__27836 = null;
var count__27837 = (0);
var i__27838 = (0);
while(true){
if((i__27838 < count__27837)){
var x = cljs.core._nth.call(null,chunk__27836,i__27838);
var seq__27839_27855 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__27840_27856 = null;
var count__27841_27857 = (0);
var i__27842_27858 = (0);
while(true){
if((i__27842_27858 < count__27841_27857)){
var y_27859 = cljs.core._nth.call(null,chunk__27840_27856,i__27842_27858);
var vec__27843_27860 = power_turtle.api.raster.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_27859], null)));
var r_27861 = cljs.core.nth.call(null,vec__27843_27860,(0),null);
var g_27862 = cljs.core.nth.call(null,vec__27843_27860,(1),null);
var b_27863 = cljs.core.nth.call(null,vec__27843_27860,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_27861),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_27862),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_27863),")"].join('');

ctx.fillRect((x * (7)),(y_27859 * (4)),(7),(4));


var G__27864 = seq__27839_27855;
var G__27865 = chunk__27840_27856;
var G__27866 = count__27841_27857;
var G__27867 = (i__27842_27858 + (1));
seq__27839_27855 = G__27864;
chunk__27840_27856 = G__27865;
count__27841_27857 = G__27866;
i__27842_27858 = G__27867;
continue;
} else {
var temp__5720__auto___27868 = cljs.core.seq.call(null,seq__27839_27855);
if(temp__5720__auto___27868){
var seq__27839_27869__$1 = temp__5720__auto___27868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27839_27869__$1)){
var c__4461__auto___27870 = cljs.core.chunk_first.call(null,seq__27839_27869__$1);
var G__27871 = cljs.core.chunk_rest.call(null,seq__27839_27869__$1);
var G__27872 = c__4461__auto___27870;
var G__27873 = cljs.core.count.call(null,c__4461__auto___27870);
var G__27874 = (0);
seq__27839_27855 = G__27871;
chunk__27840_27856 = G__27872;
count__27841_27857 = G__27873;
i__27842_27858 = G__27874;
continue;
} else {
var y_27875 = cljs.core.first.call(null,seq__27839_27869__$1);
var vec__27846_27876 = power_turtle.api.raster.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_27875], null)));
var r_27877 = cljs.core.nth.call(null,vec__27846_27876,(0),null);
var g_27878 = cljs.core.nth.call(null,vec__27846_27876,(1),null);
var b_27879 = cljs.core.nth.call(null,vec__27846_27876,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_27877),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_27878),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_27879),")"].join('');

ctx.fillRect((x * (7)),(y_27875 * (4)),(7),(4));


var G__27880 = cljs.core.next.call(null,seq__27839_27869__$1);
var G__27881 = null;
var G__27882 = (0);
var G__27883 = (0);
seq__27839_27855 = G__27880;
chunk__27840_27856 = G__27881;
count__27841_27857 = G__27882;
i__27842_27858 = G__27883;
continue;
}
} else {
}
}
break;
}

var G__27884 = seq__27831;
var G__27885 = chunk__27836;
var G__27886 = count__27837;
var G__27887 = (i__27838 + (1));
seq__27831 = G__27884;
chunk__27836 = G__27885;
count__27837 = G__27886;
i__27838 = G__27887;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27831);
if(temp__5720__auto__){
var seq__27831__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27831__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27831__$1);
var G__27888 = cljs.core.chunk_rest.call(null,seq__27831__$1);
var G__27889 = c__4461__auto__;
var G__27890 = cljs.core.count.call(null,c__4461__auto__);
var G__27891 = (0);
seq__27831 = G__27888;
chunk__27836 = G__27889;
count__27837 = G__27890;
i__27838 = G__27891;
continue;
} else {
var x = cljs.core.first.call(null,seq__27831__$1);
var seq__27832_27892 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__27833_27893 = null;
var count__27834_27894 = (0);
var i__27835_27895 = (0);
while(true){
if((i__27835_27895 < count__27834_27894)){
var y_27896 = cljs.core._nth.call(null,chunk__27833_27893,i__27835_27895);
var vec__27849_27897 = power_turtle.api.raster.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_27896], null)));
var r_27898 = cljs.core.nth.call(null,vec__27849_27897,(0),null);
var g_27899 = cljs.core.nth.call(null,vec__27849_27897,(1),null);
var b_27900 = cljs.core.nth.call(null,vec__27849_27897,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_27898),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_27899),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_27900),")"].join('');

ctx.fillRect((x * (7)),(y_27896 * (4)),(7),(4));


var G__27901 = seq__27832_27892;
var G__27902 = chunk__27833_27893;
var G__27903 = count__27834_27894;
var G__27904 = (i__27835_27895 + (1));
seq__27832_27892 = G__27901;
chunk__27833_27893 = G__27902;
count__27834_27894 = G__27903;
i__27835_27895 = G__27904;
continue;
} else {
var temp__5720__auto___27905__$1 = cljs.core.seq.call(null,seq__27832_27892);
if(temp__5720__auto___27905__$1){
var seq__27832_27906__$1 = temp__5720__auto___27905__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27832_27906__$1)){
var c__4461__auto___27907 = cljs.core.chunk_first.call(null,seq__27832_27906__$1);
var G__27908 = cljs.core.chunk_rest.call(null,seq__27832_27906__$1);
var G__27909 = c__4461__auto___27907;
var G__27910 = cljs.core.count.call(null,c__4461__auto___27907);
var G__27911 = (0);
seq__27832_27892 = G__27908;
chunk__27833_27893 = G__27909;
count__27834_27894 = G__27910;
i__27835_27895 = G__27911;
continue;
} else {
var y_27912 = cljs.core.first.call(null,seq__27832_27906__$1);
var vec__27852_27913 = power_turtle.api.raster.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_27912], null)));
var r_27914 = cljs.core.nth.call(null,vec__27852_27913,(0),null);
var g_27915 = cljs.core.nth.call(null,vec__27852_27913,(1),null);
var b_27916 = cljs.core.nth.call(null,vec__27852_27913,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_27914),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_27915),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_27916),")"].join('');

ctx.fillRect((x * (7)),(y_27912 * (4)),(7),(4));


var G__27917 = cljs.core.next.call(null,seq__27832_27906__$1);
var G__27918 = null;
var G__27919 = (0);
var G__27920 = (0);
seq__27832_27892 = G__27917;
chunk__27833_27893 = G__27918;
count__27834_27894 = G__27919;
i__27835_27895 = G__27920;
continue;
}
} else {
}
}
break;
}

var G__27921 = cljs.core.next.call(null,seq__27831__$1);
var G__27922 = null;
var G__27923 = (0);
var G__27924 = (0);
seq__27831 = G__27921;
chunk__27836 = G__27922;
count__27837 = G__27923;
i__27838 = G__27924;
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
});
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.view !== 'undefined') && (typeof power_turtle.view.canvas !== 'undefined') && (typeof power_turtle.view.canvas.raster_canvas !== 'undefined') && (typeof power_turtle.view.canvas.raster_canvas.init !== 'undefined')){
} else {
power_turtle.view.canvas.raster_canvas.init = cljs.core.add_watch.call(null,power_turtle.api.raster.raster,new cljs.core.Keyword(null,"monitor","monitor",459609397),(function (_,___$1,___$2,___$3){
return power_turtle.view.canvas.raster_canvas.redraw.call(null);
}));
}
power_turtle.view.canvas.raster_canvas.raster_canvas = (function power_turtle$view$canvas$raster_canvas$raster_canvas(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"raster-canvas",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_render_raster_canvas(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((40) * (7)),new cljs.core.Keyword(null,"height","height",1025178622),((40) * (4)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_raster_canvas_did_mount(this$){
cljs.core.reset_BANG_.call(null,power_turtle.view.canvas.raster_canvas.canvas,reagent.dom.dom_node.call(null,this$));

return power_turtle.view.canvas.raster_canvas.redraw.call(null);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_raster_canvas_will_unmount(){
return cljs.core.reset_BANG_.call(null,power_turtle.view.canvas.raster_canvas.canvas,null);
})], null));
});

//# sourceMappingURL=raster_canvas.js.map?rel=1557850990495
