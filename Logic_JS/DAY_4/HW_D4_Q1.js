let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,9,5];
let isEqual=false;
if(arr1.length==arr2.length){
    for(let i=0; i<=arr1.length-1; i++){
        if(arr1[i]==arr2[i]){
            isEqual = true;
        }
    }
}
console.log(isEqual);
