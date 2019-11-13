function setZeros(matrix) {
  let getrc = [];
  let len = matrix.length;
  let in_len = matrix[0].length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < in_len; j++) {
      if (matrix[i][j] == 0) {
        getrc.push([i, j]);
      }
    }
  }
  console.log(getrc);
  for(let i=0; i<len)
}
let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeros(matrix);
