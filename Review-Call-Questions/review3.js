//-------------------------------------Rahul Singh------------------------------------------------------


console.log('cst' && 'dog')

//------------------------------------------------------------------------------------------------------

console.log('cst' && 0 &&  'dog')

//------------------------------------------------------------------------------------------------------

console.log(0 ||  'dog' || 0 || 'cat')


//------------------------------------------------------------------------------------------------------

async function foo() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
foo();
console.log(3);


//------------------------------------------------------------------------------------------------------

Promise.all([
  Promise.resolve("A"),
  Promise.reject("B"),
  Promise.resolve("C")
])
.catch(console.log);


//------------------------------------------------------------------------------------------------------

Promise.reject("error")
  .then(() => console.log("then"))
  .catch(() => console.log("catch"))
  .then(() => console.log("after"));

//------------------------------------------------------------------------------------------------------


Promise.resolve(1)
  .then(x => x + 1)
  .then(x => {
    console.log(x);
    return x * 2;
  })
  .then(console.log);


//------------------------------------------------------------------------------------------------------

bar();
var bar = function () {
  console.log("Hi");
};
console.log(bar)


//------------------------------------------------------------------------------------------------------

a.x = 20;             // 'x' is a property key, not a standalone variable.
console.log(a.x);    // JS looks for variable 'a', not variable 'x'.  so a is not defined here






// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------TO LEARN--------------------------------------------------

// objects creation ways    ✅done
// prototype chain   ✅done
// node architecture with event loop phases , libuv library also 
// operators 
// recursion
// jwt token error handling 
// jwt in detail
// promises then chaining
// rest/spread operators