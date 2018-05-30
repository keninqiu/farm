// 程序入口
import Player = entities.Player;
import Map = entities.Map;
import Areas = utils.Areas;
import Area = utils.Area;
import Dog = entities.animals.Dog;
import Fog = entities.animals.Fog;
import Pumpkin = entities.plants.Pumpkin;
import Tomato = entities.plants.Tomato;
import PointUtil = utils.PointUtil;

class GameMain{
    public dogs:Array<Dog>;
    public fogs:Array<Fog>;
    public pumpkins:Array<Pumpkin>;
    public tomatos:Array<Tomato>;
    public player:Player;
    constructor()
    {
        Laya.init(800,600);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
    }
    init() {
        var point:Point;
        this.dogs = new Array(Dog.COUNT);
        this.fogs = new Array(Fog.COUNT);
        this.pumpkins = new Array(Pumpkin.COUNT);
        this.tomatos = new Array(Tomato.COUNT);
        var map:Map = new Map();
        Laya.stage.addChild(map);
        this.player = new Player();
        Laya.stage.addChild(this.player);
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

        Laya.timer.loop(200, this, this.animateTimeBased);
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);                     
             
    }

    private showVideo(): void {
        var x:number = Laya.stage.mouseX;
        var y:number = Laya.stage.mouseY;
        console.log("x="+x+"y="+y);
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
                      
    }

    onMouseDown() {
        this.player.setDestination(Laya.stage.mouseX - this.player.width/2,Laya.stage.mouseY - this.player.height/2);
        this.showVideo();
    }
    animateTimeBased() {
        //console.log("haha");
        
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
        
    }
}
let game = new GameMain();
game.init();