function password(length) {
  let str = "abcdefghikmlnopqrstuvwxyzABCDEFGHIKMLNOPQRSTUVWXYZ1234567890@&!#";
  let randomID = "";
  //   console.log(str.length);
  for (let I = 1; I <= length; I++) {
    let rand = Math.floor(Math.random() * str.length);
    // console.log(rand);
    randomID += str.charAt(rand);
  }
  return randomID;
}
console.log(password(15));
