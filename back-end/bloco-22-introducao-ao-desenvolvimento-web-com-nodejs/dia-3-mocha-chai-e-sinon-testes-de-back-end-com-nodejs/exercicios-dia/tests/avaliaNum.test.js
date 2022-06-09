const { expect } = require('chai');

const avaliaNum = require('../avaliaNum');
const num = 5;

describe('avaliaNum', () => {
  describe('Quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const answer = avaliaNum(8);

        expect(answer).to.be.a('string');
      });
      it('é igual a "positivo"', () => {
        const answer = avaliaNum(8);

        expect(answer).to.be.equals('positivo');
      });
    }); 
  });
  describe('Quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const answer = avaliaNum(-9);
        
        expect(answer).to.be.a('string');
      });
      it('é igual a "negativo"', () => {
        const answer = avaliaNum(-9);

        expect(answer).to.be.equals('negativo')
      });
    });
  });
  describe('Quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const answer = avaliaNum(0);

        expect(answer).to.be.a('string');
      });
      it('é igual a "neutro"', () => {
        const answer = avaliaNum(0);

        expect(answer).to.be.equals('neutro');
      });
    });
  });
  describe('Quando o parâmetro não é um número', () => {
    describe('a resposta é', () => {
      it('é uma "string"', () => {
        const answer = avaliaNum('a');

        expect(answer).to.be.a('string');
      });
      it('é igual a "o parâmetro deve ser um número"', () => {
        const answer = avaliaNum('a');

        expect(answer).to.be.equals('o parâmetro deve ser um número');
      });
    });
  });
});