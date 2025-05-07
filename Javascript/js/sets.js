// sets - unique value store
let uniquevalue = new Set(["a", "b", "c", "c", "d"]);
uniquevalue.add("Zubair");
uniquevalue.delete("Zubair");
let a = uniquevalue.has("b");
console.log(a);
console.log(uniquevalue.size);
let b = new Date().getMonth()
console.log(b)