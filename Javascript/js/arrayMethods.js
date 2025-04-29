// Array in Js
// const arr = ["zubair", "freelancer", true];
// console.log(arr);
// moving variable and function to the top

// map ForEach
// map   return value and  new arr create
// const returnvalue = arr.map((value, index) => {
//   console.log(value, index);
//   return value;
// });
// console.log(returnvalue);

// ForEach  no return value and not new arr create
// const returnvalue = arr.forEach((value, index) => {
//   console.log(value, index);
//   return value;
// });
// console.log(returnvalue);
// filter
// const arr = [1, 34, 23, 12, 45, 56, 76, 445, 75];
// let newarr = arr.filter((value, index) => {
//   // return value > 50;
//   return value < 30;
// });
// console.log(newarr);

// Reduce

const arr = [1, 34, 23, 12, 45, 56, 76, 445, 75];
// let newarr = arr.reduce((acc, value, index) => {
//   return acc + value;
// }, 5);
// console.log(newarr);

// acc = 0 , value = 1     = 1
// acc = 1 , value = 34    = 35
// acc = 35 , value = 23   = 58

// map  value return
// forEach - undefined
// filter  -   values filter
// reduce - calculations

// function test(value, index) {
//   console.log(value, index);
// }
// arr.map(test);
