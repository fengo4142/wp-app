import React from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';

interface IProps {
  logo: string;
  onClickDrawer(): void;
}

interface IState {}

export default class SidebarLogo extends React.Component<IProps, IState> {

  render() {
    const { logo, onClickDrawer } = this.props;

    return (
      <Menu.Item header className='logo'>
        <Link to='/'><Image src={logo} size='tiny'/></Link>
        <Icon name='list' className='hamburger' onClick={onClickDrawer}></Icon>
      </Menu.Item>
    );
  }
}