import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { drawerOpening } from '../../actions';
import { SidebarItem } from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';
import SidebarLogo from './SidebarLogo';
import logo from '../../assets/images/8bit-logo.jpg'

import { Menu, Divider } from 'semantic-ui-react';
import './style.scss';

interface IMapStateToProps {
  minimized: boolean;
  activeItem: string;
}

interface IMapDispatchToProps extends RouteComponentProps<any>{
  minimized: boolean;
  logout: () => any;
  drawerOpening: () => void;
  activeMenu: (item) => void;
}

const urlMockData = [
    { id: 1, name: 'home', path: '/home' },
    { id: 2, name: 'disk_erasure', path: '/disk_erasure' },
    { id: 3, name: 'customer', path: '/customer' },
    { id: 4, name: 'organization', path: '/organization' },
    { id: 5, name: 'order', path: '/order' },
    { id: 6, name: 'operation', path: '/operation' },
    { id: 7, name: 'report', path: '/report' },
    { id: 8, name: 'setting', path: '/setting' },
    { id: 9, name: 'status', path: '/status' },
    { id: 10, name: 'help', path: '/help' },
    { id: 11, name: 'logout', path: '/logout' },
];

class CustomSidebar extends React.Component<IMapDispatchToProps, IMapStateToProps> {
  constructor(props: IMapDispatchToProps) {
    super(props)
    this.state = {
      minimized: false,
      activeItem: 'home',
    }
  }
  
  setActivePath = (pathname: string) => {

    const activePath  = urlMockData.find(item => item.path.startsWith(pathname));
    
    if (activePath !== undefined) {
      const { name } = activePath;
      this.setState({ activeItem: name})
      if (name === 'logout') {
        localStorage.removeItem('token');
        this.props.history.push('/');
      }
    } else {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    const { pathname } = this.props.history.location;
    this.setActivePath(pathname);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setActivePath(this.props.location.pathname);
    }
  };
  
  render() {
    const { minimized, drawerOpening } = this.props;
    const { activeItem } = this.state;

    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SidebarLogo logo={logo} minimized={minimized} onClickDrawer={drawerOpening} />

        <Divider style={{ margin: '0' }}/>
        { !minimized && <SidebarHeader title='Main'/> }

        <SidebarItem name='home' highlight={ activeItem === 'home' ? true : false} label='Home' icon='home'/>
        <SidebarItem name='disk_erasure' highlight={ activeItem === 'disk_erasure' ? true : false} label='Client Process' icon='television'/>
        
        <Divider/>
        { !minimized && <SidebarHeader title='Local'/> }
        
        <SidebarItem name='customer' highlight={ activeItem === 'customer' ? true : false} label='Customer' icon='user'/>
        <SidebarItem name='organization' highlight={ activeItem === 'organization' ? true : false} label='Organization' icon='building'  />
        <SidebarItem name='order' highlight={ activeItem === 'order' ? true : false} label='Order' icon='clock' />
        <SidebarItem name='operation' highlight={ activeItem === 'operation' ? true : false} label='Operation' icon='industry' />
        <SidebarItem name='report' highlight={ activeItem === 'report' ? true : false} label='Report' icon='chart line'/>
        <SidebarItem name='setting' highlight={ activeItem === 'setting' ? true : false} label='Setting' icon='cogs'/>
        <SidebarItem name='status' highlight={ activeItem === 'status' ? true : false} label='Status' icon='sync alternate'/>
        <SidebarItem name='help' highlight={ activeItem === 'help' ? true : false} label='Help' icon='help circle'/>
        <SidebarItem name='logout' label='Log out' icon='sign-out'/>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  minimized: state.shared.minimized
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    drawerOpening: () => { dispatch(drawerOpening()) }
  }
}

export default connect<IMapStateToProps, IMapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(withRouter(CustomSidebar));
