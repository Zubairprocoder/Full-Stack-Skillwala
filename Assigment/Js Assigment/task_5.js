
// User se percentage input lete hain
let percentage = Number(prompt("Enter your percentage:"));

// Condition based grade calculation
if (percentage >= 90 && percentage <= 100) {
    console.log("Grade: A+");
} else if (percentage >= 80 && percentage < 90) {
    console.log("Grade: A");
} else if (percentage >= 70 && percentage < 80) {
    console.log("Grade: B");
} else if (percentage >= 60 && percentage < 70) {
    console.log("Grade: C");
} else if (percentage >= 50 && percentage < 60) {
    console.log("Grade: D");
} else if (percentage >= 40 && percentage < 50) {
    console.log("Grade: E");
} else if (percentage >= 0 && percentage < 40) {
    console.log("Grade: F (Fail)");
} else {
    console.log("Invalid percentage! Please enter a value between 0 and 100.");
}
