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
/**
* name
*/
var utils;
(function (utils) {
    var Area = /** @class */ (function () {
        function Area(x1, y1, x2, y2) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        return Area;
    }());
    utils.Area = Area;
})(utils || (utils = {}));
/**
* name
*/
var utils;
(function (utils) {
    var Areas = /** @class */ (function () {
        function Areas() {
        }
        Areas.getDogsArea = function () {
            return new utils.Area(50, 50, 300, 200);
        };
        Areas.getFogsArea = function () {
            return new utils.Area(50, 350, 300, 550);
        };
        return Areas;
    }());
    utils.Areas = Areas;
})(utils || (utils = {}));
var utils;
(function (utils) {
    var Sprite = Laya.Sprite;
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
    utils.LineUtil = LineUtil;
})(utils || (utils = {}));
/**
* name
*/
var SoundManager = Laya.SoundManager;
var utils;
(function (utils) {
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
    utils.MediaUtil = MediaUtil;
})(utils || (utils = {}));
/**
* name
*/
var Point = Laya.Point;
var utils;
(function (utils) {
    var PointUtil = /** @class */ (function () {
        function PointUtil() {
        }
        PointUtil.getRandPointWithin = function (area) {
            var x1 = area.x1;
            var y1 = area.y1;
            var x2 = area.x2;
            var y2 = area.y2;
            var rand1 = Math.random();
            var rand2 = Math.random();
            return new Point(x1 + (x2 - x1) * rand1, y1 + (y2 - y1) * rand2);
        };
        PointUtil.nextPositionForDestination = function (x, y, dx, dy, speed) {
            if ((dx == 0) && (dy == 0)) {
                return null;
            }
            if ((dx == x) && (dy == y)) {
                return null;
            }
            var deltaX = dx - x;
            var deltaY = dy - y;
            var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (speed >= length) {
                return new Point(dx, dy);
            }
            var resultX = x + speed * (dx - x) / length;
            var resultY = y + speed * (dy - y) / length;
            //console.log("x="+x+",y="+y+",dx="+dx+",dy="+dy+",resultX="+resultX+",resultY="+resultY);
            return new Point(resultX, resultY);
        };
        return PointUtil;
    }());
    utils.PointUtil = PointUtil;
})(utils || (utils = {}));
var utils;
(function (utils) {
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
    utils.Settings = Settings;
})(utils || (utils = {}));
/**
* name
*/
var entities;
(function (entities) {
    var Animal = /** @class */ (function (_super) {
        __extends(Animal, _super);
        function Animal(x, y) {
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this.speed = 3;
            _this.dx = _this.dy = 0;
            _this.width = 192;
            _this.height = 108;
            return _this;
        }
        Animal.prototype.moveArround = function () {
            var reachDestination = ((this.x - this.dx) * (this.x - this.dx) + (this.y - this.dy) * (this.y - this.dy)) <= this.speed * this.speed;
            //console.log("reachDestination=" + reachDestination);
            if ((this.dx == 0 && this.dy == 0) || reachDestination) {
                //console.log('dx1=' + this.dx);
                var destPoint = PointUtil.getRandPointWithin(Areas.getDogsArea());
                //console.log(destPoint);
                this.setDestination(destPoint.x, destPoint.y);
            }
            else {
                //console.log('dx2=' + this.dx);
                this.moveTo(PointUtil.nextPositionForDestination(this.x, this.y, this.dx, this.dy, this.speed));
            }
        };
        Animal.prototype.moveTo = function (point) {
            //console.log("width=" + this.width);
            if (point != null) {
                this.x = point.x;
                this.y = point.y;
                //console.log(this.x);
                //console.log(this.width);				
            }
        };
        Animal.prototype.setDestination = function (x, y) {
            this.dx = x;
            this.dy = y;
        };
        Animal.COUNT = 5;
        return Animal;
    }(Laya.Sprite));
    entities.Animal = Animal;
})(entities || (entities = {}));
var entities;
(function (entities) {
    var Barrier = /** @class */ (function (_super) {
        __extends(Barrier, _super);
        function Barrier(type, x, y, width, height) {
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.visible = false;
            x = x * Laya.Browser.clientWidth / 1920;
            y = y * Laya.Browser.clientHeight / 1080;
            _this.autoSize = true;
            width = width * Laya.Browser.clientWidth / 1920;
            height = height * Laya.Browser.clientHeight / 1080;
            _this.x = x;
            _this.y = y;
            _this.width = width;
            _this.height = height;
            _this.loadImage("res/img/bg.png", x, y, width, height);
            return _this;
            /*
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
            else if(type == 'Barrier14') {
                this.loadImage("res/img/barriers/barrier14.png",x,y,width,height);
            }
            else if(type == 'Pumpkin')	{
                this.loadImage("res/img/plants/pumpkin/pumpkin1.png",x,y,width,height);
            }
            */
        }
        Barrier.COUNT = 20;
        return Barrier;
    }(Laya.Sprite));
    entities.Barrier = Barrier;
})(entities || (entities = {}));
var entities;
(function (entities) {
    var Creature = /** @class */ (function (_super) {
        __extends(Creature, _super);
        function Creature(type, x, y, width, height) {
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.visible = false;
            x = x * Laya.Browser.clientWidth / 1920;
            y = y * Laya.Browser.clientHeight / 1080;
            _this.autoSize = true;
            width = width * Laya.Browser.clientWidth / 1920;
            height = height * Laya.Browser.clientHeight / 1080;
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
    entities.Creature = Creature;
})(entities || (entities = {}));
/**
* name
*/
var entities;
(function (entities) {
    var Map = /** @class */ (function (_super) {
        __extends(Map, _super);
        function Map() {
            var _this = _super.call(this) || this;
            _this.visible = true;
            _this.loadImage("res/img/bg.png", 0, 0, Laya.Browser.clientWidth, Laya.Browser.clientHeight);
            return _this;
            /*
            if(Laya.Browser.clientWidth < Laya.Browser.clientHeight) {
                this.loadImage("res/img/bg.png",0,0,Laya.Browser.clientHeight,Laya.Browser.clientWidth);
            }
            else {
                this.loadImage("res/img/bg.png",0,0,Laya.Browser.clientWidth,Laya.Browser.clientHeight);
            }
            */
        }
        return Map;
    }(Laya.Sprite));
    entities.Map = Map;
})(entities || (entities = {}));
/**
* name
*/
var entities;
(function (entities) {
    var Plant = /** @class */ (function (_super) {
        __extends(Plant, _super);
        function Plant() {
            return _super.call(this) || this;
        }
        Plant.COUNT = 1;
        return Plant;
    }(Laya.Sprite));
    entities.Plant = Plant;
})(entities || (entities = {}));
/**
* name
*/
var Animation = Laya.Animation;
var Handler = Laya.Handler;
var entities;
(function (entities) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this, 0, 0) || this;
            _this.dx = _this.dy = 0;
            _this.x = 750 * Laya.stage.width / 1920;
            _this.y = 640 * Laya.stage.height / 1080;
            _this.roleAni = new Animation(); //创建一个 Animation 类的实例对象 animation 。
            _this.roleAni.loadAtlas("res/img/player/后面序列.atlas", Handler.create(_this, _this.onLoadedBackSeq)); //加载图集并播放
            _this.roleAni.scaleX = 0.4 * Laya.stage.width / 1920;
            _this.roleAni.scaleY = 0.4 * Laya.stage.height / 1080;
            _this.roleAni.interval = 50; //设置 animation 对象的动画播放间隔时间，单位：毫秒。
            _this.roleAni.play(); //播放动画。
            _this.addChild(_this.roleAni); //将 animation 对象添加到显示列表。
            return _this;
        }
        Player.prototype.onLoadedBackSeq = function () {
            //获得动画矩形边界
            var bounds = this.getBounds();
            var width = 218;
            var height = 306;
            this.size(width * this.roleAni.scaleX, height * this.roleAni.scaleY);
            this.pivotX = this.width / 2;
            this.pivotY = this.height;
        };
        Player.prototype.onLoadedFrontSeq = function () {
            //获得动画矩形边界
            var bounds = this.getBounds();
            var width = 178;
            var height = 258;
            this.size(width * this.roleAni.scaleX, height * this.roleAni.scaleY);
            this.pivotX = this.width / 2;
            this.pivotY = this.height;
        };
        Player.prototype.onLoadedLeftSeq = function () {
            //获得动画矩形边界
            var bounds = this.getBounds();
            var width = 183;
            var height = 360;
            this.size(width * this.roleAni.scaleX, height * this.roleAni.scaleY);
            this.pivotX = this.width / 2;
            this.pivotY = this.height;
        };
        Player.prototype.onLoadedRightSeq = function () {
            //获得动画矩形边界
            var bounds = this.getBounds();
            var width = 183;
            var height = 360;
            this.size(width * this.roleAni.scaleX, height * this.roleAni.scaleY);
            this.pivotX = this.width / 2;
            this.pivotY = this.height;
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
                    this.roleAni.loadAtlas("res/img/player/后面序列.atlas", Handler.create(this, this.onLoadedBackSeq)); //加载图集并播放
                }
                else {
                    this.roleAni.loadAtlas("res/img/player/正面序列.atlas", Handler.create(this, this.onLoadedFrontSeq)); //加载图集并播放
                }
            }
            else {
                if (dx < x) {
                    this.roleAni.loadAtlas("res/img/player/侧左序列.atlas", Handler.create(this, this.onLoadedLeftSeq)); //加载图集并播放
                }
                else {
                    this.roleAni.loadAtlas("res/img/player/侧右序列.atlas", Handler.create(this, this.onLoadedRightSeq)); //加载图集并播放
                }
            }
            var length = Math.sqrt((dy - y) * (dy - y) + (dx - x) * (dx - x));
            return Tween.to(this, { x: dx, y: dy }, 10 * length, null, null, 10);
        };
        return Player;
    }(entities.Animal));
    entities.Player = Player;
})(entities || (entities = {}));
var entities;
(function (entities) {
    var animals;
    (function (animals) {
        var Cat = /** @class */ (function (_super) {
            __extends(Cat, _super);
            function Cat(x, y) {
                var _this = _super.call(this, x, y) || this;
                _this.width = 100;
                _this.height = 100;
                _this.loadImage("res/img/animals/cat/cat1.png", x, y, _this.width, _this.height);
                _this.mouseEnabled = true;
                _this.autoSize = true;
                return _this;
            }
            return Cat;
        }(entities.Animal));
        animals.Cat = Cat;
    })(animals = entities.animals || (entities.animals = {}));
})(entities || (entities = {}));
/**
* name
*/
var entities;
(function (entities) {
    var animals;
    (function (animals) {
        var Dog = /** @class */ (function (_super) {
            __extends(Dog, _super);
            function Dog(x, y) {
                var _this = _super.call(this, x, y) || this;
                _this.loadImage("res/img/animals/dog/dog1.png", x, y, _this.width, _this.height);
                _this.mouseEnabled = true;
                _this.autoSize = true;
                return _this;
                //this.on(Laya.Event.CLICK, this, this.onClick);
            }
            return Dog;
        }(entities.Animal));
        animals.Dog = Dog;
    })(animals = entities.animals || (entities.animals = {}));
})(entities || (entities = {}));
/**
* name
*/
var entities;
(function (entities) {
    var animals;
    (function (animals) {
        var Fog = /** @class */ (function (_super) {
            __extends(Fog, _super);
            function Fog(x, y) {
                var _this = _super.call(this, x, y) || this;
                _this.loadImage("res/img/animals/fog/fog1.png", x, y, _this.width, _this.height);
                return _this;
            }
            return Fog;
        }(entities.Animal));
        animals.Fog = Fog;
    })(animals = entities.animals || (entities.animals = {}));
})(entities || (entities = {}));
/**
* name
*/
var entities;
(function (entities) {
    var plants;
    (function (plants) {
        var Pumpkin = /** @class */ (function (_super) {
            __extends(Pumpkin, _super);
            function Pumpkin(x, y) {
                var _this = _super.call(this) || this;
                _this.loadImage("res/img/plants/pumpkin/pumpkin1.png", x, y, 192, 108);
                return _this;
            }
            return Pumpkin;
        }(entities.Plant));
        plants.Pumpkin = Pumpkin;
    })(plants = entities.plants || (entities.plants = {}));
})(entities || (entities = {}));
/**
* name
*/
var entities;
(function (entities) {
    var plants;
    (function (plants) {
        var Tomato = /** @class */ (function (_super) {
            __extends(Tomato, _super);
            function Tomato(x, y) {
                var _this = _super.call(this) || this;
                _this.loadImage("res/img/plants/tomato/tomato1.png", x, y, 192, 108);
                return _this;
            }
            return Tomato;
        }(entities.Plant));
        plants.Tomato = Tomato;
    })(plants = entities.plants || (entities.plants = {}));
})(entities || (entities = {}));
// 程序入口
var Player = entities.Player;
var Map = entities.Map;
var Creature = entities.Creature;
var Barrier = entities.Barrier;
var Areas = utils.Areas;
var Area = utils.Area;
var MediaUtil = utils.MediaUtil;
/*
import Dog = entities.animals.Dog;
import Fog = entities.animals.Fog;
import Cat = entities.animals.Cat;
import Pumpkin = entities.plants.Pumpkin;
import Tomato = entities.plants.Tomato;
*/
var Tween = laya.utils.Tween;
var Ease = laya.utils.Ease;
var Rectangle = laya.maths.Rectangle;
var PointUtil = utils.PointUtil;
var Barriers = [
    { x: 780, y: 450 },
    { x: 880, y: 490 },
    { x: 980, y: 400 },
    { x: 780, y: 300 },
    { x: 1030, y: 100 },
    { x: 1188, y: 295 },
    { x: 1774, y: 540 },
    { x: 1514, y: 620 },
    { x: 1244, y: 490 },
    { x: 1244, y: 490 },
    { x: 988, y: 685 },
    { x: 1294, y: 830 },
    { x: 1224, y: 930 },
    { x: 1060, y: 960 },
    { x: 570, y: 630 },
];
var SpritesData = [
    {
        type: "Dog",
        x: 1296,
        y: 350,
        width: 110,
        height: 130
    },
    {
        type: "Pumpkin",
        x: 1008,
        y: 619,
        width: 296,
        height: 180
    },
    {
        type: "Tomato",
        x: 733,
        y: 293,
        width: 252,
        height: 215
    },
    {
        type: "Fog",
        x: 1169,
        y: 891,
        width: 95,
        height: 65
    },
];
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = "showall";
        Laya.stage.screenMode = "horizontal";
        Laya.stage.fullScreenEnabled = true;
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
    GameMain.prototype.segmentsIntr = function (a, b, c, d) {
        /** 1 解线性方程组, 求线段交点. **/
        // 如果分母为0 则平行或共线, 不相交  
        var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y);
        if (denominator == 0) {
            return false;
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
        return false;
    };
    GameMain.prototype.initBarriers = function () {
        for (var i = 0; i < Barriers.length; i++) {
            var fromX = Barriers[i].x * Laya.stage.width / 1920;
            var fromY = Barriers[i].y * Laya.stage.height / 1080;
            var toX = Barriers[(i + 1) % Barriers.length].x * Laya.stage.width / 1920;
            var toY = Barriers[(i + 1) % Barriers.length].y * Laya.stage.height / 1080;
            var sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawLine(fromX, fromY, toX, toY, "#ff0000", 3);
        }
    };
    GameMain.prototype.initSpriteArea = function () {
        for (var i = 0; i < SpritesData.length; i++) {
            var x = SpritesData[i].x * Laya.stage.width / 1920;
            var y = SpritesData[i].y * Laya.stage.height / 1080;
            var width = SpritesData[i].width * Laya.stage.width / 1920;
            var height = SpritesData[i].height * Laya.stage.height / 1080;
            var sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            //画矩形
            sp.graphics.drawRect(x, y, width, height, "#ffff00");
        }
    };
    GameMain.prototype.init = function () {
        var map = new Map();
        Laya.stage.addChild(map);
        this.initSprites();
        this.player = new Player();
        Laya.stage.addChild(this.player);
        Laya.stage.on(Laya.Event.CLICK, this, this.onMouseDown);
    };
    GameMain.prototype.playMediaIfIntersets = function () {
        var playerX = this.player.x;
        var plaerY = this.player.y;
        for (var i = 0; i < SpritesData.length; i++) {
            var type = SpritesData[i].type;
            var x = SpritesData[i].x * Laya.stage.width / 1920;
            var y = SpritesData[i].y * Laya.stage.height / 1080;
            var width = SpritesData[i].width * Laya.stage.width / 1920;
            var height = SpritesData[i].height * Laya.stage.height / 1080;
            var rectSprite = new Rectangle(x, y, width, height);
            if (rectSprite.contains(playerX, plaerY)) {
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
            else {
                x = x - width / 2;
                y = y - height / 2;
                width = width * 2;
                height = height * 2;
                rectSprite = new Rectangle(x, y, width, height);
                if (rectSprite.contains(playerX, plaerY)) {
                    if ((type == 'Dog') || (type == 'Fog') && MediaUtil.readyToPlayVideo) {
                        MediaUtil.playAudio(type);
                    }
                }
            }
        }
    };
    GameMain.prototype.onMouseDown = function () {
        var dx = Laya.stage.mouseX;
        var dy = Laya.stage.mouseY;
        if (dx == 0 && dy == 0) {
            return;
        }
        //this.initBarriers();
        //this.initSpriteArea();
        var a = { x: this.player.x, y: this.player.y };
        var b = { x: dx, y: dy };
        for (var i = 0; i < Barriers.length; i++) {
            var fromX = Barriers[i].x * Laya.stage.width / 1920;
            var fromY = Barriers[i].y * Laya.stage.height / 1080;
            var toX = Barriers[(i + 1) % Barriers.length].x * Laya.stage.width / 1920;
            var toY = Barriers[(i + 1) % Barriers.length].y * Laya.stage.height / 1080;
            var c = { x: fromX, y: fromY };
            var d = { x: toX, y: toY };
            var hasBarrier = this.segmentsIntr(a, b, c, d);
            console.log('hasBarrier=');
            console.log(hasBarrier);
            if (hasBarrier != false) {
                return;
            }
        }
        Laya.timer.loop(100, this, this.animateTimeBased);
        this.tweenObj = this.player.tweenTo(dx, dy);
        MediaUtil.readyToPlayVideo = true;
        MediaUtil.readyToPlayAudio = true;
    };
    GameMain.prototype.moveCompleted = function (sprite) {
    };
    GameMain.prototype.animateTimeBased = function () {
        this.playMediaIfIntersets();
    };
    return GameMain;
}());
var game = new GameMain();
game.init();
//# sourceMappingURL=start.js.map