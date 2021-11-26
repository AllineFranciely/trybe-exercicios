// Exercício 1 
const primeiroNumero = 5;
const segundoNumero = 7;
console.log(primeiroNumero + segundoNumero);
console.log(primeiroNumero - segundoNumero);
console.log(primeiroNumero * segundoNumero);
console.log(primeiroNumero / segundoNumero);
console.log(primeiroNumero % segundoNumero);

//Exercício 2
const firstNumber = 6;
const secondNumber = 10;
if (firstNumber > secondNumber){
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}

// Exercício 3
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

//Exercício 4 
const recebeNumero = 0;
if (recebeNumero > 0) {
    console.log("Positive");
} else if (recebeNumero < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Exercício 5
const anguloUm = -45;
const anguloDois = 90;
const anguloTres = 45;
const triangulo = (anguloUm + anguloDois + anguloTres);
if (triangulo === 180) {
    console.log("true");
}else {
    console.log("false");
}

//Exercíci0 6 rei, rainha, bispo, cavalo, torre, peão 
const pecaXadres = "Cavalo";
let result = pecaXadres.toLowerCase();
if (result === "torre") {
    console.log("Vertical e horizontal");
} else if (result === "cavalo") {
    console.log("Movimento em L");
} else if (result === "bispo") {
    console.log("Diagonal")
} else if (result === "rainha") {
    console.log("Vertical, horizontal e diagonal");
} else if (result === "rei") {
    console.log("1 casa vertical e horizontal")
} else if (result === "peão") {
    console.log("1 casa vertical")
} else {
    console.log("Peça inválida")
}