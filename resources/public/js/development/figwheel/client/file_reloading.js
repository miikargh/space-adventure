// Compiled by ClojureScript 1.9.946 {}
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
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
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
var or__30083__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30083__auto__){
return or__30083__auto__;
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
var or__30083__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
var or__30083__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30083__auto____$1)){
return or__30083__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37850_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37850_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
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
var seq__37851 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37852 = null;
var count__37853 = (0);
var i__37854 = (0);
while(true){
if((i__37854 < count__37853)){
var n = cljs.core._nth.call(null,chunk__37852,i__37854);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37855 = seq__37851;
var G__37856 = chunk__37852;
var G__37857 = count__37853;
var G__37858 = (i__37854 + (1));
seq__37851 = G__37855;
chunk__37852 = G__37856;
count__37853 = G__37857;
i__37854 = G__37858;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37851);
if(temp__5457__auto__){
var seq__37851__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37851__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__37851__$1);
var G__37859 = cljs.core.chunk_rest.call(null,seq__37851__$1);
var G__37860 = c__31014__auto__;
var G__37861 = cljs.core.count.call(null,c__31014__auto__);
var G__37862 = (0);
seq__37851 = G__37859;
chunk__37852 = G__37860;
count__37853 = G__37861;
i__37854 = G__37862;
continue;
} else {
var n = cljs.core.first.call(null,seq__37851__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37863 = cljs.core.next.call(null,seq__37851__$1);
var G__37864 = null;
var G__37865 = (0);
var G__37866 = (0);
seq__37851 = G__37863;
chunk__37852 = G__37864;
count__37853 = G__37865;
i__37854 = G__37866;
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
return cljs.core.some.call(null,(function (p__37867){
var vec__37868 = p__37867;
var _ = cljs.core.nth.call(null,vec__37868,(0),null);
var v = cljs.core.nth.call(null,vec__37868,(1),null);
var and__30071__auto__ = v;
if(cljs.core.truth_(and__30071__auto__)){
return v.call(null,dep);
} else {
return and__30071__auto__;
}
}),cljs.core.filter.call(null,(function (p__37871){
var vec__37872 = p__37871;
var k = cljs.core.nth.call(null,vec__37872,(0),null);
var v = cljs.core.nth.call(null,vec__37872,(1),null);
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

var seq__37884_37892 = cljs.core.seq.call(null,deps);
var chunk__37885_37893 = null;
var count__37886_37894 = (0);
var i__37887_37895 = (0);
while(true){
if((i__37887_37895 < count__37886_37894)){
var dep_37896 = cljs.core._nth.call(null,chunk__37885_37893,i__37887_37895);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_37896;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37896));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37896,(depth + (1)),state);
} else {
}

var G__37897 = seq__37884_37892;
var G__37898 = chunk__37885_37893;
var G__37899 = count__37886_37894;
var G__37900 = (i__37887_37895 + (1));
seq__37884_37892 = G__37897;
chunk__37885_37893 = G__37898;
count__37886_37894 = G__37899;
i__37887_37895 = G__37900;
continue;
} else {
var temp__5457__auto___37901 = cljs.core.seq.call(null,seq__37884_37892);
if(temp__5457__auto___37901){
var seq__37884_37902__$1 = temp__5457__auto___37901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37884_37902__$1)){
var c__31014__auto___37903 = cljs.core.chunk_first.call(null,seq__37884_37902__$1);
var G__37904 = cljs.core.chunk_rest.call(null,seq__37884_37902__$1);
var G__37905 = c__31014__auto___37903;
var G__37906 = cljs.core.count.call(null,c__31014__auto___37903);
var G__37907 = (0);
seq__37884_37892 = G__37904;
chunk__37885_37893 = G__37905;
count__37886_37894 = G__37906;
i__37887_37895 = G__37907;
continue;
} else {
var dep_37908 = cljs.core.first.call(null,seq__37884_37902__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_37908;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37908));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37908,(depth + (1)),state);
} else {
}

var G__37909 = cljs.core.next.call(null,seq__37884_37902__$1);
var G__37910 = null;
var G__37911 = (0);
var G__37912 = (0);
seq__37884_37892 = G__37909;
chunk__37885_37893 = G__37910;
count__37886_37894 = G__37911;
i__37887_37895 = G__37912;
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
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37888){
var vec__37889 = p__37888;
var seq__37890 = cljs.core.seq.call(null,vec__37889);
var first__37891 = cljs.core.first.call(null,seq__37890);
var seq__37890__$1 = cljs.core.next.call(null,seq__37890);
var x = first__37891;
var xs = seq__37890__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37889,seq__37890,first__37891,seq__37890__$1,x,xs,get_deps__$1){
return (function (p1__37875_SHARP_){
return clojure.set.difference.call(null,p1__37875_SHARP_,x);
});})(vec__37889,seq__37890,first__37891,seq__37890__$1,x,xs,get_deps__$1))
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
var seq__37913 = cljs.core.seq.call(null,provides);
var chunk__37914 = null;
var count__37915 = (0);
var i__37916 = (0);
while(true){
if((i__37916 < count__37915)){
var prov = cljs.core._nth.call(null,chunk__37914,i__37916);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37917_37925 = cljs.core.seq.call(null,requires);
var chunk__37918_37926 = null;
var count__37919_37927 = (0);
var i__37920_37928 = (0);
while(true){
if((i__37920_37928 < count__37919_37927)){
var req_37929 = cljs.core._nth.call(null,chunk__37918_37926,i__37920_37928);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37929,prov);

var G__37930 = seq__37917_37925;
var G__37931 = chunk__37918_37926;
var G__37932 = count__37919_37927;
var G__37933 = (i__37920_37928 + (1));
seq__37917_37925 = G__37930;
chunk__37918_37926 = G__37931;
count__37919_37927 = G__37932;
i__37920_37928 = G__37933;
continue;
} else {
var temp__5457__auto___37934 = cljs.core.seq.call(null,seq__37917_37925);
if(temp__5457__auto___37934){
var seq__37917_37935__$1 = temp__5457__auto___37934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37917_37935__$1)){
var c__31014__auto___37936 = cljs.core.chunk_first.call(null,seq__37917_37935__$1);
var G__37937 = cljs.core.chunk_rest.call(null,seq__37917_37935__$1);
var G__37938 = c__31014__auto___37936;
var G__37939 = cljs.core.count.call(null,c__31014__auto___37936);
var G__37940 = (0);
seq__37917_37925 = G__37937;
chunk__37918_37926 = G__37938;
count__37919_37927 = G__37939;
i__37920_37928 = G__37940;
continue;
} else {
var req_37941 = cljs.core.first.call(null,seq__37917_37935__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37941,prov);

var G__37942 = cljs.core.next.call(null,seq__37917_37935__$1);
var G__37943 = null;
var G__37944 = (0);
var G__37945 = (0);
seq__37917_37925 = G__37942;
chunk__37918_37926 = G__37943;
count__37919_37927 = G__37944;
i__37920_37928 = G__37945;
continue;
}
} else {
}
}
break;
}

