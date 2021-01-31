function a(callback){
    return callback();
}
function b(){
    return ("Hello!!!");

}
module.exports = {
    first:a,
    second:b
}
