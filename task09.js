let s="hello";
let hello = x =>{
    return new Promise((resolve,reject) => {
        if (x===s) resolve("Hello world!");
        else reject("Bye!")
    })
}

hello().then(message =>console.log(message)).catch(message =>console.log(message));
module.exports={
    s:s,
    hello:hello
};
