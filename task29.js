function *generatorFn()
 {
    yield 'Hello World!!!';
    yield 'This is an example of a generator';
    yield 'Here we use the yield keyword for creating a stopping point';
    yield 'And we move from one stopping point to other by using .next()';
    yield  'We can get the value by appending .value after .next()'
    yield  'Also look at the done value - it stays false until there is no stopping point ';
    return  'Also in the last, we can use the return keyword if we want';
 }
 module.exports=
 {
     generatorFn:generatorFn
 }
