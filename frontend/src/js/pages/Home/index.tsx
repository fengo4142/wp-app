import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options  = {
    title: {
        text: 'My chart'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
}

interface IProps extends RouteComponentProps {}

interface IState {}

class Home extends Component<IProps, IState> {
  state = {
  
  }

  render() {
   
    return (
      <Segment basic>
        <Header as='h3'>Application Content Home</Header>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </Segment>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Home);
