// Return a random choice for the computer
function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

// Compare the user option and the computer option
function playerRound(playerSelection, computerSelection){
    // Make the options case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "Tie!";
    }

    // Player chose rock
    if(playerSelection === "rock") {
        if(computerSelection === "paper"){
            return "You Lose! Paper beats Rock!"
        } 
        return "You Win! Rock beats Scissors!"
    }

    // Player chose paper
    if(playerSelection === "paper") {
        if(computerSelection === "scissors"){
            return "You Lose! Scissors beats Paper!"
        }
        return "You Win! Paper beats Rock!"
    }

    // Player chose scissors
    if(playerSelection === "scissors") {
        if(computerSelection === "rock"){
            return "You Lose! Rock beats Scissors!"
        }
        return "You Win! Rock beats Paper!"
    }

    return "Invalid Choice"
}