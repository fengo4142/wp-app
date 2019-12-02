import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from "./store";
import history from "./utils/historyUtils";

import AuthService from './services/auth.service';
import CustomLayout from './containers/CustomLayout';
import LoginForm from './pages/Login';
import Customer from './pages/Contacts/Customer';
import ClientProcess from './pages/ClientProcess';
import Home from './pages/Home';
import '../scss/index.scss';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        AuthService.isLoggedIn() ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Switch>
              <Route exact path="/" component={() => <Redirect to="/home" />} />
              <Route exact path="/login" component={LoginForm} />              
              <CustomLayout>
                  <PrivateRoute exact path="/home" component={Home} />
                  <PrivateRoute exact path="/client_process" component={ClientProcess} />
                  <PrivateRoute exact path="/customer" component={Customer} />
                  <PrivateRoute exact path="/organization" component={Customer} />
              </CustomLayout>
            </Switch>
        </Router>
      </Provider>  
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
