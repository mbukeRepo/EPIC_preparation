const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const traversal = matrix => {
  const seen = {};
  const values = [];
  dfs(matrix, seen, values, 0, 0);
  return values;
}

const dfs = (matrix, seen, values, row, col) => {
  let key = `${row}-${col}`;
  if (seen[key] || row < 0 || col < 0 || seen[key] || row > matrix.length - 1 || col > matrix[0].length - 1) return;
  values.push(matrix[row][col]);
  seen[key] = true;
  for (let i = 0; i < dirs.length; i++) {
    const currDir = dirs[i];
    dfs(matrix, seen, values, row + currDir[0], col + currDir[1]);
  }
}
const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];
console.log(traversal(matrix))
