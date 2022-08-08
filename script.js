"use strict";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const initialScore = 20;
const secretNumber = getRandomArbitrary(1, 20);

let currentScore = initialScore;

const mainMessageElt = document.querySelector(".message");
const scoreElt = document.querySelector(".score");
const numberElt = document.querySelector(".number");
const inputElt = document.querySelector(".guess");
const btnElt = document.querySelector(".check");
const bodyElt = document.querySelector("body");

scoreElt.textContent = initialScore;

function decrementScore() {
  currentScore -= 1;
  scoreElt.textContent = currentScore;
  if (currentScore === 0) {
    mainMessageElt.textContent = "Perdu !";
  }
}

function isInputValueCorrect(value) {
  if (!inputElt.value) {
    alert("No number !");
    return false;
  }

  if (isNaN(value)) {
    console.log("This is not a number !");
    return false;
  }

  return true;
}

function onClick() {
  const guess = parseInt(inputElt.value);

  if (!isInputValueCorrect(guess)) return;

  if (guess < secretNumber) {
    mainMessageElt.textContent = "Plus grand !";
    decrementScore();
    return;
  } 
  
  if (guess > secretNumber) {
    mainMessageElt.textContent = "Plus petit !";
    decrementScore();
    return;
  }
  
  mainMessageElt.textContent = "Gagné !";
  bodyElt.style.backgroundColor = '#60b347';
  numberElt.textContent = guess;
  numberElt.style.width = '30rem';
}
