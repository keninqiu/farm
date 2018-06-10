/**
* name 
*/
import Animation = Laya.Animation;
import Handler = Laya.Handler;

module entities{
	export class Player extends Animal{
		roleAni:Animation;
		constructor(){
			super(0,0);
			this.dx = this.dy = 0;

			this.x = 750 * Laya.Browser.clientWidth/1920;
			this.y = 520 * Laya.Browser.clientHeight/1080;
			/*
			console.log('clientWidth=' + Laya.Browser.clientWidth);
			console.log('clientHeight=' + Laya.Browser.clientHeight);
			this.x = 1100;
			this.y = 100;
			*/
	 		this.roleAni = new Animation();//创建一个 Animation 类的实例对象 animation 。
	 		this.roleAni.loadAtlas("res/img/player/后面序列.atlas",Handler.create(this,this.onLoaded));//加载图集并播放
	 		this.roleAni.scaleX = 0.25;
	 		this.roleAni.scaleY = 0.25;
	 		this.roleAni.interval = 50;//设置 animation 对象的动画播放间隔时间，单位：毫秒。
	 		this.roleAni.play();//播放动画。
	 		this.addChild(this.roleAni);//将 animation 对象添加到显示列表。


		}

		onLoaded():void {
				//获得动画矩形边界
			var bounds:Rectangle=this.getBounds();
			this.size(bounds.width * Laya.Browser.clientWidth/1920,bounds.height * Laya.Browser.clientHeight/1080);
			console.log('this.width=' + this.width);
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
	        		this.roleAni.loadAtlas("res/img/player/后面序列.atlas");
	        	}
	        	else {
	        		this.roleAni.loadAtlas("res/img/player/正面序列.atlas");
	        	}
	        }
	        else {
	        	if(dx < x) {
	        		this.roleAni.loadAtlas("res/img/player/侧左序列.atlas");
	        	}
	        	else {
	        		this.roleAni.loadAtlas("res/img/player/侧右序列.atlas");
	        	}
	        	
	        }
	        var length = Math.sqrt((dy-y)*(dy-y) + (dx-x)*(dx-x));
	        return Tween.to(this, {x: dx,y: dy}, 10*length, null, null, 10);		
		}
	}
}

/*
	 * 			var animation:Animation = new Animation();//创建一个 Animation 类的实例对象 animation 。
	 * 			animation.loadAtlas("resource/ani/fighter.json");//加载图集并播放
	 * 			animation.x = 200;//设置 animation 对象的属性 x 的值，用于控制 animation 对象的显示位置。
	 * 			animation.y = 200;//设置 animation 对象的属性 x 的值，用于控制 animation 对象的显示位置。
	 * 			animation.interval = 50;//设置 animation 对象的动画播放间隔时间，单位：毫秒。
	 * 			animation.play();//播放动画。
	 * 			Laya.stage.addChild(animation);//将 animation 对象添加到显示列表。
*/
//https://github.com/layabox/layaair/tree/master/samples/res/fighter
/*
	export class Animation_Altas {
		private AniConfPath: string = "../../res/fighter/fighter.json";

		constructor() {
			// 不支持eWebGL时自动切换至Canvas
			Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
			Laya.stage.alignH = Stage.ALIGN_CENTER;

			Laya.stage.scaleMode = "showall";
			Laya.stage.bgColor = "#232628";

			ProtoBuf.load(this.AniConfPath, this.createAnimation);
		}

		private createAnimation(): void {
			var ani: Animation = new Animation();
			ani.loadAtlas(this.AniConfPath); // 加载图集动画
			ani.interval = 30; // 设置播放间隔（单位：毫秒）
			ani.index = 1; // 当前播放索引
			ani.play(); // 播放图集动画

			// 获取动画的边界信息
			var bounds: Rectangle = ani.getGraphicBounds();
			ani.pivot(bounds.width / 2, bounds.height / 2);

			ani.pos(Laya.stage.width / 2, Laya.stage.height / 2);

			Laya.stage.addChild(ani);
		}
	}
*/