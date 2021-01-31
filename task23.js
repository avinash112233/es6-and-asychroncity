var fs= require("fs");
function display(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,"utf8",(err,data)=>{
            err ? reject(err):resolve(data);
            // if(err)
            // reject(error);
            // else
            // resolve(data);
        });
    });

}
display().then(console.log).catch(console.log);
module.exports={
    content:display
};
