// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36153 = arguments.length;
switch (G__36153) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36154 = (function (f,blockable,meta36155){
this.f = f;
this.blockable = blockable;
this.meta36155 = meta36155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36156,meta36155__$1){
var self__ = this;
var _36156__$1 = this;
return (new cljs.core.async.t_cljs$core$async36154(self__.f,self__.blockable,meta36155__$1));
});

cljs.core.async.t_cljs$core$async36154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36156){
var self__ = this;
var _36156__$1 = this;
return self__.meta36155;
});

cljs.core.async.t_cljs$core$async36154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36155","meta36155",-294668119,null)], null);
});

cljs.core.async.t_cljs$core$async36154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36154";

cljs.core.async.t_cljs$core$async36154.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36154");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36154.
 */
cljs.core.async.__GT_t_cljs$core$async36154 = (function cljs$core$async$__GT_t_cljs$core$async36154(f__$1,blockable__$1,meta36155){
return (new cljs.core.async.t_cljs$core$async36154(f__$1,blockable__$1,meta36155));
});

}

return (new cljs.core.async.t_cljs$core$async36154(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36160 = arguments.length;
switch (G__36160) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36163 = arguments.length;
switch (G__36163) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36166 = arguments.length;
switch (G__36166) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36168 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36168);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36168,ret){
return (function (){
return fn1.call(null,val_36168);
});})(val_36168,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36170 = arguments.length;
switch (G__36170) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a__$1 = (new Array(n));
var n__4518__auto___36172 = n;
var x_36173 = (0);
while(true){
if((x_36173 < n__4518__auto___36172)){
(a__$1[x_36173] = (0));

var G__36174 = (x_36173 + (1));
x_36173 = G__36174;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a__$1;
} else {
var j = cljs.core.rand_int.call(null,i);
(a__$1[i] = (a__$1[j]));

(a__$1[j] = i);

var G__36175 = (i + (1));
i = G__36175;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36176 = (function (flag,meta36177){
this.flag = flag;
this.meta36177 = meta36177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36178,meta36177__$1){
var self__ = this;
var _36178__$1 = this;
return (new cljs.core.async.t_cljs$core$async36176(self__.flag,meta36177__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36178){
var self__ = this;
var _36178__$1 = this;
return self__.meta36177;
});})(flag))
;

cljs.core.async.t_cljs$core$async36176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36176.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36177","meta36177",-2061703636,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36176";

cljs.core.async.t_cljs$core$async36176.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36176");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36176.
 */
cljs.core.async.__GT_t_cljs$core$async36176 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36176(flag__$1,meta36177){
return (new cljs.core.async.t_cljs$core$async36176(flag__$1,meta36177));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36176(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36179 = (function (flag,cb,meta36180){
this.flag = flag;
this.cb = cb;
this.meta36180 = meta36180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36181,meta36180__$1){
var self__ = this;
var _36181__$1 = this;
return (new cljs.core.async.t_cljs$core$async36179(self__.flag,self__.cb,meta36180__$1));
});

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36181){
var self__ = this;
var _36181__$1 = this;
return self__.meta36180;
});

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36180","meta36180",-821007215,null)], null);
});

cljs.core.async.t_cljs$core$async36179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36179";

cljs.core.async.t_cljs$core$async36179.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36179");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36179.
 */
cljs.core.async.__GT_t_cljs$core$async36179 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36179(flag__$1,cb__$1,meta36180){
return (new cljs.core.async.t_cljs$core$async36179(flag__$1,cb__$1,meta36180));
});

}

