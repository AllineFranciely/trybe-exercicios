const anguloUm = 45;
const anguloDois = 91;
const anguloTres = 45;
const triangulo = (anguloUm + anguloDois + anguloTres);
if (anguloUm < 0 || anguloDois < 0 || anguloTres <0) {
    console.log("Ângulo inválido");
}
if (triangulo === 180) {
    console.log("true");
}else {
    console.log("false");
}