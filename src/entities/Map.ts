/**
* name 
*/
module entities {
	export class Map extends Laya.Sprite{
		constructor(){
			super();
			this.loadImage("res/img/bg.png",0,0,Laya.Browser.clientWidth,Laya.Browser.clientHeight);
		}
	}
}