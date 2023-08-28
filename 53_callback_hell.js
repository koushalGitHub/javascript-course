function hello(){
    alert('hello')
    
}
function goodmorning(src){
    alert('goodMorning ');
    src();
}

goodmorning(hello);

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log(calculate(5, 3, add));      // Outputs: 8
console.log(calculate(10, 4, subtract)); // Outputs: 6

/* 
Callbacks are a powerful concept in JavaScript that allow for flexible and dynamic programming. However, as more complex asynchronous code is written, callback hell (nested callback structures) can become an issue. To address this, modern JavaScript has introduced Promises and async/await syntax to make asynchronous code more readable and manageable. */