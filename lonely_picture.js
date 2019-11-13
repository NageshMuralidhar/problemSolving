function findBlackLonelyPixels(pic) {
  let rowmin = (colmin = 0);
  let rowmax = (colmax = pic.length - 1);
  let r1, c1, r2, c2;
  for (let i = 0; i < pic.length; i++) {
    for (let j = 0; j < pic.length; j++) {
      if (pic[i][j] === "B") {
        r1 = i - 1;
        c2 = j - 1;
        r2 = i + 1;
        c2 = j + 1;
        if (r1 < 0 || c1 < 0 || r2 > 2 || c2 > 2) {
          break;
        } else {
          if (pic[i - 1][j - 1] === "B" && pic[i + i][j + 1] === "B") {
            console.log("not lonely");
          } else {
            console.log("lonely");
          }
        }
      }
    }
  }
}
let pic = [["W", "W", "B"], ["W", "B", "W"], ["B", "W", "W"]];
findBlackLonelyPixels(pic);
