/**
* name 
*/
import Animation = Laya.Animation;
import Handler = Laya.Handler;

module entities{
	export class Player extends Laya.Sprite{
		roleAni:Animation;
		dx:number;
		dy:number;
		constructor(){
			super();
			this.dx = this.dy = 0;

			this.x = 750 * Laya.stage.width/1920;
			this.y = 640 * Laya.stage.height/1080;

	 		this.roleAni = new Animation();//创建一个 Animation 类的实例对象 animation 。
	 		this.roleAni.loadAtlas("res/img/player/后面序列.atlas",Handler.create(this,this.onLoadedBackSeq));//加载图集并播放
	 		this.roleAni.scaleX = 0.4 * Laya.stage.width/1920;
	 		this.roleAni.scaleY = 0.4 * Laya.stage.height/1080;
	 		this.roleAni.interval = 50;//设置 animation 对象的动画播放间隔时间，单位：毫秒。
	 		this.roleAni.play();//播放动画。
	 		this.addChild(this.roleAni);//将 animation 对象添加到显示列表。


		}

		onLoadedBackSeq():void {
				//获得动画矩形边界
			var bounds:Rectangle=this.getBounds();
			var width = 218;
			var height = 306;
			this.size(width * this.roleAni.scaleX ,height * this.roleAni.scaleY);
			this.pivotX = this.width/2;
			this.pivotY = this.height;
		}
		onLoadedFrontSeq():void {
				//获得动画矩形边界
			var bounds:Rectangle=this.getBounds();
			var width = 178;
			var height = 258;
			this.size(width * this.roleAni.scaleX ,height * this.roleAni.scaleY);
			this.pivotX = this.width/2;
			this.pivotY = this.height;
		}
		onLoadedLeftSeq():void {
				//获得动画矩形边界
			var bounds:Rectangle=this.getBounds();
			var width = 183;
			var height = 360;
			this.size(width * this.roleAni.scaleX ,height * this.roleAni.scaleY);
			this.pivotX = this.width/2;
			this.pivotY = this.height;
		}
		onLoadedRightSeq():void {
				//获得动画矩形边界
			var bounds:Rectangle=this.getBounds();
			var width = 183;
			var height = 360;
			this.size(width * this.roleAni.scaleX ,height * this.roleAni.scaleY);
			this.pivotX = this.width/2;
			this.pivotY = this.height;
		}		
		tweenTo(dx:number,dy:number):Tween {
			if(dx == 0 && dy == 0) {
				return;
			}
	        var x:number = this.x;
	        var y:number = this.y;

	        var deltaX:number = Math.abs(dx-x);
	        var deltaY:number = Math.abs(dy-y);
	        if(deltaX < deltaY) {
	        	if(dy < y) {
	        		this.roleAni.loadAtlas("res/img/player/后面序列.atlas",Handler.create(this,this.onLoadedBackSeq));//加载图集并播放
	        	}
	        	else {
	        		this.roleAni.loadAtlas("res/img/player/正面序列.atlas",Handler.create(this,this.onLoadedFrontSeq));//加载图集并播放
	        	}
	        }
	        else {
	        	if(dx < x) {
	        		this.roleAni.loadAtlas("res/img/player/侧左序列.atlas",Handler.create(this,this.onLoadedLeftSeq));//加载图集并播放
	        	}
	        	else {
	        		this.roleAni.loadAtlas("res/img/player/侧右序列.atlas",Handler.create(this,this.onLoadedRightSeq));//加载图集并播放
	        	}
	        	
	        }
	        var length = Math.sqrt((dy-y)*(dy-y) + (dx-x)*(dx-x));
	        return Tween.to(this, {x: dx,y: dy}, 10*length, null, null, 10);		
		}
	}
}

