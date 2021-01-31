let add =(x,y)=>{
    return new Promise((resolve,reject)=>{
        if (x>=0)
        resolve(x+y);
        else
        reject("x should be greater than 0");
    })

}
add().then((message)=>console.log(message)).catch((message)=>console.log(message));
module.exports={
    add:add
};
