const fs = require('fs').promises;

fs.writeFile('./meu-novo-arquivo.txt', 'Oi, eu sou o Goku! :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    console.error(err);
  });
