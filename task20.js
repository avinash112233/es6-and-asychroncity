
async function func1(s1){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(s1);
        },5000);
    });

}
async function func2(s2)
{
    return new Promise(resolve =>
    {
        
            resolve(s2);
    });

}
async function concatenated (s1,s2){
    const a=await func1(s1);
    const b=await func2(s2);
    return a+b;




} 
concatenated().then(console.log);
module.exports = {
  concatenated: concatenated
};
