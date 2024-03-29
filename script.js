// Function to generate a randomly returns Rock, paper or scissors.
function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * plays.length);
    return plays[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Capitalize the first letter of the player's selection
    const formattedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    // Check for results
    if (formattedPlayerSelection === computerSelection) {
        return "It's a draw!";
    } else if (
        (formattedPlayerSelection === "Rock" && computerSelection === "Scissors") ||
        (formattedPlayerSelection === "Paper" && computerSelection === "Rock") ||
        (formattedPlayerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "You won this round! " + formattedPlayerSelection + " beats " + computerSelection;
    } else {
        return "You lose this round! " + computerSelection + " beats " + formattedPlayerSelection;
    }
}

// Game loop functions

function game() {
    alert("WELCOME TO ROCK, PAPER, SCISSORS!\n\nThe best classic game!\n\nPlease first press F12 to open your console");
    alert("Here's how it works:\n\nRock beats Scissors\nScissors beats Paper\nPaper beats Rock");
    let playAgain = true;

    while (playAgain) {
        let playerScore = 0;
        let computerScore = 0;

        for (let round = 1; round <= 5; round++) {
            let validSelection = false;
            let playerSelection;

            while (!validSelection) {
                playerSelection = prompt('Round ' + round + ': Choose Rock, Paper, or Scissors');

                if (playerSelection === null) {
                    // Handle player canceling the game
                    playAgain = false;
                    break;  // Exit the round loop
                }

                if (["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
                    validSelection = true;
                } else {
                    console.log("Be careful with your fat fingers! Please choose Rock, Paper, or Scissors.");
                }
            }

            if (!playAgain) {
                break;  // Exit the round loop
            }

            const computerSelection = computerPlay();

            console.log('Computer plays: ' + computerSelection);
            const result = playRound(playerSelection, computerSelection);
            console.log(result);

            if (result.includes('won')) {
                playerScore++;
            } else if (result.includes('lose')) {
                computerScore++;
            }
        }

        // Report the final scores and determine the winner
        console.log('Final Scores:');
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);

        if (playerScore > computerScore) {
            console.log("You are unstoppable! You won this game!");
        } else if (playerScore < computerScore) {
            console.log("You are a loser! Try to play something else!");
        } else {
            console.log("It's a draw. Play it again to prove you're good!");
        }

        // Determine the winner and prompt message
        let promptMessage;
        if (playerScore > computerScore) {
            promptMessage = "Congrats! You are so good, but you think you can win again? (yes or no)";
        } else {
            promptMessage = "Do you have the courage to play again, chicken? (yes or no)";
        }

        // Ask the player if they want to play again
        let validResponse = false;
        while (!validResponse && playAgain) {
            const playAgainResponse = prompt(promptMessage);
            if (playAgainResponse === null) {
                playAgain = false;  // Handle player canceling the game
                break;  // Exit the playAgain loop
            } else if (playAgainResponse.toLowerCase() === "yes" || playAgainResponse.toLowerCase() === "no") {
                playAgain = playAgainResponse.toLowerCase() === "yes";
                validResponse = true;
            } else {
                console.log("Again fat fingers? Please answer with 'yes' or 'no'.");
            }
        }

        // Clear the console before starting a new game
        console.clear();

        if (!playAgain) {
            let validConfirmResponse = false;
            while (!validConfirmResponse) {
                const confirmResponse = prompt("So you are a chicken? (yes or no)");
                if (confirmResponse === null) {
                    // Handle player canceling the game
                    playAgain = false;
                    break;  // Exit the confirmResponse loop
                } else if (confirmResponse.toLowerCase() === "yes" || confirmResponse.toLowerCase() === "no") {
                    validConfirmResponse = true;
                    if (confirmResponse.toLowerCase() === "yes") {
                        console.log("Oh I see, so you are a real chicken then, give this game away to a real gamer!");
                    } else {
                        // If player is not sure, continue the game loop
                        playAgain = true;
                    }
                } else {
                    console.log("Again fat fingers? Please answer with 'yes' or 'no'.");
                }
            }
        }
    }
}

// Call the function to start the game loop
game();
