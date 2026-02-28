//-------------------------------------Rahul Singh------------------------------------------------------


let objj = {
    name: "kaif",
    age: 21,
    address:{city:"mumbai"}
}

let shallowCopy = { ...objj }
let deepCopy = structuredClone(objj)

deepCopy.address.city = "delhi"
console.log(objj.address.city)
console.log(deepCopy.address.city)


//------------------------------------------------------------------------------------------------------


const object = {
  name: "Rahul",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

object.greet();


//------------------------------------------------------------------------------------------------------


var a;
console.log(a);
a = 10;


//------------------------------------------------------------------------------------------------------


console.log(b);
let b = 20;


//------------------------------------------------------------------------------------------------------


Promise.resolve(5)
    .then(x => x * 2)
    .then(x => x + 3)
    .then(x => {
        console.log(x);
        return x * 10;
    })
    .then(console.log);


//------------------------------------------------------------------------------------------------------


async function foo() {
  return 10;
}
console.log(foo());


//------------------------------------------------------------------------------------------------------


console.log("A");

async function foo() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

foo();
console.log("D");


//------------------------------------------------------------------------------------------------------


var arrr = [1,2,3,7,6]  //target  = 10    ...logical question


//------------------------------------------------------------------------------------------------------



async function test() {
  try {
    Promise.reject("Error");
  } catch {
    console.log("Caught");
  }
}

test();


//------------------------------------------------------------------------------------------------------



async function test() {
  return Promise.resolve(5);
}

test().then(console.log);

//------------------------------------------------------------------------------------------------------



function a(b,...rest){    // sir wrote (...rest, b)
console.log(b,rest);
}


//------------------------------------------------------------------------------------------------------



const objjj = {
  name: "Rahul",
  greett() {
    console.log(this.name);
  }
};

const greetFn = objjj.greett;
greetFn();


//------------------------------------------------------------------------------------------------------


const obj = {
  name: "Rahul",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.greet();


//------------------------------------------------------------------------------------------------------


console.log("5" - 2);


//------------------------------------------------------------------------------------------------------


var a = 10;

(function () {
  console.log(a);
  var a = 20;
})();


//------------------------------------------------------------------------------------------------------


console.log(typeof a);
var a = 10;


//------------------------------------------------------------------------------------------------------


foo();

var foo = 10;

function foo() {
  console.log("Function");
}

foo(); 
console.log('hi'+true)


// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------TO LEARN--------------------------------------------------

// operators precedence
// object creation methods (freeze...and all)
// middleware 
// promises
// async await 
// Nan == Nan .false  (why)
// prototype chain
// this keyword
// types of function
