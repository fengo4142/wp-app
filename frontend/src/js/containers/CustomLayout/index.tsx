import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Dropdown } from 'semantic-ui-react';
import { logout } from "../../actions/auth.actions";
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import history from "../../utils/historyUtils";
import CustomSidebar from "../../components/CustomSidebar";
import './style.scss'
interface IProps extends RouteComponentProps {
  animation: 'overlay' | 'push' | 'scale down' | 'uncover' | 'slide out' | 'slide along' | undefined,
  direction: 'top' | 'right' | 'bottom' | 'left' | undefined,
  visible: boolean,
  dimmed: boolean,
}

interface IState {
  visible: boolean;
  minimized: boolean;
  activeItem: string;
}

class CustomLayout extends Component<IProps, IState> {
  state = {
    animation: 'uncover',
    direction: 'left',
    dimmed: false,
    visible: true,
    activeItem: 'home',
    minimized: false
  }
  handleItemClick = (event, { item }) => {
    this.setState({ activeItem: item.name });
    history.push(item.name)
  }

  onClickDrawer = () => {
    
    this.setState(prevState => ({ visible: !prevState.visible }));
    this.setState(prevState => ({ minimized: !prevState.minimized }));
    setTimeout(() => {
      this.setState(prevState => ({ visible: !prevState.visible }));
    }, 500)
    
  }

  render() {
    const { animation, direction, visible, dimmed, activeItem } = this.state;

    return (
      <Sidebar.Pushable as={Segment}>
         <Sidebar
            animation='uncover'
            direction='left'
            icon='labeled'
            visible={visible}
            width='thin'
          >
          <CustomSidebar onClickDrawer={this.onClickDrawer}/>   
        </Sidebar>
        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic>
            {this.props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomLayout);
