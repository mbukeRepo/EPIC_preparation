// find location of initial rotting oranges
// find the total number of the fresh oranges
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const minutesToRot = (grid) => {
  let queue = [];
  let fresh = 0;
  let minutes = 0;
  let len;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) fresh++;
    }
  }
  len = queue.length;
  // lotting virus
  while (queue) {
    const pos = queue.shift();
    len--;
    const row = pos[0],
      col = pos[1];
    for (let i = 0; i < dirs.length; i++) {
      const nextRow = row + dirs[i][0];
      const nextCol = col + dirs[i][1];
      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= grid.length ||
        nextCol >= grid[0].length
      )
        continue;
      if (grid[nextRow][nextCol] === 1) {
        grid[nextRow][nextCol] = 2;
        queue.push([nextRow, nextCol]);
        fresh--;
      }
    }
    console.log(grid, minutes, fresh);
    if (len === 0 && queue.length === 0) break;
    if (len === 0) {
      minutes++;
      len = queue.length;
    }
  }
  return fresh === 0 ? minutes : -1;
};

const test1 = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
];
const test2 = [
  [1, 1, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2],
  [0, 0, 0, 0, 1],
];

console.log(minutesToRot(test2));
