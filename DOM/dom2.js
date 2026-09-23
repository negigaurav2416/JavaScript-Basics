// DOM Relations - Parent and Child Elements

let parent = document.querySelector(".parent"); // Select the parent element

// parent.children -> Returns an HTMLCollection of all child elements
// parent.children[index] -> Access a specific child by index

// Loop through all child elements
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

// firstElementChild -> Returns the first child element
console.log(parent.firstElementChild);

// lastElementChild -> Returns the last child element
console.log(parent.lastElementChild);

// Child to Parent Flow
let firstchild = document.querySelector(".day");
    console.log(firstchild);
    console.log(firstchild.parentElement);
    console.log(firstchild.nextElementSibling);

// Child Nodes
console.log(parent.childNodes);
