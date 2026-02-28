
"CAT" && "DOG" && "1" || "2"

//------------------------------------------------------------------------------------------------------

Promise.resolve(5)
  .then((val) => {
    console.log(val);
  })
  .then((val) => {
    console.log(val);
  });

//------------------------------------------------------------------------------------------------------

async function test(){
return 1
}
console.log(test())


// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------TO LEARN--------------------------------------------------

//error handling in detail (process.on..sigInt, sigTerm., process.exit) , 
//eror handling types uncaught, unhandledrpromise, ......
// learn all error handling and implement in interview portal project, create global error middleware class and use in app.js at end 
// node architecture learn in detail, threads and all., sir 


// cluster module if got time


