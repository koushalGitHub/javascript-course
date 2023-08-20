let a = 10;
let b = 20;
let c = 30;


console.log("Avg of a and b is " , avgFunction(a,b))
console.log("Avg of c and b is " , (b + c)/2)
console.log("Avg of a and c is " , (c + a)/2)

 function avgFunction(x,y){
    return (x + y)/2;
}/* 
In this case, the function avgFunction is declared using the function keyword. Since function declarations are hoisted, the JavaScript interpreter knows about the function before it encounters the console.log statement, and therefore, no error occurs. */

var  sums = (x,y)=>{
    return (x + y);
}
console.log(sums(2,4))


console.log(newFunction(2,5))

var newFunction = (c,t)=>{
    return c+t
}
/*  The code you provided is giving an error because you are trying to call the newFunction before it's actually defined. In JavaScript, functions declared using the var, let, or const keyword are not hoisted like regular function declarations.

Here's what's happening step by step:

You call newFunction(2, 5) before the function is defined.
Then, you define newFunction using the arrow function syntax.
Since the function definition comes after the function call, the JavaScript interpreter does not yet know what newFunction is when you try to call it. This results in an error. */

/* 
However, for arrow functions and functions assigned to variables (function expressions), the behavior is different. These types of function definitions are not hoisted, which is why you encountered an error in your previous example.
 */