// function test(a, b, callback) {
//   console.log(a + b);
//   console.log("zubair freelancer 🥰");
//   callback();
// }
// function mycall() {
//   console.log("I am callback function");
// }
// test(32, 43, mycall);

function test(a, b, callback) {
  console.log(a + b);
  console.log("zubair freelancer 🥰");
  //   mycall();
  //   seccall();
  callback();
}
function mycall() {
  console.log("I am callback function");
}
function seccall() {
  console.log("I am second function");
}
test(32, 43, mycall);
test(21, 32, seccall);
