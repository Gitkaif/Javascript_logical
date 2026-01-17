let no = 123;
var res = 0;
while (no != 0) {
  var digit = no % 10;
  res = res + digit;
  no = Math.floor(no / 10);
}
console.log(res);
