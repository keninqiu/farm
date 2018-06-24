/**
* name 
*/
var player;
import SoundManager = Laya.SoundManager;

module utils{
	export class MediaUtil{
		public static readyToPlayVideo:boolean = false;
		public static readyToPlayAudio:boolean = false;
        public static type:string = '';
		constructor(){
		} 

        private processHandler(data:any): void {
        }
        private errorHandler(data:any): void {

        }
        private completeHandler(e:any): void {
            var json = JSON.parse(e);                    
            var VideoId = json.VideoMeta.VideoId;
            var PlayAuth = json.PlayAuth;
            /*
           player = Aliplayer({id: "J_prismPlayer",autoplay: true,width: "100%",height: "100%",vid: VideoId,playauth: PlayAuth});
            */        
        }        

        public playVideo(type:string) {
            $('#myModal').modal('toggle');
            var xhr: Laya.HttpRequest = new Laya.HttpRequest();
            xhr.http.timeout = 10000;//设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
            xhr.once(Laya.Event.ERROR, this, this.errorHandler);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
            xhr.send("php/get_access.php?type=" + type, "", "get", "text");
            MediaUtil.readyToPlayVideo = false; 
            MediaUtil.type = type;

        }

        public static playAudio(type:string) {
            if((type == 'Dog') && (MediaUtil.readyToPlayAudio)) {
            	SoundManager.playMusic("res/audio/dog.mp3", 1, null);
                MediaUtil.readyToPlayAudio = false; 
            }   
            else if((type == 'Fog') && (MediaUtil.readyToPlayAudio)) {
            	SoundManager.playMusic("res/audio/fog.wav", 1, null);
                MediaUtil.readyToPlayAudio = false;              
            }     	
        }
    }
}