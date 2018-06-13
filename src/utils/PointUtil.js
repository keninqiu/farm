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
//# sourceMappingURL=PointUtil.js.map