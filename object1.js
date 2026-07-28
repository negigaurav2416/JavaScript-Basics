// Objects - An object is a collection of key-value pairs
// object.create - constructor method ...singelton is created
// literals method ...  no singleton is created
const student = {
    Name : "Gaurav Negi",
    Age : 19,
    Branch : "CSE",
    State : "Delhi"
}
// Accessing Method ---->>>
console.log(student.Name);
console.log(student["Age"]);

// Operations ----->>
student.course = "CSE";
console.log(student.course);

delete student.course;

// Create a Symbol and add it to the object ------->>>>>
const mysym = Symbol("symbol1");
const student = {
    Name : "Gaurav Negi",
    Age : 19,
    [mysym] : "mykey1",
    Branch : "CSE",
    State : "Delhi"
}
console.log(student[mysym]);

student.Age = 18;
console.log(student.Age);
Object.freeze(Name); // no one can modify the Object name