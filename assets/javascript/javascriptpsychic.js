//Computer Psychic Guesses
var psychicGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Global Arrays
var matches = 0;
var losses = 0;
var wrongGuess = [""];
var guessesLeft=10;

//Reset Function
function reset() {
    guessesLeft=10;
    wrongGuess = [""];
    matches=0;
    losses=0;
}

//User presses a key
document.onkeyup = function(event) {

    //determines what key is pressed
    var userGuess = event.key;

    //How pyschic chooses a random letter
    var psychicChoice = psychicGuesses[Math.floor(Math.random() * psychicGuesses.length)];
 //create something that rejects wrong type guesses
        //loop
       for (var i=0; i < 10; i++); {
            //if statements that run game
            if (userGuess === psychicChoice) {
                matches++;
            } else {
                losses++;
                guessesLeft--;
            }

            if (userGuess !== psychicChoice) {             
                wrongGuess.unshift(" " + userGuess);
            }
        }
        //Stops or resets game when you win or lose
        if ((guessesLeft == 0) || (losses == 20)) {
            alert("You lost");
            reset();
        } else if (matches == 1) {
            alert("You won!");
            reset();
        }

            //HTML input
            var html = 
            "<p>You chose: " + userGuess + "</p>" +
            "<p>The psychic chose: " + psychicChoice + "</p>" +
            "<p>Your guesses: " + wrongGuess + "</p>"+
            "<p>Guesses left: " + guessesLeft + "</p>";


            document.querySelector("#game").innerHTML = html;
    };
