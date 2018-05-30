/**
* name 
*/
module entities.plants{
	export class Tomato extends Plant{
		constructor(x:number,y:number){
			super();
			this.loadImage("res/img/plants/tomato/tomato1.png",x,y,192,108);
		}
	}
}