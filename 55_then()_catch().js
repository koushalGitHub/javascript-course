let p1 = new Promise((resolve,reject)=>{
    console.log('promises is pending');
    setTimeout(()=>{
        // console.log('i am promises');
        // resolve(true)
        reject(new Error("i am an error"))
    },2000);
})
// console.log(p1)
let p2 = new Promise((resolve,reject)=>{
    console.log('promises is pending');
    setTimeout(()=>{
        // console.log('i am promises');
        // resolve(true)
        reject(new Error("i am an error"))
    },2000);
})
// console.log(p2)

p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("error p1")
})

p2.catch((error)=>{
    console.log("some error occurs in p2")
})