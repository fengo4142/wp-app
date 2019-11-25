import React, { Component } from 'react';
import { Segment, Sidebar } from 'semantic-ui-react';
import { drawerOpening } from "../../actions/shared.actions";
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import history from "../../utils/historyUtils";
import CustomSidebar from "../../components/CustomSidebar";
import './style.scss'

interface IProps extends RouteComponentProps {
  animation: 'overlay' | 'push' | 'scale down' | 'uncover' | 'slide out' | 'slide along' | undefined,
  direction: 'top' | 'right' | 'bottom' | 'left' | undefined,
  visible: boolean;
  minimized: boolean;
  activeItem: string;
}

interface IState {
  visible: boolean;
  minimized: boolean;
  activeItem: string;
}

class CustomLayout extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    const { visible, minimized, activeItem } = this.props;

    return (
      <Sidebar.Pushable as={Segment}>
         <Sidebar
            animation='uncover'
            direction='left'
            icon='labeled'
            visible={visible}
            width='thin'
            className={minimized ? 'minimized' : ''}
          >
          <CustomSidebar minimized={minimized} activeItem={activeItem} />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            {this.props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
const mapStateToProps = state => ({
  visible: state.shared.visible,
  minimized: state.shared.minimized,  
  activeItem: state.shared.activeItem
});


export default connect(mapStateToProps, null)(CustomLayout);
