const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const traversal = matrix => {
  const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
  const queue = [[0, 0]];
  const values = [];
  
  while(queue.length) {
    const currPos = queue.shift();
    const row = currPos[0];
    const col = currPos[1];
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col])
      continue;
    seen[row][col] = true;
    values.push(matrix[row][col])
    dirs.forEach(dir => {
      queue.push([row + dir[0], col + dir[1]]);
    });
  }
  return values;
}
const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];
console.log(traversal(matrix));
