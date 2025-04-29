// Rest Operators
// Spread Operators

// Spread Operators
// let arr = [1, 4, 56, 756, 674, 534];
// let newarr = [...arr];
// console.log(arr);
// console.log(newarr);

// Merge
// let one = [1, 35, 56, 23];
// let two = [34, 56, 12, 53];
// let three = [...one, ...two];
// console.log(three);

// clone copy object
// let obj = {
//   Name: "zubair",
//   freelancer: "skills",
//   age: 18,
// };
// obj.Name = "ateeq"
// console.log(obj);

// let newobj = {
//   ...obj,
// };
// newobj.Name = "zaman"
// console.log(newobj);

// let oneobj = {
//   username: "zubair",
// };
// let twoobj = {
//   password: 1244,
// };
// let threeobj = {
//   ...oneobj,
//   ...twoobj,
// };
// console.log(threeobj);

// str spread
// let str = "Zubairfreelancer";
// let newstr = [...str];
// console.log(newstr);

// let a = [1, 2, 56, 34];
// let b = a;
// b[0] = 12;
// console.log(b);
// console.log(a)

// let a = [1, 4, 6, 7, 5];
// let b = [...a];
// b[1] = 12;
// console.log(b);
// console.log(a);

// let Name = "Devanshu";
// let sirname = [...Name];
// sirname[4] = "N";
// Name = [...sirname]
// console.log(Name);
// console.log(sirname);

// Rest operators

function sum(...number) {
  console.log(number);
  let result = 0;
  for (let num of number) {
    result += num;
  }
  return result;
}
console.log(sum(1, 34, 56, 6, 75, 7));
