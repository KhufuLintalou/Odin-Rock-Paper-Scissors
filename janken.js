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
            return "You Win! Computer chooses Paper.";
        } else {
            return "You Lose! Computer chooses Rock.";
        }
    }
}

let result = document.querySelector(".result");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer")
let finalResult = document.querySelector(".final-result");
let playerScore = 0;
let computerScore = 0;

let choiceRock = document.querySelector("#rock");
choiceRock.addEventListener("click", function() {
    result.textContent = (playRound("Rock", getComputerChoice()));
    switch (result.textContent) {
        case "You Win! Computer chooses Scissors.":
            playerScore++;
            player.textContent = `Your Score: ${playerScore}`;
            break;
        case "You Lose! Computer chooses Paper.":
            computerScore++
            computer.textContent = `Computer's Score: ${computerScore}`;
    }
    if (playerScore == 5) {
        finalResult.textContent = "YOU WON THE GAME!!!";
        choiceRock.remove();
        choicePaper.remove();
        choiceScissors.remove();
    } else if (computerScore == 5) {
        finalResult.textContent = "COMPUTER WON THE GAME!!!";
        choiceRock.remove();
        choicePaper.remove();
        choiceScissors.remove();
    }
});

let choicePaper = document.querySelector("#paper");
choicePaper.addEventListener("click", function() {
    result.textContent = (playRound("Paper", getComputerChoice()));
    switch (result.textContent) {
        case "You Win! Computer chooses Rock.":
            playerScore++;
            player.textContent = `Your Score: ${playerScore}`;
            break;
        case "You Lose! Computer chooses Scissors.":
            computerScore++;
            computer.textContent = `Computer's Score: ${computerScore}`;
    }
    if (playerScore == 5) {
        finalResult.textContent = "YOU WON THE GAME!!!";
        choiceRock.remove();
        choicePaper.remove();
        choiceScissors.remove();
    } else if (computerScore == 5) {
        finalResult.textContent = "COMPUTER WON THE GAME!!!";
        choiceRock.remove();
        choicePaper.remove();
        choiceScissors.remove();
    }
})

let choiceScissors = document.querySelector("#scissors");
choiceScissors.addEventListener("click", function() {
    result.textContent = (playRound("Scissors", getComputerChoice()));
    switch (result.textContent) {
        case "You Win! Computer chooses Paper.":
            playerScore++
            player.textContent = `Your Score: ${playerScore}`;
            break;
        case "You Lose! Computer chooses Rock.":
            computerScore++
            computer.textContent = `Computer's Score: ${computerScore}`;
    }
    if (playerScore == 5) {
        finalResult.textContent = "YOU WON THE GAME!!!";
        choiceRock.remove();
        choicePaper.remove();
        choiceScissors.remove();
    } else if (computerScore == 5) {
        finalResult.textContent = "COMPUTER WON THE GAME!!!";
        choiceRock.remove();
        choicePaper.remove();
        choiceScissors.remove();
    }
})
