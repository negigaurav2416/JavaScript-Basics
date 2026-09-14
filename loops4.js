// Higer Order Array Loops

// For in loop - for in gives you the keys (or indexes), not the values...usually used in objects

const student = {
    name: "Gaurav",
    age: 19,
    branch: "CSE"
};

for (let key in student) {
    console.log(key); // returns key only
}

for (let key in student) {
    console.log(student[key]); // returns values now
}

for (let key in student) {
    console.log(key, "->", student[key]); // returns values now
}

let fruits = ["Apple", "Banana", "Mango"]; // for in loop in array
for (let index in fruits) {
    console.log(index); // returns only the indexes 0...1...2
}

let fruits2 = ["Apple", "Banana", "Mango"]; // for in loop in array
for (let index in fruits2) {
    console.log(fruits2[index]); // returns the values 
}