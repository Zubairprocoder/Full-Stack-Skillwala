const prompt = require("prompt-sync")();
let age = prompt("Enter your age : ");
age >= 18
  ? console.log("you are eligible for vote")
  : age < 18
  ? console.log("your are not eligible for vote")
  : console.log("Invaild input");
