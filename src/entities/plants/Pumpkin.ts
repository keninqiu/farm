/**
* name 
*/
module entities.plants{
	export class Pumpkin extends Plant{
		constructor(x:number,y:number){
			super();
			this.loadImage("res/img/plants/pumpkin/pumpkin1.png",x,y,192,108);
		}
	}
}