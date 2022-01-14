const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNoite = (obj, key, value) => {
  obj[key] = value;
};

addNoite(lesson2, 'turno', 'noite');

const listaKeys = (obj) => Object.keys(obj);
console.log(listaKeys(lesson1));

const tamanhoObjeto = (obj) => Object.keys(obj).length;
console.log(tamanhoObjeto(lesson1));

const listaValues = (obj) => Object.values(obj);
console.log(listaValues(lesson1));

const todasLições = Object.assign({}, { lesson1, lesson2, lesson3});


const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numerosEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(todasLições));

const getValueNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueNumber);

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEsqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));