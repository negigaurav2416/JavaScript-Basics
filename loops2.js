// While Loop

let ind = 0;
while(ind <= 10){
    console.log(ind);
    ind += 2;
}


// do while loop - it runs atleast one times no matter what the condition is...

let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score < 0);

let arr = [10,20,30,40,50];
let z = 0;
do{
    console.log(arr[z]);
    z++;
} while(z < arr.length)