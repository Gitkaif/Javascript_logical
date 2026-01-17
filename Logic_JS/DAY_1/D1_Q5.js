let no = 153;
let temp1 = 0;
let temp2 = 0;
let og = no
while(no!=0){
    temp1 = no%10;
    temp2 = temp2+(temp1*temp1*temp1);
    no = Math.floor(no/10);
}
let isArm = false;
if(temp2==og){
    isArm = true;
}
console.log(isArm);
