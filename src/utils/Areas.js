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
//# sourceMappingURL=Areas.js.map