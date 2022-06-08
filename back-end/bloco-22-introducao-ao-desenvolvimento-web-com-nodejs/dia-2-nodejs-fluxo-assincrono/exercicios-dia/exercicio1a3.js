function doMath(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    // Adicionar validação para garantir que todos os valores são numéricos.
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      return reject(new Error('Apenas números são válidos'));
    }
    // Validar se o resultado é maior que 50 e resolver ou rejeitar a Promise.
    const result = (num1 + num2) * num3;

    if (result < 50) {
      return reject(new Error('Valor abaixo de 50'));
    }

    resolve(result);
  });
}

//Criar as funções para gerar números aleatórios e chamar doMath.
function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function getNumber() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);
  console.log(randomNumbers);

  // Para um código mais limpo e conseguir utilizar o async await, colocaremos o primeiro doMath dentro da função callDoMath e realizaremos as alterações necessárias.
  try {
    const result = await doMath(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

getNumber()

//Realizar chamada e lidar com o resultado.
// math(...getNumber)
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err.message));

//Chamar a função nas condições de entrada e verificar sua saída.
// doMath(10, 10, 10)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));

// doMath(1, 1, 'a')
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));

// doMath(1, 1, 1)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));