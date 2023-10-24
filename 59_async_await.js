// In JavaScript, the async keyword is used to define a function as asynchronous. An asynchronous function is one that can perform operations asynchronously, allowing the program to continue executing other tasks without waiting for the asynchronous operation to complete. Async functions are a fundamental part of modern JavaScript, especially when dealing with asynchronous tasks like making HTTP requests, reading files, or performing database queries.

/* async function myFun(){
    return "asyn operation is completed";
}

myFun().then((res)=>{
    console.log(res)
})
 */
async function koushal(){
    let a = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            reject("a ka promise")
        },1000)
        
    })
    let b = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved("b ka promise")
        },2000)
        
    })
    console.log('fetching a')
    let d = await a
    console.log('fetching b')
    let e = await b
    return [d,e]
}

let c = koushal();
console.log(c)

function fetchedData(){
    let a = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved("data from promise")
        },5000)
    })
    return a
   
}


async function main(){
    console.log("before fetching")

    const result = await fetchedData();  // its wait until promise is resolved

    console.log(result)

    console.log("after fetched data with promise")
}

main()