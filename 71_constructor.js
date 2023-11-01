// in js , a constructor is a special type of method that is automatically called when an instance of a class is created. 
class person{
    constructor(name,age){
            this.name = name;
            this.age = age;
    };
    sayHello(){
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }
};

// creating an object based on class 
const person1 = new person('koushal',23);
const person2 = new person('vishal',25);

// calling the method on the object
person1.sayHello(); 
person2.sayHello();

// In this example, the Person class has a constructor that takes in the name and age as parameters and assigns them to the object's properties. When an instance of the Person class is created using the new keyword, the constructor is automatically invoked, setting the initial values for the object.

