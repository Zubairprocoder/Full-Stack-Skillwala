const prompt = require("prompt-sync")();
/*
if(condition - true){
statement:
}
else if(condition - true){
statement:
}
else{
statement:}

*/

// calculator
let num1 = parseInt(prompt("your first number : "));
// console.log(num1 + typeof num1);
let num2 = parseInt(prompt("your second number : "));
let operators = prompt("your operators (+,-,/,*) : ");
let result = "";
if (operators == "+") {
  result = num1 + num2;
} else if (operators == "*") {
  result = num1 * num2;
} else if (operators == "-") {
  result = num1 - num2;
} else if (operators == "/") {
  result = num1 / num2;
} else {
  console.log("Invaild input");
}
console.log(num1 + operators + num2 + " = " + result);
