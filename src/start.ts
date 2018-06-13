// 程序入口
import Player = entities.Player;
import Map = entities.Map;

import Creature = entities.Creature;
import Barrier = entities.Barrier;

import Areas = utils.Areas;
import Area = utils.Area;
import MediaUtil = utils.MediaUtil;
/*
import Dog = entities.animals.Dog;
import Fog = entities.animals.Fog;
import Cat = entities.animals.Cat;
import Pumpkin = entities.plants.Pumpkin;
import Tomato = entities.plants.Tomato;
*/
import Tween = laya.utils.Tween;
import Ease = laya.utils.Ease;
import Rectangle =  laya.maths.Rectangle;

import PointUtil = utils.PointUtil;


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
var BarriersData = [

    {
        type:"House",
        x:0,
        y:0,
        width:749,
        height:452
    },
    {
        type:"LeftBottom",
        x:0,
        y:222,
        width:626,
        height:629
    },    
    {
        type:"Barrier3",
        x:300,
        y:382,
        width:192,
        height:321
    },   
    {
        type:"Barrier4",
        x:395,
        y:452,
        width:712,
        height:177
    },   
    {
        type:"Barrier5",
        x:595,
        y:502,
        width:251,
        height:75
    },    
    {
        type:"Barrier6",
        x:655,
        y:302,
        width:604,
        height:480
    }, 
    {
        type:"Barrier7",
        x:865,
        y:0,
        width:180,
        height:599
    },   
    {
        type:"Barrier8",
        x:575,
        y:0,
        width:772,
        height:249
    },   
    {
        type:"Barrier9",
        x:0,
        y:0,
        width:954,
        height:169
    },  
    {
        type:"Barrier10",
        x:341,
        y:139,
        width:271,
        height:203
    },   
    {
        type:"Barrier11",
        x:615,
        y:290,
        width:320,
        height:444
    },   
    {
        type:"Barrier12",
        x:726,
        y:293,
        width:412,
        height:78
    },  
    {
        type:"Barrier13",
        x:835,
        y:238,
        width:250,
        height:252
    }, 
    {
        type:"Pumpkin",
        x:443,
        y:425,
        width:86,
        height:81
    },  
    {
        type:"Pumpkin",
        x:423,
        y:410,
        width:86,
        height:81
    },   
    {
        type:"Pumpkin",
        x:403,
        y:395,
        width:86,
        height:81
    },   
    {
        type:"Pumpkin",
        x:383,
        y:380,
        width:86,
        height:81
    },   
    {
        type:"Pumpkin",
        x:383,
        y:400,
        width:86,
        height:81
    },   
    {
        type:"Pumpkin",
        x:583,
        y:345,
        width:86,
        height:81
    },  
    {
        type:"Pumpkin",
        x:563,
        y:330,
        width:86,
        height:81
    },
    {
        type:"Pumpkin",
        x:543,
        y:315,
        width:86,
        height:81
    },   
    {
        type:"Pumpkin",
        x:523,
        y:300,
        width:86,
        height:81
    },     
    {
        type:"Barrier14",
        x:533,
        y:240,
        width:407,
        height:229
    },                                                                     
];

var SpritesData = [
    {
        type:"Dog",
        x:646,
        y:182,
        width:76,
        height:100
    },
    {
        type:"Pumpkin",
        x:513,
        y:309,
        width:86,
        height:81
    },
    {
        type:"Pumpkin",
        x:543,
        y:325,
        width:86,
        height:81
    }, 
    {
        type:"Pumpkin",
        x:573,
        y:341,
        width:86,
        height:81
    }, 
    {
        type:"Pumpkin",
        x:603,
        y:357,
        width:86,
        height:81
    }, 
    {
        type:"Tomato",
        x:443,
        y:173,
        width:82,
        height:85
    }, 
    {
        type:"Tomato",
        x:421,
        y:192,
        width:82,
        height:85
    }, 
    {
        type:"Tomato",
        x:396,
        y:177,
        width:82,
        height:85
    }, 
    {
        type:"Tomato",
        x:370,
        y:167,
        width:82,
        height:85
    },   
    {
        type:"Tomato",
        x:344,
        y:154,
        width:82,
        height:85
    },    
    {
        type:"Tomato",
        x:354,
        y:144,
        width:82,
        height:85
    },  
    {
        type:"Tomato",
        x:417,
        y:162,
        width:82,
        height:85
    },    
    {
        type:"Fog",
        x:619,
        y:451,
        width:105,
        height:115
    },                 
];

