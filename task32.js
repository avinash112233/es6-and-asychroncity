function *evenNumberFn(){
    for(let i=0;i<=50;i++){
        if(i%2 === 0){
            yield i ;
        }
    }

}
module.exports={
evenNumberFn:evenNumberFn
};
