import React from 'react';
import { Menu } from 'semantic-ui-react';
import './style.scss';

export function SidebarHeader(props) {
  const heading = props.title ? props.title.toUpperCase() : '';
  return (
    <Menu.Item>
      <Menu.Header className='side-bar-header'>{heading}</Menu.Header>
    </Menu.Item>
  );
}