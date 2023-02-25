//RPS Value variables
const rock = "rock"
const paper = "paper"
const scissors = "scissors"
const playerWins = "The Player Wins"
const cpuWins = "The CPU Wins"
con
//generate and return a random RPS choice
function getComputerChoice() {
    //Define array with each choice in rps
    const rps = [rock, paper, scissors];
    // choose a random play from rps array
    let randomChoice = rps[Math.floor(Math.random() * rps.length)]
    console.log (randomChoice)
    return randomChoice
}
// Throw and return the players choice
function getPlayerChoice(){
    let playerChoice = window.prompt("rps").toLowerCase
    return playerChoice
}
//logic to decide who won the round based off the player and cpu RPS choices
function playRound(playerChoice, cpuChoice) {
    let winner
    //if values match get new values and restart round
    if (playerChoice === cpuChoice) {
        console.log(`you both chose ${playerChoice} go again till someone wins the round`)
       
    // decide winner of rps if player chooses rock
    } else if(playerChoice === rock){
        if (cpuChoice === scissors){
            console.log(playerWins)
            return playerWins
        } if (cpuChoice === paper){
            console.log(cpuWins)
            return cpuWins
        }
    }  
    else if(playerChoice === paper){
        if (cpuChoice === rock){
            console.log(playerWins)
            return playerWins
        } if (cpuChoice === scissors){
            console.log(cpuWins)
            return cpuWins
        }
    } 
    else if(playerChoice === scissors){
        if (cpuChoice === paper){
            console.log(playerWins)
            return playerWins
        } if (cpuChoice === rock){
            console.log(cpuWins)
            return cpuWins
        }
    } 
}

