let no=10;
let first=0, second=1;
for(let i=0; i<no; i++){
    console.log(first+' ');
    let temp = first+second;
    first=second;
    second=temp;
}