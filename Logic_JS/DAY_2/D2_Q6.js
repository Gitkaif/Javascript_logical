var no=13151721;
var x = 1;
var count=0;
while(no!=0){
    let rem = no%10;
    if(rem==x){
        count++;
    }
    no = Math.floor(no/10);
}
console.log(count);

