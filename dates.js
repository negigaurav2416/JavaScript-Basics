let mydate = new Date();
console.log(mydate);

console.log(typeof mydate);
console.log(mydate.toString()); // gives date and time in IST
console.log(mydate.toDateString());

let mycreateddate = new Date(2026,0o6,21);
console.log(mycreateddate.toDateString());

let mydate2 = new Date("2026-07-21");
console.log(mydate2.toLocaleString()); // gives date and time both but time is not in IST

// - - -- - -- - -- - --  - -- - -- - -- - - -- - - -- - - -- Time -  - - -- - -- - -- - --  - -- - -- - -- - - -- - - -- - - --  -  - - -- - -- - -- - --  - -- - -- - - -

let myTime = Date.now(); // Current timestamp in mm
console.log(myTime);
console.log(Math.floor(myTime / 1000)); // Convert to sec

let myDate = new Date();
console.log(myDate.getTime()); // Timestamp in mm

let myDate2 = new Date(); // Current date & time
console.log(myDate2.getFullYear());
console.log(myDate2.getMonth()); 
console.log(myDate2.getDate());
console.log(myDate2.getDay()); 
console.log(myDate2.getHours());