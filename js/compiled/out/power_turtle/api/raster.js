// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.api.raster');
goog.require('cljs.core');
power_turtle.api.raster.width = (40);
power_turtle.api.raster.height = (40);
power_turtle.api.raster.clear_color = new cljs.core.Keyword(null,"black","black",1294279647);
power_turtle.api.raster.default_color = new cljs.core.Keyword(null,"white","white",-483998618);
power_turtle.api.raster.clear_screen = cljs.core.vec.call(null,cljs.core.repeat.call(null,(40),cljs.core.vec.call(null,cljs.core.repeat.call(null,(40),power_turtle.api.raster.clear_color))));
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.api !== 'undefined') && (typeof power_turtle.api.raster !== 'undefined') && (typeof power_turtle.api.raster.raster !== 'undefined')){
} else {
power_turtle.api.raster.raster = cljs.core.atom.call(null,power_turtle.api.raster.clear_screen);
}
power_turtle.api.raster.color_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"dark-gray","dark-gray",318752463),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"medium-blue","medium-blue",580274164),new cljs.core.Keyword(null,"dark-green","dark-green",1103197366),new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"light-green","light-green",381195769),new cljs.core.Keyword(null,"light-blue","light-blue",-931755143),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"black","black",1294279647)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(242),(94),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(254)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(192),(192),(192)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(213),(213),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(98),(246),(153)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(157),(9),(102)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(161),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(118),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(42),(42),(229)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(137),(229)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(56),(203),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(170),(170),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(199),(52),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(85),(85),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)]);
/**
 * Clears this screen.
 */
power_turtle.api.raster.clear = (function power_turtle$api$raster$clear(){
cljs.core.reset_BANG_.call(null,power_turtle.api.raster.raster,power_turtle.api.raster.clear_screen);

return null;
});
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.api !== 'undefined') && (typeof power_turtle.api.raster !== 'undefined') && (typeof power_turtle.api.raster._STAR_color_STAR_ !== 'undefined')){
} else {
/**
 * The color used for plotting.
 */
power_turtle.api.raster._STAR_color_STAR_ = power_turtle.api.raster.default_color;
}
cljs.core.set_validator_BANG_.call(null,new cljs.core.Var(function(){return power_turtle.api.raster._STAR_color_STAR_;},new cljs.core.Symbol("power-turtle.api.raster","*color*","power-turtle.api.raster/*color*",719479927,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.api.raster","power-turtle.api.raster",1946341107,null),new cljs.core.Symbol(null,"*color*","*color*",854199660,null),"src/power_turtle/api/raster.cljc",10,1,true,34,37,cljs.core.List.EMPTY,"The color used for plotting.",(cljs.core.truth_(power_turtle.api.raster._STAR_color_STAR_)?power_turtle.api.raster._STAR_color_STAR_.cljs$lang$test:null)])),(function (c){
return cljs.core.contains_QMARK_.call(null,power_turtle.api.raster.color_map,c);
}));
/**
 * Sets the color for plotting.
 * 
 *   The color must be one of the following:
 * 
 *   :black        :red        :dark-blue    :purple
 *   :dark-green   :dark-gray  :medium-blue  :light-blue
 *   :brown        :orange     :light-gray   :pink
 *   :light-green  :yellow     :aqua         :white
 */
power_turtle.api.raster.color = (function power_turtle$api$raster$color(c){
if((c instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? c)"));
}

if(cljs.core.truth_(c.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"orange","orange",73816386),null,new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825),null,new cljs.core.Keyword(null,"yellow","yellow",-881035449),null,new cljs.core.Keyword(null,"medium-green","medium-green",713467500),null,new cljs.core.Keyword(null,"dark-gray","dark-gray",318752463),null,new cljs.core.Keyword(null,"aqua","aqua",745022417),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"medium-blue","medium-blue",580274164),null,new cljs.core.Keyword(null,"dark-green","dark-green",1103197366),null,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975),null,new cljs.core.Keyword(null,"pink","pink",393815864),null,new cljs.core.Keyword(null,"light-green","light-green",381195769),null,new cljs.core.Keyword(null,"light-blue","light-blue",-931755143),null,new cljs.core.Keyword(null,"purple","purple",-876021126),null,new cljs.core.Keyword(null,"brown","brown",1414854429),null,new cljs.core.Keyword(null,"black","black",1294279647),null], null), null)))){
} else {
throw (new Error("Assert failed: (c #{:orange :white :light-gray :yellow :medium-green :dark-gray :aqua :red :medium-blue :dark-green :dark-blue :pink :light-green :light-blue :purple :brown :black})"));
}

power_turtle.api.raster._STAR_color_STAR_ = c;

