function filter10(array){
    let arr=[];
    for(let x of array){
        if(x!=10){
            arr.push(x);
        }
    }
    return arr;



}
function filter5(array){
    let arr=[];
    for(let x of array){
        if(x!=5){
            arr.push(x);
        }
    }

    return arr;

}
function filter(array,callback){
    return callback(array);




}









module.exports = {
  ten: filter10,
  five: filter5,
  fil: filter
};
