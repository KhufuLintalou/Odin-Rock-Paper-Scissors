// Function to get the computer choice for the game.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) { 
        return "Paper";
    } else {
        return "Scissors";
    };
}
// Function to play a single round.
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === "rock") {   
        if (computer === "rock") {
            return "Tie!";
        } else if (computer === "paper") {
            return "Computer win!";
        } else {
            return "You win!";
        }
    }
    if (player === "paper") {   
        if (computer === "paper") {
            return "Tie!";
        } else if (computer === "rock") {
            return "You win!";
        } else {
            return "Computer win!";
        }
    }
    if (player === "scissors") {   
        if (computer === "scissors") {
            return "Tie!";
        } else if (computer === "paper") {
            return "You win!";
        } else {
            return "Computer win!";
        }
    }
}

