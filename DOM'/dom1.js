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