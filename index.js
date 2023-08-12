let randomNumber = parseInt(Math.random() * 101);
const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const resultDiv = document.getElementById("resultDiv");
const choices = document.getElementsByClassName("choices")

let count = 5;

let maxGuess = 0;

