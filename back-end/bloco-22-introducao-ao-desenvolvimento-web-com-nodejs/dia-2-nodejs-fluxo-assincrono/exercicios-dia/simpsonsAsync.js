const fs = require('fs').promises;

async function readAllAsyncAwait() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id}, ${name}`);

  strings.forEach((string) => console.log(string));
}

// Criar a função e realizar a leitura do arquivo e a conversão do JSON em objeto.
async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  // Realizar a busca pelo Simpson desejado e, caso não encontrar, disparar um erro.
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  if (!chosenSimpson) {
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
    * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
    * tendo como motivo o que passarmos para o `throw`.
    * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
    */
    throw new Error('id não encontrado');
  }
  // Caso a personagem exista, resolver a Promise com suas informações.
  /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
  * `return` aciona o fluxo de sucesso e resolve a Promise.
  * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
  * dentro do executor de uma Promise.
  */
  return chosenSimpson;
}
// Para receber o retorno dessa função assíncrona, ou seja, a resolução dessa promise, precisamos usar ou `await` ou `.then` ao executá-la. Assim:
// Opção 1:
async function main() {
  const simpson = await getSimpsonById(1);
  console.log(simpson);
}

// Opção 2:
// function main() {
//   getSimpsonById(1)
//     .then((simpson) => console.log(simpson));
// }

main();
