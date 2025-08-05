function playSingleRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return {
      result: "tie",
      message: ` It's a tie! You both chose ${capitalize(player)}.`
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


function game() {
  alert(" Welcome, human. You are Earth’s last hope against the Evil AI.\n\nDefeat it in a 5-round Rock, Paper, Scissors battle!\n\nInstructions:\n✔️ Type 'Rock', 'Paper', or 'Scissors'\n✔️ Invalid inputs don’t count\n✔️ First to win the most rounds saves the world!");

  let playerScore = 0;
  let computerScore = 0;
  let validRounds = 0;

  while (validRounds < 5) {
    const roundNumber = validRounds + 1;
    let input = prompt(` Round ${roundNumber} - Choose Rock, Paper, or Scissors:`);

    if (input === null) {
  alert("👋 Game canceled. Thanks for playing!");
  console.log("❌ Game was canceled by the user.");
  return; // exit the game early
}

if (input.trim() === "") {
  alert("⚠️ You must enter something. Try again.");
  continue;
}


    const playerSelection = input.trim().toLowerCase();

    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
      alert(" Invalid input! Only 'Rock', 'Paper', or 'Scissors' are allowed.");
      continue; 
    }

    const computerSelection = getComputerChoice();
    const { result, message } = playSingleRound(playerSelection, computerSelection);

    console.log(` You chose: ${capitalize(playerSelection)}`);
    console.log(` AI chose: ${capitalize(computerSelection)}`);
    console.log(message);
    console.log("--------------------------------------------------");

    if (result === "win") playerScore++;
    else if (result === "lose") computerScore++;

    validRounds++;
  }

 
  console.log(" Game finished");
  console.log(` Final Score → You: ${playerScore} | AI: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log(" Victory! You saved the world from the evil AI! 🎉");
  } else if (playerScore < computerScore) {
    console.log(" The evil AI has won. Earth falls under robotic rule… 🤖");
  } else {
    console.log(" It's a draw! The battle continues another day...");
  }

  alert(" Game Over!\nCheck the console (press F12) to see the full results.\nThanks for playing!");
}

game();
