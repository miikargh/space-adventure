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

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(78),new cljs.core.Keyword(null,"y","y",-1757859776),(40),new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"asteroids","asteroids",399029932),cljs.core.PersistentVector.EMPTY], null);
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
var seq__47668 = cljs.core.seq.call(null,laser_shots);
var chunk__47669 = null;
var count__47670 = (0);
var i__47671 = (0);
while(true){
if((i__47671 < count__47670)){
var shot = cljs.core._nth.call(null,chunk__47669,i__47671);
quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shot),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shot));

var G__47672 = seq__47668;
var G__47673 = chunk__47669;
var G__47674 = count__47670;
var G__47675 = (i__47671 + (1));
seq__47668 = G__47672;
chunk__47669 = G__47673;
count__47670 = G__47674;
i__47671 = G__47675;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47668);
if(temp__5457__auto__){
var seq__47668__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47668__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__47668__$1);
var G__47676 = cljs.core.chunk_rest.call(null,seq__47668__$1);
var G__47677 = c__31014__auto__;
var G__47678 = cljs.core.count.call(null,c__31014__auto__);
var G__47679 = (0);
seq__47668 = G__47676;
chunk__47669 = G__47677;
count__47670 = G__47678;
i__47671 = G__47679;
continue;
} else {
var shot = cljs.core.first.call(null,seq__47668__$1);
quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shot),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shot));

