// object de-structuring
const student = {
    name : "gaurav",
    age : 19,
    weight : 70
}

// console.log(student.name); ...normal way 

const {name,age,weight} = student;
console.log(student);

const {name:firstname} = student;
console.log(firstname);


// JSON stands for JavaScript Object Notation 
// It is a text format used to store and exchange data between applications.
 
 
