// scop
// local scop   (function scop)
// block scop
// global scop
// lexical scop

// global scop
let a = 23;
const text = "zubair freelancer";
var b = 12;
function fun() {
  console.log(a, b, text);
}
fun();

// local scop (function scop)
function local() {
  //   let two = "this is not use function outside";
  //   const three = "this is not use function outside";
  //   var four = "this is not  use function outside";
}
// console.log(two);
// console.log(three);
// console.log(four);

// block scop  var ❎ let ✔  const ✔
// let age =3;
// if (age > 18) {
//   let a = 34;
//   console.log(a);
// } else if (age < 18) {
//   const b = 12;
//   console.log(b);
// } else {
//   var c = "invalid input";
// }
if (true) {
  var block = "zubair is a good programmer";
}
console.log(block);
