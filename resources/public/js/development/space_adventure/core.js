// Compiled by ClojureScript 1.9.946 {}
goog.provide('space_adventure.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
space_adventure.core.size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(550),new cljs.core.Keyword(null,"y","y",-1757859776),(550)], null);
space_adventure.core.spaceship_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(28),new cljs.core.Keyword(null,"y","y",-1757859776),(55)], null);
space_adventure.core.setup = (function space_adventure$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(78),new cljs.core.Keyword(null,"y","y",-1757859776),(40),new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812),cljs.core.PersistentVector.EMPTY], null);
});
space_adventure.core.draw_triangle = (function space_adventure$core$draw_triangle(x,y){
var size_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(space_adventure.core.spaceship_size);
var size_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(space_adventure.core.spaceship_size);
var x1 = (x - size_x);
var y1 = (y + size_y);
var x2 = x;
var y2 = y;
var x3 = (x + size_x);
var y3 = (y + size_y);
return quil.core.triangle.call(null,x1,y1,x2,y2,x3,y3);
});
space_adventure.core.draw_laser_shots = (function space_adventure$core$draw_laser_shots(laser_shots){
var seq__40110 = cljs.core.seq.call(null,laser_shots);
var chunk__40111 = null;
var count__40112 = (0);
var i__40113 = (0);
while(true){
if((i__40113 < count__40112)){
var coors = cljs.core._nth.call(null,chunk__40111,i__40113);
quil.core.point.call(null,cljs.core.first.call(null,coors),cljs.core.second.call(null,coors));

var G__40114 = seq__40110;
var G__40115 = chunk__40111;
var G__40116 = count__40112;
var G__40117 = (i__40113 + (1));
seq__40110 = G__40114;
chunk__40111 = G__40115;
count__40112 = G__40116;
i__40113 = G__40117;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40110);
if(temp__5457__auto__){
var seq__40110__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40110__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__40110__$1);
var G__40118 = cljs.core.chunk_rest.call(null,seq__40110__$1);
var G__40119 = c__31014__auto__;
var G__40120 = cljs.core.count.call(null,c__31014__auto__);
var G__40121 = (0);
seq__40110 = G__40118;
chunk__40111 = G__40119;
count__40112 = G__40120;
i__40113 = G__40121;
continue;
} else {
var coors = cljs.core.first.call(null,seq__40110__$1);
quil.core.point.call(null,cljs.core.first.call(null,coors),cljs.core.second.call(null,coors));

var G__40122 = cljs.core.next.call(null,seq__40110__$1);
var G__40123 = null;
var G__40124 = (0);
var G__40125 = (0);
seq__40110 = G__40122;
chunk__40111 = G__40123;
count__40112 = G__40124;
i__40113 = G__40125;
continue;
}
} else {
return null;
}
}
break;
}
});
space_adventure.core.update_laser_shots = (function space_adventure$core$update_laser_shots(shots,shot){
var vec__40126 = shot;
var x = cljs.core.nth.call(null,vec__40126,(0),null);
var y = cljs.core.nth.call(null,vec__40126,(1),null);
if((y > (0))){
return cljs.core.conj.call(null,shots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (16))], null));
} else {
return shots;
}
});
space_adventure.core.update_state = (function space_adventure$core$update_state(state){
var laser_shots = new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812).cljs$core$IFn$_invoke$arity$1(state);
if(!(cljs.core.empty_QMARK_.call(null,laser_shots))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812),cljs.core.reduce.call(null,space_adventure.core.update_laser_shots,cljs.core.PersistentVector.EMPTY,laser_shots));
} else {
return cljs.core.identity.call(null,state);
}
});
space_adventure.core.draw_state = (function space_adventure$core$draw_state(state){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
var laser_shots = new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812).cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.call(null,(245));

space_adventure.core.draw_triangle.call(null,x,y);

if(!(cljs.core.empty_QMARK_.call(null,laser_shots))){
return space_adventure.core.draw_laser_shots.call(null,laser_shots);
} else {
return null;
}
});
space_adventure.core.mouse_moved = (function space_adventure$core$mouse_moved(state,event){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event));
});
space_adventure.core.in_box = (function space_adventure$core$in_box(x,y){

var x_min = ((0) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(space_adventure.core.spaceship_size));
var x_max = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(space_adventure.core.size) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(space_adventure.core.spaceship_size));
var y_min = (0);
var y_max = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(space_adventure.core.size) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(space_adventure.core.spaceship_size));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__30435__auto__ = (function (){var x__30442__auto__ = x;
var y__30443__auto__ = x_max;
return ((x__30442__auto__ < y__30443__auto__) ? x__30442__auto__ : y__30443__auto__);
})();
var y__30436__auto__ = x_min;
return ((x__30435__auto__ > y__30436__auto__) ? x__30435__auto__ : y__30436__auto__);
})(),(function (){var x__30435__auto__ = (function (){var x__30442__auto__ = y;
var y__30443__auto__ = y_max;
return ((x__30442__auto__ < y__30443__auto__) ? x__30442__auto__ : y__30443__auto__);
})();
var y__30436__auto__ = y_min;
return ((x__30435__auto__ > y__30436__auto__) ? x__30435__auto__ : y__30436__auto__);
})()], null);
});
space_adventure.core.move = (function space_adventure$core$move(direction,state){
var speed = (15);
var x0 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y0 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
var vec__40129 = (function (){var G__40135 = direction;
var G__40135__$1 = (((G__40135 instanceof cljs.core.Keyword))?G__40135.fqn:null);
switch (G__40135__$1) {
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 - speed),y0], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 + speed),y0], null);

