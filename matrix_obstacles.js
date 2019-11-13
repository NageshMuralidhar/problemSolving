function uniquePaths(a) {
  let paths = new Array(3);
  for (let i = 0; i < paths.length; i++) {
    paths[i] = new Array(3);
  }
  let len = a.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      paths[i][j] = 0;
    }
  }

  if ((a[0][0] = 0)) {
    paths[0][0] = 1;
  }

  for (let i = 1; i < len; i++) {
    if ((a[i][0] = 0)) {
      paths[i][0] = paths[i - 1][0];
    }
  }

  for (let j = 1; j < len; j++) {
    if ((a[0][j] = 0)) {
      paths[0][j] = paths[0][j - 1];
    }
  }

  for (let i = 1; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (a[i][j] == 0) {
        paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
      }
    }

    console.log(paths[2][2]);
  }
  console.log(paths);
}

let a = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
uniquePaths(a);
