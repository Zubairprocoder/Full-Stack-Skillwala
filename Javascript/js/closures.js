// let x = "Zubair Coder";
// function Name() {
//   let y = "Zubair Freelancer";
//   console.log(x); //
//   console.log(y); // Local Scope
//   function Inner() {
//     let z = "Zubair Developer";
//     console.log(z); // Lexical Scope
//   }
//   Inner();
// }
// // console.log(y);
// Name();

// closures scope
// function outer() {
//   let text = "fronted developer";
//   function Inner() {
//     console.log(text);
//   }
//   return Inner;
// }
// let innervalue = outer();
// innervalue();

// fetching data from API

function scope() {
  let counts = 0;
  function x() {
    counts++;
    console.log(counts);
  }
  return x;
}
let counter = scope();
counter(); // 1
counter(); // 1
counter(); // 1
counter(); // 1
counter(); // 1
counter(); // 1
 