const user = {
    username : "Gaurav",
    branch : "Btech",
    welcomemessage : function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }
}
user.welcomemessage()
user.username = "Parmeet";
user.welcomemessage()

function chai()
{
    let name = "gaurav";
    console.log(name);
}
chai(); // return name simply

// Arrow Function => An arrow function is a shorter way to write a function in JavaScript
const arrow = () => {
    let user = "aditya";
    console.log(user);
}
arrow();

const add = (num1,num2) => { 
    return num1 + num2;} // Explicit Return - when there is multiple line of code so we have to use braces along with the return...
console.log(add(2,3));

const divide = (num1,num2) => num1/num2 // Implicit Return - when only one line of code is needed...so there is no need of curly braces...
console.log(divide(6,3));
