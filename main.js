const input = require('readline-sync');

let word = input.question("Enter a word or phrase: ");
console.log("You entered: " + word);

let index = input.questionInt("Enter an index number: ");

let character = word[index];

console.log("The character at index " + index + " is: " + character);