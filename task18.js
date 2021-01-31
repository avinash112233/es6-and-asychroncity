function loadData(value){
    return new Promise((resolve,reject)=>{
        if(value <= 0){
        throw new Error("Value must be greater than 0");
        }
        else
        resolve({data: value});
        
    });
}
loadData(9)
.then(console.log)
.catch(console.log);
module.exports={
    data:loadData
};
