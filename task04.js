function add(x,y){
    return (x+y);
}
function sub(x,y){
    return (x-y);
}
function calc(x,y,callback){
    return callback(x,y,add || x,y,sub);
}

console.log(calc(5,2,add));
module.exports={
    add:add,
    sub:sub,
    calc:calc

}
