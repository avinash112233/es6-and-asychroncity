// let erro = error =>
// {
//     return new Promise ((resolve,reject)=>
//     {
//             setTimeout(()=>
//             {
//                 if(error)
//                 resolve("Error occured!");
//                 else reject("No error!");
//              },1000);
//     });
// };
// erro(false).then(message=>console.log(message)).catch(message=>console.log(message));
// module.exports={
//     erro:erro
// };
function erro(error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error)
                reject("Error occured!");
            else
                resolve("No error!");
        }, 1000);
    });
};
erro(false)
    .then(mess =>console.log(mess)).catch(mess =>console.log(mess));
module.exports=
{
    erro:erro
}

