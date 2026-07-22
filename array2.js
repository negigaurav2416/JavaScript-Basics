const branch1 = ['CSE', 'AI', 'ML'];
const branch2 = ['IT', 'DS'];
const allbranches = branch1.concat(branch2);
console.log(allbranches); // concat is used for concatination of two arrays


const allbranches2 = [...branch1,...branch2];
console.log(allbranches2); // spread operator


const arr = [1,2,3,[4,5,6],7,[8,9],10];
console.log(arr.flat(Infinity)); // flat is used to return all the subarrays


console.log(Array.isArray(branch1)); // asks if it is an array or not


console.log(Array.from('Gaurav')); // creates array 'G' ...'A'...'U'...


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // creates array from sub array
