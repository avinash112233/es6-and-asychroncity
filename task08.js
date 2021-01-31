function someCalculation(number,callback){
    return callback(number);

}
function callback(number){
    var result=number/(number*2);
    return result;

}
module.exports={
    first:someCalculation,
    call:callback
};
