// Compiled by ClojureScript 1.10.439 {}
goog.provide('power_turtle.view.lessons');
goog.require('cljs.core');
goog.require('power_turtle.lesson_markdown');
goog.require('power_turtle.model');
goog.require('power_turtle.view.markdown');
goog.require('soda_ash.core');
power_turtle.view.lessons.li = (function power_turtle$view$lessons$li(tree,parent){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListSA,(function (){var iter__4434__auto__ = (function power_turtle$view$lessons$li_$_iter__32810(s__32811){
return (new cljs.core.LazySeq(null,(function (){
var s__32811__$1 = s__32811;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32811__$1);
if(temp__5720__auto__){
var s__32811__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32811__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__32811__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__32813 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__32812 = (0);
while(true){
if((i__32812 < size__4433__auto__)){
var vec__32814 = cljs.core._nth.call(null,c__4432__auto__,i__32812);
var lesson_name = cljs.core.nth.call(null,vec__32814,(0),null);
var lesson = cljs.core.nth.call(null,vec__32814,(1),null);
var folder_QMARK_ = cljs.core.map_QMARK_.call(null,lesson);
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lesson_name)].join('');
if(cljs.core.not_EQ_.call(null,lesson_name,"description.md")){
cljs.core.chunk_append.call(null,b__32813,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListItem,(((!(folder_QMARK_)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),((folder_QMARK_)?"folder":"file")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListHeader,lesson_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListDescription,((folder_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.markdown.render_markdown,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,lesson,"description.md")))], null):new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lesson)))], null),((folder_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.lessons.li,lesson,link], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)));

var G__32820 = (i__32812 + (1));
i__32812 = G__32820;
continue;
} else {
var G__32821 = (i__32812 + (1));
i__32812 = G__32821;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32813),power_turtle$view$lessons$li_$_iter__32810.call(null,cljs.core.chunk_rest.call(null,s__32811__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32813),null);
}
} else {
var vec__32817 = cljs.core.first.call(null,s__32811__$2);
var lesson_name = cljs.core.nth.call(null,vec__32817,(0),null);
var lesson = cljs.core.nth.call(null,vec__32817,(1),null);
var folder_QMARK_ = cljs.core.map_QMARK_.call(null,lesson);
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lesson_name)].join('');
if(cljs.core.not_EQ_.call(null,lesson_name,"description.md")){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListItem,(((!(folder_QMARK_)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),((folder_QMARK_)?"folder":"file")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListHeader,lesson_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListDescription,((folder_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.markdown.render_markdown,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,lesson,"description.md")))], null):new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lesson)))], null),((folder_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.lessons.li,lesson,link], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)),power_turtle$view$lessons$li_$_iter__32810.call(null,cljs.core.rest.call(null,s__32811__$2)));
} else {
var G__32822 = cljs.core.rest.call(null,s__32811__$2);
s__32811__$1 = G__32822;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,tree);
})()], null);
});
power_turtle.view.lessons.lessons_view = (function power_turtle$view$lessons$lessons_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.lessons.li,cljs.core.get.call(null,power_turtle.lesson_markdown.lessons,cljs.core.deref.call(null,power_turtle.model.current_language)),"#lesson"], null)], null);
});

//# sourceMappingURL=lessons.js.map?rel=1557850996947
