// Constructor Method ----->>>
const app = new Object()
app.id = 2416
app.name = "Gaurav"
app.age = 19

// Nesting
const user = {
    mail : "negigaurav2416@gmail.com",
    fullname : {
        username : 
        {
            firstname : "Gaurav",
            lastname : "Negi"
        }
    }
}
// console.log(user.fullname.username.firstname);

const obj1 = {1:'a', 2:'b', 3:'c'}
const obj2 = {4:'d', 5:'e', 6:'f'}
//const obj3 = Object.assign({}, obj1, obj2);
// OR
const obj3 = {...obj1, ...obj2};
console.log(obj3);









