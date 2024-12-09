function foo(a, b) {
  // Use strict equality (===) to avoid type coercion issues
  return a === b; 
}
//Example usage:
console.log(foo(1, '1')); //false, because === does not perform type coercion
console.log(foo(1, 1));  // true
console.log(foo(true,1)); //false