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
            return "You Lose! Computer chooses Paper."
        } else {
            return "You Win! Computer chooses Scissors.";
        }
    }
    if (player === "paper") {   
        if (computer === "paper") {
            return "Tie!";
        } else if (computer === "rock") {
            return "You Win! Computer chooses Rock.";
        } else {
            return "You Lose! Computer chooses Scissors.";
        }
    }
    if (player === "scissors") {   
        if (computer === "scissors") {
            return "Tie!";
        } else if (computer === "paper") {
            return "You win! Computer chooses Paper.";
        } else {
            return "You lose! Computer chooses Rock.";
        }
    }
}

let result = document.querySelector(".result");

let choiceRock = document.querySelector("#rock");
choiceRock.addEventListener("click", function() {
    result.textContent = (playRound("Rock", getComputerChoice()));
});

let choicePaper = document.querySelector("#paper");
choicePaper.addEventListener("click", function() {
    result.textContent = (playRound("Paper", getComputerChoice()));
})

let choiceScissors = document.querySelector("#scissors");
choiceScissors.addEventListener("click", function() {
    result.textContent = (playRound("Scissors", getComputerChoice()));
})

