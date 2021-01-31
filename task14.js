let ar1=[1,2,3,4];
let ar2=[0];
let arrpush =(ar1,ar2)=>{
    return new Promise((resolve,reject)=>{
        let arr2=ar2.concat(ar1);
        setTimeout(()=>{
            if(arr2.length>1){
                resolve(arr2);
            }
            else
                reject("Error!");
            
        },1000);

    });

}
arrpush().then(msg=>console.log(msg)).catch(msg=>console.log(msg));
module.exports = {
  ar1: ar1,
  ar2: ar2,
  arrpush: arrpush
};