break;
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,(y0 - speed)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,(y0 + speed)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,y0], null);

}
})();
var x1 = cljs.core.nth.call(null,vec__40129,(0),null);
var y1 = cljs.core.nth.call(null,vec__40129,(1),null);
var vec__40132 = space_adventure.core.in_box.call(null,x1,y1);
var x = cljs.core.nth.call(null,vec__40132,(0),null);
var y = cljs.core.nth.call(null,vec__40132,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});
space_adventure.core.shoot = (function space_adventure$core$shoot(state){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
var laser_shots = new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812),cljs.core.conj.call(null,laser_shots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
space_adventure.core.handle_key_press = (function space_adventure$core$handle_key_press(state,event){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key-code","key-code",-1732114304).cljs$core$IFn$_invoke$arity$1(event),(32))){
return space_adventure.core.shoot.call(null,state);
} else {
return space_adventure.core.move.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event),state);
}
});
space_adventure.core.run_sketch = (function space_adventure$core$run_sketch(){
space_adventure.core.space_adventure = (function space_adventure$core$run_sketch_$_space_adventure(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"space-adventure",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,space_adventure.core.update_state))?(function() { 
var G__40137__delegate = function (args){
return cljs.core.apply.call(null,space_adventure.core.update_state,args);
};
var G__40137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40138__i = 0, G__40138__a = new Array(arguments.length -  0);
while (G__40138__i < G__40138__a.length) {G__40138__a[G__40138__i] = arguments[G__40138__i + 0]; ++G__40138__i;}
  args = new cljs.core.IndexedSeq(G__40138__a,0,null);
} 
return G__40137__delegate.call(this,args);};
G__40137.cljs$lang$maxFixedArity = 0;
G__40137.cljs$lang$applyTo = (function (arglist__40139){
var args = cljs.core.seq(arglist__40139);
return G__40137__delegate(args);
});
G__40137.cljs$core$IFn$_invoke$arity$variadic = G__40137__delegate;
return G__40137;
})()
:space_adventure.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(space_adventure.core.size),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(space_adventure.core.size)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,space_adventure.core.setup))?(function() { 
var G__40140__delegate = function (args){
return cljs.core.apply.call(null,space_adventure.core.setup,args);
};
var G__40140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40141__i = 0, G__40141__a = new Array(arguments.length -  0);
while (G__40141__i < G__40141__a.length) {G__40141__a[G__40141__i] = arguments[G__40141__i + 0]; ++G__40141__i;}
  args = new cljs.core.IndexedSeq(G__40141__a,0,null);
} 
return G__40140__delegate.call(this,args);};
G__40140.cljs$lang$maxFixedArity = 0;
G__40140.cljs$lang$applyTo = (function (arglist__40142){
var args = cljs.core.seq(arglist__40142);
return G__40140__delegate(args);
});
G__40140.cljs$core$IFn$_invoke$arity$variadic = G__40140__delegate;
return G__40140;
})()
:space_adventure.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,space_adventure.core.handle_key_press))?(function() { 
var G__40143__delegate = function (args){
return cljs.core.apply.call(null,space_adventure.core.handle_key_press,args);
};
var G__40143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40144__i = 0, G__40144__a = new Array(arguments.length -  0);
while (G__40144__i < G__40144__a.length) {G__40144__a[G__40144__i] = arguments[G__40144__i + 0]; ++G__40144__i;}
  args = new cljs.core.IndexedSeq(G__40144__a,0,null);
} 
return G__40143__delegate.call(this,args);};
G__40143.cljs$lang$maxFixedArity = 0;
G__40143.cljs$lang$applyTo = (function (arglist__40145){
var args = cljs.core.seq(arglist__40145);
return G__40143__delegate(args);
});
G__40143.cljs$core$IFn$_invoke$arity$variadic = G__40143__delegate;
return G__40143;
})()
:space_adventure.core.handle_key_press),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,space_adventure.core.draw_state))?(function() { 
var G__40146__delegate = function (args){
return cljs.core.apply.call(null,space_adventure.core.draw_state,args);
};
var G__40146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40147__i = 0, G__40147__a = new Array(arguments.length -  0);
while (G__40147__i < G__40147__a.length) {G__40147__a[G__40147__i] = arguments[G__40147__i + 0]; ++G__40147__i;}
  args = new cljs.core.IndexedSeq(G__40147__a,0,null);
} 
return G__40146__delegate.call(this,args);};
G__40146.cljs$lang$maxFixedArity = 0;
G__40146.cljs$lang$applyTo = (function (arglist__40148){
var args = cljs.core.seq(arglist__40148);
return G__40146__delegate(args);
});
G__40146.cljs$core$IFn$_invoke$arity$variadic = G__40146__delegate;
return G__40146;
})()
:space_adventure.core.draw_state));
});
goog.exportSymbol('space_adventure.core.space_adventure', space_adventure.core.space_adventure);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__32163__32164__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__32163__32164__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),space_adventure.core.space_adventure,new cljs.core.Keyword(null,"host-id","host-id",742376279),"space-adventure"], null));
}
});
goog.exportSymbol('space_adventure.core.run_sketch', space_adventure.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1520609436791
