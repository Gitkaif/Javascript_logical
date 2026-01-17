for(let i=0; i<=4; i++){
    let row = " ";
    for(let j=0; j<=4; j++){
        if(i==0 || i==4 || j==0 || j==4){
            row = row+"*";
            
        }else{
            row+=" ";
        }
    }console.log(row);
    
}