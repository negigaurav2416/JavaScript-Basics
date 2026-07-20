const newNumber = 25;
console.log(Math.abs(-5)); // gives absolute value


console.log(Math.max(21,25,67,111,68,93)); // gives max value
console.log(Math.min(21,25,67,111,68,93)); // gives min value


console.log(Math.round(24.3)); // gives roundoff value
console.log(Math.ceil(24.3)); // gives max rounf off value
console.log(Math.floor(24.9)); // gives min rounf off value


console.log(Math.random()); // gives any value between 0 and 1
console.log(Math.floor(Math.random()*10));

const max = 20;
const min = 10;
console.log(Math.floor(Math.random(max - min + 1) + min));
