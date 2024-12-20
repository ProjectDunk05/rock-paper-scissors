//Declare variables
    let humanScore = 0
    let computerScore = 0
    let round = 0
    let roundResult 
    let resultComputer
    let roundCounter = document.querySelector("#roundCounter");
    let roundResultPara = document.querySelector("#roundResult");
    let playerScoreboard = document.querySelector("#playerScore");
    let computerScoreboard = document.querySelector("#computerScore");

//When a user inputs "Rock", "Paper" or "Scissors"

    let buttons = document.querySelector("#buttons");

    buttons.addEventListener("click", (event) => {
        let target = event.target;

        switch(target.id) {
            case "rock":
                playerSelection = "Rock";
                resultComputer = getComputerChoice();
                playRound(playerSelection, resultComputer);
                break;
            case "paper":
                playerSelection = "Paper";
                resultComputer = getComputerChoice();
                playRound(playerSelection, resultComputer);
                break;
            case "scissors":
                playerSelection = "Scissors";
                resultComputer = getComputerChoice();
                playRound(playerSelection, resultComputer);
                break;
        }
    });
    
//Generate a random computers selection of "Rock","Paper" or "Scissors"
 
   function getRandomInteger() {
        return Math.floor(Math.random() * 3);
    };
    

    function getComputerChoice() {
        if (getRandomInteger() == 0) {
            return "Rock";
        } else if (getRandomInteger() == 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    };

 //Create a function to play a single round 
    
    function playRound(playerSelection,resultComputer) {
        
        round = round + 1
       
// If the user's choice is "Rock" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Rock") {
        if (resultComputer == ("Scissors")) {
            roundResult = "You Win! Rock beats Scissors.";
            humanScore = humanScore + 1;
        } else if (resultComputer == "Rock") {
            roundResult = "You Draw! You both picked Rock.";
        } else {
            roundResult = "You Lose! Paper beats Rock.";
            computerScore = computerScore + 1;
        }
    };
    
// If the user's choice is "Paper" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Paper") {
        if (resultComputer == ("Rock")) {
            roundResult = "You Win! Paper beats Rock."
            humanScore = humanScore + 1;
        } else if (resultComputer == "Paper") {
            roundResult = "You Draw! You both picked Paper.";
        } else {
            roundResult = "You Lose! Scissors beats Paper.";
            computerScore = computerScore + 1;
        }
    };

// If the user's choice is "Scissors" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Scissors") {
        if (resultComputer == ("Paper")) {
            roundResult = "You Win! Scissors beats Paper."
            humanScore = humanScore + 1;
        } else if (resultComputer == "Scissors") {
            roundResult = "You Draw! You both picked Scissors.";
        } else {
            roundResult = "You Lose! Rock beats Scissors.";
            computerScore = computerScore + 1;
        }
    };

// update round counter and round result
    
    roundCounter.textContent = "Round: " + round;
    roundResultPara.textContent = roundResult;
    playerScoreboard.textContent = "Player: " + humanScore;
    computerScoreboard.textContent = "Computer: " + computerScore;
    };
