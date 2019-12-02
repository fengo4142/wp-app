import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { Segment, Input, Button, Icon } from 'semantic-ui-react';

interface IProps {
  columnDefs:  any[];
  rowData:  any[];
}

interface IState {}

class AgDataGrid extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { columnDefs, rowData } = this.props;

    return (
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        modules={AllCommunityModules}>
      </AgGridReact>
    )
  }
}

export default AgDataGrid;