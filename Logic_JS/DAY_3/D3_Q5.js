let no = 6;
var sum = 0;
for (let i = 1; i < no; i++) {
  if (no % i == 0) {
    sum += i;
  }
}
var isPerfect = false;
if (no == sum) {
  isPerfect = true;
}
console.log(isPerfect);
