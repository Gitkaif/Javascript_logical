let no = 120340506;
let reverse=0;
while (no !== 0) {
  let rem = no % 10;
  if (rem == 0) {
    rem = 1;
  }
  reverse = reverse * 10 + rem;
  no = Math.floor(no / 10);
}






let result = 0;
while (reverse !== 0) {
  let rem = reverse % 10;
  result = result * 10 + rem;
  reverse = Math.floor(reverse / 10);
}
console.log(result);
