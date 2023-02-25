//RPS Value variables
const rock = "rock"
const paper = "paper"
const scissors = "scissors"

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
    if (playerChoice === cpuChoice) {
        console.log(`you both chose ${playerChoice} go again till someone wins the round`)
        
    } else if(playerChoice === rock){
        if (cpuChoice === )

    }
}

