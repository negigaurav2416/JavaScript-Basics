let num1 = 10
let num2 = 5

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum")

function add() {
    let res = num1 + num2
    sum.textContent = "sum:" + res
}

function minus() {
    let res = num1 - num2
    sum.textContent = "subtract:" + res
}

function multiply() {
    let res = num1 * num2
    sum.textContent = "result:" + res
}

function divide() {
    let res = num1 / num2
    sum.textContent = "result:" + res
}