import React from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';
import SidebarLogo from './SidebarLogo';
import { Menu, Divider } from 'semantic-ui-react';
import logo from '../../assets/images/8bit-logo.jpg'
import './style.scss';

interface IProps {
  onClickDrawer(): void;
}
interface IState {
  visible: boolean;
}

export default class CustomSideBar extends React.Component <IProps, IState>{
  constructor(props: IProps) {
    super(props)
  }

  render() {
    const { onClickDrawer } = this.props;
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SidebarLogo logo={logo} onClickDrawer={onClickDrawer}/>
        <SidebarItem highlight={true}  label='Home' icon='home'/>
        <SidebarItem label='Trending' icon='fire'/>
        <SidebarItem label='Followers' icon='spy'/>
        <Divider/>
        <SidebarHeader title='Library'/>
        <SidebarItem label='History' icon='history'/>
        <SidebarItem label='Watch later' icon='clock'/>
        <SidebarItem label='Liked videos' icon='thumbs up'/>
        <Divider/>
        <SidebarHeader title='Library'/>
        <SidebarItem label='Movies and Shows' icon='film'/>
        <SidebarItem label='Report history' icon='flag'/>
        <SidebarItem label='Help' icon='help circle'/>
        <SidebarItem label='Send feedback' icon='comment'/>
      </Menu>
    );
  }
}