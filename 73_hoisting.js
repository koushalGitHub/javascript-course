////Hoisting is JavaScript's default behavior of moving declarations to the top.

// hoisting refers to the process wherely the interpreter appears to move the declaration to the top of the code before execution 
// variable can thus be referenced before they are decleared in javascript.


greet()
function greet(){
    console.log("good")
}

// important note :-
// js only hoist declearations , not initialigation . The variable will be undefined until the line where its initaligation is reached
/* 
console.log(a)
let a =2; //Cannot access 'a' before initialization
 */
console.log(b);
var b = 3     // not throw error only return undefined

/* fun()
let fun =   ()=>{
    console.log("fun")      
} */
//The code snippet you provided will result in an error because of the way hoisting works in JavaScript. In this case, the variable fun is hoisted to the top, but it is initialized as undefined due to the nature of hoisting. When you attempt to invoke fun before it is initialized, you will receive a TypeError stating that fun is not a function. To fix this issue, you need to define the fun arrow function before you call it. Here is the corrected version of your code:


var fun =   ()=>{
    console.log("fun")
}
fun() 

// because of function expression and class expression is not hoisting  
// when we write funciton with "=" means in with variable is called function expression

