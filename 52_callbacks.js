/* synchronous and asynchronous are terms used to describe the execution flow of code in programing languages like javascript. they refer to how operation are handled in relation to one another and whether they block the execution of other code.

Synchronous Execution :- 

In synchronous code execution, operation are performed one after the other,in the order they appear. Each operation block the execution of the code until its completed. This means that if one operation takes a long time to complete , it can cause the entire program to stall , making the users interface unresponsive . traditional sequential programming is inherently synchronous.

Example :- 
 */
/* let a = prompt("enter name")
let b = prompt("enter age") 
console.log(a+b)   */
//they execute one by one in orders
console.log("Start");
console.log("Middle");
console.log("End");

// in this example , each `console.log()` statement will be execution one after the other , in order.
/* 

Asynchronous Execution :-

In Asynchronous code Execution , operation are initated, but the program doesnt wait for them to complete . instead , it continues execution the next instructions. this is particularly useful for tasks that might take some times, like fecting data from a server or reading a File. Asynchronus operation help to keep the program responsive and avoid blocking the main execution thread.
In JavaScript, asynchronous operations are typically handled using callbacks, promises, and async/await syntax.

 */
/* 
callback function :- 

a callback function is a funtion that is passed as an argument to another function and is intended to be executed later , usually after some asynchronous operation or a certain event occurs. callback function are a fundamental concept in js and are widely used to handle asynchronous operation , event handling , and MutationRecord. */

function doSomethingAsync(callback) {
    setTimeout(function() {
        console.log("Async operation completed");
        callback();
    }, 5000);
}

function callbackFunction() {
    console.log("Callback function executed");
}

doSomethingAsync(callbackFunction);
/* 
In this example, doSomethingAsync is a function that simulates an asynchronous operation using setTimeout. It takes a callback function as an argument. When the asynchronous operation is completed (in this case, after a delay of 1000 milliseconds), the provided callback function (callbackFunction) is executed.

 */

