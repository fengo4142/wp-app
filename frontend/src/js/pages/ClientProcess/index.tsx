import React, { Component } from 'react';
import { Grid, Segment, Label, List, Step, Icon, Button, Menu, Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import HomeGrid from '../../components/HomeGrid';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HeaderBreadcrumb from '../../components/HeaderBreadcrumb';
import InfoPanel from '../../components/InfoPanel';

import ProcessStep from './components/ProcessStep';
import './style.scss';
import Hddportlet from './components/HddPortlet';

const options: Highcharts.Options  = {
  title: {
    text: '68%',
    y: 18,
    verticalAlign: 'middle',
    align: 'center'
  },
  credits: {
    enabled: false
  },
  colors: ['#1BA8BB', '#C5D930', '#C1A0C5', '#FAD331', '#96D5DF', ],
  chart: {
    height: 168,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      showInLegend: true,
      cursor: 'pointer',
      innerSize: "60%",
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    type: 'pie',
    innerSize: '80%',
    data: [
      { y: 100 },
      { y: 50 }
    ]
  }],
  legend: {
    align: "right",
    x: -50,
    verticalAlign: "middle",
    layout: "vertical",
    enabled: true,
    floating: true,
    y: 120
  }  
}

interface IProps extends RouteComponentProps {}

interface IState {
  activeBtn: string;
}

class ClientProcess extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeBtn: 'erasure'
    }
  }

  handleMainBtnClick = (e, target) => {
    this.setState({ activeBtn: target.name })
  }

  render() {
    const { activeBtn } = this.state;
    const orderData = [
      { name: 'Account', value: 'Test user-001' },
      { name: 'Order Number', value: '27' },
      { name: 'Order Date', value: 'April 1, 2019' },
      { name: 'Erasure Standard', value: 'Zeros' },
      { name: 'Work Instruction', value: 'Test' },
      { name: 'Reference UID', value: 'UUID 2J3F234' },
    ];
    const hostData = [
      { name: 'I5-2500',  value: '' },
      { name: '220 GB',  value: '' },
      { name: '2 Hard Drives',  value: '' },
      { name: '440 GB Total',  value: '' },
      { name: 'Mini Tower',  value: '' },
      { name: '2UA12750A',  value: '' },
      { name: '10.11.12.16',  value: '' }
    ];
    return (
      <Grid className='hdd-container'>
        <Grid.Row>
          <Grid.Column>
            <HeaderBreadcrumb />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column tablet={16} computer={8} largeScreen={6} widescreen={4} className='hdd-container__column'>
            <Segment color='blue' raised>
              <InfoPanel data={orderData} title='Detail Information' ribbon='Order'/>
            </Segment>
          </Grid.Column>
          <Grid.Column computer={16} largeScreen={7} widescreen={9} className='hdd-container__column hdd-container__segments'>
            <Segment raised className='hdd-container__segments-wrapper' color='blue'>
              <Segment.Group horizontal className='hdd-container__segments__group'>
                <Responsive as={Segment} minWidth={1440} className='hdd-container__segments__group--btn'>
                  <div className='hdd-container__segments__group--btn-wrapper'>
                    <Button circular color='teal'>Erase</Button>
                  </div>
                </Responsive>
                <Segment>
                  <ProcessStep />
                </Segment>
                <Segment className='hdd-container__segments--host'>
                  <InfoPanel data={hostData} />
                </Segment>
              </Segment.Group>
            </Segment>
          </Grid.Column>
          <Grid.Column tablet={16} computer={8} largeScreen={3} widescreen={3} className='hdd-container__column '>
            <Segment color='blue' raised>
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
           <Segment>
            <Menu pointing secondary>
              <Menu.Item
                name='erasure'
                active={activeBtn === 'erasure'}
                onClick={this.handleMainBtnClick}
              />
              <Menu.Item
                name='messages'
                active={activeBtn === 'messages'}
                onClick={this.handleMainBtnClick}
              />
              <Menu.Item
                name='friends'
                active={activeBtn === 'friends'}
                onClick={this.handleMainBtnClick}
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Responsive minWidth={992}>
                    <Button color='teal'>Erase All</Button>
                  </Responsive>
                  <Responsive maxWidth={992}>
                    <Button color='teal' icon='erase' />
                  </Responsive>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Segment basic className={ activeBtn === 'erasure' ? '' : 'pane-hidden'}>
              <Hddportlet />
            </Segment>
            <Segment className={ activeBtn === 'messages' ? '' : 'pane-hidden'}>
              asdf
            </Segment>
            <Segment className={ activeBtn === 'friends' ? '' : 'pane-hidden'}>
              sdfs
            </Segment>
          </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(ClientProcess);
