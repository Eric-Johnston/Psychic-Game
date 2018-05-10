
// Letters that computer can choose
var lettersAZ = ["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Initial variables
var userGuess = null;
var guessesMade = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;
// Makes computer choose a random letter
var computerChoice = lettersAZ[Math.floor(Math.random() * lettersAZ.length)];
console.log("Guess what letter i'm thinking of!");
console.log("Computer picked: " + computerChoice)
console.log("----------------------------------");
//Keypress function
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (guessesMade.indexOf(userGuess) < 0 && lettersAZ.indexOf(userGuess) >= 0){
        guessesMade[guessesMade.length]=userGuess;
        guessesLeft--;
        console.log("Guesses so far: " + guessesMade);
        console.log("Guesses left: " + guessesLeft);
        console.log("----------------------------------");
    };

    if (computerChoice == userGuess){
        wins++;
        guessesLeft = 9;
        guessesMade = [];
        computerChoice = lettersAZ[Math.floor(Math.random() * lettersAZ.length)];
        console.log("You won!");
        console.log("Wins: " + wins + " Losses: " + losses);
        console.log("----------------------------------")
        console.log("Guess what letter i'm thinking of!");
        console.log("Computer picked: " + computerChoice);
        console.log("----------------------------------");
    };

    if(guessesLeft == 0){
        losses++;
        guessesLeft = 9;
        guessesMade = [];
        computerChoice = lettersAZ[Math.floor(Math.random() * lettersAZ.length)];
        console.log("You lost");
        console.log("Wins: " + wins + " Losses: " + losses);
        console.log("----------------------------------");
        console.log("Guess what letter i'm thinking of!");
        console.log("Computer picked: " + computerChoice);
        console.log("----------------------------------");
    };
    // Shows the updated variables in html
    var html = "<p>Wins: " + wins + "<p>Losses: " + losses + "<p>Your guesses so far: " + guessesMade + "<p>Guesses left: " + guessesLeft;
    document.querySelector("#game").innerHTML = html;
}