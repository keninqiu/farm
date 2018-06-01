/**
* name 
*/
module entities{
	export class Player extends Animal{

		constructor(){
			super(0,0);
			this.dx = this.dy = 0;
			this.width = 192;
			this.height = 108;

	 		var animation:Laya.Animation = new Laya.Animation();//创建一个 Animation 类的实例对象 animation 。
	 		animation.loadAtlas("res/img/player/player.json");//加载图集并播放
	 		//animation.x = 200;//设置 animation 对象的属性 x 的值，用于控制 animation 对象的显示位置。
	 		//animation.y = 200;//设置 animation 对象的属性 x 的值，用于控制 animation 对象的显示位置。
	 		animation.interval = 50;//设置 animation 对象的动画播放间隔时间，单位：毫秒。
	 		animation.play();//播放动画。
	 		this.addChild(animation);//将 animation 对象添加到显示列表。			
			//this.loadImage("res/img/player/player1.jpg",this.x,this.y,this.width,this.height);
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