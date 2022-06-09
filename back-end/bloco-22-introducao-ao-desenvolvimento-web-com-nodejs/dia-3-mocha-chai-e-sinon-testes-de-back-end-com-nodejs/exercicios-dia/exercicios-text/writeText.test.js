const fs = require('fs');
const sinon = require('sinon');
 const { expect } = require('chai');

 const writeText = require('./writeText');

 describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

   describe('a resposta', () => {
     it('é uma "string"', () => {
      const resposta = writeText('arquivo.txt', '#vqv conteúdo');

       expect(resposta).to.be.a('string');
     });

     it('é igual a "ok"', () => {
       const resposta = writeText('arquivo.txt', '#vqv conteúdo');

       expect(resposta).to.be.equals('ok');
     });
   });
});