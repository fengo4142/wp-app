import React from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';
import SidebarLogo from './SidebarLogo';
import { Menu, Divider } from 'semantic-ui-react';
import logo from '../../assets/images/8bit-logo.jpg'
import './style.scss';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { drawerOpening, activeMenu } from '../../actions/shared.actions';

interface IMapDispatchToProps {
  minimized: boolean;
  activeItem: string;
  drawerOpening: () => void;
  activeMenu: () => void;
}

interface IMapStateToProps {
  minimized: boolean;
  activeItem: string;
}

class CustomSideBar extends React.Component<IMapDispatchToProps, IMapStateToProps> {
  constructor(props: IMapDispatchToProps) {
    super(props)
  }

  render() {
    const { minimized, activeItem, drawerOpening } = this.props;

    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SidebarLogo logo={logo} minimized={minimized} onClickDrawer={drawerOpening} />

        <Divider style={{ margin: '0' }}/>
        { !minimized && <SidebarHeader title='Main'/> }

        <SidebarItem name='home' highlight={ activeItem === 'home' ? true : false} label='Home' icon='home'/>
        <SidebarItem name='disk_erasure' highlight={ activeItem === 'process' ? true : false} label='Client Process' icon='television'/>
        
        <Divider/>
        { !minimized && <SidebarHeader title='Local'/> }
        
        <SidebarItem name='customer' highlight={ activeItem === 'customer' ? true : false} label='Customer' icon='user' onClickMenu={activeMenu} />
        <SidebarItem name='orgnization' highlight={ activeItem === 'organization' ? true : false} label='Organization' icon='building' onClickMenu={activeMenu} />
        <SidebarItem name='order' highlight={ activeItem === 'order' ? true : false} label='Order' icon='clock' onClickMenu={activeMenu} />
        <SidebarItem name='operation' highlight={ activeItem === 'operation' ? true : false} label='Operation' icon='industry' />
        <SidebarItem name='report' highlight={ activeItem === 'report' ? true : false} label='Report' icon='chart line'/>
        <SidebarItem name='setting' highlight={ activeItem === 'setting' ? true : false} label='Setting' icon='cogs'/>
        <SidebarItem name='status' highlight={ activeItem === 'status' ? true : false} label='Status' icon='sync alternate'/>
        <SidebarItem name='help' highlight={ activeItem === 'help' ? true : false} label='Help' icon='help circle'/>
        <SidebarItem label='Log out' icon='sign-out'/>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  minimized: state.shared.minimized,
  activeItem: state.shared.activeItem
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    drawerOpening: () => { dispatch(drawerOpening())},
    activeMenu: () => {
      const item: any = '';
      dispatch(activeMenu(item))
    }
  }
}

export default connect<IMapStateToProps, IMapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(CustomSideBar);
