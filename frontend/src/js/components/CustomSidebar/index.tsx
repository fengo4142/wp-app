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

class CustomSidebar extends React.Component<IMapDispatchToProps, IMapStateToProps> {
  constructor(props: IMapDispatchToProps) {
    super(props)
    this.state = {
      minimized: false,
      activeItem: '',
    }
  }
  setActivePath = (pathname: string) => {
    if (pathname.startsWith('/home')) {
      this.setState({ activeItem: 'home' });
    } else if (pathname.startsWith('/customer')) {
      this.setState({ activeItem: 'customer' });
    } else if (pathname.startsWith('/disk_erasure')) {
      this.setState({ activeItem: 'disk_erasure' });
    } else if (pathname.startsWith('/organization')) {
      this.setState({ activeItem: 'organization' });
    } else if (pathname.startsWith('/operation')) {
      this.setState({ activeItem: 'operation' });
    } else if (pathname.startsWith('/report')) {
      this.setState({ activeItem: 'report' });
    } else if (pathname.startsWith('/setting')) {
      this.setState({ activeItem: 'setting' });
    } else if (pathname.startsWith('/status')) {
      this.setState({ activeItem: 'status' });
    } else if (pathname.startsWith('/logout')) {
      localStorage.removeItem('token');
      this.props.history.push('/')
      // this.setState({ activeItem: 'home' })
    } else {
      this.setState({ activeItem: 'home' })
      this.props.history.push('/')
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
        <SidebarItem name='disk_erasure' highlight={ activeItem === 'process' ? true : false} label='Client Process' icon='television'/>
        
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
