// prototype 
// in javascript object have a special property called prototype that is either null or reference another object.
// when we try to read property from a object and its missing. javascript automatically takes it from the prototype.this is called prototype inheritance.


let a = {
    name:"koushal",
    language : "js"
};
console.log(a);

let p ={
    run :()=>{
        alert("self")
    }
}
// a.run() 
 // this is give an error but when i try this prototype

// use with an prototype

a.__proto__ = p
a.run() // then its working fine