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
        return ["Tie!", 0];
    }

    // Player chose rock
    if(playerSelection === "rock") {
        if(computerSelection === "paper"){
            return ["You Lose! Paper beats Rock!", 0]
        } 
        return ["You Win! Rock beats Scissors!", 1]
    }

    // Player chose paper
    if(playerSelection === "paper") {
        if(computerSelection === "scissors"){
            return ["You Lose! Scissors beats Paper!", 0]
        }
        return ["You Win! Paper beats Rock!", 1]
    }

    // Player chose scissors
    if(playerSelection === "scissors") {
        if(computerSelection === "rock"){
            return ["You Lose! Rock beats Scissors!", 0]
        }
        return ["You Win! Rock beats Paper!", 1]
    }

    return ["Invalid Choice", 0]
}

function game() {
    // Keep track of user's score
    let score = 0
    for(let i = 0; i < 5; i++){
        // Get the user and computer selections
        let userSelection = prompt("Pick (Rock, Paper or Scissors):")
        let computerSelection = getComputerChoice()
        
        // Run the round
        let [result, scoreAdder] = playerRound(userSelection, computerSelection)
        score += scoreAdder

        // Show result
        alert(result)
        alert(score)
    }
}

game()