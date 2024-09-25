// A
let num;

do{
    num = parseInt(prompt("Enter a number between 1 and 10:"));
} while (num < 1 || num > 10);

console.log(`You entered: ${num}`);
