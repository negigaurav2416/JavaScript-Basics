// const arr = ["CSE", "DS", "AI/ML", "EE"];
// const values = arr.forEach( (item) => {
//     // console.log(item);
//     return items;
// })
// console.log(values); // forEach do not return any values 

// Filter() is array method which creates a new array containing only the elements that satisfy a condition

const numbers = [1,2,3,4,5,6,7,8,9,10];
const even = numbers.filter( (item) => {
    return (item % 2 == 0);
})
console.log(even);

// const even = []; ---->>> alternative method using forEach
// numbers.forEach((item) => {
//     if (item % 2 == 0){
//         even.push(item);
//     }
// })
// console.log(even);

const employees = [
  { id: 1, name: "Gaurav", age: 19, salary: 45000, city: "Delhi", department: "CSE", active: true },
  { id: 2, name: "Rahul", age: 22, salary: 55000, city: "Noida", department: "IT", active: true },
  { id: 3, name: "Aman", age: 18, salary: 30000, city: "Gurugram", department: "ECE", active: false },
  { id: 4, name: "Priya", age: 25, salary: 70000, city: "Delhi", department: "HR", active: true },
  { id: 5, name: "Neha", age: 21, salary: 48000, city: "Jaipur", department: "Marketing", active: false },
  { id: 6, name: "Rohan", age: 23, salary: 62000, city: "Noida", department: "IT", active: true },
  { id: 7, name: "Simran", age: 20, salary: 39000, city: "Delhi", department: "CSE", active: true },
  { id: 8, name: "Karan", age: 27, salary: 85000, city: "Mumbai", department: "Finance", active: false },
  { id: 9, name: "Anjali", age: 24, salary: 67000, city: "Gurugram", department: "HR", active: true },
  { id: 10, name: "Vikas", age: 26, salary: 73000, city: "Pune", department: "IT", active: true },
  { id: 11, name: "Sakshi", age: 22, salary: 51000, city: "Delhi", department: "Marketing", active: false },
  { id: 12, name: "Arjun", age: 19, salary: 35000, city: "Noida", department: "CSE", active: true },
  { id: 13, name: "Meera", age: 28, salary: 90000, city: "Mumbai", department: "Finance", active: true },
  { id: 14, name: "Yash", age: 20, salary: 42000, city: "Gurugram", department: "ECE", active: false },
  { id: 15, name: "Pooja", age: 23, salary: 58000, city: "Delhi", department: "IT", active: true }
];

let freshers = employees.filter((data) => {
    return data.salary <= 40000;
});
console.log(freshers);
