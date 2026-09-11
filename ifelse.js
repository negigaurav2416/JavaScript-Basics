// Comparison Operators --->    < , > , <= , >= , , = , == , === , != , !== 
// control flow condition - if , else , else if 

let user = "loggedin"
if (user = "loggedin"){
    console.log("The user is logged in!!");
}


let marks = 92;
if (marks < 50){
    console.log("D GRADE");
}
else if (marks < 60){
    console.log("C GRADE");
}
else if (marks < 70){
    console.log("C GRADE");
}
else if (marks < 80){
    console.log("B GRADE");
}
else if (marks < 90){
    console.log("A GRADE");
}
else{
    console.log("A+ GRADE");
}

//Logical Operators ---> AND -> && ..... OR -> ||
const a = 10;
const b = 5;
if (a > 0 && b > 0){
    console.log("Both are positives"); // both conditions must true to execute this part
}
else{
    console.log("Both are negatives");
}

const c = -10;
const d = -5;
if (c > 0 || d > 0){
    console.log("Both are positives"); // both conditions must true to execute this part this line of code
}
else{
    console.log("Both are not positive");
}

// NULLISH COALESCING Operator (??) : Null and Undefined
let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

// Ternary Operator
// condition ? true : false

const num = 50
num > 0 ? console.log("+ve number") : console.log("-ve number");