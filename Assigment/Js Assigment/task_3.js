console.log("This is a task 3.");

// Task 3: Find the largest of two numbers

let num_1 = prompt("Enter the first number: ");
let num_2 = prompt("Enter the second number: ");
if (num_1 > num_2) {
  console.log("The largest number is: " + num_1);
} else if (num_1 < num_2) {
  console.log("The largest number is: " + num_2);
} else if (num_1 == num_2) {
  console.log("Both numbers are equal.");
} else {
  console.log("Please enter valid numbers.");
}
