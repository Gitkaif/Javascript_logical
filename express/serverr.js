// const express = require('express')
// const app = express()





// app.listen(3000,()=>{
//     console.log('server running')
// })



















function calculator(num1 , num2 , sign , cb){

    if(sign === "/" && num2 === 0){
        cb(new Error("can not divide by zero.") , null)
    }
    else{
        
        cb(null , num1 + num2 )
    }
}

calculator(1 , 0 , "+" , (err , res) => {
    if(err){
        throw new Error("Error")
    }
    else{
        console.log(res)
    }
})

