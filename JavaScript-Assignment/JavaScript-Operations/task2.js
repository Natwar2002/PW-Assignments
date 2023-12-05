// Que2. . Describe the categorization of operators in JavaScript based on their functionality. Provide examples for each category.

// Solution: Operators in JavaScript can be categorized based on their functionality into several groups. Here are the main categories:

// 1. Arithmetic Operators: Performs mathematical Operations on numbers.
// Example:

let a = 5;
let b = 3;

let sum = a + b;  //Addition (+)
let substraction = a - b;   // Substraction (-)
let multiplication = a * b;   // Multiplication (*)
let division = a / b;    // Division (/)
let moduls = a % b;     // Modulus (%)


// 2. Comparison Operators: Compares two values and returns a Boolean
// Example:

let x = 10;
let y = 20;

let isEqual = x == y;     // Equal to (==)
let isNotEqual = x != y;    // Not equal to (!=)
let isGreaterThan = x > y;    // Greater than (>)
let isLessThan = x < y;     // Less than (<)
let isGreaterOrEqual = x >= y;    // Greater than or equal to (>=)
let isLessOrEqual = x <= y;     // Less than or equal to (<=)
let isStrictEqual = x === y;    // Strict equal to (===)
let isStrictNotEqual = x !== y;    // Strict not equal to (!==)

// 3. Logical Operators: Performs logical operations on boolean values
// Example:

let p = true;
let q = false;

let andResult = p && q;   // Logical AND (&&)
let orResult = p || q;   // Logical OR (||)
let notResult = !p;   // Logical NOT (!)

// 4. Assignment Operators: These operators are used to assign values to variables.
// Example:
let num = 10;

num += 5;   // Equivalent to: num = num + 5;
num -= 3;   // Equivalent to: num = num - 3;
num *= 2;   // Equivalent to: num = num * 2;
num /= 4;   // Equivalent to: num = num / 4;

// 5. Unary Operators: These operators work on a single operand.
// Example:
let n = 5;

n++;   // Increment by 1 (Post-increment)
++n;   // Increment by 1 (Pre-increment)
n--;   // Decrement by 1 (Post-decrement)
--n;   // Decrement by 1 (Pre-decrement)

//6. Conditional (Ternary) Operator: This operator is a short-hand way of writing a conditional expression.
// Example:
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";

// 7. Bitwise Operators: These operators perform bitwise operations on binary representations of numbers.
// Examples:
let c = 5;   // Binary representation: 0101
let d = 3;   // Binary representation: 0011

let bitwiseAnd = c & d;   // Bitwise AND (&) -> 0001 (decimal: 1)
let bitwiseOr = c | d;   // Bitwise OR (|) -> 0111 (decimal: 7)
let bitwiseXor = c ^ d;   // Bitwise XOR (^) -> 0110 (decimal: 6)
let bitwiseNotA = ~c;    // Bitwise NOT (~) -> 1010 (decimal: -6)
let leftShift = c << 1;   // Left shift (<<) -> 1010 (decimal: 10)
let rightShift = c >> 1;   // Right shift (>>) -> 0010 (decimal: 2)
