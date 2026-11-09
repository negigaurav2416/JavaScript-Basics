let player = {
    name : "Gaurav",
    chips : "145"
}
let cards = []
let sum = 0
let hasBlack = false
let isAlive = false
let message = ""
let msg = document.getElementById("message")
let summm = document.getElementById("sum")
let card = document.getElementById("cards")
let points = document.getElementById("points")
points.textContent = player.name + ": $ " + player.chips

                                       
function start(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
} 

function getRandomCard(){
    let randomNum = Math.floor((Math.random() * 13)) + 1
    if (randomNum == 1){
        return 11
    }
    else if (randomNum > 10){
        return 10
    }
    else{
        return randomNum
    }
}

function renderGame(){
    summm.textContent = "sum :" + sum

    card.textContent = "Cards: "
    for (let i=0;i<cards.length;i++){
        card.textContent += cards[i] + " "
    }

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
    if (isAlive === true && hasBlack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()}
}