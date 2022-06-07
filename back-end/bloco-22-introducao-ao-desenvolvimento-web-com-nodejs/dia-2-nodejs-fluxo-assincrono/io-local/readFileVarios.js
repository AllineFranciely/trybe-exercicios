const fs = require('fs').promises;

Promise.all([
  fs.readFile('meu-arquivo.txt'),
  fs.readFile('meu-novo-arquivo.txt'),
])
  .then(([file1, file2]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength;
    console.log(`Lidos 2 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });