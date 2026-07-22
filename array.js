const arr = [1,2,3,4,5,true,'abc']; // can store value of mixed data types 
console.log(arr[0]); // 0 based indexing

const arr2 = new Array(5,10,15,20,25,30); // another type of declaring array
console.log(arr2[4]);

// Array Methods ------------------------

const arr3 = [4,8,12,16,20];
arr3.push(24); // push adds the element at the last
console.log(arr3);

const arr4 = [2,4,6,8,10,12,14];
arr4.pop(14); // pop removes the last element
console.log(arr4);

const arr5 = [4,6,8,10,12,14];
arr5.unshift(2); // unshift adds the element at first position
console.log(arr5);

const arr6 = [4,6,8,10,12,14];
arr6.shift(4); // shift removes the first element
console.log(arr6);

const arr7 = [4,6,8,10,12,14];
console.log(arr7.includes(6)); // includes tell T/F whether the element is there or not

const arr8 = [4,6,8,10,12,14];
console.log(arr8.indexOf(6)); // indexof returns the element index or else return -1

const arr9 = [1,2,3,4,5,6,7];
console.log(arr9.slice(1,3)); // slice(start, end) → end is excluded (1,2)

const arr10 = [1,2,3,4,5,6,7];
console.log(arr10.splice(1,3)); // splice(start, end) → end is also taken (1,2,3)
