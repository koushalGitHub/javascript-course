let num = [3,5,6,7,8,9];
for(i=0;i<num.length;i++){
    console.log(num[i])
}
// now if i want to multiply num[i] * num[i];

// used forEach loop

num.forEach((element)=>{
    console.log(element*element)
})

// Array.from

let name = "koushal";
let a = Array.from(name) /// convert array
console.log(name);
console.log(a);

for(let a of name){  // return value
    console.log(a)
}


for(let a in name){  //return key
    console.log(a)
}

