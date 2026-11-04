let firstCard = 6
let secondCard = 10
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlack = false
let isAlive = true
let message = ""
let msg = document.getElementById("message")
let summm = document.getElementById("sum")
let card = document.getElementById("cards")

function start(){
    renderGame()
} 

function renderGame(){
    summm.textContent = "sum :" + sum
    card.textContent = "Cards: " + cards[0] + " " + cards[1]
    if (sum <= 20){
    message = "Do you want to draw a new card!?"
}
else if (sum === 21){
    message = "Woohoo! You Won!"
    hasBlack = true
}
else {
    message = "You lost"
    isAlive = false
}
msg.textContent = message
}

function newCard(){
    let card = 7
    sum += card
    cards.push(card)
    renderGame()
}