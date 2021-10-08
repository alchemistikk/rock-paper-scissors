let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const buttonDiv = document.createElement('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button')
const resultDisplay = document.createElement('div');
const runningScore = document.createElement('div');
;

rockButton.id = "rock";
paperButton.id = "paper";
scissorsButton.id = "scissors";

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

container.appendChild(buttonDiv);
container.appendChild(resultDisplay);
container.appendChild(runningScore);
buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
})

function computerPlay () {
  let randomNumber = Math.random();
  if (randomNumber < 0.333) {
    return 'Rock';
  } else if (randomNumber < 0.667) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound (playerSelection) {
  let roundWinner;
  switch (playerSelection.toUpperCase()) {
    case 'ROCK':
      switch (computerPlay()) {
        case 'Rock':
          resultDisplay.textContent = 'Draw.';
          break;
        case 'Paper':
          resultDisplay.textContent = 'Paper beats Rock. Computer wins round.';
          roundWinner = 'Computer';
          break;
        case 'Scissors':
          resultDisplay.textContent = 'Rock beats Scissors. Player wins round.';
          roundWinner = 'Player';
          break;
      }
      break;
    case 'PAPER':
      switch (computerPlay()) {
        case 'Rock':
          resultDisplay.textContent = 'Paper beats Rock. Player wins round.';
          roundWinner = 'Player';
          break;
        case 'Paper':
          resultDisplay.textContent = 'Draw.';
          break;
        case 'Scissors':
          resultDisplay.textContent = 'Scissors beats Paper. Computer wins round.';
          roundWinner = 'Computer';
          break;
      }
      break;
    case 'SCISSORS': {
      switch (computerPlay()) {
        case 'Rock':
          resultDisplay.textContent = 'Rock beats Scissors. Computer wins round.';
          roundWinner = 'Computer';
          break;
        case 'Paper':
          resultDisplay.textContent = 'Scissors beats Paper. Player wins round.';
          roundWinner = 'Player';
          break;
        case 'Scissors':
          resultDisplay.textContent = 'Draw.';
          break;
      }
    }
    break;
  }
  switch (roundWinner) {
    case 'Player':
      playerScore += 1;
      runningScore.textContent = playerScore + '-' + computerScore;
      break;
    case 'Computer':
      computerScore += 1;
      runningScore.textContent = playerScore + '-' + computerScore;
      break;
  }
  isGameOver();
}

function isGameOver () {
  if (playerScore >= 5 || computerScore >= 5) {
    runningScore.textContent = ((playerScore === computerScore ?
      'Game Over. Draw.' : playerScore > computerScore ? 
      `Player wins ${playerScore} to ${computerScore}.` :
    `Computer wins ${computerScore} to ${playerScore}.`));
    playerScore = 0;
    computerScore = 0;
  }
}



