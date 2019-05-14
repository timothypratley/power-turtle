// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38100_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38100_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38101 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38102 = null;
var count__38103 = (0);
var i__38104 = (0);
while(true){
if((i__38104 < count__38103)){
var n = cljs.core._nth.call(null,chunk__38102,i__38104);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__38105 = seq__38101;
var G__38106 = chunk__38102;
var G__38107 = count__38103;
var G__38108 = (i__38104 + (1));
seq__38101 = G__38105;
chunk__38102 = G__38106;
count__38103 = G__38107;
i__38104 = G__38108;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38101);
if(temp__5720__auto__){
var seq__38101__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38101__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__38101__$1);
var G__38109 = cljs.core.chunk_rest.call(null,seq__38101__$1);
var G__38110 = c__4461__auto__;
var G__38111 = cljs.core.count.call(null,c__4461__auto__);
var G__38112 = (0);
seq__38101 = G__38109;
chunk__38102 = G__38110;
count__38103 = G__38111;
i__38104 = G__38112;
continue;
} else {
var n = cljs.core.first.call(null,seq__38101__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__38113 = cljs.core.next.call(null,seq__38101__$1);
var G__38114 = null;
var G__38115 = (0);
var G__38116 = (0);
seq__38101 = G__38113;
chunk__38102 = G__38114;
count__38103 = G__38115;
i__38104 = G__38116;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__38117){
var vec__38118 = p__38117;
var _ = cljs.core.nth.call(null,vec__38118,(0),null);
var v = cljs.core.nth.call(null,vec__38118,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__38121){
var vec__38122 = p__38121;
var k = cljs.core.nth.call(null,vec__38122,(0),null);
var v = cljs.core.nth.call(null,vec__38122,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38134_38142 = cljs.core.seq.call(null,deps);
var chunk__38135_38143 = null;
var count__38136_38144 = (0);
var i__38137_38145 = (0);
while(true){
if((i__38137_38145 < count__38136_38144)){
var dep_38146 = cljs.core._nth.call(null,chunk__38135_38143,i__38137_38145);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_38146;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38146));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38146,(depth + (1)),state);
} else {
}


var G__38147 = seq__38134_38142;
var G__38148 = chunk__38135_38143;
var G__38149 = count__38136_38144;
var G__38150 = (i__38137_38145 + (1));
seq__38134_38142 = G__38147;
chunk__38135_38143 = G__38148;
count__38136_38144 = G__38149;
i__38137_38145 = G__38150;
continue;
} else {
var temp__5720__auto___38151 = cljs.core.seq.call(null,seq__38134_38142);
if(temp__5720__auto___38151){
var seq__38134_38152__$1 = temp__5720__auto___38151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38134_38152__$1)){
var c__4461__auto___38153 = cljs.core.chunk_first.call(null,seq__38134_38152__$1);
var G__38154 = cljs.core.chunk_rest.call(null,seq__38134_38152__$1);
var G__38155 = c__4461__auto___38153;
var G__38156 = cljs.core.count.call(null,c__4461__auto___38153);
var G__38157 = (0);
seq__38134_38142 = G__38154;
chunk__38135_38143 = G__38155;
count__38136_38144 = G__38156;
i__38137_38145 = G__38157;
continue;
} else {
var dep_38158 = cljs.core.first.call(null,seq__38134_38152__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_38158;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38158));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38158,(depth + (1)),state);
} else {
}


var G__38159 = cljs.core.next.call(null,seq__38134_38152__$1);
var G__38160 = null;
var G__38161 = (0);
var G__38162 = (0);
seq__38134_38142 = G__38159;
chunk__38135_38143 = G__38160;
count__38136_38144 = G__38161;
i__38137_38145 = G__38162;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38138){
var vec__38139 = p__38138;
var seq__38140 = cljs.core.seq.call(null,vec__38139);
var first__38141 = cljs.core.first.call(null,seq__38140);
var seq__38140__$1 = cljs.core.next.call(null,seq__38140);
var x = first__38141;
var xs = seq__38140__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38139,seq__38140,first__38141,seq__38140__$1,x,xs,get_deps__$1){
return (function (p1__38125_SHARP_){
return clojure.set.difference.call(null,p1__38125_SHARP_,x);
});})(vec__38139,seq__38140,first__38141,seq__38140__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38163 = cljs.core.seq.call(null,provides);
var chunk__38164 = null;
var count__38165 = (0);
var i__38166 = (0);
while(true){
if((i__38166 < count__38165)){
var prov = cljs.core._nth.call(null,chunk__38164,i__38166);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38167_38175 = cljs.core.seq.call(null,requires);
var chunk__38168_38176 = null;
var count__38169_38177 = (0);
var i__38170_38178 = (0);
while(true){
if((i__38170_38178 < count__38169_38177)){
var req_38179 = cljs.core._nth.call(null,chunk__38168_38176,i__38170_38178);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38179,prov);


var G__38180 = seq__38167_38175;
var G__38181 = chunk__38168_38176;
var G__38182 = count__38169_38177;
var G__38183 = (i__38170_38178 + (1));
seq__38167_38175 = G__38180;
chunk__38168_38176 = G__38181;
count__38169_38177 = G__38182;
i__38170_38178 = G__38183;
continue;
} else {
var temp__5720__auto___38184 = cljs.core.seq.call(null,seq__38167_38175);
if(temp__5720__auto___38184){
var seq__38167_38185__$1 = temp__5720__auto___38184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38167_38185__$1)){
var c__4461__auto___38186 = cljs.core.chunk_first.call(null,seq__38167_38185__$1);
var G__38187 = cljs.core.chunk_rest.call(null,seq__38167_38185__$1);
var G__38188 = c__4461__auto___38186;
var G__38189 = cljs.core.count.call(null,c__4461__auto___38186);
var G__38190 = (0);
seq__38167_38175 = G__38187;
chunk__38168_38176 = G__38188;
count__38169_38177 = G__38189;
i__38170_38178 = G__38190;
continue;
} else {
var req_38191 = cljs.core.first.call(null,seq__38167_38185__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38191,prov);


var G__38192 = cljs.core.next.call(null,seq__38167_38185__$1);
var G__38193 = null;
var G__38194 = (0);
var G__38195 = (0);
seq__38167_38175 = G__38192;
chunk__38168_38176 = G__38193;
count__38169_38177 = G__38194;
i__38170_38178 = G__38195;
continue;
}
} else {
}
}
break;
}


