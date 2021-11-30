let numero = 11;
let divisores = 1;
for (index = 0; index < numero; index +=1) {
    let divisao = numero / numero[index];
    if (numero % index === 0) {
        divisores +=1;
}
}
if  (divisores === 2) {
    console.log("É um número primo");
} else {
    console.log("Não é um número primo");
}
