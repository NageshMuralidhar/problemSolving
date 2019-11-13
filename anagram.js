function chk_angrm(str1, str2) {
  str2 = str2.replace(/\s/g, "");
  str1 = str1.replace(/\s/g, "");
  if (str1.length != str2.length) {
    console.log("not anagram");
  }
  str1 = str1
    .split("")
    .sort()
    .join("");
  str2 = str2
    .split("")
    .sort()
    .join("");
  if (str1 === str2) {
    console.log("it is an anagram");
  } else {
    console.log("not an anagram");
  }
}
let str1 = "foo";
let str2 = "bar";
chk_angrm(str1, str2);
