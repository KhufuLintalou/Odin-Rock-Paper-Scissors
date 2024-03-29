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

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === "rock") {
        if (computer === "rock") {
            return "Tie!";
        } else if (computer === "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissor";
        }
    }
    if (player === "paper") {
        if (computer === "paper") {
            return "Tie!";
        } else if (computer === "rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }
    }
    if (player === "scissors") {
        if (computer === "scissors") {
            return "Tie!";
        } else if (computer === "paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "You lose! Rock beats Scissors";
        }
    }
}
const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
