import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {}

interface IState {}

class Home extends Component<IProps, IState> {
  state = {
  
  }

  render() {
   
    return (        
      <Segment basic>
        <Header as='h3'>Application Content Home</Header>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>        
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Home);
