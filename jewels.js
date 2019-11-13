function totalJewels(J, S) {
  let jewels = J.split("");
  //   console.log(jewels);
  let ht = {};
  let count = 0;
  for (val in S) {
    if (jewels.indexOf(S[val]) != -1) {
      count++;
    }
  }
  return count;
}
let J = "aA";
let S = "aAAbbbb";
totalJewels(J, S);
