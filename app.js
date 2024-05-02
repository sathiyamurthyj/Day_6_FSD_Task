// Person Class

class Person {
    constructor(firstname, lastname, gender, age, country="India") {
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
        this.gender = gender;
        this.age = age;
    }

    personInfo() {
        let fullName = `${this.lastname}, ${this.firstname.toUpperCase()}`;
        let detailedInfo = `${fullName} is ${this.gender} aged ${this.age} and lives in ${this.country}.`
        return detailedInfo;
    }
}

const personA = new Person("Sathiyamurthy","Jagadeesan","Male", 38);
console.log(personA);
console.log(personA.personInfo());


// Uber Price Calculator Class

class UberRideFareCalculator {
    static surgeFare = 0.9;
    static waitFare = 0.3;
    static flatFee = 0.05;
    static perKmChargeOneWay = 10.0;
    static perKmChargeTwoWay = 5.0; 

    constructor(distance, waitTime, peakHour, returnTrip) {
        this.distance = distance;
        this.waitTime = waitTime;
        this.peakHour = peakHour;
        this.returnTrip = returnTrip;
    }

    calculateRideFare() {
        let distanceFare;
        if(this.returnTrip){
            distanceFare = this.distance*UberRideFareCalculator.perKmChargeTwoWay;
        } else {
            distanceFare = this.distance*UberRideFareCalculator.perKmChargeOneWay;
        }
        let waitTimeFare = this.waitTime*UberRideFareCalculator.waitFare;
        let peakTimeFare;
        if(this.peakHour){
            peakTimeFare = this.distance*UberRideFareCalculator.surgeFare;
        } else {
            peakTimeFare = 0;
        }
        let fareTotal = distanceFare+waitTimeFare+peakTimeFare;
        let rideTotal = fareTotal*(1+UberRideFareCalculator.flatFee);
        let inr = new Intl.NumberFormat("en-IN",{
            style: "currency",
            currency: "INR",
        });
        return `Total fare for the ride is ${inr.format(rideTotal.toFixed(2))}`;
    }
}

const ride1 = new UberRideFareCalculator(10,15,true,false);
console.log(ride1.calculateRideFare());