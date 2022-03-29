import React from 'react'
import { connect } from 'react-redux';
import { fetchDog } from './redux/store';

// App apenas faz a requisição externa (fetch) então só tem 1 componente, o App.

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
          style={{ display: 'block' }}
          onClick={fetchDog}
          type="button"
        >
          Novo Doguinho
        </button>
        <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

// MapStateToProps para trazer o resultado do fetch e o valor da variável isFetching. que está na store.
const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching});

// mapDispatchToProps para enviar a action ao clicar no botão.

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

  export default connect(mapStateToProps, mapDispatchToProps)(App);
  