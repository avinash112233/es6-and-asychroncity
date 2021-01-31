function fizz(array){
    let count=0;
    array.forEach(function(element){
        if(element%3 === 0){
            count++;
        }
    })
    return count;
}
function buzz(array){
     let count=0;
    array.forEach(function(element){
        if(element%5 ===0){
            count++
        }
        
    })
    return count; 
}
function filter(array,callback){
    return callback(array);
}
module.exports={
    fizz:fizz,
    buzz:buzz,
    fil:filter
};
