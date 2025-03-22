
// Set the correct number.
let correctNumber = 7;

// Get guesses until correct.
let guess;
while (guess !== correctNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10:")); //Added parseInt to handle numerical input correctly.
  if (guess < correctNumber) { console.log("Too low!"); }
  else if (guess > correctNumber) { console.log("Too high!"); }
}

// Success message.
console.log("Correct!");