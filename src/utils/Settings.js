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
//# sourceMappingURL=Settings.js.map