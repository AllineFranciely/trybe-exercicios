import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Olá, seja bem vindo!
      <Link to="/Login">Por favor, faça o login</Link>
      </div>
    );
  }
}

export default Home;
