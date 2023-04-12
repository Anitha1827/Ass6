class UberPrice{
    constructor(distance){
        this.distance = distance;
    }

    getPrice(){
        return (this.distance)*20;
    }
}

let uber = new UberPrice(10);
console.log(uber.getPrice());