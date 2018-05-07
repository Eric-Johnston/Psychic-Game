
// Letters that computer can choose
var lettersAZ = ["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Initial variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// Stores user guesses
var guessesMade = [];
// Which letter the user selects
var userGuess = null;
// Makes computer choose a letter and stores it in computer Choice
var computerChoice = lettersAZ[Math.floor(Math.random() * lettersAZ.length)];
console.log("Guess what letter i'm thinking of!")

// Resets variables after win/loss
var reset = function(){
    guessesLeft = 9;
    guessesSoFar = [];
    computerChoice = [];
}



document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (guessesMade.indexOf(userGuess) < 0 && lettersAZ.indexOf(userGuess) >= 0){
        guessesMade[guessesMade.length]=userGuess;
        guessesLeft--;
        console.log("Guesses so far: " + guessesMade);
        console.log("Guesses left: " + guessesLeft);
        console.log("-----------------");
    }

    if (computerChoice == userGuess){
        wins++;
        console.log("You won!");
        guessesLeft = 9;
        guessesMade = [];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesMade + " Computer picked: " + computerChoice);
        console.log("-------------")
        reset();
    }

    if(guessesLeft == 0){
        losses++;
        console.log("You lost");
        guessesLeft = 9;
        guessesMade = [];
        computerChoice = lettersAZ[Math.floor(Math.random() * lettersAZ.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesMade + " Computer picked: " + computerChoice);
        console.log("-------------")
        reset();
    }
}