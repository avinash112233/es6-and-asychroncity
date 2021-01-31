function add(x,y){
    return (x+y);

}
function data(x,y,callback){
    return callback(x,y);

}
module.exports={
    add:add,
    data:data
}
