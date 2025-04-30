// Destructurings

let myarr = ["zubair", "ateeq", "zaman", "ali"];
// console.log(myarr[0]);
// let username = myarr[0];
// let student = myarr[1];
// let teacher = myarr[2];
// let [username, student, teacher] = myarr;
// console.log(username, student, teacher);

let obj = {
  Name: "zubair",
  freelancer: "skills",
  age: 18,
  address: {
    city: "karachi",
    country: "Pakistan",
  },
};
// let age = obj.age;
// let Name = obj.Name;
// let freelancer = obj.freelancer;

// const { Name, freelancer, age, address } = obj;
// console.log(Name, freelancer, age, address.city, address.country);

const {
  Name,
  freelancer,
  age,
  address: { city, country },
} = obj;
console.log(Name, freelancer, age, city, country);
