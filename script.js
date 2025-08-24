    let humanScore = 0;
    let computerScore = 0;

    const container = document.querySelector(".Container");

    const Buttons = document.querySelector(".Buttons");
    Buttons.addEventListener("click", function(e){
        let target = e.target;

        const choice = document.createElement("div");
        choice.classList.add("human");


        switch(target.id) {
            case "Rock":
                choice.textContent = ("You have chosen Rock");
                container.appendChild(choice);
                playRound("Rock");
                break;
            case "Paper":
                choice.textContent = ("You have chosen Paper");
                container.appendChild(choice);
                playRound("Paper");
                break;
            case "Scissors":
                choice.textContent = ("You have chosen Scissors");
                container.appendChild(choice);
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
    
    
    const Results = document.createElement("div");
    Results.classList.add("Result");
    

    Results.textContent = ("The computer has chosen " + computerChoice);
    

    if((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        Results.textContent += ("You have beaten the Computer Congratulations!");
        humanScore++;
        Results.textContent += ("The current score is YOU: " + humanScore + " Computer: " + computerScore);
    }
    else if((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Scissors" && computerChoice === "Rock") || (humanChoice === "Paper" && computerChoice === "Scissors")){
        Results.textContent += ("You have been beaten by the Computer");
        computerScore++;
        Results.textContent += ("The current score is YOU: " + humanScore + " Computer: " + computerScore);
    }
    else{
        Results.textContent += ("You have chosen the same item as the computer");
        Results.textContent += ("The current score is YOU: " + humanScore + " Computer: " + computerScore);
    }
      
   container.appendChild(Results);
        
}
    





