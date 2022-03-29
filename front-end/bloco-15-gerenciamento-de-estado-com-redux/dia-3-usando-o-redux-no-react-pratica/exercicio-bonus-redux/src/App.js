import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from '../src/redux/store/index';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Clients from '../src/pages/Clients';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/clients" component={Clients} />
      </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
