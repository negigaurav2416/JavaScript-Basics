// switch cases syntax --->
// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

const month = "mar"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March"); // if no break is used then all other conditions will be executed except default block...
        break;
    case "apr":
        console.log("April");
        break;
    default:
        console.log("Others");
        break;
}

// Falsy Values ---> false, 0 , -0 , Nan, undefined, null , BigInt 0n, ""
// Truthy Values ---> "0", true, 'false', " ", [], {}, function(){}

// Q - HOW TO CHECK IF AN ARRAY OR OBJECT IS EMPTY OR NOT

// Array
let numbers = [10, 20, 30];
if (numbers.length() === 0){
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}

// Object
const a = {}
if (Object.keys(a) === 0){
    console.log("Object is empty");
}
else{
    console.log("Object is empty");
}