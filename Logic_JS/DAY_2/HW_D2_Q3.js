function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

function sum(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (isEven(i)) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sum(2, 4));
