function  *fibonacciFn(){
   let firstElement=0;
   let secondElement=1;
   let thirdElement=0;
   while(true){
       yield thirdElement;
       firstElement=secondElement;
       secondElement=thirdElement;
       thirdElement=firstElement+secondElement;
   }

}
module.exports={
    fibonacciFn:fibonacciFn
};
