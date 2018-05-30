/**
* name 
*/
module utils {
	export class Areas{
        public static getDogsArea() {
            return new Area(50,50,300,200);
        }
        public static getFogsArea() {
            return new Area(50,350,300,550);
        }
    }
}