/**
* name 
*/
import SoundManager = Laya.SoundManager;
module utils{
	export class MediaUtil{
		public static readyToPlayVideo:boolean = false;
		public static readyToPlayAudio:boolean = false;
		constructor(){
		} 
        public static playVideo(type:string) {
            if((type == 'Dog') && (MediaUtil.readyToPlayVideo)) {
                console.log('show video Dog');
            	$('#videoId').attr('src','res/mp4/狗.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;     
            }
            else if((type == 'Tomato') && (MediaUtil.readyToPlayVideo)) {
                console.log('show video Tomato');
                $('#videoId').attr('src','res/mp4/西红柿.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
            }
            else if((type == 'Fog') && (MediaUtil.readyToPlayVideo)) {
                console.log('show video Fog');
                $('#videoId').attr('src','res/mp4/青蛙.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
            }  
            else if((type == 'Pumpkin') && (MediaUtil.readyToPlayVideo)) {
                console.log('show video Pumpkin');
                $('#videoId').attr('src','res/mp4/南瓜.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false; 
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