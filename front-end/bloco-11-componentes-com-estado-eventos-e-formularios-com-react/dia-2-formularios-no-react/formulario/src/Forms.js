import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      emiail: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    const { email } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismo?</h1>
        <form className="form">
          <label htmlFor="name">
            Nome:
            <input 
            id="name"
            name="name"
            type="text"
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
            id="email"
            name="email"
            type="email"
            onChange={ this.handleChange }
            value={ email }
            />
          </label>
          <label htmlFor="age">
            Idade: 
            <select
            id="age"
            name="age"
            defaultValue=""
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
          <label htmlFor="anecdote">
            Anedota:
            <textarea id="anecdote" name="anecdote" />
          </label>
        </form>
      </div>
    );
  }
}

export default Forms;