import React from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';

interface IProps {
  logo: string;
  minimized: boolean;
  onClickDrawer(): void;
}

interface IState {}

export default class SidebarLogo extends React.Component<IProps, IState> {

  render() {
    const { logo, minimized, onClickDrawer } = this.props;

    return (
      <Menu.Item header className='logo'>
        { !minimized && 
          <Link className='logo-link' to='/'>
            <Image className='logo-link__image' src={logo} size='tiny'/>
          </Link> }
        <Icon name='list' className='logo-hamburger' onClick={onClickDrawer}></Icon>
      </Menu.Item>
    );
  }
}