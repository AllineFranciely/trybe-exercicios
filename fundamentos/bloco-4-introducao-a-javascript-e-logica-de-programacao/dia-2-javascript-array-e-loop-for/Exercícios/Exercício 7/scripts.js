let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMenor = Infinity;
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < numeroMenor) {
        numeroMenor = numbers[index];
    }
}
console.log(numeroMenor);