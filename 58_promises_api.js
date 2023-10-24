//
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('value 1')
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('value 2')
    },2000)

})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('value 3')
    },3000)
})
/* 
p1.then((val)=>{
    console.log(val)
})
p2.then((val)=>{
    console.log(val)
})
p3.then((val)=>{
    console.log(val)
}) */
// if we dont know how much time for execute whose promise then use this Promise.all this is executed when all promises are resolved. this give the value in array
let p_all = Promise.all([p1,p2,p3]);
p_all.then((value)=>{
    console.log(value)
})
//  Promise.all() is a built-in JavaScript method that is used to handle multiple promises concurrently and efficiently. It takes an array (or any iterable) of promises as input and returns a new promise. This new promise will resolve when all of the input promises have resolved, or it will reject as soon as any one of the input promises is rejected. In other words, it waits for all the promises to complete before resolving, and if any one of them is rejected, it immediately rejects.

//Promise.all() is commonly used in scenarios where you have multiple asynchronous operations that can be executed in parallel, and you want to wait for all of them to complete before moving on to the next step. It's particularly useful when you need to make multiple API requests or perform multiple database queries simultaneously and then process the results together.

// allSettled  = give response with status

let p_settled  = Promise.allSettled([p1,p2,p3])
p_settled.then((value)=>{
    console.log(value)
})


