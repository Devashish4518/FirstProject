//Immediately invoked function expression
// IIFE is used to avoid the problem caused by global scope pollution
(function chai() {
  console.log(`Hello Everyone`);
})();

((name) => {
  console.log(`DB connect to ${name}`);
})("Devashish");
