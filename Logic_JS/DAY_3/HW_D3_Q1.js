let decimal = 23;
let arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let hexa = "";

while (decimal != 0) {
  let rem = decimal % 16;
  hexa = arr[rem] + hexa;
  decimal = Math.floor(decimal / 16);
}
console.log(hexa);
