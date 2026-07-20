const score = 100;
console.log(score);

const balance = new Number(score); // explicitly data type conversion
console.log(balance);


// console.log(balance.toString()); // converts into string

console.log(balance.toFixed(2)); // gives decimal value 


const newNumber = 29.2366;
console.log(newNumber.toPrecision(2)); // takes roundoff 

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // gives commas





