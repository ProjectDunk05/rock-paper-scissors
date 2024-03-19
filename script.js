//When a user inputs "Rock", "Paper" or "Scissors"

    let userInput = prompt("Please enter Rock, Paper or Scissors");
   
    function capitalise(str) {
        return ((str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
    };

    function playerSelection() {
        return "You selected" + " " + capitalise(userInput);
    };

//Generate a random computers selection of "Rock","Paper" or "Scissors"
 
   function getRandomInteger() {
        return Math.floor(Math.random() * 3);
    };
    function getComputerChoice() {
        if (getRandomInteger() == 0) {
            return "The computer selected" + " " + "Rock";
        } else if (getRandomInteger() == 1) {
            return "The computer selected" + " " + "Paper";
        } else {
            return "The computer selected" + " " + "Scissors"
        }
    };
   
   
//If the user input is "Rock" and the computers selection is "Scissors" show "You Win!"
//If the user input is "Rock" and the computers selection is "Paper" show "You Lose!"
//If the user input is "Rock" and the computers selection is "Rock" show "It's A Draw!"
// Repeat the above 3 steps for user input of "Scissors" and "Paper"
// When finished add button to play again