const numeroUm = 3;
const numeroDois = 7;
const numeroTres = 5;
let numeroMaior;
if (numeroUm > numeroDois && numeroUm > numeroTres) {
    numeroMaior = numeroUm;
} else if (numeroDois > numeroUm && numeroDois) {
    numeroMaior = numeroDois;
} else if (numeroTres > numeroUm && numeroTres > numeroDois) {
    numeroMaior = numeroTres
}
console.log(numeroMaior);