var G__37946 = seq__37913;
var G__37947 = chunk__37914;
var G__37948 = count__37915;
var G__37949 = (i__37916 + (1));
seq__37913 = G__37946;
chunk__37914 = G__37947;
count__37915 = G__37948;
i__37916 = G__37949;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37913);
if(temp__5457__auto__){
var seq__37913__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37913__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__37913__$1);
var G__37950 = cljs.core.chunk_rest.call(null,seq__37913__$1);
var G__37951 = c__31014__auto__;
var G__37952 = cljs.core.count.call(null,c__31014__auto__);
var G__37953 = (0);
seq__37913 = G__37950;
chunk__37914 = G__37951;
count__37915 = G__37952;
i__37916 = G__37953;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37913__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37921_37954 = cljs.core.seq.call(null,requires);
var chunk__37922_37955 = null;
var count__37923_37956 = (0);
var i__37924_37957 = (0);
while(true){
if((i__37924_37957 < count__37923_37956)){
var req_37958 = cljs.core._nth.call(null,chunk__37922_37955,i__37924_37957);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37958,prov);

var G__37959 = seq__37921_37954;
var G__37960 = chunk__37922_37955;
var G__37961 = count__37923_37956;
var G__37962 = (i__37924_37957 + (1));
seq__37921_37954 = G__37959;
chunk__37922_37955 = G__37960;
count__37923_37956 = G__37961;
i__37924_37957 = G__37962;
continue;
} else {
var temp__5457__auto___37963__$1 = cljs.core.seq.call(null,seq__37921_37954);
if(temp__5457__auto___37963__$1){
var seq__37921_37964__$1 = temp__5457__auto___37963__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37921_37964__$1)){
var c__31014__auto___37965 = cljs.core.chunk_first.call(null,seq__37921_37964__$1);
var G__37966 = cljs.core.chunk_rest.call(null,seq__37921_37964__$1);
var G__37967 = c__31014__auto___37965;
var G__37968 = cljs.core.count.call(null,c__31014__auto___37965);
var G__37969 = (0);
seq__37921_37954 = G__37966;
chunk__37922_37955 = G__37967;
count__37923_37956 = G__37968;
i__37924_37957 = G__37969;
continue;
} else {
var req_37970 = cljs.core.first.call(null,seq__37921_37964__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37970,prov);

var G__37971 = cljs.core.next.call(null,seq__37921_37964__$1);
var G__37972 = null;
var G__37973 = (0);
var G__37974 = (0);
seq__37921_37954 = G__37971;
chunk__37922_37955 = G__37972;
count__37923_37956 = G__37973;
i__37924_37957 = G__37974;
continue;
}
} else {
}
}
break;
}

