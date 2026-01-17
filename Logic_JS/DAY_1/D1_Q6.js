let no = 10;
let first=0;
let second = 1;
let temp;
for(let i=0; i<10; i++){
    console.log(first+" ");
    temp = first+second;
    first = second;
    second = temp;
}