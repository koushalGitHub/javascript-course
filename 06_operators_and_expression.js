//  expression 
// A fragment of code that produces a value is called an expression .Every value written litrally is an expression .For eg 77 or "koushal"
let a = 10;
let b = 2;
// arthmatic operators
console.log("a+b = " ,a+b)
console.log("a-b = " ,a-b)
console.log("a*b = " ,a*b)
console.log("a%b = " ,a%b) // reminder
console.log("a = " ,a) 
console.log("a**b = " ,a**b) // square of 10
console.log("++a  = " ,++a) // one increment
console.log("a = " ,a) 
console.log("a++  = " ,a++) // one increment
console.log("a = " ,a) 
console.log("a--  = " ,a--) // two increment
console.log("a = " ,a) 
console.log("--a  = " ,--a) // 10 still

// Assignment operator

//  a = a + 8;
 // we can add 8 in a and we can add same as add 8 in a 
 a += 8;
console.log("a increment 8 = ", a);



// compression operator

let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2", comp1 == comp2)
console.log("comp1 != comp2", comp1 != comp2)
console.log("comp1 === comp2", comp1 === comp2)
console.log("comp1 !== comp2", comp1 !== comp2)

// logical operator
// these are operates on boolean
/* 
        &&
        ||
         !

 */

let x = 5;
let y = 6;
 console.log(x<y && x!=y);


 
let x1 = 5;
let y1 = '3';
let r1 = x1+y1;
console.log(r1);   //  output 53


let a1 = 5;
let b1 = '3';
let c1 = a1-b1;
console.log(c1)    // output 2     ( variable b1 (string type) is converted to a number type)

var x2 = 0;
var y2 = 23;
        
if(x2) { console.log("x2 = ",x2) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y2) { console.log("y2 = ",y2) }    // The code inside this block will run since the value of y is 23 (Truthy)


isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true

console.log(isNaN("Hello"))
console.log(isNaN(345))
console.log(isNaN('1'))
console.log(isNaN(undefined))