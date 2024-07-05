//When a user inputs "Rock", "Paper" or "Scissors"

    function getPlayerSelection() {
        let userInput = prompt("Please enter Rock, Paper or Scissors");
        return capitalise(userInput);
    };

    let playerSelection = getPlayerSelection();

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

    let resultComputer = getComputerChoice();
   
// If the user's choice is "Rock" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Rock") {
        if (resultComputer == ("Scissors")) {
            console.log("You win! Rock beats Scissors.");
        } else if (resultComputer == "Rock") {
            console.log("You draw! You both picked Rock.");
        } else {
            console.log("You Lose! Paper beats Rock.");
        }
    };
    
// If the user's choice is "Paper" output "win", "lose" or "draw" depending on computerChoice.

    if (playerSelection == "Paper") {
        if (resultComputer == ("Rock")) {
            console.log("You win! Paper beats Rock.");
        } else if (resultComputer == "Rock") {
            console.log("You draw! You both picked Paper.");
        } else {
            console.log("You Lose! Scissors beats Paper.");
        }
    };

// If the user's choice is "Scissors" output "win", "lose" or "draw" depending on computerChoice.

if (playerSelection == "Scissors") {
    if (resultComputer == ("Paper")) {
        console.log("You win! Scissors beats Paper.");
    } else if (resultComputer == "Scissors") {
        console.log("You draw! You both picked Scissors.");
    } else {
        console.log("You Lose! Rock beats Scissors.");
    }
};

// When finished add button to play again