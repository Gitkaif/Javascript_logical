let no = 1331;
let original = no;
var rev=0;
while(no!=0){
    let digit = no%10;
    rev = (rev*10)+digit;
    no = Math.floor(no/10);
}
let isPalin = false;
console.log(rev);
if(original==rev){
    isPalin = true;
}
console.log(isPalin);

