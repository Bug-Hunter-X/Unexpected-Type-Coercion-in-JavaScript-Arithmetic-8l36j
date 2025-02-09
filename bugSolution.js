function foo(a, b) {
  // Input validation and type conversion
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: Arguments must be numbers';
  }

  return a + b;
}

function bar(a, b) {
  // Input validation and type conversion
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: Arguments must be numbers';
  }

  return a - b;
}

console.log(foo(1, 2)); // Output: 3
console.log(bar(2, 1)); // Output: 1

// Correct handling of non-number inputs
console.log(foo('1', '2')); // Output: 3
console.log(foo(1, '2'));   // Output: 3
console.log(foo('1', 2));   // Output: 3

console.log(bar('2', '1')); // Output: 1
console.log(bar(2, '1'));   // Output: 1
console.log(bar('2', 1));   // Output: 1

console.log(foo('abc', 2)); // Output: Invalid input: Arguments must be numbers
console.log(bar(2, 'def')); // Output: Invalid input: Arguments must be numbers