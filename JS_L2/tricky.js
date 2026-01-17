// tricky
//  console.log(typeof null); --- object (bug in js)
//  console.log(typeof NaN); --- number
//  console.log( typeof []); --- object
//  console.log(typeof (()=>{})); --- function




// function f(x, y = x) {
//   console.log(x, y);    --- stores default value of y same as x...so if not passed while calling it will print x's value twice
// }
// f(5,4);




//  console.log("start");
//  setTimeout(()=>console.log("timeout"),0);
//  Promise.resolve().then(()=>console.log("promise"));
//  console.log("end");




// console.log(0 == "0"); --- true
// console.log(0 === "0"); --- false
// console.log(false == "0"); --- true
// console.log(false === "0"); --- false




// const obj = {
//     name: "kaif",
//     greet: function(){
//         console.log(this.name);
        
//     }
// };

// obj.greet();  --- prints kaif - Because greet() is called *through obj*, so this refers to obj.
// const op = obj.greet;
// op(); --- Prints "undefined" Because the function is now called *alone*, not tied to obj anymore. In this case, this is undefined (in strict mode) or the global object (non-strict).




// --- var → one shared i, loop finishes before setTimeout executes because it is async so with i=4, all timeouts print 4
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// --- let → new i for each iteration, timeouts remember their own i, prints 0 1 2 3
// for (let i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0);
// }




// console.log(NaN === NaN);  --- NaN is the only value in js that is not equal to itself
// console.log([] + []);
// console.log([] + {});
// console.log(null == undefined);
// console.log(null === undefined);
// console.log('5' - 2);
// console.log('5' + 2);




//------------------------shallow copy---------------------------------

/*
let obj = {
    name: "kaif",
    age: 21,
    address: {city: "mumbai"}
};
*/

/*
let shallowCopy = {...obj};     // or Object.assign({},obj);
shallowCopy.name = "tom";
console.log(shallowCopy); 
console.log(obj); // name doesn't get changed in the og
shallowCopy.address.city = "delhi";
console.log(obj); //city gets changes in both
*/

//--------------------deep copy------------------------------------------------


/*
let obj = {
    name: "kaif",
    age: 21,
    address: {city: "mumbai"}
};

let deepCopy = structuredClone(obj);
deepCopy.name = "tom";
console.log(deepCopy);   //changed in copy
console.log(obj);  // stays same in og

deepCopy.address.city = "delhi";
console.log(deepCopy);  // same for nested also only chnaged in copy
console.log(obj);  // stays same in og
*/




// ---------------------------call apply bind----------------------------------------------

// ----------call

/*
function greet(city){
    console.log(`hello i am ${this.name} from ${city}`);
};

const user = {name:"kaif"};
greet.call(user, "mumbai");
*/

// -------apply

/*
function greet(city){
    console.log(`hello i am ${this.name} from ${city}`);
};

const user = {name:"kaif"};
greet.call(user, ["mumbai"]);
*/

// ----------bind

/*
function greet(city){
    console.log(`hello i am ${this.name} from ${city}`);
};

const user = {name:"kaif"};
const boundGreet = greet.bind(user, "mumbai");
boundGreet();
*/


