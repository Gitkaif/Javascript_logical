let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
let arr2 = [
  [2, 2, 2],
  [2, 2, 2],
];
let sum = [];
for (let i = 0; i < arr1.length; i++) {
    sum[i] = [];
  for (let j = 0; j < arr1[i].length; j++) {
    sum[i][j] = arr1[i][j] + arr2[i][j];
  }
}
console.log(sum);