class GameMain{
/*
    public dogs:Array<Dog>;
    public fogs:Array<Fog>;
    public pumpkins:Array<Pumpkin>;
    public tomatos:Array<Tomato>;
*/
    public creatures:Creature[];
    public barriers:Barrier[];
    public player:Player;
    public tweenObj:Tween;
    constructor()
    {
        Laya.init(Laya.Browser.clientWidth,Laya.Browser.clientHeight, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;

        Laya.stage.scaleMode = "showall";
        Laya.stage.screenMode = "horizontal";
        Laya.stage.fullScreenEnabled = true;

    }
    initSprites() {
        this.creatures = new Array(SpritesData.length);
        for(var i=0;i<SpritesData.length;i++)  {
            var spriteData = SpritesData[i];
            
            var sprite:Creature = new Creature(
                spriteData.type,
                spriteData.x,
                spriteData.y,
                spriteData.width,
                spriteData.height
            );
            this.creatures[i] = sprite;
            Laya.stage.addChild(sprite);
            
        };
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
        /*
        this.barriers = new Array(BarriersData.length);
        for(var i=0;i<BarriersData.length;i++)  {
            var spriteData = BarriersData[i];
            
            var sprite:Barrier = new Barrier(
                spriteData.type,
                spriteData.x,
                spriteData.y,
                spriteData.width,
                spriteData.height
            );
            this.barriers[i] = sprite;
            Laya.stage.addChild(sprite);
            
        };
        //this.barriers[i] = this.creatures[12];
        */
    }

    init() {
        var map:Map = new Map();
        Laya.stage.addChild(map);    
        this.initSprites();
        //this.initBarriers();
        this.player = new Player();
        Laya.stage.addChild(this.player);
                
        Laya.stage.on(Laya.Event.CLICK,this,this.onMouseDown); 
  
    }

    private stopIfBarriers(): void {
        /*
        var rect = this.player.getBounds();
        rect = new Laya.Rectangle(rect.x,rect.y,rect.width*0.25,rect.height*0.25);
        if(this.barriers != undefined) {
            for(var i=0;i<this.barriers.length;i++) {
                var barrier = this.barriers[i];
                var rectBarrier = barrier.getBounds();
                if(rectBarrier.intersects(rect)) {
                    this.tweenObj.pause();
                    return;
                }
            }
        }
        if(this.creatures != undefined) {
            var rectBarrier2 = this.creatures[12].getBounds();
            if(rectBarrier2.intersects(rect)) {
                this.tweenObj.pause();
                return;
            }            
        }
        */
    }
    private playMediaIfIntersets(): void {
        var rect = this.player.getBounds();
        //var rect = new Rectangle(this.player.x,this.player.y,this.player.width,this.player.height);
        var rectNearBy = new Rectangle(rect.x,rect.y,rect.width*1.4,rect.height*1.4);
        if(this.creatures != undefined) {
            for(var i=0;i<this.creatures.length;i++) {
                var creature = this.creatures[i];
                var type = creature.type;
                var rectCreture = creature.getBounds();
                //var rectCreture:Rectangle = new Rectangle(creature.x,creature.y,creature.width,creature.height);
                if(rectCreture.intersects(rect)) {
                    console.log('rect=');
                    console.log(rect);
                    console.log('rectCreture=');
                    console.log(rectCreture);                    
                  if(type == MediaUtil.type) {
                    return;
                  }                        
                  if((type == 'Dog') || (type == 'Fog') || (type == 'Tomato')|| (type == 'Pumpkin')) {  
                    MediaUtil.playVideo(type);                
                    if(this.tweenObj != null && this.tweenObj != undefined) {
                      Laya.timer.clear(this,this.animateTimeBased);
                      this.tweenObj.pause();
                    }
                    
                    
                  }
                        
                }
                else if(creature.getBounds().intersects(rectNearBy)) {
                  MediaUtil.playAudio(type);        
                }
            }
        }


    }

    onMouseDown(parm) {
        
        var dx:number = Laya.stage.mouseX;
        var dy:number = Laya.stage.mouseY;
        if(dx == 0 && dy == 0) {
            return;
        }
        this.initBarriers();

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
            console.log('hasBarrier=');
            console.log(hasBarrier);
            if(hasBarrier != false) {
                return;
            }
        }        
        /*
        if(this.barriers != undefined) {
            for(var i=0;i<this.barriers.length;i++) {
                var barrier = this.barriers[i];
                var rectBarrier = barrier.getBounds();
                //console.log('dx='+dx+',dy='+dy+'rectBarrier=');
                //console.log(rectBarrier);
                if(rectBarrier.contains(dx,dy)) {
                    console.log('contains and return');
                    return;
                }
            }
        }
        */
        //Laya.timer.loop(100, this, this.animateTimeBased);
        this.tweenObj = this.player.tweenTo(dx,dy);
        MediaUtil.readyToPlayVideo = true;
        MediaUtil.readyToPlayAudio = true;
        
    }

    moveCompleted(sprite:Player) {
    }
    animateTimeBased() {
        this.stopIfBarriers();
        this.playMediaIfIntersets();

    }
}
let game = new GameMain();
game.init();