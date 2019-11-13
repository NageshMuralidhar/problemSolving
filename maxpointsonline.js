function getMaxPoints(points) {
  let a = (b = 0);
  let ar = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[0].length; j++) {
      ar.push(points[i]);
    }
  }
  ar = [...new Set(ar)];
}

let points = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]];
getMaxPoints(points);

// incomplete
