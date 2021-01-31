const fetch = require("node-fetch");
async function *asyncRandomNumbers()
{
    URL = "https://www.random.org/decimal-fractions/?num=1&dec=10&col=1&format=plain&rnd=new";
    while(true)
    {
        let num = await fetch(URL).then(res=>res.json());
        var finalNum = Number(num);
        let n = Number(finalNum*10);
        //console.log(n);
        yield n;
    }
}

module.exports =
{
    asyncRandomNumbers:asyncRandomNumbers   
}
