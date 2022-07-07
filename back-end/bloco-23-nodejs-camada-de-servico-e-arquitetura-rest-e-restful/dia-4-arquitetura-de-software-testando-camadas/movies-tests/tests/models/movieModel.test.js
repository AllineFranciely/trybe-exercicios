const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
// const MoviesModel = {
//   create: () => {}
// };

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ inserId: 1 }]; // retorno esperado nesse teste
    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Procura um filme pelo "ID"', () => {
  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });
  after(async () => {
    connection.restore();
  });

  describe('quando o "ID" bão existe', () => {
    it('retorna null', async () => {
      const response = await MoviesModel.getById();
      expect(response).to.be.equal(null);
    });
  });

  describe('quando o "ID" existe', () => {
    before (() => {
      sinon.stub(MoviesModel, 'getById')
      .resolves(
        {
          id: 1,
          title: 'Example movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      );
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.not.empty;
    });
    
    it('o objeto possui as propriedas "id, title, releaseYear e directedBy"', async () => {
      const item = await MoviesModel.getById(1);
      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});

