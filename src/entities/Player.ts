/**
* name 
*/
module entities{
	export class Player extends Animal{

		constructor(){
			super(0,0);
			this.dx = this.dy = 0;
			this.width = this.height = 50;
			this.loadImage("res/img/player/player1.jpg",this.x,this.y,this.width,this.height);
		}



	}
}