let arr = [11, 12, 15];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] + 1 == arr[i + 1] && arr[i] + 2 == arr[i + 2]) {
    continue;
  } else {
    console.log("Missing number is " + (arr[i] + 1), arr[i] + 2);
    break;
  }
}
