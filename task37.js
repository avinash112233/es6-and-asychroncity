function *filter(array)
{
    let arr = array;
    let i =0;
    while(i<arr.length)
    {
        if(arr[i]%2!==0)
        { arr[i]=0;
        yield arr;}
        i++;
    }
}
module.exports =
{
    filterFn:filter
}
