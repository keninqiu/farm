/**
* name 
*/
module entities.animals{
	export class Fog extends Animal{
		constructor(x:number,y:number){
			super(x,y);
			this.loadImage("res/img/animals/fog/fog1.png",x,y,this.width,this.height);
		}		
	}
}