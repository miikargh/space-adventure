// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39615){if((e39615 instanceof Error)){
var e = e39615;
return "Error: Unable to stringify";
} else {
throw e39615;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39618 = arguments.length;
switch (G__39618) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39616_SHARP_){
if(typeof p1__39616_SHARP_ === 'string'){
return p1__39616_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39616_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39621 = arguments.length;
var i__31363__auto___39622 = (0);
while(true){
if((i__31363__auto___39622 < len__31362__auto___39621)){
args__31369__auto__.push((arguments[i__31363__auto___39622]));

var G__39623 = (i__31363__auto___39622 + (1));
i__31363__auto___39622 = G__39623;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39620){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39620));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39625 = arguments.length;
var i__31363__auto___39626 = (0);
while(true){
if((i__31363__auto___39626 < len__31362__auto___39625)){
args__31369__auto__.push((arguments[i__31363__auto___39626]));

var G__39627 = (i__31363__auto___39626 + (1));
i__31363__auto___39626 = G__39627;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39624){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39624));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39628){
var map__39629 = p__39628;
var map__39629__$1 = ((((!((map__39629 == null)))?((((map__39629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39629):map__39629);
var message = cljs.core.get.call(null,map__39629__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39629__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30083__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30071__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30071__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30071__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34602__auto___39708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34602__auto___39708,ch){
return (function (){
var f__34603__auto__ = (function (){var switch__34512__auto__ = ((function (c__34602__auto___39708,ch){
return (function (state_39680){
var state_val_39681 = (state_39680[(1)]);
if((state_val_39681 === (7))){
var inst_39676 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
var statearr_39682_39709 = state_39680__$1;
(statearr_39682_39709[(2)] = inst_39676);

(statearr_39682_39709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (1))){
var state_39680__$1 = state_39680;
var statearr_39683_39710 = state_39680__$1;
(statearr_39683_39710[(2)] = null);

(statearr_39683_39710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (4))){
var inst_39633 = (state_39680[(7)]);
var inst_39633__$1 = (state_39680[(2)]);
var state_39680__$1 = (function (){var statearr_39684 = state_39680;
(statearr_39684[(7)] = inst_39633__$1);

return statearr_39684;
})();
if(cljs.core.truth_(inst_39633__$1)){
var statearr_39685_39711 = state_39680__$1;
(statearr_39685_39711[(1)] = (5));

} else {
var statearr_39686_39712 = state_39680__$1;
(statearr_39686_39712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (15))){
var inst_39640 = (state_39680[(8)]);
var inst_39655 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39640);
var inst_39656 = cljs.core.first.call(null,inst_39655);
var inst_39657 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39656);
var inst_39658 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39657)].join('');
var inst_39659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39658);
var state_39680__$1 = state_39680;
var statearr_39687_39713 = state_39680__$1;
(statearr_39687_39713[(2)] = inst_39659);

(statearr_39687_39713[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (13))){
var inst_39664 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
var statearr_39688_39714 = state_39680__$1;
(statearr_39688_39714[(2)] = inst_39664);

(statearr_39688_39714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (6))){
var state_39680__$1 = state_39680;
var statearr_39689_39715 = state_39680__$1;
(statearr_39689_39715[(2)] = null);

(statearr_39689_39715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (17))){
var inst_39662 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
var statearr_39690_39716 = state_39680__$1;
(statearr_39690_39716[(2)] = inst_39662);

(statearr_39690_39716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (3))){
var inst_39678 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39680__$1,inst_39678);
} else {
if((state_val_39681 === (12))){
var inst_39639 = (state_39680[(9)]);
var inst_39653 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39639,opts);
var state_39680__$1 = state_39680;
if(cljs.core.truth_(inst_39653)){
var statearr_39691_39717 = state_39680__$1;
(statearr_39691_39717[(1)] = (15));

} else {
var statearr_39692_39718 = state_39680__$1;
(statearr_39692_39718[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (2))){
var state_39680__$1 = state_39680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39680__$1,(4),ch);
} else {
if((state_val_39681 === (11))){
var inst_39640 = (state_39680[(8)]);
var inst_39645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39646 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39640);
var inst_39647 = cljs.core.async.timeout.call(null,(1000));
var inst_39648 = [inst_39646,inst_39647];
var inst_39649 = (new cljs.core.PersistentVector(null,2,(5),inst_39645,inst_39648,null));
var state_39680__$1 = state_39680;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39680__$1,(14),inst_39649);
} else {
if((state_val_39681 === (9))){
var inst_39640 = (state_39680[(8)]);
var inst_39666 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39667 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39640);
var inst_39668 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39667);
var inst_39669 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39668)].join('');
var inst_39670 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39669);
var state_39680__$1 = (function (){var statearr_39693 = state_39680;
(statearr_39693[(10)] = inst_39666);

return statearr_39693;
})();
var statearr_39694_39719 = state_39680__$1;
(statearr_39694_39719[(2)] = inst_39670);

(statearr_39694_39719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (5))){
var inst_39633 = (state_39680[(7)]);
var inst_39635 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39636 = (new cljs.core.PersistentArrayMap(null,2,inst_39635,null));
var inst_39637 = (new cljs.core.PersistentHashSet(null,inst_39636,null));
var inst_39638 = figwheel.client.focus_msgs.call(null,inst_39637,inst_39633);
var inst_39639 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39638);
var inst_39640 = cljs.core.first.call(null,inst_39638);
var inst_39641 = figwheel.client.autoload_QMARK_.call(null);
var state_39680__$1 = (function (){var statearr_39695 = state_39680;
(statearr_39695[(9)] = inst_39639);

(statearr_39695[(8)] = inst_39640);

return statearr_39695;
})();
if(cljs.core.truth_(inst_39641)){
var statearr_39696_39720 = state_39680__$1;
(statearr_39696_39720[(1)] = (8));

} else {
var statearr_39697_39721 = state_39680__$1;
(statearr_39697_39721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (14))){
var inst_39651 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
var statearr_39698_39722 = state_39680__$1;
(statearr_39698_39722[(2)] = inst_39651);

(statearr_39698_39722[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (16))){
var state_39680__$1 = state_39680;
var statearr_39699_39723 = state_39680__$1;
(statearr_39699_39723[(2)] = null);

(statearr_39699_39723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (10))){
var inst_39672 = (state_39680[(2)]);
var state_39680__$1 = (function (){var statearr_39700 = state_39680;
(statearr_39700[(11)] = inst_39672);

return statearr_39700;
})();
var statearr_39701_39724 = state_39680__$1;
(statearr_39701_39724[(2)] = null);

(statearr_39701_39724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (8))){
var inst_39639 = (state_39680[(9)]);
var inst_39643 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39639,opts);
var state_39680__$1 = state_39680;
if(cljs.core.truth_(inst_39643)){
var statearr_39702_39725 = state_39680__$1;
(statearr_39702_39725[(1)] = (11));

} else {
var statearr_39703_39726 = state_39680__$1;
(statearr_39703_39726[(1)] = (12));

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
});})(c__34602__auto___39708,ch))
;
return ((function (switch__34512__auto__,c__34602__auto___39708,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34513__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34513__auto____0 = (function (){
var statearr_39704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39704[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34513__auto__);

(statearr_39704[(1)] = (1));

return statearr_39704;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34513__auto____1 = (function (state_39680){
while(true){
var ret_value__34514__auto__ = (function (){try{while(true){
var result__34515__auto__ = switch__34512__auto__.call(null,state_39680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34515__auto__;
}
break;
}
}catch (e39705){if((e39705 instanceof Object)){
var ex__34516__auto__ = e39705;
var statearr_39706_39727 = state_39680;
(statearr_39706_39727[(5)] = ex__34516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39728 = state_39680;
state_39680 = G__39728;
continue;
} else {
return ret_value__34514__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34513__auto__ = function(state_39680){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34513__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34513__auto____1.call(this,state_39680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34513__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34513__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34513__auto__;
})()
;})(switch__34512__auto__,c__34602__auto___39708,ch))
})();
var state__34604__auto__ = (function (){var statearr_39707 = f__34603__auto__.call(null);
(statearr_39707[(6)] = c__34602__auto___39708);

return statearr_39707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34604__auto__);
});})(c__34602__auto___39708,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39729_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39729_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39731 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39731){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39730){if((e39730 instanceof Error)){
var e = e39730;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39731], null));
} else {
var e = e39730;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39731))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39732){
var map__39733 = p__39732;
var map__39733__$1 = ((((!((map__39733 == null)))?((((map__39733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39733):map__39733);
var opts = map__39733__$1;
var build_id = cljs.core.get.call(null,map__39733__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39733,map__39733__$1,opts,build_id){
return (function (p__39735){
var vec__39736 = p__39735;
var seq__39737 = cljs.core.seq.call(null,vec__39736);
var first__39738 = cljs.core.first.call(null,seq__39737);
var seq__39737__$1 = cljs.core.next.call(null,seq__39737);
var map__39739 = first__39738;
var map__39739__$1 = ((((!((map__39739 == null)))?((((map__39739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39739):map__39739);
var msg = map__39739__$1;
var msg_name = cljs.core.get.call(null,map__39739__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39737__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39736,seq__39737,first__39738,seq__39737__$1,map__39739,map__39739__$1,msg,msg_name,_,map__39733,map__39733__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39736,seq__39737,first__39738,seq__39737__$1,map__39739,map__39739__$1,msg,msg_name,_,map__39733,map__39733__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39733,map__39733__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39741){
var vec__39742 = p__39741;
var seq__39743 = cljs.core.seq.call(null,vec__39742);
var first__39744 = cljs.core.first.call(null,seq__39743);
var seq__39743__$1 = cljs.core.next.call(null,seq__39743);
var map__39745 = first__39744;
var map__39745__$1 = ((((!((map__39745 == null)))?((((map__39745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39745):map__39745);
var msg = map__39745__$1;
var msg_name = cljs.core.get.call(null,map__39745__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39743__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39747){
var map__39748 = p__39747;
var map__39748__$1 = ((((!((map__39748 == null)))?((((map__39748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39748):map__39748);
var on_compile_warning = cljs.core.get.call(null,map__39748__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39748__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39748,map__39748__$1,on_compile_warning,on_compile_fail){
return (function (p__39750){
var vec__39751 = p__39750;
var seq__39752 = cljs.core.seq.call(null,vec__39751);
var first__39753 = cljs.core.first.call(null,seq__39752);
var seq__39752__$1 = cljs.core.next.call(null,seq__39752);
var map__39754 = first__39753;
var map__39754__$1 = ((((!((map__39754 == null)))?((((map__39754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39754):map__39754);
var msg = map__39754__$1;
var msg_name = cljs.core.get.call(null,map__39754__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39752__$1;
var pred__39756 = cljs.core._EQ_;
var expr__39757 = msg_name;
if(cljs.core.truth_(pred__39756.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39757))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39756.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39757))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39748,map__39748__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34602__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34603__auto__ = (function (){var switch__34512__auto__ = ((function (c__34602__auto__,msg_hist,msg_names,msg){
return (function (state_39846){
var state_val_39847 = (state_39846[(1)]);
if((state_val_39847 === (7))){
var inst_39766 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
if(cljs.core.truth_(inst_39766)){
var statearr_39848_39895 = state_39846__$1;
(statearr_39848_39895[(1)] = (8));

} else {
var statearr_39849_39896 = state_39846__$1;
(statearr_39849_39896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (20))){
var inst_39840 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39850_39897 = state_39846__$1;
(statearr_39850_39897[(2)] = inst_39840);

(statearr_39850_39897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (27))){
var inst_39836 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39851_39898 = state_39846__$1;
(statearr_39851_39898[(2)] = inst_39836);

(statearr_39851_39898[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (1))){
var inst_39759 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39846__$1 = state_39846;
if(cljs.core.truth_(inst_39759)){
var statearr_39852_39899 = state_39846__$1;
(statearr_39852_39899[(1)] = (2));

} else {
var statearr_39853_39900 = state_39846__$1;
(statearr_39853_39900[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (24))){
var inst_39838 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39854_39901 = state_39846__$1;
(statearr_39854_39901[(2)] = inst_39838);

(statearr_39854_39901[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (4))){
var inst_39844 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39846__$1,inst_39844);
} else {
if((state_val_39847 === (15))){
var inst_39842 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39855_39902 = state_39846__$1;
(statearr_39855_39902[(2)] = inst_39842);

(statearr_39855_39902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (21))){
var inst_39795 = (state_39846[(2)]);
var inst_39796 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39797 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39796);
var state_39846__$1 = (function (){var statearr_39856 = state_39846;
(statearr_39856[(7)] = inst_39795);

return statearr_39856;
})();
var statearr_39857_39903 = state_39846__$1;
(statearr_39857_39903[(2)] = inst_39797);

(statearr_39857_39903[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (31))){
var inst_39825 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39846__$1 = state_39846;
if(cljs.core.truth_(inst_39825)){
var statearr_39858_39904 = state_39846__$1;
(statearr_39858_39904[(1)] = (34));

} else {
var statearr_39859_39905 = state_39846__$1;
(statearr_39859_39905[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (32))){
var inst_39834 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39860_39906 = state_39846__$1;
(statearr_39860_39906[(2)] = inst_39834);

(statearr_39860_39906[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (33))){
var inst_39821 = (state_39846[(2)]);
var inst_39822 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39823 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39822);
var state_39846__$1 = (function (){var statearr_39861 = state_39846;
(statearr_39861[(8)] = inst_39821);

return statearr_39861;
})();
var statearr_39862_39907 = state_39846__$1;
(statearr_39862_39907[(2)] = inst_39823);

(statearr_39862_39907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (13))){
var inst_39780 = figwheel.client.heads_up.clear.call(null);
var state_39846__$1 = state_39846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(16),inst_39780);
} else {
if((state_val_39847 === (22))){
var inst_39801 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39802 = figwheel.client.heads_up.append_warning_message.call(null,inst_39801);
var state_39846__$1 = state_39846;
var statearr_39863_39908 = state_39846__$1;
(statearr_39863_39908[(2)] = inst_39802);

(statearr_39863_39908[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (36))){
var inst_39832 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39864_39909 = state_39846__$1;
(statearr_39864_39909[(2)] = inst_39832);

(statearr_39864_39909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (29))){
var inst_39812 = (state_39846[(2)]);
var inst_39813 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39814 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39813);
var state_39846__$1 = (function (){var statearr_39865 = state_39846;
(statearr_39865[(9)] = inst_39812);

return statearr_39865;
})();
var statearr_39866_39910 = state_39846__$1;
(statearr_39866_39910[(2)] = inst_39814);

(statearr_39866_39910[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (6))){
var inst_39761 = (state_39846[(10)]);
var state_39846__$1 = state_39846;
var statearr_39867_39911 = state_39846__$1;
(statearr_39867_39911[(2)] = inst_39761);

(statearr_39867_39911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (28))){
var inst_39808 = (state_39846[(2)]);
var inst_39809 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39810 = figwheel.client.heads_up.display_warning.call(null,inst_39809);
var state_39846__$1 = (function (){var statearr_39868 = state_39846;
(statearr_39868[(11)] = inst_39808);

return statearr_39868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(29),inst_39810);
} else {
if((state_val_39847 === (25))){
var inst_39806 = figwheel.client.heads_up.clear.call(null);
var state_39846__$1 = state_39846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(28),inst_39806);
} else {
if((state_val_39847 === (34))){
var inst_39827 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39846__$1 = state_39846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(37),inst_39827);
} else {
if((state_val_39847 === (17))){
var inst_39786 = (state_39846[(2)]);
var inst_39787 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39788 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39787);
var state_39846__$1 = (function (){var statearr_39869 = state_39846;
(statearr_39869[(12)] = inst_39786);

return statearr_39869;
})();
var statearr_39870_39912 = state_39846__$1;
(statearr_39870_39912[(2)] = inst_39788);

(statearr_39870_39912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (3))){
var inst_39778 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39846__$1 = state_39846;
if(cljs.core.truth_(inst_39778)){
var statearr_39871_39913 = state_39846__$1;
(statearr_39871_39913[(1)] = (13));

} else {
var statearr_39872_39914 = state_39846__$1;
(statearr_39872_39914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (12))){
var inst_39774 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39873_39915 = state_39846__$1;
(statearr_39873_39915[(2)] = inst_39774);

(statearr_39873_39915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (2))){
var inst_39761 = (state_39846[(10)]);
var inst_39761__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39846__$1 = (function (){var statearr_39874 = state_39846;
(statearr_39874[(10)] = inst_39761__$1);

return statearr_39874;
})();
if(cljs.core.truth_(inst_39761__$1)){
var statearr_39875_39916 = state_39846__$1;
(statearr_39875_39916[(1)] = (5));

} else {
var statearr_39876_39917 = state_39846__$1;
(statearr_39876_39917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (23))){
var inst_39804 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39846__$1 = state_39846;
if(cljs.core.truth_(inst_39804)){
var statearr_39877_39918 = state_39846__$1;
(statearr_39877_39918[(1)] = (25));

} else {
var statearr_39878_39919 = state_39846__$1;
(statearr_39878_39919[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (35))){
var state_39846__$1 = state_39846;
var statearr_39879_39920 = state_39846__$1;
(statearr_39879_39920[(2)] = null);

(statearr_39879_39920[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (19))){
var inst_39799 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39846__$1 = state_39846;
if(cljs.core.truth_(inst_39799)){
var statearr_39880_39921 = state_39846__$1;
(statearr_39880_39921[(1)] = (22));

} else {
var statearr_39881_39922 = state_39846__$1;
(statearr_39881_39922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (11))){
var inst_39770 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39882_39923 = state_39846__$1;
(statearr_39882_39923[(2)] = inst_39770);

(statearr_39882_39923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (9))){
var inst_39772 = figwheel.client.heads_up.clear.call(null);
var state_39846__$1 = state_39846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(12),inst_39772);
} else {
if((state_val_39847 === (5))){
var inst_39763 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39846__$1 = state_39846;
var statearr_39883_39924 = state_39846__$1;
(statearr_39883_39924[(2)] = inst_39763);

(statearr_39883_39924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (14))){
var inst_39790 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39846__$1 = state_39846;
if(cljs.core.truth_(inst_39790)){
var statearr_39884_39925 = state_39846__$1;
(statearr_39884_39925[(1)] = (18));

} else {
var statearr_39885_39926 = state_39846__$1;
(statearr_39885_39926[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (26))){
var inst_39816 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39846__$1 = state_39846;
if(cljs.core.truth_(inst_39816)){
var statearr_39886_39927 = state_39846__$1;
(statearr_39886_39927[(1)] = (30));

} else {
var statearr_39887_39928 = state_39846__$1;
(statearr_39887_39928[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (16))){
var inst_39782 = (state_39846[(2)]);
var inst_39783 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39784 = figwheel.client.heads_up.display_exception.call(null,inst_39783);
var state_39846__$1 = (function (){var statearr_39888 = state_39846;
(statearr_39888[(13)] = inst_39782);

return statearr_39888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(17),inst_39784);
} else {
if((state_val_39847 === (30))){
var inst_39818 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39819 = figwheel.client.heads_up.display_warning.call(null,inst_39818);
var state_39846__$1 = state_39846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(33),inst_39819);
} else {
if((state_val_39847 === (10))){
var inst_39776 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39889_39929 = state_39846__$1;
(statearr_39889_39929[(2)] = inst_39776);

(statearr_39889_39929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (18))){
var inst_39792 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39793 = figwheel.client.heads_up.display_exception.call(null,inst_39792);
var state_39846__$1 = state_39846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(21),inst_39793);
} else {
if((state_val_39847 === (37))){
var inst_39829 = (state_39846[(2)]);
var state_39846__$1 = state_39846;
var statearr_39890_39930 = state_39846__$1;
(statearr_39890_39930[(2)] = inst_39829);

(statearr_39890_39930[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39847 === (8))){
var inst_39768 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39846__$1 = state_39846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39846__$1,(11),inst_39768);
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
});})(c__34602__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34512__auto__,c__34602__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto____0 = (function (){
var statearr_39891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39891[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto__);

(statearr_39891[(1)] = (1));

return statearr_39891;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto____1 = (function (state_39846){
while(true){
var ret_value__34514__auto__ = (function (){try{while(true){
var result__34515__auto__ = switch__34512__auto__.call(null,state_39846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34515__auto__;
}
break;
}
}catch (e39892){if((e39892 instanceof Object)){
var ex__34516__auto__ = e39892;
var statearr_39893_39931 = state_39846;
(statearr_39893_39931[(5)] = ex__34516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39932 = state_39846;
state_39846 = G__39932;
continue;
} else {
return ret_value__34514__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto__ = function(state_39846){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto____1.call(this,state_39846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34513__auto__;
})()
;})(switch__34512__auto__,c__34602__auto__,msg_hist,msg_names,msg))
})();
var state__34604__auto__ = (function (){var statearr_39894 = f__34603__auto__.call(null);
(statearr_39894[(6)] = c__34602__auto__);

return statearr_39894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34604__auto__);
});})(c__34602__auto__,msg_hist,msg_names,msg))
);

return c__34602__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34602__auto___39961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34602__auto___39961,ch){
return (function (){
var f__34603__auto__ = (function (){var switch__34512__auto__ = ((function (c__34602__auto___39961,ch){
return (function (state_39947){
var state_val_39948 = (state_39947[(1)]);
if((state_val_39948 === (1))){
var state_39947__$1 = state_39947;
var statearr_39949_39962 = state_39947__$1;
(statearr_39949_39962[(2)] = null);

(statearr_39949_39962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39948 === (2))){
var state_39947__$1 = state_39947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39947__$1,(4),ch);
} else {
if((state_val_39948 === (3))){
var inst_39945 = (state_39947[(2)]);
var state_39947__$1 = state_39947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39947__$1,inst_39945);
} else {
if((state_val_39948 === (4))){
var inst_39935 = (state_39947[(7)]);
var inst_39935__$1 = (state_39947[(2)]);
var state_39947__$1 = (function (){var statearr_39950 = state_39947;
(statearr_39950[(7)] = inst_39935__$1);

return statearr_39950;
})();
if(cljs.core.truth_(inst_39935__$1)){
var statearr_39951_39963 = state_39947__$1;
(statearr_39951_39963[(1)] = (5));

} else {
var statearr_39952_39964 = state_39947__$1;
(statearr_39952_39964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39948 === (5))){
var inst_39935 = (state_39947[(7)]);
var inst_39937 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39935);
var state_39947__$1 = state_39947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39947__$1,(8),inst_39937);
} else {
if((state_val_39948 === (6))){
var state_39947__$1 = state_39947;
var statearr_39953_39965 = state_39947__$1;
(statearr_39953_39965[(2)] = null);

(statearr_39953_39965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39948 === (7))){
var inst_39943 = (state_39947[(2)]);
var state_39947__$1 = state_39947;
var statearr_39954_39966 = state_39947__$1;
(statearr_39954_39966[(2)] = inst_39943);

(statearr_39954_39966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39948 === (8))){
var inst_39939 = (state_39947[(2)]);
var state_39947__$1 = (function (){var statearr_39955 = state_39947;
(statearr_39955[(8)] = inst_39939);

return statearr_39955;
})();
var statearr_39956_39967 = state_39947__$1;
(statearr_39956_39967[(2)] = null);

(statearr_39956_39967[(1)] = (2));


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
});})(c__34602__auto___39961,ch))
;
return ((function (switch__34512__auto__,c__34602__auto___39961,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34513__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34513__auto____0 = (function (){
var statearr_39957 = [null,null,null,null,null,null,null,null,null];
(statearr_39957[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34513__auto__);

(statearr_39957[(1)] = (1));

return statearr_39957;
});
var figwheel$client$heads_up_plugin_$_state_machine__34513__auto____1 = (function (state_39947){
while(true){
var ret_value__34514__auto__ = (function (){try{while(true){
var result__34515__auto__ = switch__34512__auto__.call(null,state_39947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34515__auto__;
}
break;
}
}catch (e39958){if((e39958 instanceof Object)){
var ex__34516__auto__ = e39958;
var statearr_39959_39968 = state_39947;
(statearr_39959_39968[(5)] = ex__34516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39969 = state_39947;
state_39947 = G__39969;
continue;
} else {
return ret_value__34514__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34513__auto__ = function(state_39947){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34513__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34513__auto____1.call(this,state_39947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34513__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34513__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34513__auto__;
})()
;})(switch__34512__auto__,c__34602__auto___39961,ch))
})();
var state__34604__auto__ = (function (){var statearr_39960 = f__34603__auto__.call(null);
(statearr_39960[(6)] = c__34602__auto___39961);

return statearr_39960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34604__auto__);
});})(c__34602__auto___39961,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34602__auto__){
return (function (){
var f__34603__auto__ = (function (){var switch__34512__auto__ = ((function (c__34602__auto__){
return (function (state_39975){
var state_val_39976 = (state_39975[(1)]);
if((state_val_39976 === (1))){
var inst_39970 = cljs.core.async.timeout.call(null,(3000));
var state_39975__$1 = state_39975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39975__$1,(2),inst_39970);
} else {
if((state_val_39976 === (2))){
var inst_39972 = (state_39975[(2)]);
var inst_39973 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39975__$1 = (function (){var statearr_39977 = state_39975;
(statearr_39977[(7)] = inst_39972);

return statearr_39977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39975__$1,inst_39973);
} else {
return null;
}
}
});})(c__34602__auto__))
;
return ((function (switch__34512__auto__,c__34602__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34513__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34513__auto____0 = (function (){
var statearr_39978 = [null,null,null,null,null,null,null,null];
(statearr_39978[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34513__auto__);

(statearr_39978[(1)] = (1));

return statearr_39978;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34513__auto____1 = (function (state_39975){
while(true){
var ret_value__34514__auto__ = (function (){try{while(true){
var result__34515__auto__ = switch__34512__auto__.call(null,state_39975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34515__auto__;
}
break;
}
}catch (e39979){if((e39979 instanceof Object)){
var ex__34516__auto__ = e39979;
var statearr_39980_39982 = state_39975;
(statearr_39980_39982[(5)] = ex__34516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39983 = state_39975;
state_39975 = G__39983;
continue;
} else {
return ret_value__34514__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34513__auto__ = function(state_39975){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34513__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34513__auto____1.call(this,state_39975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34513__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34513__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34513__auto__;
})()
;})(switch__34512__auto__,c__34602__auto__))
})();
var state__34604__auto__ = (function (){var statearr_39981 = f__34603__auto__.call(null);
(statearr_39981[(6)] = c__34602__auto__);

return statearr_39981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34604__auto__);
});})(c__34602__auto__))
);

return c__34602__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34602__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34603__auto__ = (function (){var switch__34512__auto__ = ((function (c__34602__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39990){
var state_val_39991 = (state_39990[(1)]);
if((state_val_39991 === (1))){
var inst_39984 = cljs.core.async.timeout.call(null,(2000));
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39990__$1,(2),inst_39984);
} else {
if((state_val_39991 === (2))){
var inst_39986 = (state_39990[(2)]);
var inst_39987 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39988 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39987);
var state_39990__$1 = (function (){var statearr_39992 = state_39990;
(statearr_39992[(7)] = inst_39986);

return statearr_39992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39990__$1,inst_39988);
} else {
return null;
}
}
});})(c__34602__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34512__auto__,c__34602__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto____0 = (function (){
var statearr_39993 = [null,null,null,null,null,null,null,null];
(statearr_39993[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto__);

(statearr_39993[(1)] = (1));

return statearr_39993;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto____1 = (function (state_39990){
while(true){
var ret_value__34514__auto__ = (function (){try{while(true){
var result__34515__auto__ = switch__34512__auto__.call(null,state_39990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34515__auto__;
}
break;
}
}catch (e39994){if((e39994 instanceof Object)){
var ex__34516__auto__ = e39994;
var statearr_39995_39997 = state_39990;
(statearr_39995_39997[(5)] = ex__34516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39998 = state_39990;
state_39990 = G__39998;
continue;
} else {
return ret_value__34514__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto__ = function(state_39990){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto____1.call(this,state_39990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34513__auto__;
})()
;})(switch__34512__auto__,c__34602__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34604__auto__ = (function (){var statearr_39996 = f__34603__auto__.call(null);
(statearr_39996[(6)] = c__34602__auto__);

return statearr_39996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34604__auto__);
});})(c__34602__auto__,figwheel_version,temp__5457__auto__))
);

return c__34602__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39999){
var map__40000 = p__39999;
var map__40000__$1 = ((((!((map__40000 == null)))?((((map__40000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40000):map__40000);
var file = cljs.core.get.call(null,map__40000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40000__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40000__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40002 = "";
var G__40002__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40002),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40002);
var G__40002__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40002__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40002__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = line;
if(cljs.core.truth_(and__30071__auto__)){
return column;
} else {
return and__30071__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40002__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40002__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40003){
var map__40004 = p__40003;
var map__40004__$1 = ((((!((map__40004 == null)))?((((map__40004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40004):map__40004);
var ed = map__40004__$1;
var formatted_exception = cljs.core.get.call(null,map__40004__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40004__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40004__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40006_40010 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40007_40011 = null;
var count__40008_40012 = (0);
var i__40009_40013 = (0);
while(true){
if((i__40009_40013 < count__40008_40012)){
var msg_40014 = cljs.core._nth.call(null,chunk__40007_40011,i__40009_40013);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40014);

var G__40015 = seq__40006_40010;
var G__40016 = chunk__40007_40011;
var G__40017 = count__40008_40012;
var G__40018 = (i__40009_40013 + (1));
seq__40006_40010 = G__40015;
chunk__40007_40011 = G__40016;
count__40008_40012 = G__40017;
i__40009_40013 = G__40018;
continue;
} else {
var temp__5457__auto___40019 = cljs.core.seq.call(null,seq__40006_40010);
if(temp__5457__auto___40019){
var seq__40006_40020__$1 = temp__5457__auto___40019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40006_40020__$1)){
var c__31014__auto___40021 = cljs.core.chunk_first.call(null,seq__40006_40020__$1);
var G__40022 = cljs.core.chunk_rest.call(null,seq__40006_40020__$1);
var G__40023 = c__31014__auto___40021;
var G__40024 = cljs.core.count.call(null,c__31014__auto___40021);
var G__40025 = (0);
seq__40006_40010 = G__40022;
chunk__40007_40011 = G__40023;
count__40008_40012 = G__40024;
i__40009_40013 = G__40025;
continue;
} else {
var msg_40026 = cljs.core.first.call(null,seq__40006_40020__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40026);

var G__40027 = cljs.core.next.call(null,seq__40006_40020__$1);
var G__40028 = null;
var G__40029 = (0);
var G__40030 = (0);
seq__40006_40010 = G__40027;
chunk__40007_40011 = G__40028;
count__40008_40012 = G__40029;
i__40009_40013 = G__40030;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40031){
var map__40032 = p__40031;
var map__40032__$1 = ((((!((map__40032 == null)))?((((map__40032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40032):map__40032);
var w = map__40032__$1;
var message = cljs.core.get.call(null,map__40032__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30071__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30071__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40034 = cljs.core.seq.call(null,plugins);
var chunk__40035 = null;
var count__40036 = (0);
var i__40037 = (0);
while(true){
if((i__40037 < count__40036)){
var vec__40038 = cljs.core._nth.call(null,chunk__40035,i__40037);
var k = cljs.core.nth.call(null,vec__40038,(0),null);
var plugin = cljs.core.nth.call(null,vec__40038,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40044 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40034,chunk__40035,count__40036,i__40037,pl_40044,vec__40038,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40044.call(null,msg_hist);
});})(seq__40034,chunk__40035,count__40036,i__40037,pl_40044,vec__40038,k,plugin))
);
} else {
}

var G__40045 = seq__40034;
var G__40046 = chunk__40035;
var G__40047 = count__40036;
var G__40048 = (i__40037 + (1));
seq__40034 = G__40045;
chunk__40035 = G__40046;
count__40036 = G__40047;
i__40037 = G__40048;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40034);
if(temp__5457__auto__){
var seq__40034__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40034__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__40034__$1);
var G__40049 = cljs.core.chunk_rest.call(null,seq__40034__$1);
var G__40050 = c__31014__auto__;
var G__40051 = cljs.core.count.call(null,c__31014__auto__);
var G__40052 = (0);
seq__40034 = G__40049;
chunk__40035 = G__40050;
count__40036 = G__40051;
i__40037 = G__40052;
continue;
} else {
var vec__40041 = cljs.core.first.call(null,seq__40034__$1);
var k = cljs.core.nth.call(null,vec__40041,(0),null);
var plugin = cljs.core.nth.call(null,vec__40041,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40034,chunk__40035,count__40036,i__40037,pl_40053,vec__40041,k,plugin,seq__40034__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40053.call(null,msg_hist);
});})(seq__40034,chunk__40035,count__40036,i__40037,pl_40053,vec__40041,k,plugin,seq__40034__$1,temp__5457__auto__))
);
} else {
}

var G__40054 = cljs.core.next.call(null,seq__40034__$1);
var G__40055 = null;
var G__40056 = (0);
var G__40057 = (0);
seq__40034 = G__40054;
chunk__40035 = G__40055;
count__40036 = G__40056;
i__40037 = G__40057;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__40059 = arguments.length;
switch (G__40059) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40060_40065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40061_40066 = null;
var count__40062_40067 = (0);
var i__40063_40068 = (0);
while(true){
if((i__40063_40068 < count__40062_40067)){
var msg_40069 = cljs.core._nth.call(null,chunk__40061_40066,i__40063_40068);
figwheel.client.socket.handle_incoming_message.call(null,msg_40069);

var G__40070 = seq__40060_40065;
var G__40071 = chunk__40061_40066;
var G__40072 = count__40062_40067;
var G__40073 = (i__40063_40068 + (1));
seq__40060_40065 = G__40070;
chunk__40061_40066 = G__40071;
count__40062_40067 = G__40072;
i__40063_40068 = G__40073;
continue;
} else {
var temp__5457__auto___40074 = cljs.core.seq.call(null,seq__40060_40065);
if(temp__5457__auto___40074){
var seq__40060_40075__$1 = temp__5457__auto___40074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40060_40075__$1)){
var c__31014__auto___40076 = cljs.core.chunk_first.call(null,seq__40060_40075__$1);
var G__40077 = cljs.core.chunk_rest.call(null,seq__40060_40075__$1);
var G__40078 = c__31014__auto___40076;
var G__40079 = cljs.core.count.call(null,c__31014__auto___40076);
var G__40080 = (0);
seq__40060_40065 = G__40077;
chunk__40061_40066 = G__40078;
count__40062_40067 = G__40079;
i__40063_40068 = G__40080;
continue;
} else {
var msg_40081 = cljs.core.first.call(null,seq__40060_40075__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40081);

var G__40082 = cljs.core.next.call(null,seq__40060_40075__$1);
var G__40083 = null;
var G__40084 = (0);
var G__40085 = (0);
seq__40060_40065 = G__40082;
chunk__40061_40066 = G__40083;
count__40062_40067 = G__40084;
i__40063_40068 = G__40085;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31369__auto__ = [];
var len__31362__auto___40090 = arguments.length;
var i__31363__auto___40091 = (0);
while(true){
if((i__31363__auto___40091 < len__31362__auto___40090)){
args__31369__auto__.push((arguments[i__31363__auto___40091]));

var G__40092 = (i__31363__auto___40091 + (1));
i__31363__auto___40091 = G__40092;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40087){
var map__40088 = p__40087;
var map__40088__$1 = ((((!((map__40088 == null)))?((((map__40088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40088):map__40088);
var opts = map__40088__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40086){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40086));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40093){if((e40093 instanceof Error)){
var e = e40093;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40093;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40094){
var map__40095 = p__40094;
var map__40095__$1 = ((((!((map__40095 == null)))?((((map__40095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40095):map__40095);
var msg_name = cljs.core.get.call(null,map__40095__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1520609269567
