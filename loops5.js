// Higer Order Array Loops

// For each loop - forEach() executes a function once for every element in an array
// annot use break or continue...


const arr = ["CSE", "DS", "AI/ML", "EE"];

arr.forEach(function (val){ // loops through normal function
    console.log(val);
})

arr.forEach((val) => { // loops through arrow function =>
    console.log(val);
})

function printme(item){
   console.log(item);
}
arr.forEach(printme); // we can pass function too

// Objects containing multiple objects
const students = [
    {
        name: "Gaurav",
        age: 19,
        branch: "CSE"
    },
    {
        name: "Rahul",
        age: 20,
        branch: "IT"
    },
    {
        name: "Aman",
        age: 18,
        branch: "ECE"
    }
];
students.forEach(item => {
    console.log(item.age); // forEach can access the objects values by their keys
});