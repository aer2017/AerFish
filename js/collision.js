//判断大鱼和果实的距离
function momFruitConllision(){
	for(var i=0;i < fruit.num;i++){
		if(fruit.alive[i]){
			var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if(fruit.l[i]>=14&&l < 900){
				fruit.dead(i);
			}
		}
	}
}
function momBabyConllision(){
	for(var i=0;i < baby.num;i++){
		if(baby.alive[i]){
			var l = calLength2(baby.x[i],baby.y[i],mom.x,mom.y);
			if(l < 900){
				baby.dead(i);
			}
		}
	}
}