var G__38196 = seq__38163;
var G__38197 = chunk__38164;
var G__38198 = count__38165;
var G__38199 = (i__38166 + (1));
seq__38163 = G__38196;
chunk__38164 = G__38197;
count__38165 = G__38198;
i__38166 = G__38199;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38163);
if(temp__5720__auto__){
var seq__38163__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38163__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__38163__$1);
var G__38200 = cljs.core.chunk_rest.call(null,seq__38163__$1);
var G__38201 = c__4461__auto__;
var G__38202 = cljs.core.count.call(null,c__4461__auto__);
var G__38203 = (0);
seq__38163 = G__38200;
chunk__38164 = G__38201;
count__38165 = G__38202;
i__38166 = G__38203;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38163__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38171_38204 = cljs.core.seq.call(null,requires);
var chunk__38172_38205 = null;
var count__38173_38206 = (0);
var i__38174_38207 = (0);
while(true){
if((i__38174_38207 < count__38173_38206)){
var req_38208 = cljs.core._nth.call(null,chunk__38172_38205,i__38174_38207);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38208,prov);


var G__38209 = seq__38171_38204;
var G__38210 = chunk__38172_38205;
var G__38211 = count__38173_38206;
var G__38212 = (i__38174_38207 + (1));
seq__38171_38204 = G__38209;
chunk__38172_38205 = G__38210;
count__38173_38206 = G__38211;
i__38174_38207 = G__38212;
continue;
} else {
var temp__5720__auto___38213__$1 = cljs.core.seq.call(null,seq__38171_38204);
if(temp__5720__auto___38213__$1){
var seq__38171_38214__$1 = temp__5720__auto___38213__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38171_38214__$1)){
var c__4461__auto___38215 = cljs.core.chunk_first.call(null,seq__38171_38214__$1);
var G__38216 = cljs.core.chunk_rest.call(null,seq__38171_38214__$1);
var G__38217 = c__4461__auto___38215;
var G__38218 = cljs.core.count.call(null,c__4461__auto___38215);
var G__38219 = (0);
seq__38171_38204 = G__38216;
chunk__38172_38205 = G__38217;
count__38173_38206 = G__38218;
i__38174_38207 = G__38219;
continue;
} else {
var req_38220 = cljs.core.first.call(null,seq__38171_38214__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38220,prov);


var G__38221 = cljs.core.next.call(null,seq__38171_38214__$1);
var G__38222 = null;
var G__38223 = (0);
var G__38224 = (0);
seq__38171_38204 = G__38221;
chunk__38172_38205 = G__38222;
count__38173_38206 = G__38223;
i__38174_38207 = G__38224;
continue;
}
} else {
}
}
break;
}


