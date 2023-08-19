// pratice set chapter 1

// Q1. Create a variable of type string and try to add a number to it

let a = "koushal";
let b = 90;
 console.log(a + b);

// Q2 .  Use typeof operator to find the datatype of the string in last question ?

console.log("to find datatype->", typeof a + " ",  typeof b);
// or
console.log(typeof (a+b))

// Q3 . Create a const object in javascript can you change it to hold a number later ?

 const test = {
    name : "koushal",
    section : 1,
 };
//  test = 45;  // throw an error we cannot assign again in const
//  answer we can not change a const object in number later.


// Q4. Try to add a new key to the const object in problem 3 . were you add to it ?

// test is a refrence of object so now we can add more key in object like this ->
 test['friend'] = "vishal";
// we can also change a key 's value after declear object like this->
test['name'] = "kk";  // now the oject name value is change with kk to koushal


console.log(test);


// Q5 . create a js program to create a word meaning  dictionary of 5 object . ?

const dict = {
    'same':'similar',
    'nice' : 'good'
};
console.log(dict['nice']);
// OR
console.log(dict.same);