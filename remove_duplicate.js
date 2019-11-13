function rem_dup(str) {
  let cpy = "";
  let len = str.length;
  for (let i = 0; i < len; i++) {
    cpy.indexOf(str[i]) === -1
      ? (cpy += str[i])
      : console.log("duplicate element found | element is: " + str[i]);
  }
  console.log(cpy);
}

let str = "abcbeabcbeabcbeabcbeabcbeabcbeabcbeabcbeabcbeabcbe";
rem_dup(str);
