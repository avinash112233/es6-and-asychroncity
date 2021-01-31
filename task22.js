
let arr1=[];
function fun(char){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(char);
            

        },1000);
    });

}
async function adding(array){
    for(let i=0;i<array.length;i++){
        arr1.push(await fun(array[i]));
    }
    return arr1;
}
module.exports={
    push:adding
};
