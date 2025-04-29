console.log("This is task 7");
// Task 7: Simple Calculator using if-else

let num_1 = Number(prompt("Enter the first number: "));
let num_2 = Number(prompt("Enter the second number: "));
let operator = prompt("Enter the operator (+, -, *, /): ");
if (operator === "+") {
  console.log("The result is: " + (num_1 + num_2));
} else if (operator === "-") {
  console.log("The result is: " + (num_1 - num_2));
} else if (operator === "*") {
  console.log("The result is: " + num_1 * num_2);
} else if (operator === "/") {
  if (num_2 === 0) {
    console.log("Error: Division by zero is not allowed.");
  } else {
    console.log("The result is: " + num_1 / num_2);
  }
} else {
  console.log("Error: Invalid operator. Please use +, -, *, or /.");
}
