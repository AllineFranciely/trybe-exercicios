import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;

    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              id="nome"
              name="nome"
              value={ nome }
              onChange={ (event) => this.handleInput(event) }
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ (event) => this.handleInput(event) }
            />
          </label>
        </p>
      </div>
    );
  }
}
export default App;
