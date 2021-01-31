
let bina = x =>{
    return new Promise((resolve,reject)=>
    {
        if (x >= 0)
            resolve("YES");
        
             else reject("NO")
        
           
       
    })
}
bina().then(message=>console.log(meessage)).catch(message=>console.log(message));
module.exports={
    bina:bina
};
