//Declare score variables
let humanScore = 0
let computerScore = 0


//When a user inputs "Rock", "Paper" or "Scissors"

    function getPlayerSelection() {
        let userInput = prompt("Please enter Rock, Paper or Scissors");
        return capitalise(userInput);
    };

    function capitalise(str) {
        return ((str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
    };
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
 
    function playRound(playerChoice, computerSelection) {
        let playerSelection = getPlayerSelection();
        let resultComputer = getComputerChoice();
    
// If the user's choice is "Rock" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Rock") {
        if (resultComputer == ("Scissors")) {
            console.log("You win! Rock beats Scissors.");
            humanScore = humanScore + 1;
        } else if (resultComputer == "Rock") {
            console.log("You draw! You both picked Rock.");
        } else {
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

console.log(`Player:${humanScore} Computer:${computerScore}`);
    };

let playerSelection = getPlayerSelection();
let resultComputer = getComputerChoice();

playRound(playerSelection, resultComputer)

// When finished add button to play again