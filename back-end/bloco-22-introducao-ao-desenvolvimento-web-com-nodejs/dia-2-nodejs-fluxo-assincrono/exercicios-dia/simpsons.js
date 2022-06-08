// Importar o módulo fs/promises e realizar a leitura do arquivo dentro da função readAll.
const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf8')
  .then((fileContent) => {
// Converter o conteúdo do arquivo de JSON para um Array utilizando `JSON.parse`
    const simpsons = JSON.parse(fileContent);
// Mapear cada objeto do Array para uma string no formato correto
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

// Exibir as strings na tela
    strings.forEach((string) => console.log(string));
  });
}

function main() {
  readAll();
}

main();
