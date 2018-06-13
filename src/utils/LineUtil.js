var utils;
(function (utils) {
    var Sprite = Laya.Sprite;
    var LineUtil = /** @class */ (function () {
        function LineUtil() {
        }
        LineUtil.drawLine = function (fromX, fromY, toX, toY) {
            var sp = new Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawLine(fromX, fromY, toX, toY, "#ff0000", 3);
        };
        LineUtil.drawLines = function (BarriersLineSet) {
            console.log('aaaaabbbbb=' + Laya.stage._canvasTransform.a);
            var sp = new Sprite();
            Laya.stage.addChild(sp);
            var arr = [];
            for (var i = 0; i < BarriersLineSet.length - 1; i++) {
                var x1 = BarriersLineSet[i].x * Laya.stage.width / 1920;
                console.log('x111=' + x1);
                var y1 = BarriersLineSet[i].y * Laya.stage.height / 1080;
                var x2 = BarriersLineSet[i + 1].x * Laya.stage.width / 1920;
                var y2 = BarriersLineSet[i + 1].y * Laya.stage.height / 1080;
                LineUtil.drawLine(x1, y1, x2, y2);
            }
        };
        LineUtil.segmentsIntr = function (a, b, c, d) {
            console.log('a=');
            console.log(a);
            console.log('b=');
            console.log(b);
            console.log('c=');
            console.log(c);
            console.log('d=');
            console.log(d);
            /** 1 解线性方程组, 求线段交点. **/
            // 如果分母为0 则平行或共线, 不相交  
            var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y);
            if (denominator == 0) {
                return { x: 0, y: 0 };
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
            return { x: 0, y: 0 };
        };
        return LineUtil;
    }());
    utils.LineUtil = LineUtil;
})(utils || (utils = {}));
//# sourceMappingURL=LineUtil.js.map