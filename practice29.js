function* generatorFn() {
  yield "Hello World!!!"; // [1]
  yield "This is Konfinity Infotech !!";
  return "Learn to code, talk is cheap";
}

var gen = generatorFn();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
