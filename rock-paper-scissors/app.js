const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
const result = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
/* possible to also add a button ID and select however since there 
is only a few buttons, element selector will suffice */

let playerTarget;
let computerTarget;
let resultTarget;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    playerTarget = e.target.id;
    player.innerHTML = playerTarget;
    computerChoice();
    gameResult();
  })
);

function computerChoice() {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNum === 1) {
    computerTarget = "rock";
  }
  if (randomNum === 2) {
    computerTarget = "scissors";
  }
  if (randomNum === 3) {
    computerTarget = "paper";
  }
  computer.innerHTML = computerTarget;
}

function gameResult() {
  if (computerTarget === playerTarget) {
    resultTarget = "Draw Game!";
  }
  if (computerTarget === "rock" && playerTarget === "paper") {
    resultTarget = "You Win!!!";
  }
  if (computerTarget === "rock" && playerTarget === "scissors") {
    resultTarget = "Computer Wins!!!";
  }
  if (computerTarget === "paper" && playerTarget === "scissors") {
    resultTarget = "You Win!!!";
  }
  if (computerTarget === "scissors" && playerTarget === "rock") {
    resultTarget = "You Win!!!";
  }
  if (computerTarget === "scissors" && playerTarget === "paper") {
    resultTarget = "Computer Wins!!!";
  }
  if (computerTarget === "paper" && playerTarget === "rock") {
    resultTarget = "You Lose!!!";
  }
  result.innerHTML = resultTarget;
}
