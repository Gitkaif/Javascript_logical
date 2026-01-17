let a=20;
let b=12;
for(let i=0; i<=a && i<=b; i++){
    if(a%i==0 && b%i==0){
        var gcd = i;
    }
}
console.log(gcd);
