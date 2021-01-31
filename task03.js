function division(num1,num2,callback){
    let result;
    if(num2 === 0){
        result=null;
        return callback("num2 shouldn't be zero",result);
    }
    else{
        result=num1/num2;
        return callback("error",result);
    }
}
function callback(err,result){
    if(result === null){
        return err;
    }
    return result;

}
module.exports={
    div:division,
    call:callback

};
