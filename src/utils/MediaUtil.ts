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
        public static playVideo(type:string) {

            if((type == 'Dog') && (MediaUtil.readyToPlayVideo)) {
            	$('#videoId').attr('src','res/mp4/dog.mp4');
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
                $('#videoId').attr('src','res/mp4/fog.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
                MediaUtil.type = type;
            }  
            else if((type == 'Pumpkin') && (MediaUtil.readyToPlayVideo)) {
                $('#videoId').attr('src','res/mp4/pumpkin.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false; 
                MediaUtil.type = type;
            }   

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