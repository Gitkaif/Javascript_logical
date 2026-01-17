let str = "kaif"
let arr = str.split('');
let i=0, j=arr.length;
while(i<j){
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] =temp;
    i++;
    j--
}
console.log(arr.join(''));

