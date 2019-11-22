import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import history from "./utils/historyUtils";
import CustomLayout from './containers/CustomLayout'
import LoginForm from './pages/Login'
import AuthService from './services/auth.service'
import '../scss/index.scss';
import Home from './components/Home';

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
              <Route path="/login" component={LoginForm} />              
              <CustomLayout {...this.props}>
                  <PrivateRoute path="/home" component={Home} />
              </CustomLayout>
            </Switch>
        </Router>
      </Provider>  
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
