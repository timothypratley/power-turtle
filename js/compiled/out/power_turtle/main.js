// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.main');
goog.require('cljs.core');
goog.require('a.a_init');
goog.require('power_turtle.view.navigation');
goog.require('reagent.core');
power_turtle.main.page = (function power_turtle$main$page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.navigation.current_page], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.main.page], null),document.getElementById("app"));
power_turtle.main.on_reload = (function power_turtle$main$on_reload(){
return null;
});

//# sourceMappingURL=main.js.map?rel=1557850997010
