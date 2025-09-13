let game = {
    secretNumber: Math.floor(Math.random() * 10) + 1,
    maxGuesses: 3,
    currentGuesses: 0,
    method: function(){
        console.log(makeGuess("make your guess?"));
    }
}

function makeGuess(guess) {
    game.currentGuesses++;

    if (guess === game.secretNumber) {
        return "Congratulations! You guessed the secret number.";
    } else if (guess > game.secretNumber) {
        return "Too high! Try again.";
    } else {
        return "Too low! Try again.";
    }
}


while (game.currentGuesses < game.maxGuesses) {
    let userGuess = parseInt(prompt("Please enter a number between 1-10"));

    let result = makeGuess(userGuess);
    console.log(result);
}

if (game.currentGuesses >= game.maxGuesses) {
        alert("No more guesses left! Game over.");
    }