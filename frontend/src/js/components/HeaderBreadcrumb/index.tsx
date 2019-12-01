import React from 'react';
import { Breadcrumb, Segment } from 'semantic-ui-react';

export default function HeaderBreadcrumb(props) {
  const sections = props.sections ? props.sections : [
    { key: 'contacts', content: 'Contacts', link: true },
    { key: 'customer', content: 'Customer', active: true },
  ]
  return (
    <Segment>
      <Breadcrumb size='small' style={{ margin: '0px 5px'}}>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        {
          sections.map((item, i, arr)=> {
            if (arr.length - 1 === i) {
              return (<Breadcrumb.Section key={item.key}>{item.content}</Breadcrumb.Section>)
            }
            return (
              <span key={item.key}>
                <Breadcrumb.Section link>{item.content}</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
              </span>
            )
          })
        }      
      </Breadcrumb>
    </Segment>
  );
}
