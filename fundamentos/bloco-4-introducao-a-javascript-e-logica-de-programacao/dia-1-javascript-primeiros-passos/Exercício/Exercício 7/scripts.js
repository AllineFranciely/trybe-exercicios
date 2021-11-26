let nota = 600;
let conceito;
if (nota <= 100 && nota >= 90) {
    conceito = "A";
} else if (nota < 90 && nota >= 80) {
    conceito = "B";
} else if (nota < 80 && nota >= 70) {
    conceito = "C";
} else if (nota < 70 && nota >= 60) {
    conceito = "D";
} else if (nota < 60 && nota >= 50) {
    concieto = "E";
} else if (nota >= 0 && nota < 50) {
    conceito = "F";
} else {
    conceito = "Erro";
}
console.log(conceito);