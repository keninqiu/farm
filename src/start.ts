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
    public player:Player;
    constructor()
    {
        Laya.init(800,600);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    }
    init() {
        var point:Point;
        this.dogs = new Array(Dog.COUNT);
        this.fogs = new Array(Fog.COUNT);
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
        var tomato:Tomato = new Tomato(350,50);
        Laya.stage.addChild(tomato);    
        Laya.timer.loop(200, this, this.animateTimeBased);
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);                     
        
        //Laya.Tween.to(player,{x:500},1000,Laya.Ease.elasticOut,null,1000);  
        
             
    }

    private onClick(): void {
            Laya.stage.bgColor = "#FFFFFF";
      // 创建Video元素
      var videoElement = Laya.Browser.createElement("video");
      Laya.Browser.document.body.appendChild(videoElement);

      // 设置Video元素地样式和属性
            videoElement.style.position = "absolute";
            Laya.Render.canvas.style.zIndex = -1;
      videoElement.style.zIndex = Laya.Render.canvas.style.zIndex + 100;
      videoElement.src = "res/mp4/狗.mp4";
      videoElement.controls = true;
      // 阻止IOS视频全屏
      videoElement.setAttribute("webkit-playsinline", true);
      videoElement.setAttribute("playsinline", true); 

    }
    onMouseDown() {
        this.player.setDestination(Laya.stage.mouseX - this.player.width/2,Laya.stage.mouseY - this.player.height/2);
        //this.onClick();
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