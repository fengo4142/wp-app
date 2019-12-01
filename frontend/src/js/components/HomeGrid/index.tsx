import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

interface IProps {}

interface IState {
  columnDefs:  any[];
  rowData:  any[];
}

class HomeGrid extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make"
      }, {
        headerName: "Model", field: "model"
      }, {
        headerName: "Price", field: "price"
      }],
      rowData: [{
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }]
    }
  }

  render() {
    return (
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            modules={AllCommunityModules}>
          </AgGridReact>
    )
  }
}

export default HomeGrid;