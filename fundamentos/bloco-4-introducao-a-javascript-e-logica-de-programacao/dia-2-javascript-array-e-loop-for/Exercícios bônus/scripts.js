//Exercício bônus 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function(a,b){
    return a - b;
});
console.log(numbers);

//Exercício bônus 2
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeros.sort(function(a,b){
    return b - a ;
});
console.log(numeros);

//Exercício bônus 3
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < number.length; index += 1) {
  if (index + 1 < number.length) {
    newArray.push(number[index] * number[index + 1]);
  } else {
    newArray.push(number[index] * 2);
  }
}

console.log(newArray);