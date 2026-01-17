// let no = 9;
// let isPrime = no > 1;   // assume prime if > 1

// for (let i = 2; i < no; i++) {
//   if (no % i === 0) { isPrime = false; break; }
// }

// console.log(isPrime);



let no=7;
let isPrime = no>1;
for(let i=2; i<no; i++){
  if(no%i==0){
    isPrime=false;
    break;
  }
}
console.log(isPrime);



