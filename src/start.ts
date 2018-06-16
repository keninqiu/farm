// 程序入口
import Player = entities.Player;
import Map = entities.Map;

import MediaUtil = utils.MediaUtil;

import Tween = laya.utils.Tween;
import Ease = laya.utils.Ease;
import Rectangle =  laya.maths.Rectangle;


var Barriers = [
    {x:780,y:450},
    {x:880,y:490},
    {x:980,y:400},
    {x:780,y:300},
    {x:1030,y:100},
    {x:1188,y:295},
    {x:1774,y:540},
    {x:1514,y:620},
    {x:1244,y:490},
    {x:1244,y:490},
    {x:988,y:685},
    {x:1294,y:830},
    {x:1224,y:930},
    {x:1060,y:960},
    {x:570,y:630},
];


var SpritesData = [
    {
        type:"Dog",
        x:1296,
        y:350,
        width:110,
        height:130
    },
    {
        type:"Pumpkin",
        x:1008,
        y:619,
        width:296,
        height:180
    },

    {
        type:"Tomato",
        x:733,
        y:293,
        width:252,
        height:215
    }, 

    {
        type:"Fog",
        x:1169,
        y:891,
        width:95,
        height:65
    },                 
];

class GameMain{

    public player:Player;
    public tweenObj:Tween;
    constructor()
    {
        Laya.init(Laya.Browser.clientWidth,Laya.Browser.clientHeight, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;

        Laya.stage.scaleMode = "showall";
        //Laya.stage.screenMode = "horizontal";
        Laya.stage.fullScreenEnabled = true;

    }


    segmentsIntr(a, b, c, d){  
      
    /** 1 解线性方程组, 求线段交点. **/  
    // 如果分母为0 则平行或共线, 不相交  
        var denominator = (b.y - a.y)*(d.x - c.x) - (a.x - b.x)*(c.y - d.y);  
        if (denominator==0) {  
            return false;  
        }  
       
    // 线段所在直线的交点坐标 (x , y)      
        var x = ( (b.x - a.x) * (d.x - c.x) * (c.y - a.y)   
                    + (b.y - a.y) * (d.x - c.x) * a.x   
                    - (d.y - c.y) * (b.x - a.x) * c.x ) / denominator ;  
        var y = -( (b.y - a.y) * (d.y - c.y) * (c.x - a.x)   
                    + (b.x - a.x) * (d.y - c.y) * a.y   
                    - (d.x - c.x) * (b.y - a.y) * c.y ) / denominator;  
      
    /** 2 判断交点是否在两条线段上 **/  
        if (  
            // 交点在线段1上  
            (x - a.x) * (x - b.x) <= 0 && (y - a.y) * (y - b.y) <= 0  
            // 且交点也在线段2上  
             && (x - c.x) * (x - d.x) <= 0 && (y - c.y) * (y - d.y) <= 0  
            ){  
      
            // 返回交点p  
            return {  
                    x :  x,  
                    y :  y  
                }  
        }  
        //否则不相交  
        return false  
      
    }  

    initBarriers() {
        for(var i=0;i<Barriers.length;i++)  {
            var fromX:number = Barriers[i].x * Laya.stage.width/1920;
            var fromY:number = Barriers[i].y * Laya.stage.height/1080;
            var toX:number = Barriers[(i+1)%Barriers.length].x * Laya.stage.width/1920;
            var toY:number = Barriers[(i+1)%Barriers.length].y * Laya.stage.height/1080;
            var sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawLine(fromX, fromY, toX, toY, "#ff0000", 3);
        }

    }

    initSpriteArea() {
        for(var i=0;i<SpritesData.length;i++) {
                var x:number = SpritesData[i].x * Laya.stage.width/1920;
                var y:number = SpritesData[i].y * Laya.stage.height/1080;
                var width:number = SpritesData[i].width * Laya.stage.width/1920;
                var height:number = SpritesData[i].height * Laya.stage.height/1080;
                var sp = new Laya.Sprite();
                Laya.stage.addChild(sp);
               //画矩形
                sp.graphics.drawRect(x, y, width, height, "#ffff00");                
        }
    }

    init() {
        var map:Map = new Map();
        Laya.stage.addChild(map);
        this.player = new Player();
        Laya.stage.addChild(this.player);
                
        Laya.stage.on(Laya.Event.CLICK,this,this.onMouseDown); 
  
    }

    playMediaIfIntersets(): void {
        var playerX:number = this.player.x;
        var plaerY:number = this.player.y;
        for(var i=0;i<SpritesData.length;i++) {
            var type = SpritesData[i].type;
            var x:number = SpritesData[i].x * Laya.stage.width/1920;
            var y:number = SpritesData[i].y * Laya.stage.height/1080;
            var width:number = SpritesData[i].width * Laya.stage.width/1920;
            var height:number = SpritesData[i].height * Laya.stage.height/1080;        
            var rectSprite:Rectangle = new Rectangle(x,y,width,height);
            if(rectSprite.contains(playerX,plaerY)) {
                  if(type == MediaUtil.type) {
                    return;
                  }                        
                  if((type == 'Dog') || (type == 'Fog') || (type == 'Tomato')|| (type == 'Pumpkin')) {  

                    new MediaUtil().playVideo(type);                
                    if(this.tweenObj != null && this.tweenObj != undefined) {
                      Laya.timer.clear(this,this.animateTimeBased);
                      this.tweenObj.pause();
                    }
                }
            }
            else {
                x = x - width/2;
                y = y - height/2;
                width = width * 2;
                height = height * 2;
                rectSprite = new Rectangle(x,y,width,height);
                if(rectSprite.contains(playerX,plaerY)) {
                    if((type == 'Dog') || (type == 'Fog')&&MediaUtil.readyToPlayVideo) {
                        MediaUtil.playAudio(type); 
                    }
                }
            }
        }


    }

    onMouseDown() {
        
        var dx:number = Laya.stage.mouseX;
        var dy:number = Laya.stage.mouseY;
        if(dx == 0 && dy == 0) {
            return;
        }

        /*
        var sp = new Laya.Sprite();
        Laya.stage.addChild(sp);
        sp.graphics.drawLine(this.player.x, this.player.y, dx, dy, "#ff0000", 3);   
        */
        //this.initBarriers();
        //this.initSpriteArea();
        var a = {x:this.player.x,y:this.player.y};
        var b = {x:dx,y:dy};

        for(var i=0;i<Barriers.length;i++)  {
            var fromX:number = Barriers[i].x * Laya.stage.width/1920;
            var fromY:number = Barriers[i].y * Laya.stage.height/1080;
            var toX:number = Barriers[(i+1)%Barriers.length].x * Laya.stage.width/1920;
            var toY:number = Barriers[(i+1)%Barriers.length].y * Laya.stage.height/1080;
            var c = {x:fromX,y:fromY};
            var d = {x:toX,y:toY};
            var hasBarrier = this.segmentsIntr(a,b,c,d);
            if(hasBarrier != false) {
                return;
            }
        }        

        Laya.timer.loop(100, this, this.animateTimeBased);
        this.tweenObj = this.player.tweenTo(dx,dy);
        MediaUtil.readyToPlayVideo = true;
        MediaUtil.readyToPlayAudio = true;
        
    }

    moveCompleted(sprite:Player) {
    }
    animateTimeBased() {
        this.playMediaIfIntersets();

    }
}
let game = new GameMain();
game.init();