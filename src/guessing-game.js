class GuessingGame {
    
    constructor() { 
       
     }

    setRange(min, max) {     
        this.min = min;
        this.max = max;
       /* this.midd = 0;*/
    }

    guess() {
        while (this.min < this.max){
            return this.midd = Math.round(this.min + Math.abs(((this.max - this.min) / 2)));
            
    };
    if(this.min === this.max){
        return this.midd;
    }
}
    lower() {
        this.max = this.midd;
    }
    greater() {
        this.min = this.midd;
    }
}

module.exports = GuessingGame;
