// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.canvas.quil_canvas');
goog.require('cljs.core');
goog.require('power_turtle.resize_listener');
goog.require('clojure_turtle.core');
goog.require('quil.core');
goog.require('reagent.core');
goog.require('reagent.dom');
power_turtle.view.canvas.quil_canvas.quil_canvas = (function power_turtle$view$canvas$quil_canvas$quil_canvas(){
var sketch = cljs.core.atom.call(null,null);
var width = reagent.core.atom.call(null,(600));
var height = reagent.core.atom.call(null,(640));
var destroy_sketch = ((function (sketch,width,height){
return (function power_turtle$view$canvas$quil_canvas$quil_canvas_$_a_destroy_sketch(){
if(cljs.core.truth_(cljs.core.deref.call(null,sketch))){
var _STAR_applet_STAR__orig_val__27927_27932 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__27928_27933 = cljs.core.deref.call(null,sketch);
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__27928_27933;

try{quil.core.exit.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__27927_27932;
}
return cljs.core.reset_BANG_.call(null,sketch,null);
} else {
return null;
}
});})(sketch,width,height))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"quil-canvas",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (sketch,width,height,destroy_sketch){
return (function power_turtle$view$canvas$quil_canvas$quil_canvas_$_render_quil_canvas(){
cljs.core.deref.call(null,power_turtle.resize_listener.window_width);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#turtle-canvas","canvas#turtle-canvas",-1097004642),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref.call(null,width),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.deref.call(null,height),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),((function (sketch,width,height,destroy_sketch){
return (function power_turtle$view$canvas$quil_canvas$quil_canvas_$_render_quil_canvas_$_quil_canvas_ref(this$){
if(cljs.core.truth_(this$)){
var elem = reagent.dom.dom_node.call(null,this$);
var vec__27929 = power_turtle.resize_listener.dims.call(null,elem);
var w = cljs.core.nth.call(null,vec__27929,(0),null);
var h = cljs.core.nth.call(null,vec__27929,(1),null);
if(((cljs.core.not_EQ_.call(null,w,cljs.core.deref.call(null,width))) || (cljs.core.not_EQ_.call(null,h,cljs.core.deref.call(null,height))))){
cljs.core.reset_BANG_.call(null,width,w);

return cljs.core.reset_BANG_.call(null,height,h);
} else {
destroy_sketch.call(null);

return cljs.core.reset_BANG_.call(null,sketch,quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),elem,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),clojure_turtle.core.setup));
}
} else {
return null;
}
});})(sketch,width,height,destroy_sketch))
], null)], null);
});})(sketch,width,height,destroy_sketch))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),destroy_sketch], null));
});

//# sourceMappingURL=quil_canvas.js.map?rel=1557850990513
