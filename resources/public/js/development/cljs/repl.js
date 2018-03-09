// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39327){
var map__39328 = p__39327;
var map__39328__$1 = ((((!((map__39328 == null)))?((((map__39328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39328):map__39328);
var m = map__39328__$1;
var n = cljs.core.get.call(null,map__39328__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39328__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39330_39352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39331_39353 = null;
var count__39332_39354 = (0);
var i__39333_39355 = (0);
while(true){
if((i__39333_39355 < count__39332_39354)){
var f_39356 = cljs.core._nth.call(null,chunk__39331_39353,i__39333_39355);
cljs.core.println.call(null,"  ",f_39356);

var G__39357 = seq__39330_39352;
var G__39358 = chunk__39331_39353;
var G__39359 = count__39332_39354;
var G__39360 = (i__39333_39355 + (1));
seq__39330_39352 = G__39357;
chunk__39331_39353 = G__39358;
count__39332_39354 = G__39359;
i__39333_39355 = G__39360;
continue;
} else {
var temp__5457__auto___39361 = cljs.core.seq.call(null,seq__39330_39352);
if(temp__5457__auto___39361){
var seq__39330_39362__$1 = temp__5457__auto___39361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39330_39362__$1)){
var c__31014__auto___39363 = cljs.core.chunk_first.call(null,seq__39330_39362__$1);
var G__39364 = cljs.core.chunk_rest.call(null,seq__39330_39362__$1);
var G__39365 = c__31014__auto___39363;
var G__39366 = cljs.core.count.call(null,c__31014__auto___39363);
var G__39367 = (0);
seq__39330_39352 = G__39364;
chunk__39331_39353 = G__39365;
count__39332_39354 = G__39366;
i__39333_39355 = G__39367;
continue;
} else {
var f_39368 = cljs.core.first.call(null,seq__39330_39362__$1);
cljs.core.println.call(null,"  ",f_39368);

var G__39369 = cljs.core.next.call(null,seq__39330_39362__$1);
var G__39370 = null;
var G__39371 = (0);
var G__39372 = (0);
seq__39330_39352 = G__39369;
chunk__39331_39353 = G__39370;
count__39332_39354 = G__39371;
i__39333_39355 = G__39372;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39373 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30083__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39373);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39373)))?cljs.core.second.call(null,arglists_39373):arglists_39373));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39334_39374 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39335_39375 = null;
var count__39336_39376 = (0);
var i__39337_39377 = (0);
while(true){
if((i__39337_39377 < count__39336_39376)){
var vec__39338_39378 = cljs.core._nth.call(null,chunk__39335_39375,i__39337_39377);
var name_39379 = cljs.core.nth.call(null,vec__39338_39378,(0),null);
var map__39341_39380 = cljs.core.nth.call(null,vec__39338_39378,(1),null);
var map__39341_39381__$1 = ((((!((map__39341_39380 == null)))?((((map__39341_39380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39341_39380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39341_39380):map__39341_39380);
var doc_39382 = cljs.core.get.call(null,map__39341_39381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39383 = cljs.core.get.call(null,map__39341_39381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39379);

cljs.core.println.call(null," ",arglists_39383);

if(cljs.core.truth_(doc_39382)){
cljs.core.println.call(null," ",doc_39382);
} else {
}

var G__39384 = seq__39334_39374;
var G__39385 = chunk__39335_39375;
var G__39386 = count__39336_39376;
var G__39387 = (i__39337_39377 + (1));
seq__39334_39374 = G__39384;
chunk__39335_39375 = G__39385;
count__39336_39376 = G__39386;
i__39337_39377 = G__39387;
continue;
} else {
var temp__5457__auto___39388 = cljs.core.seq.call(null,seq__39334_39374);
if(temp__5457__auto___39388){
var seq__39334_39389__$1 = temp__5457__auto___39388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39334_39389__$1)){
var c__31014__auto___39390 = cljs.core.chunk_first.call(null,seq__39334_39389__$1);
var G__39391 = cljs.core.chunk_rest.call(null,seq__39334_39389__$1);
var G__39392 = c__31014__auto___39390;
var G__39393 = cljs.core.count.call(null,c__31014__auto___39390);
var G__39394 = (0);
seq__39334_39374 = G__39391;
chunk__39335_39375 = G__39392;
count__39336_39376 = G__39393;
i__39337_39377 = G__39394;
continue;
} else {
var vec__39343_39395 = cljs.core.first.call(null,seq__39334_39389__$1);
var name_39396 = cljs.core.nth.call(null,vec__39343_39395,(0),null);
var map__39346_39397 = cljs.core.nth.call(null,vec__39343_39395,(1),null);
var map__39346_39398__$1 = ((((!((map__39346_39397 == null)))?((((map__39346_39397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39346_39397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39346_39397):map__39346_39397);
var doc_39399 = cljs.core.get.call(null,map__39346_39398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39400 = cljs.core.get.call(null,map__39346_39398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39396);

cljs.core.println.call(null," ",arglists_39400);

if(cljs.core.truth_(doc_39399)){
cljs.core.println.call(null," ",doc_39399);
} else {
}

var G__39401 = cljs.core.next.call(null,seq__39334_39389__$1);
var G__39402 = null;
var G__39403 = (0);
var G__39404 = (0);
seq__39334_39374 = G__39401;
chunk__39335_39375 = G__39402;
count__39336_39376 = G__39403;
i__39337_39377 = G__39404;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__39348 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39349 = null;
var count__39350 = (0);
var i__39351 = (0);
while(true){
if((i__39351 < count__39350)){
var role = cljs.core._nth.call(null,chunk__39349,i__39351);
var temp__5457__auto___39405__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39405__$1)){
var spec_39406 = temp__5457__auto___39405__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39406));
} else {
}

var G__39407 = seq__39348;
var G__39408 = chunk__39349;
var G__39409 = count__39350;
var G__39410 = (i__39351 + (1));
seq__39348 = G__39407;
chunk__39349 = G__39408;
count__39350 = G__39409;
i__39351 = G__39410;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39348);
if(temp__5457__auto____$1){
var seq__39348__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39348__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__39348__$1);
var G__39411 = cljs.core.chunk_rest.call(null,seq__39348__$1);
var G__39412 = c__31014__auto__;
var G__39413 = cljs.core.count.call(null,c__31014__auto__);
var G__39414 = (0);
seq__39348 = G__39411;
chunk__39349 = G__39412;
count__39350 = G__39413;
i__39351 = G__39414;
continue;
} else {
var role = cljs.core.first.call(null,seq__39348__$1);
var temp__5457__auto___39415__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39415__$2)){
var spec_39416 = temp__5457__auto___39415__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39416));
} else {
}

var G__39417 = cljs.core.next.call(null,seq__39348__$1);
var G__39418 = null;
var G__39419 = (0);
var G__39420 = (0);
seq__39348 = G__39417;
chunk__39349 = G__39418;
count__39350 = G__39419;
i__39351 = G__39420;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1520609268816
