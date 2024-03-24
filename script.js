//When a user inputs "Rock", "Paper" or "Scissors"

    let userInput = prompt("Please enter Rock, Paper or Scissors");

    function capitalise(str) {
        return ((str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
    };

    function getPlayerSelection() {
        return capitalise(userInput);
    };

    let playerSelection = getPlayerSelection();
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

    let resultComputer = getComputerChoice();
   
// If the user's choice is "Rock" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Rock") {
        if (resultComputer == ("scissors")) {
            console.log("You win! Rock beats Scissors.");
        } else if (resultComputer == "Rock") {
            console.log("You draw! You both picked Rock.");
        } else {
            console.log("You Lose! Paper beats Rock.");
        }
    };
    

// If the user's choice is "Paper" output "win", "lose" or "draw" depending on computerChoice.
// If the user's choice is "Scissors" output "win", "lose" or "draw" depending on computerChoice.
// When finished add button to play again