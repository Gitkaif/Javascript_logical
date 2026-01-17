// --------------------------------------------------------------LONGEST WORD----------------------------------------------------------------------------------------

// function longestWord(str){
//     let words = str.split(" ");
//     let longest = "";
//     for(let i=0; i<words.length; i++){
//         if(words[i].length>longest.length){
//             longest = words[i];
//         }
//     }
//     console.log(longest);

// }
// longestWord("hello worldd ssssssssssssssssis kaif ");

// ----------------------------------------------------------------PALINDROME--------------------------------------------------------------------------------------

// function Palin(str1) {
//   let og = str1;
//   let arr = str1.split("");

//   let i = 0,
//     j = arr.length-1;
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
//   let reversed = arr.join("");
//   return og==reversed;

// }
// console.log(Palin("mam"));

// ----------------------------------------------------------------PALINDROME 2--------------------------------------------------------------------------------------

// let str1 = "maamm";
//   let og = str1;
//   let arr = str1.split("");

//   let i = 0,
//     j = arr.length-1;
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
//   let reversed = arr.join("");
//   if(og==reversed){
//     console.log("palin");

//   }else{
//     console.log("not");
//   }

// -----------------------------------------------------------REMOVE DUPLICATES-------------------------------------------------------------------------------------------

// const arr = [1, 2, 2, 3, 4, 4, 5];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   let exists = false;

//   for (let j = 0; j < result.length; j++) {
//     if (arr[i] === result[j]) {
//       exists = true;
//       break;
//     }
//   }

//   if (!exists) {
//     result.push(arr[i]);
//   }
// }

// console.log(result); // [1, 2, 3, 4, 5]


// -----------------------------------------------------------REVERSE STRING-------------------------------------------------------------------------------------------

// function reverseString(str){
//     let rev="";
//     for(let i=str.length-1; i>=0; i--){
//         rev += str[i]
//     }
//     console.log(rev);

// }
// reverseString("fiak");

// -----------------------------------------------------------factorial -------------------------------------------------------------------------------------------

// function fact(no){
//     let fact = 1;
//     for(let i=1; i<=no; i++){
//         fact = fact*i;
//     }
//     return fact;
// }
// console.log(fact(5));


// -----------------------------------------------------------MERGE 2 SORTED ARRAYS -------------------------------------------------------------------------------------------

// let a = [2,4,6];
// let b = [1,3,5];
// let c = [];
// for(let i=0; i<a.length; i++){
//     c[i] = a[i];
// }
// for(let j=0; j<b.length; j++){
//     c[a.length+j] = b[j];
// }

// for(let i=0; i<c.length; i++){
//     for(let j=0; j<c.length-1; j++){
//         if(c[j]>c[j+1]){
//             let temp = c[j];
//             c[j] = c[j+1];
//             c[j+1] = temp;
//         }
//     }
// }
// console.log(c);


// -----------------------------------------------------------ANAGRAM -------------------------------------------------------------------------------------------


// function msort(arr) {
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
// let a = str1.split("");
// let b = str2.split("");
// if (a.length == b.length) {
//     var isANA = true;
//   msort(a);
//   msort(b);
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] != b[i]) {
//       isANA = false;
//       break;
//     }
//   }
// }
// if(isANA){
//     console.log(" IT IS ANAGRAM");
    
// }else{
//     console.log("NOT ANAGRAM");
    
// }

// -----------------------------------------------------------FIBONACCI SERIES -------------------------------------------------------------------------------------------

// let no = 4;
// let first = 0;
// let second = 1;
// for(let i=0; i<=no; i++){
//     console.log(first+" ");
//     let temp = first+second;
//     first = second;
//     second = temp;
// }


// -----------------------------------------------------------Triangle -------------------------------------------------------------------------------------------

// for(let i=0; i<=4; i++){
//     let row = "";
//     for(let j=0; j<=4; j++){
//         if(i>=j){
//             row += "*";
//         }
//     }console.log(row);
// }


// -----------------------------------------------------------triangle -------------------------------------------------------------------------------------------


// for(let i=4; i>=0; i--){
//     let row = "";
//     for(let j=0; j<=4; j++){
//         if(i>=j){
//             row += "*";
//         }
//     }console.log(row);
// }

// -----------------------------------------------------------Triangle -------------------------------------------------------------------------------------------

// for(let i=0; i<=4; i++){
//     let row = "";
//     for(let j=0; j<=4; j++){
//         if(i<=j){
//             row += " *";
//         }else{
//             row += " ";
//         }
//     }console.log(row);
// }

// for(let i=4; i>=0; i--){
//     let row = "";
//     for(let j=0; j<=4; j++){
//         if(i<=j){
//             row += " *";
//         }else{
//             row += " ";
//         }
//     }console.log(row);
// }





// const users = [
//   { name: "Alice", email: "ALICE@EXAMPLE.COM" },
//   { name: "Bob", email: "BOB@EXAMPLE.COM" },
//   { name: "Charlie", email: "CHARLIE@EXAMPLE.COM" }
// ];

// const mp =users.map((a)=>{
//     return a.email.toLowerCase();
// })
// console.log(mp);

