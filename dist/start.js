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
                console.log('show video Dog');
                $('#videoId').attr('src', 'res/mp4/狗.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
            }
            else if ((type == 'Tomato') && (MediaUtil.readyToPlayVideo)) {
                console.log('show video Tomato');
                $('#videoId').attr('src', 'res/mp4/西红柿.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
            }
            else if ((type == 'Fog') && (MediaUtil.readyToPlayVideo)) {
                console.log('show video Fog');
                $('#videoId').attr('src', 'res/mp4/青蛙.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
            }
            else if ((type == 'Pumpkin') && (MediaUtil.readyToPlayVideo)) {
                console.log('show video Pumpkin');
                $('#videoId').attr('src', 'res/mp4/南瓜.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
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
        MediaUtil.readyToPlayVideo = true;
        MediaUtil.readyToPlayAudio = true;
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
            if (type == 'Dog') {
                _this.loadImage("res/img/animals/dog/dog1.png", x, y, width, height);
            }
            else if (type == 'Pumpkin') {
                _this.loadImage("res/img/plants/pumpkin/pumpkin1.png", x, y, width, height);
            }
            else if (type == 'Tomato') {
                _this.loadImage("res/img/plants/tomato/tomato1.png", x, y, width, height);
            }
            else if (type == 'Fog') {
                _this.loadImage("res/img/animals/fog/fog1.png", x, y, width, height);
            }
            return _this;
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
            _this.loadImage("res/img/bg.png", 0, 0, Laya.Browser.clientWidth, Laya.Browser.clientHeight);
            return _this;
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
var entities;
(function (entities) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this, 0, 0) || this;
            _this.dx = _this.dy = 0;
            _this.width = 192;
            _this.height = 108;
            var animation = new Laya.Animation(); //创建一个 Animation 类的实例对象 animation 。
            animation.loadAtlas("res/img/player/fighter.json"); //加载图集并播放
            animation.scaleX = 0.5;
            animation.scaleY = 0.5;
            //animation.x = 200;//设置 animation 对象的属性 x 的值，用于控制 animation 对象的显示位置。
            //animation.y = 200;//设置 animation 对象的属性 x 的值，用于控制 animation 对象的显示位置。
            animation.interval = 50; //设置 animation 对象的动画播放间隔时间，单位：毫秒。
            animation.play(); //播放动画。
            _this.addChild(animation); //将 animation 对象添加到显示列表。
            return _this;
        }
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
var Areas = utils.Areas;
var Area = utils.Area;
var MediaUtil = utils.MediaUtil;
var Dog = entities.animals.Dog;
var Fog = entities.animals.Fog;
var Cat = entities.animals.Cat;
var Pumpkin = entities.plants.Pumpkin;
var Tomato = entities.plants.Tomato;
var Tween = laya.utils.Tween;
var Ease = laya.utils.Ease;
var Rectangle = laya.maths.Rectangle;
var PointUtil = utils.PointUtil;
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
        x: 636,
        y: 479,
        width: 41,
        height: 27
    },
];
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = "showall";
        Laya.stage.fullScreenEnabled = true;
    }
    GameMain.prototype.initSprites = function () {
        this.creatures = new Array(Creature.COUNT);
        for (var i = 0; i < SpritesData.length; i++) {
            var spriteData = SpritesData[i];
            console.log(spriteData.type);
            var sprite = new Creature(spriteData.type, spriteData.x, spriteData.y, spriteData.width, spriteData.height);
            this.creatures.push(sprite);
            Laya.stage.addChild(sprite);
        }
        ;
    };
    GameMain.prototype.init = function () {
        var map = new Map();
        Laya.stage.addChild(map);
        this.initSprites();
        this.player = new Player();
        Laya.stage.addChild(this.player);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.timer.loop(1000, this, this.animateTimeBased);
        /*
        var point:Point;
        this.dogs = new Array(Dog.COUNT);
        this.fogs = new Array(Fog.COUNT);
        this.pumpkins = new Array(Pumpkin.COUNT);
        this.tomatos = new Array(Tomato.COUNT);
        var map:Map = new Map();
        Laya.stage.addChild(map);

        
        var cat:Cat = new Cat(100,100);
        Laya.stage.addChild(cat);

        
        var dogsArea:Area = Areas.getDogsArea();
        var fogsArea:Area = Areas.getFogsArea();
        for(var i=0;i<Dog.COUNT;i++) {
            point = PointUtil.getRandPointWithin(Areas.getDogsArea());
            var dog:Dog = new Dog(point.x,point.y);
            Laya.stage.addChild(dog);
            this.dogs.push(dog);
        }
        
        for(var i=0;i<Fog.COUNT;i++) {
            point = PointUtil.getRandPointWithin(Areas.getFogsArea());
            var fog:Fog = new Fog(point.x,point.y);
            Laya.stage.addChild(fog);
            this.fogs.push(fog);
        }
        
        var pumpkin:Pumpkin = new Pumpkin(350,150);
        Laya.stage.addChild(pumpkin);
        this.pumpkins.push(pumpkin);

        var tomato:Tomato = new Tomato(350,50);
        Laya.stage.addChild(tomato);
        this.tomatos.push(tomato);

        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        */
    };
    /*
                    var rect1 = dog.getBounds();
                    if(rect1.intersects(rect2)) {
                      var audio = new Audio();
                      audio.style.display = "none";
                      audio.src = "res/audio/dog.mp3";
                      audio.autoplay = true;
                    }
    */
    GameMain.prototype.playMediaIfIntersets = function () {
        var rect = this.player.getBounds();
        var rectNearBy = new Rectangle(rect.x, rect.y, rect.width * 1.4, rect.height * 1.4);
        if (this.creatures != undefined) {
            this.creatures.forEach(function (creature) {
                var type = creature.type;
                if (creature.getBounds().intersects(rect)) {
                    MediaUtil.playVideo(type);
                }
                else if (creature.getBounds().intersects(rectNearBy)) {
                    MediaUtil.playAudio(type);
                }
            });
        }
        /*
        console.log("x="+x+"y="+y);

        var realX:number = x*1920/Laya.Browser.clientWidth;
        var realY:number = y*1080/Laya.Browser.clientHeight;

        console.log("realX="+realX+"realY="+realY);
        */
        /*
        var showing:boolean = false;
        if(this.dogs != undefined) {
            this.dogs.forEach(function(dog) {
                if(showing) {
                    return;
                }
                if(dog.getBounds().contains(x,y)) {
                  $('#videoId').attr('src','res/mp4/狗.mp4');
                  $('#myModal').modal('toggle');
                  showing = true;
                }
            });
        }

        if(this.fogs != undefined) {
            this.fogs.forEach(function(fog) {
                if(showing) {
                    return;
                }
                if(fog.getBounds().contains(x,y)) {
                  $('#videoId').attr('src','res/mp4/青蛙.mp4');
                  $('#myModal').modal('toggle');
                  showing = true;
                }
            });
        }

        if(this.pumpkins != undefined) {
            this.pumpkins.forEach(function(pumpkin) {
                if(showing) {
                    return;
                }
                if(pumpkin.getBounds().contains(x,y)) {
                  $('#videoId').attr('src','res/mp4/南瓜.mp4');
                  $('#myModal').modal('toggle');
                  showing = true;
                }
            });
        }

        if(this.tomatos != undefined) {
            this.tomatos.forEach(function(tomato) {
                if(showing) {
                    return;
                }
                if(tomato.getBounds().contains(x,y)) {
                  $('#videoId').attr('src','res/mp4/西红柿.mp4');
                  $('#myModal').modal('toggle');
                  showing = true;
                }
            });
        }
        */
    };
    GameMain.prototype.onMouseDown = function () {
        console.log('mouse down');
        /*
        this.player.setDestination(Laya.stage.mouseX - this.player.width/2,Laya.stage.mouseY - this.player.height/2);
        */
        //this.showVideo();
        Tween.to(this.player, { x: Laya.stage.mouseX - this.player.width / 2, y: Laya.stage.mouseY - this.player.height / 2 }, 3000, Ease.backIn, Laya.Handler.create(this, this.moveCompleted, [this.player]), 10);
    };
    GameMain.prototype.moveCompleted = function (sprite) {
        MediaUtil.readyToPlayVideo = true;
        MediaUtil.readyToPlayAudio = true;
    };
    GameMain.prototype.animateTimeBased = function () {
        console.log("hahhehea");
        this.playMediaIfIntersets();
        /*
        if(this.dogs != undefined) {
            this.dogs.forEach(function(value) {
                value.moveArround();
            });
        }
        
        if(this.fogs != undefined) {
            this.fogs.forEach(function(value) {
                value.moveArround();
            });
        }
        
        this.player.moveTo(PointUtil.nextPositionForDestination(this.player.x,this.player.y,this.player.dx,this.player.dy,this.player.speed));

        var rect2 = this.player.getBounds();
        if(this.dogs != undefined && this.player != undefined) {
            this.dogs.forEach(function(dog) {
                var rect1 = dog.getBounds();
                if(rect1.intersects(rect2)) {
                  var audio = new Audio();
                  audio.style.display = "none";
                  audio.src = "res/audio/dog.mp3";
                  audio.autoplay = true;
                  this.playing = true;
                }
            });
        }
        */
    };
    return GameMain;
}());
var game = new GameMain();
game.init();
//# sourceMappingURL=start.js.map