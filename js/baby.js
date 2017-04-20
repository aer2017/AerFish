var babyObj = function(){
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	this.spd=[];
	this.angle=[];
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}
babyObj.prototype.num = 8;
babyObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=true;
		this.x[i] = Math.random()>0.5?-50:canWidth+50;
		this.y[i] = Math.floor(Math.random() * canHeight);

		if(this.x[i]<0){
			this.angle[i] = Math.PI;
			this.spd[i] =Math.random() *2+2;
		}else{
			this.angle[i] = 0;
			this.spd[i]=Math.random() *-2-2;
	}
	}
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function(){
	//lerp x,y
	for(var i=0;i<this.num;i++){
		if(this.alive[i]==true){
			if(this.x[i]>=950){
				this.spd[i]= -this.spd[i];
				this.angle[i]= 0;
			}
			if(this.x[i]<=-150){
				this.spd[i]= -this.spd[i];
				this.angle[i]= Math.PI;
			}
			this.x[i] +=this.spd[i];
			this.y[i] +=0;
			ctx1.save();
			ctx1.translate(this.x[i],this.y[i]);
			ctx1.rotate(this.angle[i]);
			ctx1.drawImage(this.babyTail,-this.babyTail.width * 0.5 + 23,-this.babyTail.height * 0.5);
			ctx1.drawImage(this.babyBody,-this.babyBody.width * 0.5,-this.babyBody.height * 0.5);
			ctx1.drawImage(this.babyEye,-this.babyEye.width * 0.5,-this.babyEye.height * 0.5);
			ctx1.restore();
		}
	}
}
babyObj.prototype.dead = function(i){
	this.alive[i] = false;
}

