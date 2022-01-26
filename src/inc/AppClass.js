import PrayTimes from "./PrayTimes";

class Praym{
     lat = 56.8583600;
     lan = 35.9005700;
     dst =  +3;
     
    constructor(){
    this.date = new Date();
    this.praytodey =  this._PrayTime(this.date);   
    this.list = [];
    }

    get tody() { return this.praytodey; }
    
    
   month() {
       return new Promise((resolve) => {
        let list = [],
        month = this.date.getMonth(),
        year = this.date.getFullYear(),
        date = new Date(year, month, 1),
        endDate = new Date(year, month+ 1, 1);
          while(date < endDate) {
            var times = this._PrayTime(date)
             date.getDay() == 5 ? list.push({ntimes:times,jumma:true}) : list.push({ntimes:times,jumma:false})
            date.setDate(date.getDate()+ 1); 
           }
       resolve(list);
        
        })
}

    _PrayTime(date) {
    return PrayTimes.getTimes(date ,[this.lat,this.lan] ,this.dst) 
    
} 
    

    }


export default Praym;