let correctNumber = 7;
let guess;

while (guess !== correctNumber) {
  guess = prompt("Guess a number between 1 and 10:");

  if (guess < correctNumber) {
    console.log("Too low!");
  } else if (guess > correctNumber) {
    console.log("Too high!");
  }
}

console.log("Correct!");