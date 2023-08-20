// write a program to print the marks of a student in an object using for loop

const obj = {
    "koushal":50,
    "vishal" : 40,
    "heman" : 30
}

for(let i=0; i < Object.keys(obj).length; i++){
    console.log(obj[Object.keys(obj)[i]])
}
 
for(let student in obj){
    console.log("marks of "+ student +" is "   + obj[student])
}

// write a program to print "try again" until the user enter the correct number.

/* let cr = 4;
let n = prompt("enter correct number");
n = Number.parseInt(n);
 switch (n){
    case 4:
   alert("correct");
    break;
    default:
      alert("try again");
}  */
/* 
if(n == 4){
    alert("ok")
}else{
    alert("try again")
} */

let cr = 4;
let i;

while(i != cr){
    i = prompt("Enter a number")
    i!=4?alert("try again"):''
}
console.log("you are right")


// write a program to find the mean of 4 number

const nums = (a,b,c,d)=>{
    return (a+b+c+d)/4;
}

console.log((4,5,6,2))