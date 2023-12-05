function factorial(number) {
    if (number == 1 || number == 0) {
        return 1
    } else {
        return number * factorial(number-1)
    }
}

let number1 = 5
let number2 = 8

console.log(`Factorial of the number : ${number1} is : ${factorial(number1)}`);
console.log(`Factorial of the number : ${number2} is : ${factorial(number2)}`);