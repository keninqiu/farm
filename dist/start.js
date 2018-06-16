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
var SoundManager = Laya.SoundManager;
var utils;
(function (utils) {
    var MediaUtil = /** @class */ (function () {
        function MediaUtil() {
        }
        MediaUtil.prototype.processHandler = function (data) {
        };
        MediaUtil.prototype.errorHandler = function (data) {
        };
        MediaUtil.prototype.completeHandler = function (e) {
            console.log(e);
            var RequestId = e.RequestId;
            console.log('RequestId1=' + RequestId);
            RequestId = e["RequestId"];
            console.log('RequestId2=' + RequestId);
            RequestId = e['RequestId'];
            console.log('RequestId3=' + RequestId);
            //var PlayAuth = e["PlayAuth"];
            //console.log('VideoId=' + VideoId);
            //console.log('PlayAuth=' + PlayAuth);
            /*
            var player = Aliplayer({id: "J_prismPlayer",autoplay: true,width: "1920px",height: "1280px",vid: VideoId,playauth: PlayAuth});
            */
            //$('#myModal').modal('toggle');
        };
        MediaUtil.prototype.playVideo = function (type) {
            var xhr = new Laya.HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
            xhr.once(Laya.Event.ERROR, this, this.errorHandler);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
            xhr.send("php/get_access.php?type=" + type, "", "get", "text");
            MediaUtil.readyToPlayVideo = false;
            MediaUtil.type = type;
            /*
                        if((type == 'Dog') && (MediaUtil.readyToPlayVideo)) {
                            $('#videoId').attr('src','https://outin-6f954cad6fd611e8b07d00163e1c91c8.oss-cn-shanghai.aliyuncs.com/eaf47c0dd72f4fba97368ed1cd9559a7/1ee3bc64822c45ed88c217ac0097c9e0-8567a6feba931e4fddb6a4c700997332-ld.mp4?Expires=1528992096&OSSAccessKeyId=LTAInFumgYEtNMvC&Signature=s089ssRWJY81Uj9qzfC3R5LJie4%3D');
                            $('#myModal').modal('toggle');
                            MediaUtil.readyToPlayVideo = false;
                            MediaUtil.type = type;
                        }
                        else if((type == 'Tomato') && (MediaUtil.readyToPlayVideo)) {
                            $('#videoId').attr('src','https://outin-6f954cad6fd611e8b07d00163e1c91c8.oss-cn-shanghai.aliyuncs.com/video/22cf11c4-163fe7c7300-0006-4502-f9b-4f456.mp4?Expires=1528987036&OSSAccessKeyId=LTAInFumgYEtNMvC&Signature=3potCU%2FC7tmoahCUYdYBpdcYisY%3D');
                            $('#myModal').modal('toggle');
                            MediaUtil.readyToPlayVideo = false;
                            MediaUtil.type = type;
                        }
                        else if((type == 'Fog') && (MediaUtil.readyToPlayVideo)) {
                            $('#videoId').attr('src','https://outin-6f954cad6fd611e8b07d00163e1c91c8.oss-cn-shanghai.aliyuncs.com/7a3c93b576324e38b7e19ec1649a932f/4d8095e0b7a0410bba464ad844833e13-7b9b3ffed635a4f1879ac34f7ff417fd-ld.mp4?Expires=1528992235&OSSAccessKeyId=LTAInFumgYEtNMvC&Signature=pXpIG0AKTlQp7E4LUg1yx2V6uhc%3D');
                            $('#myModal').modal('toggle');
                            MediaUtil.readyToPlayVideo = false;
                            MediaUtil.type = type;
                        }
                        else if((type == 'Pumpkin') && (MediaUtil.readyToPlayVideo)) {
                            $('#videoId').attr('src','https://outin-6f954cad6fd611e8b07d00163e1c91c8.oss-cn-shanghai.aliyuncs.com/dd0184b806fa41a4b385a96487b50bb8/f1327d8d3272405a8ff1ad9f5507f053-09aedfcd77da3e8ac7a7ea034bcd96e2-ld.mp4?Expires=1528991982&OSSAccessKeyId=LTAInFumgYEtNMvC&Signature=YJt50n0Fi4ldHe1nnk9yL8gLvE8%3D');
                            $('#myModal').modal('toggle');
                            MediaUtil.readyToPlayVideo = false;
                            MediaUtil.type = type;
                        }
            */
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
var entities;
(function (entities) {
    var Map = /** @class */ (function (_super) {
        __extends(Map, _super);
        function Map() {
            var _this = _super.call(this) || this;
            _this.visible = true;
            _this.loadImage("res/img/bg.jpg", 0, 0, Laya.Browser.clientWidth, Laya.Browser.clientHeight);
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
var Animation = Laya.Animation;
var Handler = Laya.Handler;
var entities;
(function (entities) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this) || this;
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
    }(Laya.Sprite));
    entities.Player = Player;
})(entities || (entities = {}));
// 程序入口
var Player = entities.Player;
var Map = entities.Map;
var MediaUtil = utils.MediaUtil;
var Tween = laya.utils.Tween;
var Ease = laya.utils.Ease;
var Rectangle = laya.maths.Rectangle;
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
                    new MediaUtil().playVideo(type);
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
        /*
        var sp = new Laya.Sprite();
        Laya.stage.addChild(sp);
        sp.graphics.drawLine(this.player.x, this.player.y, dx, dy, "#ffff00", 3);
        */
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