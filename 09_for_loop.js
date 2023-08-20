// loop-> we use loops to perform repeated actions , for eg . - if you are designed a task of printing numbers from 1 to 100 , it will be verry hectic to do it manually . loops help us automate such task.
/* 
for(let i=0; i<10; i++){
    console.log(i+1);
}
 */


// Program to add first nature number OR if some one enter a number in promt then add all these nature number like if enter someone 2 then add 1+2 = 3;
/* 
let sum = 0;
let n = prompt("Enter number for sum");
n = Number.parseInt(n)
for(let i=0; i < n; i++){
    sum += (i+1);
}
console.log(sum)
 */
// program to multiply each enter number  OR factorial
/* 
let sum = 1;
let n = prompt("Enter number for sum");
n = Number.parseInt(n)
for(let i=0; i < n; i++){
    sum *= (i+1);
}
console.log(sum)

 */
// for in loop

let obj = {
    koushal : 23,
    vishal : 25,
    heman : 24,
}

for(let b in obj){
    console.log("Marks of "+b+ " is " + obj[b])
}

// for of loop

for(let a of 'koushal'){
    console.log(a);
}


const array = [1,2,3,4,5];
for(const num of array){
    console.log(num);
}


const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};

for (const key in person) {
        console.log(key,person[key]);
    
}
