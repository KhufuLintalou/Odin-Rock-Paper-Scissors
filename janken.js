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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        switch ((playRound(prompt("What's your choice?"), getComputerChoice()))) {
        case "You win!":
            playerScore++;
            console.log(`You won this round! Your Score:${playerScore}`);
            break;
        case "Computer win!":
            computerScore++;
            console.log(`Computer won this round! Computer's Score:${computerScore}`);
            break;
        case "Tie!":
            console.log("This round is a tie!");
        }
    }  
    if (playerScore === computerScore) {
        console.log("Game end in a Tie!");
    } else if (playerScore < computerScore) {
        console.log("Computer is the Winner!") 
    } else {
        console.log("You are the Winner!")
    }
}
