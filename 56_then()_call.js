let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("we are run in 2 ")
    },2000);
    resolve(56)
   
});

p1.then((v)=>{
    console.log(v)
    let p2 = new Promise((resolve,reject)=>{
            resolve("promises 2")
            
    })
    return p2
}).then((value)=>{
    console.log("we are done")
}).then((value)=>{
    console.log("we are paakka done")
})



// Function that returns a Promise that resolves after a given delay
function delay(time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });
  }
  
  // Example asynchronous operations
  function step1() {
    console.log("Step 1: Start");
    return delay(1000).then(() => {
      console.log("Step 1: End");
      return "Step 1 Result";
    });
  }
  
  function step2(previousResult) {
    console.log("Step 2: Start");
    console.log("Step 1 Result:", previousResult);
    return delay(2000).then(() => {
      console.log("Step 2: End");
      return "Step 2 Result";
    });
  }
  
  function step3(previousResult) {
    console.log("Step 3: Start");
    console.log("Step 2 Result:", previousResult);
    return delay(1500).then(() => {
      console.log("Step 3: End");
      return "Step 3 Result";
    });
  }
  
  // Start the promise chain
  step1()
    .then(step2)
    .then(step3)
    .then(finalResult => {
      console.log("Final Result:", finalResult);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  