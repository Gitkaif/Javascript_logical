const express = require('express');

const app = express();
app.use(express.json());


app.use((req,res,next)=>{
    
    const{name,email} = req.body
    if(!name || !email){
        return res.status(404).json({message:'incomplete data...'})
    }
    req.body.name = name.toUpperCase()
    //res.status(201).json({message:'success'})
    next();
})



app.post('/add',(req,res)=>{
    console.log(req.body)
    res.status(201).json({message:'success'})
})

app.listen(3000,()=>{
    console.log('server ois running');
    
})