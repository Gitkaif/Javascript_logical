function fact(num) {
  let factt = 1;
  for (let i = 1; i <= num; i++) {
    factt = factt * i;
  }
  return factt;
}
var no = 145;
var og = no;
var isStrong = false;
var result = 0;
while (no != 0) {
  let rem = no % 10;
  result += fact(rem);
  no = Math.floor(no / 10);
}
if (og == result) {
  isStrong = true;
}
console.log(isStrong);



