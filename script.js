// INPUT: player clicks on a button for rock, button for scissors, button for
// paper, add click eventListener to each button that invokes playRound with the
// corresponding playerSelection

// GUI: display results in div. change all div.textContent = s to DOM methods
// display runningScore, winner

// LOGIC: var runningScore, winner; 
// identify winner after one combatant reaches 5 points

const container = document.querySelector('#container');
const div = document.createElement('div');
div.textContent = 'Hello';
container.appendChild(div);


function computerPlay () {
  let randomNumber = Math.random();
  if (randomNumber < 0.333) {
    return 'Rock';
  } else if (randomNumber < 0.667) {
    return 'Paper';
  } else {
    return 'Scissors'
  }
}

function playRound (playerSelection, computerSelection) {
  let roundWinner;
  switch (playerSelection.toUpperCase()) {
    case 'ROCK':
      switch (computerSelection) {
        case 'Rock':
          div.textContent = 'Draw.';
          break;
        case 'Paper':
          div.textContent = 'Paper beats Rock. Computer wins round.';
          roundWinner = 'Computer';
          break;
        case 'Scissors':
          div.textContent = 'Rock beats Scissors. Player wins round.';
          roundWinner = 'Player';
          break;
      }
      break;
    case 'PAPER':
      switch (computerSelection) {
        case 'Rock':
          div.textContent = 'Paper beats Rock. Player wins round.';
          roundWinner = 'Player';
          break;
        case 'Paper':
          div.textContent = 'Draw.';
          break;
        case 'Scissors':
          div.textContent = 'Scissors beats Paper. Computer wins round.';
          roundWinner = 'Computer';
          break;
      }
      break;
    case 'SCISSORS': {
      switch (computerSelection) {
        case 'Rock':
          div.textContent = 'Rock beats Scissors. Computer wins round.';
          roundWinner = 'Computer';
          break;
        case 'Paper':
          div.textContent = 'Scissors beats Paper. Player wins round.';
          roundWinner = 'Player';
          break;
        case 'Scissors':
          div.textContent = 'Draw.';
          break;
      }
    }
    break;
  }
  return roundWinner;
}

function game () {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    switch (playRound(prompt(), computerPlay())) {
      case 'Player':
        playerScore += 1;
        break;
      case 'Computer':
        computerScore += 1;
        break;
    }
  }

  div.textContent = ((playerScore === computerScore ? 'Game Over. Draw.' : 
  playerScore > computerScore ? `Player wins ${playerScore} to ${computerScore}.` :
  `Computer wins ${computerScore} to ${playerScore}.`));
}

game();
