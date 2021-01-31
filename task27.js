async function timeout(delayTime)
{
    return new Promise((resolve=>
        {
            setTimeout(()=>
            {
                resolve();

            },delayTime)
        }));
};

async function resolveAfter1Second()
{
    await timeout(1000);
    return ("1 sec");
};

async function resolveAfter2Second ()
{
    await timeout(2000);
    return ("2 sec");
};

async function sequentialStart()
{
    let resultAfter1sec = await resolveAfter1Second();
    let resultAfter2sec = await resolveAfter2Second();
    let obj = {
        slow:resultAfter2sec,
        fast:resultAfter1sec
    }
    return obj; 

}
sequentialStart()
.then(console.log);
module.exports = 
    sequentialStart
    ;
