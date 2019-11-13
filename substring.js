function chk_sub(str1, str2) {
  let str3 = str1 + str1;
  if (str3.indexOf(str2) === -1) {
    console.log("It is not a substring");
  } else {
    console.log("It is a substring");
  }
}
let str1 = "waterbottle";
let str2 = "erbottlewat";
chk_sub(str1, str2);
