//Computer Psychic Guesses
var psychicGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Arrays
var matches = 0;
var losses = 0;
var guessesLeft = 10;

//User presses a key
document.onkeyup = function(event) {

    //determines what key is pressed
    var userGuess = event.key;

    //How pyschic chooses a letter
    var psychicChoice = psychicGuesses[Math.floor(Math.random() * psychicGuesses.length)];

        // need a loop
       // for (var i=0; i<guessesLeft; i++) {
            //if statements
            if (userGuess === psychicChoice) {
                matches++;
            } else {
                losses++;
                guessesLeft--;
            }
        for (var j=0; j<psychicChoice.length; j++){

            if (userGuess !== psychicChoice) {
                guessesLeft--;
                var wrongGuess = [""];
                wrongGuess.unshift(userGuess);
            }
        }
            

            //HTML input
            var html = 
            "<p>You chose: " + userGuess + "</p>" +
            "<p>The psychic chose: " + psychicChoice + "</p>" +
            "<p>Matches: " + matches + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses: " + wrongGuess + "</p>";

            document.querySelector("#game").innerHTML = html;
    };
