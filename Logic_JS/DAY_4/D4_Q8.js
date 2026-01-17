let arr = [1, 2, 3, 4, 5];
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
let secondLargest = arr[0];
for (let j = 0; j < arr.length; j++) {
  if (arr[j] > secondLargest && arr[j] != largest) {
    secondLargest = arr[j];
  }
}
console.log(secondLargest);
