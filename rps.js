//RPS Value variables
const rock = "rock" ;
const paper = "paper";
const scissors = "scissors";
const playerWins = "The Player Wins";
const cpuWins = "The CPU Wins";
//generate and return a random RPS choice
function getComputerChoice() {
    //Define array with each choice in rps
    const rps = [rock, paper, scissors];
    // choose a random play from rps array
    let randomChoice = rps[Math.floor(Math.random() * rps.length)];
    return randomChoice;
}
// Throw and return the players choice
function getPlayerChoice(){
    let playerChoice = window.prompt("rps", "").toLowerCase();
    return playerChoice;
}
//logic to decide who won the round based off the player and cpu RPS choices
function playRound(playerChoice, cpuChoice) {
    //if values match get new values and restart round
    if (playerChoice === cpuChoice) {
        console.log(`you both chose ${playerChoice} go again till someone wins the round`);
        return "tie"
    // decide winner of rps if player chooses rock
    } else if(playerChoice === rock){
        if (cpuChoice === scissors){
            return playerWins;
        } if (cpuChoice === paper){
            return cpuWins;
        }
    }  
    //decide winner if player chooses paper
    else if(playerChoice === paper){
        if (cpuChoice === rock){
            return playerWins;
        } if (cpuChoice === scissors){
            return cpuWins;
        }
    } 
    //decide winner if player chooses scissors
    else if(playerChoice === scissors){
        if (cpuChoice === paper){
            return playerWins
        } if (cpuChoice === rock){
            return cpuWins
        }
    } 
}

// Test function to test the rps logic
function TEST() {
    const cpuChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log(`player choice: ${playerChoice} cpu choice ${cpuChoice}`)
    playRound(playerChoice, cpuChoice);
}
