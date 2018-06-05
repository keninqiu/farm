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
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.fullScreenEnabled = true;

    }
    initSprites() {
        this.creatures = new Array(SpritesData.length);
        for(var i=0;i<SpritesData.length;i++)  {
            var spriteData = SpritesData[i];
            console.log(spriteData.type);
            
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
                
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown); 
        
        /*
        var point:Point;
        this.dogs = new Array(Dog.COUNT);
        this.fogs = new Array(Fog.COUNT);
        this.pumpkins = new Array(Pumpkin.COUNT);
        this.tomatos = new Array(Tomato.COUNT);
        var map:Map = new Map();
        Laya.stage.addChild(map);

        
        var cat:Cat = new Cat(100,100);
        Laya.stage.addChild(cat);

        
        var dogsArea:Area = Areas.getDogsArea();
        var fogsArea:Area = Areas.getFogsArea();
        for(var i=0;i<Dog.COUNT;i++) {
            point = PointUtil.getRandPointWithin(Areas.getDogsArea());
            var dog:Dog = new Dog(point.x,point.y);
            Laya.stage.addChild(dog); 
            this.dogs.push(dog);
        }
        
        for(var i=0;i<Fog.COUNT;i++) {
            point = PointUtil.getRandPointWithin(Areas.getFogsArea());
            var fog:Fog = new Fog(point.x,point.y);
            Laya.stage.addChild(fog);  
            this.fogs.push(fog); 
        } 
        
        var pumpkin:Pumpkin = new Pumpkin(350,150);
        Laya.stage.addChild(pumpkin);   
        this.pumpkins.push(pumpkin); 

        var tomato:Tomato = new Tomato(350,50);
        Laya.stage.addChild(tomato);    
        this.tomatos.push(tomato); 

        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);                     
        */     
    }
/*
                var rect1 = dog.getBounds();
                if(rect1.intersects(rect2)) {
                  var audio = new Audio();
                  audio.style.display = "none";
                  audio.src = "res/audio/dog.mp3";
                  audio.autoplay = true;     
                }
*/
    private playMediaIfIntersets(): void {
        console.log('this.tweenObj2=');
        console.log(this.tweenObj);
        var rect = this.player.getBounds();
        var rectNearBy = new Rectangle(rect.x,rect.y,rect.width*1.4,rect.height*1.4);
        if(this.creatures != undefined) {
            for(var i=0;i<this.creatures.length;i++) {
                var creature = this.creatures[i];
                var type = creature.type;
                if(creature.getBounds().intersects(rect)) {
                  if(type == MediaUtil.type) {
                    return;
                  }                        
                  if((type == 'Dog') || (type == 'Fog') || (type == 'Tomato')|| (type == 'Pumpkin')) {  
                    MediaUtil.playVideo(type);                
                    if(this.tweenObj != null && this.tweenObj != undefined) {
                      console.log('clear do');
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

        /*
        console.log("x="+x+"y="+y);

        var realX:number = x*1920/Laya.Browser.clientWidth;
        var realY:number = y*1080/Laya.Browser.clientHeight;

        console.log("realX="+realX+"realY="+realY);
        */
        /*
        var showing:boolean = false;
        if(this.dogs != undefined) {
            this.dogs.forEach(function(dog) {
                if(showing) {
                    return;
                }
                if(dog.getBounds().contains(x,y)) {
                  $('#videoId').attr('src','res/mp4/狗.mp4');
                  $('#myModal').modal('toggle'); 
                  showing = true;               
                }
            });
        }

        if(this.fogs != undefined) {
            this.fogs.forEach(function(fog) {
                if(showing) {
                    return;
                }
                if(fog.getBounds().contains(x,y)) {
                  $('#videoId').attr('src','res/mp4/青蛙.mp4');
                  $('#myModal').modal('toggle'); 
                  showing = true;               
                }
            });
        }

        if(this.pumpkins != undefined) {
            this.pumpkins.forEach(function(pumpkin) {
                if(showing) {
                    return;
                }
                if(pumpkin.getBounds().contains(x,y)) {
                  $('#videoId').attr('src','res/mp4/南瓜.mp4');
                  $('#myModal').modal('toggle'); 
                  showing = true;               
                }
            });
        }

        if(this.tomatos != undefined) {
            this.tomatos.forEach(function(tomato) {
                if(showing) {
                    return;
                }
                if(tomato.getBounds().contains(x,y)) {
                  $('#videoId').attr('src','res/mp4/西红柿.mp4');
                  $('#myModal').modal('toggle'); 
                  showing = true;               
                }
            });
        }  
        */
    }

    onMouseDown() {
        console.log('mouse down');
        /*
        this.player.setDestination(Laya.stage.mouseX - this.player.width/2,Laya.stage.mouseY - this.player.height/2);
        */
        //this.showVideo();
        Laya.timer.loop(1000, this, this.animateTimeBased);
        var x:number = this.player.x;
        var y:number = this.player.y;
        var dx:number = Laya.stage.mouseX - this.player.width/2;
        var dy:number = Laya.stage.mouseY - this.player.height/2;
        var length = Math.sqrt((dy-y)*(dy-y) + (dx-x)*(dx-x));
        console.log('length=' + length);
        this.tweenObj = Tween.to(this.player, {x: dx,y: dy}, 10*length, null, Laya.Handler.create(this,this.moveCompleted,[this.player]), 10);
        console.log('this.tweenObj1=');
        console.log(this.tweenObj);
        MediaUtil.readyToPlayVideo = true;
        MediaUtil.readyToPlayAudio = true;
        
    }

    moveCompleted(sprite:Player) {
//        MediaUtil.readyToPlayVideo = true;
//        MediaUtil.readyToPlayAudio = true;
    }
    animateTimeBased() {
        console.log("hahhehea");

        this.playMediaIfIntersets();
        /*
        if(this.dogs != undefined) {
            this.dogs.forEach(function(value) {
                value.moveArround();
            });
        }
        
        if(this.fogs != undefined) {
            this.fogs.forEach(function(value) {
                value.moveArround();
            });
        }    
        
        this.player.moveTo(PointUtil.nextPositionForDestination(this.player.x,this.player.y,this.player.dx,this.player.dy,this.player.speed));

        var rect2 = this.player.getBounds();
        if(this.dogs != undefined && this.player != undefined) {
            this.dogs.forEach(function(dog) {
                var rect1 = dog.getBounds();
                if(rect1.intersects(rect2)) {
                  var audio = new Audio();
                  audio.style.display = "none";
                  audio.src = "res/audio/dog.mp3";
                  audio.autoplay = true;  
                  this.playing = true;          
                }
            });
        }        
        */
    }
}
let game = new GameMain();
game.init();