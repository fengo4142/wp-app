import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from "semantic-ui-react";
import './style.scss';

export function SidebarItem(props) {

  const highlight = props.highlight ? 'highlight-item' : null;
  return (
    <div>
      <Link to={props.submenu ? props.submenu[0].name : props.name}>
      <Menu.Item className={['sidebar-item', highlight].join(' ')}>
        <div className='sidebar-item-alignment-container'>
          <span><Icon size='large' name={props.icon}/> </span>
          <span>{props.label}</span>
          { props.submenu && <Icon className='arrow-icon' name={props.subicon}/> }
        </div>
      </Menu.Item>
      </Link>
      { props.submenu &&
        <div className='sidebar-item-alignment-container'>
          <div className={`sidebar-item-submenu-container ${highlight}`}>
            {props.submenu.map(item => {
              return ( <div key={item.name}>
                  <Link to={item.name} >
                    <Menu.Item className="sidebar-item submenu-item">
                      <li>{item.label}</li>
                    </Menu.Item>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      }
    </div>
  );
}