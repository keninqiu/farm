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
var entities;
(function (entities) {
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
    entities.Map = Map;
})(entities || (entities = {}));
//# sourceMappingURL=Map.js.map