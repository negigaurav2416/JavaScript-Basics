// For Loop
let arr = [10,20,30,40,50];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
}

// 2 for loops
// for (let i = 0; i <= 10; i++) {
//     for (let j=0;j<=10;j++){
//         console.log(`${i},${j}`);
//     }
// }


// Break and Continue --->

for (let a=0; a<=10; a++){
    if (a == 5){
        break; // breaks the loop if condition is met
    }
    console.log(a);
}

for (let ind=0; ind<=10; ind++){
    if (ind == 5){
        continue; // continue only skips the particular iteration
    }
    console.log(ind);
}