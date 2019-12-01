import React, { Component } from 'react';
import { Header, Grid, Segment, Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import HomeGrid from '../../components/HomeGrid'

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HeaderBreadcrumb from '../../components/HeaderBreadcrumb';

const options: Highcharts.Options  = {
    title: {
        text: 'Annual Report'
    },    
    chart: {
        height: 350,
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
        data: [
          {
            y: 100
          },
          {
            y: 50
          }
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

class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
       <Grid>
         <Grid.Row columns={1}>
           <Grid.Column>
              <HeaderBreadcrumb />
           </Grid.Column>
         </Grid.Row>
         <Grid.Row columns={2}>
           <Grid.Column mobile={16} computer={8}>
             <Segment>
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
              </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} computer={8}>
            <Segment>
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column columns={1}>
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

export default connect(mapStateToProps, null)(Home);
