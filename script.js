//When a user inputs "Rock", "Paper" or "Scissors"
//Generate a random computers selection of "Rock","Paper" or "Scissors"

    function getRandomInteger() {
        let num = 3
        return Math.floor(Math.random() * num);
    };
//If the user input is "Rock" and the computers selection is "Scissors" show "You Win!"
//If the user input is "Rock" and the computers selection is "Paper" show "You Lose!"
//If the user input is "Rock" and the computers selection is "Rock" show "It's A Draw!"
// Repeat the above 3 steps for user input of "Scissors" and "Paper"
// When finished add button to play again