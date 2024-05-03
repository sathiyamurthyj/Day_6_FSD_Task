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

// Movie class

class Movie {
   constructor(title, studio, rating="PG"){
      this.title = title;
      this.studio = studio;
      this.rating = rating;
   }

   static getPG(moviesArr) {
      let result = [];
      moviesArr.forEach((movie)=>{
         if(movie.rating === "PG"){
            result.push(movie)
         }
      })
      return result;
   }
}

const movie = new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie);

const movieList = [new Movie("Dr. No", "Eon Productions","PG13"), new Movie("Kung Fu Panda 4","Dreamworks Animation", "PG"), new Movie("Jumanji","Tristar Pictures"), new Movie("Terminator 2:Judgement Day","Carolco Pictures", "R")];
console.log(Movie.getPG(movieList));


// Circle class

class Circle {
    constructor(radius=1.0, color="Red"){
       this.radius = radius;
       this.color = color;
    }
 
    get getRadius() {
       return this.radius;
    }
 
    set setRadius(radius) {
       this.radius = radius;
    }
 
    get getColor() {
       return this.color;
    }
 
    set setColor(color) {
       this.color = color;
    }
 
    toString() {
       return ` Circle [radius: ${this.radius} , color: ${this.color}]`;
    }
 
    getArea(){
       return (Math.PI*(this.radius**2)).toFixed(2);
    }
 
    getCircumference(){
       return (2*Math.PI*this.radius).toFixed(2);
    }
 }
 
 
 var c1 = new Circle();
 console.log("Circle with no parameter: " + c1.toString());
 var c2 = new Circle(5.0);
 console.log("Circle with one parameter: " + c2.toString());
 var c3 = new Circle(6.0, "Green");
 console.log("Circle with both parameter: " + c3.toString());
 console.log("getRadius: " + c3.getRadius);
 c3.setRadius=12.0;
 console.log("Radius value after setRadius: " + c3.getRadius);
 console.log("getColor: " + c3.getColor);
 c3.setColor="Yellow";
 console.log("Color Value after setColor: " + c3.getColor);
 console.log("Area: " + c3.getArea());
 console.log("Circumference: " + c3.getCircumference());