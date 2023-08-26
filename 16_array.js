// Array -  array are variable which can hold more then one value
//array are object

let a = [51,53,65,86,57,null,"kk"];
/* 
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[9]);  // undefined
console.log(a.length);  // 7

a[2] = 5;  // change value of  65 to 5
console.log(a);


console.log(typeof a); // object 

 */

for(i=0; i < a.length;i++){
    console.log(a[i]);
}

// Array method 1 :- 

let num = [1,2,3,5,8,9];
let b = num.toString();  // convert array into string
console.log(b)  //1,2,3,5,8,9

let c = num.join("_") // join array value with separator
console.log(c)  //1_2_3_5_8_9

// pop = remove last element of array
num.pop()
console.log(num)/// 1, 2, 3, 5, 8
 
let r = num.pop(); // pop return pop element
console.log(num,r);  //[1, 2, 3, 5] 8

let p  = num.push(10);//push return the new array length
console.log(num,p)

// concat array 

let nums = [1,2,3,4,5,6,5];
let num_r = [11,12,13,14,15,16,15];
let num_sr = [11,12,13,14,15,16,15];

let newArr = nums.concat(num_r,num_sr)
console.log(newArr)


// array sort


let z = [586,65,5,2,49,312,9323,556,26,6];
z.sort();
console.log(z); // they sorting accoring to string ,i.e they read first number like 562 they sort only 5

let compare = (a,b)=>{
    return a-b ;
};
let compare_desc = (a,b)=>{
    return b-a ;
};
z.sort(compare)
console.log(z);  // now its return asc to desc with compare function 
z.sort(compare_desc);
console.log(z)  // its return desc to asc 


//splice and slice


// splice()  = can be used to add new items to an arary 
// array.splice(startIndex, deleteCount, item1, item2, ...);
/* 
startIndex: The index at which to start modifying the array.
deleteCount: The number of elements to remove from the array, starting from the startIndex. If set to 0, no elements will be removed.
item1, item2, ...: Optional items to insert at the startIndex. */

//Removing elements from an array:
let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2);  // Removes 'banana' and 'cherry'
console.log(fruits);  // Output: ['apple', 'date']

//Inserting elements into an array:

let colors = ['red', 'green', 'blue'];
colors.splice(1, 0, 'yellow', 'purple');  // Inserts 'yellow' and 'purple' at index 1
console.log(colors);  // Output: ['red', 'yellow', 'purple', 'green', 'blue']


// Replacing elements in an array:

let animals = ['dog', 'cat', 'elephant', 'giraffe'];
animals.splice(2, 1, 'lion');  // Replaces 'elephant' with 'lion'
console.log(animals);  // Output: ['dog', 'cat', 'lion', 'giraffe']

//slice()

// array.slice(startIndex, endIndex);
/* startIndex: The index at which to start copying elements.
endIndex: The index before which to stop copying elements. The element at this index will not be included in the new array. */

let numbers = [1, 2, 3, 4, 5];
let sliceNumbr = numbers.slice(1,4);  // Copies elements at index 1, 2, and 3
console.log(sliceNumbr);  // Output: [2, 3, 4]

//Copying from a specific index to the end:

let colorsz = ['red', 'green', 'blue', 'yellow', 'purple'];
let slicedColors = colorsz.slice(2);  // Copies elements from index 2 to the end
console.log(slicedColors);  // Output: ['blue', 'yellow', 'purple']
/* 
The slice() method is particularly useful when you want to work with a subset of an array without altering the original array. Keep in mind that slice() does not modify the original array and instead creates a new array.

*/


