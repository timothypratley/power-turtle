// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.canvas.chart_canvas');
goog.require('cljs.core');
goog.require('power_turtle.resize_listener');
goog.require('power_turtle.api.chart');
goog.require('cljsjs.chartjs');
goog.require('reagent.core');
goog.require('reagent.dom');
power_turtle.view.canvas.chart_canvas.chart_component = (function power_turtle$view$canvas$chart_canvas$chart_component(chart_data_ref){
var chart_obj = cljs.core.atom.call(null,null);
var elem = cljs.core.atom.call(null,null);
var create = ((function (chart_obj,elem){
return (function (){
return cljs.core.reset_BANG_.call(null,chart_obj,(new Chart(cljs.core.deref.call(null,elem),cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,chart_data_ref)))));
});})(chart_obj,elem))
;
cljs.core.add_watch.call(null,chart_data_ref,new cljs.core.Keyword(null,"watch-chart-data-ref","watch-chart-data-ref",882794384),((function (chart_obj,elem,create){
return (function power_turtle$view$canvas$chart_canvas$chart_component_$_watch_chart_data_ref(k,r,a,b){
if(cljs.core.truth_(cljs.core.deref.call(null,chart_obj))){
cljs.core.deref.call(null,chart_obj).destroy();

return create.call(null);
} else {
return null;
}
});})(chart_obj,elem,create))
);

return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"chart",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (chart_obj,elem,create){
return (function power_turtle$view$canvas$chart_canvas$chart_component_$_chart_did_mount(this$){
cljs.core.reset_BANG_.call(null,elem,reagent.dom.dom_node.call(null,this$));

return create.call(null);
});})(chart_obj,elem,create))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (chart_obj,elem,create){
return (function power_turtle$view$canvas$chart_canvas$chart_component_$_chart_will_unmount(){
if(cljs.core.truth_(cljs.core.deref.call(null,chart_obj))){
cljs.core.deref.call(null,chart_obj).destroy();

return cljs.core.reset_BANG_.call(null,chart_obj,null);
} else {
return null;
}
});})(chart_obj,elem,create))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (chart_obj,elem,create){
return (function power_turtle$view$canvas$chart_canvas$chart_component_$_chart_render(){
cljs.core.deref.call(null,power_turtle.resize_listener.window_width);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
});})(chart_obj,elem,create))
], null));
});
power_turtle.view.canvas.chart_canvas.chart_canvas = (function power_turtle$view$canvas$chart_canvas$chart_canvas(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.canvas.chart_canvas.chart_component,power_turtle.api.chart.chart_data], null)], null);
});

//# sourceMappingURL=chart_canvas.js.map?rel=1557850990619
