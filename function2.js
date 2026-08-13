function CalculateCartPrice(...price) // rest operator... return all the price of the cart in the form of an array
{
    return price;
}
console.log(CalculateCartPrice(100,200,300,500));

const user = {
    username : "Gaurav",
    age : 19,
    branch : "CSE"
};

function handleobject(anyobject) // function with objects
{
    console.log(`Username is ${anyobject.username}`);
    console.log(anyobject.age);
}
handleobject(user);

const myarray = [20,40,60,80]; // function with arrays
function getsecondvalue(getarray)
{
    console.log(getarray[1]);
}
getsecondvalue(myarray);