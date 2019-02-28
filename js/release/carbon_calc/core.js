// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('carbon_calc.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('carbon_calc.util.table');
carbon_calc.core.assumptions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$allowance_DASH_floor_DASH_price,16.77,cljs.core.cst$kw$offsets_DASH_cap,(8),cljs.core.cst$kw$offset_DASH_benefiting_DASH_oregon,(50),cljs.core.cst$kw$offset_DASH_discount,(20)], null));
carbon_calc.core.exempts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$nat_DASH_gas_DASH_mar,cljs.core.cst$kw$on_DASH_roa,cljs.core.cst$kw$oth_DASH_ele,cljs.core.cst$kw$non_DASH_roa,cljs.core.cst$kw$ele_DASH_uti,cljs.core.cst$kw$oth_DASH_poi_DASH_sou,cljs.core.cst$kw$dir_DASH_reg_DASH_man_DASH_poi_DASH_sou,cljs.core.cst$kw$nat_DASH_gas_DASH_uti,cljs.core.cst$kw$dir_DASH_ele_DASH_ser_DASH_sup],[false,false,true,false,false,false,false,false,false]));
carbon_calc.core.allowances = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$nat_DASH_gas_DASH_mar,cljs.core.cst$kw$on_DASH_roa,cljs.core.cst$kw$oth_DASH_ele,cljs.core.cst$kw$non_DASH_roa,cljs.core.cst$kw$ele_DASH_uti,cljs.core.cst$kw$oth_DASH_poi_DASH_sou,cljs.core.cst$kw$dir_DASH_reg_DASH_man_DASH_poi_DASH_sou,cljs.core.cst$kw$nat_DASH_gas_DASH_uti,cljs.core.cst$kw$dir_DASH_ele_DASH_ser_DASH_sup],[(0),(40),(0),(0),(4),(0),(100),(20),(0)]));
carbon_calc.core.totals = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
carbon_calc.core.assumed_emissions = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$nat_DASH_gas_DASH_mar,cljs.core.cst$kw$on_DASH_roa,cljs.core.cst$kw$oth_DASH_ele,cljs.core.cst$kw$non_DASH_roa,cljs.core.cst$kw$ele_DASH_uti,cljs.core.cst$kw$oth_DASH_poi_DASH_sou,cljs.core.cst$kw$dir_DASH_reg_DASH_man_DASH_poi_DASH_sou,cljs.core.cst$kw$nat_DASH_gas_DASH_uti,cljs.core.cst$kw$dir_DASH_ele_DASH_ser_DASH_sup],[1.02,20.73,3.46,4.25,13.33,0.99,2.54,4.1,0.72]);
carbon_calc.core.constants = cljs.core.assoc_in(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assumed_DASH_emissions,carbon_calc.core.assumed_emissions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assumed_DASH_emissions,cljs.core.cst$kw$total], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(carbon_calc.core.assumed_emissions)));
carbon_calc.core.assumptions_slider = (function carbon_calc$core$assumptions_slider(param,value,min,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(carbon_calc.core.assumptions,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$sum)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(carbon_calc.core.totals,cljs.core.assoc,cljs.core.cst$kw$sum,null);
} else {
return null;
}
})], null)], null);
});
carbon_calc.core.assumptions_table = (function carbon_calc$core$assumptions_table(){
var map__26401 = cljs.core.deref(carbon_calc.core.assumptions);
var map__26401__$1 = (((((!((map__26401 == null))))?(((((map__26401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26401):map__26401);
var assumptions = map__26401__$1;
var allowance_floor_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26401__$1,cljs.core.cst$kw$allowance_DASH_floor_DASH_price);
var offsets_cap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26401__$1,cljs.core.cst$kw$offsets_DASH_cap);
var offset_benefiting_oregon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26401__$1,cljs.core.cst$kw$offset_DASH_benefiting_DASH_oregon);
var offset_discount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26401__$1,cljs.core.cst$kw$offset_DASH_discount);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$legend,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Assumptions Table"], null)], null),carbon_calc.util.table.to_table1d.cljs$core$IFn$_invoke$arity$3((new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Allowance Reserve Floor Price, $/mmCO2e1   ($14.53 in 2018, projected to be $16.77 in 2021 in 2018 dollars)",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.assumptions_slider,cljs.core.cst$kw$allowance_DASH_floor_DASH_price,allowance_floor_price,(0),100.0], null),["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(allowance_floor_price),".00"].join('')], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Offsets Cap (relative to each entities' GHG emissions)",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.assumptions_slider,cljs.core.cst$kw$offsets_DASH_cap,offsets_cap,(0),(100)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(offsets_cap),"%"].join('')], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Offsets % that must directly benefit Oregon",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.assumptions_slider,cljs.core.cst$kw$offset_DASH_benefiting_DASH_oregon,offset_benefiting_oregon,(0),(100)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset_benefiting_oregon),"%"].join('')], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Offsets Price Discount Relative to Allowance Price",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.assumptions_slider,cljs.core.cst$kw$offset_DASH_discount,offset_discount,(0),(100)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset_discount),"%"].join('')], null),null,(1),null)),(2),null)),(3),null)),(4),null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"assumption",(1),"slider",(2),"value"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_head_QMARK_,false], null))], null);
});
carbon_calc.core.category_slider = (function carbon_calc$core$category_slider(param){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__26404 = cljs.core.deref(carbon_calc.core.allowances);
return (fexpr__26404.cljs$core$IFn$_invoke$arity$1 ? fexpr__26404.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26404.call(null,param));
})()),"%"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,(function (){var fexpr__26405 = cljs.core.deref(carbon_calc.core.allowances);
return (fexpr__26405.cljs$core$IFn$_invoke$arity$1 ? fexpr__26405.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26405.call(null,param));
})(),cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(100),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(carbon_calc.core.allowances,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$sum)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(carbon_calc.core.totals,cljs.core.assoc,cljs.core.cst$kw$sum,null);
} else {
return null;
}
})], null)], null)], null);
});
carbon_calc.core.switch_exempt = (function carbon_calc$core$switch_exempt(category){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(carbon_calc.core.exempts,cljs.core.update,category,cljs.core.not);
});
});
carbon_calc.core.category_checkbox = (function carbon_calc$core$category_checkbox(param){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__26407 = cljs.core.deref(carbon_calc.core.exempts);
return (fexpr__26407.cljs$core$IFn$_invoke$arity$1 ? fexpr__26407.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26407.call(null,param));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$value,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__26409 = cljs.core.deref(carbon_calc.core.exempts);
return (fexpr__26409.cljs$core$IFn$_invoke$arity$1 ? fexpr__26409.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26409.call(null,param));
})()),cljs.core.cst$kw$checked,(cljs.core.truth_((function (){var fexpr__26410 = cljs.core.deref(carbon_calc.core.exempts);
return (fexpr__26410.cljs$core$IFn$_invoke$arity$1 ? fexpr__26410.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26410.call(null,param));
})())?"checked":null),cljs.core.cst$kw$on_DASH_click,carbon_calc.core.switch_exempt(param)], null)], null)], null);
});
carbon_calc.core.comma_money = (function carbon_calc$core$comma_money(cash){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((3),cljs.core.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cash)))))));
});
carbon_calc.core.round_up = (function carbon_calc$core$round_up(num){
var i = (num | (0));
if(((num - i) > 0.5)){
return (i + (1));
} else {
return i;
}
});
carbon_calc.core.max_pot_revenue = (function carbon_calc$core$max_pot_revenue(param){
if(cljs.core.truth_((function (){var fexpr__26411 = cljs.core.deref(carbon_calc.core.exempts);
return (fexpr__26411.cljs$core$IFn$_invoke$arity$1 ? fexpr__26411.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26411.call(null,param));
})())){
return (0);
} else {
return carbon_calc.core.round_up((((function (){var G__26412 = cljs.core.cst$kw$assumed_DASH_emissions.cljs$core$IFn$_invoke$arity$1(carbon_calc.core.constants);
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__26412) : param.call(null,G__26412));
})() * (1000000)) * cljs.core.cst$kw$allowance_DASH_floor_DASH_price.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(carbon_calc.core.assumptions))));
}
});
carbon_calc.core.pot_rein_rev_lost = (function carbon_calc$core$pot_rein_rev_lost(param){
if(((cljs.core.not((function (){var fexpr__26417 = cljs.core.deref(carbon_calc.core.exempts);
return (fexpr__26417.cljs$core$IFn$_invoke$arity$1 ? fexpr__26417.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26417.call(null,param));
})())) && (((function (){var G__26419 = cljs.core.cst$kw$offset_DASH_discount;
var fexpr__26418 = cljs.core.deref(carbon_calc.core.assumptions);
return (fexpr__26418.cljs$core$IFn$_invoke$arity$1 ? fexpr__26418.cljs$core$IFn$_invoke$arity$1(G__26419) : fexpr__26418.call(null,G__26419));
})() > (0))) && (((function (){var fexpr__26420 = cljs.core.deref(carbon_calc.core.allowances);
return (fexpr__26420.cljs$core$IFn$_invoke$arity$1 ? fexpr__26420.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26420.call(null,param));
})() < (100))))){
return ((((function (){var G__26421 = cljs.core.cst$kw$assumed_DASH_emissions.cljs$core$IFn$_invoke$arity$1(carbon_calc.core.constants);
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__26421) : param.call(null,G__26421));
})() * (10000)) * (function (){var x__4222__auto__ = ((100) - (function (){var fexpr__26422 = cljs.core.deref(carbon_calc.core.allowances);
return (fexpr__26422.cljs$core$IFn$_invoke$arity$1 ? fexpr__26422.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26422.call(null,param));
})());
var y__4223__auto__ = (function (){var G__26424 = cljs.core.cst$kw$offsets_DASH_cap;
var fexpr__26423 = cljs.core.deref(carbon_calc.core.assumptions);
return (fexpr__26423.cljs$core$IFn$_invoke$arity$1 ? fexpr__26423.cljs$core$IFn$_invoke$arity$1(G__26424) : fexpr__26423.call(null,G__26424));
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()) * cljs.core.cst$kw$allowance_DASH_floor_DASH_price.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(carbon_calc.core.assumptions)));
} else {
return (0);
}
});
carbon_calc.core.rein_rev_lost = (function carbon_calc$core$rein_rev_lost(param){
if(cljs.core.truth_((function (){var fexpr__26425 = cljs.core.deref(carbon_calc.core.exempts);
return (fexpr__26425.cljs$core$IFn$_invoke$arity$1 ? fexpr__26425.cljs$core$IFn$_invoke$arity$1(param) : fexpr__26425.call(null,param));
})())){
return (0);
} else {
return ((((function (){var G__26426 = cljs.core.cst$kw$assumed_DASH_emissions.cljs$core$IFn$_invoke$arity$1(carbon_calc.core.constants);
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__26426) : param.call(null,G__26426));
})() * (function (){var G__26427 = cljs.core.deref(carbon_calc.core.allowances);
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__26427) : param.call(null,G__26427));
})()) * cljs.core.cst$kw$allowance_DASH_floor_DASH_price.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(carbon_calc.core.assumptions))) * (10000));
}
});
carbon_calc.core.all_cat_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$nat_DASH_gas_DASH_mar,null,cljs.core.cst$kw$on_DASH_roa,null,cljs.core.cst$kw$oth_DASH_ele,null,cljs.core.cst$kw$non_DASH_roa,null,cljs.core.cst$kw$ele_DASH_uti,null,cljs.core.cst$kw$oth_DASH_poi_DASH_sou,null,cljs.core.cst$kw$dir_DASH_reg_DASH_man_DASH_poi_DASH_sou,null,cljs.core.cst$kw$nat_DASH_gas_DASH_uti,null,cljs.core.cst$kw$dir_DASH_ele_DASH_ser_DASH_sup,null], null), null);
carbon_calc.core.total_cash_minus_special = (function carbon_calc$core$total_cash_minus_special(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26428_SHARP_){
return (carbon_calc.core.max_pot_revenue(p1__26428_SHARP_) - (carbon_calc.core.pot_rein_rev_lost(p1__26428_SHARP_) + carbon_calc.core.rein_rev_lost(p1__26428_SHARP_)));
}),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(carbon_calc.core.all_cat_keys,cljs.core.cst$kw$on_DASH_roa)));
});
carbon_calc.core.to_transport_decarb_account = (function carbon_calc$core$to_transport_decarb_account(){
return (carbon_calc.core.max_pot_revenue(cljs.core.cst$kw$on_DASH_roa) - carbon_calc.core.pot_rein_rev_lost(cljs.core.cst$kw$on_DASH_roa));
});
carbon_calc.core.big_total = (function carbon_calc$core$big_total(){
return (carbon_calc.core.total_cash_minus_special() + carbon_calc.core.to_transport_decarb_account());
});
carbon_calc.core.category_row = (function carbon_calc$core$category_row(name,cat_key){
var total = (carbon_calc.core.max_pot_revenue(cat_key) - (carbon_calc.core.pot_rein_rev_lost(cat_key) + carbon_calc.core.rein_rev_lost(cat_key)));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,(function (){var G__26429 = cljs.core.cst$kw$assumed_DASH_emissions.cljs$core$IFn$_invoke$arity$1(carbon_calc.core.constants);
return (cat_key.cljs$core$IFn$_invoke$arity$1 ? cat_key.cljs$core$IFn$_invoke$arity$1(G__26429) : cat_key.call(null,G__26429));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * ((function (){var G__26431 = cljs.core.cst$kw$assumed_DASH_emissions.cljs$core$IFn$_invoke$arity$1(carbon_calc.core.constants);
return (cat_key.cljs$core$IFn$_invoke$arity$1 ? cat_key.cljs$core$IFn$_invoke$arity$1(G__26431) : cat_key.call(null,G__26431));
})() / cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$assumed_DASH_emissions.cljs$core$IFn$_invoke$arity$1(carbon_calc.core.constants)))) | (0))),"%"].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.category_checkbox,cat_key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.category_slider,cat_key], null),carbon_calc.core.comma_money(carbon_calc.core.max_pot_revenue(cat_key)),carbon_calc.core.comma_money(carbon_calc.core.pot_rein_rev_lost(cat_key)),carbon_calc.core.comma_money(carbon_calc.core.rein_rev_lost(cat_key)),carbon_calc.core.comma_money(total),(0),carbon_calc.core.comma_money(total),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (total / carbon_calc.core.big_total())) | (0))),"%"].join('')], null);
});
carbon_calc.core.totals_row = (function carbon_calc$core$totals_row(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total Covered Emissions4",cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$assumed_DASH_emissions.cljs$core$IFn$_invoke$arity$1(carbon_calc.core.constants)),"100%","","",carbon_calc.core.comma_money(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(carbon_calc.core.max_pot_revenue,carbon_calc.core.all_cat_keys))),carbon_calc.core.comma_money(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(carbon_calc.core.pot_rein_rev_lost,carbon_calc.core.all_cat_keys))),carbon_calc.core.comma_money(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(carbon_calc.core.rein_rev_lost,carbon_calc.core.all_cat_keys))),carbon_calc.core.comma_money(carbon_calc.core.total_cash_minus_special()),carbon_calc.core.comma_money(carbon_calc.core.to_transport_decarb_account()),carbon_calc.core.comma_money(carbon_calc.core.big_total()),"100%"], null);
});
carbon_calc.core.category_table = (function carbon_calc$core$category_table(){
var a = (1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$legend,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Category Table"], null)], null),carbon_calc.util.table.to_table1d.cljs$core$IFn$_invoke$arity$3((new cljs.core.List(null,carbon_calc.core.category_row("Electric Utilities",cljs.core.cst$kw$ele_DASH_uti),(new cljs.core.List(null,carbon_calc.core.category_row("Direct Electricity Service Suppliers",cljs.core.cst$kw$dir_DASH_ele_DASH_ser_DASH_sup),(new cljs.core.List(null,carbon_calc.core.category_row("Other Electricity (exported out of state)",cljs.core.cst$kw$oth_DASH_ele),(new cljs.core.List(null,carbon_calc.core.category_row("Natural Gas Utilities",cljs.core.cst$kw$nat_DASH_gas_DASH_uti),(new cljs.core.List(null,carbon_calc.core.category_row("Natural Gas Marketers4",cljs.core.cst$kw$nat_DASH_gas_DASH_mar),(new cljs.core.List(null,carbon_calc.core.category_row("Directly Regulated Manufacturing Point Sources",cljs.core.cst$kw$dir_DASH_reg_DASH_man_DASH_poi_DASH_sou),(new cljs.core.List(null,carbon_calc.core.category_row("Other Points Sources (i.e., landfills, gas compressors)",cljs.core.cst$kw$oth_DASH_poi_DASH_sou),(new cljs.core.List(null,carbon_calc.core.category_row("Non-road Fuels",cljs.core.cst$kw$non_DASH_roa),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(carbon_calc.core.category_row("On-road Fuels",cljs.core.cst$kw$on_DASH_roa),(9),carbon_calc.core.comma_money(carbon_calc.core.to_transport_decarb_account())),(8),(0)),(new cljs.core.List(null,carbon_calc.core.totals_row(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"Emissions Covered by the Cap",(1),"2021 Assumed Emissions3 (in Million MTCo2r)",(2),"% of regulated emissions",(3),"Exempted from being Covered?",(4),"Free allowances allocated",(5),"Maximum Potential Revenue",(6),"Potential Reinvestment Revenues lost to Offsets",(7),"Reinvestment Revenues lost to Free Allowances",(8),"Proceeds to Climate Investment Fund",(9),"Proceeds to Transportation Decarbonization Account",(10),"Total Net Reinvestment Proceeds",(11),"% of total Proceeds"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_head_QMARK_,true], null))], null);
});
carbon_calc.core.home_page = (function carbon_calc$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Oregon Climate Action Plan (HB 2020)_Reinvestment Proceeds Estimates"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.assumptions_table], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.category_table], null)], null);
});
carbon_calc.core.mount_root = (function carbon_calc$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon_calc.core.home_page], null),document.getElementById("app"));
});
carbon_calc.core.init_BANG_ = (function carbon_calc$core$init_BANG_(){
return carbon_calc.core.mount_root();
});
