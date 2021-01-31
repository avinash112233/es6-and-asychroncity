var fs = require("fs");
let readFile = (path)=>
{
    return new Promise((resolve,reject)=>
    {
        fs.readFile(path,(err,data)=>
        {
            if(err) reject("No file found")
            else resolve(data.toString());
        });
    })
}
readFile("helper.txt")
.then(data=>console.log(data))
.catch(err=>console.log(err));
module.exports=
{
    readFile:readFile
};
