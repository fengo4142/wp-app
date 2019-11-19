import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../../utils/historyUtils';
import { connect } from 'react-redux';
import LoginForm from '../../pages/Login';
import CustomSidbar from '../../components/CustomSidebar';
import AuthService from '../../services/auth.service'
import { Segment } from 'semantic-ui-react';



class CustomLayout extends Component {
  render() {
    const children = this.props.children;
    return (
      <div>
        <CustomSidbar />
        <Segment>
          {children}
        </Segment>
      </div>       
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(CustomLayout);
