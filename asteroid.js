function checkCollission(asteroids) {
  for (let i = asteroids.length - 1; i >= 0; i--) {
    if (Math.sign(asteroids[i]) == -1 && Math.sign(asteroids[i - 1]) == 1) {
      if (i == -1) {
        break;
      }
      if (asteroids[i] + asteroids[i - 1] > 0) {
        console.log("\n---\ncollission detected\n---\n");
        asteroids.splice(i);
      } else if (asteroids[i] + asteroids[i - 1] == 0) {
        console.log("\n---\ncomplete collission detected\n---\n");
        asteroids.splice(i - 1, 2);
      }
    }
  }
  return asteroids;
}
let asteroids = [5, -5];
checkCollission(asteroids);
