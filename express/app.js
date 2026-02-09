
function a(id,callback){
    if(id===1){
        callback(null,'true')
    }else{
        callback('false',null)
    }
}
a(1,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})