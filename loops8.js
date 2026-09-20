// Reduce() => It takes all the elements of an array and combines them into one final value

let nums = [1,2,3,4,5,6];
const sumarray = nums.reduce(function(acc,sum){
    console.log(`accumulator = ${acc} and current = ${sum}`);
    return acc + sum;
}, 0)
console.log(sumarray);

// upper code through arrow function
const arrsum = nums.reduce( (ac,sum) => ac+sum, 0); // 21

// reduce() does not work directly on plain objects. It is an array method, so it only works on arrays
const fruits = [
    {price : 500},
    {price : 600}
];
const total = fruits.reduce((acc,item) => acc + item.price, 0);
console.log(total);
