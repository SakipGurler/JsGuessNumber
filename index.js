let randomNumber = parseInt(Math.random() * 101);
const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const resultDiv = document.getElementById("resultDiv");
const choices = document.querySelector(".choices")

let count = 5;

let maxGuess = 0;

choices.textContent = count

guessButton.addEventListener("click", function () {
    console.log(randomNumber);
  if (count <= maxGuess) {
    resultDiv.textContent = `You Lose ! The correct number was ${randomNumber} :(`;
    guessButton.disabled = true;
    setTimeout(function() {
        location.reload();
    }, 5000);
    return;
  }

  const guess = Number(guessInput.value);

  if (guess > 100 || guess < 0) {
    resultDiv.textContent = `Please Enter Valid Number Between 1-100`;
  } else {
    count--;
    choices.textContent = count
    

    if (guess === randomNumber) {
      resultDiv.textContent = `Congratulations! You Win ♥`;
      guessButton.disabled = true;
      setTimeout(function() {
        location.reload();
    }, 5000);
      
    } else if (guess < randomNumber) {
      resultDiv.textContent = `Too Low! Try Again`;
    } else {
      resultDiv.textContent = `Too High! Try Again`;
    }
  }

  guessInput.value = "";
  guessInput.focus()

  
});

guessInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        guessButton.click();
    }
});


window.addEventListener('load', () => {
    guessInput.focus();
});