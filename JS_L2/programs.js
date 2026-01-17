// -------------------------------------------------ANAGRAM-----------------------------------------------------------

// function sortt(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }

// let str1 = "silent";
// let str2 = "listen";
// var isAna = true;
// if (str1.length === str2.length) {
//   var arr1 = str1.split("");
//   let arr2 = str2.split("");
//   sortt(arr1);
//   sortt(arr2);
//   for (let k = 0; k < arr1.length; k++) {
//     if (arr1[k] !== arr2[k]) {
//       isAna = false;
//       break;
//     }
//   }
// }

// console.log(isAna);

// -------------------------------------MISSING NO FROM 1......N--------------------------------------------------------------

// let n = 4;
// let arr = [1,3,4];
// let expected = (n*(n+1))/2;
// console.log(expected);

// let actual = 0;
// for(let i=0; i<arr.length; i++){
//     actual+=arr[i];
// }
// let ans = expected-actual;
// console.log(ans);

// -------------------------------------REVERSE WORDS IN A SENTENCE--------------------------------------------------------------

// let sen = "I LOVE JS";
// let res = sen.split(" ").reverse().join(" ");
// console.log(res);

// without built-in

// function revWords(sentence){
//     let words = sentence.split(" ");
//     let result = " ";
//     for(let i=words.length-1; i>=0; i--){
//         result+=words[i];
//         if(i!=0){
//             result+=" ";
//         }
//     }
//     return result;
// }
// console.log(revWords("I AM KAIF"));

// -------------------------------------LONGEST WORD IN A STRING--------------------------------------------------------------

// let str = "long longerrrrrrr longestt";
// let words = str.split(" ");
// var longest = "";
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > longest.length) {
//     longest = words[i];
//   }
// }
// console.log(words);
// console.log(longest);


// -------------------------------------FIND DUPLICATES--------------------------------------------------------------

// function findDupli(arr){
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]===arr[j] && !res.includes(arr[i])){
//                 result.push(arr[i]);
//             }
//         }
//     }
//     return result;
// }
// console.log(findDupli([1,2,3,3,4,5,6,6,7,9,1]));


// -------------------------------------FIBONACCI SERIES--------------------------------------------------------------


// let no = 10;
// let first = 0;
// let second = 1;
// for(let i=0; i<no; i++){
//     console.log(first + "");
//     let temp = first + second;
//     first = second;
//     second = temp;
// };





//----------------------------------------------target = sum of elements----------------------------------------------


// var arr = [1,2,3,4,5,6,7];
// var target = 5;
// var result = [];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]+arr[j]==target){
//             result.push([arr[i],arr[j]])
//         }
//     }
// };
// console.log(result);





//------------------------------------------------alternate uppper case letters------------------------------------------------------
// let str = "hello world";
// let result=""
// for(let i=0; i<str.length; i++){
//     if(i%2==0){
//         result+=str[i].toUpperCase();
//     }else{
//         result+=str[i].toLowerCase();
//     }
// }
// console.log(result);


// let no=123;
// let rev=0
// while(no!=0){
//     let digit = no%10;
//     rev = rev*10+digit;
//     no = Math.floor(no/10);
// }
// console.log(rev);


//-------------------------------------------multi largest---------------------------
// let arr = [1,2,9,19,23,10,102,112,4,10,5,6,8]
// let first = -Infinity
// let second = -Infinity
// let third = -Infinity
// let fourth = -Infinity

// for(let i=0; i<arr.length; i++){
    
//     if(arr[i]>first){
//         fourth = third
//         third = second
//         second = first
//         first = arr[i]
//     }else if(arr[i]>second){
//         fourth = third
//         third = second
//         second = arr[i]
//     }else if(arr[i]>third){
//         fourth = third
//         third = arr[i]
//     }else if(arr[i]>fourth){
//         fourth = arr[i]
//     }
// }

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fourth)





//---------------------------------FIRST NON REPEATING CHAR----------------------------------   
// let str = 'aabbkknccdeeff'
// let res = ''
// for(let i=0; i<str.length; i++){
//     let count=0
//     for(let j=0; j<str.length-1; j++){
//         if(str[i]==str[j]){
//             count++
//         }
//     }
// if(count === 1){
//     console.log(str[i])
//     break
// }
// }


