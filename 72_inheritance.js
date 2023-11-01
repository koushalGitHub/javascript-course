// Inheritance in OOP = When a class derives from another class.

//The child class will inherit all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods.

//An inherited class is defined by using the extends keyword.

//Inheritance is a fundamental concept in object-oriented programming that allows a class to inherit properties and methods from another class.


class Animal{
    constructor(name,bread){
            this.name = name
            this.bread = bread
    }
    makeSound(){
        console.log(`${this.name} is ${this.bread}`)
    }
};

class Dog extends Animal{
  newSound(){
    console.log(`${this.name} is ${this.bread}`)
  }

}

const obj = new Dog("koushal" , "Good Human");
const obj2 = new Dog("dog" , "Animal");

console.log(obj.makeSound())
console.log(obj2.newSound())


// method overridding
// Method overriding is a feature in object-oriented programming that allows a subclass or child class to provide a specific implementation of a method that is already defined in its superclass or parent class. When a method in the subclass has the same name, same parameters, and the same return type as a method in its superclass, the method in the subclass is said to override the method in the superclass.



// OOP - Static Methods  (refered w3school.com oops chapter)

//Static methods can be called directly - without creating an instance of the class first.
//Static methods are declared with the static keyword:

class a{
    constructor(name){
        // this.name = name
        this.name = a.capitalization(name) 
    }
    walk(){
        // console.log(`animal ${a.capitalization(this.name)} is walking`);
        console.log(`animal ${this.name} is walking`);
    }
    static capitalization(name) {
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }

}

const object = new a("jack");
console.log(object.walk())



// getter and setter 

//In JavaScript, getters and setters are special functions that allow you to define how to access and modify the properties of an object. Getters are used to get the value of a property, and setters are used to set the value of a property. They provide a way to define property access behavior without directly exposing the underlying property.

class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get diameter() {
      return 2 * this._radius;
    }
  
    set diameter(diameter) {
      this._radius = diameter / 2;
    }
  }
  
  // Creating an object of the class
  let circle = new Circle(5);
  
  // Using the getter
  console.log(circle.diameter); // Output: 10
  
  // Using the setter
  circle.diameter = 12;
  console.log(circle.diameter); // Output: 12
  console.log(circle._radius); // Output: 6

  
  // instanceOf :-
// the instanceOf operator allows to check whether an object belongs to a certain class
// it return true if object belongs to the class or any other class inheriting from it.

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  // Creating an object of the class
  let rect = new Rectangle(5, 3);
  // check this react object is belong to class or not with instanceOf
  // Checking if the object is an instance of the class
  console.log(rect instanceof Rectangle); // Output: true
  


  // IIFE 
  //IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that runs as soon as it is defined. It is typically used to create a local scope and avoid variable hoisting from within blocks. This pattern is commonly used to prevent polluting the global namespace.

  (function() {
    var name = "John";
    console.log("Hello, " + name + "!");
  })();

  
  (function(name) {
    console.log("Hello, " + name + "!");
  })("koushal");


  // scope
  
  var globalVariable = 'I am global';
  function doSomething() {
  console.log(globalVariable); // Output: I am global
}
doSomething()

function doSomething2() {
    var localVariable = 'I am local';
    console.log(localVariable); // Output: I am local
  }
//   console.log(localVariable); its not get outside the function its called local scope
  doSomething2()