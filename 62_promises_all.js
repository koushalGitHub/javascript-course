//
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('value 1')
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('value 2')
    }, 2000)

})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('value 3')
    }, 3000)
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

//  Promise.all() is a built-in JavaScript method that is used to handle multiple promises concurrently and efficiently. It takes an array (or any iterable) of promises as input and returns a new promise. This new promise will resolve when all of the input promises have resolved, or it will reject as soon as any one of the input promises is rejected. In other words, it waits for all the promises to complete before resolving, and if any one of them is rejected, it immediately rejects.

//Promise.all() is commonly used in scenarios where you have multiple asynchronous operations that can be executed in parallel, and you want to wait for all of them to complete before moving on to the next step. It's particularly useful when you need to make multiple API requests or perform multiple database queries simultaneously and then process the results together.

// allSettled  = give response with status

/* let p_settled  = Promise.allSettled([p1,p2,p3])
p_settled.then((value)=>{
    console.log(value)
}) */


let run = async () => {
    console.time()
    let a1 = await p1;
    console.log(a1)
    let a2 = await p2;
    console.log(a2)
    let a3 = await p3;
    console.log(a3)

    console.timeEnd()
}




let pp1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}
let pp2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000);
    })
}
let pp3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}
let run2 = async () => {
    console.time()
    /*  let a1 = await pp1();
     console.log(a1)
     let a2 = await pp2();
     console.log(a2)
     let a3 = await pp3();
     console.log(a3)
  */
    let a1 = pp1();

    let a2 = pp2();

    let a3 = pp3();
    let a1a2a3 = await Promise.all([a1, a2, a3])   // with promise.all function its in 3 sec  other wise if use simple console.log(a1,a2,a3) with await of all function its take 6 sec
    // its schedule parallerly 
    console.log(a1a2a3)

    console.timeEnd()
}

run2()

