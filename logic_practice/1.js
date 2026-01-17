let no=122;
let og=no;
let isPalin = false;
let result = 0;
while(no!=0){
let digit = no%10;
result = result*10+digit;
no = Math.floor(no/10);
}
if(result==og){
    isPalin=true;
}

console.log(isPalin);
