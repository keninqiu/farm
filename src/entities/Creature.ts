module entities{
	export class Creature extends Laya.Sprite{
		public static COUNT:number = 20;
		public type:string;
		constructor(type:string,x:number,y:number,width:number,height:number){
			super();
			this.type = type;
			this.visible = false;
			x = x * Laya.Browser.clientWidth/1920;
			y = y * Laya.Browser.clientHeight/1080;
			this.autoSize = true;
			width = width * Laya.Browser.clientWidth/1920;
			height = height * Laya.Browser.clientHeight/1080; 
			
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			
			this.loadImage("res/img/bg.png",x,y,width,height);
			/*
			if(type == 'Dog') {
				this.loadImage("res/img/animals/dog/dog1.png",x,y,width,height);
			}
			else if(type == 'Pumpkin') {
				this.loadImage("res/img/plants/pumpkin/pumpkin1.png",x,y,width,height);
			}
			else if(type == 'Tomato') {
				this.loadImage("res/img/plants/tomato/tomato1.png",x,y,width,height);
			}
			else if(type == 'Fog') {
				this.loadImage("res/img/animals/fog/fog1.png",x,y,width,height);
			}	
			*/		
		}
	}
}