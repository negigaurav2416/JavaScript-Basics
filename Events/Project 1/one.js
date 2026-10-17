// Events - An event is an action that happens in the browser
let btn = document.getElementById('btn');
btn.addEventListener('mouseover', function(){
    btn.innerText = "Mouse is over me!";
});
btn.addEventListener('mouseout',function(){
    btn.innerText = "mouse is out!";
});

let input = document.getElementById('input');
input.addEventListener('keydown', function(e){
    console.log(e.key);
});

// Event propagation means how an event travels through elements in the HTML DOM
//1. Capturing phase - The event travels from the outer element (div) toward the inner element (button) -- true
// 2. Bubbling phase - The event travels from the inner element (button) back toward the outer element (div) -- false
// true → capturing phase.
// false → bubbling phase.

const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.addEventListener('click', function() {
    console.log('Parent clicked');
}, false);
child.addEventListener('click', function() {
    console.log('Child clicked');
}, false);

// event.stopPropagation() - Stops the event from travelling to parent elements
// event.preventDefault() - Stops the browser's default action