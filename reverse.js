function rev(str) {
  let tail = str.length;
  let new_str = "";
  for (let i = tail - 1; i >= 0; i--) {
    new_str = new_str + str[i];
  }
  console.log(new_str);
}

let str = "abcbe";
rev(str);
