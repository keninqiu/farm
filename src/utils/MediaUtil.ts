/**
* name 
*/
import SoundManager = Laya.SoundManager;

module utils{
	export class MediaUtil{
		public static readyToPlayVideo:boolean = false;
		public static readyToPlayAudio:boolean = false;
        public static type:string = '';
		constructor(){
		} 

        private processHandler(data:any): void {
            console.log(data);
        }
        private errorHandler(data:any): void {

        }
        private completeHandler(e:any): void {

            var VideoId = e.VideoId;
            var PlayAuth = e.PlayAuth;
            /*
            var player = Aliplayer({id: "J_prismPlayer",autoplay: true,width: "1920px",height: "1280px",vid: VideoId,playauth: PlayAuth});
            */
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false; 
                MediaUtil.type = type;            
        }        

        public playVideo(type:string) {

            var xhr: Laya.HttpRequest = new Laya.HttpRequest();
            xhr.http.timeout = 10000;//设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
            xhr.once(Laya.Event.ERROR, this, this.errorHandler);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
            xhr.send("php/get_access.php?type=" + type, "", "get", "text");

/*
            if((type == 'Dog') && (MediaUtil.readyToPlayVideo)) {
            	$('#videoId').attr('src','https://outin-6f954cad6fd611e8b07d00163e1c91c8.oss-cn-shanghai.aliyuncs.com/eaf47c0dd72f4fba97368ed1cd9559a7/1ee3bc64822c45ed88c217ac0097c9e0-8567a6feba931e4fddb6a4c700997332-ld.mp4?Expires=1528992096&OSSAccessKeyId=LTAInFumgYEtNMvC&Signature=s089ssRWJY81Uj9qzfC3R5LJie4%3D');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false; 
                MediaUtil.type = type;    
            }
            else if((type == 'Tomato') && (MediaUtil.readyToPlayVideo)) {
                $('#videoId').attr('src','https://outin-6f954cad6fd611e8b07d00163e1c91c8.oss-cn-shanghai.aliyuncs.com/video/22cf11c4-163fe7c7300-0006-4502-f9b-4f456.mp4?Expires=1528987036&OSSAccessKeyId=LTAInFumgYEtNMvC&Signature=3potCU%2FC7tmoahCUYdYBpdcYisY%3D');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
                MediaUtil.type = type;
            }
            else if((type == 'Fog') && (MediaUtil.readyToPlayVideo)) {
                $('#videoId').attr('src','https://outin-6f954cad6fd611e8b07d00163e1c91c8.oss-cn-shanghai.aliyuncs.com/7a3c93b576324e38b7e19ec1649a932f/4d8095e0b7a0410bba464ad844833e13-7b9b3ffed635a4f1879ac34f7ff417fd-ld.mp4?Expires=1528992235&OSSAccessKeyId=LTAInFumgYEtNMvC&Signature=pXpIG0AKTlQp7E4LUg1yx2V6uhc%3D');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
                MediaUtil.type = type;
            }  
            else if((type == 'Pumpkin') && (MediaUtil.readyToPlayVideo)) {
                $('#videoId').attr('src','https://outin-6f954cad6fd611e8b07d00163e1c91c8.oss-cn-shanghai.aliyuncs.com/dd0184b806fa41a4b385a96487b50bb8/f1327d8d3272405a8ff1ad9f5507f053-09aedfcd77da3e8ac7a7ea034bcd96e2-ld.mp4?Expires=1528991982&OSSAccessKeyId=LTAInFumgYEtNMvC&Signature=YJt50n0Fi4ldHe1nnk9yL8gLvE8%3D');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false; 
                MediaUtil.type = type;
            }   
*/
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