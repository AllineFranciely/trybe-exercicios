function retornaMenorValor(numeros) {
    let menorValor = 0;
    for (index=0; index <= numeros.length; index +=1) {
    if (numeros[index] < numeros[menorValor]) {
        menorValor = index;
    } 
    }
    return menorValor;
}   
console.log(retornaMenorValor([2, 4, 6, 7, 10, 0, -3]));