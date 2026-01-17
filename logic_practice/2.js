let no=153;
let og=no
let temp1=0;
let temp2=0;
while(no!=0){
    let temp1 = no%10;
    temp2 = temp2+(temp1*temp1*temp1);
    no = Math.floor(no/10);

}
let isArm=false;

if(og==temp2){
    isArm=true;

}
console.log(isArm);
