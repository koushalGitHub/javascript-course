// Problem statement 

const userDetails = {
    name : 'koushal',
    age : 23,
    Designation : 'Web Developer',
    printDetails: function(){                            // this keyword used for self referencing 
     //   console.log(this)                       /// now this keyword is point out for object "userDetails"  and point out for properties under object
        console.log("access properties from object with this keyword  =>",this.name)
    }
}


// console.log(userDetails.printDetails())
userDetails.printDetails()        // output =>access properties from object with this keyword  => koushal

const userDetails2 = {
    name : 'vishal',
    age : 26,
    Designation : 'Web Developer',
    // no need to again call same function  
  /*   printDetails: function(){                          
        console.log(this)                      
        console.log("access properties from object with this keyword  =>",this.name)
    } */
}

// here below we can says borrow the function 
userDetails.printDetails.call(userDetails2)    // output => access properties from object with this keyword  => vishal
// console.log(userDetails.printDetails())

// now we can print both names with help of call() function 
// same function will point out of both oject with this keywords




//  apply
// we can list of aggrument pass in an array form ;

const details = {
    name : 'koushal',
    age : 24,
  /*   printDetails:function(){
        console.log(this.name);
    } */
};
let printDetails = function(state,country){
    console.log(this.name+" "+ state +" " + country);
}

const details2 = {
    name : 'vishal',
    age : 26,
};

// printDetails.call(details,"punjab")
// printDetails.call(details2,"himachal")


printDetails.apply(details,["punjab","india"])
printDetails.apply(details2,["himachal","india"])


// bind

let bindFun =  printDetails.bind(userDetails,"Delhi","india");

// in bind we can create copy of function and invoked later

console.log(bindFun());

