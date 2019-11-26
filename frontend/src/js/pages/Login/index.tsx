import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Header, Image, Message, Segment, Menu } from 'semantic-ui-react'
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { loginRequest } from "../../actions";
import { LoginRequestAction, LoginRequestPayload, LoginState, LoginAction, LoginActionType } from "../../constants";
interface IMapStateToProps {
  username_or_email: string;
  password: string;
}

interface IMapDispatchToProps {
  loginRequest: (payload: LoginRequestPayload) => void;
}

class LoginForm extends Component<IMapDispatchToProps, IMapStateToProps> {
  constructor(props) {
    super(props)
  }

  state = {
    username_or_email: '',
    password: ''
  }

  render() {
    const { loginRequest } = this.props;
    const { username_or_email, password } = this.state;

    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='E-mail address'
                value={this.state.username_or_email}
                onChange={ event => this.setState({ username_or_email: event.target.value })}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password}
                onChange={ event => this.setState({ password: event.target.value })}
              />

              <Button color='teal' fluid size='large' onClick={ event => loginRequest({ username_or_email, password })}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Menu.Item as='a' href='/signup'>Sign Up</Menu.Item>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state: LoginState) => state;

const mapDispatchToProps = (dispatch: Dispatch<LoginRequestAction>) => {
  return {
    loginRequest: (payload: LoginRequestPayload) => {
      dispatch(loginRequest(payload))
    }
  }
}

export default connect<IMapStateToProps, IMapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(LoginForm);