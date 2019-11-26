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

const menuList = [
    { id: 1, name: 'home', path: '/home', label: 'Home', icon: 'home' },
    { id: 2, name: 'disk_erasure', path: '/disk_erasure', label: 'Client Process', icon: 'television' },
    { id: 3, name: 'contacts', path: '/contacts', label: 'Contacts', icon: 'user',
      submenu: [ 
        { id: 31, name: 'customer', path: '/customer', label: 'Customer', icon: '' },
        { id: 32, name: 'organization', path: '/organization', label: 'Organization', icon: 'building' },
      ]
    },
    { id: 4, name: 'order', path: '/order', label: 'Order', icon: 'clock' },
    { id: 5, name: 'operation', label: 'Operation', icon: 'industry', path: '/operation',
      submenu: [
        { id: 51, name: 'host', path: '/host', label: 'Host', icon: '' },
        { id: 52, name: 'queue', path: '/queue', label: 'Queue', icon: '' }
      ]
    },
    { id: 6, name: 'report', path: '/report', label: 'Report', icon: 'chart line' },
    { id: 7, name: 'setting', path: '/setting', label: 'Setting', icon: 'cogs' },
    { id: 8, name: 'status', path: '/status', label: 'Status', icon: 'sync alternate' },
    { id: 9, name: 'help', path: '/help', label: 'Help', icon: 'help circle' },
    { id: 10, name: 'logout', path: '/logout', label: 'Sign out', icon: 'sign-out' },
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

    const activeMenuItem  = menuList.find(item => item.path.startsWith(pathname) ||
     (item.submenu && item.submenu.find(subitem => subitem.path.startsWith(pathname))));
    
    if (activeMenuItem !== undefined) {
      const { name } = activeMenuItem;
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

        <Divider style={{ margin: '0' }} />
        { !minimized && <SidebarHeader title='Main'/> }

        {
          menuList.map(item => {
            return <SidebarItem name={item.name} 
              key={item.name}
              highlight={activeItem === item.name ? true : false}
              label={item.label} icon={item.icon}
              subicon={activeItem === item.name ? "angle up" : "angle down"}
              submenu={item.submenu} />
          })
        }
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
