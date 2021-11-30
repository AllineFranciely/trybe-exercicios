let base = 5;
let simbolo = "*";
let inputLine = "";
let meio = (base +1 ) / 2;
let posicaoEsquerda = meio;
let posicaoDireita = meio;
for (lineIndex = 0; lineIndex <= meio; lineIndex +=1) {
    for (columIndex = 0; columIndex <= base; columIndex +=1){
        if (columIndex > posicaoEsquerda && columIndex < posicaoDireita) {
            inputLine = inputLine + simbolo;
        }else {
            inputLine = inputLine + " ";
        }
    }
    console.log(inputLine);
    inputLine = "";
    posicaoDireita += 1;
    posicaoEsquerda -= 1;
}