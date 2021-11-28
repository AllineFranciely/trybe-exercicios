const salarioBruto = 3000;
let inss;
let salarioBase;
let IR;
let salarioLiquido;
if (salarioBruto <= 1556.94) {
     inss = (0.08 * salarioBruto);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
     inss =  (0.09 * salarioBruto);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
     inss =  (0.1 * salarioBruto);
} else if (salarioBruto > 5189.82) {
     inss =  570.88;
}
salarioBase = (salarioBruto-inss);
if (salarioBase < 1903.98) {
    IR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = ((0,075 * salarioBase) - 142.80);
}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    IR = ((0,15 * salarioBase) - 354.80);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    IR = ((0,225 * salarioBase) - 636.13);
} else if (salarioBase > 4664.68) {
    IR = ((0,275 * salarioBase) - 869.36);
}
salarioLiquido = (salarioBase - IR);
console.log(inss);
console.log(IR);
console.log(salarioBase);
console.log(salarioLiquido);