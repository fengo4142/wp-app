import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import history from "./utils/historyUtils";
import CustomLayout from './containers/CustomLayout'
import '../scss/index.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={CustomLayout}/>
        </Router>
      </Provider>      
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
