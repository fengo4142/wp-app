import React from 'react';
import { Segment, Label, List } from 'semantic-ui-react';
import './style.scss'

export default function InfoPanel(props) {
  
  const { data, title, ribbon } = props;
  return (
    <div className='info-panel'>
      { ribbon && <Label as='a' color='green' ribbon>{ribbon}</Label> }
      { title && <span>{title}</span>}
      <List as='ol'>
        { data.map((item, i) => {
          return (<List.Item as='li' value='-' key={i}>
            <span className='info-panel_name'>{item.name}</span>
            <span className='info-panel_value'>{item.value}</span>            
          </List.Item>)
        })}
      </List>
    </div>
  );
}