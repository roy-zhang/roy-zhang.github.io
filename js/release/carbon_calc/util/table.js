// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('carbon_calc.util.table');
goog.require('cljs.core');
goog.require('cljs.core.constants');
carbon_calc.util.table.extract_attr = (function carbon_calc$util$table$extract_attr(attr_blob,label_key,value){
if(cljs.core.fn_QMARK_(attr_blob)){
return (attr_blob.cljs$core$IFn$_invoke$arity$2 ? attr_blob.cljs$core$IFn$_invoke$arity$2(label_key,value) : attr_blob.call(null,label_key,value));
} else {
return attr_blob;

}
});
carbon_calc.util.table.if_nnil_apply = (function carbon_calc$util$table$if_nnil_apply(f,value){
if((f == null)){
return value;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));
}
});
carbon_calc.util.table.render_row = (function carbon_calc$util$table$render_row(cell_type,x_labels,tr_attrs,cell_attr,transform_value_fn,row){
var transform_value_fn__$1 = (((transform_value_fn == null))?(function (_,val){
return val;
}):transform_value_fn);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,tr_attrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (transform_value_fn__$1){
return (function (p__25725){
var vec__25726 = p__25725;
var label_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25726,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25726,(1),null);
var value = (row.cljs$core$IFn$_invoke$arity$1 ? row.cljs$core$IFn$_invoke$arity$1(label_key) : row.call(null,label_key));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_type,carbon_calc.util.table.extract_attr(cell_attr,label_key,value),(transform_value_fn__$1.cljs$core$IFn$_invoke$arity$2 ? transform_value_fn__$1.cljs$core$IFn$_invoke$arity$2(label_key,value) : transform_value_fn__$1.call(null,label_key,value))], null);
});})(transform_value_fn__$1))
,x_labels)], null);
});
carbon_calc.util.table.to_table1d = (function carbon_calc$util$table$to_table1d(var_args){
var G__25730 = arguments.length;
switch (G__25730) {
case 2:
return carbon_calc.util.table.to_table1d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carbon_calc.util.table.to_table1d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

carbon_calc.util.table.to_table1d.cljs$core$IFn$_invoke$arity$2 = (function (data,x_labels){
return carbon_calc.util.table.to_table1d.cljs$core$IFn$_invoke$arity$3(data,x_labels,null);
});

carbon_calc.util.table.to_table1d.cljs$core$IFn$_invoke$arity$3 = (function (data,x_labels,p__25731){
var map__25732 = p__25731;
var map__25732__$1 = (((((!((map__25732 == null))))?(((((map__25732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25732):map__25732);
var table_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,cljs.core.cst$kw$table_DASH_attrs);
var thead_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,cljs.core.cst$kw$thead_DASH_attrs);
var tbody_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,cljs.core.cst$kw$tbody_DASH_attrs);
var th_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,cljs.core.cst$kw$th_DASH_attrs);
var data_tr_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,cljs.core.cst$kw$data_DASH_tr_DASH_attrs);
var data_td_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,cljs.core.cst$kw$data_DASH_td_DASH_attrs);
var data_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,cljs.core.cst$kw$data_DASH_value_DASH_transform);
var show_head_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25732__$1,cljs.core.cst$kw$show_DASH_head_QMARK_);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.nil_QMARK_,cljs.core.map_QMARK_,cljs.core.fn_QMARK_),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_attrs,thead_attrs,tbody_attrs,th_attrs,data_tr_attrs,data_td_attrs,data_value_transform], null))){
} else {
throw (new Error("Assert failed: (every? (some-fn nil? map? fn?) [table-attrs thead-attrs tbody-attrs th-attrs data-tr-attrs data-td-attrs data-value-transform])"));
}

var x_labels__$1 = ((cljs.core.vector_QMARK_(x_labels))?cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),x_labels):x_labels);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,table_attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,thead_attrs,carbon_calc.util.table.render_row(cljs.core.cst$kw$th,(cljs.core.truth_(show_head_QMARK_)?x_labels__$1:null),null,th_attrs,null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,x_labels__$1)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,tbody_attrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(carbon_calc.util.table.render_row,cljs.core.cst$kw$td,x_labels__$1,data_tr_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_td_attrs,data_value_transform], 0)),data)], null)], null);
});

carbon_calc.util.table.to_table1d.cljs$lang$maxFixedArity = 3;

