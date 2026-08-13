function saymyname()
{
    console.log("Gaurav Negi");
}
saymyname(); // Function is called


function addtwonum(num1, num2) // Function with parameters
{
    return num1 + num2;
}
let res = addtwonum(2,3); // value is only returned so no output
console.log(res); // output is displayed


function loginusername(username)
{
   if (!username) //  if (username === "")
   {
    console.log("Enter Valid Input");
    return;
   }
   return `${username} logged in`
}
console.log(loginusername("Gaurav")); // if no Value passed it will return undefined


