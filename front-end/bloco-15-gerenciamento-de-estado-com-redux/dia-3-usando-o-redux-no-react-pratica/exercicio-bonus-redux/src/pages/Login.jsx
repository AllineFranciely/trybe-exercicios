import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { myLoginAction } from '../redux/actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={event => this.setState({ email: event.target.value })}
            placeholder="email"
          />
          <input
            type="password"
            onChange={event => this.setState({ senha: event.target.value })}
            placeholder="senha"
          />
        </div>
        <Link
          to="/clients"
          onClick={() => this.props.loginDispatch({ email, senha })}>
          Entrar
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginDispatch: event => dispatch(myLoginAction(event))
});

export default connect(null, mapDispatchToProps)(Login);
