let arr=[1,2,3,4];
let largest=arr[0]
for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i]
    }
}
// console.log(largest);
let secondlargest = arr[0]

for(let i=0; i<arr.length; i++){
    if(arr[i]>secondlargest && arr[i]!=largest){
        secondlargest = arr[i]
    }
}
console.log(secondlargest);
