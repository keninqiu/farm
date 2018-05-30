/**
* name 
*/
import Point = Laya.Point;
module utils{
	export class PointUtil{
		constructor(){
		} 
        public static getRandPointWithin(area:Area) {
            var x1:number = area.x1;
            var y1:number = area.y1;
            var x2:number = area.x2;
            var y2:number = area.y2;
            var rand1 = Math.random();
            var rand2 = Math.random();
            return new Point(x1+(x2-x1)*rand1,y1+(y2-y1)*rand2);
        } 

		public static nextPositionForDestination(x:number,y:number,dx:number,dy:number,speed:number) {
			if((dx == 0) && (dy == 0)) {
				return null;
			}
			if((dx == x) && (dy == y)) {
				return null;
			}

			var deltaX = dx - x;
			var deltaY = dy - y;

            var length = Math.sqrt(deltaX*deltaX + deltaY*deltaY);

            if(speed >= length) {
                return new Point(dx,dy);
            }
            var resultX = x + speed*(dx - x)/length;
            var resultY = y + speed*(dy - y)/length;

            //console.log("x="+x+",y="+y+",dx="+dx+",dy="+dy+",resultX="+resultX+",resultY="+resultY);
            return new Point(resultX,resultY);

		}	               
    }
}