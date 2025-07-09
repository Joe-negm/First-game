const user = document.getElementById('user');
const computer = document.getElementById('computer');
const resultDiv = document.getElementById('result');
let userChoice; 
let computerChoice;
let num1;
let num2;

function Question(num1, num2) {
  const userAnswer = prompt(`${num1} x ${num2}`);
  if (parseInt(userAnswer) === num1 * num2) {
    alert('Correct!');
    num1 = Math.round(Math.random() * Math.random()) + 1; // Regenerate num1
    num2 = Math.round(Math.random() + 5 - (num1 - 1)) + 1; // Regenerate num2 to ensure it's valid
  } else {
    alert(`Incorrect! The correct answer is ${num1 * num2}.`);
    // Reset num1 and num2 to ensure they are valid for the next question
    num1 = Math.round(Math.random() * Math.random() * 9) + 1; // Regenerate num1
    num2 = Math.round(Math.random() + 5 - (num1 - 1)) + 1; // Regenerate num2 to ensure it's valid
  }
}
function playGame(userChoice) {
  // Clear previous choices
  user.textContent = '';
  computer.textContent = '';
  computerChoice = function() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

    num1 = Math.round(Math.random() * Math.random() * 9) + 1; // Ensure num1 is at least 1
  num2 = Math.round(Math.random() + 5 - (num1 - 1)) + 1; // Ensure num2 is at least 1


  // Game logic goes here
  if (userChoice === 'rock') {
    userChoice = 'rock';
    user.textContent = `You chose: ${userChoice}`;
    Question(num1, num2);
    computerChoice = computerChoice();
    computer.textContent = `Computer chose: ${computerChoice}`;
    winner(userChoice, computerChoice);
    resultDiv.textContent = result;
  } else if (userChoice === 'paper') {
    userChoice = 'paper';
    user.textContent = `You chose: ${userChoice}`;
    Question(num1, num2);
    computerChoice = computerChoice();
    computer.textContent = `Computer chose: ${computerChoice}`;
    winner(userChoice, computerChoice);
    resultDiv.textContent = result;
  } else if (userChoice === 'scissors') {
    userChoice = 'scissors';
    user.textContent = `You chose: ${userChoice}`;
    Question(num1, num2);
    computerChoice = computerChoice();
    computer.textContent = `Computer chose: ${computerChoice}`;
    winner(userChoice, computerChoice);
    resultDiv.textContent = result;
  } else {
      console.log("Invalid choice, please choose rock, paper, or scissors.");
  }
}
  // Determine the winner
  let result;
  function winner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result = `It's a tie! You both chose ${userChoice}.`;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
    result = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}.`;
  }
  }