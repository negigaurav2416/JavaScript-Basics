// IIFE stands for Immediately Invoked Function Expression
// function is created and executed immediately as soon as JavaScript reaches it


(function(){
    let user = "Gaurav";
    console.log(user);
})(); // Gaurav


(function(username){
    console.log(`hello ${username}`);
})("Gaurav Negi"); // hello Gaurav Negi


(function add(num1,num2){
   console.log(num1 + num2)
})(5,7); // 12


((username) => {
    console.log(`Hello ${username}, welcome to JavaScript!`);
})("Deepanshu");