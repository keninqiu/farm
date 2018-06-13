
module utils {
	export class Settings{
		public static getWidth() {
			/*
			if(Laya.stage != null && Laya.stage != undefined) {
				return  Laya.Browser.clientWidth / Laya.stage.clientScaleX ;
			}
			*/
            return Laya.stage.width;

        }
        public static getHeight() {
        	/*
			if(Laya.stage != null && Laya.stage != undefined) {
				return  Laya.Browser.clientHeight / Laya.stage.clientScaleY;
			}     
			*/   
            return Laya.stage.height;
        }        

	}
}