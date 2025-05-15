// Promise      Fetch
// stage -3
// Pending
// Fulfill
// Reject

// Fetch ("Http://jsondata.then().catch()")

// Promise
// let mypromise = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     console.log("Async Task Completed ✅");
//     reject();
//     reslove();
//   }, 2000);
// });
// mypromise.then((res) => {
//   console.log("Then block work");
// });

// mypromise.catch((Error) => {
//   console.log("Catch Block work");
// });
// block then - reslove - response
// block catch - reject - error

// new Promise((reslove, reject) => {
//   setTimeout(() => {
//     console.log("Async Task Completed ❤");
//     let task = true;
//     if (task) {
//       reslove({ Username: "Zubair", Password: "12345" });
//     } else {
//       reject({ error: "Internal server error" });
//     }
//   }, 2000);
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Fetch in js
// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     return res.json(); // convert response to json
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// json javascript object notation
// json - data format
// json - data exchange format
// let obj = {
//   Name:"Zubair",
//   Age: 23,
//   Address: "Karachi",
// }

let isfetch = fetch("https://dummyjson.com/products");
console.log(isfetch);