return (new cljs.core.async.t_cljs$core$async36179(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36182_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36182_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36183_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36183_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36184 = (i + (1));
i = G__36184;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36190 = arguments.length;
var i__4642__auto___36191 = (0);
while(true){
if((i__4642__auto___36191 < len__4641__auto___36190)){
args__4647__auto__.push((arguments[i__4642__auto___36191]));

var G__36192 = (i__4642__auto___36191 + (1));
i__4642__auto___36191 = G__36192;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36187){
var map__36188 = p__36187;
var map__36188__$1 = (((((!((map__36188 == null))))?(((((map__36188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36188):map__36188);
var opts = map__36188__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36185){
var G__36186 = cljs.core.first.call(null,seq36185);
var seq36185__$1 = cljs.core.next.call(null,seq36185);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36186,seq36185__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36194 = arguments.length;
switch (G__36194) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36093__auto___36240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___36240){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___36240){
return (function (state_36218){
var state_val_36219 = (state_36218[(1)]);
if((state_val_36219 === (7))){
var inst_36214 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
var statearr_36220_36241 = state_36218__$1;
(statearr_36220_36241[(2)] = inst_36214);

(statearr_36220_36241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (1))){
var state_36218__$1 = state_36218;
var statearr_36221_36242 = state_36218__$1;
(statearr_36221_36242[(2)] = null);

(statearr_36221_36242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (4))){
var inst_36197 = (state_36218[(7)]);
var inst_36197__$1 = (state_36218[(2)]);
var inst_36198 = (inst_36197__$1 == null);
var state_36218__$1 = (function (){var statearr_36222 = state_36218;
(statearr_36222[(7)] = inst_36197__$1);

return statearr_36222;
})();
if(cljs.core.truth_(inst_36198)){
var statearr_36223_36243 = state_36218__$1;
(statearr_36223_36243[(1)] = (5));

} else {
var statearr_36224_36244 = state_36218__$1;
(statearr_36224_36244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (13))){
var state_36218__$1 = state_36218;
var statearr_36225_36245 = state_36218__$1;
(statearr_36225_36245[(2)] = null);

(statearr_36225_36245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (6))){
var inst_36197 = (state_36218[(7)]);
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36218__$1,(11),to,inst_36197);
} else {
if((state_val_36219 === (3))){
var inst_36216 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36218__$1,inst_36216);
} else {
if((state_val_36219 === (12))){
var state_36218__$1 = state_36218;
var statearr_36226_36246 = state_36218__$1;
(statearr_36226_36246[(2)] = null);

(statearr_36226_36246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (2))){
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36218__$1,(4),from);
} else {
if((state_val_36219 === (11))){
var inst_36207 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
if(cljs.core.truth_(inst_36207)){
var statearr_36227_36247 = state_36218__$1;
(statearr_36227_36247[(1)] = (12));

} else {
var statearr_36228_36248 = state_36218__$1;
(statearr_36228_36248[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (9))){
var state_36218__$1 = state_36218;
var statearr_36229_36249 = state_36218__$1;
(statearr_36229_36249[(2)] = null);

(statearr_36229_36249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (5))){
var state_36218__$1 = state_36218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36230_36250 = state_36218__$1;
(statearr_36230_36250[(1)] = (8));

} else {
var statearr_36231_36251 = state_36218__$1;
(statearr_36231_36251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (14))){
var inst_36212 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
var statearr_36232_36252 = state_36218__$1;
(statearr_36232_36252[(2)] = inst_36212);

(statearr_36232_36252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (10))){
var inst_36204 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
var statearr_36233_36253 = state_36218__$1;
(statearr_36233_36253[(2)] = inst_36204);

(statearr_36233_36253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (8))){
var inst_36201 = cljs.core.async.close_BANG_.call(null,to);
var state_36218__$1 = state_36218;
var statearr_36234_36254 = state_36218__$1;
(statearr_36234_36254[(2)] = inst_36201);

(statearr_36234_36254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___36240))
;
return ((function (switch__35998__auto__,c__36093__auto___36240){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_36235 = [null,null,null,null,null,null,null,null];
(statearr_36235[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_36235[(1)] = (1));

return statearr_36235;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_36218){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36236){if((e36236 instanceof Object)){
var ex__36002__auto__ = e36236;
var statearr_36237_36255 = state_36218;
(statearr_36237_36255[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36256 = state_36218;
state_36218 = G__36256;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_36218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_36218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___36240))
})();
var state__36095__auto__ = (function (){var statearr_36238 = f__36094__auto__.call(null);
(statearr_36238[(6)] = c__36093__auto___36240);

return statearr_36238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___36240))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36257){
var vec__36258 = p__36257;
var v = cljs.core.nth.call(null,vec__36258,(0),null);
var p = cljs.core.nth.call(null,vec__36258,(1),null);
var job = vec__36258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36093__auto___36429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___36429,res,vec__36258,v,p,job,jobs,results){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___36429,res,vec__36258,v,p,job,jobs,results){
return (function (state_36265){
var state_val_36266 = (state_36265[(1)]);
if((state_val_36266 === (1))){
var state_36265__$1 = state_36265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36265__$1,(2),res,v);
} else {
if((state_val_36266 === (2))){
var inst_36262 = (state_36265[(2)]);
var inst_36263 = cljs.core.async.close_BANG_.call(null,res);
var state_36265__$1 = (function (){var statearr_36267 = state_36265;
(statearr_36267[(7)] = inst_36262);

return statearr_36267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36265__$1,inst_36263);
} else {
return null;
}
}
});})(c__36093__auto___36429,res,vec__36258,v,p,job,jobs,results))
;
return ((function (switch__35998__auto__,c__36093__auto___36429,res,vec__36258,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0 = (function (){
var statearr_36268 = [null,null,null,null,null,null,null,null];
(statearr_36268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__);

(statearr_36268[(1)] = (1));

return statearr_36268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1 = (function (state_36265){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36269){if((e36269 instanceof Object)){
var ex__36002__auto__ = e36269;
var statearr_36270_36430 = state_36265;
(statearr_36270_36430[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36431 = state_36265;
state_36265 = G__36431;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = function(state_36265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1.call(this,state_36265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___36429,res,vec__36258,v,p,job,jobs,results))
})();
var state__36095__auto__ = (function (){var statearr_36271 = f__36094__auto__.call(null);
(statearr_36271[(6)] = c__36093__auto___36429);

return statearr_36271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___36429,res,vec__36258,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36272){
var vec__36273 = p__36272;
var v = cljs.core.nth.call(null,vec__36273,(0),null);
var p = cljs.core.nth.call(null,vec__36273,(1),null);
var job = vec__36273;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___36432 = n;
var __36433 = (0);
while(true){
if((__36433 < n__4518__auto___36432)){
var G__36276_36434 = type;
var G__36276_36435__$1 = (((G__36276_36434 instanceof cljs.core.Keyword))?G__36276_36434.fqn:null);
switch (G__36276_36435__$1) {
case "compute":
var c__36093__auto___36437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36433,c__36093__auto___36437,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (__36433,c__36093__auto___36437,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async){
return (function (state_36289){
var state_val_36290 = (state_36289[(1)]);
if((state_val_36290 === (1))){
var state_36289__$1 = state_36289;
var statearr_36291_36438 = state_36289__$1;
(statearr_36291_36438[(2)] = null);

(statearr_36291_36438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (2))){
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36289__$1,(4),jobs);
} else {
if((state_val_36290 === (3))){
var inst_36287 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36289__$1,inst_36287);
} else {
if((state_val_36290 === (4))){
var inst_36279 = (state_36289[(2)]);
var inst_36280 = process.call(null,inst_36279);
var state_36289__$1 = state_36289;
if(cljs.core.truth_(inst_36280)){
var statearr_36292_36439 = state_36289__$1;
(statearr_36292_36439[(1)] = (5));

} else {
var statearr_36293_36440 = state_36289__$1;
(statearr_36293_36440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (5))){
var state_36289__$1 = state_36289;
var statearr_36294_36441 = state_36289__$1;
(statearr_36294_36441[(2)] = null);

(statearr_36294_36441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (6))){
var state_36289__$1 = state_36289;
var statearr_36295_36442 = state_36289__$1;
(statearr_36295_36442[(2)] = null);

(statearr_36295_36442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (7))){
var inst_36285 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36296_36443 = state_36289__$1;
(statearr_36296_36443[(2)] = inst_36285);

(statearr_36296_36443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36433,c__36093__auto___36437,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async))
;
return ((function (__36433,switch__35998__auto__,c__36093__auto___36437,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0 = (function (){
var statearr_36297 = [null,null,null,null,null,null,null];
(statearr_36297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__);

(statearr_36297[(1)] = (1));

return statearr_36297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1 = (function (state_36289){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36298){if((e36298 instanceof Object)){
var ex__36002__auto__ = e36298;
var statearr_36299_36444 = state_36289;
(statearr_36299_36444[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36445 = state_36289;
state_36289 = G__36445;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = function(state_36289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1.call(this,state_36289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__;
})()
;})(__36433,switch__35998__auto__,c__36093__auto___36437,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async))
})();
var state__36095__auto__ = (function (){var statearr_36300 = f__36094__auto__.call(null);
(statearr_36300[(6)] = c__36093__auto___36437);

return statearr_36300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(__36433,c__36093__auto___36437,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async))
);


break;
case "async":
var c__36093__auto___36446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36433,c__36093__auto___36446,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (__36433,c__36093__auto___36446,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async){
return (function (state_36313){
var state_val_36314 = (state_36313[(1)]);
if((state_val_36314 === (1))){
var state_36313__$1 = state_36313;
var statearr_36315_36447 = state_36313__$1;
(statearr_36315_36447[(2)] = null);

(statearr_36315_36447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (2))){
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36313__$1,(4),jobs);
} else {
if((state_val_36314 === (3))){
var inst_36311 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36313__$1,inst_36311);
} else {
if((state_val_36314 === (4))){
var inst_36303 = (state_36313[(2)]);
var inst_36304 = async.call(null,inst_36303);
var state_36313__$1 = state_36313;
if(cljs.core.truth_(inst_36304)){
var statearr_36316_36448 = state_36313__$1;
(statearr_36316_36448[(1)] = (5));

} else {
var statearr_36317_36449 = state_36313__$1;
(statearr_36317_36449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (5))){
var state_36313__$1 = state_36313;
var statearr_36318_36450 = state_36313__$1;
(statearr_36318_36450[(2)] = null);

(statearr_36318_36450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (6))){
var state_36313__$1 = state_36313;
var statearr_36319_36451 = state_36313__$1;
(statearr_36319_36451[(2)] = null);

(statearr_36319_36451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (7))){
var inst_36309 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36320_36452 = state_36313__$1;
(statearr_36320_36452[(2)] = inst_36309);

(statearr_36320_36452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36433,c__36093__auto___36446,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async))
;
return ((function (__36433,switch__35998__auto__,c__36093__auto___36446,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0 = (function (){
var statearr_36321 = [null,null,null,null,null,null,null];
(statearr_36321[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__);

(statearr_36321[(1)] = (1));

return statearr_36321;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1 = (function (state_36313){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36322){if((e36322 instanceof Object)){
var ex__36002__auto__ = e36322;
var statearr_36323_36453 = state_36313;
(statearr_36323_36453[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36454 = state_36313;
state_36313 = G__36454;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = function(state_36313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1.call(this,state_36313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__;
})()
;})(__36433,switch__35998__auto__,c__36093__auto___36446,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async))
})();
var state__36095__auto__ = (function (){var statearr_36324 = f__36094__auto__.call(null);
(statearr_36324[(6)] = c__36093__auto___36446);

return statearr_36324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(__36433,c__36093__auto___36446,G__36276_36434,G__36276_36435__$1,n__4518__auto___36432,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36276_36435__$1)].join('')));

}

var G__36455 = (__36433 + (1));
__36433 = G__36455;
continue;
} else {
}
break;
}

var c__36093__auto___36456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___36456,jobs,results,process,async){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___36456,jobs,results,process,async){
return (function (state_36346){
var state_val_36347 = (state_36346[(1)]);
if((state_val_36347 === (7))){
var inst_36342 = (state_36346[(2)]);
var state_36346__$1 = state_36346;
var statearr_36348_36457 = state_36346__$1;
(statearr_36348_36457[(2)] = inst_36342);

(statearr_36348_36457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (1))){
var state_36346__$1 = state_36346;
var statearr_36349_36458 = state_36346__$1;
(statearr_36349_36458[(2)] = null);

(statearr_36349_36458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (4))){
var inst_36327 = (state_36346[(7)]);
var inst_36327__$1 = (state_36346[(2)]);
var inst_36328 = (inst_36327__$1 == null);
var state_36346__$1 = (function (){var statearr_36350 = state_36346;
(statearr_36350[(7)] = inst_36327__$1);

return statearr_36350;
})();
if(cljs.core.truth_(inst_36328)){
var statearr_36351_36459 = state_36346__$1;
(statearr_36351_36459[(1)] = (5));

} else {
var statearr_36352_36460 = state_36346__$1;
(statearr_36352_36460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (6))){
var inst_36332 = (state_36346[(8)]);
var inst_36327 = (state_36346[(7)]);
var inst_36332__$1 = cljs.core.async.chan.call(null,(1));
var inst_36333 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36334 = [inst_36327,inst_36332__$1];
var inst_36335 = (new cljs.core.PersistentVector(null,2,(5),inst_36333,inst_36334,null));
var state_36346__$1 = (function (){var statearr_36353 = state_36346;
(statearr_36353[(8)] = inst_36332__$1);

return statearr_36353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36346__$1,(8),jobs,inst_36335);
} else {
if((state_val_36347 === (3))){
var inst_36344 = (state_36346[(2)]);
var state_36346__$1 = state_36346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36346__$1,inst_36344);
} else {
if((state_val_36347 === (2))){
var state_36346__$1 = state_36346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36346__$1,(4),from);
} else {
if((state_val_36347 === (9))){
var inst_36339 = (state_36346[(2)]);
var state_36346__$1 = (function (){var statearr_36354 = state_36346;
(statearr_36354[(9)] = inst_36339);

return statearr_36354;
})();
var statearr_36355_36461 = state_36346__$1;
(statearr_36355_36461[(2)] = null);

(statearr_36355_36461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (5))){
var inst_36330 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36346__$1 = state_36346;
var statearr_36356_36462 = state_36346__$1;
(statearr_36356_36462[(2)] = inst_36330);

(statearr_36356_36462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (8))){
var inst_36332 = (state_36346[(8)]);
var inst_36337 = (state_36346[(2)]);
var state_36346__$1 = (function (){var statearr_36357 = state_36346;
(statearr_36357[(10)] = inst_36337);

return statearr_36357;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36346__$1,(9),results,inst_36332);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___36456,jobs,results,process,async))
;
return ((function (switch__35998__auto__,c__36093__auto___36456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0 = (function (){
var statearr_36358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__);

(statearr_36358[(1)] = (1));

return statearr_36358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1 = (function (state_36346){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36359){if((e36359 instanceof Object)){
var ex__36002__auto__ = e36359;
var statearr_36360_36463 = state_36346;
(statearr_36360_36463[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36464 = state_36346;
state_36346 = G__36464;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = function(state_36346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1.call(this,state_36346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___36456,jobs,results,process,async))
})();
var state__36095__auto__ = (function (){var statearr_36361 = f__36094__auto__.call(null);
(statearr_36361[(6)] = c__36093__auto___36456);

return statearr_36361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___36456,jobs,results,process,async))
);


var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__,jobs,results,process,async){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__,jobs,results,process,async){
return (function (state_36399){
var state_val_36400 = (state_36399[(1)]);
if((state_val_36400 === (7))){
var inst_36395 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
var statearr_36401_36465 = state_36399__$1;
(statearr_36401_36465[(2)] = inst_36395);

(statearr_36401_36465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (20))){
var state_36399__$1 = state_36399;
var statearr_36402_36466 = state_36399__$1;
(statearr_36402_36466[(2)] = null);

(statearr_36402_36466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (1))){
var state_36399__$1 = state_36399;
var statearr_36403_36467 = state_36399__$1;
(statearr_36403_36467[(2)] = null);

(statearr_36403_36467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (4))){
var inst_36364 = (state_36399[(7)]);
var inst_36364__$1 = (state_36399[(2)]);
var inst_36365 = (inst_36364__$1 == null);
var state_36399__$1 = (function (){var statearr_36404 = state_36399;
(statearr_36404[(7)] = inst_36364__$1);

return statearr_36404;
})();
if(cljs.core.truth_(inst_36365)){
var statearr_36405_36468 = state_36399__$1;
(statearr_36405_36468[(1)] = (5));

} else {
var statearr_36406_36469 = state_36399__$1;
(statearr_36406_36469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (15))){
var inst_36377 = (state_36399[(8)]);
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36399__$1,(18),to,inst_36377);
} else {
if((state_val_36400 === (21))){
var inst_36390 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
var statearr_36407_36470 = state_36399__$1;
(statearr_36407_36470[(2)] = inst_36390);

(statearr_36407_36470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (13))){
var inst_36392 = (state_36399[(2)]);
var state_36399__$1 = (function (){var statearr_36408 = state_36399;
(statearr_36408[(9)] = inst_36392);

return statearr_36408;
})();
var statearr_36409_36471 = state_36399__$1;
(statearr_36409_36471[(2)] = null);

(statearr_36409_36471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (6))){
var inst_36364 = (state_36399[(7)]);
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36399__$1,(11),inst_36364);
} else {
if((state_val_36400 === (17))){
var inst_36385 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
if(cljs.core.truth_(inst_36385)){
var statearr_36410_36472 = state_36399__$1;
(statearr_36410_36472[(1)] = (19));

} else {
var statearr_36411_36473 = state_36399__$1;
(statearr_36411_36473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (3))){
var inst_36397 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36399__$1,inst_36397);
} else {
if((state_val_36400 === (12))){
var inst_36374 = (state_36399[(10)]);
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36399__$1,(14),inst_36374);
} else {
if((state_val_36400 === (2))){
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36399__$1,(4),results);
} else {
if((state_val_36400 === (19))){
var state_36399__$1 = state_36399;
var statearr_36412_36474 = state_36399__$1;
(statearr_36412_36474[(2)] = null);

(statearr_36412_36474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (11))){
var inst_36374 = (state_36399[(2)]);
var state_36399__$1 = (function (){var statearr_36413 = state_36399;
(statearr_36413[(10)] = inst_36374);

return statearr_36413;
})();
var statearr_36414_36475 = state_36399__$1;
(statearr_36414_36475[(2)] = null);

(statearr_36414_36475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (9))){
var state_36399__$1 = state_36399;
var statearr_36415_36476 = state_36399__$1;
(statearr_36415_36476[(2)] = null);

(statearr_36415_36476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (5))){
var state_36399__$1 = state_36399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36416_36477 = state_36399__$1;
(statearr_36416_36477[(1)] = (8));

} else {
var statearr_36417_36478 = state_36399__$1;
(statearr_36417_36478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (14))){
var inst_36377 = (state_36399[(8)]);
var inst_36379 = (state_36399[(11)]);
var inst_36377__$1 = (state_36399[(2)]);
var inst_36378 = (inst_36377__$1 == null);
var inst_36379__$1 = cljs.core.not.call(null,inst_36378);
var state_36399__$1 = (function (){var statearr_36418 = state_36399;
(statearr_36418[(8)] = inst_36377__$1);

(statearr_36418[(11)] = inst_36379__$1);

return statearr_36418;
})();
if(inst_36379__$1){
var statearr_36419_36479 = state_36399__$1;
(statearr_36419_36479[(1)] = (15));

} else {
var statearr_36420_36480 = state_36399__$1;
(statearr_36420_36480[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (16))){
var inst_36379 = (state_36399[(11)]);
var state_36399__$1 = state_36399;
var statearr_36421_36481 = state_36399__$1;
(statearr_36421_36481[(2)] = inst_36379);

(statearr_36421_36481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (10))){
var inst_36371 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
var statearr_36422_36482 = state_36399__$1;
(statearr_36422_36482[(2)] = inst_36371);

(statearr_36422_36482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (18))){
var inst_36382 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
var statearr_36423_36483 = state_36399__$1;
(statearr_36423_36483[(2)] = inst_36382);

(statearr_36423_36483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (8))){
var inst_36368 = cljs.core.async.close_BANG_.call(null,to);
var state_36399__$1 = state_36399;
var statearr_36424_36484 = state_36399__$1;
(statearr_36424_36484[(2)] = inst_36368);

(statearr_36424_36484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto__,jobs,results,process,async))
;
return ((function (switch__35998__auto__,c__36093__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0 = (function (){
var statearr_36425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__);

(statearr_36425[(1)] = (1));

return statearr_36425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1 = (function (state_36399){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36426){if((e36426 instanceof Object)){
var ex__36002__auto__ = e36426;
var statearr_36427_36485 = state_36399;
(statearr_36427_36485[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36486 = state_36399;
state_36399 = G__36486;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__ = function(state_36399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1.call(this,state_36399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__,jobs,results,process,async))
})();
var state__36095__auto__ = (function (){var statearr_36428 = f__36094__auto__.call(null);
(statearr_36428[(6)] = c__36093__auto__);

return statearr_36428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__,jobs,results,process,async))
);

return c__36093__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36488 = arguments.length;
switch (G__36488) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36491 = arguments.length;
switch (G__36491) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36494 = arguments.length;
switch (G__36494) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36093__auto___36543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___36543,tc,fc){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___36543,tc,fc){
return (function (state_36520){
var state_val_36521 = (state_36520[(1)]);
if((state_val_36521 === (7))){
var inst_36516 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36522_36544 = state_36520__$1;
(statearr_36522_36544[(2)] = inst_36516);

(statearr_36522_36544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (1))){
var state_36520__$1 = state_36520;
var statearr_36523_36545 = state_36520__$1;
(statearr_36523_36545[(2)] = null);

(statearr_36523_36545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (4))){
var inst_36497 = (state_36520[(7)]);
var inst_36497__$1 = (state_36520[(2)]);
var inst_36498 = (inst_36497__$1 == null);
var state_36520__$1 = (function (){var statearr_36524 = state_36520;
(statearr_36524[(7)] = inst_36497__$1);

return statearr_36524;
})();
if(cljs.core.truth_(inst_36498)){
var statearr_36525_36546 = state_36520__$1;
(statearr_36525_36546[(1)] = (5));

} else {
var statearr_36526_36547 = state_36520__$1;
(statearr_36526_36547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (13))){
var state_36520__$1 = state_36520;
var statearr_36527_36548 = state_36520__$1;
(statearr_36527_36548[(2)] = null);

(statearr_36527_36548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (6))){
var inst_36497 = (state_36520[(7)]);
var inst_36503 = p.call(null,inst_36497);
var state_36520__$1 = state_36520;
if(cljs.core.truth_(inst_36503)){
var statearr_36528_36549 = state_36520__$1;
(statearr_36528_36549[(1)] = (9));

} else {
var statearr_36529_36550 = state_36520__$1;
(statearr_36529_36550[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (3))){
var inst_36518 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36520__$1,inst_36518);
} else {
if((state_val_36521 === (12))){
var state_36520__$1 = state_36520;
var statearr_36530_36551 = state_36520__$1;
(statearr_36530_36551[(2)] = null);

(statearr_36530_36551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (2))){
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36520__$1,(4),ch);
} else {
if((state_val_36521 === (11))){
var inst_36497 = (state_36520[(7)]);
var inst_36507 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36520__$1,(8),inst_36507,inst_36497);
} else {
if((state_val_36521 === (9))){
var state_36520__$1 = state_36520;
var statearr_36531_36552 = state_36520__$1;
(statearr_36531_36552[(2)] = tc);

(statearr_36531_36552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (5))){
var inst_36500 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36501 = cljs.core.async.close_BANG_.call(null,fc);
var state_36520__$1 = (function (){var statearr_36532 = state_36520;
(statearr_36532[(8)] = inst_36500);

return statearr_36532;
})();
var statearr_36533_36553 = state_36520__$1;
(statearr_36533_36553[(2)] = inst_36501);

(statearr_36533_36553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (14))){
var inst_36514 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36534_36554 = state_36520__$1;
(statearr_36534_36554[(2)] = inst_36514);

(statearr_36534_36554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (10))){
var state_36520__$1 = state_36520;
var statearr_36535_36555 = state_36520__$1;
(statearr_36535_36555[(2)] = fc);

(statearr_36535_36555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (8))){
var inst_36509 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
if(cljs.core.truth_(inst_36509)){
var statearr_36536_36556 = state_36520__$1;
(statearr_36536_36556[(1)] = (12));

} else {
var statearr_36537_36557 = state_36520__$1;
(statearr_36537_36557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___36543,tc,fc))
;
return ((function (switch__35998__auto__,c__36093__auto___36543,tc,fc){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_36538 = [null,null,null,null,null,null,null,null,null];
(statearr_36538[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_36538[(1)] = (1));

return statearr_36538;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_36520){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36539){if((e36539 instanceof Object)){
var ex__36002__auto__ = e36539;
var statearr_36540_36558 = state_36520;
(statearr_36540_36558[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36559 = state_36520;
state_36520 = G__36559;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_36520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_36520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___36543,tc,fc))
})();
var state__36095__auto__ = (function (){var statearr_36541 = f__36094__auto__.call(null);
(statearr_36541[(6)] = c__36093__auto___36543);

return statearr_36541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___36543,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__){
return (function (state_36580){
var state_val_36581 = (state_36580[(1)]);
if((state_val_36581 === (7))){
var inst_36576 = (state_36580[(2)]);
var state_36580__$1 = state_36580;
var statearr_36582_36600 = state_36580__$1;
(statearr_36582_36600[(2)] = inst_36576);

(statearr_36582_36600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36581 === (1))){
var inst_36560 = init;
var state_36580__$1 = (function (){var statearr_36583 = state_36580;
(statearr_36583[(7)] = inst_36560);

return statearr_36583;
})();
var statearr_36584_36601 = state_36580__$1;
(statearr_36584_36601[(2)] = null);

(statearr_36584_36601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36581 === (4))){
var inst_36563 = (state_36580[(8)]);
var inst_36563__$1 = (state_36580[(2)]);
var inst_36564 = (inst_36563__$1 == null);
var state_36580__$1 = (function (){var statearr_36585 = state_36580;
(statearr_36585[(8)] = inst_36563__$1);

return statearr_36585;
})();
if(cljs.core.truth_(inst_36564)){
var statearr_36586_36602 = state_36580__$1;
(statearr_36586_36602[(1)] = (5));

} else {
var statearr_36587_36603 = state_36580__$1;
(statearr_36587_36603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36581 === (6))){
var inst_36560 = (state_36580[(7)]);
var inst_36567 = (state_36580[(9)]);
var inst_36563 = (state_36580[(8)]);
var inst_36567__$1 = f.call(null,inst_36560,inst_36563);
var inst_36568 = cljs.core.reduced_QMARK_.call(null,inst_36567__$1);
var state_36580__$1 = (function (){var statearr_36588 = state_36580;
(statearr_36588[(9)] = inst_36567__$1);

return statearr_36588;
})();
if(inst_36568){
var statearr_36589_36604 = state_36580__$1;
(statearr_36589_36604[(1)] = (8));

} else {
var statearr_36590_36605 = state_36580__$1;
(statearr_36590_36605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36581 === (3))){
var inst_36578 = (state_36580[(2)]);
var state_36580__$1 = state_36580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36580__$1,inst_36578);
} else {
if((state_val_36581 === (2))){
var state_36580__$1 = state_36580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36580__$1,(4),ch);
} else {
if((state_val_36581 === (9))){
var inst_36567 = (state_36580[(9)]);
var inst_36560 = inst_36567;
var state_36580__$1 = (function (){var statearr_36591 = state_36580;
(statearr_36591[(7)] = inst_36560);

return statearr_36591;
})();
var statearr_36592_36606 = state_36580__$1;
(statearr_36592_36606[(2)] = null);

(statearr_36592_36606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36581 === (5))){
var inst_36560 = (state_36580[(7)]);
var state_36580__$1 = state_36580;
var statearr_36593_36607 = state_36580__$1;
(statearr_36593_36607[(2)] = inst_36560);

(statearr_36593_36607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36581 === (10))){
var inst_36574 = (state_36580[(2)]);
var state_36580__$1 = state_36580;
var statearr_36594_36608 = state_36580__$1;
(statearr_36594_36608[(2)] = inst_36574);

(statearr_36594_36608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36581 === (8))){
var inst_36567 = (state_36580[(9)]);
var inst_36570 = cljs.core.deref.call(null,inst_36567);
var state_36580__$1 = state_36580;
var statearr_36595_36609 = state_36580__$1;
(statearr_36595_36609[(2)] = inst_36570);

(statearr_36595_36609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35999__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35999__auto____0 = (function (){
var statearr_36596 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36596[(0)] = cljs$core$async$reduce_$_state_machine__35999__auto__);

(statearr_36596[(1)] = (1));

return statearr_36596;
});
var cljs$core$async$reduce_$_state_machine__35999__auto____1 = (function (state_36580){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36597){if((e36597 instanceof Object)){
var ex__36002__auto__ = e36597;
var statearr_36598_36610 = state_36580;
(statearr_36598_36610[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36611 = state_36580;
state_36580 = G__36611;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35999__auto__ = function(state_36580){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35999__auto____1.call(this,state_36580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35999__auto____0;
cljs$core$async$reduce_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35999__auto____1;
return cljs$core$async$reduce_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__))
})();
var state__36095__auto__ = (function (){var statearr_36599 = f__36094__auto__.call(null);
(statearr_36599[(6)] = c__36093__auto__);

return statearr_36599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__))
);

return c__36093__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__,f__$1){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__,f__$1){
return (function (state_36617){
var state_val_36618 = (state_36617[(1)]);
if((state_val_36618 === (1))){
var inst_36612 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36617__$1,(2),inst_36612);
} else {
if((state_val_36618 === (2))){
var inst_36614 = (state_36617[(2)]);
var inst_36615 = f__$1.call(null,inst_36614);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36617__$1,inst_36615);
} else {
return null;
}
}
});})(c__36093__auto__,f__$1))
;
return ((function (switch__35998__auto__,c__36093__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35999__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35999__auto____0 = (function (){
var statearr_36619 = [null,null,null,null,null,null,null];
(statearr_36619[(0)] = cljs$core$async$transduce_$_state_machine__35999__auto__);

(statearr_36619[(1)] = (1));

return statearr_36619;
});
var cljs$core$async$transduce_$_state_machine__35999__auto____1 = (function (state_36617){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36620){if((e36620 instanceof Object)){
var ex__36002__auto__ = e36620;
var statearr_36621_36623 = state_36617;
(statearr_36621_36623[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36624 = state_36617;
state_36617 = G__36624;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35999__auto__ = function(state_36617){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35999__auto____1.call(this,state_36617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35999__auto____0;
cljs$core$async$transduce_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35999__auto____1;
return cljs$core$async$transduce_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__,f__$1))
})();
var state__36095__auto__ = (function (){var statearr_36622 = f__36094__auto__.call(null);
(statearr_36622[(6)] = c__36093__auto__);

return statearr_36622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__,f__$1))
);

return c__36093__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36626 = arguments.length;
switch (G__36626) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__){
return (function (state_36651){
var state_val_36652 = (state_36651[(1)]);
if((state_val_36652 === (7))){
var inst_36633 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36653_36674 = state_36651__$1;
(statearr_36653_36674[(2)] = inst_36633);

(statearr_36653_36674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (1))){
var inst_36627 = cljs.core.seq.call(null,coll);
var inst_36628 = inst_36627;
var state_36651__$1 = (function (){var statearr_36654 = state_36651;
(statearr_36654[(7)] = inst_36628);

return statearr_36654;
})();
var statearr_36655_36675 = state_36651__$1;
(statearr_36655_36675[(2)] = null);

(statearr_36655_36675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (4))){
var inst_36628 = (state_36651[(7)]);
var inst_36631 = cljs.core.first.call(null,inst_36628);
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36651__$1,(7),ch,inst_36631);
} else {
if((state_val_36652 === (13))){
var inst_36645 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36656_36676 = state_36651__$1;
(statearr_36656_36676[(2)] = inst_36645);

(statearr_36656_36676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (6))){
var inst_36636 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
if(cljs.core.truth_(inst_36636)){
var statearr_36657_36677 = state_36651__$1;
(statearr_36657_36677[(1)] = (8));

} else {
var statearr_36658_36678 = state_36651__$1;
(statearr_36658_36678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (3))){
var inst_36649 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36651__$1,inst_36649);
} else {
if((state_val_36652 === (12))){
var state_36651__$1 = state_36651;
var statearr_36659_36679 = state_36651__$1;
(statearr_36659_36679[(2)] = null);

(statearr_36659_36679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (2))){
var inst_36628 = (state_36651[(7)]);
var state_36651__$1 = state_36651;
if(cljs.core.truth_(inst_36628)){
var statearr_36660_36680 = state_36651__$1;
(statearr_36660_36680[(1)] = (4));

} else {
var statearr_36661_36681 = state_36651__$1;
(statearr_36661_36681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (11))){
var inst_36642 = cljs.core.async.close_BANG_.call(null,ch);
var state_36651__$1 = state_36651;
var statearr_36662_36682 = state_36651__$1;
(statearr_36662_36682[(2)] = inst_36642);

(statearr_36662_36682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (9))){
var state_36651__$1 = state_36651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36663_36683 = state_36651__$1;
(statearr_36663_36683[(1)] = (11));

} else {
var statearr_36664_36684 = state_36651__$1;
(statearr_36664_36684[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (5))){
var inst_36628 = (state_36651[(7)]);
var state_36651__$1 = state_36651;
var statearr_36665_36685 = state_36651__$1;
(statearr_36665_36685[(2)] = inst_36628);

(statearr_36665_36685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (10))){
var inst_36647 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36666_36686 = state_36651__$1;
(statearr_36666_36686[(2)] = inst_36647);

(statearr_36666_36686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (8))){
var inst_36628 = (state_36651[(7)]);
var inst_36638 = cljs.core.next.call(null,inst_36628);
var inst_36628__$1 = inst_36638;
var state_36651__$1 = (function (){var statearr_36667 = state_36651;
(statearr_36667[(7)] = inst_36628__$1);

return statearr_36667;
})();
var statearr_36668_36687 = state_36651__$1;
(statearr_36668_36687[(2)] = null);

(statearr_36668_36687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_36669 = [null,null,null,null,null,null,null,null];
(statearr_36669[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_36669[(1)] = (1));

return statearr_36669;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_36651){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36670){if((e36670 instanceof Object)){
var ex__36002__auto__ = e36670;
var statearr_36671_36688 = state_36651;
(statearr_36671_36688[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36689 = state_36651;
state_36651 = G__36689;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_36651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_36651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__))
})();
var state__36095__auto__ = (function (){var statearr_36672 = f__36094__auto__.call(null);
(statearr_36672[(6)] = c__36093__auto__);

return statearr_36672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__))
);

return c__36093__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36690 = (function (ch,cs,meta36691){
this.ch = ch;
this.cs = cs;
this.meta36691 = meta36691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36692,meta36691__$1){
var self__ = this;
var _36692__$1 = this;
return (new cljs.core.async.t_cljs$core$async36690(self__.ch,self__.cs,meta36691__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36692){
var self__ = this;
var _36692__$1 = this;
return self__.meta36691;
});})(cs))
;

cljs.core.async.t_cljs$core$async36690.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36690.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36690.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36690.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36690.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36690.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36691","meta36691",-645624552,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36690";

cljs.core.async.t_cljs$core$async36690.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36690");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36690.
 */
cljs.core.async.__GT_t_cljs$core$async36690 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36690(ch__$1,cs__$1,meta36691){
return (new cljs.core.async.t_cljs$core$async36690(ch__$1,cs__$1,meta36691));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36690(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__36093__auto___36912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___36912,cs,m,dchan,dctr,done){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___36912,cs,m,dchan,dctr,done){
return (function (state_36827){
var state_val_36828 = (state_36827[(1)]);
if((state_val_36828 === (7))){
var inst_36823 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36829_36913 = state_36827__$1;
(statearr_36829_36913[(2)] = inst_36823);

(statearr_36829_36913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (20))){
var inst_36726 = (state_36827[(7)]);
var inst_36738 = cljs.core.first.call(null,inst_36726);
var inst_36739 = cljs.core.nth.call(null,inst_36738,(0),null);
var inst_36740 = cljs.core.nth.call(null,inst_36738,(1),null);
var state_36827__$1 = (function (){var statearr_36830 = state_36827;
(statearr_36830[(8)] = inst_36739);

return statearr_36830;
})();
if(cljs.core.truth_(inst_36740)){
var statearr_36831_36914 = state_36827__$1;
(statearr_36831_36914[(1)] = (22));

} else {
var statearr_36832_36915 = state_36827__$1;
(statearr_36832_36915[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (27))){
var inst_36768 = (state_36827[(9)]);
var inst_36770 = (state_36827[(10)]);
var inst_36775 = (state_36827[(11)]);
var inst_36695 = (state_36827[(12)]);
var inst_36775__$1 = cljs.core._nth.call(null,inst_36768,inst_36770);
var inst_36776 = cljs.core.async.put_BANG_.call(null,inst_36775__$1,inst_36695,done);
var state_36827__$1 = (function (){var statearr_36833 = state_36827;
(statearr_36833[(11)] = inst_36775__$1);

return statearr_36833;
})();
if(cljs.core.truth_(inst_36776)){
var statearr_36834_36916 = state_36827__$1;
(statearr_36834_36916[(1)] = (30));

} else {
var statearr_36835_36917 = state_36827__$1;
(statearr_36835_36917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (1))){
var state_36827__$1 = state_36827;
var statearr_36836_36918 = state_36827__$1;
(statearr_36836_36918[(2)] = null);

(statearr_36836_36918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (24))){
var inst_36726 = (state_36827[(7)]);
var inst_36745 = (state_36827[(2)]);
var inst_36746 = cljs.core.next.call(null,inst_36726);
var inst_36704 = inst_36746;
var inst_36705 = null;
var inst_36706 = (0);
var inst_36707 = (0);
var state_36827__$1 = (function (){var statearr_36837 = state_36827;
(statearr_36837[(13)] = inst_36745);

(statearr_36837[(14)] = inst_36705);

(statearr_36837[(15)] = inst_36704);

(statearr_36837[(16)] = inst_36707);

(statearr_36837[(17)] = inst_36706);

return statearr_36837;
})();
var statearr_36838_36919 = state_36827__$1;
(statearr_36838_36919[(2)] = null);

(statearr_36838_36919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (39))){
var state_36827__$1 = state_36827;
var statearr_36842_36920 = state_36827__$1;
(statearr_36842_36920[(2)] = null);

(statearr_36842_36920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (4))){
var inst_36695 = (state_36827[(12)]);
var inst_36695__$1 = (state_36827[(2)]);
var inst_36696 = (inst_36695__$1 == null);
var state_36827__$1 = (function (){var statearr_36843 = state_36827;
(statearr_36843[(12)] = inst_36695__$1);

return statearr_36843;
})();
if(cljs.core.truth_(inst_36696)){
var statearr_36844_36921 = state_36827__$1;
(statearr_36844_36921[(1)] = (5));

} else {
var statearr_36845_36922 = state_36827__$1;
(statearr_36845_36922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (15))){
var inst_36705 = (state_36827[(14)]);
var inst_36704 = (state_36827[(15)]);
var inst_36707 = (state_36827[(16)]);
var inst_36706 = (state_36827[(17)]);
var inst_36722 = (state_36827[(2)]);
var inst_36723 = (inst_36707 + (1));
var tmp36839 = inst_36705;
var tmp36840 = inst_36704;
var tmp36841 = inst_36706;
var inst_36704__$1 = tmp36840;
var inst_36705__$1 = tmp36839;
var inst_36706__$1 = tmp36841;
var inst_36707__$1 = inst_36723;
var state_36827__$1 = (function (){var statearr_36846 = state_36827;
(statearr_36846[(18)] = inst_36722);

(statearr_36846[(14)] = inst_36705__$1);

(statearr_36846[(15)] = inst_36704__$1);

(statearr_36846[(16)] = inst_36707__$1);

(statearr_36846[(17)] = inst_36706__$1);

return statearr_36846;
})();
var statearr_36847_36923 = state_36827__$1;
(statearr_36847_36923[(2)] = null);

(statearr_36847_36923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (21))){
var inst_36749 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36851_36924 = state_36827__$1;
(statearr_36851_36924[(2)] = inst_36749);

(statearr_36851_36924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (31))){
var inst_36775 = (state_36827[(11)]);
var inst_36779 = done.call(null,null);
var inst_36780 = cljs.core.async.untap_STAR_.call(null,m,inst_36775);
var state_36827__$1 = (function (){var statearr_36852 = state_36827;
(statearr_36852[(19)] = inst_36779);

return statearr_36852;
})();
var statearr_36853_36925 = state_36827__$1;
(statearr_36853_36925[(2)] = inst_36780);

(statearr_36853_36925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (32))){
var inst_36768 = (state_36827[(9)]);
var inst_36770 = (state_36827[(10)]);
var inst_36769 = (state_36827[(20)]);
var inst_36767 = (state_36827[(21)]);
var inst_36782 = (state_36827[(2)]);
var inst_36783 = (inst_36770 + (1));
var tmp36848 = inst_36768;
var tmp36849 = inst_36769;
var tmp36850 = inst_36767;
var inst_36767__$1 = tmp36850;
var inst_36768__$1 = tmp36848;
var inst_36769__$1 = tmp36849;
var inst_36770__$1 = inst_36783;
var state_36827__$1 = (function (){var statearr_36854 = state_36827;
(statearr_36854[(22)] = inst_36782);

(statearr_36854[(9)] = inst_36768__$1);

(statearr_36854[(10)] = inst_36770__$1);

(statearr_36854[(20)] = inst_36769__$1);

(statearr_36854[(21)] = inst_36767__$1);

return statearr_36854;
})();
var statearr_36855_36926 = state_36827__$1;
(statearr_36855_36926[(2)] = null);

(statearr_36855_36926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (40))){
var inst_36795 = (state_36827[(23)]);
var inst_36799 = done.call(null,null);
var inst_36800 = cljs.core.async.untap_STAR_.call(null,m,inst_36795);
var state_36827__$1 = (function (){var statearr_36856 = state_36827;
(statearr_36856[(24)] = inst_36799);

return statearr_36856;
})();
var statearr_36857_36927 = state_36827__$1;
(statearr_36857_36927[(2)] = inst_36800);

(statearr_36857_36927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (33))){
var inst_36786 = (state_36827[(25)]);
var inst_36788 = cljs.core.chunked_seq_QMARK_.call(null,inst_36786);
var state_36827__$1 = state_36827;
if(inst_36788){
var statearr_36858_36928 = state_36827__$1;
(statearr_36858_36928[(1)] = (36));

} else {
var statearr_36859_36929 = state_36827__$1;
(statearr_36859_36929[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (13))){
var inst_36716 = (state_36827[(26)]);
var inst_36719 = cljs.core.async.close_BANG_.call(null,inst_36716);
var state_36827__$1 = state_36827;
var statearr_36860_36930 = state_36827__$1;
(statearr_36860_36930[(2)] = inst_36719);

(statearr_36860_36930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (22))){
var inst_36739 = (state_36827[(8)]);
var inst_36742 = cljs.core.async.close_BANG_.call(null,inst_36739);
var state_36827__$1 = state_36827;
var statearr_36861_36931 = state_36827__$1;
(statearr_36861_36931[(2)] = inst_36742);

(statearr_36861_36931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (36))){
var inst_36786 = (state_36827[(25)]);
var inst_36790 = cljs.core.chunk_first.call(null,inst_36786);
var inst_36791 = cljs.core.chunk_rest.call(null,inst_36786);
var inst_36792 = cljs.core.count.call(null,inst_36790);
var inst_36767 = inst_36791;
var inst_36768 = inst_36790;
var inst_36769 = inst_36792;
var inst_36770 = (0);
var state_36827__$1 = (function (){var statearr_36862 = state_36827;
(statearr_36862[(9)] = inst_36768);

(statearr_36862[(10)] = inst_36770);

(statearr_36862[(20)] = inst_36769);

(statearr_36862[(21)] = inst_36767);

return statearr_36862;
})();
var statearr_36863_36932 = state_36827__$1;
(statearr_36863_36932[(2)] = null);

(statearr_36863_36932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (41))){
var inst_36786 = (state_36827[(25)]);
var inst_36802 = (state_36827[(2)]);
var inst_36803 = cljs.core.next.call(null,inst_36786);
var inst_36767 = inst_36803;
var inst_36768 = null;
var inst_36769 = (0);
var inst_36770 = (0);
var state_36827__$1 = (function (){var statearr_36864 = state_36827;
(statearr_36864[(27)] = inst_36802);

(statearr_36864[(9)] = inst_36768);

(statearr_36864[(10)] = inst_36770);

(statearr_36864[(20)] = inst_36769);

(statearr_36864[(21)] = inst_36767);

return statearr_36864;
})();
var statearr_36865_36933 = state_36827__$1;
(statearr_36865_36933[(2)] = null);

(statearr_36865_36933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (43))){
var state_36827__$1 = state_36827;
var statearr_36866_36934 = state_36827__$1;
(statearr_36866_36934[(2)] = null);

(statearr_36866_36934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (29))){
var inst_36811 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36867_36935 = state_36827__$1;
(statearr_36867_36935[(2)] = inst_36811);

(statearr_36867_36935[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (44))){
var inst_36820 = (state_36827[(2)]);
var state_36827__$1 = (function (){var statearr_36868 = state_36827;
(statearr_36868[(28)] = inst_36820);

return statearr_36868;
})();
var statearr_36869_36936 = state_36827__$1;
(statearr_36869_36936[(2)] = null);

(statearr_36869_36936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (6))){
var inst_36759 = (state_36827[(29)]);
var inst_36758 = cljs.core.deref.call(null,cs);
var inst_36759__$1 = cljs.core.keys.call(null,inst_36758);
var inst_36760 = cljs.core.count.call(null,inst_36759__$1);
var inst_36761 = cljs.core.reset_BANG_.call(null,dctr,inst_36760);
var inst_36766 = cljs.core.seq.call(null,inst_36759__$1);
var inst_36767 = inst_36766;
var inst_36768 = null;
var inst_36769 = (0);
var inst_36770 = (0);
var state_36827__$1 = (function (){var statearr_36870 = state_36827;
(statearr_36870[(29)] = inst_36759__$1);

(statearr_36870[(9)] = inst_36768);

(statearr_36870[(10)] = inst_36770);

(statearr_36870[(30)] = inst_36761);

(statearr_36870[(20)] = inst_36769);

(statearr_36870[(21)] = inst_36767);

return statearr_36870;
})();
var statearr_36871_36937 = state_36827__$1;
(statearr_36871_36937[(2)] = null);

(statearr_36871_36937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (28))){
var inst_36786 = (state_36827[(25)]);
var inst_36767 = (state_36827[(21)]);
var inst_36786__$1 = cljs.core.seq.call(null,inst_36767);
var state_36827__$1 = (function (){var statearr_36872 = state_36827;
(statearr_36872[(25)] = inst_36786__$1);

return statearr_36872;
})();
if(inst_36786__$1){
var statearr_36873_36938 = state_36827__$1;
(statearr_36873_36938[(1)] = (33));

} else {
var statearr_36874_36939 = state_36827__$1;
(statearr_36874_36939[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (25))){
var inst_36770 = (state_36827[(10)]);
var inst_36769 = (state_36827[(20)]);
var inst_36772 = (inst_36770 < inst_36769);
var inst_36773 = inst_36772;
var state_36827__$1 = state_36827;
if(cljs.core.truth_(inst_36773)){
var statearr_36875_36940 = state_36827__$1;
(statearr_36875_36940[(1)] = (27));

} else {
var statearr_36876_36941 = state_36827__$1;
(statearr_36876_36941[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (34))){
var state_36827__$1 = state_36827;
var statearr_36877_36942 = state_36827__$1;
(statearr_36877_36942[(2)] = null);

(statearr_36877_36942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (17))){
var state_36827__$1 = state_36827;
var statearr_36878_36943 = state_36827__$1;
(statearr_36878_36943[(2)] = null);

(statearr_36878_36943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (3))){
var inst_36825 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36827__$1,inst_36825);
} else {
if((state_val_36828 === (12))){
var inst_36754 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36879_36944 = state_36827__$1;
(statearr_36879_36944[(2)] = inst_36754);

(statearr_36879_36944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (2))){
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36827__$1,(4),ch);
} else {
if((state_val_36828 === (23))){
var state_36827__$1 = state_36827;
var statearr_36880_36945 = state_36827__$1;
(statearr_36880_36945[(2)] = null);

(statearr_36880_36945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (35))){
var inst_36809 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36881_36946 = state_36827__$1;
(statearr_36881_36946[(2)] = inst_36809);

(statearr_36881_36946[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (19))){
var inst_36726 = (state_36827[(7)]);
var inst_36730 = cljs.core.chunk_first.call(null,inst_36726);
var inst_36731 = cljs.core.chunk_rest.call(null,inst_36726);
var inst_36732 = cljs.core.count.call(null,inst_36730);
var inst_36704 = inst_36731;
var inst_36705 = inst_36730;
var inst_36706 = inst_36732;
var inst_36707 = (0);
var state_36827__$1 = (function (){var statearr_36882 = state_36827;
(statearr_36882[(14)] = inst_36705);

(statearr_36882[(15)] = inst_36704);

(statearr_36882[(16)] = inst_36707);

(statearr_36882[(17)] = inst_36706);

return statearr_36882;
})();
var statearr_36883_36947 = state_36827__$1;
(statearr_36883_36947[(2)] = null);

(statearr_36883_36947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (11))){
var inst_36726 = (state_36827[(7)]);
var inst_36704 = (state_36827[(15)]);
var inst_36726__$1 = cljs.core.seq.call(null,inst_36704);
var state_36827__$1 = (function (){var statearr_36884 = state_36827;
(statearr_36884[(7)] = inst_36726__$1);

return statearr_36884;
})();
if(inst_36726__$1){
var statearr_36885_36948 = state_36827__$1;
(statearr_36885_36948[(1)] = (16));

} else {
var statearr_36886_36949 = state_36827__$1;
(statearr_36886_36949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (9))){
var inst_36756 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36887_36950 = state_36827__$1;
(statearr_36887_36950[(2)] = inst_36756);

(statearr_36887_36950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (5))){
var inst_36702 = cljs.core.deref.call(null,cs);
var inst_36703 = cljs.core.seq.call(null,inst_36702);
var inst_36704 = inst_36703;
var inst_36705 = null;
var inst_36706 = (0);
var inst_36707 = (0);
var state_36827__$1 = (function (){var statearr_36888 = state_36827;
(statearr_36888[(14)] = inst_36705);

(statearr_36888[(15)] = inst_36704);

(statearr_36888[(16)] = inst_36707);

(statearr_36888[(17)] = inst_36706);

return statearr_36888;
})();
var statearr_36889_36951 = state_36827__$1;
(statearr_36889_36951[(2)] = null);

(statearr_36889_36951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (14))){
var state_36827__$1 = state_36827;
var statearr_36890_36952 = state_36827__$1;
(statearr_36890_36952[(2)] = null);

(statearr_36890_36952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (45))){
var inst_36817 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36891_36953 = state_36827__$1;
(statearr_36891_36953[(2)] = inst_36817);

(statearr_36891_36953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (26))){
var inst_36759 = (state_36827[(29)]);
var inst_36813 = (state_36827[(2)]);
var inst_36814 = cljs.core.seq.call(null,inst_36759);
var state_36827__$1 = (function (){var statearr_36892 = state_36827;
(statearr_36892[(31)] = inst_36813);

return statearr_36892;
})();
if(inst_36814){
var statearr_36893_36954 = state_36827__$1;
(statearr_36893_36954[(1)] = (42));

} else {
var statearr_36894_36955 = state_36827__$1;
(statearr_36894_36955[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (16))){
var inst_36726 = (state_36827[(7)]);
var inst_36728 = cljs.core.chunked_seq_QMARK_.call(null,inst_36726);
var state_36827__$1 = state_36827;
if(inst_36728){
var statearr_36895_36956 = state_36827__$1;
(statearr_36895_36956[(1)] = (19));

} else {
var statearr_36896_36957 = state_36827__$1;
(statearr_36896_36957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (38))){
var inst_36806 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36897_36958 = state_36827__$1;
(statearr_36897_36958[(2)] = inst_36806);

(statearr_36897_36958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (30))){
var state_36827__$1 = state_36827;
var statearr_36898_36959 = state_36827__$1;
(statearr_36898_36959[(2)] = null);

(statearr_36898_36959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (10))){
var inst_36705 = (state_36827[(14)]);
var inst_36707 = (state_36827[(16)]);
var inst_36715 = cljs.core._nth.call(null,inst_36705,inst_36707);
var inst_36716 = cljs.core.nth.call(null,inst_36715,(0),null);
var inst_36717 = cljs.core.nth.call(null,inst_36715,(1),null);
var state_36827__$1 = (function (){var statearr_36899 = state_36827;
(statearr_36899[(26)] = inst_36716);

return statearr_36899;
})();
if(cljs.core.truth_(inst_36717)){
var statearr_36900_36960 = state_36827__$1;
(statearr_36900_36960[(1)] = (13));

} else {
var statearr_36901_36961 = state_36827__$1;
(statearr_36901_36961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (18))){
var inst_36752 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36902_36962 = state_36827__$1;
(statearr_36902_36962[(2)] = inst_36752);

(statearr_36902_36962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (42))){
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36827__$1,(45),dchan);
} else {
if((state_val_36828 === (37))){
var inst_36786 = (state_36827[(25)]);
var inst_36795 = (state_36827[(23)]);
var inst_36695 = (state_36827[(12)]);
var inst_36795__$1 = cljs.core.first.call(null,inst_36786);
var inst_36796 = cljs.core.async.put_BANG_.call(null,inst_36795__$1,inst_36695,done);
var state_36827__$1 = (function (){var statearr_36903 = state_36827;
(statearr_36903[(23)] = inst_36795__$1);

return statearr_36903;
})();
if(cljs.core.truth_(inst_36796)){
var statearr_36904_36963 = state_36827__$1;
(statearr_36904_36963[(1)] = (39));

} else {
var statearr_36905_36964 = state_36827__$1;
(statearr_36905_36964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (8))){
var inst_36707 = (state_36827[(16)]);
var inst_36706 = (state_36827[(17)]);
var inst_36709 = (inst_36707 < inst_36706);
var inst_36710 = inst_36709;
var state_36827__$1 = state_36827;
if(cljs.core.truth_(inst_36710)){
var statearr_36906_36965 = state_36827__$1;
(statearr_36906_36965[(1)] = (10));

} else {
var statearr_36907_36966 = state_36827__$1;
(statearr_36907_36966[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___36912,cs,m,dchan,dctr,done))
;
return ((function (switch__35998__auto__,c__36093__auto___36912,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35999__auto__ = null;
var cljs$core$async$mult_$_state_machine__35999__auto____0 = (function (){
var statearr_36908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36908[(0)] = cljs$core$async$mult_$_state_machine__35999__auto__);

(statearr_36908[(1)] = (1));

return statearr_36908;
});
var cljs$core$async$mult_$_state_machine__35999__auto____1 = (function (state_36827){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_36827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e36909){if((e36909 instanceof Object)){
var ex__36002__auto__ = e36909;
var statearr_36910_36967 = state_36827;
(statearr_36910_36967[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_36827;
state_36827 = G__36968;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35999__auto__ = function(state_36827){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35999__auto____1.call(this,state_36827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35999__auto____0;
cljs$core$async$mult_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35999__auto____1;
return cljs$core$async$mult_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___36912,cs,m,dchan,dctr,done))
})();
var state__36095__auto__ = (function (){var statearr_36911 = f__36094__auto__.call(null);
(statearr_36911[(6)] = c__36093__auto___36912);

return statearr_36911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___36912,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36970 = arguments.length;
switch (G__36970) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36982 = arguments.length;
var i__4642__auto___36983 = (0);
while(true){
if((i__4642__auto___36983 < len__4641__auto___36982)){
args__4647__auto__.push((arguments[i__4642__auto___36983]));

var G__36984 = (i__4642__auto___36983 + (1));
i__4642__auto___36983 = G__36984;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36976){
var map__36977 = p__36976;
var map__36977__$1 = (((((!((map__36977 == null))))?(((((map__36977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36977):map__36977);
var opts = map__36977__$1;
var statearr_36979_36985 = state;
(statearr_36979_36985[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__36977,map__36977__$1,opts){
return (function (val){
var statearr_36980_36986 = state;
(statearr_36980_36986[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36977,map__36977__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_36981_36987 = state;
(statearr_36981_36987[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36972){
var G__36973 = cljs.core.first.call(null,seq36972);
var seq36972__$1 = cljs.core.next.call(null,seq36972);
var G__36974 = cljs.core.first.call(null,seq36972__$1);
var seq36972__$2 = cljs.core.next.call(null,seq36972__$1);
var G__36975 = cljs.core.first.call(null,seq36972__$2);
var seq36972__$3 = cljs.core.next.call(null,seq36972__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36973,G__36974,G__36975,seq36972__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36988 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36989){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36989 = meta36989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36990,meta36989__$1){
var self__ = this;
var _36990__$1 = this;
return (new cljs.core.async.t_cljs$core$async36988(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36989__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36990){
var self__ = this;
var _36990__$1 = this;
return self__.meta36989;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36989","meta36989",1554899401,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36988";

cljs.core.async.t_cljs$core$async36988.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36988");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36988.
 */
cljs.core.async.__GT_t_cljs$core$async36988 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36988(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36989){
return (new cljs.core.async.t_cljs$core$async36988(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36989));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36988(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36093__auto___37152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37092){
var state_val_37093 = (state_37092[(1)]);
if((state_val_37093 === (7))){
var inst_37007 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37094_37153 = state_37092__$1;
(statearr_37094_37153[(2)] = inst_37007);

(statearr_37094_37153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (20))){
var inst_37019 = (state_37092[(7)]);
var state_37092__$1 = state_37092;
var statearr_37095_37154 = state_37092__$1;
(statearr_37095_37154[(2)] = inst_37019);

(statearr_37095_37154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (27))){
var state_37092__$1 = state_37092;
var statearr_37096_37155 = state_37092__$1;
(statearr_37096_37155[(2)] = null);

(statearr_37096_37155[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (1))){
var inst_36994 = (state_37092[(8)]);
var inst_36994__$1 = calc_state.call(null);
var inst_36996 = (inst_36994__$1 == null);
var inst_36997 = cljs.core.not.call(null,inst_36996);
var state_37092__$1 = (function (){var statearr_37097 = state_37092;
(statearr_37097[(8)] = inst_36994__$1);

return statearr_37097;
})();
if(inst_36997){
var statearr_37098_37156 = state_37092__$1;
(statearr_37098_37156[(1)] = (2));

} else {
var statearr_37099_37157 = state_37092__$1;
(statearr_37099_37157[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (24))){
var inst_37052 = (state_37092[(9)]);
var inst_37043 = (state_37092[(10)]);
var inst_37066 = (state_37092[(11)]);
var inst_37066__$1 = inst_37043.call(null,inst_37052);
var state_37092__$1 = (function (){var statearr_37100 = state_37092;
(statearr_37100[(11)] = inst_37066__$1);

return statearr_37100;
})();
if(cljs.core.truth_(inst_37066__$1)){
var statearr_37101_37158 = state_37092__$1;
(statearr_37101_37158[(1)] = (29));

} else {
var statearr_37102_37159 = state_37092__$1;
(statearr_37102_37159[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (4))){
var inst_37010 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37010)){
var statearr_37103_37160 = state_37092__$1;
(statearr_37103_37160[(1)] = (8));

} else {
var statearr_37104_37161 = state_37092__$1;
(statearr_37104_37161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (15))){
var inst_37037 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37037)){
var statearr_37105_37162 = state_37092__$1;
(statearr_37105_37162[(1)] = (19));

} else {
var statearr_37106_37163 = state_37092__$1;
(statearr_37106_37163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (21))){
var inst_37042 = (state_37092[(12)]);
var inst_37042__$1 = (state_37092[(2)]);
var inst_37043 = cljs.core.get.call(null,inst_37042__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37044 = cljs.core.get.call(null,inst_37042__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37045 = cljs.core.get.call(null,inst_37042__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37092__$1 = (function (){var statearr_37107 = state_37092;
(statearr_37107[(12)] = inst_37042__$1);

(statearr_37107[(13)] = inst_37044);

(statearr_37107[(10)] = inst_37043);

return statearr_37107;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37092__$1,(22),inst_37045);
} else {
if((state_val_37093 === (31))){
var inst_37074 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37074)){
var statearr_37108_37164 = state_37092__$1;
(statearr_37108_37164[(1)] = (32));

} else {
var statearr_37109_37165 = state_37092__$1;
(statearr_37109_37165[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (32))){
var inst_37051 = (state_37092[(14)]);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37092__$1,(35),out,inst_37051);
} else {
if((state_val_37093 === (33))){
var inst_37042 = (state_37092[(12)]);
var inst_37019 = inst_37042;
var state_37092__$1 = (function (){var statearr_37110 = state_37092;
(statearr_37110[(7)] = inst_37019);

return statearr_37110;
})();
var statearr_37111_37166 = state_37092__$1;
(statearr_37111_37166[(2)] = null);

(statearr_37111_37166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (13))){
var inst_37019 = (state_37092[(7)]);
var inst_37026 = inst_37019.cljs$lang$protocol_mask$partition0$;
var inst_37027 = (inst_37026 & (64));
var inst_37028 = inst_37019.cljs$core$ISeq$;
var inst_37029 = (cljs.core.PROTOCOL_SENTINEL === inst_37028);
var inst_37030 = ((inst_37027) || (inst_37029));
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37030)){
var statearr_37112_37167 = state_37092__$1;
(statearr_37112_37167[(1)] = (16));

} else {
var statearr_37113_37168 = state_37092__$1;
(statearr_37113_37168[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (22))){
var inst_37052 = (state_37092[(9)]);
var inst_37051 = (state_37092[(14)]);
var inst_37050 = (state_37092[(2)]);
var inst_37051__$1 = cljs.core.nth.call(null,inst_37050,(0),null);
var inst_37052__$1 = cljs.core.nth.call(null,inst_37050,(1),null);
var inst_37053 = (inst_37051__$1 == null);
var inst_37054 = cljs.core._EQ_.call(null,inst_37052__$1,change);
var inst_37055 = ((inst_37053) || (inst_37054));
var state_37092__$1 = (function (){var statearr_37114 = state_37092;
(statearr_37114[(9)] = inst_37052__$1);

(statearr_37114[(14)] = inst_37051__$1);

return statearr_37114;
})();
if(cljs.core.truth_(inst_37055)){
var statearr_37115_37169 = state_37092__$1;
(statearr_37115_37169[(1)] = (23));

} else {
var statearr_37116_37170 = state_37092__$1;
(statearr_37116_37170[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (36))){
var inst_37042 = (state_37092[(12)]);
var inst_37019 = inst_37042;
var state_37092__$1 = (function (){var statearr_37117 = state_37092;
(statearr_37117[(7)] = inst_37019);

return statearr_37117;
})();
var statearr_37118_37171 = state_37092__$1;
(statearr_37118_37171[(2)] = null);

(statearr_37118_37171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (29))){
var inst_37066 = (state_37092[(11)]);
var state_37092__$1 = state_37092;
var statearr_37119_37172 = state_37092__$1;
(statearr_37119_37172[(2)] = inst_37066);

(statearr_37119_37172[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (6))){
var state_37092__$1 = state_37092;
var statearr_37120_37173 = state_37092__$1;
(statearr_37120_37173[(2)] = false);

(statearr_37120_37173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (28))){
var inst_37062 = (state_37092[(2)]);
var inst_37063 = calc_state.call(null);
var inst_37019 = inst_37063;
var state_37092__$1 = (function (){var statearr_37121 = state_37092;
(statearr_37121[(15)] = inst_37062);

(statearr_37121[(7)] = inst_37019);

return statearr_37121;
})();
var statearr_37122_37174 = state_37092__$1;
(statearr_37122_37174[(2)] = null);

(statearr_37122_37174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (25))){
var inst_37088 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37123_37175 = state_37092__$1;
(statearr_37123_37175[(2)] = inst_37088);

(statearr_37123_37175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (34))){
var inst_37086 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37124_37176 = state_37092__$1;
(statearr_37124_37176[(2)] = inst_37086);

(statearr_37124_37176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (17))){
var state_37092__$1 = state_37092;
var statearr_37125_37177 = state_37092__$1;
(statearr_37125_37177[(2)] = false);

(statearr_37125_37177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (3))){
var state_37092__$1 = state_37092;
var statearr_37126_37178 = state_37092__$1;
(statearr_37126_37178[(2)] = false);

(statearr_37126_37178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (12))){
var inst_37090 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37092__$1,inst_37090);
} else {
if((state_val_37093 === (2))){
var inst_36994 = (state_37092[(8)]);
var inst_36999 = inst_36994.cljs$lang$protocol_mask$partition0$;
var inst_37000 = (inst_36999 & (64));
var inst_37001 = inst_36994.cljs$core$ISeq$;
var inst_37002 = (cljs.core.PROTOCOL_SENTINEL === inst_37001);
var inst_37003 = ((inst_37000) || (inst_37002));
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37003)){
var statearr_37127_37179 = state_37092__$1;
(statearr_37127_37179[(1)] = (5));

} else {
var statearr_37128_37180 = state_37092__$1;
(statearr_37128_37180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (23))){
var inst_37051 = (state_37092[(14)]);
var inst_37057 = (inst_37051 == null);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37057)){
var statearr_37129_37181 = state_37092__$1;
(statearr_37129_37181[(1)] = (26));

} else {
var statearr_37130_37182 = state_37092__$1;
(statearr_37130_37182[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (35))){
var inst_37077 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37077)){
var statearr_37131_37183 = state_37092__$1;
(statearr_37131_37183[(1)] = (36));

} else {
var statearr_37132_37184 = state_37092__$1;
(statearr_37132_37184[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (19))){
var inst_37019 = (state_37092[(7)]);
var inst_37039 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37019);
var state_37092__$1 = state_37092;
var statearr_37133_37185 = state_37092__$1;
(statearr_37133_37185[(2)] = inst_37039);

(statearr_37133_37185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (11))){
var inst_37019 = (state_37092[(7)]);
var inst_37023 = (inst_37019 == null);
var inst_37024 = cljs.core.not.call(null,inst_37023);
var state_37092__$1 = state_37092;
if(inst_37024){
var statearr_37134_37186 = state_37092__$1;
(statearr_37134_37186[(1)] = (13));

} else {
var statearr_37135_37187 = state_37092__$1;
(statearr_37135_37187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (9))){
var inst_36994 = (state_37092[(8)]);
var state_37092__$1 = state_37092;
var statearr_37136_37188 = state_37092__$1;
(statearr_37136_37188[(2)] = inst_36994);

(statearr_37136_37188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (5))){
var state_37092__$1 = state_37092;
var statearr_37137_37189 = state_37092__$1;
(statearr_37137_37189[(2)] = true);

(statearr_37137_37189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (14))){
var state_37092__$1 = state_37092;
var statearr_37138_37190 = state_37092__$1;
(statearr_37138_37190[(2)] = false);

(statearr_37138_37190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (26))){
var inst_37052 = (state_37092[(9)]);
var inst_37059 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37052);
var state_37092__$1 = state_37092;
var statearr_37139_37191 = state_37092__$1;
(statearr_37139_37191[(2)] = inst_37059);

(statearr_37139_37191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (16))){
var state_37092__$1 = state_37092;
var statearr_37140_37192 = state_37092__$1;
(statearr_37140_37192[(2)] = true);

(statearr_37140_37192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (38))){
var inst_37082 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37141_37193 = state_37092__$1;
(statearr_37141_37193[(2)] = inst_37082);

(statearr_37141_37193[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (30))){
var inst_37052 = (state_37092[(9)]);
var inst_37044 = (state_37092[(13)]);
var inst_37043 = (state_37092[(10)]);
var inst_37069 = cljs.core.empty_QMARK_.call(null,inst_37043);
var inst_37070 = inst_37044.call(null,inst_37052);
var inst_37071 = cljs.core.not.call(null,inst_37070);
var inst_37072 = ((inst_37069) && (inst_37071));
var state_37092__$1 = state_37092;
var statearr_37142_37194 = state_37092__$1;
(statearr_37142_37194[(2)] = inst_37072);

(statearr_37142_37194[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (10))){
var inst_36994 = (state_37092[(8)]);
var inst_37015 = (state_37092[(2)]);
var inst_37016 = cljs.core.get.call(null,inst_37015,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37017 = cljs.core.get.call(null,inst_37015,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37018 = cljs.core.get.call(null,inst_37015,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37019 = inst_36994;
var state_37092__$1 = (function (){var statearr_37143 = state_37092;
(statearr_37143[(16)] = inst_37017);

(statearr_37143[(17)] = inst_37016);

(statearr_37143[(7)] = inst_37019);

(statearr_37143[(18)] = inst_37018);

return statearr_37143;
})();
var statearr_37144_37195 = state_37092__$1;
(statearr_37144_37195[(2)] = null);

(statearr_37144_37195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (18))){
var inst_37034 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37145_37196 = state_37092__$1;
(statearr_37145_37196[(2)] = inst_37034);

(statearr_37145_37196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (37))){
var state_37092__$1 = state_37092;
var statearr_37146_37197 = state_37092__$1;
(statearr_37146_37197[(2)] = null);

(statearr_37146_37197[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (8))){
var inst_36994 = (state_37092[(8)]);
var inst_37012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36994);
var state_37092__$1 = state_37092;
var statearr_37147_37198 = state_37092__$1;
(statearr_37147_37198[(2)] = inst_37012);

(statearr_37147_37198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35998__auto__,c__36093__auto___37152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35999__auto__ = null;
var cljs$core$async$mix_$_state_machine__35999__auto____0 = (function (){
var statearr_37148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37148[(0)] = cljs$core$async$mix_$_state_machine__35999__auto__);

(statearr_37148[(1)] = (1));

return statearr_37148;
});
var cljs$core$async$mix_$_state_machine__35999__auto____1 = (function (state_37092){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37149){if((e37149 instanceof Object)){
var ex__36002__auto__ = e37149;
var statearr_37150_37199 = state_37092;
(statearr_37150_37199[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37200 = state_37092;
state_37092 = G__37200;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35999__auto__ = function(state_37092){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35999__auto____1.call(this,state_37092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35999__auto____0;
cljs$core$async$mix_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35999__auto____1;
return cljs$core$async$mix_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36095__auto__ = (function (){var statearr_37151 = f__36094__auto__.call(null);
(statearr_37151[(6)] = c__36093__auto___37152);

return statearr_37151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37202 = arguments.length;
switch (G__37202) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37206 = arguments.length;
switch (G__37206) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__37204_SHARP_){
if(cljs.core.truth_(p1__37204_SHARP_.call(null,topic))){
return p1__37204_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37204_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37207 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37208){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37208 = meta37208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37209,meta37208__$1){
var self__ = this;
var _37209__$1 = this;
return (new cljs.core.async.t_cljs$core$async37207(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37208__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37209){
var self__ = this;
var _37209__$1 = this;
return self__.meta37208;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37207.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37207.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37208","meta37208",905720895,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37207";

cljs.core.async.t_cljs$core$async37207.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37207");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37207.
 */
cljs.core.async.__GT_t_cljs$core$async37207 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37207(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37208){
return (new cljs.core.async.t_cljs$core$async37207(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37208));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37207(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36093__auto___37327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37327,mults,ensure_mult,p){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37327,mults,ensure_mult,p){
return (function (state_37281){
var state_val_37282 = (state_37281[(1)]);
if((state_val_37282 === (7))){
var inst_37277 = (state_37281[(2)]);
var state_37281__$1 = state_37281;
var statearr_37283_37328 = state_37281__$1;
(statearr_37283_37328[(2)] = inst_37277);

(statearr_37283_37328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (20))){
var state_37281__$1 = state_37281;
var statearr_37284_37329 = state_37281__$1;
(statearr_37284_37329[(2)] = null);

(statearr_37284_37329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (1))){
var state_37281__$1 = state_37281;
var statearr_37285_37330 = state_37281__$1;
(statearr_37285_37330[(2)] = null);

(statearr_37285_37330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (24))){
var inst_37260 = (state_37281[(7)]);
var inst_37269 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37260);
var state_37281__$1 = state_37281;
var statearr_37286_37331 = state_37281__$1;
(statearr_37286_37331[(2)] = inst_37269);

(statearr_37286_37331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (4))){
var inst_37212 = (state_37281[(8)]);
var inst_37212__$1 = (state_37281[(2)]);
var inst_37213 = (inst_37212__$1 == null);
var state_37281__$1 = (function (){var statearr_37287 = state_37281;
(statearr_37287[(8)] = inst_37212__$1);

return statearr_37287;
})();
if(cljs.core.truth_(inst_37213)){
var statearr_37288_37332 = state_37281__$1;
(statearr_37288_37332[(1)] = (5));

} else {
var statearr_37289_37333 = state_37281__$1;
(statearr_37289_37333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (15))){
var inst_37254 = (state_37281[(2)]);
var state_37281__$1 = state_37281;
var statearr_37290_37334 = state_37281__$1;
(statearr_37290_37334[(2)] = inst_37254);

(statearr_37290_37334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (21))){
var inst_37274 = (state_37281[(2)]);
var state_37281__$1 = (function (){var statearr_37291 = state_37281;
(statearr_37291[(9)] = inst_37274);

return statearr_37291;
})();
var statearr_37292_37335 = state_37281__$1;
(statearr_37292_37335[(2)] = null);

(statearr_37292_37335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (13))){
var inst_37236 = (state_37281[(10)]);
var inst_37238 = cljs.core.chunked_seq_QMARK_.call(null,inst_37236);
var state_37281__$1 = state_37281;
if(inst_37238){
var statearr_37293_37336 = state_37281__$1;
(statearr_37293_37336[(1)] = (16));

} else {
var statearr_37294_37337 = state_37281__$1;
(statearr_37294_37337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (22))){
var inst_37266 = (state_37281[(2)]);
var state_37281__$1 = state_37281;
if(cljs.core.truth_(inst_37266)){
var statearr_37295_37338 = state_37281__$1;
(statearr_37295_37338[(1)] = (23));

} else {
var statearr_37296_37339 = state_37281__$1;
(statearr_37296_37339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (6))){
var inst_37262 = (state_37281[(11)]);
var inst_37212 = (state_37281[(8)]);
var inst_37260 = (state_37281[(7)]);
var inst_37260__$1 = topic_fn.call(null,inst_37212);
var inst_37261 = cljs.core.deref.call(null,mults);
var inst_37262__$1 = cljs.core.get.call(null,inst_37261,inst_37260__$1);
var state_37281__$1 = (function (){var statearr_37297 = state_37281;
(statearr_37297[(11)] = inst_37262__$1);

(statearr_37297[(7)] = inst_37260__$1);

return statearr_37297;
})();
if(cljs.core.truth_(inst_37262__$1)){
var statearr_37298_37340 = state_37281__$1;
(statearr_37298_37340[(1)] = (19));

} else {
var statearr_37299_37341 = state_37281__$1;
(statearr_37299_37341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (25))){
var inst_37271 = (state_37281[(2)]);
var state_37281__$1 = state_37281;
var statearr_37300_37342 = state_37281__$1;
(statearr_37300_37342[(2)] = inst_37271);

(statearr_37300_37342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (17))){
var inst_37236 = (state_37281[(10)]);
var inst_37245 = cljs.core.first.call(null,inst_37236);
var inst_37246 = cljs.core.async.muxch_STAR_.call(null,inst_37245);
var inst_37247 = cljs.core.async.close_BANG_.call(null,inst_37246);
var inst_37248 = cljs.core.next.call(null,inst_37236);
var inst_37222 = inst_37248;
var inst_37223 = null;
var inst_37224 = (0);
var inst_37225 = (0);
var state_37281__$1 = (function (){var statearr_37301 = state_37281;
(statearr_37301[(12)] = inst_37223);

(statearr_37301[(13)] = inst_37247);

(statearr_37301[(14)] = inst_37222);

(statearr_37301[(15)] = inst_37224);

(statearr_37301[(16)] = inst_37225);

return statearr_37301;
})();
var statearr_37302_37343 = state_37281__$1;
(statearr_37302_37343[(2)] = null);

(statearr_37302_37343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (3))){
var inst_37279 = (state_37281[(2)]);
var state_37281__$1 = state_37281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37281__$1,inst_37279);
} else {
if((state_val_37282 === (12))){
var inst_37256 = (state_37281[(2)]);
var state_37281__$1 = state_37281;
var statearr_37303_37344 = state_37281__$1;
(statearr_37303_37344[(2)] = inst_37256);

(statearr_37303_37344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (2))){
var state_37281__$1 = state_37281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37281__$1,(4),ch);
} else {
if((state_val_37282 === (23))){
var state_37281__$1 = state_37281;
var statearr_37304_37345 = state_37281__$1;
(statearr_37304_37345[(2)] = null);

(statearr_37304_37345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (19))){
var inst_37262 = (state_37281[(11)]);
var inst_37212 = (state_37281[(8)]);
var inst_37264 = cljs.core.async.muxch_STAR_.call(null,inst_37262);
var state_37281__$1 = state_37281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37281__$1,(22),inst_37264,inst_37212);
} else {
if((state_val_37282 === (11))){
var inst_37222 = (state_37281[(14)]);
var inst_37236 = (state_37281[(10)]);
var inst_37236__$1 = cljs.core.seq.call(null,inst_37222);
var state_37281__$1 = (function (){var statearr_37305 = state_37281;
(statearr_37305[(10)] = inst_37236__$1);

return statearr_37305;
})();
if(inst_37236__$1){
var statearr_37306_37346 = state_37281__$1;
(statearr_37306_37346[(1)] = (13));

} else {
var statearr_37307_37347 = state_37281__$1;
(statearr_37307_37347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (9))){
var inst_37258 = (state_37281[(2)]);
var state_37281__$1 = state_37281;
var statearr_37308_37348 = state_37281__$1;
(statearr_37308_37348[(2)] = inst_37258);

(statearr_37308_37348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (5))){
var inst_37219 = cljs.core.deref.call(null,mults);
var inst_37220 = cljs.core.vals.call(null,inst_37219);
var inst_37221 = cljs.core.seq.call(null,inst_37220);
var inst_37222 = inst_37221;
var inst_37223 = null;
var inst_37224 = (0);
var inst_37225 = (0);
var state_37281__$1 = (function (){var statearr_37309 = state_37281;
(statearr_37309[(12)] = inst_37223);

(statearr_37309[(14)] = inst_37222);

(statearr_37309[(15)] = inst_37224);

(statearr_37309[(16)] = inst_37225);

return statearr_37309;
})();
var statearr_37310_37349 = state_37281__$1;
(statearr_37310_37349[(2)] = null);

(statearr_37310_37349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (14))){
var state_37281__$1 = state_37281;
var statearr_37314_37350 = state_37281__$1;
(statearr_37314_37350[(2)] = null);

(statearr_37314_37350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (16))){
var inst_37236 = (state_37281[(10)]);
var inst_37240 = cljs.core.chunk_first.call(null,inst_37236);
var inst_37241 = cljs.core.chunk_rest.call(null,inst_37236);
var inst_37242 = cljs.core.count.call(null,inst_37240);
var inst_37222 = inst_37241;
var inst_37223 = inst_37240;
var inst_37224 = inst_37242;
var inst_37225 = (0);
var state_37281__$1 = (function (){var statearr_37315 = state_37281;
(statearr_37315[(12)] = inst_37223);

(statearr_37315[(14)] = inst_37222);

(statearr_37315[(15)] = inst_37224);

(statearr_37315[(16)] = inst_37225);

return statearr_37315;
})();
var statearr_37316_37351 = state_37281__$1;
(statearr_37316_37351[(2)] = null);

(statearr_37316_37351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (10))){
var inst_37223 = (state_37281[(12)]);
var inst_37222 = (state_37281[(14)]);
var inst_37224 = (state_37281[(15)]);
var inst_37225 = (state_37281[(16)]);
var inst_37230 = cljs.core._nth.call(null,inst_37223,inst_37225);
var inst_37231 = cljs.core.async.muxch_STAR_.call(null,inst_37230);
var inst_37232 = cljs.core.async.close_BANG_.call(null,inst_37231);
var inst_37233 = (inst_37225 + (1));
var tmp37311 = inst_37223;
var tmp37312 = inst_37222;
var tmp37313 = inst_37224;
var inst_37222__$1 = tmp37312;
var inst_37223__$1 = tmp37311;
var inst_37224__$1 = tmp37313;
var inst_37225__$1 = inst_37233;
var state_37281__$1 = (function (){var statearr_37317 = state_37281;
(statearr_37317[(17)] = inst_37232);

(statearr_37317[(12)] = inst_37223__$1);

(statearr_37317[(14)] = inst_37222__$1);

(statearr_37317[(15)] = inst_37224__$1);

(statearr_37317[(16)] = inst_37225__$1);

return statearr_37317;
})();
var statearr_37318_37352 = state_37281__$1;
(statearr_37318_37352[(2)] = null);

(statearr_37318_37352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (18))){
var inst_37251 = (state_37281[(2)]);
var state_37281__$1 = state_37281;
var statearr_37319_37353 = state_37281__$1;
(statearr_37319_37353[(2)] = inst_37251);

(statearr_37319_37353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37282 === (8))){
var inst_37224 = (state_37281[(15)]);
var inst_37225 = (state_37281[(16)]);
var inst_37227 = (inst_37225 < inst_37224);
var inst_37228 = inst_37227;
var state_37281__$1 = state_37281;
if(cljs.core.truth_(inst_37228)){
var statearr_37320_37354 = state_37281__$1;
(statearr_37320_37354[(1)] = (10));

} else {
var statearr_37321_37355 = state_37281__$1;
(statearr_37321_37355[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37327,mults,ensure_mult,p))
;
return ((function (switch__35998__auto__,c__36093__auto___37327,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_37322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37322[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_37322[(1)] = (1));

return statearr_37322;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_37281){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37323){if((e37323 instanceof Object)){
var ex__36002__auto__ = e37323;
var statearr_37324_37356 = state_37281;
(statearr_37324_37356[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37357 = state_37281;
state_37281 = G__37357;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_37281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_37281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37327,mults,ensure_mult,p))
})();
var state__36095__auto__ = (function (){var statearr_37325 = f__36094__auto__.call(null);
(statearr_37325[(6)] = c__36093__auto___37327);

return statearr_37325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37327,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37359 = arguments.length;
switch (G__37359) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37362 = arguments.length;
switch (G__37362) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37365 = arguments.length;
switch (G__37365) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__36093__auto___37432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37404){
var state_val_37405 = (state_37404[(1)]);
if((state_val_37405 === (7))){
var state_37404__$1 = state_37404;
var statearr_37406_37433 = state_37404__$1;
(statearr_37406_37433[(2)] = null);

(statearr_37406_37433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (1))){
var state_37404__$1 = state_37404;
var statearr_37407_37434 = state_37404__$1;
(statearr_37407_37434[(2)] = null);

(statearr_37407_37434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (4))){
var inst_37368 = (state_37404[(7)]);
var inst_37370 = (inst_37368 < cnt);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37370)){
var statearr_37408_37435 = state_37404__$1;
(statearr_37408_37435[(1)] = (6));

} else {
var statearr_37409_37436 = state_37404__$1;
(statearr_37409_37436[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (15))){
var inst_37400 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37410_37437 = state_37404__$1;
(statearr_37410_37437[(2)] = inst_37400);

(statearr_37410_37437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (13))){
var inst_37393 = cljs.core.async.close_BANG_.call(null,out);
var state_37404__$1 = state_37404;
var statearr_37411_37438 = state_37404__$1;
(statearr_37411_37438[(2)] = inst_37393);

(statearr_37411_37438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (6))){
var state_37404__$1 = state_37404;
var statearr_37412_37439 = state_37404__$1;
(statearr_37412_37439[(2)] = null);

(statearr_37412_37439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (3))){
var inst_37402 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37404__$1,inst_37402);
} else {
if((state_val_37405 === (12))){
var inst_37390 = (state_37404[(8)]);
var inst_37390__$1 = (state_37404[(2)]);
var inst_37391 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37390__$1);
var state_37404__$1 = (function (){var statearr_37413 = state_37404;
(statearr_37413[(8)] = inst_37390__$1);

return statearr_37413;
})();
if(cljs.core.truth_(inst_37391)){
var statearr_37414_37440 = state_37404__$1;
(statearr_37414_37440[(1)] = (13));

} else {
var statearr_37415_37441 = state_37404__$1;
(statearr_37415_37441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (2))){
var inst_37367 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37368 = (0);
var state_37404__$1 = (function (){var statearr_37416 = state_37404;
(statearr_37416[(9)] = inst_37367);

(statearr_37416[(7)] = inst_37368);

return statearr_37416;
})();
var statearr_37417_37442 = state_37404__$1;
(statearr_37417_37442[(2)] = null);

(statearr_37417_37442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (11))){
var inst_37368 = (state_37404[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37404,(10),Object,null,(9));
var inst_37377 = chs__$1.call(null,inst_37368);
var inst_37378 = done.call(null,inst_37368);
var inst_37379 = cljs.core.async.take_BANG_.call(null,inst_37377,inst_37378);
var state_37404__$1 = state_37404;
var statearr_37418_37443 = state_37404__$1;
(statearr_37418_37443[(2)] = inst_37379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (9))){
var inst_37368 = (state_37404[(7)]);
var inst_37381 = (state_37404[(2)]);
var inst_37382 = (inst_37368 + (1));
var inst_37368__$1 = inst_37382;
var state_37404__$1 = (function (){var statearr_37419 = state_37404;
(statearr_37419[(10)] = inst_37381);

(statearr_37419[(7)] = inst_37368__$1);

return statearr_37419;
})();
var statearr_37420_37444 = state_37404__$1;
(statearr_37420_37444[(2)] = null);

(statearr_37420_37444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (5))){
var inst_37388 = (state_37404[(2)]);
var state_37404__$1 = (function (){var statearr_37421 = state_37404;
(statearr_37421[(11)] = inst_37388);

return statearr_37421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(12),dchan);
} else {
if((state_val_37405 === (14))){
var inst_37390 = (state_37404[(8)]);
var inst_37395 = cljs.core.apply.call(null,f,inst_37390);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37404__$1,(16),out,inst_37395);
} else {
if((state_val_37405 === (16))){
var inst_37397 = (state_37404[(2)]);
var state_37404__$1 = (function (){var statearr_37422 = state_37404;
(statearr_37422[(12)] = inst_37397);

return statearr_37422;
})();
var statearr_37423_37445 = state_37404__$1;
(statearr_37423_37445[(2)] = null);

(statearr_37423_37445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (10))){
var inst_37372 = (state_37404[(2)]);
var inst_37373 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37404__$1 = (function (){var statearr_37424 = state_37404;
(statearr_37424[(13)] = inst_37372);

return statearr_37424;
})();
var statearr_37425_37446 = state_37404__$1;
(statearr_37425_37446[(2)] = inst_37373);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (8))){
var inst_37386 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37426_37447 = state_37404__$1;
(statearr_37426_37447[(2)] = inst_37386);

(statearr_37426_37447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37432,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35998__auto__,c__36093__auto___37432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_37427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37427[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_37427[(1)] = (1));

return statearr_37427;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_37404){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37428){if((e37428 instanceof Object)){
var ex__36002__auto__ = e37428;
var statearr_37429_37448 = state_37404;
(statearr_37429_37448[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37449 = state_37404;
state_37404 = G__37449;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_37404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_37404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37432,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36095__auto__ = (function (){var statearr_37430 = f__36094__auto__.call(null);
(statearr_37430[(6)] = c__36093__auto___37432);

return statearr_37430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37432,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37452 = arguments.length;
switch (G__37452) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36093__auto___37506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37506,out){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37506,out){
return (function (state_37484){
var state_val_37485 = (state_37484[(1)]);
if((state_val_37485 === (7))){
var inst_37463 = (state_37484[(7)]);
var inst_37464 = (state_37484[(8)]);
var inst_37463__$1 = (state_37484[(2)]);
var inst_37464__$1 = cljs.core.nth.call(null,inst_37463__$1,(0),null);
var inst_37465 = cljs.core.nth.call(null,inst_37463__$1,(1),null);
var inst_37466 = (inst_37464__$1 == null);
var state_37484__$1 = (function (){var statearr_37486 = state_37484;
(statearr_37486[(7)] = inst_37463__$1);

(statearr_37486[(9)] = inst_37465);

(statearr_37486[(8)] = inst_37464__$1);

return statearr_37486;
})();
if(cljs.core.truth_(inst_37466)){
var statearr_37487_37507 = state_37484__$1;
(statearr_37487_37507[(1)] = (8));

} else {
var statearr_37488_37508 = state_37484__$1;
(statearr_37488_37508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (1))){
var inst_37453 = cljs.core.vec.call(null,chs);
var inst_37454 = inst_37453;
var state_37484__$1 = (function (){var statearr_37489 = state_37484;
(statearr_37489[(10)] = inst_37454);

return statearr_37489;
})();
var statearr_37490_37509 = state_37484__$1;
(statearr_37490_37509[(2)] = null);

(statearr_37490_37509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (4))){
var inst_37454 = (state_37484[(10)]);
var state_37484__$1 = state_37484;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37484__$1,(7),inst_37454);
} else {
if((state_val_37485 === (6))){
var inst_37480 = (state_37484[(2)]);
var state_37484__$1 = state_37484;
var statearr_37491_37510 = state_37484__$1;
(statearr_37491_37510[(2)] = inst_37480);

(statearr_37491_37510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (3))){
var inst_37482 = (state_37484[(2)]);
var state_37484__$1 = state_37484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37484__$1,inst_37482);
} else {
if((state_val_37485 === (2))){
var inst_37454 = (state_37484[(10)]);
var inst_37456 = cljs.core.count.call(null,inst_37454);
var inst_37457 = (inst_37456 > (0));
var state_37484__$1 = state_37484;
if(cljs.core.truth_(inst_37457)){
var statearr_37493_37511 = state_37484__$1;
(statearr_37493_37511[(1)] = (4));

} else {
var statearr_37494_37512 = state_37484__$1;
(statearr_37494_37512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (11))){
var inst_37454 = (state_37484[(10)]);
var inst_37473 = (state_37484[(2)]);
var tmp37492 = inst_37454;
var inst_37454__$1 = tmp37492;
var state_37484__$1 = (function (){var statearr_37495 = state_37484;
(statearr_37495[(11)] = inst_37473);

(statearr_37495[(10)] = inst_37454__$1);

return statearr_37495;
})();
var statearr_37496_37513 = state_37484__$1;
(statearr_37496_37513[(2)] = null);

(statearr_37496_37513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (9))){
var inst_37464 = (state_37484[(8)]);
var state_37484__$1 = state_37484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37484__$1,(11),out,inst_37464);
} else {
if((state_val_37485 === (5))){
var inst_37478 = cljs.core.async.close_BANG_.call(null,out);
var state_37484__$1 = state_37484;
var statearr_37497_37514 = state_37484__$1;
(statearr_37497_37514[(2)] = inst_37478);

(statearr_37497_37514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (10))){
var inst_37476 = (state_37484[(2)]);
var state_37484__$1 = state_37484;
var statearr_37498_37515 = state_37484__$1;
(statearr_37498_37515[(2)] = inst_37476);

(statearr_37498_37515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (8))){
var inst_37463 = (state_37484[(7)]);
var inst_37465 = (state_37484[(9)]);
var inst_37454 = (state_37484[(10)]);
var inst_37464 = (state_37484[(8)]);
var inst_37468 = (function (){var cs = inst_37454;
var vec__37459 = inst_37463;
var v = inst_37464;
var c = inst_37465;
return ((function (cs,vec__37459,v,c,inst_37463,inst_37465,inst_37454,inst_37464,state_val_37485,c__36093__auto___37506,out){
return (function (p1__37450_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37450_SHARP_);
});
;})(cs,vec__37459,v,c,inst_37463,inst_37465,inst_37454,inst_37464,state_val_37485,c__36093__auto___37506,out))
})();
var inst_37469 = cljs.core.filterv.call(null,inst_37468,inst_37454);
var inst_37454__$1 = inst_37469;
var state_37484__$1 = (function (){var statearr_37499 = state_37484;
(statearr_37499[(10)] = inst_37454__$1);

return statearr_37499;
})();
var statearr_37500_37516 = state_37484__$1;
(statearr_37500_37516[(2)] = null);

(statearr_37500_37516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37506,out))
;
return ((function (switch__35998__auto__,c__36093__auto___37506,out){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_37501 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37501[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_37501[(1)] = (1));

return statearr_37501;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_37484){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37502){if((e37502 instanceof Object)){
var ex__36002__auto__ = e37502;
var statearr_37503_37517 = state_37484;
(statearr_37503_37517[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37518 = state_37484;
state_37484 = G__37518;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_37484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_37484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37506,out))
})();
var state__36095__auto__ = (function (){var statearr_37504 = f__36094__auto__.call(null);
(statearr_37504[(6)] = c__36093__auto___37506);

return statearr_37504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37506,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37520 = arguments.length;
switch (G__37520) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36093__auto___37565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37565,out){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37565,out){
return (function (state_37544){
var state_val_37545 = (state_37544[(1)]);
if((state_val_37545 === (7))){
var inst_37526 = (state_37544[(7)]);
var inst_37526__$1 = (state_37544[(2)]);
var inst_37527 = (inst_37526__$1 == null);
var inst_37528 = cljs.core.not.call(null,inst_37527);
var state_37544__$1 = (function (){var statearr_37546 = state_37544;
(statearr_37546[(7)] = inst_37526__$1);

return statearr_37546;
})();
if(inst_37528){
var statearr_37547_37566 = state_37544__$1;
(statearr_37547_37566[(1)] = (8));

} else {
var statearr_37548_37567 = state_37544__$1;
(statearr_37548_37567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (1))){
var inst_37521 = (0);
var state_37544__$1 = (function (){var statearr_37549 = state_37544;
(statearr_37549[(8)] = inst_37521);

return statearr_37549;
})();
var statearr_37550_37568 = state_37544__$1;
(statearr_37550_37568[(2)] = null);

(statearr_37550_37568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (4))){
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(7),ch);
} else {
if((state_val_37545 === (6))){
var inst_37539 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37551_37569 = state_37544__$1;
(statearr_37551_37569[(2)] = inst_37539);

(statearr_37551_37569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (3))){
var inst_37541 = (state_37544[(2)]);
var inst_37542 = cljs.core.async.close_BANG_.call(null,out);
var state_37544__$1 = (function (){var statearr_37552 = state_37544;
(statearr_37552[(9)] = inst_37541);

return statearr_37552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37544__$1,inst_37542);
} else {
if((state_val_37545 === (2))){
var inst_37521 = (state_37544[(8)]);
var inst_37523 = (inst_37521 < n);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37523)){
var statearr_37553_37570 = state_37544__$1;
(statearr_37553_37570[(1)] = (4));

} else {
var statearr_37554_37571 = state_37544__$1;
(statearr_37554_37571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (11))){
var inst_37521 = (state_37544[(8)]);
var inst_37531 = (state_37544[(2)]);
var inst_37532 = (inst_37521 + (1));
var inst_37521__$1 = inst_37532;
var state_37544__$1 = (function (){var statearr_37555 = state_37544;
(statearr_37555[(10)] = inst_37531);

(statearr_37555[(8)] = inst_37521__$1);

return statearr_37555;
})();
var statearr_37556_37572 = state_37544__$1;
(statearr_37556_37572[(2)] = null);

(statearr_37556_37572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (9))){
var state_37544__$1 = state_37544;
var statearr_37557_37573 = state_37544__$1;
(statearr_37557_37573[(2)] = null);

(statearr_37557_37573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (5))){
var state_37544__$1 = state_37544;
var statearr_37558_37574 = state_37544__$1;
(statearr_37558_37574[(2)] = null);

(statearr_37558_37574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (10))){
var inst_37536 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37559_37575 = state_37544__$1;
(statearr_37559_37575[(2)] = inst_37536);

(statearr_37559_37575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (8))){
var inst_37526 = (state_37544[(7)]);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37544__$1,(11),out,inst_37526);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37565,out))
;
return ((function (switch__35998__auto__,c__36093__auto___37565,out){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_37560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37560[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_37560[(1)] = (1));

return statearr_37560;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_37544){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37561){if((e37561 instanceof Object)){
var ex__36002__auto__ = e37561;
var statearr_37562_37576 = state_37544;
(statearr_37562_37576[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37577 = state_37544;
state_37544 = G__37577;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_37544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_37544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37565,out))
})();
var state__36095__auto__ = (function (){var statearr_37563 = f__36094__auto__.call(null);
(statearr_37563[(6)] = c__36093__auto___37565);

return statearr_37563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37565,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37579 = (function (f,ch,meta37580){
this.f = f;
this.ch = ch;
this.meta37580 = meta37580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37581,meta37580__$1){
var self__ = this;
var _37581__$1 = this;
return (new cljs.core.async.t_cljs$core$async37579(self__.f,self__.ch,meta37580__$1));
});

cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37581){
var self__ = this;
var _37581__$1 = this;
return self__.meta37580;
});

cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37582 = (function (f,ch,meta37580,_,fn1,meta37583){
this.f = f;
this.ch = ch;
this.meta37580 = meta37580;
this._ = _;
this.fn1 = fn1;
this.meta37583 = meta37583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37584,meta37583__$1){
var self__ = this;
var _37584__$1 = this;
return (new cljs.core.async.t_cljs$core$async37582(self__.f,self__.ch,self__.meta37580,self__._,self__.fn1,meta37583__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37584){
var self__ = this;
var _37584__$1 = this;
return self__.meta37583;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37578_SHARP_){
return f1.call(null,(((p1__37578_SHARP_ == null))?null:self__.f.call(null,p1__37578_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37582.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37580","meta37580",2026418477,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37579","cljs.core.async/t_cljs$core$async37579",-1258555571,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37583","meta37583",-645806881,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37582";

cljs.core.async.t_cljs$core$async37582.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37582");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37582.
 */
cljs.core.async.__GT_t_cljs$core$async37582 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37582(f__$1,ch__$1,meta37580__$1,___$2,fn1__$1,meta37583){
return (new cljs.core.async.t_cljs$core$async37582(f__$1,ch__$1,meta37580__$1,___$2,fn1__$1,meta37583));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37582(self__.f,self__.ch,self__.meta37580,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37580","meta37580",2026418477,null)], null);
});

cljs.core.async.t_cljs$core$async37579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37579";

cljs.core.async.t_cljs$core$async37579.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37579");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37579.
 */
cljs.core.async.__GT_t_cljs$core$async37579 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37579(f__$1,ch__$1,meta37580){
return (new cljs.core.async.t_cljs$core$async37579(f__$1,ch__$1,meta37580));
});

}

return (new cljs.core.async.t_cljs$core$async37579(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37585 = (function (f,ch,meta37586){
this.f = f;
this.ch = ch;
this.meta37586 = meta37586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37587,meta37586__$1){
var self__ = this;
var _37587__$1 = this;
return (new cljs.core.async.t_cljs$core$async37585(self__.f,self__.ch,meta37586__$1));
});

cljs.core.async.t_cljs$core$async37585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37587){
var self__ = this;
var _37587__$1 = this;
return self__.meta37586;
});

cljs.core.async.t_cljs$core$async37585.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37585.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37585.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37586","meta37586",83418368,null)], null);
});

cljs.core.async.t_cljs$core$async37585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37585";

cljs.core.async.t_cljs$core$async37585.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37585");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37585.
 */
cljs.core.async.__GT_t_cljs$core$async37585 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37585(f__$1,ch__$1,meta37586){
return (new cljs.core.async.t_cljs$core$async37585(f__$1,ch__$1,meta37586));
});

}

return (new cljs.core.async.t_cljs$core$async37585(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37588 = (function (p,ch,meta37589){
this.p = p;
this.ch = ch;
this.meta37589 = meta37589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37590,meta37589__$1){
var self__ = this;
var _37590__$1 = this;
return (new cljs.core.async.t_cljs$core$async37588(self__.p,self__.ch,meta37589__$1));
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37590){
var self__ = this;
var _37590__$1 = this;
return self__.meta37589;
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37589","meta37589",-533555573,null)], null);
});

cljs.core.async.t_cljs$core$async37588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37588";

cljs.core.async.t_cljs$core$async37588.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37588");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37588.
 */
cljs.core.async.__GT_t_cljs$core$async37588 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37588(p__$1,ch__$1,meta37589){
return (new cljs.core.async.t_cljs$core$async37588(p__$1,ch__$1,meta37589));
});

}

return (new cljs.core.async.t_cljs$core$async37588(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37592 = arguments.length;
switch (G__37592) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36093__auto___37632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37632,out){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37632,out){
return (function (state_37613){
var state_val_37614 = (state_37613[(1)]);
if((state_val_37614 === (7))){
var inst_37609 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37615_37633 = state_37613__$1;
(statearr_37615_37633[(2)] = inst_37609);

(statearr_37615_37633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (1))){
var state_37613__$1 = state_37613;
var statearr_37616_37634 = state_37613__$1;
(statearr_37616_37634[(2)] = null);

(statearr_37616_37634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (4))){
var inst_37595 = (state_37613[(7)]);
var inst_37595__$1 = (state_37613[(2)]);
var inst_37596 = (inst_37595__$1 == null);
var state_37613__$1 = (function (){var statearr_37617 = state_37613;
(statearr_37617[(7)] = inst_37595__$1);

return statearr_37617;
})();
if(cljs.core.truth_(inst_37596)){
var statearr_37618_37635 = state_37613__$1;
(statearr_37618_37635[(1)] = (5));

} else {
var statearr_37619_37636 = state_37613__$1;
(statearr_37619_37636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (6))){
var inst_37595 = (state_37613[(7)]);
var inst_37600 = p.call(null,inst_37595);
var state_37613__$1 = state_37613;
if(cljs.core.truth_(inst_37600)){
var statearr_37620_37637 = state_37613__$1;
(statearr_37620_37637[(1)] = (8));

} else {
var statearr_37621_37638 = state_37613__$1;
(statearr_37621_37638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (3))){
var inst_37611 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37613__$1,inst_37611);
} else {
if((state_val_37614 === (2))){
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37613__$1,(4),ch);
} else {
if((state_val_37614 === (11))){
var inst_37603 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37622_37639 = state_37613__$1;
(statearr_37622_37639[(2)] = inst_37603);

(statearr_37622_37639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (9))){
var state_37613__$1 = state_37613;
var statearr_37623_37640 = state_37613__$1;
(statearr_37623_37640[(2)] = null);

(statearr_37623_37640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (5))){
var inst_37598 = cljs.core.async.close_BANG_.call(null,out);
var state_37613__$1 = state_37613;
var statearr_37624_37641 = state_37613__$1;
(statearr_37624_37641[(2)] = inst_37598);

(statearr_37624_37641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (10))){
var inst_37606 = (state_37613[(2)]);
var state_37613__$1 = (function (){var statearr_37625 = state_37613;
(statearr_37625[(8)] = inst_37606);

return statearr_37625;
})();
var statearr_37626_37642 = state_37613__$1;
(statearr_37626_37642[(2)] = null);

(statearr_37626_37642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (8))){
var inst_37595 = (state_37613[(7)]);
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37613__$1,(11),out,inst_37595);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37632,out))
;
return ((function (switch__35998__auto__,c__36093__auto___37632,out){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_37627 = [null,null,null,null,null,null,null,null,null];
(statearr_37627[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_37627[(1)] = (1));

return statearr_37627;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_37613){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37628){if((e37628 instanceof Object)){
var ex__36002__auto__ = e37628;
var statearr_37629_37643 = state_37613;
(statearr_37629_37643[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37644 = state_37613;
state_37613 = G__37644;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_37613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_37613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37632,out))
})();
var state__36095__auto__ = (function (){var statearr_37630 = f__36094__auto__.call(null);
(statearr_37630[(6)] = c__36093__auto___37632);

return statearr_37630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37632,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37646 = arguments.length;
switch (G__37646) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__){
return (function (state_37709){
var state_val_37710 = (state_37709[(1)]);
if((state_val_37710 === (7))){
var inst_37705 = (state_37709[(2)]);
var state_37709__$1 = state_37709;
var statearr_37711_37749 = state_37709__$1;
(statearr_37711_37749[(2)] = inst_37705);

(statearr_37711_37749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (20))){
var inst_37675 = (state_37709[(7)]);
var inst_37686 = (state_37709[(2)]);
var inst_37687 = cljs.core.next.call(null,inst_37675);
var inst_37661 = inst_37687;
var inst_37662 = null;
var inst_37663 = (0);
var inst_37664 = (0);
var state_37709__$1 = (function (){var statearr_37712 = state_37709;
(statearr_37712[(8)] = inst_37664);

(statearr_37712[(9)] = inst_37662);

(statearr_37712[(10)] = inst_37663);

(statearr_37712[(11)] = inst_37661);

(statearr_37712[(12)] = inst_37686);

return statearr_37712;
})();
var statearr_37713_37750 = state_37709__$1;
(statearr_37713_37750[(2)] = null);

(statearr_37713_37750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (1))){
var state_37709__$1 = state_37709;
var statearr_37714_37751 = state_37709__$1;
(statearr_37714_37751[(2)] = null);

(statearr_37714_37751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (4))){
var inst_37650 = (state_37709[(13)]);
var inst_37650__$1 = (state_37709[(2)]);
var inst_37651 = (inst_37650__$1 == null);
var state_37709__$1 = (function (){var statearr_37715 = state_37709;
(statearr_37715[(13)] = inst_37650__$1);

return statearr_37715;
})();
if(cljs.core.truth_(inst_37651)){
var statearr_37716_37752 = state_37709__$1;
(statearr_37716_37752[(1)] = (5));

} else {
var statearr_37717_37753 = state_37709__$1;
(statearr_37717_37753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (15))){
var state_37709__$1 = state_37709;
var statearr_37721_37754 = state_37709__$1;
(statearr_37721_37754[(2)] = null);

(statearr_37721_37754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (21))){
var state_37709__$1 = state_37709;
var statearr_37722_37755 = state_37709__$1;
(statearr_37722_37755[(2)] = null);

(statearr_37722_37755[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (13))){
var inst_37664 = (state_37709[(8)]);
var inst_37662 = (state_37709[(9)]);
var inst_37663 = (state_37709[(10)]);
var inst_37661 = (state_37709[(11)]);
var inst_37671 = (state_37709[(2)]);
var inst_37672 = (inst_37664 + (1));
var tmp37718 = inst_37662;
var tmp37719 = inst_37663;
var tmp37720 = inst_37661;
var inst_37661__$1 = tmp37720;
var inst_37662__$1 = tmp37718;
var inst_37663__$1 = tmp37719;
var inst_37664__$1 = inst_37672;
var state_37709__$1 = (function (){var statearr_37723 = state_37709;
(statearr_37723[(8)] = inst_37664__$1);

(statearr_37723[(9)] = inst_37662__$1);

(statearr_37723[(10)] = inst_37663__$1);

(statearr_37723[(11)] = inst_37661__$1);

(statearr_37723[(14)] = inst_37671);

return statearr_37723;
})();
var statearr_37724_37756 = state_37709__$1;
(statearr_37724_37756[(2)] = null);

(statearr_37724_37756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (22))){
var state_37709__$1 = state_37709;
var statearr_37725_37757 = state_37709__$1;
(statearr_37725_37757[(2)] = null);

(statearr_37725_37757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (6))){
var inst_37650 = (state_37709[(13)]);
var inst_37659 = f.call(null,inst_37650);
var inst_37660 = cljs.core.seq.call(null,inst_37659);
var inst_37661 = inst_37660;
var inst_37662 = null;
var inst_37663 = (0);
var inst_37664 = (0);
var state_37709__$1 = (function (){var statearr_37726 = state_37709;
(statearr_37726[(8)] = inst_37664);

(statearr_37726[(9)] = inst_37662);

(statearr_37726[(10)] = inst_37663);

(statearr_37726[(11)] = inst_37661);

return statearr_37726;
})();
var statearr_37727_37758 = state_37709__$1;
(statearr_37727_37758[(2)] = null);

(statearr_37727_37758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (17))){
var inst_37675 = (state_37709[(7)]);
var inst_37679 = cljs.core.chunk_first.call(null,inst_37675);
var inst_37680 = cljs.core.chunk_rest.call(null,inst_37675);
var inst_37681 = cljs.core.count.call(null,inst_37679);
var inst_37661 = inst_37680;
var inst_37662 = inst_37679;
var inst_37663 = inst_37681;
var inst_37664 = (0);
var state_37709__$1 = (function (){var statearr_37728 = state_37709;
(statearr_37728[(8)] = inst_37664);

(statearr_37728[(9)] = inst_37662);

(statearr_37728[(10)] = inst_37663);

(statearr_37728[(11)] = inst_37661);

return statearr_37728;
})();
var statearr_37729_37759 = state_37709__$1;
(statearr_37729_37759[(2)] = null);

(statearr_37729_37759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (3))){
var inst_37707 = (state_37709[(2)]);
var state_37709__$1 = state_37709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37709__$1,inst_37707);
} else {
if((state_val_37710 === (12))){
var inst_37695 = (state_37709[(2)]);
var state_37709__$1 = state_37709;
var statearr_37730_37760 = state_37709__$1;
(statearr_37730_37760[(2)] = inst_37695);

(statearr_37730_37760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (2))){
var state_37709__$1 = state_37709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37709__$1,(4),in$);
} else {
if((state_val_37710 === (23))){
var inst_37703 = (state_37709[(2)]);
var state_37709__$1 = state_37709;
var statearr_37731_37761 = state_37709__$1;
(statearr_37731_37761[(2)] = inst_37703);

(statearr_37731_37761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (19))){
var inst_37690 = (state_37709[(2)]);
var state_37709__$1 = state_37709;
var statearr_37732_37762 = state_37709__$1;
(statearr_37732_37762[(2)] = inst_37690);

(statearr_37732_37762[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (11))){
var inst_37675 = (state_37709[(7)]);
var inst_37661 = (state_37709[(11)]);
var inst_37675__$1 = cljs.core.seq.call(null,inst_37661);
var state_37709__$1 = (function (){var statearr_37733 = state_37709;
(statearr_37733[(7)] = inst_37675__$1);

return statearr_37733;
})();
if(inst_37675__$1){
var statearr_37734_37763 = state_37709__$1;
(statearr_37734_37763[(1)] = (14));

} else {
var statearr_37735_37764 = state_37709__$1;
(statearr_37735_37764[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (9))){
var inst_37697 = (state_37709[(2)]);
var inst_37698 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37709__$1 = (function (){var statearr_37736 = state_37709;
(statearr_37736[(15)] = inst_37697);

return statearr_37736;
})();
if(cljs.core.truth_(inst_37698)){
var statearr_37737_37765 = state_37709__$1;
(statearr_37737_37765[(1)] = (21));

} else {
var statearr_37738_37766 = state_37709__$1;
(statearr_37738_37766[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (5))){
var inst_37653 = cljs.core.async.close_BANG_.call(null,out);
var state_37709__$1 = state_37709;
var statearr_37739_37767 = state_37709__$1;
(statearr_37739_37767[(2)] = inst_37653);

(statearr_37739_37767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (14))){
var inst_37675 = (state_37709[(7)]);
var inst_37677 = cljs.core.chunked_seq_QMARK_.call(null,inst_37675);
var state_37709__$1 = state_37709;
if(inst_37677){
var statearr_37740_37768 = state_37709__$1;
(statearr_37740_37768[(1)] = (17));

} else {
var statearr_37741_37769 = state_37709__$1;
(statearr_37741_37769[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (16))){
var inst_37693 = (state_37709[(2)]);
var state_37709__$1 = state_37709;
var statearr_37742_37770 = state_37709__$1;
(statearr_37742_37770[(2)] = inst_37693);

(statearr_37742_37770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37710 === (10))){
var inst_37664 = (state_37709[(8)]);
var inst_37662 = (state_37709[(9)]);
var inst_37669 = cljs.core._nth.call(null,inst_37662,inst_37664);
var state_37709__$1 = state_37709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37709__$1,(13),out,inst_37669);
} else {
if((state_val_37710 === (18))){
var inst_37675 = (state_37709[(7)]);
var inst_37684 = cljs.core.first.call(null,inst_37675);
var state_37709__$1 = state_37709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37709__$1,(20),out,inst_37684);
} else {
if((state_val_37710 === (8))){
var inst_37664 = (state_37709[(8)]);
var inst_37663 = (state_37709[(10)]);
var inst_37666 = (inst_37664 < inst_37663);
var inst_37667 = inst_37666;
var state_37709__$1 = state_37709;
if(cljs.core.truth_(inst_37667)){
var statearr_37743_37771 = state_37709__$1;
(statearr_37743_37771[(1)] = (10));

} else {
var statearr_37744_37772 = state_37709__$1;
(statearr_37744_37772[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35999__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35999__auto____0 = (function (){
var statearr_37745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37745[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35999__auto__);

(statearr_37745[(1)] = (1));

return statearr_37745;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35999__auto____1 = (function (state_37709){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37746){if((e37746 instanceof Object)){
var ex__36002__auto__ = e37746;
var statearr_37747_37773 = state_37709;
(statearr_37747_37773[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37774 = state_37709;
state_37709 = G__37774;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35999__auto__ = function(state_37709){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35999__auto____1.call(this,state_37709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35999__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35999__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__))
})();
var state__36095__auto__ = (function (){var statearr_37748 = f__36094__auto__.call(null);
(statearr_37748[(6)] = c__36093__auto__);

return statearr_37748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__))
);

return c__36093__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37776 = arguments.length;
switch (G__37776) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37779 = arguments.length;
switch (G__37779) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37782 = arguments.length;
switch (G__37782) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36093__auto___37829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37829,out){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37829,out){
return (function (state_37806){
var state_val_37807 = (state_37806[(1)]);
if((state_val_37807 === (7))){
var inst_37801 = (state_37806[(2)]);
var state_37806__$1 = state_37806;
var statearr_37808_37830 = state_37806__$1;
(statearr_37808_37830[(2)] = inst_37801);

(statearr_37808_37830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (1))){
var inst_37783 = null;
var state_37806__$1 = (function (){var statearr_37809 = state_37806;
(statearr_37809[(7)] = inst_37783);

return statearr_37809;
})();
var statearr_37810_37831 = state_37806__$1;
(statearr_37810_37831[(2)] = null);

(statearr_37810_37831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (4))){
var inst_37786 = (state_37806[(8)]);
var inst_37786__$1 = (state_37806[(2)]);
var inst_37787 = (inst_37786__$1 == null);
var inst_37788 = cljs.core.not.call(null,inst_37787);
var state_37806__$1 = (function (){var statearr_37811 = state_37806;
(statearr_37811[(8)] = inst_37786__$1);

return statearr_37811;
})();
if(inst_37788){
var statearr_37812_37832 = state_37806__$1;
(statearr_37812_37832[(1)] = (5));

} else {
var statearr_37813_37833 = state_37806__$1;
(statearr_37813_37833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (6))){
var state_37806__$1 = state_37806;
var statearr_37814_37834 = state_37806__$1;
(statearr_37814_37834[(2)] = null);

(statearr_37814_37834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (3))){
var inst_37803 = (state_37806[(2)]);
var inst_37804 = cljs.core.async.close_BANG_.call(null,out);
var state_37806__$1 = (function (){var statearr_37815 = state_37806;
(statearr_37815[(9)] = inst_37803);

return statearr_37815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37806__$1,inst_37804);
} else {
if((state_val_37807 === (2))){
var state_37806__$1 = state_37806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37806__$1,(4),ch);
} else {
if((state_val_37807 === (11))){
var inst_37786 = (state_37806[(8)]);
var inst_37795 = (state_37806[(2)]);
var inst_37783 = inst_37786;
var state_37806__$1 = (function (){var statearr_37816 = state_37806;
(statearr_37816[(10)] = inst_37795);

(statearr_37816[(7)] = inst_37783);

return statearr_37816;
})();
var statearr_37817_37835 = state_37806__$1;
(statearr_37817_37835[(2)] = null);

(statearr_37817_37835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (9))){
var inst_37786 = (state_37806[(8)]);
var state_37806__$1 = state_37806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37806__$1,(11),out,inst_37786);
} else {
if((state_val_37807 === (5))){
var inst_37786 = (state_37806[(8)]);
var inst_37783 = (state_37806[(7)]);
var inst_37790 = cljs.core._EQ_.call(null,inst_37786,inst_37783);
var state_37806__$1 = state_37806;
if(inst_37790){
var statearr_37819_37836 = state_37806__$1;
(statearr_37819_37836[(1)] = (8));

} else {
var statearr_37820_37837 = state_37806__$1;
(statearr_37820_37837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (10))){
var inst_37798 = (state_37806[(2)]);
var state_37806__$1 = state_37806;
var statearr_37821_37838 = state_37806__$1;
(statearr_37821_37838[(2)] = inst_37798);

(statearr_37821_37838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (8))){
var inst_37783 = (state_37806[(7)]);
var tmp37818 = inst_37783;
var inst_37783__$1 = tmp37818;
var state_37806__$1 = (function (){var statearr_37822 = state_37806;
(statearr_37822[(7)] = inst_37783__$1);

return statearr_37822;
})();
var statearr_37823_37839 = state_37806__$1;
(statearr_37823_37839[(2)] = null);

(statearr_37823_37839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37829,out))
;
return ((function (switch__35998__auto__,c__36093__auto___37829,out){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_37824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37824[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_37824[(1)] = (1));

return statearr_37824;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_37806){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37825){if((e37825 instanceof Object)){
var ex__36002__auto__ = e37825;
var statearr_37826_37840 = state_37806;
(statearr_37826_37840[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37841 = state_37806;
state_37806 = G__37841;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_37806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_37806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37829,out))
})();
var state__36095__auto__ = (function (){var statearr_37827 = f__36094__auto__.call(null);
(statearr_37827[(6)] = c__36093__auto___37829);

return statearr_37827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37829,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37843 = arguments.length;
switch (G__37843) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36093__auto___37909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37909,out){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37909,out){
return (function (state_37881){
var state_val_37882 = (state_37881[(1)]);
if((state_val_37882 === (7))){
var inst_37877 = (state_37881[(2)]);
var state_37881__$1 = state_37881;
var statearr_37883_37910 = state_37881__$1;
(statearr_37883_37910[(2)] = inst_37877);

(statearr_37883_37910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (1))){
var inst_37844 = (new Array(n));
var inst_37845 = inst_37844;
var inst_37846 = (0);
var state_37881__$1 = (function (){var statearr_37884 = state_37881;
(statearr_37884[(7)] = inst_37846);

(statearr_37884[(8)] = inst_37845);

return statearr_37884;
})();
var statearr_37885_37911 = state_37881__$1;
(statearr_37885_37911[(2)] = null);

(statearr_37885_37911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (4))){
var inst_37849 = (state_37881[(9)]);
var inst_37849__$1 = (state_37881[(2)]);
var inst_37850 = (inst_37849__$1 == null);
var inst_37851 = cljs.core.not.call(null,inst_37850);
var state_37881__$1 = (function (){var statearr_37886 = state_37881;
(statearr_37886[(9)] = inst_37849__$1);

return statearr_37886;
})();
if(inst_37851){
var statearr_37887_37912 = state_37881__$1;
(statearr_37887_37912[(1)] = (5));

} else {
var statearr_37888_37913 = state_37881__$1;
(statearr_37888_37913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (15))){
var inst_37871 = (state_37881[(2)]);
var state_37881__$1 = state_37881;
var statearr_37889_37914 = state_37881__$1;
(statearr_37889_37914[(2)] = inst_37871);

(statearr_37889_37914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (13))){
var state_37881__$1 = state_37881;
var statearr_37890_37915 = state_37881__$1;
(statearr_37890_37915[(2)] = null);

(statearr_37890_37915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (6))){
var inst_37846 = (state_37881[(7)]);
var inst_37867 = (inst_37846 > (0));
var state_37881__$1 = state_37881;
if(cljs.core.truth_(inst_37867)){
var statearr_37891_37916 = state_37881__$1;
(statearr_37891_37916[(1)] = (12));

} else {
var statearr_37892_37917 = state_37881__$1;
(statearr_37892_37917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (3))){
var inst_37879 = (state_37881[(2)]);
var state_37881__$1 = state_37881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37881__$1,inst_37879);
} else {
if((state_val_37882 === (12))){
var inst_37845 = (state_37881[(8)]);
var inst_37869 = cljs.core.vec.call(null,inst_37845);
var state_37881__$1 = state_37881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37881__$1,(15),out,inst_37869);
} else {
if((state_val_37882 === (2))){
var state_37881__$1 = state_37881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37881__$1,(4),ch);
} else {
if((state_val_37882 === (11))){
var inst_37861 = (state_37881[(2)]);
var inst_37862 = (new Array(n));
var inst_37845 = inst_37862;
var inst_37846 = (0);
var state_37881__$1 = (function (){var statearr_37893 = state_37881;
(statearr_37893[(7)] = inst_37846);

(statearr_37893[(10)] = inst_37861);

(statearr_37893[(8)] = inst_37845);

return statearr_37893;
})();
var statearr_37894_37918 = state_37881__$1;
(statearr_37894_37918[(2)] = null);

(statearr_37894_37918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (9))){
var inst_37845 = (state_37881[(8)]);
var inst_37859 = cljs.core.vec.call(null,inst_37845);
var state_37881__$1 = state_37881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37881__$1,(11),out,inst_37859);
} else {
if((state_val_37882 === (5))){
var inst_37849 = (state_37881[(9)]);
var inst_37854 = (state_37881[(11)]);
var inst_37846 = (state_37881[(7)]);
var inst_37845 = (state_37881[(8)]);
var inst_37853 = (inst_37845[inst_37846] = inst_37849);
var inst_37854__$1 = (inst_37846 + (1));
var inst_37855 = (inst_37854__$1 < n);
var state_37881__$1 = (function (){var statearr_37895 = state_37881;
(statearr_37895[(11)] = inst_37854__$1);

(statearr_37895[(12)] = inst_37853);

return statearr_37895;
})();
if(cljs.core.truth_(inst_37855)){
var statearr_37896_37919 = state_37881__$1;
(statearr_37896_37919[(1)] = (8));

} else {
var statearr_37897_37920 = state_37881__$1;
(statearr_37897_37920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (14))){
var inst_37874 = (state_37881[(2)]);
var inst_37875 = cljs.core.async.close_BANG_.call(null,out);
var state_37881__$1 = (function (){var statearr_37899 = state_37881;
(statearr_37899[(13)] = inst_37874);

return statearr_37899;
})();
var statearr_37900_37921 = state_37881__$1;
(statearr_37900_37921[(2)] = inst_37875);

(statearr_37900_37921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (10))){
var inst_37865 = (state_37881[(2)]);
var state_37881__$1 = state_37881;
var statearr_37901_37922 = state_37881__$1;
(statearr_37901_37922[(2)] = inst_37865);

(statearr_37901_37922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37882 === (8))){
var inst_37854 = (state_37881[(11)]);
var inst_37845 = (state_37881[(8)]);
var tmp37898 = inst_37845;
var inst_37845__$1 = tmp37898;
var inst_37846 = inst_37854;
var state_37881__$1 = (function (){var statearr_37902 = state_37881;
(statearr_37902[(7)] = inst_37846);

(statearr_37902[(8)] = inst_37845__$1);

return statearr_37902;
})();
var statearr_37903_37923 = state_37881__$1;
(statearr_37903_37923[(2)] = null);

(statearr_37903_37923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37909,out))
;
return ((function (switch__35998__auto__,c__36093__auto___37909,out){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_37904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37904[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_37904[(1)] = (1));

return statearr_37904;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_37881){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37905){if((e37905 instanceof Object)){
var ex__36002__auto__ = e37905;
var statearr_37906_37924 = state_37881;
(statearr_37906_37924[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37925 = state_37881;
state_37881 = G__37925;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_37881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_37881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37909,out))
})();
var state__36095__auto__ = (function (){var statearr_37907 = f__36094__auto__.call(null);
(statearr_37907[(6)] = c__36093__auto___37909);

return statearr_37907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37909,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37927 = arguments.length;
switch (G__37927) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36093__auto___37997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___37997,out){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___37997,out){
return (function (state_37969){
var state_val_37970 = (state_37969[(1)]);
if((state_val_37970 === (7))){
var inst_37965 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37971_37998 = state_37969__$1;
(statearr_37971_37998[(2)] = inst_37965);

(statearr_37971_37998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (1))){
var inst_37928 = [];
var inst_37929 = inst_37928;
var inst_37930 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37969__$1 = (function (){var statearr_37972 = state_37969;
(statearr_37972[(7)] = inst_37929);

(statearr_37972[(8)] = inst_37930);

return statearr_37972;
})();
var statearr_37973_37999 = state_37969__$1;
(statearr_37973_37999[(2)] = null);

(statearr_37973_37999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (4))){
var inst_37933 = (state_37969[(9)]);
var inst_37933__$1 = (state_37969[(2)]);
var inst_37934 = (inst_37933__$1 == null);
var inst_37935 = cljs.core.not.call(null,inst_37934);
var state_37969__$1 = (function (){var statearr_37974 = state_37969;
(statearr_37974[(9)] = inst_37933__$1);

return statearr_37974;
})();
if(inst_37935){
var statearr_37975_38000 = state_37969__$1;
(statearr_37975_38000[(1)] = (5));

} else {
var statearr_37976_38001 = state_37969__$1;
(statearr_37976_38001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (15))){
var inst_37959 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37977_38002 = state_37969__$1;
(statearr_37977_38002[(2)] = inst_37959);

(statearr_37977_38002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (13))){
var state_37969__$1 = state_37969;
var statearr_37978_38003 = state_37969__$1;
(statearr_37978_38003[(2)] = null);

(statearr_37978_38003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (6))){
var inst_37929 = (state_37969[(7)]);
var inst_37954 = inst_37929.length;
var inst_37955 = (inst_37954 > (0));
var state_37969__$1 = state_37969;
if(cljs.core.truth_(inst_37955)){
var statearr_37979_38004 = state_37969__$1;
(statearr_37979_38004[(1)] = (12));

} else {
var statearr_37980_38005 = state_37969__$1;
(statearr_37980_38005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (3))){
var inst_37967 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37969__$1,inst_37967);
} else {
if((state_val_37970 === (12))){
var inst_37929 = (state_37969[(7)]);
var inst_37957 = cljs.core.vec.call(null,inst_37929);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37969__$1,(15),out,inst_37957);
} else {
if((state_val_37970 === (2))){
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37969__$1,(4),ch);
} else {
if((state_val_37970 === (11))){
var inst_37933 = (state_37969[(9)]);
var inst_37937 = (state_37969[(10)]);
var inst_37947 = (state_37969[(2)]);
var inst_37948 = [];
var inst_37949 = inst_37948.push(inst_37933);
var inst_37929 = inst_37948;
var inst_37930 = inst_37937;
var state_37969__$1 = (function (){var statearr_37981 = state_37969;
(statearr_37981[(11)] = inst_37947);

(statearr_37981[(12)] = inst_37949);

(statearr_37981[(7)] = inst_37929);

(statearr_37981[(8)] = inst_37930);

return statearr_37981;
})();
var statearr_37982_38006 = state_37969__$1;
(statearr_37982_38006[(2)] = null);

(statearr_37982_38006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (9))){
var inst_37929 = (state_37969[(7)]);
var inst_37945 = cljs.core.vec.call(null,inst_37929);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37969__$1,(11),out,inst_37945);
} else {
if((state_val_37970 === (5))){
var inst_37933 = (state_37969[(9)]);
var inst_37937 = (state_37969[(10)]);
var inst_37930 = (state_37969[(8)]);
var inst_37937__$1 = f.call(null,inst_37933);
var inst_37938 = cljs.core._EQ_.call(null,inst_37937__$1,inst_37930);
var inst_37939 = cljs.core.keyword_identical_QMARK_.call(null,inst_37930,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37940 = ((inst_37938) || (inst_37939));
var state_37969__$1 = (function (){var statearr_37983 = state_37969;
(statearr_37983[(10)] = inst_37937__$1);

return statearr_37983;
})();
if(cljs.core.truth_(inst_37940)){
var statearr_37984_38007 = state_37969__$1;
(statearr_37984_38007[(1)] = (8));

} else {
var statearr_37985_38008 = state_37969__$1;
(statearr_37985_38008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (14))){
var inst_37962 = (state_37969[(2)]);
var inst_37963 = cljs.core.async.close_BANG_.call(null,out);
var state_37969__$1 = (function (){var statearr_37987 = state_37969;
(statearr_37987[(13)] = inst_37962);

return statearr_37987;
})();
var statearr_37988_38009 = state_37969__$1;
(statearr_37988_38009[(2)] = inst_37963);

(statearr_37988_38009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (10))){
var inst_37952 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37989_38010 = state_37969__$1;
(statearr_37989_38010[(2)] = inst_37952);

(statearr_37989_38010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (8))){
var inst_37929 = (state_37969[(7)]);
var inst_37933 = (state_37969[(9)]);
var inst_37937 = (state_37969[(10)]);
var inst_37942 = inst_37929.push(inst_37933);
var tmp37986 = inst_37929;
var inst_37929__$1 = tmp37986;
var inst_37930 = inst_37937;
var state_37969__$1 = (function (){var statearr_37990 = state_37969;
(statearr_37990[(14)] = inst_37942);

(statearr_37990[(7)] = inst_37929__$1);

(statearr_37990[(8)] = inst_37930);

return statearr_37990;
})();
var statearr_37991_38011 = state_37969__$1;
(statearr_37991_38011[(2)] = null);

(statearr_37991_38011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36093__auto___37997,out))
;
return ((function (switch__35998__auto__,c__36093__auto___37997,out){
return (function() {
var cljs$core$async$state_machine__35999__auto__ = null;
var cljs$core$async$state_machine__35999__auto____0 = (function (){
var statearr_37992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37992[(0)] = cljs$core$async$state_machine__35999__auto__);

(statearr_37992[(1)] = (1));

return statearr_37992;
});
var cljs$core$async$state_machine__35999__auto____1 = (function (state_37969){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_37969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e37993){if((e37993 instanceof Object)){
var ex__36002__auto__ = e37993;
var statearr_37994_38012 = state_37969;
(statearr_37994_38012[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38013 = state_37969;
state_37969 = G__38013;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
cljs$core$async$state_machine__35999__auto__ = function(state_37969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35999__auto____1.call(this,state_37969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35999__auto____0;
cljs$core$async$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35999__auto____1;
return cljs$core$async$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___37997,out))
})();
var state__36095__auto__ = (function (){var statearr_37995 = f__36094__auto__.call(null);
(statearr_37995[(6)] = c__36093__auto___37997);

return statearr_37995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___37997,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1557851000088
