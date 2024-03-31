// Function to get the computer choice for the game.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);   // This gives a random number.
    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) {   // Assigned the random numbers to an appropriate string.
        return "Paper";
    } else {
        return "Scissors";
    };
}
// Function to play a single round.
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === "rock") {   // If player choice was rock.
        if (computer === "rock") {
            return "Tie!";
        } else if (computer === "paper") {
            return "Computer win!";
        } else {
            return "You win!";
        }
    }
    if (player === "paper") {   // If player choice was paper.
        if (computer === "paper") {
            return "Tie!";
        } else if (computer === "rock") {
            return "You win!";
        } else {
            return "Computer win!";
        }
    }
    if (player === "scissors") {   // If player choice was scissors.
        if (computer === "scissors") {
            return "Tie!";
        } else if (computer === "paper") {
            return "You win!";
        } else {
            return "Computer win!";
        }
    }
}
// Function that play the game for five rounds, keep the scores and report the winner.
function playGame() {
    let playerScore = 0;   // Created the variable for scoring.
    let computerScore = 0;
    for (i = 0; i < 5; i++) {   // This is to loop the function for 5 times.
        switch ((playRound(prompt("What's your choice?"), getComputerChoice()))) {   // playRound function with prompt for player input and getComputerChoice for computer input.
        case "You win!":   // In case the player won, add a score to it and report the results of the round.
            playerScore++;
            console.log(`You won this round! Your Score:${playerScore}`);
            break;
        case "Computer win!":   // In case the computer won, add a score to it and report the results.
            computerScore++;
            console.log(`Computer won this round! Computer's Score:${computerScore}`);
            break;
        case "Tie!":   // This is when they are tied.
            console.log("This round is a tie!");
        }
    }  
    if (playerScore === computerScore) {   // This is for comparing the scores and announce the final result of all five rounds.
        console.log("Game end in a Tie!");
    } else if (playerScore < computerScore) {
        console.log("Computer is the Winner!") 
    } else {
        console.log("You are the Winner!")
    }
}
