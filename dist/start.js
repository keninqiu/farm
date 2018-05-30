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
/**
* name
*/
var entities;
(function (entities) {
    var Map = /** @class */ (function (_super) {
        __extends(Map, _super);
        function Map() {
            var _this = _super.call(this) || this;
            _this.loadImage("res/img/bg.jpg", 0, 0);
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
            _this.loadImage("res/img/player/player1.jpg", _this.x, _this.y, _this.width, _this.height);
            return _this;
        }
        return Player;
    }(entities.Animal));
    entities.Player = Player;
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
var Areas = utils.Areas;
var Area = utils.Area;
var Dog = entities.animals.Dog;
var Fog = entities.animals.Fog;
var Pumpkin = entities.plants.Pumpkin;
var Tomato = entities.plants.Tomato;
var PointUtil = utils.PointUtil;
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(800, 600);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
    }
    GameMain.prototype.init = function () {
        var point;
        this.dogs = new Array(Dog.COUNT);
        this.fogs = new Array(Fog.COUNT);
        this.pumpkins = new Array(Pumpkin.COUNT);
        this.tomatos = new Array(Tomato.COUNT);
        var map = new Map();
        Laya.stage.addChild(map);
        this.player = new Player();
        Laya.stage.addChild(this.player);
        var dogsArea = Areas.getDogsArea();
        var fogsArea = Areas.getFogsArea();
        for (var i = 0; i < Dog.COUNT; i++) {
            point = PointUtil.getRandPointWithin(Areas.getDogsArea());
            var dog = new Dog(point.x, point.y);
            Laya.stage.addChild(dog);
            this.dogs.push(dog);
        }
        for (var i = 0; i < Fog.COUNT; i++) {
            point = PointUtil.getRandPointWithin(Areas.getFogsArea());
            var fog = new Fog(point.x, point.y);
            Laya.stage.addChild(fog);
            this.fogs.push(fog);
        }
        var pumpkin = new Pumpkin(350, 150);
        Laya.stage.addChild(pumpkin);
        this.pumpkins.push(pumpkin);
        var tomato = new Tomato(350, 50);
        Laya.stage.addChild(tomato);
        this.tomatos.push(tomato);
        Laya.timer.loop(200, this, this.animateTimeBased);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    };
    GameMain.prototype.showVideo = function () {
        var x = Laya.stage.mouseX;
        var y = Laya.stage.mouseY;
        console.log("x=" + x + "y=" + y);
        var showing = false;
        if (this.dogs != undefined) {
            this.dogs.forEach(function (dog) {
                if (showing) {
                    return;
                }
                if (dog.getBounds().contains(x, y)) {
                    $('#videoId').attr('src', 'res/mp4/狗.mp4');
                    $('#myModal').modal('toggle');
                    showing = true;
                }
            });
        }
        if (this.fogs != undefined) {
            this.fogs.forEach(function (fog) {
                if (showing) {
                    return;
                }
                if (fog.getBounds().contains(x, y)) {
                    $('#videoId').attr('src', 'res/mp4/青蛙.mp4');
                    $('#myModal').modal('toggle');
                    showing = true;
                }
            });
        }
        if (this.pumpkins != undefined) {
            this.pumpkins.forEach(function (pumpkin) {
                if (showing) {
                    return;
                }
                if (pumpkin.getBounds().contains(x, y)) {
                    $('#videoId').attr('src', 'res/mp4/南瓜.mp4');
                    $('#myModal').modal('toggle');
                    showing = true;
                }
            });
        }
        if (this.tomatos != undefined) {
            this.tomatos.forEach(function (tomato) {
                if (showing) {
                    return;
                }
                if (tomato.getBounds().contains(x, y)) {
                    $('#videoId').attr('src', 'res/mp4/西红柿.mp4');
                    $('#myModal').modal('toggle');
                    showing = true;
                }
            });
        }
    };
    GameMain.prototype.onMouseDown = function () {
        this.player.setDestination(Laya.stage.mouseX - this.player.width / 2, Laya.stage.mouseY - this.player.height / 2);
        this.showVideo();
    };
    GameMain.prototype.animateTimeBased = function () {
        //console.log("haha");
        if (this.dogs != undefined) {
            this.dogs.forEach(function (value) {
                value.moveArround();
            });
        }
        if (this.fogs != undefined) {
            this.fogs.forEach(function (value) {
                value.moveArround();
            });
        }
        this.player.moveTo(PointUtil.nextPositionForDestination(this.player.x, this.player.y, this.player.dx, this.player.dy, this.player.speed));
    };
    return GameMain;
}());
var game = new GameMain();
game.init();
//# sourceMappingURL=start.js.map