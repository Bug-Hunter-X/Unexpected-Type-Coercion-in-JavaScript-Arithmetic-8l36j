# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common error in JavaScript related to type coercion in arithmetic operations.  JavaScript's loose typing can lead to unexpected results when functions are called with arguments of unintended types.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file demonstrates how to fix the issue by explicitly checking the types of the input arguments and performing type conversion when needed.

## How to reproduce

1. Clone the repository.
2. Open `bug.js` and run the code in a JavaScript environment (e.g., Node.js, browser's console).
3. Observe the unexpected output from arithmetic operations with mixed number and string arguments.

## Solution

The solution involves adding input validation and explicit type conversion to ensure that the arithmetic operations are performed correctly.