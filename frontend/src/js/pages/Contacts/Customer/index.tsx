import React from 'react';
import { Grid, Segment, Input, Button } from 'semantic-ui-react';
import HeaderBreadcrumb from '../../../components/HeaderBreadcrumb';
import AgDataGrid from '../../../components/AgDataGrid';

const columnDefs = [
    { headerName: "FIRST NAME", field: "first_name"}, 
    { headerName: "LAST NAME", field: "last_name"}, 
    { headerName: "EMAIL", field: "email"},
    { headerName: "PHONE", field: "phone"},
    { headerName: "ADDRESS", field: "address"},
    { headerName: "DATE CREATED", field: "date_created"}
];
const rowData = [
    { first_name: "Ronald", last_name: 'Mix', email: 'ronald.mix@gmail.com', phone: "1039248223", address: 'House 3921 St. Kunio FL', date_created: '2019-12-01' }, 
    { first_name: "Ronald", last_name: 'Mix', email: 'ronald.mix@gmail.com', phone: "1039248223", address: 'House 3921 St. Kunio FL', date_created: '2019-12-01' }, 
    { first_name: "Ronald", last_name: 'Mix', email: 'ronald.mix@gmail.com', phone: "1039248223", address: 'House 3921 St. Kunio FL', date_created: '2019-12-01' }, 
];

class Customer extends React.Component {
  
  render() {
    
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <HeaderBreadcrumb />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              <Segment basic style={{ display: 'flex'}}>
                  <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...'/>
                  <Button color='green' style={{ marginLeft: 'auto'}}>Save</Button>
                  <Button.Group>
                    <Button positive>XLSX</Button>
                    <Button.Or text='or' />
                    <Button positive>CSV</Button>
                  </Button.Group>
              </Segment>
              <Segment basic className="ag-theme-balham" style={{ height: '400px'}}>              
                <AgDataGrid columnDefs={columnDefs} rowData={rowData}/>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Customer;