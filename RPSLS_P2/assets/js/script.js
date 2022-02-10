//start of the code from Kubowania GitHub user
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 5) + 1

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  if (randomNumber === 4) {
    computerChoice = 'lizard'
  }
  if (randomNumber === 5) {
      computerChoice = 'Spock'
    }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'You win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'You lost!'
  }
  if (computerChoice === 'rock' && userChoice === "lizard") {
    result = 'You lose!'
  }
  if (computerChoice === 'rock' && userChoice === "Spock") {
    result = 'You win!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'You win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You lose!'
  }
  if (computerChoice === 'paper' && userChoice === "lizard") {
    result = 'You win!'
  }
  if (computerChoice === 'paper' && userChoice === "Spock") {
    result = 'You lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'You win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'You lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "lizard") {
    result = 'You lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "Spock") {
    result = 'You win!'
  }
  //end of code from Kubowania GitHub user
  if (computerChoice === 'lizard' && userChoice === "Spock") {
    result = 'You lose!'
  }
  if (computerChoice === 'lizard' && userChoice === "rock") {
    result = 'You win!'
  }
  if (computerChoice === 'lizard' && userChoice === "paper") {
    result = 'You lose!'
  }
  if (computerChoice === 'lizard' && userChoice === "scissors") {
    result = 'You win!'
  }
  if (computerChoice === 'Spock' && userChoice === "lizard") {
    result = 'You win!'
  }
  if (computerChoice === 'Spock' && userChoice === "rock") {
    result = 'You lose!'
  }
  if (computerChoice === 'Spock' && userChoice === "paper") {
    result = 'You win!'
  }
  if (computerChoice === 'Spock' && userChoice === "scissors") {
    result = 'You lose!'
  }
  resultDisplay.innerHTML = result
}
