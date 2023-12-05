// Use a nested ternary operator to check that a number is positive, negative or zero. You have to print 
// “positive” if the number is positive and similarly for negative and zero also
let number = -14;

let result = (number > 0) ? "Positive" : (number < 0) ? "Negative" : (number == 0) ? "Zero" : "NaN";

console.log(`Entered number ${number} is ${result}`);