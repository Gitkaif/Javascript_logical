// Promise.resolve(5)
//     .then(x => x * 2)
//     .then(x => x + 3)
//     .then((data)=>{
//         console.log(data) //13 only logs
//     })
//     .then(x => {
//         console.log(x);  //undefined ...nothing returned from above...
//         return x * 10;
//     })
//     .then(console.log);


//-----------------------------------------------------------------------------------------------------

// Promise.resolve(5)
//     .then(x => x * 2)
//     .then(x => x + 3)
//     .then(x => {
//         console.log(x);  

//     })
//     .then(console.log); //undefined again because nothing returned from above...(logging in a .then prints the returned value)


//-----------------------------------------------------------------------------------------------------

// let b = 32;
// function test () {
//   return                        
//   {
//     a:90
//   }
// }

// let sum = test().a +b
// console.log(sum);            after return (;) is added by default (ASI) so after return keyword nothing will execute



//-----------------------------------------------------------------------------------------------------


// Promise.resolve(1)
// .then(x => {x+1})  //nothing will return from here ..because using {} ..need to define return keyword
// .then(x => console.log(x));   //  undefined because nothing is returned from first then block

//-----------------------------------------------------------------------------------------------------



// let p = new Promise((res) =>{
//     res(34)
//   console.log(33);
// })
// p.then(res=>console.log(console.log(res)))  //inner log(res) prints 34 but returns undefined ..so outer becomes log(undefined)
// console.log(35) 


//-----------------------------------------------------------------------------------------------------


// let x = console.log('hi')  //prints hi and returns undefined also 
// console.log(x)   



//-----------------------------------------------------------------------------------------------------


// async function test(){
//   console.log(33);
//   let a = await console.log(34);   //prints 34 but returns undefined ...so a is undefined
//   console.log(a);
//   console.log(35);
// }


// console.log(36);
// test().then(data=>console.log(data))  //gets undefined as (data)
// console.log(37);


//-----------------------------------------------------------------------------------------------------


// async function a() {
//     let b = await 1
//     console.log(b)    //prints 1....& returns undefined
// }
//  console.log(a().then(a=>console.log(a)))  // wrapper of log() prints the promise first (pending) before async runs



//-----------------------------------------------------------------------------------------------------


// async function test(){
//   let a = await 1;
//   console.log(a);
// }
// console.log(test())          // prints pending promise because we are loggin an async function


// test().then(res => console.log(res))         //this is will print 1 & undefined because the .then prints the return value



//-----------------------------------------------------------------------------------------------------


//  async function test(){
//   let a = 1
//   console.log(a);
// }
// console.log(test())   // this will print 1 & promise:{undefined} because not used await here 




//-----------------------------------------------------------------------------------------------------

//  async function test(){
//   let a = 1
//   await console.log(a);
// }
// console.log(test())   //prints 1 , promise {pending} ...because here await is used so the promise will be in pending state when printed


//-----------------------------------------------------------------------------------------------------



// console.log(
//   Promise.resolve(5).then(x => x * 2)      //prints promise:{pending} because Promise.resolve() is a fullfilled promise here & .then is async here creates a new promise so it goes into micro task and console.log() executes before it so it prints pending  
// );



//-----------------------------------------------------------------------------------------------------

