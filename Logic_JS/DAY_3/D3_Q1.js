var dec = 10;
var oct = "";
while (dec != 0) {
  let rem = dec % 8;
  oct = rem + oct;
  dec = Math.floor(dec / 8);
}
console.log(oct);
