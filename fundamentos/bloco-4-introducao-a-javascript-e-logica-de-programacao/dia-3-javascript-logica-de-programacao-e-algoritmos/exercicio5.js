let base = 7;
let meio = (base + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;
let simbolo = "*";
for (let linha = 1; linha <= meio; linha +=1) {
    let outputLinha = "";
    for (let coluna = 1; coluna <= base; coluna +=1) {
        if (coluna == ladoEsquerdo || coluna == ladoDireito || linha == meio) {
            outputLinha += simbolo;
        } else {
            outputLinha += " ";
        }
    }
    ladoEsquerdo -=1;
    ladoDireito +=1;
    console.log(outputLinha);
}