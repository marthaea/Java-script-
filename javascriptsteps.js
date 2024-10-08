//declaring variables
let name = 'John Doe';
const PI = 3.14;
var age = 30;

//datatypes
//Number
let num = 42;
//string
let str = 'hello';
//Boolean
let isAdmin = true;
//Null
let nullVar = null;
//Undefined
let undefinedVar = undefined;
//Array
let colors = ['red', 'green', 'blue'];
//Object
let person = { name: 'Martha', age: 20}

//if statements
let x = 5;
if (x > 10) {
    console.log('x is greater than 10')
} else {
    console.log('x is less than or equal to 10')
}

//switch statements
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the day of the week', (answer) => {
    switch (answer.trim().toLowerCase()) {
        case 'Monday':
          console.log('Today is Monday')
          break;
        case 'Tuesday':
          console.log('Today is Tuesday')
          break;
        case 'Wednesday':
          console.log('Today is Wednesday')
          break;
        case 'Thursday':
            console.log('Today is Thursday')
          break;
        case 'Friday':
            console.log('Today is Friday')
          break;
        case 'Saturday':
            console.log('Today is Saturday')
          break;
        case 'Sunday':
            console.log('Today is Sunday')
          break
        default:
            console.log('Invalid input of the days of the week');
    }

   rl.close();
}
);