
let randomNumber = Math.floor(Math.random() * 100) + 1;

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#sub');
const startOver = document.querySelector('.resultParas');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const form = document.querySelector('.form');

let prevGuess = [];
let numGuess = 0;
let playgame = true;

form.addEventListener('submit', function (e){
    e.preventDefault();
    if (!playgame) return;
    const guess = Number(userInput.value);
    validateGuess(guess);
});

function validateGuess(guess){
    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        displayMessage('Please enter a valid number between 1 and 100.');
        return;
    }
    prevGuess.push(guess);
    displayGuess(guess);
    numGuess++;

    remaining.textContent = 10 - numGuess;
    if (guess === randomNumber){
        displayMessage('YOU WON!!');
        endGame();
    }
    else if(numGuess === 10){
        displayMessage(`Game over! The number was ${randomNumber}`);
        endGame();
    }
    else{
        checkGuess(guess);
    }
    userInput.value = '';
}

function checkGuess(guess) {
    if(guess < randomNumber) {
        displayMessage('THE NUMBER IS TOO LOW');
    }
    else{
        displayMessage('THE NUMBER IS TOO HIGH');
    }
}

function displayGuess(guess){
    if (numGuess === 0){
        guessSlot.textContent = guess;
    }
    else{
        guessSlot.textContent = prevGuess.join(' ');
    }
}

function displayMessage(message){
    lowOrHi.textContent = message;
}

function endGame(){
    playgame = false;
    userInput.disabled = true;
    submit.disabled = true;
    const p = document.createElement('p');
    p.id = 'para';
    const newButton = document.createElement('button');
    newButton.textContent = 'Start New Game';
    p.appendChild(newButton);
    startOver.appendChild(p);
    newButton.addEventListener('click', newGame);
}

function newGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 0;
    guessSlot.textContent = 'None yet';
    remaining.textContent = '10';
    displayMessage('Start guessing!');
    userInput.disabled = false;
    submit.disabled = false;
    userInput.value = '';
    document.querySelector('#para').remove();
    playgame = true;
}
