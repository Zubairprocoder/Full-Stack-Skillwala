// // Shallow copy and deep copy

// const obj = {
//   ProductName: "Iphone",
//   ProductPrice: "$124",
// };
// // let secobj = { ...obj }; //shallow copy
// // console.log(obj);
// // console.log(secobj);
// const secobj = Object.assign({}, obj);     //shallow copy
// secobj.ProductName = "samangs";
// console.log(secobj);

let obj = {
  Name: "Zubair",
  SKills: "fronted developer",
  age: 18,
  Address: {
    City: "Lahore",
    Pincode: 3200,
  },
};
// console.log(obj);
// let secobj = { ...obj };
// secobj.SKills = "full stack developer";
// secobj.Address.City = "karachi";
// console.log(secobj);
// console.log(obj);

// Deep copy

// console.log(JSON.stringify(obj));
let secobj = JSON.parse(JSON.stringify(obj));
console.log(obj);
secobj.Address.City = "islambad";
console.log(secobj);

// q1 JSON.parse(JSON.stringify(obj))