// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_console.io');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
/**
 * Very simple implementation of XMLHttpRequests that given a file path
 *   calls src-cb with the string fetched of nil in case of error.
 * 
 *   See doc at https://developers.google.com/closure/library/docs/xhrio
 */
re_console.io.fetch_file_BANG_ = (function re_console$io$fetch_file_BANG_(file_url,src_cb){
try{return goog.net.XhrIo.send(file_url,(function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return src_cb.call(null,e.target.getResponseText());
} else {
return src_cb.call(null,null);
}
}));
}catch (e31295){var e = e31295;
return src_cb.call(null,null);
}});

//# sourceMappingURL=io.js.map?rel=1557850994811
