function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const sumOfPrime = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumOfPrime(1, 10));


//some err