var G__47680 = cljs.core.next.call(null,seq__47668__$1);
var G__47681 = null;
var G__47682 = (0);
var G__47683 = (0);
seq__47668 = G__47680;
chunk__47669 = G__47681;
count__47670 = G__47682;
i__47671 = G__47683;
continue;
}
} else {
return null;
}
}
break;
}
});
space_adventure.core.move_laser_shots = (function space_adventure$core$move_laser_shots(shots,shot){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shot);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shot);
if((y > (0))){
return cljs.core.conj.call(null,shots,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (16))], null));
} else {
return shots;
}
});
space_adventure.core.update_laser_shots = (function space_adventure$core$update_laser_shots(state){
var laser_shots = new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812).cljs$core$IFn$_invoke$arity$1(state);
if(!(cljs.core.empty_QMARK_.call(null,laser_shots))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812),cljs.core.reduce.call(null,space_adventure.core.move_laser_shots,cljs.core.PersistentVector.EMPTY,laser_shots));
} else {
return cljs.core.identity.call(null,state);
}
});
space_adventure.core.generate_asteroid = (function space_adventure$core$generate_asteroid(state){
var asteroids = new cljs.core.Keyword(null,"asteroids","asteroids",399029932).cljs$core$IFn$_invoke$arity$1(state);
var new_asteroid = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(space_adventure.core.size)),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"size","size",1098693007),((10) + cljs.core.rand.call(null,(95))),new cljs.core.Keyword(null,"speed","speed",1257663751),(cljs.core.rand.call(null,(5)) + (1))], null);
if(((cljs.core.rand.call(null) > 0.8)) && ((cljs.core.count.call(null,asteroids) < (10)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"asteroids","asteroids",399029932),cljs.core.conj.call(null,asteroids,new_asteroid));
} else {
return cljs.core.identity.call(null,state);
}
});
space_adventure.core.update_asteroids = (function space_adventure$core$update_asteroids(state){
var asteroids = new cljs.core.Keyword(null,"asteroids","asteroids",399029932).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"asteroids","asteroids",399029932),cljs.core.map.call(null,((function (asteroids){
return (function (p1__47684_SHARP_){
return cljs.core.assoc.call(null,p1__47684_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__47684_SHARP_) + new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(p1__47684_SHARP_)));
});})(asteroids))
,asteroids));
});
space_adventure.core.laser_asteroid_coll_QMARK_ = (function space_adventure$core$laser_asteroid_coll_QMARK_(p__47685){
var vec__47686 = p__47685;
var laser = cljs.core.nth.call(null,vec__47686,(0),null);
var asteroid = cljs.core.nth.call(null,vec__47686,(1),null);

var x_l = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(laser);
var y_l = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(laser);
var x_a = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(asteroid);
var y_a = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(asteroid);
var rad_a = (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(asteroid) / (2));
return ((y_l <= (y_a + rad_a))) && ((x_l > (x_a - rad_a))) && ((x_l < (x_a + rad_a)));
});
space_adventure.core.laser_hits = (function space_adventure$core$laser_hits(state){

var asteroids = new cljs.core.Keyword(null,"asteroids","asteroids",399029932).cljs$core$IFn$_invoke$arity$1(state);
var lasers = new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812).cljs$core$IFn$_invoke$arity$1(state);
var new_asteroids = cljs.core.reduce.call(null,((function (asteroids,lasers){
return (function (final_asteroids,asteroid){
var laser_asteroids = (function (){var iter__30965__auto__ = ((function (asteroids,lasers){
return (function space_adventure$core$laser_hits_$_iter__47689(s__47690){
return (new cljs.core.LazySeq(null,((function (asteroids,lasers){
return (function (){
var s__47690__$1 = s__47690;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__47690__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var a = cljs.core.first.call(null,xs__6012__auto__);
var iterys__30961__auto__ = ((function (s__47690__$1,a,xs__6012__auto__,temp__5457__auto__,asteroids,lasers){
return (function space_adventure$core$laser_hits_$_iter__47689_$_iter__47691(s__47692){
return (new cljs.core.LazySeq(null,((function (s__47690__$1,a,xs__6012__auto__,temp__5457__auto__,asteroids,lasers){
return (function (){
var s__47692__$1 = s__47692;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__47692__$1);
if(temp__5457__auto____$1){
var s__47692__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47692__$2)){
var c__30963__auto__ = cljs.core.chunk_first.call(null,s__47692__$2);
var size__30964__auto__ = cljs.core.count.call(null,c__30963__auto__);
var b__47694 = cljs.core.chunk_buffer.call(null,size__30964__auto__);
if((function (){var i__47693 = (0);
while(true){
if((i__47693 < size__30964__auto__)){
var l = cljs.core._nth.call(null,c__30963__auto__,i__47693);
cljs.core.chunk_append.call(null,b__47694,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[l,a],null)));

var G__47695 = (i__47693 + (1));
i__47693 = G__47695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47694),space_adventure$core$laser_hits_$_iter__47689_$_iter__47691.call(null,cljs.core.chunk_rest.call(null,s__47692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47694),null);
}
} else {
var l = cljs.core.first.call(null,s__47692__$2);
return cljs.core.cons.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[l,a],null)),space_adventure$core$laser_hits_$_iter__47689_$_iter__47691.call(null,cljs.core.rest.call(null,s__47692__$2)));
}
} else {
return null;
}
break;
}
});})(s__47690__$1,a,xs__6012__auto__,temp__5457__auto__,asteroids,lasers))
,null,null));
});})(s__47690__$1,a,xs__6012__auto__,temp__5457__auto__,asteroids,lasers))
;
var fs__30962__auto__ = cljs.core.seq.call(null,iterys__30961__auto__.call(null,lasers));
if(fs__30962__auto__){
return cljs.core.concat.call(null,fs__30962__auto__,space_adventure$core$laser_hits_$_iter__47689.call(null,cljs.core.rest.call(null,s__47690__$1)));
} else {
var G__47696 = cljs.core.rest.call(null,s__47690__$1);
s__47690__$1 = G__47696;
continue;
}
} else {
return null;
}
break;
}
});})(asteroids,lasers))
,null,null));
});})(asteroids,lasers))
;
return iter__30965__auto__.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asteroid], null));
})();
if(cljs.core.truth_(cljs.core.some.call(null,space_adventure.core.laser_asteroid_coll_QMARK_,laser_asteroids))){
return final_asteroids;
} else {
return cljs.core.conj.call(null,final_asteroids,asteroid);
}
});})(asteroids,lasers))
,cljs.core.PersistentVector.EMPTY,asteroids);
if(cljs.core.empty_QMARK_.call(null,lasers)){
return cljs.core.identity.call(null,state);
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"asteroids","asteroids",399029932),new_asteroids);
}
});
space_adventure.core.remove_old_asteroids = (function space_adventure$core$remove_old_asteroids(state){

var asteroids = new cljs.core.Keyword(null,"asteroids","asteroids",399029932).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"asteroids","asteroids",399029932),cljs.core.reduce.call(null,((function (asteroids){
return (function (asteroids__$1,asteroid){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(asteroid) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(space_adventure.core.size))){
return cljs.core.conj.call(null,asteroids__$1,asteroid);
} else {
return cljs.core.identity.call(null,asteroids__$1);
}
});})(asteroids))
,cljs.core.PersistentVector.EMPTY,asteroids));
});
space_adventure.core.update_state = (function space_adventure$core$update_state(state){
return space_adventure.core.laser_hits.call(null,space_adventure.core.update_laser_shots.call(null,space_adventure.core.remove_old_asteroids.call(null,space_adventure.core.update_asteroids.call(null,space_adventure.core.generate_asteroid.call(null,state)))));
});
space_adventure.core.draw_asteroids = (function space_adventure$core$draw_asteroids(asteroids){
var seq__47697 = cljs.core.seq.call(null,asteroids);
var chunk__47698 = null;
var count__47699 = (0);
var i__47700 = (0);
while(true){
if((i__47700 < count__47699)){
var asteroid = cljs.core._nth.call(null,chunk__47698,i__47700);
var x_47701 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(asteroid);
var y_47702 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(asteroid);
var size_47703 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(asteroid);
quil.core.ellipse.call(null,x_47701,y_47702,size_47703,size_47703);

var G__47704 = seq__47697;
var G__47705 = chunk__47698;
var G__47706 = count__47699;
var G__47707 = (i__47700 + (1));
seq__47697 = G__47704;
chunk__47698 = G__47705;
count__47699 = G__47706;
i__47700 = G__47707;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47697);
if(temp__5457__auto__){
var seq__47697__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47697__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__47697__$1);
var G__47708 = cljs.core.chunk_rest.call(null,seq__47697__$1);
var G__47709 = c__31014__auto__;
var G__47710 = cljs.core.count.call(null,c__31014__auto__);
var G__47711 = (0);
seq__47697 = G__47708;
chunk__47698 = G__47709;
count__47699 = G__47710;
i__47700 = G__47711;
continue;
} else {
var asteroid = cljs.core.first.call(null,seq__47697__$1);
var x_47712 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(asteroid);
var y_47713 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(asteroid);
var size_47714 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(asteroid);
quil.core.ellipse.call(null,x_47712,y_47713,size_47714,size_47714);

var G__47715 = cljs.core.next.call(null,seq__47697__$1);
var G__47716 = null;
var G__47717 = (0);
var G__47718 = (0);
seq__47697 = G__47715;
chunk__47698 = G__47716;
count__47699 = G__47717;
i__47700 = G__47718;
continue;
}
} else {
return null;
}
}
break;
}
});
space_adventure.core.draw_state = (function space_adventure$core$draw_state(state){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
var laser_shots = new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812).cljs$core$IFn$_invoke$arity$1(state);
var asteroids = new cljs.core.Keyword(null,"asteroids","asteroids",399029932).cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.call(null,(245));

space_adventure.core.draw_asteroids.call(null,asteroids);

if(!(cljs.core.empty_QMARK_.call(null,laser_shots))){
space_adventure.core.draw_laser_shots.call(null,laser_shots);
} else {
}

return space_adventure.core.draw_triangle.call(null,x,y);
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
var vec__47719 = (function (){var G__47725 = direction;
var G__47725__$1 = (((G__47725 instanceof cljs.core.Keyword))?G__47725.fqn:null);
switch (G__47725__$1) {
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
var x1 = cljs.core.nth.call(null,vec__47719,(0),null);
var y1 = cljs.core.nth.call(null,vec__47719,(1),null);
var vec__47722 = space_adventure.core.in_box.call(null,x1,y1);
var x = cljs.core.nth.call(null,vec__47722,(0),null);
var y = cljs.core.nth.call(null,vec__47722,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});
space_adventure.core.shoot = (function space_adventure$core$shoot(state){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
var laser_shots = new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"laser-shots","laser-shots",1843849812),cljs.core.conj.call(null,laser_shots,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)));
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
var G__47727__delegate = function (args){
return cljs.core.apply.call(null,space_adventure.core.update_state,args);
};
var G__47727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47728__i = 0, G__47728__a = new Array(arguments.length -  0);
while (G__47728__i < G__47728__a.length) {G__47728__a[G__47728__i] = arguments[G__47728__i + 0]; ++G__47728__i;}
  args = new cljs.core.IndexedSeq(G__47728__a,0,null);
} 
return G__47727__delegate.call(this,args);};
G__47727.cljs$lang$maxFixedArity = 0;
G__47727.cljs$lang$applyTo = (function (arglist__47729){
var args = cljs.core.seq(arglist__47729);
return G__47727__delegate(args);
});
G__47727.cljs$core$IFn$_invoke$arity$variadic = G__47727__delegate;
return G__47727;
})()
:space_adventure.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(space_adventure.core.size),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(space_adventure.core.size)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,space_adventure.core.setup))?(function() { 
var G__47730__delegate = function (args){
return cljs.core.apply.call(null,space_adventure.core.setup,args);
};
var G__47730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47731__i = 0, G__47731__a = new Array(arguments.length -  0);
while (G__47731__i < G__47731__a.length) {G__47731__a[G__47731__i] = arguments[G__47731__i + 0]; ++G__47731__i;}
  args = new cljs.core.IndexedSeq(G__47731__a,0,null);
} 
return G__47730__delegate.call(this,args);};
G__47730.cljs$lang$maxFixedArity = 0;
G__47730.cljs$lang$applyTo = (function (arglist__47732){
var args = cljs.core.seq(arglist__47732);
return G__47730__delegate(args);
});
G__47730.cljs$core$IFn$_invoke$arity$variadic = G__47730__delegate;
return G__47730;
})()
:space_adventure.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,space_adventure.core.handle_key_press))?(function() { 
var G__47733__delegate = function (args){
return cljs.core.apply.call(null,space_adventure.core.handle_key_press,args);
};
var G__47733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47734__i = 0, G__47734__a = new Array(arguments.length -  0);
while (G__47734__i < G__47734__a.length) {G__47734__a[G__47734__i] = arguments[G__47734__i + 0]; ++G__47734__i;}
  args = new cljs.core.IndexedSeq(G__47734__a,0,null);
} 
return G__47733__delegate.call(this,args);};
G__47733.cljs$lang$maxFixedArity = 0;
G__47733.cljs$lang$applyTo = (function (arglist__47735){
var args = cljs.core.seq(arglist__47735);
return G__47733__delegate(args);
});
G__47733.cljs$core$IFn$_invoke$arity$variadic = G__47733__delegate;
return G__47733;
})()
:space_adventure.core.handle_key_press),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,space_adventure.core.draw_state))?(function() { 
var G__47736__delegate = function (args){
return cljs.core.apply.call(null,space_adventure.core.draw_state,args);
};
var G__47736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47737__i = 0, G__47737__a = new Array(arguments.length -  0);
while (G__47737__i < G__47737__a.length) {G__47737__a[G__47737__i] = arguments[G__47737__i + 0]; ++G__47737__i;}
  args = new cljs.core.IndexedSeq(G__47737__a,0,null);
} 
return G__47736__delegate.call(this,args);};
G__47736.cljs$lang$maxFixedArity = 0;
G__47736.cljs$lang$applyTo = (function (arglist__47738){
var args = cljs.core.seq(arglist__47738);
return G__47736__delegate(args);
});
G__47736.cljs$core$IFn$_invoke$arity$variadic = G__47736__delegate;
return G__47736;
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

//# sourceMappingURL=core.js.map?rel=1520924648440
