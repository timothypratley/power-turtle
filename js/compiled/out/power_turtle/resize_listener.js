// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.resize_listener');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.resize_listener !== 'undefined') && (typeof power_turtle.resize_listener.window_width !== 'undefined')){
} else {
power_turtle.resize_listener.window_width = reagent.core.atom.call(null,null);
}
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.resize_listener !== 'undefined') && (typeof power_turtle.resize_listener.listener !== 'undefined')){
} else {
power_turtle.resize_listener.listener = window.addEventListener("resize",(function power_turtle$resize_listener$on_window_resize(e){
return cljs.core.reset_BANG_.call(null,power_turtle.resize_listener.window_width,window.innerWidth);
}));
}
power_turtle.resize_listener.dims = (function power_turtle$resize_listener$dims(elem){
var cs = getComputedStyle(elem.parentNode);
var w = parseFloat(cs.width);
var h = parseFloat(cs.height);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
});

//# sourceMappingURL=resize_listener.js.map?rel=1557850989912
