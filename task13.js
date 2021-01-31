function up(a, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error)
                reject("Error occured!");
            else
                resolve(a.toUpperCase());
        }, 500);
    });
}
up("hello world!",false).then(mess=>console.log(mess)).catch(mess=>console.log(mess));
module.exports=
{
    up:up
}
