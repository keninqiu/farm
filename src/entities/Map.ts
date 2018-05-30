/**
* name 
*/
module entities {
	export class Map extends Laya.Sprite{
		constructor(){
			super();
			this.loadImage("res/img/bg.jpg",0,0);
		}
	}
}