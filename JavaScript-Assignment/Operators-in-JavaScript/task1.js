// Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.

// Solution: In JavaScript, the ternary operator, also known as the conditional operator, provides a concise way to write a simple `if-else` statement in a single line. The ternary operator is often used for simple conditional assignments or inline conditional expressions where a compact syntax is desired.
// Syntax:  condition ? statement-if-true : statement-if-false;
// Example:

let number = 20;
let result = number % 2 == 0 ? "Even" : "Odd";
console.log(`The number ${number} is ${result}.`);