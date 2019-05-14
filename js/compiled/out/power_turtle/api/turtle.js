// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.api.turtle');
goog.require('cljs.core');
goog.require('power_turtle.api.raster');
goog.require('clojure_turtle.core');
goog.require('power_turtle.view.toolbar');
/**
 * Repeatedly calls input function f n times and returns the last result
 */
power_turtle.api.turtle.repeat = (function power_turtle$api$turtle$repeat(n,f){
return cljs.core.last.call(null,cljs.core.repeatedly.call(null,n,f));
});
power_turtle.api.turtle.forward = (function power_turtle$api$turtle$forward(x){
clojure_turtle.core.forward.call(null,x);

return null;
});
power_turtle.api.turtle.back = (function power_turtle$api$turtle$back(x){
clojure_turtle.core.back.call(null,x);

return null;
});
power_turtle.api.turtle.left = (function power_turtle$api$turtle$left(x){
clojure_turtle.core.left.call(null,x);

return null;
});
power_turtle.api.turtle.right = (function power_turtle$api$turtle$right(x){
clojure_turtle.core.right.call(null,x);

return null;
});
power_turtle.api.turtle.forward_right = (function power_turtle$api$turtle$forward_right(){
power_turtle.api.turtle.forward.call(null,(50));

return power_turtle.api.turtle.right.call(null,(45));
});
power_turtle.api.turtle.forward_left = (function power_turtle$api$turtle$forward_left(){
power_turtle.api.turtle.forward.call(null,(50));

return power_turtle.api.turtle.left.call(null,(45));
});
power_turtle.api.turtle.octagon = (function power_turtle$api$turtle$octagon(){
return power_turtle.api.turtle.repeat.call(null,(8),power_turtle.api.turtle.forward_right);
});
power_turtle.api.turtle.pattern = (function power_turtle$api$turtle$pattern(){
return power_turtle.api.turtle.repeat.call(null,(12),(function (){
power_turtle.api.turtle.octagon.call(null);

return power_turtle.api.turtle.right.call(null,(30));
}));
});
power_turtle.api.turtle.red = (function power_turtle$api$turtle$red(){
clojure_turtle.core.color.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null));

return null;
});
power_turtle.api.turtle.green = (function power_turtle$api$turtle$green(){
clojure_turtle.core.color.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null));

return null;
});
power_turtle.api.turtle.blue = (function power_turtle$api$turtle$blue(){
clojure_turtle.core.color.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null));

return null;
});
power_turtle.api.turtle.clean = (function power_turtle$api$turtle$clean(){
clojure_turtle.core.clean.call(null);

return null;
});
power_turtle.api.turtle.home = (function power_turtle$api$turtle$home(){
clojure_turtle.core.home.call(null);

return null;
});
power_turtle.api.turtle.init = (function power_turtle$api$turtle$init(){
power_turtle.api.turtle.home.call(null);

power_turtle.api.turtle.clean.call(null);

clojure_turtle.core.color.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

return null;
});
power_turtle.api.turtle.color = (function power_turtle$api$turtle$color(x){
if((x instanceof cljs.core.Keyword)){
power_turtle.api.raster.color.call(null,x);
} else {
clojure_turtle.core.color.call(null,x);
}

return null;
});
power_turtle.api.turtle.penup = (function power_turtle$api$turtle$penup(){
clojure_turtle.core.penup.call(null);

return null;
});
power_turtle.api.turtle.pendown = (function power_turtle$api$turtle$pendown(){
clojure_turtle.core.pendown.call(null);

return null;
});
power_turtle.api.turtle.setheading = (function power_turtle$api$turtle$setheading(angle){
return clojure_turtle.core.setheading.call(null,angle);
});
power_turtle.api.turtle.setxy = (function power_turtle$api$turtle$setxy(x,y){
return clojure_turtle.core.setxy.call(null,x,y);
});
power_turtle.api.turtle.start_fill = (function power_turtle$api$turtle$start_fill(){
clojure_turtle.core.start_fill.call(null);

return null;
});
power_turtle.api.turtle.end_fill = (function power_turtle$api$turtle$end_fill(){
clojure_turtle.core.end_fill.call(null);

return null;
});
power_turtle.api.turtle.wait = (function power_turtle$api$turtle$wait(ms){
return clojure_turtle.core.wait.call(null,ms);
});
power_turtle.api.turtle.draw_turtle_commands = (function power_turtle$api$turtle$draw_turtle_commands(turtle){
return clojure_turtle.core.draw_turtle_commands.call(null,turtle);
});
cljs.core.reset_BANG_.call(null,power_turtle.view.toolbar.actions,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"<-","<-",-1894022771,null),(function (){
return power_turtle.api.turtle.left.call(null,(45));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null),(function (){
return power_turtle.api.turtle.right.call(null,(45));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^",(function (){
return power_turtle.api.turtle.forward.call(null,(50));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"<-.","<-.",-1461586766,null),power_turtle.api.turtle.forward_left], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".->",".->",771835157,null),power_turtle.api.turtle.forward_right], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"octagon","octagon",1286859315,null),power_turtle.api.turtle.octagon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),power_turtle.api.turtle.pattern], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),power_turtle.api.turtle.red], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"green","green",695004688,null),power_turtle.api.turtle.green], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blue","blue",1018430907,null),power_turtle.api.turtle.blue], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clear","clear",-777330810,null),power_turtle.api.turtle.init], null)], null));

//# sourceMappingURL=turtle.js.map?rel=1557850994884
