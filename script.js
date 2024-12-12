//Declare score variables
let humanScore = 0
let computerScore = 0
let round = 0
//When a user inputs "Rock", "Paper" or "Scissors"

    //function getPlayerSelection() {
        //let userInput = prompt("Please enter Rock, Paper or Scissors");
       // return capitalise(userInput);
    //};

    //function capitalise(str) {
        //return ((str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
    //};
    
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
    let resultComputer 
    let roundResult
    function playRound(playerSelection,resultComputer) {
        
        round = round + 1
       
// If the user's choice is "Rock" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Rock") {
        if (resultComputer == ("Scissors")) {
            roundResult = "Win"
            console.log("You win! Rock beats Scissors.");
            humanScore = humanScore + 1;
        } else if (resultComputer == "Rock") {
            roundResult = "Draw"
            console.log("You draw! You both picked Rock.");
        } else {
            roundResult = "Lose"
            console.log("You Lose! Paper beats Rock.");
            computerScore = computerScore + 1;
        }
    };
    
// If the user's choice is "Paper" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Paper") {
        if (resultComputer == ("Rock")) {
            console.log("You win! Paper beats Rock.");
            humanScore = humanScore + 1;
        } else if (resultComputer == "Rock") {
            console.log("You draw! You both picked Paper.");
        } else {
            console.log("You Lose! Scissors beats Paper.");
            computerScore = computerScore + 1;
        }
    };

// If the user's choice is "Scissors" output "win", "lose" or "draw" depending on computerChoice.

if (playerSelection == "Scissors") {
    if (resultComputer == ("Paper")) {
        console.log("You win! Scissors beats Paper.");
        humanScore = humanScore + 1;
    } else if (resultComputer == "Scissors") {
        console.log("You draw! You both picked Scissors.");
    } else {
        console.log("You Lose! Rock beats Scissors.");
        computerScore = computerScore + 1;
    }
};

console.log(`Round:${round} Player:${humanScore} Computer:${computerScore}`);
    };

// Add function to play a game that consists of 5 rounds

//function playGame(playerChoice, computerSelection) {
   // let resultComputer = getComputerChoice();
    //let playerSelection = getPlayerSelection();

    //const times = 5;
    //for(let i = 0; i < times; i++) {
//playRound(playerSelection, resultComputer);
   // };
//}

// Click event handlers for the three buttons

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