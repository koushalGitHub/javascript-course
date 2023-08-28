let arr = [25,89,65];
arr.map((value)=>{
    console.log(value)
});
let a = arr.map((value)=>{
    return value+1;
});

console.log(a)
/// map()  function return new array

let b = arr.forEach((e)=>{
    console.log(e)
})

let c = arr.map((e)=>{
    return e+1;
})
console.log(c)

let cd = arr.map((value,index)=>{   // index = 0,1,2
    return value+index;
});

console.log(cd)


//  array filter method

let arr2 = [4,5,8,9,6];

let arr3 =arr2.filter((value)=>{
    return value<6;
});  // give the true value in new array

console.log(arr3)

//array redue method

let arr4 = [2,6,8,4];
let  pp = arr4.reduce((koushal)=>{
    return koushal;
})

console.log("reduce",pp)

let  np = arr4.reduce((koushal,k)=>{
    return koushal+k;
})
console.log(np)  //output 20 i.e they sum first two then sum with third then so on

// reduce return a value 
// filter return a array
// map return a array