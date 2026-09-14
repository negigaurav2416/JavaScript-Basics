// Higher Order Array Loops

// For of loop - Instead of asking for index 0...1...2 JavaScript directly hands you each item

let fruits = ["Apple", "Banana", "Mango"];
for (const i of fruits) { // Array
    console.log(i);
}

let numbers = [10, 20, 30, 40];
for (let num of numbers) { // Numbers
    console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) { // Strings
    console.log(greet);
}


// Map - Data Structure which stores the elements in key value pairs
// Map.set is used to insert values


const student = new Map(); // initialisation or declaration of Map
student.set("name", "Gaurav");
student.set("age", 19);
student.set("branch", "CSE");
// console.log(student);

// console.log(student.get("name")); // get is used to get value

for (const [key,value] of student) { // loops in Map
    console.log(key,"->",value);
}