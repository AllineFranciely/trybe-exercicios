// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Morango', 'Lichia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Cahntilly', 'Confetes'];

const fruitSalad = (fruit, additional) => {
  const specialSalad = [...specialFruit, ...additional];
  return specialSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));