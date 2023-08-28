// get number from user and add in get array ?
/* 
let arr = [1,4,2,5,6];
let a = prompt("hy enter number here");
 a = Number.parseInt(a)
arr.push(a)

let t = arr.filter((a)=>{
    return a = 0;
})
console.log(t);
 */
let a = [4,1,2,5];
let i;
/* do{
    i = prompt("fill")
    i = Number.parseInt(i)
    a.push(i)
}while(i != 0 )
console.log(a)
 */


// filter  number those are divisible 2 in array

let d = a.filter((a)=>{
    return a%2 === 0;
})
console.log(d)
// square of each number
let e = a.map((s)=>{
    return s*s;
});

console.log(e);

// factorial 

let f =  a.reduce((f)=>{
    return f*f;
});

console.log(f)