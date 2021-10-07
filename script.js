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
          console.log('Draw.');
          break;
        case 'Paper':
          console.log('Paper beats Rock. Computer wins round.');
          roundWinner = 'Computer';
          break;
        case 'Scissors':
          console.log('Rock beats Scissors. Player wins round.');
          roundWinner = 'Player';
          break;
      }
      break;
    case 'PAPER':
      switch (computerSelection) {
        case 'Rock':
          console.log('Paper beats Rock. Player wins round.');
          roundWinner = 'Player';
          break;
        case 'Paper':
          console.log('Draw.');
          break;
        case 'Scissors':
          console.log('Scissors beats Paper. Computer wins round.');
          roundWinner = 'Computer';
          break;
      }
      break;
    case 'SCISSORS': {
      switch (computerSelection) {
        case 'Rock':
          console.log('Rock beats Scissors. Computer wins round.');
          roundWinner = 'Computer';
          break;
        case 'Paper':
          console.log('Scissors beats Paper. Player wins round.');
          roundWinner = 'Player';
          break;
        case 'Scissors':
          console.log('Draw.');
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

  console.log((playerScore === computerScore ? 'Game Over. Draw.' : 
  playerScore > computerScore ? `Player wins ${playerScore} to ${computerScore}.` :
  `Computer wins ${computerScore} to ${playerScore}.`));
}

console.log(game());
