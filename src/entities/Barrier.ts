module entities{
	export class Barrier extends Laya.Sprite{
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
			
			if(type == 'House') {
				this.loadImage("res/img/barriers/house.png",x,y,width,height);
			}
			else if(type == 'LeftBottom') {
				this.loadImage("res/img/barriers/left-bottom.png",x,y,width,height);
			}
			else if(type == 'Barrier3') {
				this.loadImage("res/img/barriers/barrier3.png",x,y,width,height);
			}	
			else if(type == 'Barrier4') {
				this.loadImage("res/img/barriers/barrier4.png",x,y,width,height);
			}	
			else if(type == 'Barrier5') {
				this.loadImage("res/img/barriers/barrier5.png",x,y,width,height);
			}		
			else if(type == 'Barrier6') {
				this.loadImage("res/img/barriers/barrier6.png",x,y,width,height);
			}	
			else if(type == 'Barrier7') {
				this.loadImage("res/img/barriers/barrier7.png",x,y,width,height);
			}	
			else if(type == 'Barrier8') {
				this.loadImage("res/img/barriers/barrier8.png",x,y,width,height);
			}	
			else if(type == 'Barrier9') {
				this.loadImage("res/img/barriers/barrier9.png",x,y,width,height);
			}	
			else if(type == 'Barrier10') {
				this.loadImage("res/img/barriers/barrier10.png",x,y,width,height);
			}	
			else if(type == 'Barrier11') {
				this.loadImage("res/img/barriers/barrier11.png",x,y,width,height);
			}
			else if(type == 'Barrier12') {
				this.loadImage("res/img/barriers/barrier12.png",x,y,width,height);
			}	
			else if(type == 'Barrier13') {
				this.loadImage("res/img/barriers/barrier13.png",x,y,width,height);
			}																												
		}
	}
}