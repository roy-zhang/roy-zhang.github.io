// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25853__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25854__i = 0, G__25854__a = new Array(arguments.length -  0);
while (G__25854__i < G__25854__a.length) {G__25854__a[G__25854__i] = arguments[G__25854__i + 0]; ++G__25854__i;}
  args = new cljs.core.IndexedSeq(G__25854__a,0,null);
} 
return G__25853__delegate.call(this,args);};
G__25853.cljs$lang$maxFixedArity = 0;
G__25853.cljs$lang$applyTo = (function (arglist__25855){
var args = cljs.core.seq(arglist__25855);
return G__25853__delegate(args);
});
G__25853.cljs$core$IFn$_invoke$arity$variadic = G__25853__delegate;
return G__25853;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25856__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25857__i = 0, G__25857__a = new Array(arguments.length -  0);
while (G__25857__i < G__25857__a.length) {G__25857__a[G__25857__i] = arguments[G__25857__i + 0]; ++G__25857__i;}
  args = new cljs.core.IndexedSeq(G__25857__a,0,null);
} 
return G__25856__delegate.call(this,args);};
G__25856.cljs$lang$maxFixedArity = 0;
G__25856.cljs$lang$applyTo = (function (arglist__25858){
var args = cljs.core.seq(arglist__25858);
return G__25856__delegate(args);
});
G__25856.cljs$core$IFn$_invoke$arity$variadic = G__25856__delegate;
return G__25856;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
