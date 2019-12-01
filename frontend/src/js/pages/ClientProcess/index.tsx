import React, { Component } from 'react';
import { Grid, Segment, Label, List, Step, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import HomeGrid from '../../components/HomeGrid';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HeaderBreadcrumb from '../../components/HeaderBreadcrumb';
import InfoPanel from '../../components/InfoPanel';

const options: Highcharts.Options  = {
  title: {
    text: '80%',
    y: 18,
    verticalAlign: 'middle',
    align: 'center'
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
  columnDefs: object;
  rowData: object;
}

class ClientProcess extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const orderData = [
      { name: 'Account', value: 'Test' },
      { name: 'Order Number', value: 'Test' },
      { name: 'Order Date', value: 'Test' },
      { name: 'Erasure Standard', value: 'Test' },
      { name: 'Work Instruction', value: 'Test' },
      { name: 'Reference UID', value: 'Test' },
    ];
    const hostData = [
      { name: 'I5-2500',  value: '' },
      { name: '220 GB',  value: '' },
      { name: '2 Hard Drives',  value: '' },
      { name: '440 GB Total',  value: '' },
      { name: 'Mini Tower',  value: '' },
      { name: '2UA12750A',  value: '' },
      { name: '10.11.12.16',  value: '' }
    ]
    return (
      <Grid style={{padding: '1em 2em' }}>
        <Grid.Row>
          <Grid.Column>
            <HeaderBreadcrumb />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Segment color='blue' raised>
              <InfoPanel data={orderData} title='Detail Information' ribbon='Order'/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment raised style={{padding: 0}} color='blue'>
              <Segment.Group horizontal style={{ margin: 0 }}>
                <Segment style={{display: 'grid'}}>
                  <div style={{ margin: 'auto'}}>
                    <Button circular color='teal' style={{ lineHeight: '5.75em', minWidth: '100px' }}>Erase</Button>
                  </div>
                </Segment>
                <Segment>
                  <Step.Group fluid style={{ margin: '0.25em 0' }}>
                    <Step completed style={{flex: 'none', padding: '0.375em 2em'}}>
                      <Icon name='check circle outline' style={{ fontSize: '1.75em' }}/>
                      <Step.Content>
                        <Step.Title>Audit</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                  <Step.Group fluid style={{ margin: '0.25em 0' }}>
                    <Step style={{flex: 'none', padding: '0.375em 2em'}}>
                      <Icon name='check circle outline' style={{ fontSize: '1.75em', opacity: 0.35 }}/>
                      <Step.Content>
                        <Step.Title>Data Erasure</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                  <Step.Group fluid style={{ margin: '0.25em 0' }}>
                    <Step style={{flex: 'none', padding: '0.375em 2em'}}>
                      <Icon name='check circle outline' style={{ fontSize: '1.75em', opacity: 0.35 }}/>
                      <Step.Content>
                        <Step.Title>Grading</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                  <Step.Group fluid style={{ margin: '0.25em 0' }}>
                    <Step style={{flex: 'none', padding: '0.375em 2em'}}>
                      <Icon name='check circle outline' style={{ fontSize: '1.75em', opacity: 0.35 }}/>
                      <Step.Content>
                        <Step.Title>Diagnostics</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </Segment>
                <Segment style={{ margin: 'auto' }}>
                  <InfoPanel data={hostData} />
                </Segment>
              </Segment.Group>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
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
            <Segment className="ag-theme-balham" style={{ height: '300px' }}>            
              <HomeGrid />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(ClientProcess);
