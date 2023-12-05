// Que.3 Differentiate between unary, binary, and ternary operators in JavaScript. Give examples of each.

// Solution: n JavaScript, operators are categorized based on the number of operands they work with:
// 1. Unary Operators: Unary operators work with a single operand. They perform operations on a single value.
// Example:
let x = 5;

// Increment Operator
let negatedX = x++;  // Increase the value by one

// Decrement Operator
let strNumber = "10";
let number = +strNumber;  // Decrease the value by one

// 2. Binary Operators: Binary operators work with two operands. They perform operations that involve two values.
// Example:
let a = 10;
let b = 6;

// Substraction (-) substracts two values
let substraction = a - b;     // Substraction will be 4

// 3. Ternary Operator: The ternary operator is unique in that it works with three operands. It's a conditional operator that evaluates a 
// condition and returns one of two values based on whether the condition is true or false.
// Example:
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
// If age is greater than or equal to 18, canVote will be "Yes", otherwise it will be "No"
