let decimal = 10;
let binary = "";
while (decimal != 0) {
  let digits = decimal % 2;
  binary = binary + digits;
  decimal = Math.floor(decimal / 2);
}
console.log(binary);
