"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
* name
*/
var Animation = Laya.Animation;
var Handler = Laya.Handler;
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
exports.Player = Player;
//# sourceMappingURL=Player.js.map