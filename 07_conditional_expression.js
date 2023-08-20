let a = prompt("Hi whats your age ?")
a = Number.parseInt(a); // converting the string to a number

// console.log(typeof a);

if(a>0){
    alert("this is a valid age");
}
else{
    alert("this is not valid age");
} 

let age = 12;
let y = age>18?"you can drive":"you can not drive";
console.log(y);

