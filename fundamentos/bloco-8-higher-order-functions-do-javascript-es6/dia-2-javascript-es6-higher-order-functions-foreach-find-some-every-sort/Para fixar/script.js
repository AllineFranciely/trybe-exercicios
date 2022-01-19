const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//Exercício array.forEach: 
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// Exercícios array.find : 
// 1: 
const numbersFind = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbersFind.find((number) => number % 5 === 0 && number % 3 === 0);
}
console.log(findDivisibleBy3And5())

// 2: 
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());

// 3: 
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}

console.log(findMusic('31031685'))

// Exercicios array.dome e array.every: 
// 1: 
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name);
}

console.log(hasName(names2, 'Ana'))

// 2: 
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr2, minimumAge) => {
  return arr2.every((person) => person.age >= minimumAge);
}

console.log(verifyAges(people, 18));

// Exercícios Array.sort: 
// 1:
const pessoas = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

pessoas.sort((pessoaA, pessoaB) => pessoaA.age - pessoaB.age);

console.log(pessoas);

//2: 
const pessoas2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

pessoas2.sort((pessoaA, pessoaB) => pessoaB.age - pessoaA.age);

console.log(pessoas2);
