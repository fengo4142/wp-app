import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';
import store from "../../store";
import LoginForm from '../../pages/Login'
import CustomSidbar from '../../components/CustomSidebar'
class CustomLayout extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={CustomSidbar} />           
        </Switch>
      </div>
    );
  }
}

export default CustomLayout;
