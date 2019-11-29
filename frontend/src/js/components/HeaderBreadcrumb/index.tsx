import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

export default function HeaderBreadcrumb(props) {
  const sections = props.sections ? props.sections : [
    { key: 'contacts', content: 'Contacts', link: true },
    { key: 'customer', content: 'Customer', active: true },
  ]
  return (
    <Breadcrumb>
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
  );
}
