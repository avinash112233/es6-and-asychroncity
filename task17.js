var fs = require("fs");
let readFile = (fname) =>
{
    return new Promise((resolve,reject)=>
    {
        fs.readFile(fname,(err,data)=>
        {
            if(err)reject("No file found")
            else resolve(data.toString());
        })
    })
}
let writeFile =(fname,s)=>
{
    return new Promise((resolve,reject)=>
    {
        fs.writeFile(fname,s,(err,data)=>
        {
            if(err) reject("Failed")
            else resolve("Done!");
        })
    })
}
writeFile()
.then(message =>console.log(message))
.catch(err =>console.log(err));

readFile( )
.then(data =>console.log(data))
.catch(err =>console.log(err));

module.exports =
 {
      readFile: readFile,
      writeFile: writeFile
};
    

