/* Promises :- 

promises are core concept in javascript for handling asynchronous operations in a more organized and readable manner.they provide a cleaner alternative to using callback functions for managing asynchronous code . Promises were introduced to alleviate the issue of "callback hell" or "pyramid of doom" which can occur when dealing with deeply nested callbacks.

A promises represnts a value that might be avaiable now, or in the future , or never . it has three states : pending , fullfilled or reject . A promises is created using the `promises` constructor , which takes a function with two agruments : `resolve` and `reject`. Inside this function, you perform your asynchronous operation , and when its compeleted , you call `resolve` to indicate success or `reject` to indicate failure.
 */

// Here's a basic example of creating and using a Promise:

const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const randomNumber = Math.random();
        
       if(randomNumber > 0.2){
            resolve(randomNumber)
        }else{
            reject('Random number is too small')
        } 
    },1000);
})

myPromise.then(result => {
    console.log("promise resolved with result:" , result)
}).catch(error => {
    console.log("promise rejected with error:" , error)
})