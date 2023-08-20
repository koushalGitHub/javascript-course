// while loop /* 
/* while(conditon){
    code to be execute
}

Note: if the condition never becomes false , the loop will never end  and this might crash  the runtime */

/* let z = 0;
let n = prompt("Enter number here")
while( z < n){
    console.log(z);
    z++;
}
 */
// do while loop

// first run block then conditon check or execute atleast one time

let z = 0;
let n = prompt("Enter number here")
do{
    console.log(z);
    z++;
}while( z < n);