// let product_one = {
//   productName: "Iphone",
//   productPrice: "$44",
//   address: {
//     city: "lahore",
//     pincode: 1243,
//   },
//   allDetails: function () {
// console.log(
//   `ProductName:- ${this.productName} ProductPrice:- ${this.productPrice}`
// );
// console.log(product_one.productName);
// console.log(this.productName + this.productPrice);
//     console.log(this);
//   },
// };
// product_one.allDetails();
// // console.log(this);

// let product_two = {
//   productName: "samsung",
//   productPrice: "$200",
//   address: {
//     city: "karachi",
//     pincode: 341,
//   },
// };

// call
// product_one.allDetails.call(product_two);
function valueaccess(city, pincode) {
  console.log(
    `Productname :- ${this.productName} productPrice:- ${this.productPrice} + city:- ${city} pincode:- ${pincode}`
  );
}
let product_one = {
  productName: "Iphone",
  productPrice: "$45",
};
let product_two = {
  productName: "Oppo",
  productPrice: "$20",
};
let product_three = {
  productName: "Vivo",
  productPrice: "$30",
};
let product_four = {
  productName: "Nokia",
  productPrice: "$10",
};

// valueaccess.call(product_one, "lahore", 1243);
// valueaccess.call(product_two, "islambad", 34);
// valueaccess.call(product_three, "karachi", 53);
// valueaccess.call(product_four, "mainwali", 124);

// valueaccess.apply(product_one, ["lahori", 231]);
// as an Array

let objvalue = valueaccess.bind(product_one, "peshwarer", 3200);
// console.log(objvalue);
objvalue();
