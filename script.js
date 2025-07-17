function getComputerChoice() {
    let random = Math.floor(Math.random()*100);

     if(random <= 33){
        return "Rock";
    }
    else if(random > 33 && random <= 66  ){
        return "Paper";
    }
    else{
        return "Scissors"
    }

}


function getHumanChoice() {
    let answer= prompt("Do you choose Rock, Paper or Scissors? (if you write an incorrect input Scissors will be chosen for you");
    
    answer.toLowerCase();

    if(answer === "rock") {
        return "Rock";
    }
    else if(answer === "paper") { 
        return "Paper";
    }
    else { 
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

 function playRound(humanChoice, computerChoice) {
    
    if((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        console.log("You have beaten the Computer Congratulation!");
        humanScore++;
    }
    else if((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Scissors" && computerChoice === "Rock") || (humanChoice === "Paper" && computerChoice === "Scissors")){
        console.log("You have been beaten by the Computer");
        computerScore++;
    }
    else{
        console.log("You have chosen the same item as the computer");
    }
    playGame();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}