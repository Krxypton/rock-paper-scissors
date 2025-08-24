    let humanScore = 0;
    let computerScore = 0;

    const Buttons = document.querySelector(".Buttons");
    Buttons.addEventListener("click", function(e){
        let target = e.target;

        switch(target.id) {
            case "Rock":
                console.log("You have chosen Rock");
                playRound("Rock");
                break;
            case "Paper":
                console.log("You have chosen Paper");
                playRound("Paper");
                break;
            case "Scissors":
                console.log("You have chosen Scissors");
                playRound("Scissors");
                break;
        }
    });
    
    

function getComputerChoice() {
    

    let random = Math.floor(Math.random()*100);

     if(random < 33){
        return "Rock";
    }
    else if(random >= 33 && random <= 66  ){
        return "Paper";
    }
    else{
        return "Scissors"
    }

}

// function getHumanChoice() {
 
//     let answer= ("Do you choose Rock, Paper or Scissors? (if you write an incorrect input Scissors will be chosen for you");
    
//     answer = answer.toLowerCase();

//     if(answer === "rock") {
//         return "Rock";
//     }
//     else if(answer === "paper") { 
//         return "Paper";
//     }
//     else { 
//         return "Scissors";
//     }
//   }



    
   
    function playRound(humanChoice) {

    // let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log("The computer has chosen " + computerChoice);
    
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
    





