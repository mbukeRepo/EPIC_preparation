const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const dfs = (grid, row, col) => {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;

  if(grid[row][col] === 1) {
     grid[row][col] = 0;
     for (let i = 0; i < dirs.length; i++) {
       dfs(grid, row + dirs[i][0], col + dirs[i][1]);
     }
  }
};
const numberOfIslands = (grid) => {
  if (grid.length === 0) return 0;
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === 1) {
         count++;
         dfs(grid, row, col);
      }
    }
  }
  return count;
}


const matrix = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1], 
  [0, 0, 0, 1, 1]
]

const testMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1]
];

console.log(numberOfIslands(testMatrix));








