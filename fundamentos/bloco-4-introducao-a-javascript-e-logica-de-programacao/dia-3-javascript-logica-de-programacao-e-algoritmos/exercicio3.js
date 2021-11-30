let n = 5;
let simbolo = "*";
let inputLine = "";
let posicao = n;
for (lineIndex = 0; lineIndex < n; lineIndex +=1) {
    for (columIndex = 0; columIndex <= n; columIndex +=1){
        if (columIndex < posicao) {
            inputLine = inputLine + " ";
        }else {
            inputLine = inputLine + simbolo;
        }
    }
    console.log(inputLine);
    inputLine = "";
    posicao -= 1;
}