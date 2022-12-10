//class to calculate uber price

class Uber{
    constructor(source,destination,kms){
        this.source = source;
        this.destination = destination;
        this.kms = kms;
        this.fare = this.kms * 30
    }
    getFare(){
        return `your fare : ${this.fare} rupees`
    }
}

var user1 = new Uber ("anna university", "koyambedu", 12)
console.log(user1.getFare())