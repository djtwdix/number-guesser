let randomNumber = Math.floor(Math.random() * 100);
let prompt = require("prompt-sync")();
let numOfGuesses = 0;
let previousGuesses = [];

//console.log(randomNumber)

let answer = prompt("Guess a number: ");

const checkGuess = function (guess) {
  if (parseInt(guess) === randomNumber) {
    numOfGuesses++
    console.log(`You got it! You took ${numOfGuesses} attempt!`)
  }
  if (guess === "q") {
    console.log(`You have quit the game, thanks for playing!`)
  }
  while (parseInt(guess) !== randomNumber) {
    if (isNaN(guess) === true && guess !== "q") {
      console.log("> " + guess)
      console.log("Not a number! Try again!")
      guess = prompt("Guess a number: ");
    }
    if (previousGuesses.includes(guess)) {
      console.log("> " + parseInt(guess))
      console.log("Already guessed!")
      guess = prompt("Guess a number: ");
    }
    if (parseInt(guess) > randomNumber) {
      console.log("> " + parseInt(guess))
      console.log("Too high!")
      previousGuesses.push(guess);
      numOfGuesses++
      guess = prompt("Guess a number: ");
    }
    if (parseInt(guess) < randomNumber) {
      console.log("> " + parseInt(guess))
      console.log("Too low!")
      previousGuesses.push(guess);
      numOfGuesses++
      guess = prompt("Guess a number: ");
    }
    if (parseInt(guess) === randomNumber) {
      numOfGuesses++
      if (numOfGuesses > 1) {
        console.log(`You got it! You took ${numOfGuesses} attempts!`)
      }
      break;
    }
  }
}

checkGuess(answer);