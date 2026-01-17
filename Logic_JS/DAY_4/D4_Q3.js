let no = 1234;
let reverse = 0;
while (no != 0) {
  let rem = no % 10;
  reverse = reverse * 10 + rem;
  no = Math.floor(no / 10);
}
console.log(reverse);
