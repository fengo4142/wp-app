import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';
import store from "../../store";
import LoginForm from '../../pages/Login'
import CustomSidbar from '../../components/CustomSidebar'
class CustomLayout extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/home" component={CustomSidbar} />           
        </Switch>
    );
  }
}

export default CustomLayout;
