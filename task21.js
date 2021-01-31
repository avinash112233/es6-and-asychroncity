async function addsync(number){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(number*2);
        },2000);
        
    });
} 
async function addAsync(x,y,z){
    let a = await addsync(x);
     let b = await addsync(y);
      let c = await addsync(z);
      return a+b+c;
}
addAsync(20,89,80).then(console.log);
module.exports = {
  sum: addAsync
};
