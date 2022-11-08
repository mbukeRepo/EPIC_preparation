const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const numberOfIslands = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        count++;
        const queue = [[i, j]];
        while (queue.length) {
          const currPos = queue.shift();
          const row = currPos[0];
          const col = currPos[1];
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
              grid[nextRow][nextCol] = 0;
              queue.push([nextRow, nextCol]);
            }
          }
        }
      }
    }
  }
  return count;
};
const matrix = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
];

const testMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
];

console.log(numberOfIslands(testMatrix));
