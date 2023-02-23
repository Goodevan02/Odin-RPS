function getComputerChoice() {
    //Define array with each choice in rps
    const rps = ["rock", "paper", "scissors"];
    // choose a random play from rps array
    let randomChoice = rps[Math.floor(Math.random() * rps.length)]
    console.log (randomChoice)
}

getComputerChoice()