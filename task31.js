function *generatorFn(n){
    for(let i=n-1;i>=0;i--){
        yield i;
    }

}
module.exports={
    generatorFn:generatorFn
};
