// DOM SELECTORS

// 1) getElementById() - getElementById() finds one HTML element using its id...
let head = document.getElementById("title");
console.log(head); // return the whole html element
head.innerText = "Mark Ross";

// 2) getAttribute() - It returns the value of that attribute...
const link = document.getElementById("link");
console.log(link.getAttribute("href"));

// 3) setAttribute() - It changes an existing attribute or creates a new one...
const link2 = document.getElementById("link");
link2.setAttribute("href", "https://youtube.com");

// Verify the new value
console.log(link2.getAttribute("href"));

// innerHTML ---> Gets or sets the html tags + text
// innertext --> Gets or sets only the visible text.
// innerContent ---> Gets or sets all text, even if it's hidden by some styling property
 

// querySelector() → Returns the first matching element
document.querySelector("h1");
// querySelectorAll() → Returns all matching elements 
document.querySelectorAll("h1");

// ForEach in NodeliST
const colour = document.querySelectorAll("#colors");
colour.forEach(function(l) {
    l.style.color = "red"
})

// Some methods return an HTMLCollection, which doesn't have all array methods we can convert to Array by Array.from(object)...