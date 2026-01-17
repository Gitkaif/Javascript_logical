let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arr1);
let transpose = [];

for (let i = 0; i < arr1[0].length; i++) {
  transpose[i] = []; // create new row
  for (let j = 0; j < arr1.length; j++) {
    transpose[i][j] = arr1[j][i];
  }
}
console.log(transpose);
