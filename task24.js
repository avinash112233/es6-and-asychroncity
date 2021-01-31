
var fs=require("fs");
function count(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,"utf8",(err,data)=>{
            if (err)
            reject(err);
            else
            {
                let words=data.toString();
                let space=0;
                for(let i=0;i<words.length;i++){
                    if(words[i] === ' '){
                        space++;
                    }
                }
                resolve(space+1);
            }
            
        });
    })

}
module.exports={
    counter: count

};
