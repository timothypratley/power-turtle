// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.api.chart');
goog.require('cljs.core');
if((typeof power_turtle !== 'undefined') && (typeof power_turtle.api !== 'undefined') && (typeof power_turtle.api.chart !== 'undefined') && (typeof power_turtle.api.chart.chart_data !== 'undefined')){
} else {
power_turtle.api.chart.chart_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"scatter",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Turtles",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(21)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xAxes","xAxes",-143900543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"linear",new cljs.core.Keyword(null,"position","position",-2011731912),"bottom"], null)], null),new cljs.core.Keyword(null,"yAxes","yAxes",1991590889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ticks","ticks",-406190313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beginAtZero","beginAtZero",-291981386),true], null)], null)], null)], null)], null)], null));
}
power_turtle.api.chart.pointize = (function power_turtle$api$chart$pointize(var_args){
var G__27960 = arguments.length;
switch (G__27960) {
case 1:
return power_turtle.api.chart.pointize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return power_turtle.api.chart.pointize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

power_turtle.api.chart.pointize.cljs$core$IFn$_invoke$arity$1 = (function (ys){
return power_turtle.api.chart.pointize.call(null,cljs.core.range.call(null),ys);
});

power_turtle.api.chart.pointize.cljs$core$IFn$_invoke$arity$2 = (function (xs,ys){
return cljs.core.mapv.call(null,(function (x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
}),xs,ys);
});

power_turtle.api.chart.pointize.cljs$lang$maxFixedArity = 2;

power_turtle.api.chart.chart_definition = (function power_turtle$api$chart$chart_definition(t,points,labels){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),labels,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Chart",new cljs.core.Keyword(null,"data","data",-232669377),points], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true,new cljs.core.Keyword(null,"maintainAspectRatio","maintainAspectRatio",1683776470),false,new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),false], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),(((labels == null))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xAxes","xAxes",-143900543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"linear",new cljs.core.Keyword(null,"position","position",-2011731912),"bottom"], null)], null),new cljs.core.Keyword(null,"yAxes","yAxes",1991590889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ticks","ticks",-406190313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beginAtZero","beginAtZero",-291981386),true], null)], null)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"yAxes","yAxes",1991590889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ticks","ticks",-406190313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beginAtZero","beginAtZero",-291981386),true], null)], null)], null)], null))], null)], null);
});
power_turtle.api.chart.overloads = (function power_turtle$api$chart$overloads(var_args){
var G__27963 = arguments.length;
switch (G__27963) {
case 1:
return power_turtle.api.chart.overloads.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return power_turtle.api.chart.overloads.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

power_turtle.api.chart.overloads.cljs$core$IFn$_invoke$arity$1 = (function (a){
if(cljs.core.map_QMARK_.call(null,a)){
return a;
} else {
if(cljs.core.seq.call(null,a)){
if(typeof cljs.core.first.call(null,a) === 'number'){
return power_turtle.api.chart.chart_definition.call(null,"scatter",power_turtle.api.chart.pointize.call(null,a),null);
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,a))){
return power_turtle.api.chart.chart_definition.call(null,"scatter",a,null);
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,a))){
return power_turtle.api.chart.overloads.call(null,cljs.core.mapv.call(null,cljs.core.first,a),cljs.core.mapv.call(null,cljs.core.second,a));
} else {
return null;
}
}
}
} else {
throw cljs.core.ex_info.call(null,"Don't know how to chart that",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),a], null));

}
}
});

power_turtle.api.chart.overloads.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(typeof cljs.core.first.call(null,a) === 'number'){
return power_turtle.api.chart.chart_definition.call(null,"scatter",power_turtle.api.chart.pointize.call(null,a,b),null);
} else {
return power_turtle.api.chart.chart_definition.call(null,"bar",b,a);

}
});

power_turtle.api.chart.overloads.cljs$lang$maxFixedArity = 2;

power_turtle.api.chart.chart = (function power_turtle$api$chart$chart(var_args){
var G__27966 = arguments.length;
switch (G__27966) {
case 1:
return power_turtle.api.chart.chart.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return power_turtle.api.chart.chart.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

power_turtle.api.chart.chart.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.core.reset_BANG_.call(null,power_turtle.api.chart.chart_data,power_turtle.api.chart.overloads.call(null,a));

return null;
});

power_turtle.api.chart.chart.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.core.reset_BANG_.call(null,power_turtle.api.chart.chart_data,power_turtle.api.chart.overloads.call(null,a,b));

return null;
});

power_turtle.api.chart.chart.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=chart.js.map?rel=1557850990605
