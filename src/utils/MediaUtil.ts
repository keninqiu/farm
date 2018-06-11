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
                $('#videoId').attr('src','res/mp4/tomato.mp4');
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