function unq(str) {
  let ht = {};
  for (let i = 0; i < str.length; i++) {
    if (ht[str[i]] == 0) {
      ht[str[i]] += 1;
    } else {
      ht[str[i]] = 0;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (ht[str[i]] != 0) {
      console.log(str[i]);
      break;
    }
  }
}
let str = "abcbe";
unq(str);
