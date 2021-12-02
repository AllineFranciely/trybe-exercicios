function retornaMaiorValor(numeros) {
    let maiorValor = 0;
    for (index=0; index <= numeros.length; index +=1) {
    if (numeros[index] > numeros[maiorValor]) {
        maiorValor = index;
    } 
    }
    return maiorValor;
}   
console.log(retornaMaiorValor([2, 3, 6, 7, 10, 1]));