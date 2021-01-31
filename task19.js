function f1(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("done!");
        },1000);
    });

}
async function asyncfunction(){
    let result=await(f1);
    return result;
}
asyncfunction().then(console.log);


module.exports = {
  func: f1
};
