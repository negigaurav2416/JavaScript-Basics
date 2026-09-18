// map() creates a new array by changing every element of the original array
let nums = [1,2,3,4,5,6,7,8];
let newnums = nums.map((number) => number *= number
)
console.log(newnums);

// Chaining ---> Chaining means calling one method after another on the same data
let numbers = [1,2,3,4,5,6,7,8];
let newnumbers = numbers.map(num => num * 10).map(num => num + 1).filter(num => num > 40);
console.log(newnumbers);

// forEach() --->
// Performs an action on every item, return undefined
// filter() --->
// Keeps only items that match a condition, return New filtered array
// map() --->
// Changes every item into something, return New transformed array