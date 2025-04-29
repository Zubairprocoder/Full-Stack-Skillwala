console.log("This is task 6");

// Task 6: Number guessing game
// Fixed number set karte hain
let secretNumber = 7;

// User se guess lete hain
let guess = Number(prompt("Guess the number: "));

// Condition check karte hain
if (guess === secretNumber) {
    console.log("Congratulations! You guessed it right!");
} else if (guess > secretNumber) {
    console.log("Too High! Try again.");
} else if (guess < secretNumber) {
    console.log("Too Low! Try again.");
} else {
    console.log("Please enter a valid number.");
}
