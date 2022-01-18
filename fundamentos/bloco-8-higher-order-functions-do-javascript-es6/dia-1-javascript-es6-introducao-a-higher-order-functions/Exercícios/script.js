// Exercício 1: 
const pessoaContratada = (nomeCompleto) => {
  const email= nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto, email: `${email}@trybe.com`};
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(pessoaContratada));

//Exercício 2: 
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random()*5) +1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try again!';
};

console.log(lotteryResult(2, numberChecker));