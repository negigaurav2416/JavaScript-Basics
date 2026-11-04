let count = 0
let counter = document.getElementById("counter")
function increment() {
    count++
    counter.innerText = count
}
function decrement() {
    count--
    counter.innerText = count
}

let save = document.getElementById("save")
let prev = document.getElementById("prev")
function saved() {
    prev.innerText += count
    prev.innerText += " "
    count = 0
    counter.innerText = count
}

