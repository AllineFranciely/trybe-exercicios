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