return null;
});
power_turtle.api.raster.plot_STAR_ = (function power_turtle$api$raster$plot_STAR_(r,x,y,c){
return cljs.core.assoc_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),c);
});
/**
 * Plots a point at a given x and y.
 * 
 *   Both x and y must be between 0 and 39.
 */
power_turtle.api.raster.plot = (function power_turtle$api$raster$plot(x,y){
if(cljs.core.integer_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (integer? x)"));
}

if(cljs.core.integer_QMARK_.call(null,y)){
} else {
throw (new Error("Assert failed: (integer? y)"));
}

if(((((0) <= x)) && ((x <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 x 39)"));
}

if(((((0) <= y)) && ((y <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 y 39)"));
}

cljs.core.swap_BANG_.call(null,power_turtle.api.raster.raster,power_turtle.api.raster.plot_STAR_,x,y,power_turtle.api.raster._STAR_color_STAR_);

return null;
});
power_turtle.api.raster.lin = (function power_turtle$api$raster$lin(r,a1,a2,b,c,f){
if((a2 < a1)){
return power_turtle.api.raster.lin.call(null,r,a2,a1,b,c,f);
} else {
return cljs.core.reduce.call(null,(function (r__$1,x){
return cljs.core.assoc_in.call(null,r__$1,f.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,b], null)),c);
}),r,cljs.core.range.call(null,a1,(a2 + (1))));
}
});
power_turtle.api.raster.hlin_STAR_ = (function power_turtle$api$raster$hlin_STAR_(r,x1,x2,y,c){
return power_turtle.api.raster.lin.call(null,r,x1,x2,y,c,cljs.core.identity);
});
/**
 * Plots a horizontal line from x1 to x2 at a given y.
 * 
 *   The x and y numbers must be between 0 and 39.
 */
power_turtle.api.raster.hlin = (function power_turtle$api$raster$hlin(x1,x2,y){
if(cljs.core.integer_QMARK_.call(null,x1)){
} else {
throw (new Error("Assert failed: (integer? x1)"));
}

if(cljs.core.integer_QMARK_.call(null,x2)){
} else {
throw (new Error("Assert failed: (integer? x2)"));
}

if(cljs.core.integer_QMARK_.call(null,y)){
} else {
throw (new Error("Assert failed: (integer? y)"));
}

if(((((0) <= x1)) && ((x1 <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 x1 39)"));
}

if(((((0) <= x2)) && ((x2 <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 x2 39)"));
}

if(((((0) <= y)) && ((y <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 y 39)"));
}

cljs.core.swap_BANG_.call(null,power_turtle.api.raster.raster,power_turtle.api.raster.hlin_STAR_,x1,x2,y,power_turtle.api.raster._STAR_color_STAR_);

return null;
});
power_turtle.api.raster.vlin_STAR_ = (function power_turtle$api$raster$vlin_STAR_(r,y1,y2,x,c){
return power_turtle.api.raster.lin.call(null,r,y1,y2,x,c,cljs.core.reverse);
});
/**
 * Plots a vertical line from y1 to y2 at a given x.
 * 
 *   The x and y numbers must be between 0 and 39.
 */
power_turtle.api.raster.vlin = (function power_turtle$api$raster$vlin(y1,y2,x){
if(cljs.core.integer_QMARK_.call(null,y1)){
} else {
throw (new Error("Assert failed: (integer? y1)"));
}

if(cljs.core.integer_QMARK_.call(null,y2)){
} else {
throw (new Error("Assert failed: (integer? y2)"));
}

if(cljs.core.integer_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (integer? x)"));
}

if(((((0) <= y1)) && ((y1 <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 y1 39)"));
}

if(((((0) <= y2)) && ((y2 <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 y2 39)"));
}

if(((((0) <= x)) && ((x <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 x 39)"));
}

cljs.core.swap_BANG_.call(null,power_turtle.api.raster.raster,power_turtle.api.raster.vlin_STAR_,y1,y2,x,power_turtle.api.raster._STAR_color_STAR_);

return null;
});
power_turtle.api.raster.scrn_STAR_ = (function power_turtle$api$raster$scrn_STAR_(r,x,y){
return cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Gets the color at a given x and y.
 * 
 *   Both x and y must be between 0 and 39.
 */
power_turtle.api.raster.scrn = (function power_turtle$api$raster$scrn(x,y){
if(cljs.core.integer_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (integer? x)"));
}

if(cljs.core.integer_QMARK_.call(null,y)){
} else {
throw (new Error("Assert failed: (integer? y)"));
}

if(((((0) <= x)) && ((x <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 x 39)"));
}

if(((((0) <= y)) && ((y <= (39))))){
} else {
throw (new Error("Assert failed: (<= 0 y 39)"));
}

return power_turtle.api.raster.scrn_STAR_.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),x,y);
});

//# sourceMappingURL=raster.js.map?rel=1557850990466
