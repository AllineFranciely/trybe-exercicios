const custo = 100;
const valorVenda = 200;
const impostoCusto = (0.2 * custo) ;
let custoTotal = (custo + impostoCusto);
let lucro = (valorVenda - custoTotal);
let lucroTotal = (lucro * 1000);
console.log(lucroTotal);