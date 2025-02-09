function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return a - b;
}

console.log(foo(1, 2)); // Output: 3
console.log(bar(2, 1)); // Output: 1

// The bug: Unexpected behavior when calling foo with non-numbers
console.log(foo('1', '2')); // Output: '12' (string concatenation)
console.log(foo(1, '2'));   // Output: '12' (string concatenation)
console.log(foo('1', 2));   // Output: '12' (string concatenation)

// The bug: Unexpected behavior when calling bar with non-numbers
console.log(bar('2', '1')); // Output: 1 (string subtraction)
console.log(bar(2, '1'));   // Output: 1 (string subtraction)
console.log(bar('2', 1));   // Output: 1 (string subtraction)