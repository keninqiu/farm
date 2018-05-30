/**
* name 
*/
module entities.animals{
	export class Dog extends Animal{
		constructor(x:number,y:number){
			super(x,y);
			this.loadImage("res/img/animals/dog/dog1.png",x,y,this.width,this.height);
			this.mouseEnabled = true;
			this.on(Laya.Event.CLICK, this, this.onClick);
		}	
		private onClick():void {
		  console.log('click me');
		}
		
	}
}