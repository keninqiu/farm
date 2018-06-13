// 程序入口
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tween = laya.utils.Tween;
var Ease = laya.utils.Ease;
var Rectangle = laya.maths.Rectangle;
var Stage = laya.display.Stage;
var Animation = Laya.Animation;
var Handler = Laya.Handler;
var Sprite = laya.display.Sprite;
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.getWidth = function () {
        /*
        if(Laya.stage != null && Laya.stage != undefined) {
            return  Laya.Browser.clientWidth / Laya.stage.clientScaleX ;
        }
        */
        return Laya.stage.width;
    };
    Settings.getHeight = function () {
        /*
        if(Laya.stage != null && Laya.stage != undefined) {
            return  Laya.Browser.clientHeight / Laya.stage.clientScaleY;
        }
        */
        return Laya.stage.height;
    };
    return Settings;
}());
var LineUtil = /** @class */ (function () {
    function LineUtil() {
    }
    LineUtil.drawLine = function (fromX, fromY, toX, toY) {
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        sp.graphics.drawLine(fromX, fromY, toX, toY, "#ff0000", 3);
    };
    LineUtil.drawLines = function (BarriersLineSet) {
        console.log('aaaaabbbbb=' + Laya.stage._canvasTransform.a);
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        var arr = [];
        for (var i = 0; i < BarriersLineSet.length - 1; i++) {
            var x1 = BarriersLineSet[i].x * Laya.stage.width / 1920;
            console.log('x111=' + x1);
            var y1 = BarriersLineSet[i].y * Laya.stage.height / 1080;
            var x2 = BarriersLineSet[i + 1].x * Laya.stage.width / 1920;
            var y2 = BarriersLineSet[i + 1].y * Laya.stage.height / 1080;
            LineUtil.drawLine(x1, y1, x2, y2);
        }
    };
    LineUtil.segmentsIntr = function (a, b, c, d) {
        console.log('a=');
        console.log(a);
        console.log('b=');
        console.log(b);
        console.log('c=');
        console.log(c);
        console.log('d=');
        console.log(d);
        /** 1 解线性方程组, 求线段交点. **/
        // 如果分母为0 则平行或共线, 不相交  
        var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y);
        if (denominator == 0) {
            return { x: 0, y: 0 };
        }
        // 线段所在直线的交点坐标 (x , y)      
        var x = ((b.x - a.x) * (d.x - c.x) * (c.y - a.y)
            + (b.y - a.y) * (d.x - c.x) * a.x
            - (d.y - c.y) * (b.x - a.x) * c.x) / denominator;
        var y = -((b.y - a.y) * (d.y - c.y) * (c.x - a.x)
            + (b.x - a.x) * (d.y - c.y) * a.y
            - (d.x - c.x) * (b.y - a.y) * c.y) / denominator;
        /** 2 判断交点是否在两条线段上 **/
        if (
        // 交点在线段1上  
        (x - a.x) * (x - b.x) <= 0 && (y - a.y) * (y - b.y) <= 0
            // 且交点也在线段2上  
            && (x - c.x) * (x - d.x) <= 0 && (y - c.y) * (y - d.y) <= 0) {
            // 返回交点p  
            return {
                x: x,
                y: y
            };
        }
        //否则不相交  
        return { x: 0, y: 0 };
    };
    return LineUtil;
}());
/*
class PointUtil{
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
*/
var MediaUtil = /** @class */ (function () {
    function MediaUtil() {
    }
    MediaUtil.playVideo = function (type) {
        if ((type == 'Dog') && (MediaUtil.readyToPlayVideo)) {
            $('#videoId').attr('src', 'res/mp4/dog.mp4');
            $('#myModal').modal('toggle');
            MediaUtil.readyToPlayVideo = false;
            MediaUtil.type = type;
        }
        else if ((type == 'Tomato') && (MediaUtil.readyToPlayVideo)) {
            $('#videoId').attr('src', 'res/mp4/tomato.mp4');
            $('#myModal').modal('toggle');
            MediaUtil.readyToPlayVideo = false;
            MediaUtil.type = type;
        }
        else if ((type == 'Fog') && (MediaUtil.readyToPlayVideo)) {
            $('#videoId').attr('src', 'res/mp4/fog.mp4');
            $('#myModal').modal('toggle');
            MediaUtil.readyToPlayVideo = false;
            MediaUtil.type = type;
        }
        else if ((type == 'Pumpkin') && (MediaUtil.readyToPlayVideo)) {
            $('#videoId').attr('src', 'res/mp4/pumpkin.mp4');
            $('#myModal').modal('toggle');
            MediaUtil.readyToPlayVideo = false;
            MediaUtil.type = type;
        }
    };
    MediaUtil.playAudio = function (type) {
        if ((type == 'Dog') && (MediaUtil.readyToPlayAudio)) {
            SoundManager.playMusic("res/audio/dog.mp3", 1, null);
            MediaUtil.readyToPlayAudio = false;
        }
        else if ((type == 'Fog') && (MediaUtil.readyToPlayAudio)) {
            SoundManager.playMusic("res/audio/fog.wav", 1, null);
            MediaUtil.readyToPlayAudio = false;
        }
    };
    MediaUtil.readyToPlayVideo = false;
    MediaUtil.readyToPlayAudio = false;
    MediaUtil.type = '';
    return MediaUtil;
}());
var Creature = /** @class */ (function (_super) {
    __extends(Creature, _super);
    function Creature(type, x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.visible = false;
        x = x * Settings.getWidth() / 1920;
        y = y * Settings.getHeight() / 1080;
        _this.autoSize = true;
        width = width * Settings.getWidth() / 1920;
        height = height * Settings.getHeight() / 1080;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.loadImage("res/img/bg.png", x, y, width, height);
        return _this;
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
    Creature.COUNT = 20;
    return Creature;
}(Laya.Sprite));
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super.call(this) || this;
        _this.visible = true;
        _this.loadImage("res/img/bg.png", 0, 0, Settings.getWidth(), Settings.getHeight());
        return _this;
    }
    return Map;
}(Laya.Sprite));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.dx = _this.dy = 0;
        _this.x = 750 * Settings.getWidth() / 1920;
        _this.y = 520 * Settings.getHeight() / 1080;
        _this.roleAni = new Animation(); //创建一个 Animation 类的实例对象 animation 。
        _this.roleAni.loadAtlas("res/img/player/后面序列.atlas", Handler.create(_this, _this.onLoaded)); //加载图集并播放
        //this.roleAni.scaleX = 0.4 * Settings.getWidth()/1920;
        //this.roleAni.scaleY = 0.4 * Settings.getHeight()/1080;
        _this.roleAni.interval = 50; //设置 animation 对象的动画播放间隔时间，单位：毫秒。
        _this.roleAni.play(); //播放动画。
        _this.addChild(_this.roleAni); //将 animation 对象添加到显示列表。
        return _this;
    }
    Player.prototype.onLoaded = function () {
        //获得动画矩形边界
        if (this.roleAni.width === 0) {
            //获得动画矩形边界
            var bounds = this.roleAni.getBounds();
            console.log('bound=');
            console.log(bounds);
            //角色宽高赋值
            this.roleAni.size(bounds.width, bounds.height);
        }
    };
    Player.prototype.tweenTo = function (dx, dy) {
        if (dx == 0 && dy == 0) {
            return;
        }
        var x = this.x;
        var y = this.y;
        var deltaX = Math.abs(dx - x);
        var deltaY = Math.abs(dy - y);
        if (deltaX < deltaY) {
            if (dy < y) {
                this.roleAni.loadAtlas("res/img/player/后面序列.atlas");
            }
            else {
                this.roleAni.loadAtlas("res/img/player/正面序列.atlas");
            }
        }
        else {
            if (dx < x) {
                this.roleAni.loadAtlas("res/img/player/侧左序列.atlas");
            }
            else {
                this.roleAni.loadAtlas("res/img/player/侧右序列.atlas");
            }
        }
        var length = Math.sqrt((dy - y) * (dy - y) + (dx - x) * (dx - x));
        var spriteWidth = this.roleAni.width;
        var spriteHeight = this.roleAni.height;
        console.log('spriteWidth=' + spriteWidth);
        console.log('spriteHeight=' + spriteHeight);
        return Tween.to(this, { x: dx - spriteWidth / 2, y: dy - spriteHeight }, 10 * length, null, null, 10);
    };
    return Player;
}(Laya.Sprite));
var BarriersLineSet = [
    {
        x: 850, y: 500
    },
    {
        x: 850 - 90, y: 500 - 50
    },
    {
        x: 850 - 220, y: 500 + 120
    },
    {
        x: 850 + 260, y: 500 + 440
    },
    {
        x: 850 + 450, y: 500 + 330
    },
    {
        x: 850 + 250, y: 500 + 230
    },
];
var BarriersData = [
    {
        type: "House",
        x: 0,
        y: 0,
        width: 749,
        height: 452
    },
    {
        type: "LeftBottom",
        x: 0,
        y: 222,
        width: 626,
        height: 629
    },
    {
        type: "Barrier3",
        x: 300,
        y: 382,
        width: 192,
        height: 321
    },
    {
        type: "Barrier4",
        x: 395,
        y: 452,
        width: 712,
        height: 177
    },
    {
        type: "Barrier5",
        x: 595,
        y: 502,
        width: 251,
        height: 75
    },
    {
        type: "Barrier6",
        x: 655,
        y: 302,
        width: 604,
        height: 480
    },
    {
        type: "Barrier7",
        x: 865,
        y: 0,
        width: 180,
        height: 599
    },
    {
        type: "Barrier8",
        x: 575,
        y: 0,
        width: 772,
        height: 249
    },
    {
        type: "Barrier9",
        x: 0,
        y: 0,
        width: 954,
        height: 169
    },
    {
        type: "Barrier10",
        x: 341,
        y: 139,
        width: 271,
        height: 203
    },
    {
        type: "Barrier11",
        x: 615,
        y: 290,
        width: 320,
        height: 444
    },
    {
        type: "Barrier12",
        x: 726,
        y: 293,
        width: 412,
        height: 78
    },
    {
        type: "Barrier13",
        x: 835,
        y: 238,
        width: 250,
        height: 252
    },
    {
        type: "Pumpkin",
        x: 443,
        y: 425,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 423,
        y: 410,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 403,
        y: 395,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 383,
        y: 380,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 383,
        y: 400,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 583,
        y: 345,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 563,
        y: 330,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 543,
        y: 315,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 523,
        y: 300,
        width: 86,
        height: 81
    },
    {
        type: "Barrier14",
        x: 533,
        y: 240,
        width: 407,
        height: 229
    },
];
var SpritesData = [
    {
        type: "Dog",
        x: 646,
        y: 182,
        width: 76,
        height: 100
    },
    {
        type: "Pumpkin",
        x: 513,
        y: 309,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 543,
        y: 325,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 573,
        y: 341,
        width: 86,
        height: 81
    },
    {
        type: "Pumpkin",
        x: 603,
        y: 357,
        width: 86,
        height: 81
    },
    {
        type: "Tomato",
        x: 443,
        y: 173,
        width: 82,
        height: 85
    },
    {
        type: "Tomato",
        x: 421,
        y: 192,
        width: 82,
        height: 85
    },
    {
        type: "Tomato",
        x: 396,
        y: 177,
        width: 82,
        height: 85
    },
    {
        type: "Tomato",
        x: 370,
        y: 167,
        width: 82,
        height: 85
    },
    {
        type: "Tomato",
        x: 344,
        y: 154,
        width: 82,
        height: 85
    },
    {
        type: "Tomato",
        x: 354,
        y: 144,
        width: 82,
        height: 85
    },
    {
        type: "Tomato",
        x: 417,
        y: 162,
        width: 82,
        height: 85
    },
    {
        type: "Fog",
        x: 619,
        y: 451,
        width: 105,
        height: 115
    },
];
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        Laya.stage.fullScreenEnabled = true;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = "showall";
        Laya.stage.screenMode = "horizontal";
        console.log('aaaaa=' + Laya.stage._canvasTransform.a);
    }
    GameMain.prototype.initSprites = function () {
        this.creatures = new Array(SpritesData.length);
        for (var i = 0; i < SpritesData.length; i++) {
            var spriteData = SpritesData[i];
            var sprite = new Creature(spriteData.type, spriteData.x, spriteData.y, spriteData.width, spriteData.height);
            this.creatures[i] = sprite;
            Laya.stage.addChild(sprite);
        }
        ;
    };
    GameMain.prototype.initBarriers = function () {
        /*
            this.barriers = new Array(BarriersData.length);
            for(var i=0;i<BarriersData.length;i++)  {
                var spriteData = BarriersData[i];
                
                var sprite:Barrier = new Barrier(
                    spriteData.type,
                    spriteData.x,
                    spriteData.y,
                    spriteData.width,
                    spriteData.height
                );
                this.barriers[i] = sprite;
                Laya.stage.addChild(sprite);
                
            };
         */
        for (var i = 0; i < BarriersLineSet.length; i++) {
            var line = BarriersLineSet[i];
            LineUtil.drawLines(BarriersLineSet);
        }
    };
    GameMain.prototype.init = function () {
        var map = new Map();
        Laya.stage.addChild(map);
        this.initSprites();
        this.player = new Player();
        Laya.stage.addChild(this.player);
        //this.initBarriers();        
        Laya.stage.on(Laya.Event.CLICK, this, this.onMouseDown);
    };
    /*
        private stopIfBarriers(): void {
            var rect = this.player.getBounds();
            rect = new Laya.Rectangle(rect.x,rect.y,rect.width*0.25,rect.height*0.25);
    
            if(this.barriers != undefined) {
                for(var i=0;i<this.barriers.length;i++) {
                    var barrier = this.barriers[i];
                    var rectBarrier = barrier.getBounds();
                    if(rectBarrier.intersects(rect)) {
                        this.tweenObj.pause();
                        return;
                    }
                }
            }
            if(this.creatures != undefined) {
                var rectBarrier2 = this.creatures[12].getBounds();
                if(rectBarrier2.intersects(rect)) {
                    this.tweenObj.pause();
                    return;
                }
            }
        }
    */
    GameMain.prototype.playMediaIfIntersets = function () {
        var rect = this.player.getBounds();
        //var rect = new Rectangle(this.player.x,this.player.y,this.player.width,this.player.height);
        var rectNearBy = new Rectangle(rect.x, rect.y, rect.width * 1.4, rect.height * 1.4);
        if (this.creatures != undefined) {
            for (var i = 0; i < this.creatures.length; i++) {
                var creature = this.creatures[i];
                var type = creature.type;
                var rectCreture = creature.getBounds();
                //var rectCreture:Rectangle = new Rectangle(creature.x,creature.y,creature.width,creature.height);
                if (rectCreture.intersects(rect)) {
                    console.log('rect=');
                    console.log(rect);
                    console.log('rectCreture=');
                    console.log(rectCreture);
                    if (type == MediaUtil.type) {
                        return;
                    }
                    if ((type == 'Dog') || (type == 'Fog') || (type == 'Tomato') || (type == 'Pumpkin')) {
                        MediaUtil.playVideo(type);
                        if (this.tweenObj != null && this.tweenObj != undefined) {
                            Laya.timer.clear(this, this.animateTimeBased);
                            this.tweenObj.pause();
                        }
                    }
                }
                else if (creature.getBounds().intersects(rectNearBy)) {
                    MediaUtil.playAudio(type);
                }
            }
        }
    };
    GameMain.prototype.onMouseDown = function (parm) {
        console.log('parm=');
        console.log(parm);
        var dx = parm.stageX;
        var dy = parm.stageY;
        if (dx == 0 && dy == 0) {
            return;
        }
        this.initBarriers();
        /*
        if(this.barriers != undefined) {
            for(var i=0;i<this.barriers.length;i++) {
                var barrier = this.barriers[i];
                var rectBarrier = barrier.getBounds();
                //console.log('dx='+dx+',dy='+dy+'rectBarrier=');
                //console.log(rectBarrier);
                if(rectBarrier.contains(dx,dy)) {
                    console.log('contains and return');
                    return;
                }
            }
        }
        */
        var a = { x: this.player.x, y: this.player.y };
        var b = { x: dx, y: dy };
        LineUtil.drawLine(this.player.x, this.player.y, dx, dy);
        //var interactPoint:(boolean | { x: number; y: number; });
        for (var i = 0; i < BarriersLineSet.length - 1; i++) {
            var x1 = BarriersLineSet[i].x * Laya.stage.width / 1920;
            var y1 = BarriersLineSet[i].y * Laya.stage.height / 1080;
            var x2 = BarriersLineSet[i + 1].x * Laya.stage.width / 1920;
            var y2 = BarriersLineSet[i + 1].y * Laya.stage.height / 1080;
            var c = { x: x1, y: y1 };
            var d = { x: x2, y: y2 };
            var interactPoint = LineUtil.segmentsIntr(a, b, c, d);
            if (interactPoint.x != 0) {
                break;
            }
        }
        console.log('interactPoint=');
        console.log(interactPoint);
        if (interactPoint.x == 0 && interactPoint.y == 0) {
            this.tweenObj = this.player.tweenTo(dx, dy);
        }
        else {
            this.tweenObj = this.player.tweenTo(interactPoint.x, interactPoint.y);
        }
        //Laya.timer.loop(100, this, this.animateTimeBased);
        MediaUtil.readyToPlayVideo = true;
        MediaUtil.readyToPlayAudio = true;
    };
    GameMain.prototype.moveCompleted = function (sprite) {
    };
    GameMain.prototype.animateTimeBased = function () {
        //this.stopIfBarriers();
        this.playMediaIfIntersets();
    };
    return GameMain;
}());
var game = new GameMain();
game.init();
//# sourceMappingURL=start.js.map