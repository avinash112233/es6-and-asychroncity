function *generator1(Value)
{
    let firstElement = 0;
    let secondElement = 1;
    let thirdElement = 0;
    while(true)
    {
        if(thirdElement>Value) break;
            yield thirdElement;
            firstElement = secondElement;
            secondElement = thirdElement;
            thirdElement = firstElement+secondElement;

    }
}
function *generator2(fibbArray)
{
    let i =0;
    while(i<fibbArray.length)
    {
        if(fibbArray[i]%2===0)
        {
            fibbArray[i]=0;
            yield fibbArray;
        }
        i++;
    }
}

function function3(maxValue)
{
    let arrFinal = [];
    let filterdFibb =[];
    let arr = generator1(maxValue);
    for(let x of arr)
    {
        arrFinal.push(x);
    }
    console.log(arrFinal);
    let filterdArr = generator2(arrFinal);
    for(let x of filterdArr)
    {
        filterdFibb.push(x);
    }
    console.log(filterdFibb);
    return filterdFibb;
}
module.exports =
{
      fibonacciFn: generator1,
      filterFn: generator2,
      checkFn: function3
};
;
