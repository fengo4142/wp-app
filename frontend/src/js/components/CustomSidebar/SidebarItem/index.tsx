import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from "semantic-ui-react";
import './style.scss';

export function SidebarItem(props) {

  const highlight = props.highlight ? 'highlight-item' : null;
  return (
    <Link to={props.name}>
      <Menu.Item className={['sidebar-item', highlight].join(' ')}>
        <div className='sidebar-item-alignment-container'>
          <span><Icon size='large' name={props.icon}/> </span>
          <span>{props.label}</span>
        </div>
      </Menu.Item>
    </Link>
  );
}