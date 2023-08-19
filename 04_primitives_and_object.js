// if a string in a varible and in a varible a also declear number but its not a good pratice


// nn bb ss u
// these 7 types of primitives data type in javascript 
let a = null;
let b = 345;
let c = true // can also be false   //boolean
let d = BigInt("446") + BigInt("1");
let e = "koushal"
let f = Symbol("i am a nice symbol");
let g = undefined;
// if says let g ' then its also undefined no need to says = undefined


console.log(a,b,c,d,e,f,g);

console.log(typeof d);



// object in js
// object is key value pairs and object is non primitives datatype

// its creates as follows
 const items  = {
    'koushal' : true,
    "vishal" : false,
    'heman' : 57,
    'rohan'  : undefined
 }

 console.log("object is ",items['heman'])