// Describe the usage of the comma operator in JavaScript and provide an example
// Solution : In JavaScript, the comma operator `,` is used to evaluate multiple expressions in a single statement. It evaluates each 
// expression from left to right and returns the value of the last expression. The primary use of the comma operator is to include 
// multiple expressions in a situation where only one expression is expected. This is commonly used to provide multiple updaters to a `for` loop's afterthought.
// Syntax: expression1, expression2, ..., expressionN;
// Example:

let x = 1, y = 2, z = 3;

// The comma operator is used in the initialization of the variable 'sum'
let sum = (x += 1, y += 2, z += 3);

console.log(sum);  // Output: 6
console.log(x, y, z);  // Output: 2 4 6