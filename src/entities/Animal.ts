/**
* name 
*/
module entities{
	export class Animal extends Laya.Sprite{
		public dx:number;
		public dy:number;
		public speed:number;
		public static COUNT:number = 5;
		constructor(x:number,y:number){
			super();
			this.x = x;
			this.y = y;			
			this.speed = 3;
			this.dx = this.dy = 0;
			this.width = 192;
			this.height = 108;
		}

		public moveArround() {
			var reachDestination:boolean = ((this.x-this.dx)*(this.x-this.dx) + (this.y-this.dy)*(this.y-this.dy)) <= this.speed * this.speed;
			//console.log("reachDestination=" + reachDestination);
           if((this.dx == 0 && this.dy == 0) || reachDestination) {
			   //console.log('dx1=' + this.dx);
               var destPoint:Point = PointUtil.getRandPointWithin(Areas.getDogsArea());
			   //console.log(destPoint);
               this.setDestination(destPoint.x,destPoint.y);
           }
           else {
			    //console.log('dx2=' + this.dx);
                this.moveTo(PointUtil.nextPositionForDestination(this.x,this.y,this.dx,this.dy,this.speed));
           }			
		}

		public moveTo(point:Laya.Point) {
			//console.log("width=" + this.width);
			if(point != null) {
				this.x = point.x;
				this.y = point.y;
				//console.log(this.x);
				//console.log(this.width);				
			}
		}
		public setDestination(x:number, y:number) {
			this.dx = x;
			this.dy = y;
		}	
	}
}