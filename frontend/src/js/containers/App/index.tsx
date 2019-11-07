import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../../store";
import history from "../../utils/historyUtils";
import LoginForm from '../../pages/Login'
class App extends Component {
  render() {
    const text = 'Quiz App';
    return (
      <Provider store={store}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </Provider>      
    );
  }
}

export default App;
