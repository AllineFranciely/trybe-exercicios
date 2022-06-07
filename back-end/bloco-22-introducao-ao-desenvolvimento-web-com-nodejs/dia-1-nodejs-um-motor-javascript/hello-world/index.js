const readline = require('readline-sync');
const name = readline.question('Qual o seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
console.log(`Hello, ${name}! You are ${age} years old`);