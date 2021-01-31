async function timeout (x)
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            resolve(`${x} ms timer finished`);
        },x);
    });
};

async function resolveAfter1sec ()
{
    console.log("starting fast promise");
    let result1 = await timeout(1000);
    return result1;
}

async function resolveAfter2sec ()
{
    console.log("starting slow promise");
    let result2 = await timeout(2000);
    return result2;
}

async function concurrentStart()
{
    console.log("==CONCURRENT START with await==");
    let resultAfter1Sec = await resolveAfter1sec();
    let resultAfter2Sec = await resolveAfter2sec();
    let promises = [];
    promises.push(resultAfter1Sec);
    promises.push(resultAfter2Sec);
   return Promise.all(promises)
}

concurrentStart().then(console.log)
.catch(console.log);
module.exports = concurrentStart;
