// 程序入口
import Player = entities.Player;
import Map = entities.Map;

import Creature = entities.Creature;

import Areas = utils.Areas;
import Area = utils.Area;
import MediaUtil = utils.MediaUtil;
import Dog = entities.animals.Dog;
import Fog = entities.animals.Fog;
import Cat = entities.animals.Cat;
import Pumpkin = entities.plants.Pumpkin;
import Tomato = entities.plants.Tomato;
import Tween = laya.utils.Tween;
import Ease = laya.utils.Ease;
import Rectangle =  laya.maths.Rectangle;

import PointUtil = utils.PointUtil;
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
        x:636,
        y:479,
        width:41,
        height:27
    },                 
];

class GameMain{
    public dogs:Array<Dog>;
    public fogs:Array<Fog>;
    public pumpkins:Array<Pumpkin>;
    public tomatos:Array<Tomato>;

    public creatures:Creature[];
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
    init() {
        var map:Map = new Map();
        Laya.stage.addChild(map);    
        this.initSprites();
        this.player = new Player();
        Laya.stage.addChild(this.player);
                
        Laya.stage.on(Laya.Event.CLICK,this,this.onMouseDown); 
  
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
        Laya.timer.loop(1000, this, this.animateTimeBased);
        this.tweenObj = this.player.tweenTo(Laya.stage.mouseX,Laya.stage.mouseY);
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