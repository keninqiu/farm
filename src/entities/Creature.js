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
var entities;
(function (entities) {
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
    entities.Creature = Creature;
})(entities || (entities = {}));
//# sourceMappingURL=Creature.js.map