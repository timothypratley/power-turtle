// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.common');
goog.require('cljs.core');
re_console.common.beginning_of_source = (function re_console$common$beginning_of_source(exp){
var idx = exp.indexOf("=> ");
if(cljs.core.not_EQ_.call(null,(-1),idx)){
return ((3) + exp.indexOf("=> "));
} else {
return (0);
}
});
re_console.common.source_without_prompt = (function re_console$common$source_without_prompt(exp){

return cljs.core.subs.call(null,exp,re_console.common.beginning_of_source.call(null,exp));
});
re_console.common.scroll_to_el_bottom_BANG_ = (function re_console$common$scroll_to_el_bottom_BANG_(el){
return el.scrollTop = el.scrollHeight;
});

//# sourceMappingURL=common.js.map?rel=1557850984347
