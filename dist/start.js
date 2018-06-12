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
            _this.x = 750 * Laya.Browser.clientWidth / 1920;
            _this.y = 520 * Laya.Browser.clientHeight / 1080;
            /*
            console.log('clientWidth=' + Laya.Browser.clientWidth);
            console.log('clientHeight=' + Laya.Browser.clientHeight);
            this.x = 1100;
            this.y = 100;
            */
            _this.roleAni = new Animation(); //创建一个 Animation 类的实例对象 animation 。
            _this.roleAni.loadAtlas("res/img/player/后面序列.atlas", Handler.create(_this, _this.onLoaded)); //加载图集并播放
            _this.roleAni.scaleX = 0.25;
            _this.roleAni.scaleY = 0.25;
            _this.roleAni.interval = 50; //设置 animation 对象的动画播放间隔时间，单位：毫秒。
            _this.roleAni.play(); //播放动画。
            _this.addChild(_this.roleAni); //将 animation 对象添加到显示列表。
            return _this;
        }
        Player.prototype.onLoaded = function () {
            //获得动画矩形边界
            var bounds = this.getBounds();
            this.size(bounds.width * Laya.Browser.clientWidth / 1920, bounds.height * Laya.Browser.clientHeight / 1080);
            console.log('this.width=' + this.width);
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
            return Tween.to(this, { x: dx, y: dy }, 10 * length, null, null, 10);
        };
        return Player;
    }(entities.Animal));
    entities.Player = Player;
})(entities || (entities = {}));
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
    GameMain.prototype.initBarriers = function () {
        this.barriers = new Array(BarriersData.length);
        for (var i = 0; i < BarriersData.length; i++) {
            var spriteData = BarriersData[i];
            var sprite = new Barrier(spriteData.type, spriteData.x, spriteData.y, spriteData.width, spriteData.height);
            this.barriers[i] = sprite;
            Laya.stage.addChild(sprite);
        }
        ;
        //this.barriers[i] = this.creatures[12];
    };
    GameMain.prototype.init = function () {
        var map = new Map();
        Laya.stage.addChild(map);
        this.initSprites();
        this.initBarriers();
        this.player = new Player();
        Laya.stage.addChild(this.player);
        Laya.stage.on(Laya.Event.CLICK, this, this.onMouseDown);
    };
    GameMain.prototype.stopIfBarriers = function () {
        var rect = this.player.getBounds();
        rect = new Laya.Rectangle(rect.x, rect.y, rect.width * 0.25, rect.height * 0.25);
        if (this.barriers != undefined) {
            for (var i = 0; i < this.barriers.length; i++) {
                var barrier = this.barriers[i];
                var rectBarrier = barrier.getBounds();
                if (rectBarrier.intersects(rect)) {
                    this.tweenObj.pause();
                    return;
                }
            }
        }
        if (this.creatures != undefined) {
            var rectBarrier2 = this.creatures[12].getBounds();
            if (rectBarrier2.intersects(rect)) {
                this.tweenObj.pause();
                return;
            }
        }
    };
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
        var dx = Laya.stage.mouseX;
        var dy = Laya.stage.mouseY - this.player.height;
        if (this.barriers != undefined) {
            for (var i = 0; i < this.barriers.length; i++) {
                var barrier = this.barriers[i];
                var rectBarrier = barrier.getBounds();
                //console.log('dx='+dx+',dy='+dy+'rectBarrier=');
                //console.log(rectBarrier);
                if (rectBarrier.contains(dx, dy)) {
                    console.log('contains and return');
                    return;
                }
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
        this.stopIfBarriers();
        this.playMediaIfIntersets();
    };
    return GameMain;
}());
var game = new GameMain();
game.init();
//# sourceMappingURL=start.js.map