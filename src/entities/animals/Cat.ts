module entities.animals{
	export class Cat extends Animal{
		constructor(x:number,y:number){
			super(x,y);
			this.width = 100;
			this.height = 100;
			this.loadImage("res/img/animals/cat/cat1.png",x,y,this.width,this.height);
			this.mouseEnabled = true;
			this.autoSize = true;
		}
	}
}