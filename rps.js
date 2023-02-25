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

// Helper Function for game() runs a round and returns the winner
function rpsWinner() {
    const cpuChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log(`Player choice: ${playerChoice}      CPU choice: ${cpuChoice}`)
    let winner = playRound(playerChoice, cpuChoice);
    return winner
}
//function to run a num of RPS rounds and tally the number of wins for each player
//the first to reach the best of x wins the game
function game(bestOfX) {
    let numPlayerWins = 0
    let numCpuWins = 0
    while(numPlayerWins < bestOfX && numCpuWins < bestOfX) {
        let winner = rpsWinner()
        if(winner === playerWins){
            ++numPlayerWins
            console.log(`the player has won ${numPlayerWins} out of ${bestOfX} games`)
        }else if(winner === cpuWins){
            ++numCpuWins
            console.log(`the CPU has won ${numCpuWins} out of ${bestOfX} games`)
        }
        
    }
    if(numCpuWins > numPlayerWins) {
        console.log(cpuWins)
    } else if(numPlayerWins > numCpuWins) {
        console.log(playerWins)
    }

}
