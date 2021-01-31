var fs=require("fs");

function create(string){
    return new Promise((resolve,reject)=>{
        fs.writeFile("file1.txt",string,(err,data)=>{
                if (err)
                reject(err)
                else resolve("file created");
        });
    });



}
create().then(console.log).catch(console.log);






module.exports = {
  created: create
};
