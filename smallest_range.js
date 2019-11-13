function findrange(input) {
  let darr = [];
  let range = [];
  let range_val = 0;
  let flagger = 0;
  let min_val = (max_val = 0);
  for (val in input) {
    darr = darr.concat(input[val]);
  }
  console.log(darr);
  //get min and max values to find the total range
  min_val = Math.min.apply(Math, darr);
  max_val = Math.max.apply(Math, darr);
  console.log(min_val, max_val);
  range_val = (min_val + max_val) / input.length;
  console.log(range_val);

  //copy that to a different variable
  flagger = range_val;

  //run the different ranges ex. 0-10, 10-20, 20-30
  for (let i = 0; i < input.length; i++) {
    range.push(range_val);
    range_val = range_val + flagger;
  }
  console.log(range);
  let count = 0;
  for (let k = 0; k < darr.length; k++) {
    if (0 > darr[k] < range[k]) {
      ht[k] = count++;
    }
  }
}

let input = [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]];
findrange(input);
