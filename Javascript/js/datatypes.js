// //  Primitive Data Types
// // -String - Number - Bloolean - Null - Undefined - Symobl - BigInt

// // Non Primitive Data Types

// // -Object - Array

// // Primitive Data Types
// // 1. String
// // double quotes ""
// let Name = "Zubair"; // string
// console.log(Name);
// console.log(typeof Name);
// // single quotes ''
// let last = "freelancer";
// console.log(last);
// console.log(typeof last);
// // backticks ``
// let fullName = `Zubair is a developer ${last}`; // string
// console.log(fullName);
// console.log(typeof fullName);
// // 2. Number
// const age = 23; // number
// const uservalue = 23.53; // number
// console.log(age);
// console.log(typeof age);
// console.log(uservalue, typeof uservalue);
// // 3. Boolean
// let isDeveloper = true; // boolean
// let isFreelancer = false; // boolean
// console.log(isDeveloper);
// console.log(isFreelancer);
// console.log(typeof isDeveloper);
// console.log(typeof isFreelancer);
// // 4. undefined
// let zubair; // undefined
// console.log(zubair, typeof zubair); // undefined

// // Null
// let user = null; // null
// console.log(user, typeof user); // null

// template literals
// let a = "freelancer";
// let b = "Programer";
// let c = "fronted developer";
// let d = "backend developer";
// let e = "full stack developer";
// let freelancer = `zubair is a good ${a}`;
// let Programer = `zubair is a good ${b}`;
// let frontend = `zubair is a good ${c}`;
// let backend = `zubair is a good ${d}`;
// let full = `zubair is a good ${e}`;
// console.log(freelancer, Programer, frontend, backend, full);

// Non Primitive Data Types
// 1. Array
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array
// let arrvalue = ["zubair", undefined, null, 4, true, 23.6]; // array
// // key/index      0         1          2   3    4     5
// console.log(array, typeof array); // object
// console.log(array[4]);
// console.log(arrvalue);
// console.log(arrvalue[0], typeof arrvalue[0]);
// console.log(arrvalue[1], typeof arrvalue[1]);
// console.log(arrvalue[2], typeof arrvalue[2]);
// console.log(arrvalue[3], typeof arrvalue[3]);
// console.log(arrvalue[4], typeof arrvalue[4]);
// console.log(arrvalue[5], typeof arrvalue[5]);
// console.log(arrvalue[6], typeof arrvalue[6]);

// objects
let obj = {
  Name: "Zubair",
  Skills: "fronted developer",
  Age: 18,
  StudentAddress: {
    city: "mainwali",
    pincode: 2300,
  },
};
// console.log(obj);
// console.log(typeof obj.StudentAddress.city);
// console.log(obj.StudentAddress.city);
// console.log(obj.StudentAddress.pincode);
// const { Name, Skills, Age, StudentAddress } = obj;
// console.log(StudentAddress);
console.log(obj.Name);
