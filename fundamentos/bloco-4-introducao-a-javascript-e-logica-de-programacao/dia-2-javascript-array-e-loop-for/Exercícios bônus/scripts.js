let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function(a,b){
    return a - b;
});
console.log(numbers);

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeros.sort(function(a,b){
    return b - a ;
});
console.log(numeros);


let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numero = 1;
for (index = 0; index < number.length; index +=1) {
   numero *= number[index]
   console.log(numero);
}   
    