var G__37975 = cljs.core.next.call(null,seq__37913__$1);
var G__37976 = null;
var G__37977 = (0);
var G__37978 = (0);
seq__37913 = G__37975;
chunk__37914 = G__37976;
count__37915 = G__37977;
i__37916 = G__37978;
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
var seq__37979_37983 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37980_37984 = null;
var count__37981_37985 = (0);
var i__37982_37986 = (0);
while(true){
if((i__37982_37986 < count__37981_37985)){
var ns_37987 = cljs.core._nth.call(null,chunk__37980_37984,i__37982_37986);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37987);

var G__37988 = seq__37979_37983;
var G__37989 = chunk__37980_37984;
var G__37990 = count__37981_37985;
var G__37991 = (i__37982_37986 + (1));
seq__37979_37983 = G__37988;
chunk__37980_37984 = G__37989;
count__37981_37985 = G__37990;
i__37982_37986 = G__37991;
continue;
} else {
var temp__5457__auto___37992 = cljs.core.seq.call(null,seq__37979_37983);
if(temp__5457__auto___37992){
var seq__37979_37993__$1 = temp__5457__auto___37992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37979_37993__$1)){
var c__31014__auto___37994 = cljs.core.chunk_first.call(null,seq__37979_37993__$1);
var G__37995 = cljs.core.chunk_rest.call(null,seq__37979_37993__$1);
var G__37996 = c__31014__auto___37994;
var G__37997 = cljs.core.count.call(null,c__31014__auto___37994);
var G__37998 = (0);
seq__37979_37983 = G__37995;
chunk__37980_37984 = G__37996;
count__37981_37985 = G__37997;
i__37982_37986 = G__37998;
continue;
} else {
var ns_37999 = cljs.core.first.call(null,seq__37979_37993__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37999);

var G__38000 = cljs.core.next.call(null,seq__37979_37993__$1);
var G__38001 = null;
var G__38002 = (0);
var G__38003 = (0);
seq__37979_37983 = G__38000;
chunk__37980_37984 = G__38001;
count__37981_37985 = G__38002;
i__37982_37986 = G__38003;
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
goog.require_figwheel_backup_ = (function (){var or__30083__auto__ = goog.require__;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
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
var G__38004__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38005__i = 0, G__38005__a = new Array(arguments.length -  0);
while (G__38005__i < G__38005__a.length) {G__38005__a[G__38005__i] = arguments[G__38005__i + 0]; ++G__38005__i;}
  args = new cljs.core.IndexedSeq(G__38005__a,0,null);
} 
return G__38004__delegate.call(this,args);};
G__38004.cljs$lang$maxFixedArity = 0;
G__38004.cljs$lang$applyTo = (function (arglist__38006){
var args = cljs.core.seq(arglist__38006);
return G__38004__delegate(args);
});
G__38004.cljs$core$IFn$_invoke$arity$variadic = G__38004__delegate;
return G__38004;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__38007_SHARP_,p2__38008_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38007_SHARP_)].join('')),p2__38008_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__38009_SHARP_,p2__38010_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38009_SHARP_)].join(''),p2__38010_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38011 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38011.addCallback(((function (G__38011){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__38011))
);

G__38011.addErrback(((function (G__38011){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__38011))
);

return G__38011;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38012){if((e38012 instanceof Error)){
var e = e38012;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38012;

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
}catch (e38013){if((e38013 instanceof Error)){
var e = e38013;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38013;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38014 = cljs.core._EQ_;
var expr__38015 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38014.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38015))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__38014.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38015))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__38014.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38015))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__38014,expr__38015){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38014,expr__38015))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38017,callback){
var map__38018 = p__38017;
var map__38018__$1 = ((((!((map__38018 == null)))?((((map__38018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38018):map__38018);
var file_msg = map__38018__$1;
var request_url = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30083__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__38018,map__38018__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38018,map__38018__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
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
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34602__auto__){
return (function (){
var f__34603__auto__ = (function (){var switch__34512__auto__ = ((function (c__34602__auto__){
return (function (state_38058){
var state_val_38059 = (state_38058[(1)]);
if((state_val_38059 === (7))){
var inst_38054 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
var statearr_38060_38087 = state_38058__$1;
(statearr_38060_38087[(2)] = inst_38054);

(statearr_38060_38087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (1))){
var state_38058__$1 = state_38058;
var statearr_38061_38088 = state_38058__$1;
(statearr_38061_38088[(2)] = null);

(statearr_38061_38088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (4))){
var inst_38022 = (state_38058[(7)]);
var inst_38022__$1 = (state_38058[(2)]);
var state_38058__$1 = (function (){var statearr_38062 = state_38058;
(statearr_38062[(7)] = inst_38022__$1);

return statearr_38062;
})();
if(cljs.core.truth_(inst_38022__$1)){
var statearr_38063_38089 = state_38058__$1;
(statearr_38063_38089[(1)] = (5));

} else {
var statearr_38064_38090 = state_38058__$1;
(statearr_38064_38090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (15))){
var inst_38036 = (state_38058[(8)]);
var inst_38039 = (state_38058[(9)]);
var inst_38041 = inst_38039.call(null,inst_38036);
var state_38058__$1 = state_38058;
var statearr_38065_38091 = state_38058__$1;
(statearr_38065_38091[(2)] = inst_38041);

(statearr_38065_38091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (13))){
var inst_38048 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
var statearr_38066_38092 = state_38058__$1;
(statearr_38066_38092[(2)] = inst_38048);

(statearr_38066_38092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (6))){
var state_38058__$1 = state_38058;
var statearr_38067_38093 = state_38058__$1;
(statearr_38067_38093[(2)] = null);

(statearr_38067_38093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (17))){
var inst_38045 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
var statearr_38068_38094 = state_38058__$1;
(statearr_38068_38094[(2)] = inst_38045);

(statearr_38068_38094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (3))){
var inst_38056 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38058__$1,inst_38056);
} else {
if((state_val_38059 === (12))){
var state_38058__$1 = state_38058;
var statearr_38069_38095 = state_38058__$1;
(statearr_38069_38095[(2)] = null);

(statearr_38069_38095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (2))){
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38058__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38059 === (11))){
var inst_38027 = (state_38058[(10)]);
var inst_38034 = figwheel.client.file_reloading.blocking_load.call(null,inst_38027);
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38058__$1,(14),inst_38034);
} else {
if((state_val_38059 === (9))){
var inst_38027 = (state_38058[(10)]);
var state_38058__$1 = state_38058;
if(cljs.core.truth_(inst_38027)){
var statearr_38070_38096 = state_38058__$1;
(statearr_38070_38096[(1)] = (11));

} else {
var statearr_38071_38097 = state_38058__$1;
(statearr_38071_38097[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (5))){
var inst_38028 = (state_38058[(11)]);
var inst_38022 = (state_38058[(7)]);
var inst_38027 = cljs.core.nth.call(null,inst_38022,(0),null);
var inst_38028__$1 = cljs.core.nth.call(null,inst_38022,(1),null);
var state_38058__$1 = (function (){var statearr_38072 = state_38058;
(statearr_38072[(10)] = inst_38027);

(statearr_38072[(11)] = inst_38028__$1);

return statearr_38072;
})();
if(cljs.core.truth_(inst_38028__$1)){
var statearr_38073_38098 = state_38058__$1;
(statearr_38073_38098[(1)] = (8));

} else {
var statearr_38074_38099 = state_38058__$1;
(statearr_38074_38099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (14))){
var inst_38027 = (state_38058[(10)]);
var inst_38039 = (state_38058[(9)]);
var inst_38036 = (state_38058[(2)]);
var inst_38037 = console.log("Loading!",inst_38027);
var inst_38038 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38039__$1 = cljs.core.get.call(null,inst_38038,inst_38027);
var state_38058__$1 = (function (){var statearr_38075 = state_38058;
(statearr_38075[(8)] = inst_38036);

(statearr_38075[(12)] = inst_38037);

(statearr_38075[(9)] = inst_38039__$1);

return statearr_38075;
})();
if(cljs.core.truth_(inst_38039__$1)){
var statearr_38076_38100 = state_38058__$1;
(statearr_38076_38100[(1)] = (15));

} else {
var statearr_38077_38101 = state_38058__$1;
(statearr_38077_38101[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (16))){
var inst_38036 = (state_38058[(8)]);
var inst_38043 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38036);
var state_38058__$1 = state_38058;
var statearr_38078_38102 = state_38058__$1;
(statearr_38078_38102[(2)] = inst_38043);

(statearr_38078_38102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (10))){
var inst_38050 = (state_38058[(2)]);
var state_38058__$1 = (function (){var statearr_38079 = state_38058;
(statearr_38079[(13)] = inst_38050);

return statearr_38079;
})();
var statearr_38080_38103 = state_38058__$1;
(statearr_38080_38103[(2)] = null);

(statearr_38080_38103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (8))){
var inst_38028 = (state_38058[(11)]);
var inst_38030 = console.log("Evaling!",inst_38028);
var inst_38031 = eval(inst_38028);
var state_38058__$1 = (function (){var statearr_38081 = state_38058;
(statearr_38081[(14)] = inst_38030);

return statearr_38081;
})();
var statearr_38082_38104 = state_38058__$1;
(statearr_38082_38104[(2)] = inst_38031);

(statearr_38082_38104[(1)] = (10));


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
});})(c__34602__auto__))
;
return ((function (switch__34512__auto__,c__34602__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34513__auto__ = null;
var figwheel$client$file_reloading$state_machine__34513__auto____0 = (function (){
var statearr_38083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38083[(0)] = figwheel$client$file_reloading$state_machine__34513__auto__);

(statearr_38083[(1)] = (1));

return statearr_38083;
});
var figwheel$client$file_reloading$state_machine__34513__auto____1 = (function (state_38058){
while(true){
var ret_value__34514__auto__ = (function (){try{while(true){
var result__34515__auto__ = switch__34512__auto__.call(null,state_38058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34515__auto__;
}
break;
}
}catch (e38084){if((e38084 instanceof Object)){
var ex__34516__auto__ = e38084;
var statearr_38085_38105 = state_38058;
(statearr_38085_38105[(5)] = ex__34516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38106 = state_38058;
state_38058 = G__38106;
continue;
} else {
return ret_value__34514__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34513__auto__ = function(state_38058){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34513__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34513__auto____1.call(this,state_38058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34513__auto____0;
figwheel$client$file_reloading$state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34513__auto____1;
return figwheel$client$file_reloading$state_machine__34513__auto__;
})()
;})(switch__34512__auto__,c__34602__auto__))
})();
var state__34604__auto__ = (function (){var statearr_38086 = f__34603__auto__.call(null);
(statearr_38086[(6)] = c__34602__auto__);

return statearr_38086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34604__auto__);
});})(c__34602__auto__))
);

return c__34602__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38108 = arguments.length;
switch (G__38108) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38110,callback){
var map__38111 = p__38110;
var map__38111__$1 = ((((!((map__38111 == null)))?((((map__38111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38111):map__38111);
var file_msg = map__38111__$1;
var namespace = cljs.core.get.call(null,map__38111__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38111,map__38111__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38111,map__38111__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38113){
var map__38114 = p__38113;
var map__38114__$1 = ((((!((map__38114 == null)))?((((map__38114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38114):map__38114);
var file_msg = map__38114__$1;
var namespace = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38116){
var map__38117 = p__38116;
var map__38117__$1 = ((((!((map__38117 == null)))?((((map__38117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38117):map__38117);
var file_msg = map__38117__$1;
var namespace = cljs.core.get.call(null,map__38117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30071__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30071__auto__){
var or__30083__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
var or__30083__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30083__auto____$1)){
return or__30083__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30071__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38119,callback){
var map__38120 = p__38119;
var map__38120__$1 = ((((!((map__38120 == null)))?((((map__38120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38120):map__38120);
var file_msg = map__38120__$1;
var request_url = cljs.core.get.call(null,map__38120__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38120__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34602__auto___38170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34602__auto___38170,out){
return (function (){
var f__34603__auto__ = (function (){var switch__34512__auto__ = ((function (c__34602__auto___38170,out){
return (function (state_38155){
var state_val_38156 = (state_38155[(1)]);
if((state_val_38156 === (1))){
var inst_38129 = cljs.core.seq.call(null,files);
var inst_38130 = cljs.core.first.call(null,inst_38129);
var inst_38131 = cljs.core.next.call(null,inst_38129);
var inst_38132 = files;
var state_38155__$1 = (function (){var statearr_38157 = state_38155;
(statearr_38157[(7)] = inst_38130);

(statearr_38157[(8)] = inst_38131);

(statearr_38157[(9)] = inst_38132);

return statearr_38157;
})();
var statearr_38158_38171 = state_38155__$1;
(statearr_38158_38171[(2)] = null);

(statearr_38158_38171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (2))){
var inst_38132 = (state_38155[(9)]);
var inst_38138 = (state_38155[(10)]);
var inst_38137 = cljs.core.seq.call(null,inst_38132);
var inst_38138__$1 = cljs.core.first.call(null,inst_38137);
var inst_38139 = cljs.core.next.call(null,inst_38137);
var inst_38140 = (inst_38138__$1 == null);
var inst_38141 = cljs.core.not.call(null,inst_38140);
var state_38155__$1 = (function (){var statearr_38159 = state_38155;
(statearr_38159[(11)] = inst_38139);

(statearr_38159[(10)] = inst_38138__$1);

return statearr_38159;
})();
if(inst_38141){
var statearr_38160_38172 = state_38155__$1;
(statearr_38160_38172[(1)] = (4));

} else {
var statearr_38161_38173 = state_38155__$1;
(statearr_38161_38173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (3))){
var inst_38153 = (state_38155[(2)]);
var state_38155__$1 = state_38155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38155__$1,inst_38153);
} else {
if((state_val_38156 === (4))){
var inst_38138 = (state_38155[(10)]);
var inst_38143 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38138);
var state_38155__$1 = state_38155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38155__$1,(7),inst_38143);
} else {
if((state_val_38156 === (5))){
var inst_38149 = cljs.core.async.close_BANG_.call(null,out);
var state_38155__$1 = state_38155;
var statearr_38162_38174 = state_38155__$1;
(statearr_38162_38174[(2)] = inst_38149);

(statearr_38162_38174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (6))){
var inst_38151 = (state_38155[(2)]);
var state_38155__$1 = state_38155;
var statearr_38163_38175 = state_38155__$1;
(statearr_38163_38175[(2)] = inst_38151);

(statearr_38163_38175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (7))){
var inst_38139 = (state_38155[(11)]);
var inst_38145 = (state_38155[(2)]);
var inst_38146 = cljs.core.async.put_BANG_.call(null,out,inst_38145);
var inst_38132 = inst_38139;
var state_38155__$1 = (function (){var statearr_38164 = state_38155;
(statearr_38164[(12)] = inst_38146);

(statearr_38164[(9)] = inst_38132);

return statearr_38164;
})();
var statearr_38165_38176 = state_38155__$1;
(statearr_38165_38176[(2)] = null);

(statearr_38165_38176[(1)] = (2));


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
});})(c__34602__auto___38170,out))
;
return ((function (switch__34512__auto__,c__34602__auto___38170,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto____0 = (function (){
var statearr_38166 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38166[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto__);

(statearr_38166[(1)] = (1));

return statearr_38166;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto____1 = (function (state_38155){
while(true){
var ret_value__34514__auto__ = (function (){try{while(true){
var result__34515__auto__ = switch__34512__auto__.call(null,state_38155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34515__auto__;
}
break;
}
}catch (e38167){if((e38167 instanceof Object)){
var ex__34516__auto__ = e38167;
var statearr_38168_38177 = state_38155;
(statearr_38168_38177[(5)] = ex__34516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38178 = state_38155;
state_38155 = G__38178;
continue;
} else {
return ret_value__34514__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto__ = function(state_38155){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto____1.call(this,state_38155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34513__auto__;
})()
;})(switch__34512__auto__,c__34602__auto___38170,out))
})();
var state__34604__auto__ = (function (){var statearr_38169 = f__34603__auto__.call(null);
(statearr_38169[(6)] = c__34602__auto___38170);

return statearr_38169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34604__auto__);
});})(c__34602__auto___38170,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38179,opts){
var map__38180 = p__38179;
var map__38180__$1 = ((((!((map__38180 == null)))?((((map__38180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38180):map__38180);
var eval_body = cljs.core.get.call(null,map__38180__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38180__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30071__auto__ = eval_body;
if(cljs.core.truth_(and__30071__auto__)){
return typeof eval_body === 'string';
} else {
return and__30071__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38182){var e = e38182;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38183_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38183_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
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
return cljs.core.map.call(null,(function (p__38184){
var vec__38185 = p__38184;
var k = cljs.core.nth.call(null,vec__38185,(0),null);
var v = cljs.core.nth.call(null,vec__38185,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38188){
var vec__38189 = p__38188;
var k = cljs.core.nth.call(null,vec__38189,(0),null);
var v = cljs.core.nth.call(null,vec__38189,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38195,p__38196){
var map__38197 = p__38195;
var map__38197__$1 = ((((!((map__38197 == null)))?((((map__38197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38197):map__38197);
var opts = map__38197__$1;
var before_jsload = cljs.core.get.call(null,map__38197__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38197__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38197__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38198 = p__38196;
var map__38198__$1 = ((((!((map__38198 == null)))?((((map__38198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38198):map__38198);
var msg = map__38198__$1;
var files = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34603__auto__ = (function (){var switch__34512__auto__ = ((function (c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38352){
var state_val_38353 = (state_38352[(1)]);
if((state_val_38353 === (7))){
var inst_38215 = (state_38352[(7)]);
var inst_38213 = (state_38352[(8)]);
var inst_38214 = (state_38352[(9)]);
var inst_38212 = (state_38352[(10)]);
var inst_38220 = cljs.core._nth.call(null,inst_38213,inst_38215);
var inst_38221 = figwheel.client.file_reloading.eval_body.call(null,inst_38220,opts);
var inst_38222 = (inst_38215 + (1));
var tmp38354 = inst_38213;
var tmp38355 = inst_38214;
var tmp38356 = inst_38212;
var inst_38212__$1 = tmp38356;
var inst_38213__$1 = tmp38354;
var inst_38214__$1 = tmp38355;
var inst_38215__$1 = inst_38222;
var state_38352__$1 = (function (){var statearr_38357 = state_38352;
(statearr_38357[(11)] = inst_38221);

(statearr_38357[(7)] = inst_38215__$1);

(statearr_38357[(8)] = inst_38213__$1);

(statearr_38357[(9)] = inst_38214__$1);

(statearr_38357[(10)] = inst_38212__$1);

return statearr_38357;
})();
var statearr_38358_38441 = state_38352__$1;
(statearr_38358_38441[(2)] = null);

(statearr_38358_38441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (20))){
var inst_38255 = (state_38352[(12)]);
var inst_38263 = figwheel.client.file_reloading.sort_files.call(null,inst_38255);
var state_38352__$1 = state_38352;
var statearr_38359_38442 = state_38352__$1;
(statearr_38359_38442[(2)] = inst_38263);

(statearr_38359_38442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (27))){
var state_38352__$1 = state_38352;
var statearr_38360_38443 = state_38352__$1;
(statearr_38360_38443[(2)] = null);

(statearr_38360_38443[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (1))){
var inst_38204 = (state_38352[(13)]);
var inst_38201 = before_jsload.call(null,files);
var inst_38202 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38203 = (function (){return ((function (inst_38204,inst_38201,inst_38202,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38192_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38192_SHARP_);
});
;})(inst_38204,inst_38201,inst_38202,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38204__$1 = cljs.core.filter.call(null,inst_38203,files);
var inst_38205 = cljs.core.not_empty.call(null,inst_38204__$1);
var state_38352__$1 = (function (){var statearr_38361 = state_38352;
(statearr_38361[(14)] = inst_38201);

(statearr_38361[(13)] = inst_38204__$1);

(statearr_38361[(15)] = inst_38202);

return statearr_38361;
})();
if(cljs.core.truth_(inst_38205)){
var statearr_38362_38444 = state_38352__$1;
(statearr_38362_38444[(1)] = (2));

} else {
var statearr_38363_38445 = state_38352__$1;
(statearr_38363_38445[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (24))){
var state_38352__$1 = state_38352;
var statearr_38364_38446 = state_38352__$1;
(statearr_38364_38446[(2)] = null);

(statearr_38364_38446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (39))){
var inst_38305 = (state_38352[(16)]);
var state_38352__$1 = state_38352;
var statearr_38365_38447 = state_38352__$1;
(statearr_38365_38447[(2)] = inst_38305);

(statearr_38365_38447[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (46))){
var inst_38347 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
var statearr_38366_38448 = state_38352__$1;
(statearr_38366_38448[(2)] = inst_38347);

(statearr_38366_38448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (4))){
var inst_38249 = (state_38352[(2)]);
var inst_38250 = cljs.core.List.EMPTY;
var inst_38251 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38250);
var inst_38252 = (function (){return ((function (inst_38249,inst_38250,inst_38251,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38193_SHARP_){
var and__30071__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38193_SHARP_);
if(cljs.core.truth_(and__30071__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38193_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38193_SHARP_)));
} else {
return and__30071__auto__;
}
});
;})(inst_38249,inst_38250,inst_38251,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38253 = cljs.core.filter.call(null,inst_38252,files);
var inst_38254 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38255 = cljs.core.concat.call(null,inst_38253,inst_38254);
var state_38352__$1 = (function (){var statearr_38367 = state_38352;
(statearr_38367[(17)] = inst_38251);

(statearr_38367[(12)] = inst_38255);

(statearr_38367[(18)] = inst_38249);

return statearr_38367;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38368_38449 = state_38352__$1;
(statearr_38368_38449[(1)] = (16));

} else {
var statearr_38369_38450 = state_38352__$1;
(statearr_38369_38450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (15))){
var inst_38239 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
var statearr_38370_38451 = state_38352__$1;
(statearr_38370_38451[(2)] = inst_38239);

(statearr_38370_38451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (21))){
var inst_38265 = (state_38352[(19)]);
var inst_38265__$1 = (state_38352[(2)]);
var inst_38266 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38265__$1);
var state_38352__$1 = (function (){var statearr_38371 = state_38352;
(statearr_38371[(19)] = inst_38265__$1);

return statearr_38371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38352__$1,(22),inst_38266);
} else {
if((state_val_38353 === (31))){
var inst_38350 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38352__$1,inst_38350);
} else {
if((state_val_38353 === (32))){
var inst_38305 = (state_38352[(16)]);
var inst_38310 = inst_38305.cljs$lang$protocol_mask$partition0$;
var inst_38311 = (inst_38310 & (64));
var inst_38312 = inst_38305.cljs$core$ISeq$;
var inst_38313 = (cljs.core.PROTOCOL_SENTINEL === inst_38312);
var inst_38314 = (inst_38311) || (inst_38313);
var state_38352__$1 = state_38352;
if(cljs.core.truth_(inst_38314)){
var statearr_38372_38452 = state_38352__$1;
(statearr_38372_38452[(1)] = (35));

} else {
var statearr_38373_38453 = state_38352__$1;
(statearr_38373_38453[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (40))){
var inst_38327 = (state_38352[(20)]);
var inst_38326 = (state_38352[(2)]);
var inst_38327__$1 = cljs.core.get.call(null,inst_38326,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38328 = cljs.core.get.call(null,inst_38326,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38329 = cljs.core.not_empty.call(null,inst_38327__$1);
var state_38352__$1 = (function (){var statearr_38374 = state_38352;
(statearr_38374[(21)] = inst_38328);

(statearr_38374[(20)] = inst_38327__$1);

return statearr_38374;
})();
if(cljs.core.truth_(inst_38329)){
var statearr_38375_38454 = state_38352__$1;
(statearr_38375_38454[(1)] = (41));

} else {
var statearr_38376_38455 = state_38352__$1;
(statearr_38376_38455[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (33))){
var state_38352__$1 = state_38352;
var statearr_38377_38456 = state_38352__$1;
(statearr_38377_38456[(2)] = false);

(statearr_38377_38456[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (13))){
var inst_38225 = (state_38352[(22)]);
var inst_38229 = cljs.core.chunk_first.call(null,inst_38225);
var inst_38230 = cljs.core.chunk_rest.call(null,inst_38225);
var inst_38231 = cljs.core.count.call(null,inst_38229);
var inst_38212 = inst_38230;
var inst_38213 = inst_38229;
var inst_38214 = inst_38231;
var inst_38215 = (0);
var state_38352__$1 = (function (){var statearr_38378 = state_38352;
(statearr_38378[(7)] = inst_38215);

(statearr_38378[(8)] = inst_38213);

(statearr_38378[(9)] = inst_38214);

(statearr_38378[(10)] = inst_38212);

return statearr_38378;
})();
var statearr_38379_38457 = state_38352__$1;
(statearr_38379_38457[(2)] = null);

(statearr_38379_38457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (22))){
var inst_38273 = (state_38352[(23)]);
var inst_38269 = (state_38352[(24)]);
var inst_38265 = (state_38352[(19)]);
var inst_38268 = (state_38352[(25)]);
var inst_38268__$1 = (state_38352[(2)]);
var inst_38269__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38268__$1);
var inst_38270 = (function (){var all_files = inst_38265;
var res_SINGLEQUOTE_ = inst_38268__$1;
var res = inst_38269__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38273,inst_38269,inst_38265,inst_38268,inst_38268__$1,inst_38269__$1,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38194_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38194_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38273,inst_38269,inst_38265,inst_38268,inst_38268__$1,inst_38269__$1,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38271 = cljs.core.filter.call(null,inst_38270,inst_38268__$1);
var inst_38272 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38273__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38272);
var inst_38274 = cljs.core.not_empty.call(null,inst_38273__$1);
var state_38352__$1 = (function (){var statearr_38380 = state_38352;
(statearr_38380[(23)] = inst_38273__$1);

(statearr_38380[(24)] = inst_38269__$1);

(statearr_38380[(26)] = inst_38271);

(statearr_38380[(25)] = inst_38268__$1);

return statearr_38380;
})();
if(cljs.core.truth_(inst_38274)){
var statearr_38381_38458 = state_38352__$1;
(statearr_38381_38458[(1)] = (23));

} else {
var statearr_38382_38459 = state_38352__$1;
(statearr_38382_38459[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (36))){
var state_38352__$1 = state_38352;
var statearr_38383_38460 = state_38352__$1;
(statearr_38383_38460[(2)] = false);

(statearr_38383_38460[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (41))){
var inst_38327 = (state_38352[(20)]);
var inst_38331 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38332 = cljs.core.map.call(null,inst_38331,inst_38327);
var inst_38333 = cljs.core.pr_str.call(null,inst_38332);
var inst_38334 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38333)].join('');
var inst_38335 = figwheel.client.utils.log.call(null,inst_38334);
var state_38352__$1 = state_38352;
var statearr_38384_38461 = state_38352__$1;
(statearr_38384_38461[(2)] = inst_38335);

(statearr_38384_38461[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (43))){
var inst_38328 = (state_38352[(21)]);
var inst_38338 = (state_38352[(2)]);
var inst_38339 = cljs.core.not_empty.call(null,inst_38328);
var state_38352__$1 = (function (){var statearr_38385 = state_38352;
(statearr_38385[(27)] = inst_38338);

return statearr_38385;
})();
if(cljs.core.truth_(inst_38339)){
var statearr_38386_38462 = state_38352__$1;
(statearr_38386_38462[(1)] = (44));

} else {
var statearr_38387_38463 = state_38352__$1;
(statearr_38387_38463[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (29))){
var inst_38273 = (state_38352[(23)]);
var inst_38305 = (state_38352[(16)]);
var inst_38269 = (state_38352[(24)]);
var inst_38271 = (state_38352[(26)]);
var inst_38265 = (state_38352[(19)]);
var inst_38268 = (state_38352[(25)]);
var inst_38301 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38304 = (function (){var all_files = inst_38265;
var res_SINGLEQUOTE_ = inst_38268;
var res = inst_38269;
var files_not_loaded = inst_38271;
var dependencies_that_loaded = inst_38273;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38273,inst_38305,inst_38269,inst_38271,inst_38265,inst_38268,inst_38301,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38303){
var map__38388 = p__38303;
var map__38388__$1 = ((((!((map__38388 == null)))?((((map__38388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38388):map__38388);
var namespace = cljs.core.get.call(null,map__38388__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38273,inst_38305,inst_38269,inst_38271,inst_38265,inst_38268,inst_38301,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38305__$1 = cljs.core.group_by.call(null,inst_38304,inst_38271);
var inst_38307 = (inst_38305__$1 == null);
var inst_38308 = cljs.core.not.call(null,inst_38307);
var state_38352__$1 = (function (){var statearr_38390 = state_38352;
(statearr_38390[(16)] = inst_38305__$1);

(statearr_38390[(28)] = inst_38301);

return statearr_38390;
})();
if(inst_38308){
var statearr_38391_38464 = state_38352__$1;
(statearr_38391_38464[(1)] = (32));

} else {
var statearr_38392_38465 = state_38352__$1;
(statearr_38392_38465[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (44))){
var inst_38328 = (state_38352[(21)]);
var inst_38341 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38328);
var inst_38342 = cljs.core.pr_str.call(null,inst_38341);
var inst_38343 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38342)].join('');
var inst_38344 = figwheel.client.utils.log.call(null,inst_38343);
var state_38352__$1 = state_38352;
var statearr_38393_38466 = state_38352__$1;
(statearr_38393_38466[(2)] = inst_38344);

(statearr_38393_38466[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (6))){
var inst_38246 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
var statearr_38394_38467 = state_38352__$1;
(statearr_38394_38467[(2)] = inst_38246);

(statearr_38394_38467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (28))){
var inst_38271 = (state_38352[(26)]);
var inst_38298 = (state_38352[(2)]);
var inst_38299 = cljs.core.not_empty.call(null,inst_38271);
var state_38352__$1 = (function (){var statearr_38395 = state_38352;
(statearr_38395[(29)] = inst_38298);

return statearr_38395;
})();
if(cljs.core.truth_(inst_38299)){
var statearr_38396_38468 = state_38352__$1;
(statearr_38396_38468[(1)] = (29));

} else {
var statearr_38397_38469 = state_38352__$1;
(statearr_38397_38469[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (25))){
var inst_38269 = (state_38352[(24)]);
var inst_38285 = (state_38352[(2)]);
var inst_38286 = cljs.core.not_empty.call(null,inst_38269);
var state_38352__$1 = (function (){var statearr_38398 = state_38352;
(statearr_38398[(30)] = inst_38285);

return statearr_38398;
})();
if(cljs.core.truth_(inst_38286)){
var statearr_38399_38470 = state_38352__$1;
(statearr_38399_38470[(1)] = (26));

} else {
var statearr_38400_38471 = state_38352__$1;
(statearr_38400_38471[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (34))){
var inst_38321 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
if(cljs.core.truth_(inst_38321)){
var statearr_38401_38472 = state_38352__$1;
(statearr_38401_38472[(1)] = (38));

} else {
var statearr_38402_38473 = state_38352__$1;
(statearr_38402_38473[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (17))){
var state_38352__$1 = state_38352;
var statearr_38403_38474 = state_38352__$1;
(statearr_38403_38474[(2)] = recompile_dependents);

(statearr_38403_38474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (3))){
var state_38352__$1 = state_38352;
var statearr_38404_38475 = state_38352__$1;
(statearr_38404_38475[(2)] = null);

(statearr_38404_38475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (12))){
var inst_38242 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
var statearr_38405_38476 = state_38352__$1;
(statearr_38405_38476[(2)] = inst_38242);

(statearr_38405_38476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (2))){
var inst_38204 = (state_38352[(13)]);
var inst_38211 = cljs.core.seq.call(null,inst_38204);
var inst_38212 = inst_38211;
var inst_38213 = null;
var inst_38214 = (0);
var inst_38215 = (0);
var state_38352__$1 = (function (){var statearr_38406 = state_38352;
(statearr_38406[(7)] = inst_38215);

(statearr_38406[(8)] = inst_38213);

(statearr_38406[(9)] = inst_38214);

(statearr_38406[(10)] = inst_38212);

return statearr_38406;
})();
var statearr_38407_38477 = state_38352__$1;
(statearr_38407_38477[(2)] = null);

(statearr_38407_38477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (23))){
var inst_38273 = (state_38352[(23)]);
var inst_38269 = (state_38352[(24)]);
var inst_38271 = (state_38352[(26)]);
var inst_38265 = (state_38352[(19)]);
var inst_38268 = (state_38352[(25)]);
var inst_38276 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38278 = (function (){var all_files = inst_38265;
var res_SINGLEQUOTE_ = inst_38268;
var res = inst_38269;
var files_not_loaded = inst_38271;
var dependencies_that_loaded = inst_38273;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38273,inst_38269,inst_38271,inst_38265,inst_38268,inst_38276,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38277){
var map__38408 = p__38277;
var map__38408__$1 = ((((!((map__38408 == null)))?((((map__38408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38408):map__38408);
var request_url = cljs.core.get.call(null,map__38408__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38273,inst_38269,inst_38271,inst_38265,inst_38268,inst_38276,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38279 = cljs.core.reverse.call(null,inst_38273);
var inst_38280 = cljs.core.map.call(null,inst_38278,inst_38279);
var inst_38281 = cljs.core.pr_str.call(null,inst_38280);
var inst_38282 = figwheel.client.utils.log.call(null,inst_38281);
var state_38352__$1 = (function (){var statearr_38410 = state_38352;
(statearr_38410[(31)] = inst_38276);

return statearr_38410;
})();
var statearr_38411_38478 = state_38352__$1;
(statearr_38411_38478[(2)] = inst_38282);

(statearr_38411_38478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (35))){
var state_38352__$1 = state_38352;
var statearr_38412_38479 = state_38352__$1;
(statearr_38412_38479[(2)] = true);

(statearr_38412_38479[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (19))){
var inst_38255 = (state_38352[(12)]);
var inst_38261 = figwheel.client.file_reloading.expand_files.call(null,inst_38255);
var state_38352__$1 = state_38352;
var statearr_38413_38480 = state_38352__$1;
(statearr_38413_38480[(2)] = inst_38261);

(statearr_38413_38480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (11))){
var state_38352__$1 = state_38352;
var statearr_38414_38481 = state_38352__$1;
(statearr_38414_38481[(2)] = null);

(statearr_38414_38481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (9))){
var inst_38244 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
var statearr_38415_38482 = state_38352__$1;
(statearr_38415_38482[(2)] = inst_38244);

(statearr_38415_38482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (5))){
var inst_38215 = (state_38352[(7)]);
var inst_38214 = (state_38352[(9)]);
var inst_38217 = (inst_38215 < inst_38214);
var inst_38218 = inst_38217;
var state_38352__$1 = state_38352;
if(cljs.core.truth_(inst_38218)){
var statearr_38416_38483 = state_38352__$1;
(statearr_38416_38483[(1)] = (7));

} else {
var statearr_38417_38484 = state_38352__$1;
(statearr_38417_38484[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (14))){
var inst_38225 = (state_38352[(22)]);
var inst_38234 = cljs.core.first.call(null,inst_38225);
var inst_38235 = figwheel.client.file_reloading.eval_body.call(null,inst_38234,opts);
var inst_38236 = cljs.core.next.call(null,inst_38225);
var inst_38212 = inst_38236;
var inst_38213 = null;
var inst_38214 = (0);
var inst_38215 = (0);
var state_38352__$1 = (function (){var statearr_38418 = state_38352;
(statearr_38418[(7)] = inst_38215);

(statearr_38418[(32)] = inst_38235);

(statearr_38418[(8)] = inst_38213);

(statearr_38418[(9)] = inst_38214);

(statearr_38418[(10)] = inst_38212);

return statearr_38418;
})();
var statearr_38419_38485 = state_38352__$1;
(statearr_38419_38485[(2)] = null);

(statearr_38419_38485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (45))){
var state_38352__$1 = state_38352;
var statearr_38420_38486 = state_38352__$1;
(statearr_38420_38486[(2)] = null);

(statearr_38420_38486[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (26))){
var inst_38273 = (state_38352[(23)]);
var inst_38269 = (state_38352[(24)]);
var inst_38271 = (state_38352[(26)]);
var inst_38265 = (state_38352[(19)]);
var inst_38268 = (state_38352[(25)]);
var inst_38288 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38290 = (function (){var all_files = inst_38265;
var res_SINGLEQUOTE_ = inst_38268;
var res = inst_38269;
var files_not_loaded = inst_38271;
var dependencies_that_loaded = inst_38273;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38273,inst_38269,inst_38271,inst_38265,inst_38268,inst_38288,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38289){
var map__38421 = p__38289;
var map__38421__$1 = ((((!((map__38421 == null)))?((((map__38421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38421):map__38421);
var namespace = cljs.core.get.call(null,map__38421__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38273,inst_38269,inst_38271,inst_38265,inst_38268,inst_38288,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38291 = cljs.core.map.call(null,inst_38290,inst_38269);
var inst_38292 = cljs.core.pr_str.call(null,inst_38291);
var inst_38293 = figwheel.client.utils.log.call(null,inst_38292);
var inst_38294 = (function (){var all_files = inst_38265;
var res_SINGLEQUOTE_ = inst_38268;
var res = inst_38269;
var files_not_loaded = inst_38271;
var dependencies_that_loaded = inst_38273;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38273,inst_38269,inst_38271,inst_38265,inst_38268,inst_38288,inst_38290,inst_38291,inst_38292,inst_38293,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38273,inst_38269,inst_38271,inst_38265,inst_38268,inst_38288,inst_38290,inst_38291,inst_38292,inst_38293,state_val_38353,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38295 = setTimeout(inst_38294,(10));
var state_38352__$1 = (function (){var statearr_38423 = state_38352;
(statearr_38423[(33)] = inst_38288);

(statearr_38423[(34)] = inst_38293);

return statearr_38423;
})();
var statearr_38424_38487 = state_38352__$1;
(statearr_38424_38487[(2)] = inst_38295);

(statearr_38424_38487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (16))){
var state_38352__$1 = state_38352;
var statearr_38425_38488 = state_38352__$1;
(statearr_38425_38488[(2)] = reload_dependents);

(statearr_38425_38488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (38))){
var inst_38305 = (state_38352[(16)]);
var inst_38323 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38305);
var state_38352__$1 = state_38352;
var statearr_38426_38489 = state_38352__$1;
(statearr_38426_38489[(2)] = inst_38323);

(statearr_38426_38489[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (30))){
var state_38352__$1 = state_38352;
var statearr_38427_38490 = state_38352__$1;
(statearr_38427_38490[(2)] = null);

(statearr_38427_38490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (10))){
var inst_38225 = (state_38352[(22)]);
var inst_38227 = cljs.core.chunked_seq_QMARK_.call(null,inst_38225);
var state_38352__$1 = state_38352;
if(inst_38227){
var statearr_38428_38491 = state_38352__$1;
(statearr_38428_38491[(1)] = (13));

} else {
var statearr_38429_38492 = state_38352__$1;
(statearr_38429_38492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (18))){
var inst_38259 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
if(cljs.core.truth_(inst_38259)){
var statearr_38430_38493 = state_38352__$1;
(statearr_38430_38493[(1)] = (19));

} else {
var statearr_38431_38494 = state_38352__$1;
(statearr_38431_38494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (42))){
var state_38352__$1 = state_38352;
var statearr_38432_38495 = state_38352__$1;
(statearr_38432_38495[(2)] = null);

(statearr_38432_38495[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (37))){
var inst_38318 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
var statearr_38433_38496 = state_38352__$1;
(statearr_38433_38496[(2)] = inst_38318);

(statearr_38433_38496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (8))){
var inst_38225 = (state_38352[(22)]);
var inst_38212 = (state_38352[(10)]);
var inst_38225__$1 = cljs.core.seq.call(null,inst_38212);
var state_38352__$1 = (function (){var statearr_38434 = state_38352;
(statearr_38434[(22)] = inst_38225__$1);

return statearr_38434;
})();
if(inst_38225__$1){
var statearr_38435_38497 = state_38352__$1;
(statearr_38435_38497[(1)] = (10));

} else {
var statearr_38436_38498 = state_38352__$1;
(statearr_38436_38498[(1)] = (11));

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
});})(c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34512__auto__,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto____0 = (function (){
var statearr_38437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38437[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto__);

(statearr_38437[(1)] = (1));

return statearr_38437;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto____1 = (function (state_38352){
while(true){
var ret_value__34514__auto__ = (function (){try{while(true){
var result__34515__auto__ = switch__34512__auto__.call(null,state_38352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34515__auto__;
}
break;
}
}catch (e38438){if((e38438 instanceof Object)){
var ex__34516__auto__ = e38438;
var statearr_38439_38499 = state_38352;
(statearr_38439_38499[(5)] = ex__34516__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38500 = state_38352;
state_38352 = G__38500;
continue;
} else {
return ret_value__34514__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto__ = function(state_38352){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto____1.call(this,state_38352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34513__auto__;
})()
;})(switch__34512__auto__,c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34604__auto__ = (function (){var statearr_38440 = f__34603__auto__.call(null);
(statearr_38440[(6)] = c__34602__auto__);

return statearr_38440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34604__auto__);
});})(c__34602__auto__,map__38197,map__38197__$1,opts,before_jsload,on_jsload,reload_dependents,map__38198,map__38198__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34602__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38503,link){
var map__38504 = p__38503;
var map__38504__$1 = ((((!((map__38504 == null)))?((((map__38504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38504):map__38504);
var file = cljs.core.get.call(null,map__38504__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__38504,map__38504__$1,file){
return (function (p1__38501_SHARP_,p2__38502_SHARP_){
if(cljs.core._EQ_.call(null,p1__38501_SHARP_,p2__38502_SHARP_)){
return p1__38501_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__38504,map__38504__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38507){
var map__38508 = p__38507;
var map__38508__$1 = ((((!((map__38508 == null)))?((((map__38508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38508):map__38508);
var match_length = cljs.core.get.call(null,map__38508__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38508__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38506_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38506_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38510_SHARP_,p2__38511_SHARP_){
return cljs.core.assoc.call(null,p1__38510_SHARP_,cljs.core.get.call(null,p2__38511_SHARP_,key),p2__38511_SHARP_);
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
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38512 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38512);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38512);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38513,p__38514){
var map__38515 = p__38513;
var map__38515__$1 = ((((!((map__38515 == null)))?((((map__38515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38515):map__38515);
var on_cssload = cljs.core.get.call(null,map__38515__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38516 = p__38514;
var map__38516__$1 = ((((!((map__38516 == null)))?((((map__38516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38516):map__38516);
var files_msg = map__38516__$1;
var files = cljs.core.get.call(null,map__38516__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1520609267036
