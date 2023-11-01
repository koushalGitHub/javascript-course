// Classes and objects are the two main aspects of object-oriented programming.

//Look at the following illustration to see the difference between class and objects:

// class => Fruit

// objects =>Apple,Banana,Mango
// Another example:
// class => Car
// objects => Volvo Audi Toyota

// Defining a class
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    displayInfo() {
      console.log(`This is a ${this.make} ${this.model}.`);
    }
  }
  
  // Creating an object based on the class
  let myCar = new Car('Toyota', 'Corolla');
  
  // Accessing the properties and methods of the object
  console.log(myCar.make); // Output: Toyota
  console.log(myCar.model); // Output: Corolla
  myCar.displayInfo(); // Output: This is a Toyota Corolla.


  // class

class railway{
    constructor(){
        alert("form started this alert alway run because its in contructor")
    }
    submit(){
        alert(this.name + ": ticket book")
        console.log(this.name,": ticket book")
    };
    cancel(){
        alert(this.name + ": ticket cancel");
        console.log(this.name,": ticket cancelled");
    }
    fill(name){
        this.name = name;
    }
};

  
// Object
const koushal = new railway();
const vishal = new railway();


koushal.fill("koushal")
vishal.fill("vishal")

koushal.submit()
vishal.submit()
vishal.cancel()