// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1(container) : reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container));
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26292 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26293 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26293;

try{var G__26294 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__26295 = container;
var G__26296 = ((function (G__26294,G__26295,_STAR_always_update_STAR__orig_val__26292,_STAR_always_update_STAR__temp_val__26293){
return (function (){
var _STAR_always_update_STAR__orig_val__26297 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26298 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26298;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26297;
}});})(G__26294,G__26295,_STAR_always_update_STAR__orig_val__26292,_STAR_always_update_STAR__temp_val__26293))
;
return (reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3 ? reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3(G__26294,G__26295,G__26296) : reagent.dom.global$module$react_dom.render.call(null,G__26294,G__26295,G__26296));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26292;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__26300 = arguments.length;
switch (G__26300) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1(this$) : reagent.dom.global$module$react_dom.findDOMNode.call(null,this$));
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__26302_26306 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__26303_26307 = null;
var count__26304_26308 = (0);
var i__26305_26309 = (0);
while(true){
if((i__26305_26309 < count__26304_26308)){
var v_26310 = chunk__26303_26307.cljs$core$IIndexed$_nth$arity$2(null,i__26305_26309);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_26310);


var G__26311 = seq__26302_26306;
var G__26312 = chunk__26303_26307;
var G__26313 = count__26304_26308;
var G__26314 = (i__26305_26309 + (1));
seq__26302_26306 = G__26311;
chunk__26303_26307 = G__26312;
count__26304_26308 = G__26313;
i__26305_26309 = G__26314;
continue;
} else {
var temp__5720__auto___26315 = cljs.core.seq(seq__26302_26306);
if(temp__5720__auto___26315){
var seq__26302_26316__$1 = temp__5720__auto___26315;
if(cljs.core.chunked_seq_QMARK_(seq__26302_26316__$1)){
var c__4550__auto___26317 = cljs.core.chunk_first(seq__26302_26316__$1);
var G__26318 = cljs.core.chunk_rest(seq__26302_26316__$1);
var G__26319 = c__4550__auto___26317;
var G__26320 = cljs.core.count(c__4550__auto___26317);
var G__26321 = (0);
seq__26302_26306 = G__26318;
chunk__26303_26307 = G__26319;
count__26304_26308 = G__26320;
i__26305_26309 = G__26321;
continue;
} else {
var v_26322 = cljs.core.first(seq__26302_26316__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_26322);


var G__26323 = cljs.core.next(seq__26302_26316__$1);
var G__26324 = null;
var G__26325 = (0);
var G__26326 = (0);
seq__26302_26306 = G__26323;
chunk__26303_26307 = G__26324;
count__26304_26308 = G__26325;
i__26305_26309 = G__26326;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
