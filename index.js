function playSingleRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return {
      result: "tie",
      message: `🤝 It's a tie! You both chose ${capitalize(player)}.`
    };
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winConditions[player] === computer) {
    return {
      result: "win",
      message: `✅ You Win! ${capitalize(player)} beats ${capitalize(computer)}.`
    };
  } else {
    return {
      result: "lose",
      message: `❌ You Lose! ${capitalize(computer)} beats ${capitalize(player)}.`
    };
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const finalDiv = document.getElementById('final');

document.getElementById('rock').addEventListener('click', () => playUIRound('rock'));
document.getElementById('paper').addEventListener('click', () => playUIRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playUIRound('scissors'));
document.getElementById('exit').addEventListener('click', exitGame); 

function playUIRound(playerSelection) {
  if (gameOver) return;

  const computerSelection = getComputerChoice();
  const { result, message } = playSingleRound(playerSelection, computerSelection);

  resultDiv.textContent = message;

  if (result === "win") playerScore++;
  else if (result === "lose") computerScore++;

  scoreDiv.textContent = `Score → You: ${playerScore} | AI: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    gameOver = true;
    finalDiv.textContent = playerScore > computerScore
      ? "🎉 You saved the world from the Evil AI"
      : "🤖 The Evil AI has won. Earth falls to robots";
  }
}

function exitGame() {
  gameOver = true;
  finalDiv.textContent = "👋 You exited the game. Thanks for playing!";
}
