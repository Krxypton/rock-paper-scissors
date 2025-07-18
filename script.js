   let humanScore = 0;
   let computerScore = 0;

   
   for(let i = 0; i < 5; i++){
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    playGame();
    
    }



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
    for(let i = 0; i < 5; i++){
    let answer= prompt("Do you choose Rock, Paper or Scissors? (if you write an incorrect input Scissors will be chosen for you");
    
    answer = answer.toLowerCase();

    if(answer === "rock") {
        return "Rock";
    }
    else if(answer === "paper") { 
        return "Paper";
    }
    else { 
        return "Scissors";
    }
  }
}

function playGame() {
    
   

    playRound(humanSelection, computerSelection);
    function playRound(humanChoice, computerChoice) {
    
    if((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        console.log("You have beaten the Computer Congratulations!");
        humanScore++;
        console.log("The current score is YOU: " + humanScore + " Computer: " + computerScore);
    }
    else if((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Scissors" && computerChoice === "Rock") || (humanChoice === "Paper" && computerChoice === "Scissors")){
        console.log("You have been beaten by the Computer");
        computerScore++;
        console.log("The current score is YOU: " + humanScore + " Computer: " + computerScore);
    }
    else{
        console.log("You have chosen the same item as the computer");
        console.log("The current score is YOU: " + humanScore + " Computer: " + computerScore);
    }
        
    }

   

    
}

