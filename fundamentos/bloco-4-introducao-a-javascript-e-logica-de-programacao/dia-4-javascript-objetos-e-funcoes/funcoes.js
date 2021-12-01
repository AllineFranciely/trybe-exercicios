function operacoesComNumeros(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
}
operacoesComNumeros(30, 5);


function operacoesNumericas(a, b) {
    return (a + b);
    return (a - b);
    return (a * b);
    return (a / b);
    return (a % b);
}
console.log(operacoesNumericas(30,5));
/* O return termina a execução da função, 
por isso você precisaria retornar um tipo 
de variável que aceite mais de um valor, 
como array ou objeto/*