var G__38225 = cljs.core.next.call(null,seq__38163__$1);
var G__38226 = null;
var G__38227 = (0);
var G__38228 = (0);
seq__38163 = G__38225;
chunk__38164 = G__38226;
count__38165 = G__38227;
i__38166 = G__38228;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38229_38233 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38230_38234 = null;
var count__38231_38235 = (0);
var i__38232_38236 = (0);
while(true){
if((i__38232_38236 < count__38231_38235)){
var ns_38237 = cljs.core._nth.call(null,chunk__38230_38234,i__38232_38236);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38237);


var G__38238 = seq__38229_38233;
var G__38239 = chunk__38230_38234;
var G__38240 = count__38231_38235;
var G__38241 = (i__38232_38236 + (1));
seq__38229_38233 = G__38238;
chunk__38230_38234 = G__38239;
count__38231_38235 = G__38240;
i__38232_38236 = G__38241;
continue;
} else {
var temp__5720__auto___38242 = cljs.core.seq.call(null,seq__38229_38233);
if(temp__5720__auto___38242){
var seq__38229_38243__$1 = temp__5720__auto___38242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38229_38243__$1)){
var c__4461__auto___38244 = cljs.core.chunk_first.call(null,seq__38229_38243__$1);
var G__38245 = cljs.core.chunk_rest.call(null,seq__38229_38243__$1);
var G__38246 = c__4461__auto___38244;
var G__38247 = cljs.core.count.call(null,c__4461__auto___38244);
var G__38248 = (0);
seq__38229_38233 = G__38245;
chunk__38230_38234 = G__38246;
count__38231_38235 = G__38247;
i__38232_38236 = G__38248;
continue;
} else {
var ns_38249 = cljs.core.first.call(null,seq__38229_38243__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38249);


var G__38250 = cljs.core.next.call(null,seq__38229_38243__$1);
var G__38251 = null;
var G__38252 = (0);
var G__38253 = (0);
seq__38229_38233 = G__38250;
chunk__38230_38234 = G__38251;
count__38231_38235 = G__38252;
i__38232_38236 = G__38253;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__38254__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38255__i = 0, G__38255__a = new Array(arguments.length -  0);
while (G__38255__i < G__38255__a.length) {G__38255__a[G__38255__i] = arguments[G__38255__i + 0]; ++G__38255__i;}
  args = new cljs.core.IndexedSeq(G__38255__a,0,null);
} 
return G__38254__delegate.call(this,args);};
G__38254.cljs$lang$maxFixedArity = 0;
G__38254.cljs$lang$applyTo = (function (arglist__38256){
var args = cljs.core.seq(arglist__38256);
return G__38254__delegate(args);
});
G__38254.cljs$core$IFn$_invoke$arity$variadic = G__38254__delegate;
return G__38254;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__38257_SHARP_,p2__38258_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38257_SHARP_)),p2__38258_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__38259_SHARP_,p2__38260_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38259_SHARP_),p2__38260_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38261 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38261.addCallback(((function (G__38261){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__38261))
);

G__38261.addErrback(((function (G__38261){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__38261))
);

return G__38261;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38262){if((e38262 instanceof Error)){
var e = e38262;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38262;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38263){if((e38263 instanceof Error)){
var e = e38263;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38263;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38264 = cljs.core._EQ_;
var expr__38265 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38264.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38265))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__38264.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38265))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__38264.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38265))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__38264,expr__38265){
return (function (a__$1,b){
throw "Reload not defined for this platform";
});
;})(pred__38264,expr__38265))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38267,callback){
var map__38268 = p__38267;
var map__38268__$1 = (((((!((map__38268 == null))))?(((((map__38268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38268):map__38268);
var file_msg = map__38268__$1;
var request_url = cljs.core.get.call(null,map__38268__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__38268,map__38268__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38268,map__38268__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__){
return (function (state_38306){
var state_val_38307 = (state_38306[(1)]);
if((state_val_38307 === (7))){
var inst_38302 = (state_38306[(2)]);
var state_38306__$1 = state_38306;
var statearr_38308_38334 = state_38306__$1;
(statearr_38308_38334[(2)] = inst_38302);

(statearr_38308_38334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (1))){
var state_38306__$1 = state_38306;
var statearr_38309_38335 = state_38306__$1;
(statearr_38309_38335[(2)] = null);

(statearr_38309_38335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (4))){
var inst_38272 = (state_38306[(7)]);
var inst_38272__$1 = (state_38306[(2)]);
var state_38306__$1 = (function (){var statearr_38310 = state_38306;
(statearr_38310[(7)] = inst_38272__$1);

return statearr_38310;
})();
if(cljs.core.truth_(inst_38272__$1)){
var statearr_38311_38336 = state_38306__$1;
(statearr_38311_38336[(1)] = (5));

} else {
var statearr_38312_38337 = state_38306__$1;
(statearr_38312_38337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (15))){
var inst_38287 = (state_38306[(8)]);
var inst_38285 = (state_38306[(9)]);
var inst_38289 = inst_38287.call(null,inst_38285);
var state_38306__$1 = state_38306;
var statearr_38313_38338 = state_38306__$1;
(statearr_38313_38338[(2)] = inst_38289);

(statearr_38313_38338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (13))){
var inst_38296 = (state_38306[(2)]);
var state_38306__$1 = state_38306;
var statearr_38314_38339 = state_38306__$1;
(statearr_38314_38339[(2)] = inst_38296);

(statearr_38314_38339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (6))){
var state_38306__$1 = state_38306;
var statearr_38315_38340 = state_38306__$1;
(statearr_38315_38340[(2)] = null);

(statearr_38315_38340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (17))){
var inst_38293 = (state_38306[(2)]);
var state_38306__$1 = state_38306;
var statearr_38316_38341 = state_38306__$1;
(statearr_38316_38341[(2)] = inst_38293);

(statearr_38316_38341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (3))){
var inst_38304 = (state_38306[(2)]);
var state_38306__$1 = state_38306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38306__$1,inst_38304);
} else {
if((state_val_38307 === (12))){
var state_38306__$1 = state_38306;
var statearr_38317_38342 = state_38306__$1;
(statearr_38317_38342[(2)] = null);

(statearr_38317_38342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (2))){
var state_38306__$1 = state_38306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38306__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38307 === (11))){
var inst_38277 = (state_38306[(10)]);
var inst_38283 = figwheel.client.file_reloading.blocking_load.call(null,inst_38277);
var state_38306__$1 = state_38306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38306__$1,(14),inst_38283);
} else {
if((state_val_38307 === (9))){
var inst_38277 = (state_38306[(10)]);
var state_38306__$1 = state_38306;
if(cljs.core.truth_(inst_38277)){
var statearr_38318_38343 = state_38306__$1;
(statearr_38318_38343[(1)] = (11));

} else {
var statearr_38319_38344 = state_38306__$1;
(statearr_38319_38344[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (5))){
var inst_38272 = (state_38306[(7)]);
var inst_38278 = (state_38306[(11)]);
var inst_38277 = cljs.core.nth.call(null,inst_38272,(0),null);
var inst_38278__$1 = cljs.core.nth.call(null,inst_38272,(1),null);
var state_38306__$1 = (function (){var statearr_38320 = state_38306;
(statearr_38320[(10)] = inst_38277);

(statearr_38320[(11)] = inst_38278__$1);

return statearr_38320;
})();
if(cljs.core.truth_(inst_38278__$1)){
var statearr_38321_38345 = state_38306__$1;
(statearr_38321_38345[(1)] = (8));

} else {
var statearr_38322_38346 = state_38306__$1;
(statearr_38322_38346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (14))){
var inst_38277 = (state_38306[(10)]);
var inst_38287 = (state_38306[(8)]);
var inst_38285 = (state_38306[(2)]);
var inst_38286 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38287__$1 = cljs.core.get.call(null,inst_38286,inst_38277);
var state_38306__$1 = (function (){var statearr_38323 = state_38306;
(statearr_38323[(8)] = inst_38287__$1);

(statearr_38323[(9)] = inst_38285);

return statearr_38323;
})();
if(cljs.core.truth_(inst_38287__$1)){
var statearr_38324_38347 = state_38306__$1;
(statearr_38324_38347[(1)] = (15));

} else {
var statearr_38325_38348 = state_38306__$1;
(statearr_38325_38348[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (16))){
var inst_38285 = (state_38306[(9)]);
var inst_38291 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38285);
var state_38306__$1 = state_38306;
var statearr_38326_38349 = state_38306__$1;
(statearr_38326_38349[(2)] = inst_38291);

(statearr_38326_38349[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (10))){
var inst_38298 = (state_38306[(2)]);
var state_38306__$1 = (function (){var statearr_38327 = state_38306;
(statearr_38327[(12)] = inst_38298);

return statearr_38327;
})();
var statearr_38328_38350 = state_38306__$1;
(statearr_38328_38350[(2)] = null);

(statearr_38328_38350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (8))){
var inst_38278 = (state_38306[(11)]);
var inst_38280 = eval(inst_38278);
var state_38306__$1 = state_38306;
var statearr_38329_38351 = state_38306__$1;
(statearr_38329_38351[(2)] = inst_38280);

(statearr_38329_38351[(1)] = (10));


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
});})(c__36093__auto__))
;
return ((function (switch__35998__auto__,c__36093__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35999__auto__ = null;
var figwheel$client$file_reloading$state_machine__35999__auto____0 = (function (){
var statearr_38330 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38330[(0)] = figwheel$client$file_reloading$state_machine__35999__auto__);

(statearr_38330[(1)] = (1));

return statearr_38330;
});
var figwheel$client$file_reloading$state_machine__35999__auto____1 = (function (state_38306){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_38306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e38331){if((e38331 instanceof Object)){
var ex__36002__auto__ = e38331;
var statearr_38332_38352 = state_38306;
(statearr_38332_38352[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38353 = state_38306;
state_38306 = G__38353;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35999__auto__ = function(state_38306){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35999__auto____1.call(this,state_38306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35999__auto____0;
figwheel$client$file_reloading$state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35999__auto____1;
return figwheel$client$file_reloading$state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__))
})();
var state__36095__auto__ = (function (){var statearr_38333 = f__36094__auto__.call(null);
(statearr_38333[(6)] = c__36093__auto__);

return statearr_38333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__))
);

return c__36093__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38355 = arguments.length;
switch (G__38355) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38357,callback){
var map__38358 = p__38357;
var map__38358__$1 = (((((!((map__38358 == null))))?(((((map__38358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38358):map__38358);
var file_msg = map__38358__$1;
var namespace = cljs.core.get.call(null,map__38358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38358,map__38358__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38358,map__38358__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38360){
var map__38361 = p__38360;
var map__38361__$1 = (((((!((map__38361 == null))))?(((((map__38361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38361):map__38361);
var file_msg = map__38361__$1;
var namespace = cljs.core.get.call(null,map__38361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38363){
var map__38364 = p__38363;
var map__38364__$1 = (((((!((map__38364 == null))))?(((((map__38364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38364):map__38364);
var file_msg = map__38364__$1;
var namespace = cljs.core.get.call(null,map__38364__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38366,callback){
var map__38367 = p__38366;
var map__38367__$1 = (((((!((map__38367 == null))))?(((((map__38367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38367):map__38367);
var file_msg = map__38367__$1;
var request_url = cljs.core.get.call(null,map__38367__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38367__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36093__auto___38417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto___38417,out){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto___38417,out){
return (function (state_38402){
var state_val_38403 = (state_38402[(1)]);
if((state_val_38403 === (1))){
var inst_38376 = cljs.core.seq.call(null,files);
var inst_38377 = cljs.core.first.call(null,inst_38376);
var inst_38378 = cljs.core.next.call(null,inst_38376);
var inst_38379 = files;
var state_38402__$1 = (function (){var statearr_38404 = state_38402;
(statearr_38404[(7)] = inst_38378);

(statearr_38404[(8)] = inst_38379);

(statearr_38404[(9)] = inst_38377);

return statearr_38404;
})();
var statearr_38405_38418 = state_38402__$1;
(statearr_38405_38418[(2)] = null);

(statearr_38405_38418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (2))){
var inst_38379 = (state_38402[(8)]);
var inst_38385 = (state_38402[(10)]);
var inst_38384 = cljs.core.seq.call(null,inst_38379);
var inst_38385__$1 = cljs.core.first.call(null,inst_38384);
var inst_38386 = cljs.core.next.call(null,inst_38384);
var inst_38387 = (inst_38385__$1 == null);
var inst_38388 = cljs.core.not.call(null,inst_38387);
var state_38402__$1 = (function (){var statearr_38406 = state_38402;
(statearr_38406[(11)] = inst_38386);

(statearr_38406[(10)] = inst_38385__$1);

return statearr_38406;
})();
if(inst_38388){
var statearr_38407_38419 = state_38402__$1;
(statearr_38407_38419[(1)] = (4));

} else {
var statearr_38408_38420 = state_38402__$1;
(statearr_38408_38420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (3))){
var inst_38400 = (state_38402[(2)]);
var state_38402__$1 = state_38402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38402__$1,inst_38400);
} else {
if((state_val_38403 === (4))){
var inst_38385 = (state_38402[(10)]);
var inst_38390 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38385);
var state_38402__$1 = state_38402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38402__$1,(7),inst_38390);
} else {
if((state_val_38403 === (5))){
var inst_38396 = cljs.core.async.close_BANG_.call(null,out);
var state_38402__$1 = state_38402;
var statearr_38409_38421 = state_38402__$1;
(statearr_38409_38421[(2)] = inst_38396);

(statearr_38409_38421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (6))){
var inst_38398 = (state_38402[(2)]);
var state_38402__$1 = state_38402;
var statearr_38410_38422 = state_38402__$1;
(statearr_38410_38422[(2)] = inst_38398);

(statearr_38410_38422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (7))){
var inst_38386 = (state_38402[(11)]);
var inst_38392 = (state_38402[(2)]);
var inst_38393 = cljs.core.async.put_BANG_.call(null,out,inst_38392);
var inst_38379 = inst_38386;
var state_38402__$1 = (function (){var statearr_38411 = state_38402;
(statearr_38411[(12)] = inst_38393);

(statearr_38411[(8)] = inst_38379);

return statearr_38411;
})();
var statearr_38412_38423 = state_38402__$1;
(statearr_38412_38423[(2)] = null);

(statearr_38412_38423[(1)] = (2));


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
});})(c__36093__auto___38417,out))
;
return ((function (switch__35998__auto__,c__36093__auto___38417,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto____0 = (function (){
var statearr_38413 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38413[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto__);

(statearr_38413[(1)] = (1));

return statearr_38413;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto____1 = (function (state_38402){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_38402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e38414){if((e38414 instanceof Object)){
var ex__36002__auto__ = e38414;
var statearr_38415_38424 = state_38402;
(statearr_38415_38424[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38425 = state_38402;
state_38402 = G__38425;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto__ = function(state_38402){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto____1.call(this,state_38402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto___38417,out))
})();
var state__36095__auto__ = (function (){var statearr_38416 = f__36094__auto__.call(null);
(statearr_38416[(6)] = c__36093__auto___38417);

return statearr_38416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto___38417,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38426,opts){
var map__38427 = p__38426;
var map__38427__$1 = (((((!((map__38427 == null))))?(((((map__38427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38427):map__38427);
var eval_body = cljs.core.get.call(null,map__38427__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38427__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38429){var e = e38429;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38430_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38430_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38431){
var vec__38432 = p__38431;
var k = cljs.core.nth.call(null,vec__38432,(0),null);
var v = cljs.core.nth.call(null,vec__38432,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38435){
var vec__38436 = p__38435;
var k = cljs.core.nth.call(null,vec__38436,(0),null);
var v = cljs.core.nth.call(null,vec__38436,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38442,p__38443){
var map__38444 = p__38442;
var map__38444__$1 = (((((!((map__38444 == null))))?(((((map__38444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38444):map__38444);
var opts = map__38444__$1;
var before_jsload = cljs.core.get.call(null,map__38444__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38444__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38444__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38445 = p__38443;
var map__38445__$1 = (((((!((map__38445 == null))))?(((((map__38445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38445):map__38445);
var msg = map__38445__$1;
var files = cljs.core.get.call(null,map__38445__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38445__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38445__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36094__auto__ = (function (){var switch__35998__auto__ = ((function (c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38599){
var state_val_38600 = (state_38599[(1)]);
if((state_val_38600 === (7))){
var inst_38459 = (state_38599[(7)]);
var inst_38460 = (state_38599[(8)]);
var inst_38462 = (state_38599[(9)]);
var inst_38461 = (state_38599[(10)]);
var inst_38467 = cljs.core._nth.call(null,inst_38460,inst_38462);
var inst_38468 = figwheel.client.file_reloading.eval_body.call(null,inst_38467,opts);
var inst_38469 = (inst_38462 + (1));
var tmp38601 = inst_38459;
var tmp38602 = inst_38460;
var tmp38603 = inst_38461;
var inst_38459__$1 = tmp38601;
var inst_38460__$1 = tmp38602;
var inst_38461__$1 = tmp38603;
var inst_38462__$1 = inst_38469;
var state_38599__$1 = (function (){var statearr_38604 = state_38599;
(statearr_38604[(11)] = inst_38468);

(statearr_38604[(7)] = inst_38459__$1);

(statearr_38604[(8)] = inst_38460__$1);

(statearr_38604[(9)] = inst_38462__$1);

(statearr_38604[(10)] = inst_38461__$1);

return statearr_38604;
})();
var statearr_38605_38688 = state_38599__$1;
(statearr_38605_38688[(2)] = null);

(statearr_38605_38688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (20))){
var inst_38502 = (state_38599[(12)]);
var inst_38510 = figwheel.client.file_reloading.sort_files.call(null,inst_38502);
var state_38599__$1 = state_38599;
var statearr_38606_38689 = state_38599__$1;
(statearr_38606_38689[(2)] = inst_38510);

(statearr_38606_38689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (27))){
var state_38599__$1 = state_38599;
var statearr_38607_38690 = state_38599__$1;
(statearr_38607_38690[(2)] = null);

(statearr_38607_38690[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (1))){
var inst_38451 = (state_38599[(13)]);
var inst_38448 = before_jsload.call(null,files);
var inst_38449 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38450 = (function (){return ((function (inst_38451,inst_38448,inst_38449,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38439_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38439_SHARP_);
});
;})(inst_38451,inst_38448,inst_38449,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38451__$1 = cljs.core.filter.call(null,inst_38450,files);
var inst_38452 = cljs.core.not_empty.call(null,inst_38451__$1);
var state_38599__$1 = (function (){var statearr_38608 = state_38599;
(statearr_38608[(13)] = inst_38451__$1);

(statearr_38608[(14)] = inst_38448);

(statearr_38608[(15)] = inst_38449);

return statearr_38608;
})();
if(cljs.core.truth_(inst_38452)){
var statearr_38609_38691 = state_38599__$1;
(statearr_38609_38691[(1)] = (2));

} else {
var statearr_38610_38692 = state_38599__$1;
(statearr_38610_38692[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (24))){
var state_38599__$1 = state_38599;
var statearr_38611_38693 = state_38599__$1;
(statearr_38611_38693[(2)] = null);

(statearr_38611_38693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (39))){
var inst_38552 = (state_38599[(16)]);
var state_38599__$1 = state_38599;
var statearr_38612_38694 = state_38599__$1;
(statearr_38612_38694[(2)] = inst_38552);

(statearr_38612_38694[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (46))){
var inst_38594 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38613_38695 = state_38599__$1;
(statearr_38613_38695[(2)] = inst_38594);

(statearr_38613_38695[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (4))){
var inst_38496 = (state_38599[(2)]);
var inst_38497 = cljs.core.List.EMPTY;
var inst_38498 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38497);
var inst_38499 = (function (){return ((function (inst_38496,inst_38497,inst_38498,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38440_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38440_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38440_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38440_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_38496,inst_38497,inst_38498,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38500 = cljs.core.filter.call(null,inst_38499,files);
var inst_38501 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38502 = cljs.core.concat.call(null,inst_38500,inst_38501);
var state_38599__$1 = (function (){var statearr_38614 = state_38599;
(statearr_38614[(12)] = inst_38502);

(statearr_38614[(17)] = inst_38498);

(statearr_38614[(18)] = inst_38496);

return statearr_38614;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38615_38696 = state_38599__$1;
(statearr_38615_38696[(1)] = (16));

} else {
var statearr_38616_38697 = state_38599__$1;
(statearr_38616_38697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (15))){
var inst_38486 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38617_38698 = state_38599__$1;
(statearr_38617_38698[(2)] = inst_38486);

(statearr_38617_38698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (21))){
var inst_38512 = (state_38599[(19)]);
var inst_38512__$1 = (state_38599[(2)]);
var inst_38513 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38512__$1);
var state_38599__$1 = (function (){var statearr_38618 = state_38599;
(statearr_38618[(19)] = inst_38512__$1);

return statearr_38618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38599__$1,(22),inst_38513);
} else {
if((state_val_38600 === (31))){
var inst_38597 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38599__$1,inst_38597);
} else {
if((state_val_38600 === (32))){
var inst_38552 = (state_38599[(16)]);
var inst_38557 = inst_38552.cljs$lang$protocol_mask$partition0$;
var inst_38558 = (inst_38557 & (64));
var inst_38559 = inst_38552.cljs$core$ISeq$;
var inst_38560 = (cljs.core.PROTOCOL_SENTINEL === inst_38559);
var inst_38561 = ((inst_38558) || (inst_38560));
var state_38599__$1 = state_38599;
if(cljs.core.truth_(inst_38561)){
var statearr_38619_38699 = state_38599__$1;
(statearr_38619_38699[(1)] = (35));

} else {
var statearr_38620_38700 = state_38599__$1;
(statearr_38620_38700[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (40))){
var inst_38574 = (state_38599[(20)]);
var inst_38573 = (state_38599[(2)]);
var inst_38574__$1 = cljs.core.get.call(null,inst_38573,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38575 = cljs.core.get.call(null,inst_38573,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38576 = cljs.core.not_empty.call(null,inst_38574__$1);
var state_38599__$1 = (function (){var statearr_38621 = state_38599;
(statearr_38621[(20)] = inst_38574__$1);

(statearr_38621[(21)] = inst_38575);

return statearr_38621;
})();
if(cljs.core.truth_(inst_38576)){
var statearr_38622_38701 = state_38599__$1;
(statearr_38622_38701[(1)] = (41));

} else {
var statearr_38623_38702 = state_38599__$1;
(statearr_38623_38702[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (33))){
var state_38599__$1 = state_38599;
var statearr_38624_38703 = state_38599__$1;
(statearr_38624_38703[(2)] = false);

(statearr_38624_38703[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (13))){
var inst_38472 = (state_38599[(22)]);
var inst_38476 = cljs.core.chunk_first.call(null,inst_38472);
var inst_38477 = cljs.core.chunk_rest.call(null,inst_38472);
var inst_38478 = cljs.core.count.call(null,inst_38476);
var inst_38459 = inst_38477;
var inst_38460 = inst_38476;
var inst_38461 = inst_38478;
var inst_38462 = (0);
var state_38599__$1 = (function (){var statearr_38625 = state_38599;
(statearr_38625[(7)] = inst_38459);

(statearr_38625[(8)] = inst_38460);

(statearr_38625[(9)] = inst_38462);

(statearr_38625[(10)] = inst_38461);

return statearr_38625;
})();
var statearr_38626_38704 = state_38599__$1;
(statearr_38626_38704[(2)] = null);

(statearr_38626_38704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (22))){
var inst_38520 = (state_38599[(23)]);
var inst_38512 = (state_38599[(19)]);
var inst_38515 = (state_38599[(24)]);
var inst_38516 = (state_38599[(25)]);
var inst_38515__$1 = (state_38599[(2)]);
var inst_38516__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38515__$1);
var inst_38517 = (function (){var all_files = inst_38512;
var res_SINGLEQUOTE_ = inst_38515__$1;
var res = inst_38516__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38520,inst_38512,inst_38515,inst_38516,inst_38515__$1,inst_38516__$1,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38441_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38441_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38520,inst_38512,inst_38515,inst_38516,inst_38515__$1,inst_38516__$1,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38518 = cljs.core.filter.call(null,inst_38517,inst_38515__$1);
var inst_38519 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38520__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38519);
var inst_38521 = cljs.core.not_empty.call(null,inst_38520__$1);
var state_38599__$1 = (function (){var statearr_38627 = state_38599;
(statearr_38627[(26)] = inst_38518);

(statearr_38627[(23)] = inst_38520__$1);

(statearr_38627[(24)] = inst_38515__$1);

(statearr_38627[(25)] = inst_38516__$1);

return statearr_38627;
})();
if(cljs.core.truth_(inst_38521)){
var statearr_38628_38705 = state_38599__$1;
(statearr_38628_38705[(1)] = (23));

} else {
var statearr_38629_38706 = state_38599__$1;
(statearr_38629_38706[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (36))){
var state_38599__$1 = state_38599;
var statearr_38630_38707 = state_38599__$1;
(statearr_38630_38707[(2)] = false);

(statearr_38630_38707[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (41))){
var inst_38574 = (state_38599[(20)]);
var inst_38578 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38579 = cljs.core.map.call(null,inst_38578,inst_38574);
var inst_38580 = cljs.core.pr_str.call(null,inst_38579);
var inst_38581 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38580)].join('');
var inst_38582 = figwheel.client.utils.log.call(null,inst_38581);
var state_38599__$1 = state_38599;
var statearr_38631_38708 = state_38599__$1;
(statearr_38631_38708[(2)] = inst_38582);

(statearr_38631_38708[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (43))){
var inst_38575 = (state_38599[(21)]);
var inst_38585 = (state_38599[(2)]);
var inst_38586 = cljs.core.not_empty.call(null,inst_38575);
var state_38599__$1 = (function (){var statearr_38632 = state_38599;
(statearr_38632[(27)] = inst_38585);

return statearr_38632;
})();
if(cljs.core.truth_(inst_38586)){
var statearr_38633_38709 = state_38599__$1;
(statearr_38633_38709[(1)] = (44));

} else {
var statearr_38634_38710 = state_38599__$1;
(statearr_38634_38710[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (29))){
var inst_38518 = (state_38599[(26)]);
var inst_38552 = (state_38599[(16)]);
var inst_38520 = (state_38599[(23)]);
var inst_38512 = (state_38599[(19)]);
var inst_38515 = (state_38599[(24)]);
var inst_38516 = (state_38599[(25)]);
var inst_38548 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38551 = (function (){var all_files = inst_38512;
var res_SINGLEQUOTE_ = inst_38515;
var res = inst_38516;
var files_not_loaded = inst_38518;
var dependencies_that_loaded = inst_38520;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38518,inst_38552,inst_38520,inst_38512,inst_38515,inst_38516,inst_38548,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38550){
var map__38635 = p__38550;
var map__38635__$1 = (((((!((map__38635 == null))))?(((((map__38635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38635):map__38635);
var namespace = cljs.core.get.call(null,map__38635__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38518,inst_38552,inst_38520,inst_38512,inst_38515,inst_38516,inst_38548,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38552__$1 = cljs.core.group_by.call(null,inst_38551,inst_38518);
var inst_38554 = (inst_38552__$1 == null);
var inst_38555 = cljs.core.not.call(null,inst_38554);
var state_38599__$1 = (function (){var statearr_38637 = state_38599;
(statearr_38637[(28)] = inst_38548);

(statearr_38637[(16)] = inst_38552__$1);

return statearr_38637;
})();
if(inst_38555){
var statearr_38638_38711 = state_38599__$1;
(statearr_38638_38711[(1)] = (32));

} else {
var statearr_38639_38712 = state_38599__$1;
(statearr_38639_38712[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (44))){
var inst_38575 = (state_38599[(21)]);
var inst_38588 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38575);
var inst_38589 = cljs.core.pr_str.call(null,inst_38588);
var inst_38590 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38589)].join('');
var inst_38591 = figwheel.client.utils.log.call(null,inst_38590);
var state_38599__$1 = state_38599;
var statearr_38640_38713 = state_38599__$1;
(statearr_38640_38713[(2)] = inst_38591);

(statearr_38640_38713[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (6))){
var inst_38493 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38641_38714 = state_38599__$1;
(statearr_38641_38714[(2)] = inst_38493);

(statearr_38641_38714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (28))){
var inst_38518 = (state_38599[(26)]);
var inst_38545 = (state_38599[(2)]);
var inst_38546 = cljs.core.not_empty.call(null,inst_38518);
var state_38599__$1 = (function (){var statearr_38642 = state_38599;
(statearr_38642[(29)] = inst_38545);

return statearr_38642;
})();
if(cljs.core.truth_(inst_38546)){
var statearr_38643_38715 = state_38599__$1;
(statearr_38643_38715[(1)] = (29));

} else {
var statearr_38644_38716 = state_38599__$1;
(statearr_38644_38716[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (25))){
var inst_38516 = (state_38599[(25)]);
var inst_38532 = (state_38599[(2)]);
var inst_38533 = cljs.core.not_empty.call(null,inst_38516);
var state_38599__$1 = (function (){var statearr_38645 = state_38599;
(statearr_38645[(30)] = inst_38532);

return statearr_38645;
})();
if(cljs.core.truth_(inst_38533)){
var statearr_38646_38717 = state_38599__$1;
(statearr_38646_38717[(1)] = (26));

} else {
var statearr_38647_38718 = state_38599__$1;
(statearr_38647_38718[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (34))){
var inst_38568 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
if(cljs.core.truth_(inst_38568)){
var statearr_38648_38719 = state_38599__$1;
(statearr_38648_38719[(1)] = (38));

} else {
var statearr_38649_38720 = state_38599__$1;
(statearr_38649_38720[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (17))){
var state_38599__$1 = state_38599;
var statearr_38650_38721 = state_38599__$1;
(statearr_38650_38721[(2)] = recompile_dependents);

(statearr_38650_38721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (3))){
var state_38599__$1 = state_38599;
var statearr_38651_38722 = state_38599__$1;
(statearr_38651_38722[(2)] = null);

(statearr_38651_38722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (12))){
var inst_38489 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38652_38723 = state_38599__$1;
(statearr_38652_38723[(2)] = inst_38489);

(statearr_38652_38723[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (2))){
var inst_38451 = (state_38599[(13)]);
var inst_38458 = cljs.core.seq.call(null,inst_38451);
var inst_38459 = inst_38458;
var inst_38460 = null;
var inst_38461 = (0);
var inst_38462 = (0);
var state_38599__$1 = (function (){var statearr_38653 = state_38599;
(statearr_38653[(7)] = inst_38459);

(statearr_38653[(8)] = inst_38460);

(statearr_38653[(9)] = inst_38462);

(statearr_38653[(10)] = inst_38461);

return statearr_38653;
})();
var statearr_38654_38724 = state_38599__$1;
(statearr_38654_38724[(2)] = null);

(statearr_38654_38724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (23))){
var inst_38518 = (state_38599[(26)]);
var inst_38520 = (state_38599[(23)]);
var inst_38512 = (state_38599[(19)]);
var inst_38515 = (state_38599[(24)]);
var inst_38516 = (state_38599[(25)]);
var inst_38523 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38525 = (function (){var all_files = inst_38512;
var res_SINGLEQUOTE_ = inst_38515;
var res = inst_38516;
var files_not_loaded = inst_38518;
var dependencies_that_loaded = inst_38520;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38518,inst_38520,inst_38512,inst_38515,inst_38516,inst_38523,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38524){
var map__38655 = p__38524;
var map__38655__$1 = (((((!((map__38655 == null))))?(((((map__38655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38655):map__38655);
var request_url = cljs.core.get.call(null,map__38655__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38518,inst_38520,inst_38512,inst_38515,inst_38516,inst_38523,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38526 = cljs.core.reverse.call(null,inst_38520);
var inst_38527 = cljs.core.map.call(null,inst_38525,inst_38526);
var inst_38528 = cljs.core.pr_str.call(null,inst_38527);
var inst_38529 = figwheel.client.utils.log.call(null,inst_38528);
var state_38599__$1 = (function (){var statearr_38657 = state_38599;
(statearr_38657[(31)] = inst_38523);

return statearr_38657;
})();
var statearr_38658_38725 = state_38599__$1;
(statearr_38658_38725[(2)] = inst_38529);

(statearr_38658_38725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (35))){
var state_38599__$1 = state_38599;
var statearr_38659_38726 = state_38599__$1;
(statearr_38659_38726[(2)] = true);

(statearr_38659_38726[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (19))){
var inst_38502 = (state_38599[(12)]);
var inst_38508 = figwheel.client.file_reloading.expand_files.call(null,inst_38502);
var state_38599__$1 = state_38599;
var statearr_38660_38727 = state_38599__$1;
(statearr_38660_38727[(2)] = inst_38508);

(statearr_38660_38727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (11))){
var state_38599__$1 = state_38599;
var statearr_38661_38728 = state_38599__$1;
(statearr_38661_38728[(2)] = null);

(statearr_38661_38728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (9))){
var inst_38491 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38662_38729 = state_38599__$1;
(statearr_38662_38729[(2)] = inst_38491);

(statearr_38662_38729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (5))){
var inst_38462 = (state_38599[(9)]);
var inst_38461 = (state_38599[(10)]);
var inst_38464 = (inst_38462 < inst_38461);
var inst_38465 = inst_38464;
var state_38599__$1 = state_38599;
if(cljs.core.truth_(inst_38465)){
var statearr_38663_38730 = state_38599__$1;
(statearr_38663_38730[(1)] = (7));

} else {
var statearr_38664_38731 = state_38599__$1;
(statearr_38664_38731[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (14))){
var inst_38472 = (state_38599[(22)]);
var inst_38481 = cljs.core.first.call(null,inst_38472);
var inst_38482 = figwheel.client.file_reloading.eval_body.call(null,inst_38481,opts);
var inst_38483 = cljs.core.next.call(null,inst_38472);
var inst_38459 = inst_38483;
var inst_38460 = null;
var inst_38461 = (0);
var inst_38462 = (0);
var state_38599__$1 = (function (){var statearr_38665 = state_38599;
(statearr_38665[(7)] = inst_38459);

(statearr_38665[(8)] = inst_38460);

(statearr_38665[(32)] = inst_38482);

(statearr_38665[(9)] = inst_38462);

(statearr_38665[(10)] = inst_38461);

return statearr_38665;
})();
var statearr_38666_38732 = state_38599__$1;
(statearr_38666_38732[(2)] = null);

(statearr_38666_38732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (45))){
var state_38599__$1 = state_38599;
var statearr_38667_38733 = state_38599__$1;
(statearr_38667_38733[(2)] = null);

(statearr_38667_38733[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (26))){
var inst_38518 = (state_38599[(26)]);
var inst_38520 = (state_38599[(23)]);
var inst_38512 = (state_38599[(19)]);
var inst_38515 = (state_38599[(24)]);
var inst_38516 = (state_38599[(25)]);
var inst_38535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38537 = (function (){var all_files = inst_38512;
var res_SINGLEQUOTE_ = inst_38515;
var res = inst_38516;
var files_not_loaded = inst_38518;
var dependencies_that_loaded = inst_38520;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38518,inst_38520,inst_38512,inst_38515,inst_38516,inst_38535,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38536){
var map__38668 = p__38536;
var map__38668__$1 = (((((!((map__38668 == null))))?(((((map__38668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38668):map__38668);
var namespace = cljs.core.get.call(null,map__38668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38668__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38518,inst_38520,inst_38512,inst_38515,inst_38516,inst_38535,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38538 = cljs.core.map.call(null,inst_38537,inst_38516);
var inst_38539 = cljs.core.pr_str.call(null,inst_38538);
var inst_38540 = figwheel.client.utils.log.call(null,inst_38539);
var inst_38541 = (function (){var all_files = inst_38512;
var res_SINGLEQUOTE_ = inst_38515;
var res = inst_38516;
var files_not_loaded = inst_38518;
var dependencies_that_loaded = inst_38520;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38518,inst_38520,inst_38512,inst_38515,inst_38516,inst_38535,inst_38537,inst_38538,inst_38539,inst_38540,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38518,inst_38520,inst_38512,inst_38515,inst_38516,inst_38535,inst_38537,inst_38538,inst_38539,inst_38540,state_val_38600,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38542 = setTimeout(inst_38541,(10));
var state_38599__$1 = (function (){var statearr_38670 = state_38599;
(statearr_38670[(33)] = inst_38535);

(statearr_38670[(34)] = inst_38540);

return statearr_38670;
})();
var statearr_38671_38734 = state_38599__$1;
(statearr_38671_38734[(2)] = inst_38542);

(statearr_38671_38734[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (16))){
var state_38599__$1 = state_38599;
var statearr_38672_38735 = state_38599__$1;
(statearr_38672_38735[(2)] = reload_dependents);

(statearr_38672_38735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (38))){
var inst_38552 = (state_38599[(16)]);
var inst_38570 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38552);
var state_38599__$1 = state_38599;
var statearr_38673_38736 = state_38599__$1;
(statearr_38673_38736[(2)] = inst_38570);

(statearr_38673_38736[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (30))){
var state_38599__$1 = state_38599;
var statearr_38674_38737 = state_38599__$1;
(statearr_38674_38737[(2)] = null);

(statearr_38674_38737[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (10))){
var inst_38472 = (state_38599[(22)]);
var inst_38474 = cljs.core.chunked_seq_QMARK_.call(null,inst_38472);
var state_38599__$1 = state_38599;
if(inst_38474){
var statearr_38675_38738 = state_38599__$1;
(statearr_38675_38738[(1)] = (13));

} else {
var statearr_38676_38739 = state_38599__$1;
(statearr_38676_38739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (18))){
var inst_38506 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
if(cljs.core.truth_(inst_38506)){
var statearr_38677_38740 = state_38599__$1;
(statearr_38677_38740[(1)] = (19));

} else {
var statearr_38678_38741 = state_38599__$1;
(statearr_38678_38741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (42))){
var state_38599__$1 = state_38599;
var statearr_38679_38742 = state_38599__$1;
(statearr_38679_38742[(2)] = null);

(statearr_38679_38742[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (37))){
var inst_38565 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38680_38743 = state_38599__$1;
(statearr_38680_38743[(2)] = inst_38565);

(statearr_38680_38743[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (8))){
var inst_38459 = (state_38599[(7)]);
var inst_38472 = (state_38599[(22)]);
var inst_38472__$1 = cljs.core.seq.call(null,inst_38459);
var state_38599__$1 = (function (){var statearr_38681 = state_38599;
(statearr_38681[(22)] = inst_38472__$1);

return statearr_38681;
})();
if(inst_38472__$1){
var statearr_38682_38744 = state_38599__$1;
(statearr_38682_38744[(1)] = (10));

} else {
var statearr_38683_38745 = state_38599__$1;
(statearr_38683_38745[(1)] = (11));

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
}
});})(c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35998__auto__,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto____0 = (function (){
var statearr_38684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38684[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto__);

(statearr_38684[(1)] = (1));

return statearr_38684;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto____1 = (function (state_38599){
while(true){
var ret_value__36000__auto__ = (function (){try{while(true){
var result__36001__auto__ = switch__35998__auto__.call(null,state_38599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36001__auto__;
}
break;
}
}catch (e38685){if((e38685 instanceof Object)){
var ex__36002__auto__ = e38685;
var statearr_38686_38746 = state_38599;
(statearr_38686_38746[(5)] = ex__36002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38747 = state_38599;
state_38599 = G__38747;
continue;
} else {
return ret_value__36000__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto__ = function(state_38599){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto____1.call(this,state_38599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35999__auto__;
})()
;})(switch__35998__auto__,c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36095__auto__ = (function (){var statearr_38687 = f__36094__auto__.call(null);
(statearr_38687[(6)] = c__36093__auto__);

return statearr_38687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36095__auto__);
});})(c__36093__auto__,map__38444,map__38444__$1,opts,before_jsload,on_jsload,reload_dependents,map__38445,map__38445__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36093__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38750,link){
var map__38751 = p__38750;
var map__38751__$1 = (((((!((map__38751 == null))))?(((((map__38751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38751):map__38751);
var file = cljs.core.get.call(null,map__38751__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__38751,map__38751__$1,file){
return (function (p1__38748_SHARP_,p2__38749_SHARP_){
if(cljs.core._EQ_.call(null,p1__38748_SHARP_,p2__38749_SHARP_)){
return p1__38748_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__38751,map__38751__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38754){
var map__38755 = p__38754;
var map__38755__$1 = (((((!((map__38755 == null))))?(((((map__38755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38755):map__38755);
var match_length = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38753_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38753_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38757_SHARP_,p2__38758_SHARP_){
return cljs.core.assoc.call(null,p1__38757_SHARP_,cljs.core.get.call(null,p2__38758_SHARP_,key),p2__38758_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38759 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38759);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38759);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38760,p__38761){
var map__38762 = p__38760;
var map__38762__$1 = (((((!((map__38762 == null))))?(((((map__38762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38762):map__38762);
var on_cssload = cljs.core.get.call(null,map__38762__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38763 = p__38761;
var map__38763__$1 = (((((!((map__38763 == null))))?(((((map__38763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38763):map__38763);
var files_msg = map__38763__$1;
var files = cljs.core.get.call(null,map__38763__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1557851000552
